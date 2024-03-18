const colors = require("tailwindcss/colors");
const harmonyPalette = require("@evilmartians/harmony/tailwind");
const themeColors = require("./themeColors.cjs");
const { amethyst } = themeColors;


module.exports = {
  /**
   * Color Palette - Default/Duplicate of Purple Heart (Never remove this)
   */
  default: {
    colors: {
      amethyst: amethyst,
      text: {
        // primary: "rgb(34, 41, 57)",
        primary: "oklch(28.17% 0.031 266.12 / <alpha-value>) ",
        secondary: "#364059", // oklch(37.36% 0.045 267.39)
        light: amethyst[100],
      },
      bg: {
        primary: "oklch(100% 0 0 / <alpha-value>)",
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
