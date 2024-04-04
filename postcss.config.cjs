/* eslint-disable @typescript-eslint/no-var-requires */
const {hexToRgb} = require("./src/styles/util.cjs");

module.exports = {
	plugins: [
		require("tailwindcss/nesting"),
		require("tailwindcss"),
		require("@csstools/postcss-oklab-function")({
			preserve: true,
		}),
		require("autoprefixer"),
		require("postcss-import"),
		require("postcss-functions")({
			functions: {
				hexToRgb,
			},
		}),
		// Workaround to https://github.com/fontsource/fontsource/issues/121
		// See https://github.com/fontsource/fontsource/issues/121
		{
			postcssPlugin: "postcss-force-font-display-swap",
			Declaration: {
				"font-display": (node) => {
					if (
						node.parent.name === "font-face" &&
						node.parent.type === "atrule"
					) {
						node.value = "swap";
					}
				},
			},
		},
	],
};
