const ts = require("typescript");
const {
  convertOpenApiSchemaToZodSchema,
} = require("./convertOpenApiSchemaToZodSchema");
const { createZodSchemaIdentifier } = require("./createZodSchemaIdentifier");

const { factory } = ts;

/**
 * @typedef {import("openapi-types").OpenAPIV3.SchemaObject} SchemaObject
 * @typedef {import("openapi-types").OpenAPIV3.ReferenceObject} ReferenceObject
 * @param {string} exportName
 * @param {ts.TypeNode} typeNode
 * @param {SchemaObject | ReferenceObject} openApiSchema
 * @returns {ts.VariableStatement}
 */
module.exports.convertOpenApiSchemaToZodSchemaExport = (
  exportName,
  typeNode,
  openApiSchema,
) => {
  return factory.createVariableStatement(
    [factory.createModifier(ts.SyntaxKind.ExportKeyword)],
    factory.createVariableDeclarationList(
      [
        factory.createVariableDeclaration(
          createZodSchemaIdentifier(exportName),
          undefined,
          factory.createTypeReferenceNode("z.ZodSchema", [typeNode]),
          convertOpenApiSchemaToZodSchema(openApiSchema),
        ),
      ],
      ts.NodeFlags.Const,
    ),
  );
};
