import tsEslintParser from "@typescript-eslint/parser";
import astroEslintParser from "astro-eslint-parser";
import eslintPluginAstro from "eslint-plugin-astro";

module.exports = [
  // add more generic rule sets here, such as:
  // js.configs.recommended,
  ...eslintPluginAstro.configs["flat/recommended"], // In CommonJS, the `flat/` prefix is required.
  // ...eslintPluginAstro.configs["flat/jsx-a11y-recommended"], // In CommonJS, the `flat/` prefix is required.
  // ...eslintPluginA11y.configs.recommended
  {
    files: ["*.astro"],
    languageOptions: {
      parser: astroEslintParser,
      parserOptions: {
        parser: tsEslintParser,
        extraFileExtensions: [".astro"],
      },
    },
  },
  {
    files: ["*.astro", "*.tsx"],
    rules: {
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          varsIgnorePattern: "^(Props|_)$",
          argsIgnorePattern: "^_",
        },
      ],
    },
  },
];
