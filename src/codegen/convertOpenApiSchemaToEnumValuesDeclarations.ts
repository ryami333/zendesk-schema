import camelCase from "lodash.camelcase";
import { OpenAPIV3 } from "openapi-types";
import ts, { factory } from "typescript";

export const convertOpenApiSchemaToEnumValuesDeclarations = (
  name: string,
  schema: OpenAPIV3.SchemaObject | OpenAPIV3.ReferenceObject,
) => {
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
};
