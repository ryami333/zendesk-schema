import { OpenAPIV3 } from "openapi-types";
import ts, { factory } from "typescript";
import { convertOpenApiSchemaToZodSchema } from "./convertOpenApiSchemaToZodSchema";
import { createZodSchemaIdentifier } from "./createZodSchemaIdentifier";

export function convertOpenApiSchemaToZodSchemaExport(
  exportName: string,
  typeNode: ts.TypeNode,
  openApiSchema: OpenAPIV3.SchemaObject | OpenAPIV3.ReferenceObject
) {
  return factory.createVariableStatement(
    [factory.createModifier(ts.SyntaxKind.ExportKeyword)],
    factory.createVariableDeclarationList(
      [
        factory.createVariableDeclaration(
          createZodSchemaIdentifier(exportName),
          undefined,
          factory.createTypeReferenceNode("zod.ZodSchema", [typeNode]),
          convertOpenApiSchemaToZodSchema(openApiSchema)
        ),
      ],
      ts.NodeFlags.Const
    )
  );
}
