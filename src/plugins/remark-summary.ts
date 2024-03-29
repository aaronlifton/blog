import type { Root } from "mdast";
import { toString as mdastToString } from "mdast-util-to-string";
import type { Plugin } from "unified";

export const remarkSummary: Plugin<[], Root> = () => (tree, file) => {
	if (!file) {
		return;
	}
	const firstParagraph = tree.children.find(
		(child) => child.type === "paragraph",
	);

	// @ts-expect-error: astro is unknown type
	file.data.astro.frontmatter.summary = mdastToString(firstParagraph);
};
