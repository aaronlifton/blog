import { toString as mdastToString } from 'mdast-util-to-string'
import getReadingTime from 'reading-time'

export const remarkReadingTime = (tree, file) => {
	const textOnPage = mdastToString(tree);
	const readingTime = getReadingTime(textOnPage);
	console.log("file", file);
	console.log("readingTime", readingTime);
	// readingTime.text will give us minutes read as a friendly string,
	// i.e. "3 min read"
	if (!file) return;
	file.data.astro.frontmatter.minutesRead = readingTime.text;
};
// import { toString as mdastToString } from 'mdast-util-to-string'
// import getReadingTime from 'reading-time'
// import type { Plugin } from 'unified'
// import { type Root } from '@types/mdast'
//
// export const remarkReadingTime: Plugin<[], Root> = () => {
// 	return function (tree, file) {
// 		const textOnPage = mdastToString(tree)
// 		const readingTime = getReadingTime(textOnPage)
//
// 		// @ts-expect-error FIXME: find a way to inject frontmatter safely
// 		file.data.astro.frontmatter.minutesRead = readingTime.minutes
// 	}
// }
