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
		{
			files: "*.mdx",
			options: {
				tabWidth: 2,
				printWidth: 80,
				proseWrap: "always",
			},
		},
	],
	customAttributes: ["class:list", "class", "className"],
	customFunctions: ["clsx", "twMerge"],
	printWidth: 80,
};
