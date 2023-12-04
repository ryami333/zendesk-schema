import { createEnv } from "@t3-oss/env-core";
import { z } from "zod";

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
