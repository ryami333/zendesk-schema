const { pipe } = require("fp-ts/lib/function");
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
 * @type {<T extends ts.Node>(node: T, description: string | undefined) => T}
 */
function addJsDocComment(node, description) {
  if (description) {
    ts.addSyntheticLeadingComment(
      node,
      ts.SyntaxKind.MultiLineCommentTrivia,
      `*\n* @description ${description}\n`,
      true,
    );
  }

  return node;
}

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
 * @return {ts.TypeAliasDeclaration | ts.InterfaceDeclaration} schema
 */
function convertOpenApiSchemaToTypeDeclaration(name, schema) {
  // No matter the schema-type, we're going to "export" it, so let's create that
  // re-usable node in advance.
  const exportModifier = factory.createModifier(ts.SyntaxKind.ExportKeyword);

  // No matter the schema-type, the identifier will be the same.
  const nameIdentifier = factory.createIdentifier(name);

  if ("allOf" in schema) {
    return factory.createTypeAliasDeclaration(
      [exportModifier],
      nameIdentifier,
      undefined,
      factory.createIntersectionTypeNode(
        schema.allOf?.map((allOfItem) =>
          convertOpenApiSchemaToTypeNode(allOfItem),
        ) ?? [],
      ),
    );
  }
  if ("anyOf" in schema) {
    return factory.createTypeAliasDeclaration(
      [exportModifier],
      nameIdentifier,
      undefined,
      factory.createUnionTypeNode(
        schema.anyOf?.map((allOfItem) =>
          convertOpenApiSchemaToTypeNode(allOfItem),
        ) ?? [],
      ),
    );
  }
  if ("oneOf" in schema) {
    return factory.createTypeAliasDeclaration(
      [exportModifier],
      nameIdentifier,
      undefined,
      factory.createUnionTypeNode(
        schema.oneOf?.map((allOfItem) =>
          convertOpenApiSchemaToTypeNode(allOfItem),
        ) ?? [],
      ),
    );
  }
  if ("$ref" in schema) {
    throw new Error("Unhandled case: schema has $ref property");
  }

  switch (schema.type) {
    case "object": {
      return pipe(
        factory.createInterfaceDeclaration(
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
        ),
        (carry) => addJsDocComment(carry, schema.description),
      );
    }
    case "array": {
      return pipe(
        factory.createTypeAliasDeclaration(
          [exportModifier],
          nameIdentifier,
          undefined,
          factory.createArrayTypeNode(
            schema.items
              ? convertOpenApiSchemaToTypeNode(schema.items)
              : factory.createTypeReferenceNode("unknown"),
          ),
        ),
        (carry) => addJsDocComment(carry, schema.description),
      );
    }
    case "integer":
    case "string": {
      return pipe(
        factory.createTypeAliasDeclaration(
          [exportModifier],
          nameIdentifier,
          undefined,
          schema.enum
            ? factory.createUnionTypeNode(
                schema.enum.map((enumVal) => {
                  return factory.createTypeReferenceNode(
                    JSON.stringify(enumVal),
                  );
                }),
              )
            : factory.createTypeReferenceNode(schema.type),
        ),
        (carry) => addJsDocComment(carry, schema.description),
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
