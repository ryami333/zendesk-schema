import camelCase from "lodash.camelcase";
import { factory } from "typescript";

export function createZodSchemaIdentifier(name: string) {
  return factory.createIdentifier(camelCase(`${name}Schema`));
}
