import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import pluginJest from "eslint-plugin-jest";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.{js,mjs,cjs,jsx}"] },
  { languageOptions: { globals: { ...globals.browser, ...globals.jest } } },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    plugins: { jest: pluginJest },
    files: ["**/__tests__/**/*.{js,jsx}", "**/*.{test,spec}.{js,jsx}"],
    rules: {
      ...pluginJest.configs.recommended.rules, // Apply recommended Jest rules
    },
  },
];
