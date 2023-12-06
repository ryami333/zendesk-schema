import { OpenAPIV3 } from "openapi-types";
import ts, { factory } from "typescript";
import { convertOpenApiSchemaToTypeNode } from "./convertOpenApiSchemaToTypeNode";

/**
 * Generates an AST (abstract syntax tree) node which represents an exported
 * type-declaration for a given OpenAPI schema.
 *
 * Eg, for `{ type: "string" }`, this would return an AST node like:
 *
 * ```
 * export const Foo = string;
 * ```
 */
export function convertOpenApiSchemaToTypeDeclaration(
  name: string,
  schema: OpenAPIV3.SchemaObject | OpenAPIV3.ReferenceObject,
) {
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

  switch (schema.type) {
    case "object": {
      return factory.createInterfaceDeclaration(
        undefined,
        [exportModifier],
        factory.createIdentifier(name),
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
    case "integer":
    case "string": {
      if (schema.enum) {
        return factory.createTypeAliasDeclaration(
          undefined,
          [exportModifier],
          factory.createIdentifier(name),
          undefined,
          factory.createUnionTypeNode(
            schema.enum.map((enumVal) => {
              return factory.createTypeReferenceNode(JSON.stringify(enumVal));
            }),
          ),
        );
      }
      return factory.createTypeAliasDeclaration(
        undefined,
        [exportModifier],
        factory.createIdentifier(name),
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
