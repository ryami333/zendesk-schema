const camelCase = require("lodash.camelcase");
const ts = require("typescript");

const { factory } = ts;

/**
 * @typedef {import("openapi-types").OpenAPIV3.SchemaObject} SchemaObject
 * @typedef {import("openapi-types").OpenAPIV3.ReferenceObject} ReferenceObject
 *
 * @param {string} name
 * @param {SchemaObject | ReferenceObject} schema
 */
function convertOpenApiSchemaToEnumValuesDeclarations(name, schema) {
  if (
    "type" in schema &&
    (schema.type === "integer" ||
      schema.type === "string" ||
      schema.type === "number") &&
    schema.enum
  ) {
    return factory.createVariableStatement(
      [factory.createModifier(ts.SyntaxKind.ExportKeyword)],
      factory.createVariableDeclarationList(
        [
          factory.createVariableDeclaration(
            factory.createIdentifier(camelCase(`${name}Values`)),
            undefined,
            undefined,
            factory.createAsExpression(
              factory.createArrayLiteralExpression(
                schema.type === "string"
                  ? schema.enum.map((enumVal) =>
                      factory.createStringLiteral(enumVal),
                    )
                  : schema.enum.map((enumVal) =>
                      factory.createNumericLiteral(enumVal),
                    ),
                false,
              ),
              factory.createTypeReferenceNode(
                factory.createIdentifier("const"),
              ),
            ),
          ),
        ],
        ts.NodeFlags.Const,
      ),
    );
  }

  return undefined;
}

module.exports.convertOpenApiSchemaToEnumValuesDeclarations =
  convertOpenApiSchemaToEnumValuesDeclarations;
