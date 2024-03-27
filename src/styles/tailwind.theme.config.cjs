const colors = require("tailwindcss/colors");
const harmonyPalette = require("@evilmartians/harmony/tailwind");

const amethyst = {
	50: "oklch(97.68% 0.01 308.30 / <alpha-value>)",
	100: "oklch(94.72% 0.03 308.97 / <alpha-value>)",
	200: "oklch(90.40% 0.06 308.72 / <alpha-value>)",
	300: "oklch(82.85% 0.11 307.59 / <alpha-value )",
	400: "oklch(72.27% 0.18 305.91 / <alpha-value )",
	500: "oklch(62.68% 0.23 303.90 / <alpha-value )",
	600: "oklch(55.52% 0.25 301.63 / <alpha-value )",
	700: "oklch(49.07% 0.24 300.37 / <alpha-value )",
	800: "oklch(43.20% 0.20 301.37 / <alpha-value )",
	900: "oklch(37.42% 0.17 302.11 / <alpha-value )",
	950: "oklch(28.49% 0.14 299.74 / <alpha-value )",
};
module.exports = {
	/**
	 * Color Palette - Default/Duplicate of Purple Heart (Never remove this)
	 */
	default: {
		colors: {
			amethyst,
			text: {
				primary: "rgb(34, 41, 57)",
				secondary: "#364059",
				light: amethyst[100],
			},
			bg: {
				primary: "#ffffff",
				gray: colors.gray[300],
			},
			primary: colors.purple[700], // rgb(126, 34, 206)
			dark: {
				primary: colors.purple[300],
				secondary: colors.purple[500],
			},
			accent: {
				gray: {
					light: colors.gray[300],
					dark: colors.gray[500],
					mid: colors.gray[400],
				},
			},
			header: {
				text: "oklch(100% 0.000 0.000)",
				bg: "oklch(0.000 0.000 0.000)",
				accent: colors.gray[600],
			},
			card: {
				link: "oklch(0.4176 0.057 358.34)",
				border: "oklch(58% 0.175 304.94 / 57.44%)", // colors.gray[100], // 'oklab(1 0 0 / 0.148751)',
				bg: harmonyPalette.indigo[100], // colors.gray[50], //'rgba(0, 0, 0, 0.06)'
				img: "oklch(0.5109 0.133 47.51)",
			},
		},
	},
};
