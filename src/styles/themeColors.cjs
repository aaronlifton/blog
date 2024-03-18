const {withOKLCHOpacityValue} = require("./util.cjs");

// const themeColors = Object.fromEntries(
//   themeColorRamps.map(({ name, stops }) => [
//     name,
//     Object.fromEntries(
//       new Array(stops)
//         .fill(0)
//         .map((_, i) => [(i + 1) * 10, toOKLCHVar(`--_${name}-${(i + 1) * 10}`)])
//     ),
//   ])
// )
const amethyst = {
    50: "oklch(97.68% 0.01 308.30 / <alpha-value>)",
    100: "oklch(94.72% 0.03 308.97 / <alpha-value>)",
    200: "oklch(90.40% 0.06 308.72 / <alpha-value>)",
    300: "oklch(82.85% 0.11 307.59 / <alpha-value>)",
    400: "oklch(72.27% 0.18 305.91 / <alpha-value>)",
    500: "oklch(62.68% 0.23 303.90 / <alpha-value>)",
    600: "oklch(55.52% 0.25 301.63 / <alpha-value>)",
    700: "oklch(49.07% 0.24 300.37 / <alpha-value>)",
    800: "oklch(43.20% 0.20 301.37 / <alpha-value>)",
    900: "oklch(37.42% 0.17 302.11 / <alpha-value>)",
    950: "oklch(28.49% 0.14 299.74 / <alpha-value>)",
};

// const amethystValues = {
//     97.68% 0.01 308.30
//     94.72% 0.03 308.97
//     90.40% 0.06 308.72
//     82.85% 0.11 307.59
//     72.27% 0.18 305.91
//     62.68% 0.23 303.90
//     55.52% 0.25 301.63
//     49.07% 0.24 300.37
//     43.20% 0.20 301.37
//     37.42% 0.17 302.11
//     28.49% 0.14 299.74
// }

module.exports = {
    default: {
        amethyst
    }
}