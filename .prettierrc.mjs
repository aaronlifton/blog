// .prettierrc.mjs
/** @type {import("prettier").Config} */
export default {
  plugins: [
    "prettier-plugin-astro",
    "prettier-plugin-tailwindcss",
    "prettier-plugin-classnames",
    "prettier-plugin-merge",
  ],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
  customAttributes: ["class:list", "class", "className"],
  customFunctions: ["clsx", "twMerge"],
  printWidth: 80,
};
