import { getHighlighterCore, loadWasm } from "shiki/core";

import oneDarkProTheme from "shiki/themes/one-dark-pro.mjs";
import githubLightTheme from "shiki/themes/github-light.mjs";

// Owning to bundle size limit, we can only support these languages
import typescriptLanguage from "shiki/langs/typescript.mjs";
import shellscriptLanguage from "shiki/langs/shellscript.mjs";
import cssLanguage from "shiki/langs/css.mjs";
import rustLanguage from "shiki/langs/rust.mjs";
import pythonLanguage from "shiki/langs/python.mjs";

import highlighterWasm from "shiki/dist/onig.wasm?url";

// import "../styles/shiki.css";

// read highlighterWasm url into a buffer source
const response = await fetch(highlighterWasm);
const buffer = await response.arrayBuffer();
const highlighterWasmBuffer = new Uint8Array(buffer);
await loadWasm((importObject) =>
	WebAssembly.instantiate(highlighterWasmBuffer, importObject),
);

const highlighter = await getHighlighterCore({
	themes: [oneDarkProTheme, githubLightTheme],
	langs: [
		typescriptLanguage,
		shellscriptLanguage,
		cssLanguage,
		rustLanguage,
		pythonLanguage,
		// "bash",
		// "fish",
		// "go",
		// "html",
		// "javascript",
		// "json",
		// "jsonc",
		// "jsx",
		// "lua",
		// "ruby",
		// "sh",
		// "ts",
		// "ts",
		// "tsx",
		// "typescript",
		// "vim",
	],
});

export default highlighter;
