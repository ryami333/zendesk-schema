#!/usr/bin/env -S node -r @swc-node/register

import ts, { factory } from "typescript";
import { OpenAPIV3 } from "openapi-types";
import fs from "node:fs";
import path from "node:path";
import prettier from "prettier";
import { convertOpenApiDocumentToStatements } from "./src/codegen/convertOpenApiDocumentToStatements";
import { artefactsDirectory } from "./src/codegen/config";
import YAML from "yaml";

(async () => {
  const openApiDocumentHandle = "./oas.yaml";

  if (!fs.existsSync(openApiDocumentHandle)) {
    throw new Error(`No such file exists: (${openApiDocumentHandle})`);
  }
  const openApiDocument: OpenAPIV3.Document = YAML.parse(
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
