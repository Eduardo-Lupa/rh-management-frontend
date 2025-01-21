import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";

export default tseslint.config(
  { ignores: ["dist"] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.strict, "prettier"],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/explicit-function-return-type": "error",
      "@typescript-eslint/type-annotation-spacing": "error",
      "@typescript-eslint/space-infix-ops": "error",
      "@typescript-eslint/space-before-blocks": "error",
      "@typescript-eslint/indent": ["error", 2],
      "@typescript-eslint/member-delimiter-style": "error",
      "@typescript-eslint/semi": "error",
      "no-multi-spaces": "error",
      "no-trailing-spaces": "error",
      "no-whitespace-before-property": "error",
      "space-before-blocks": "error",
      "space-in-parens": ["error", "never"],
      "spaced-comment": ["error", "always"],
      "object-curly-spacing": ["error", "always"],
      "array-bracket-spacing": ["error", "never"],
      "comma-spacing": ["error", { before: false, after: true }],
    },
  }
);
