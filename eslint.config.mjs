import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";

export default [
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: { globals: globals.browser },
    extends: [
      "some-other-config-you-use",
      "prettier"
    ]
  },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
];
