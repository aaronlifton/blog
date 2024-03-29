import { getHighlighter, type Highlighter } from "shiki";
import "shiki/dist/themes/material-theme-darker.mjs";
// setCDN("https://unpkg.com/shiki/");

let highlighter: Promise<Highlighter>;

export const getShiki = () => {
	if (highlighter) {
		return highlighter;
	}
	highlighter = getHighlighter({
		// theme: "dracula-soft",
		themes: ["material-theme-darker"],
		langs: [
			"astro",
			"bash",
			"fish",
			"go",
			"html",
			"javascript",
			"json",
			"jsonc",
			"jsx",
			"lua",
			"markdown",
			"md",
			"mdx",
			"ruby",
			"sh",
			"svelte",
			"ts",
			"tsx",
			"typescript",
			"vim",
		],
	});
	return highlighter;
};
