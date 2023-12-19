const ts = require("typescript");
const fs = require("node:fs");
const path = require("node:path");
const prettier = require("prettier");
const {
  convertOpenApiDocumentToStatements,
} = require("./src/codegen/convertOpenApiDocumentToStatements");
const { artefactsDirectory } = require("./src/codegen/config");
const YAML = require("yaml");

const { factory } = ts;

(async () => {
  const openApiDocumentHandle = "./oas.yaml";

  if (!fs.existsSync(openApiDocumentHandle)) {
    throw new Error(`No such file exists: (${openApiDocumentHandle})`);
  }

  /**
   * @type {import("openapi-types").OpenAPIV3.Document}
   */
  const openApiDocument = YAML.parse(
    fs.readFileSync(openApiDocumentHandle, "utf-8"),
  );

  const statements = convertOpenApiDocumentToStatements(openApiDocument);

  const sourceFile = factory.createSourceFile(
    statements,
    factory.createToken(ts.SyntaxKind.EndOfFileToken),
    ts.NodeFlags.None,
  );

  const printer = ts.createPrinter({ newLine: ts.NewLineKind.LineFeed });

  fs.writeFileSync(
    path.resolve(artefactsDirectory, `zendesk.types.ts`),
    await prettier.format(
      printer
        .printFile(sourceFile)
        // Add an additional newline before each "export" statement, for purely
        // aesthetic purposes.
        .replaceAll(/\nexport/g, "\n\nexport"),
      {
        parser: "typescript",
      },
    ),
  );
})().catch(console.error);
