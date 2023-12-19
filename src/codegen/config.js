const { resolve } = require("node:path");

module.exports.artefactsDirectory = resolve(process.cwd(), "dist");
