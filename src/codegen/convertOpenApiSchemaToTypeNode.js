const { pipe } = require("fp-ts/lib/function");
const ts = require("typescript");

const { factory } = ts;

/**
 * @typedef {import("openapi-types").OpenAPIV3.SchemaObject} SchemaObject
 * @typedef {import("openapi-types").OpenAPIV3.ReferenceObject} ReferenceObject
 */

/**
 * @param {ts.TypeNode} typeNode
 */
function createMaybeTypedTypeNode(typeNode) {
  return factory.createTypeReferenceNode(factory.createIdentifier("Maybe"), [
    typeNode,
  ]);
}

/**
 * @param {SchemaObject | ReferenceObject} openApiSchema
 * @returns {ts.TypeNode}
 */
function convertOpenApiSchemaToTypeNode(openApiSchema) {
  if (!openApiSchema) {
    console.warn(`Empty schema`);
    return factory.createTypeReferenceNode("unknown");
  }

  if ("allOf" in openApiSchema) {
    const innerTypeNode = factory.createIntersectionTypeNode(
      openApiSchema.allOf?.map((childSchema) =>
        convertOpenApiSchemaToTypeNode(childSchema),
      ) || [],
    );

    return openApiSchema.nullable
      ? createMaybeTypedTypeNode(innerTypeNode)
      : innerTypeNode;
  }
  if ("anyOf" in openApiSchema) {
    const innerTypeNode = factory.createUnionTypeNode(
      openApiSchema.anyOf?.map((childSchema) =>
        convertOpenApiSchemaToTypeNode(childSchema),
      ) || [],
    );

    return openApiSchema.nullable
      ? createMaybeTypedTypeNode(innerTypeNode)
      : innerTypeNode;
  }
  if ("oneOf" in openApiSchema) {
    const innerTypeNode = factory.createUnionTypeNode(
      openApiSchema.oneOf?.map((childSchema) =>
        convertOpenApiSchemaToTypeNode(childSchema),
      ) || [],
    );

    return openApiSchema.nullable
      ? createMaybeTypedTypeNode(innerTypeNode)
      : innerTypeNode;
  }
  if ("$ref" in openApiSchema) {
    /**
     * The ref is formatted like "#/components/schema/Foo". Deliberately
     * omitting the "#" from the path.
     */
    const ref = openApiSchema["$ref"];
    const refName = ref
      .split("/")
      .at(-1)
      /**
       * Fix names which have trailing ".yaml" (possibly erroneously)
       */
      ?.replaceAll(/\..*/g, "");
    if (!refName) {
      throw new Error(`Could not derive refName from ${ref}`);
    }
    return factory.createTypeReferenceNode(refName);
  }

  switch (openApiSchema.type) {
    case "object": {
      const propertyEntries = Object.entries(openApiSchema.properties || {});

      return pipe(
        propertyEntries.length === 0
          ? /**
             * Special-case: don't return `{}`, instead return
             * `Record<string, unknown>`.
             */
            factory.createTypeReferenceNode(
              factory.createIdentifier("Record"),
              [
                factory.createKeywordTypeNode(ts.SyntaxKind.StringKeyword),
                factory.createKeywordTypeNode(ts.SyntaxKind.UnknownKeyword),
              ],
            )
          : factory.createTypeLiteralNode(
              propertyEntries.map(([propertyName, property]) => {
                return factory.createPropertySignature(
                  undefined,
                  factory.createIdentifier(propertyName),
                  undefined,
                  convertOpenApiSchemaToTypeNode(property),
                );
              }),
            ),
        (carry) =>
          openApiSchema.nullable ? createMaybeTypedTypeNode(carry) : carry,
      );
    }
    case "integer": {
      return pipe(
        openApiSchema.enum
          ? factory.createUnionTypeNode(
              openApiSchema.enum.map((item) => {
                return factory.createTypeReferenceNode(JSON.stringify(item));
              }),
            )
          : factory.createTypeReferenceNode("number"),
        (carry) =>
          openApiSchema.nullable ? createMaybeTypedTypeNode(carry) : carry,
      );
    }
    case "array": {
      if (!openApiSchema) {
        console.warn(`Schema has no items: ${JSON.stringify(openApiSchema)}`);
      }

      return pipe(
        factory.createArrayTypeNode(
          convertOpenApiSchemaToTypeNode(openApiSchema.items),
        ),
        (carry) =>
          openApiSchema.nullable ? createMaybeTypedTypeNode(carry) : carry,
      );
    }
    case "string": {
      return pipe(
        openApiSchema.enum
          ? factory.createUnionTypeNode(
              openApiSchema.enum.map((item) => {
                return factory.createTypeReferenceNode(JSON.stringify(item));
              }),
            )
          : factory.createTypeReferenceNode(openApiSchema.type),
        (carry) =>
          openApiSchema.nullable ? createMaybeTypedTypeNode(carry) : carry,
      );
    }
    case "boolean":
    case "number": {
      return pipe(
        factory.createTypeReferenceNode(openApiSchema.type),
        (carry) =>
          openApiSchema.nullable ? createMaybeTypedTypeNode(carry) : carry,
      );
    }
    default: {
      throw new Error(
        `Unhandled property:\n${JSON.stringify(openApiSchema, null, 2)}`,
      );
    }
  }
}

module.exports.convertOpenApiSchemaToTypeNode = convertOpenApiSchemaToTypeNode;
