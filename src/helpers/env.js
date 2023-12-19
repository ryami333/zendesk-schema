require("dotenv/config");
const { createEnv } = require("@t3-oss/env-core");
const { z } = require("zod");

export const env = createEnv({
  server: {
    OPENAPI_URL: z
      .string({
        description: "Fully-qualified URl of the Zendesk OpenAPI spec",
      })
      .nonempty(),
  },
  runtimeEnv: process.env,
});
