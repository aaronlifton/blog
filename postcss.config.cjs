// postcss.config.js
const postcss = require("postcss")
const postcssOKLabFunction = require('@csstools/postcss-oklab-function');
const hexToRgb = (hex) => {
  const [, rr, gg, bb] = hex.match(
    /^#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})$/i,
  );

  return `${parseInt(rr, 16)} ${parseInt(gg, 16)} ${parseInt(bb, 16)}`;
};

// postcss([
//   postcssOKLabFunction()
// ]).process(YOUR_CSS);
module.exports = {
  plugins: {
    "postcss-import": {},
    "tailwindcss/nesting": "postcss-nesting",
    tailwindcss: {},
    autoprefixer: {},
    "postcss-functions": require("postcss-functions")({
      functions: {
        hexToRgb,
      },
    }),
    "@csstools/postcss-oklab-function": { preserve: true },
  },
};
