const eslintPluginAstro = require("eslint-plugin-astro");
module.exports = [
  // add more generic rule sets here, such as:
  // js.configs.recommended,
  ...eslintPluginAstro.configs["flat/recommended"], // In CommonJS, the `flat/` prefix is required.
  // ...eslintPluginAstro.configs["flat/jsx-a11y-recommended"], // In CommonJS, the `flat/` prefix is required.
  // ...eslintPluginA11y.configs.recommended
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
