const ts = require("typescript");
const {
  convertOpenApiSchemaToTypeNode,
} = require("./convertOpenApiSchemaToTypeNode");

const { factory } = ts;

/**
 * @typedef {import("openapi-types").OpenAPIV3.SchemaObject} SchemaObject
 * @typedef {import("openapi-types").OpenAPIV3.ReferenceObject} ReferenceObject
 */

/**
 * Generates an AST (abstract syntax tree) node which represents an exported
 * type-declaration for a given OpenAPI schema.
 *
 * Eg, for `{ type: "string" }`, this would return an AST node like:
 *
 * ```
 * export const Foo = string;
 * ```
 *
 * @param {string} name
 * @param {SchemaObject | ReferenceObject} schema
 */
function convertOpenApiSchemaToTypeDeclaration(name, schema) {
  if (
    "$ref" in schema ||
    "allOf" in schema ||
    "anyOf" in schema ||
    "oneOf" in schema
  ) {
    return undefined;
  }

  // No matter the schema-type, we're going to "export" it, so let's create that
  // re-usable node in advance.
  const exportModifier = factory.createModifier(ts.SyntaxKind.ExportKeyword);

  // No matter the schema-type, the identifier will be the same.
  const nameIdentifier = factory.createIdentifier(
    name
      // Strip trailing ".yaml" (probably erroneously named as such to begin with)
      .replaceAll(/\..*/g, ""),
  );

  switch (schema.type) {
    case "object": {
      return factory.createInterfaceDeclaration(
        [exportModifier],
        nameIdentifier,
        undefined,
        undefined,
        Object.entries(schema.properties || {}).map(
          ([propertyName, property]) =>
            factory.createPropertySignature(
              undefined,
              factory.createIdentifier(propertyName),
              undefined,
              convertOpenApiSchemaToTypeNode(property),
            ),
        ),
      );
    }
    case "array": {
      return factory.createTypeAliasDeclaration(
        [exportModifier],
        nameIdentifier,
        undefined,
        factory.createArrayTypeNode(
          factory.createUnionTypeNode(
            schema.items
              ? Object.values(schema.items).map((property) =>
                  convertOpenApiSchemaToTypeNode(property),
                )
              : [factory.createTypeReferenceNode("unknown")],
          ),
        ),
      );
    }
    case "integer":
    case "string": {
      if (schema.enum) {
        return factory.createTypeAliasDeclaration(
          [exportModifier],
          nameIdentifier,
          undefined,
          factory.createUnionTypeNode(
            schema.enum.map((enumVal) => {
              return factory.createTypeReferenceNode(JSON.stringify(enumVal));
            }),
          ),
        );
      }
      return factory.createTypeAliasDeclaration(
        [exportModifier],
        nameIdentifier,
        undefined,
        factory.createTypeReferenceNode(schema.type),
      );
    }

    default: {
      throw new Error(
        `Unexpected schema:\n${JSON.stringify(schema.type, null, 2)}`,
      );
    }
  }
}

module.exports.convertOpenApiSchemaToTypeDeclaration =
  convertOpenApiSchemaToTypeDeclaration;
