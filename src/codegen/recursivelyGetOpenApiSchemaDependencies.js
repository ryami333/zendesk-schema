const { notNullish } = require("../helpers/notNullish");

/**
 * @typedef {import("openapi-types").OpenAPIV3.SchemaObject} SchemaObject
 * @typedef {import("openapi-types").OpenAPIV3.ReferenceObject} ReferenceObject
 * @param {SchemaObject | ReferenceObject} schema
 * @return {string[]}
 */
function recursivelyGetOpenApiSchemaDependencies(schema) {
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
    if (!schema.items) {
      console.warn(`Schema has no items: ${JSON.stringify(schema)}`);
      return [];
    }
    return recursivelyGetOpenApiSchemaDependencies(schema.items);
  }

  return [];
}

module.exports.recursivelyGetOpenApiSchemaDependencies =
  recursivelyGetOpenApiSchemaDependencies;
