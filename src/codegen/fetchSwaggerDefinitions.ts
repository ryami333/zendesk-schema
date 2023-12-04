import fs from "node:fs";
import path from "node:path";
import prettier from "prettier";
import { artefactsDirectory } from "./config";
import { env } from "../helpers/env";

export const fetchSwaggerDefinitions = async () => {
  /**
   * Create the root directory if it doesn't exist already.
   */
  if (!fs.existsSync(artefactsDirectory)) {
    fs.mkdirSync(artefactsDirectory, { recursive: true });
  }

  /**
   * Write the swagger JSON file to disk.
   */
  const response = await fetch(env.OPENAPI_URL, {
    headers: { Accept: "application/json" },
  });
  if (response.ok) {
    const text = await response.text();
    fs.writeFileSync(
      path.resolve(artefactsDirectory, `zendesk.swagger.json`),
      await prettier.format(text, { parser: "json" }),
    );
  } else {
    throw new Error(`Request failed`);
  }
};
