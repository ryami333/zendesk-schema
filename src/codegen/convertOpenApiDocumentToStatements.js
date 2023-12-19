const camelCase = require("lodash.camelcase");
const ts = require("typescript");
const { notNullish } = require("../helpers/notNullish");
const {
  convertOpenApiSchemaToEnumValuesDeclarations,
} = require("./convertOpenApiSchemaToEnumValuesDeclarations");
const {
  convertOpenApiSchemaToTypeDeclaration,
} = require("./convertOpenApiSchemaToTypeDeclaration");
const {
  convertOpenApiSchemaToTypeNode,
} = require("./convertOpenApiSchemaToTypeNode");
const {
  convertOpenApiSchemaToZodSchemaExport,
} = require("./convertOpenApiSchemaToZodSchemaExport");
const {
  sortOpenApiSchemaByDependency,
} = require("./sortOpenApiSchemaByDependency");

const { factory } = ts;

/**
 * @param {import("openapi-types").OpenAPIV3.Document} doc
 * @returns {ts.Statement[]}
 */
module.exports.convertOpenApiDocumentToStatements = (doc) => {
  doc;
  const schemas = sortOpenApiSchemaByDependency(doc.components?.schemas || {});

  /**
   * Temporary measure - couldn't find JSDoc equivalent for "as const" in this
   * context.
   *
   * @type ["get", "post", "put", "delete"];
   */
  const methodNames = ["get", "post", "put", "delete"];
  const paths = Object.keys(doc.paths || {});

  /**
   * Abstract Syntax Tree node for:
   * @example
   * import { z as zod } =require('zod')
   */
  const importZodStatement = factory.createImportDeclaration(
    undefined,
    factory.createImportClause(
      false,
      undefined,
      factory.createNamedImports([
        factory.createImportSpecifier(
          false,
          factory.createIdentifier("z"),
          factory.createIdentifier("zod"),
        ),
      ]),
    ),
    factory.createStringLiteral("zod"),
  );

  /**
   * Abstract Syntax Tree node for:
   * @example
   * export type Maybe<T> = T | null
   */
  const exportMaybeTypeStatement = factory.createTypeAliasDeclaration(
    [factory.createModifier(ts.SyntaxKind.ExportKeyword)],
    factory.createIdentifier("Maybe"),
    [
      factory.createTypeParameterDeclaration(
        undefined,
        factory.createIdentifier("T"),
      ),
    ],
    factory.createUnionTypeNode([
      factory.createTypeReferenceNode(factory.createIdentifier("T")),
      factory.createTypeReferenceNode("null"),
    ]),
  );

  /**
   * Abstract Syntax Tree nodes for:
   * @example
   * export interface Product {
   *   product_id: string,
   *   … etc …
   * }
   */
  const exportEntityTypeDeclarationStatements = schemas
    .map(([name, schema]) =>
      convertOpenApiSchemaToTypeDeclaration(name, schema),
    )
    .filter(notNullish);

  /**
   * Abstract Syntax Tree nodes for:
   * @example
   * export const genderEnumValues = ["Male", "Female", "NotSpecified"] as const;
   */
  const exportEnumValuesConstantStatements = schemas
    .map(([name, schema]) =>
      convertOpenApiSchemaToEnumValuesDeclarations(name, schema),
    )
    .filter(notNullish);

  /**
   * Abstract Syntax Tree nodes for:
   * @example
   * export const productSchema: zod.ZodSchema<Product> = zod.object({
   *   product_id: zod.string(),
   *   // … etc …
   * });
   */
  const exportZodEntitySchemaStatements = schemas.map(([name, schema]) =>
    convertOpenApiSchemaToZodSchemaExport(
      name,
      factory.createTypeReferenceNode(name),
      schema,
    ),
  );

  /**
   * Abstract Syntax Tree nodes for:
   * @example
   * export const productResponseSchema: zod.ZodSchema<Product[]> = zod.array([
   *   productSchema,
   * ]);
   */
  const exportZodResponseSchemaStatements = methodNames
    .map((methodName) => {
      return paths.map((path) => {
        const responses = doc.paths[path]?.[methodName]?.responses;
        const okResponse = responses?.["200"] || responses?.["204"];

        const okResponseJsonContent =
          okResponse &&
          "content" in okResponse &&
          okResponse.content?.["application/json"]?.schema;

        if (okResponseJsonContent) {
          const zodSchemaName = camelCase(
            `${methodName}-${path
              // Strip leading "/be/api/v1/{servicename}"
              .replace(/^.*\/api\/v1\/.*?\//, "")
              // Replace instances of "…/{productId}/…" with "ByProductId"
              .replaceAll(/\{(.+?)\}/g, "By-$1")}Response`,
          );
          return convertOpenApiSchemaToZodSchemaExport(
            zodSchemaName,
            convertOpenApiSchemaToTypeNode(okResponseJsonContent),
            okResponseJsonContent,
          );
        }
      });
    })
    .flat()
    .filter(notNullish);

  return [
    importZodStatement,
    exportMaybeTypeStatement,
    ...exportEntityTypeDeclarationStatements,
    ...exportEnumValuesConstantStatements,
    ...exportZodEntitySchemaStatements,
    ...exportZodResponseSchemaStatements,
  ];
};
