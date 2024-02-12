import {
  ExpressiveCodeTheme,
  type AstroExpressiveCodeOptions,
} from "astro-expressive-code";
import { transformerTwoslash } from "shikiji-twoslash";
import path from "path";
import fs from "fs";
import { ShikiConfig } from "astro";

const __dirname = path.dirname(new URL(import.meta.url).pathname);
// const stylesPath = path.join(__dirname, "src/styles");
// const poimandresStr = fs.readFileSync(
//   new URL(`./src/styles/poimandres-color-theme.json`, import.meta.url),
//   "utf-8",
// );
// const rosePineStr = fs.readFileSync(
//   new URL(`./src/styles/rose-pine-color-theme.json`, import.meta.url),
//   "utf-8",
// );
// const currentExpressiveTheme =
//   ExpressiveCodeTheme.fromJSONString(poimandresStr);
// const rosePineExpressiveTheme = ExpressiveCodeTheme.fromJSONString(rosePineStr);

export const expressiveCodeOptions: AstroExpressiveCodeOptions = {
  // One dark, one light theme => https://expressive-code.com/guides/themes/#available-themes
  themeCssSelector(theme, { styleVariants }) {
    // If one dark and one light theme are available
    // generate theme CSS selectors compatible with cactus-theme dark mode switch
    if (styleVariants.length >= 2) {
      const baseTheme = styleVariants[0]?.theme;
      const altTheme = styleVariants.find(
        (v) => v.theme.type !== baseTheme?.type,
      )?.theme;
      if (theme === baseTheme || theme === altTheme)
        return `[data-theme='${theme.type}']`;
    }
    // return default selector
    return `[data-theme="${theme.name}"]`;
  },
  useThemedScrollbars: false,
  styleOverrides: {
    frames: {
      frameBoxShadowCssValue: "none",
      showCopyToClipboardButton: true,
    },
    uiLineHeight: "inherit",
    codeFontSize: "0.875rem",
    codeLineHeight: "1.7142857rem",
    borderRadius: "4px",
    codePaddingInline: "1rem",
    codeFontFamily:
      'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;',
  },

  themes: [
    "dracula",
    "github-light",
    // currentExpressiveTheme,
    // rosePineExpressiveTheme,
    // "./src/styles/material.theme.config.ts",
    // "./src/styles/rose-pine-color-theme.json",
    // "./src/styles/rose-pine-moon-color-theme.json",
  ],
};

export const shikiConfig: ShikiConfig = {
  theme: "material-theme-darker",
  transformers: [
    (node: Node): void => {
      if (node.type === "element" && node.tagName === "pre") {
        const tabIndexNode = node.getAttributeNode("tabIndex");
        node.removeAttributeNode(tabIndexNode);
      }
      return node;
    },
    transformerTwoslash(),
  ],
};
