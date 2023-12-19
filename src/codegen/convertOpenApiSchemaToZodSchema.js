const ts = require("typescript");
const { createZodSchemaIdentifier } = require("./createZodSchemaIdentifier");

const { factory } = ts;

/**
 * @param {ts.Expression} expression
 */
const createNullableCallExpression = (expression) => {
  return factory.createCallExpression(
    factory.createPropertyAccessExpression(
      expression,
      factory.createIdentifier("nullable"),
    ),
    undefined,
    undefined,
  );
};

/**
 * @typedef {import("openapi-types").OpenAPIV3.SchemaObject} SchemaObject
 * @typedef {import("openapi-types").OpenAPIV3.ReferenceObject} ReferenceObject
 * @param {SchemaObject | ReferenceObject} openApiSchema
 * @returns {ts.Expression}
 */
function convertOpenApiSchemaToZodSchema(openApiSchema) {
  if ("allOf" in openApiSchema) {
    if (openApiSchema.allOf?.length === 1) {
      const firstSchema = openApiSchema.allOf[0];
      if (!firstSchema) {
        throw new Error("Theoretically unreachable");
      }
      return convertOpenApiSchemaToZodSchema(firstSchema);
    }
    const innerCallExpression = factory.createCallExpression(
      factory.createPropertyAccessExpression(
        factory.createIdentifier("zod"),
        factory.createIdentifier("intersection"),
      ),
      undefined,
      openApiSchema.allOf?.map((childSchema) =>
        convertOpenApiSchemaToZodSchema(childSchema),
      ) || [],
    );
    return openApiSchema.nullable
      ? createNullableCallExpression(innerCallExpression)
      : innerCallExpression;
  }
  if ("anyOf" in openApiSchema) {
    if (openApiSchema.anyOf?.length === 1) {
      const firstSchema = openApiSchema.anyOf[0];
      if (!firstSchema) {
        throw new Error("Theoretically unreachable");
      }
      return convertOpenApiSchemaToZodSchema(firstSchema);
    }
    const innerCallExpression = factory.createCallExpression(
      factory.createPropertyAccessExpression(
        factory.createIdentifier("zod"),
        factory.createIdentifier("union"),
      ),
      undefined,
      [
        factory.createArrayLiteralExpression(
          openApiSchema.anyOf?.map((childSchema) =>
            convertOpenApiSchemaToZodSchema(childSchema),
          ) || [],
        ),
      ],
    );
    return openApiSchema.nullable
      ? createNullableCallExpression(innerCallExpression)
      : innerCallExpression;
  }
  if ("oneOf" in openApiSchema) {
    if (openApiSchema.oneOf?.length === 1) {
      const firstSchema = openApiSchema.oneOf[0];
      if (!firstSchema) {
        throw new Error("Theoretically unreachable");
      }
      return convertOpenApiSchemaToZodSchema(firstSchema);
    }
    const innerCallExpression = factory.createCallExpression(
      factory.createPropertyAccessExpression(
        factory.createIdentifier("zod"),
        factory.createIdentifier("union"),
      ),
      undefined,
      [
        factory.createArrayLiteralExpression(
          openApiSchema.oneOf?.map((childSchema) =>
            convertOpenApiSchemaToZodSchema(childSchema),
          ) || [],
        ),
      ],
    );
    return openApiSchema.nullable
      ? createNullableCallExpression(innerCallExpression)
      : innerCallExpression;
  }
  if ("$ref" in openApiSchema) {
    /**
     * The ref is formatted like "#/components/schema/Foo". Deliberately
     * omitting the "#" from the path.
     */
    const ref = openApiSchema["$ref"];
    const refName = ref.split("/").at(-1);
    if (!refName) {
      throw new Error(`Could not derive refName from ${ref}`);
    }
    return createZodSchemaIdentifier(refName);
  }

  switch (openApiSchema.type) {
    case "array": {
      const innerCallExpression = factory.createCallExpression(
        factory.createPropertyAccessExpression(
          factory.createIdentifier("zod"),
          factory.createIdentifier("array"),
        ),
        undefined,
        [convertOpenApiSchemaToZodSchema(openApiSchema.items)],
      );
      return openApiSchema.nullable
        ? createNullableCallExpression(innerCallExpression)
        : innerCallExpression;
    }

    case "object": {
      const innerCallExpression = factory.createCallExpression(
        factory.createPropertyAccessExpression(
          factory.createIdentifier("zod"),
          factory.createIdentifier("object"),
        ),
        undefined,
        [
          factory.createObjectLiteralExpression(
            Object.entries(openApiSchema.properties || {}).map(
              ([propertyName, propertySchema]) => {
                return factory.createPropertyAssignment(
                  factory.createIdentifier(propertyName),
                  convertOpenApiSchemaToZodSchema(propertySchema),
                );
              },
            ),
          ),
        ],
      );
      return openApiSchema.nullable
        ? createNullableCallExpression(innerCallExpression)
        : innerCallExpression;
    }
    case "number":
    case "boolean":
    case "integer":
    case "string": {
      if (openApiSchema.enum) {
        const innerCallExpression = factory.createCallExpression(
          factory.createPropertyAccessExpression(
            factory.createIdentifier("zod"),
            factory.createIdentifier("union"),
          ),
          undefined,
          [
            factory.createArrayLiteralExpression(
              openApiSchema.enum.map((item) => {
                /**
                 * @param {unknown} item
                 */
                const getLiteral = (item) => {
                  switch (typeof item) {
                    case "string": {
                      return factory.createStringLiteral(item);
                    }
                    case "number": {
                      return factory.createNumericLiteral(item);
                    }
                    case "boolean": {
                      return item
                        ? factory.createTrue()
                        : factory.createFalse();
                    }
                    default: {
                      throw new Error(`Unhandled type: ${typeof item}`);
                    }
                  }
                };
                return factory.createCallExpression(
                  factory.createPropertyAccessExpression(
                    factory.createIdentifier("zod"),
                    "literal",
                  ),
                  undefined,
                  [getLiteral(item)],
                );
              }),
            ),
          ],
        );

        return openApiSchema.nullable
          ? createNullableCallExpression(innerCallExpression)
          : innerCallExpression;
      }

      const innerCallExpression = factory.createCallExpression(
        factory.createPropertyAccessExpression(
          factory.createIdentifier("zod"),
          factory.createIdentifier(
            openApiSchema.type === "integer" ? "number" : openApiSchema.type,
          ),
        ),
        undefined,
        undefined,
      );

      return openApiSchema.nullable
        ? createNullableCallExpression(innerCallExpression)
        : innerCallExpression;
    }

    default: {
      throw new Error(
        `Unexpected schema:\n${JSON.stringify(openApiSchema, null, 2)}`,
      );
    }
  }
}

module.exports.convertOpenApiSchemaToZodSchema =
  convertOpenApiSchemaToZodSchema;
