const {
  recursivelyGetOpenApiSchemaDependencies,
} = require("./recursivelyGetOpenApiSchemaDependencies");
const Topo = require("@hapi/topo");

/**
 * @typedef {import("openapi-types").OpenAPIV3.SchemaObject} SchemaObject
 * @typedef {import("openapi-types").OpenAPIV3.ReferenceObject} ReferenceObject
 * @param {Record<
    string,
    SchemaObject | ReferenceObject
  >} schemaLookup
 */
module.exports.sortOpenApiSchemaByDependency = (schemaLookup) => {
  /**
   * @type {Topo.Sorter<string>}
   */
  const schemaSorter = new Topo.Sorter();

  Object.entries(schemaLookup).forEach(([key, schema]) => {
    const dependencies = recursivelyGetOpenApiSchemaDependencies(schema);

    schemaSorter.add(key, {
      group: key,
      after: dependencies,
    });
  });

  const sortedSchemas = schemaSorter.nodes.map(
    /**
     * @return {[string, SchemaObject | ReferenceObject]}
     */
    (key) => {
      const schema = schemaLookup[key];
      if (!schema) {
        throw new Error(`Couldn't find schema by key: ${key}`);
      }
      return [key, schema];
    },
  );

  return sortedSchemas;
};
