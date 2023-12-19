const camelCase = require("lodash.camelcase");
const { factory } = require("typescript");

/**
 * @param {string} name
 */
module.exports.createZodSchemaIdentifier = (name) => {
  return factory.createIdentifier(camelCase(`${name}Schema`));
};
