import { OpenAPIV3 } from "openapi-types";
import { notNullish } from "../helpers/notNullish";

export function recursivelyGetOpenApiSchemaDependencies(
  schema: OpenAPIV3.SchemaObject | OpenAPIV3.ReferenceObject,
): string[] {
  if ("oneOf" in schema || "anyOf" in schema || "allOf" in schema) {
    const childSchemas = [schema.oneOf, schema.allOf, schema.anyOf]
      .flat()
      .filter(notNullish);

    return [...new Set(childSchemas)]
      .map((child) => recursivelyGetOpenApiSchemaDependencies(child))
      .flat();
  }
  if ("$ref" in schema) {
    return [schema["$ref"].split("/").at(-1)].filter(notNullish);
  }
  if (schema.type === "object") {
    return Object.values(schema.properties || {})
      .map((property) => recursivelyGetOpenApiSchemaDependencies(property))
      .flat();
  }
  if (schema.type === "array") {
    return recursivelyGetOpenApiSchemaDependencies(schema.items);
  }

  return [];
}
