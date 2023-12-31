const { pipe } = require("fp-ts/lib/function");
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
 * @param {ts.Expression} expression
 * @param {string} description
 */
const createDescriptionCallExpression = (expression, description) => {
  return factory.createCallExpression(
    factory.createPropertyAccessExpression(
      expression,
      factory.createIdentifier("describe"),
    ),
    undefined,
    [factory.createStringLiteral(description)],
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
    return pipe(
      openApiSchema.allOf?.map((childSchema) =>
        convertOpenApiSchemaToZodSchema(childSchema),
      ) || [],

      (carry) => {
        /**
         * Wrap with zod.union([…]), but only if there are multiple options,
         * because `zod.union([zod.literal("foo")])` is redundant.
         */
        const [firstSchema, ...restSchema] = carry;
        if (firstSchema && restSchema.length === 0) {
          return firstSchema;
        }
        return factory.createCallExpression(
          factory.createPropertyAccessExpression(
            factory.createIdentifier("z"),
            factory.createIdentifier("intersection"),
          ),
          undefined,
          openApiSchema.allOf?.map((childSchema) =>
            convertOpenApiSchemaToZodSchema(childSchema),
          ) || [],
        );
      },
      /**
       * Wrap with `zod.nullable(…)`, if applicable.
       */
      (carry) =>
        openApiSchema.nullable ? createNullableCallExpression(carry) : carry,

      /**
       * Chain `zod.description(…)`, if applicable.
       */
      (carry) =>
        openApiSchema.description
          ? createDescriptionCallExpression(carry, openApiSchema.description)
          : carry,
    );
  }
  if ("anyOf" in openApiSchema) {
    return pipe(
      openApiSchema.anyOf?.map((childSchema) =>
        convertOpenApiSchemaToZodSchema(childSchema),
      ) || [],

      (carry) => {
        /**
         * Wrap with zod.union([…]), but only if there are multiple options,
         * because `zod.union([zod.literal("foo")])` is redundant.
         */
        const [firstSchema, ...restSchema] = carry;
        if (firstSchema && restSchema.length === 0) {
          return firstSchema;
        }
        return factory.createCallExpression(
          factory.createPropertyAccessExpression(
            factory.createIdentifier("z"),
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
      },
      /**
       * Wrap with `zod.nullable(…)`, if applicable.
       */
      (carry) =>
        openApiSchema.nullable ? createNullableCallExpression(carry) : carry,

      /**
       * Chain `zod.description(…)`, if applicable.
       */
      (carry) =>
        openApiSchema.description
          ? createDescriptionCallExpression(carry, openApiSchema.description)
          : carry,
    );
  }
  if ("oneOf" in openApiSchema) {
    return pipe(
      openApiSchema.oneOf?.map((childSchema) =>
        convertOpenApiSchemaToZodSchema(childSchema),
      ) || [],

      (carry) => {
        /**
         * Wrap with zod.union([…]), but only if there are multiple options,
         * because `zod.union([zod.literal("foo")])` is redundant.
         */
        const [firstSchema, ...restSchema] = carry;
        if (firstSchema && restSchema.length === 0) {
          return firstSchema;
        }
        return factory.createCallExpression(
          factory.createPropertyAccessExpression(
            factory.createIdentifier("z"),
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
      },
      /**
       * Wrap with `zod.nullable(…)`, if applicable.
       */
      (carry) =>
        openApiSchema.nullable ? createNullableCallExpression(carry) : carry,

      /**
       * Chain `zod.description(…)`, if applicable.
       */
      (carry) =>
        openApiSchema.description
          ? createDescriptionCallExpression(carry, openApiSchema.description)
          : carry,
    );
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
      return pipe(
        factory.createCallExpression(
          factory.createPropertyAccessExpression(
            factory.createIdentifier("z"),
            factory.createIdentifier("array"),
          ),
          undefined,
          [
            openApiSchema.items
              ? convertOpenApiSchemaToZodSchema(openApiSchema.items)
              : factory.createCallExpression(
                  factory.createPropertyAccessExpression(
                    factory.createIdentifier("z"),
                    factory.createIdentifier("unknown"),
                  ),
                  undefined,
                  [],
                ),
          ],
        ),
        /**
         * Wrap with `zod.nullable(…)`, if applicable.
         */
        (carry) =>
          openApiSchema.nullable ? createNullableCallExpression(carry) : carry,

        /**
         * Chain `zod.description(…)`, if applicable.
         */
        (carry) =>
          openApiSchema.description
            ? createDescriptionCallExpression(carry, openApiSchema.description)
            : carry,
      );
    }

    case "object": {
      return pipe(
        factory.createCallExpression(
          factory.createPropertyAccessExpression(
            factory.createIdentifier("z"),
            factory.createIdentifier("object"),
          ),
          undefined,
          [
            factory.createObjectLiteralExpression(
              Object.entries(openApiSchema.properties ?? {}).map(
                ([propertyName, propertySchema]) => {
                  return factory.createPropertyAssignment(
                    factory.createIdentifier(propertyName),
                    convertOpenApiSchemaToZodSchema(propertySchema),
                  );
                },
              ),
            ),
          ],
        ),
        /**
         * Chain with `.passthrough(…)`, if applicable.
         */
        (carry) =>
          openApiSchema.additionalProperties
            ? factory.createCallExpression(
                factory.createPropertyAccessExpression(
                  carry,
                  factory.createIdentifier("passthrough"),
                ),
                undefined,
                undefined,
              )
            : carry,
        /**
         * Wrap with `zod.nullable(…)`, if applicable.
         */
        (carry) =>
          openApiSchema.nullable ? createNullableCallExpression(carry) : carry,

        /**
         * Chain `zod.description(…)`, if applicable.
         */
        (carry) =>
          openApiSchema.description
            ? createDescriptionCallExpression(carry, openApiSchema.description)
            : carry,
      );
    }
    case "number":
    case "boolean":
    case "integer":
    case "string": {
      if (openApiSchema.enum) {
        const callExpressions = openApiSchema.enum.map((item) => {
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
                return item ? factory.createTrue() : factory.createFalse();
              }
              default: {
                throw new Error(`Unhandled type: ${typeof item}`);
              }
            }
          };
          return factory.createCallExpression(
            factory.createPropertyAccessExpression(
              factory.createIdentifier("z"),
              "literal",
            ),
            undefined,
            [getLiteral(item)],
          );
        });

        return pipe(
          callExpressions,
          (carry) => {
            /**
             * Wrap with zod.union([…]), but only if there are multiple options,
             * because `zod.union([zod.literal("foo")])` is redundant.
             */
            const [firstExpression, ...restExpressions] = carry;
            if (firstExpression && restExpressions.length === 0) {
              return firstExpression;
            }
            return factory.createCallExpression(
              factory.createPropertyAccessExpression(
                factory.createIdentifier("z"),
                factory.createIdentifier("union"),
              ),
              undefined,
              [factory.createArrayLiteralExpression(carry)],
            );
          },
          /**
           * Wrap with `zod.nullable(…)`, if applicable.
           */
          (carry) =>
            openApiSchema.nullable
              ? createNullableCallExpression(carry)
              : carry,

          /**
           * Chain `zod.description(…)`, if applicable.
           */
          (carry) =>
            openApiSchema.description
              ? createDescriptionCallExpression(
                  carry,
                  openApiSchema.description,
                )
              : carry,
        );
      }

      return pipe(
        factory.createCallExpression(
          factory.createPropertyAccessExpression(
            factory.createIdentifier("z"),
            factory.createIdentifier(
              openApiSchema.type === "integer" ? "number" : openApiSchema.type,
            ),
          ),
          undefined,
          undefined,
        ),
        /**
         * Wrap with `zod.nullable(…)`, if applicable.
         */
        (carry) =>
          openApiSchema.nullable ? createNullableCallExpression(carry) : carry,

        /**
         * Chain `zod.description(…)`, if applicable.
         */
        (carry) =>
          openApiSchema.description
            ? createDescriptionCallExpression(carry, openApiSchema.description)
            : carry,
      );
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
