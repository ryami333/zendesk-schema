const prettier = require("prettier");
const fs = require("node:fs");

(async () => {
  const content = await fetch(
    "https://developer.zendesk.com/zendesk/oas.yaml",
  ).then((response) => response.text());

  fs.writeFileSync(
    "./oas.yaml",
    await prettier.format(content, { parser: "yaml" }),
  );
})().catch(console.error);
