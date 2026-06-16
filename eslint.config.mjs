import { defineConfig } from "eslint/config";
import importPlugin from "eslint-plugin-import";
import globals from "globals";

export default defineConfig([
  {
    ignores: ["dist/**", "node_modules/**", ".github/**"],
  },
  {
    files: ["src/**/*.js"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      globals: {
        ...globals.browser,
        __dirname: "readonly",
        require: "readonly",
        process: "readonly",
        ENV: "readonly",
        module: "readonly",
        ga: "readonly",
      },
    },
    plugins: {
      import: importPlugin,
    },
    rules: {
      // Possible Errors
      "no-control-regex": "error",
      "no-console": "warn",
      "no-debugger": "error",
      "no-dupe-args": "error",
      "no-dupe-keys": "error",
      "no-duplicate-case": "error",
      "no-empty-character-class": "error",
      "no-ex-assign": "error",
      "no-extra-boolean-cast": "error",
      "no-invalid-regexp": "error",
      "no-irregular-whitespace": "warn",
      "no-proto": "error",
      "no-unexpected-multiline": "error",
      "no-unreachable": "error",
      "valid-typeof": "error",

      // Best Practices
      "no-fallthrough": "error",
      "no-redeclare": "error",

      // Stylistic Issues
      "comma-spacing": "error",
      "eol-last": "error",
      eqeqeq: ["error", "smart"],
      indent: ["error", 2, { SwitchCase: 1 }],
      "keyword-spacing": "error",
      "max-len": ["warn", 160, 2],
      "new-parens": "error",
      "no-mixed-spaces-and-tabs": "error",
      "no-multiple-empty-lines": ["error", { max: 2 }],
      "no-trailing-spaces": "error",
      "object-curly-spacing": ["error", "never"],
      quotes: ["error", "double", { avoidEscape: true }],
      semi: "error",
      "space-before-blocks": ["error", "always"],
      "space-before-function-paren": ["error", "never"],
      "space-in-parens": ["error", "never"],
      "space-infix-ops": "error",
      "space-unary-ops": "error",

      // ECMAScript 6
      "arrow-parens": ["error", "always"],
      "arrow-spacing": ["error", { before: true, after: true }],
      "no-confusing-arrow": "error",
      "prefer-const": "error",

      // JSX
      "jsx-quotes": ["error", "prefer-double"],

      // Import
      "import/no-unresolved": ["warn", { commonjs: true, amd: true }],
      "import/export": "error",

      // Strict Mode
      strict: ["error", "global"],

      // Variables
      "no-undef": "error",
      "no-unused-vars": ["error", { args: "none" }],
    },
  },
]);
