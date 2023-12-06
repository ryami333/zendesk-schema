import { OpenAPIV3 } from "openapi-types";
import { recursivelyGetOpenApiSchemaDependencies } from "./recursivelyGetOpenApiSchemaDependencies";
import Topo from "@hapi/topo";

export function sortOpenApiSchemaByDependency(
  schemaLookup: Record<
    string,
    OpenAPIV3.SchemaObject | OpenAPIV3.ReferenceObject
  >,
) {
  const schemaSorter = new Topo.Sorter<string>();

  Object.entries(schemaLookup).forEach(([key, schema]) => {
    const dependencies = recursivelyGetOpenApiSchemaDependencies(schema);

    schemaSorter.add(key, {
      group: key,
      after: dependencies,
    });
  });

  const sortedSchemas = schemaSorter.nodes.map(
    (key): [string, OpenAPIV3.SchemaObject | OpenAPIV3.ReferenceObject] => {
      const schema = schemaLookup[key];
      if (!schema) {
        throw new Error(`Couldn't find schema by key: ${key}`);
      }
      return [key, schema];
    },
  );

  return sortedSchemas;
}
