import type { Root } from "mdast";
import { toString as mdastToString } from "mdast-util-to-string";
import getReadingTime from "reading-time";
import type { Plugin } from "unified";

export const remarkReadingTime: Plugin<[], Root> = () => (tree, file) => {
	if (!file) {
		return;
	}
	const textOnPage = mdastToString(tree);
	const readingTime = getReadingTime(textOnPage);
	// readingTime.text will give us minutes read as a friendly string,
	// i.e. "3 min read"

	// @ts-expect-error: astro is unknown type
	file.data.astro.frontmatter.minutesRead = readingTime.text;
};
