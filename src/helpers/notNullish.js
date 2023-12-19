/**
 * @type {<T>(item: T | null | undefined) => item is T}
 */
module.exports.notNullish = (item) => item !== null && item !== undefined;
