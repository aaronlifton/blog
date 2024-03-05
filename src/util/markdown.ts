// rg -s "interface Code" node_modules/
import type { Code } from "node_modules/remark/node_modules/@types/mdast/index.d.ts";
// import "@types/mdast/index.d.ts";
import { raw } from "hast-util-raw";
import { sanitize } from "hast-util-sanitize";
import { toHtml } from "hast-util-to-html";
import { fromMarkdown } from "mdast-util-from-markdown";
import { toHast } from "mdast-util-to-hast";
import { toString as mdastToString } from "mdast-util-to-string";
// import getReadingTime from "reading-time";
import "./markdown.d.ts";
import type { CollectionEntry } from "astro:content";

type CodeResult = {
	post?: CollectionEntry<"blog">;
	html?: string;
	text?: string;
	lang?: string | null;
};
export type CodeResults = CodeResult[];

export const getFirstCodeFromMdx = async (
	mdxContent: string,
): Promise<CodeResult | null> => {
	const tree = fromMarkdown(mdxContent);

	if (tree.children.length === 0) {
		return null;
	}
	const codes = tree.children.filter((node) => node.type === "code") as Code[];
	if (codes.length === 0) {
		return null;
	}

	const mdast = codes[0];
	const hast = raw(toHast(mdast, { allowDangerousHtml: true }));
	const safeHast = sanitize(hast);
	const html = toHtml(safeHast);

	return {
		lang: codes[0].lang,
		html,
	};
};

const getCommentForLang = (lang: string): string => {
	const str = "continued...";
	if (lang === null || lang === undefined) {
		return str;
	}
	let output: string;
	switch (lang) {
		case "astro":
			output = `<!-- ${str}-->`;
			break;
		case "lua":
			output = `-- ${str}`;
			break;
		case "jsx":
			output = `/* ${str}*/`;
			break;
		case "ts":
			output = `// ${str}`;
			break;
		case "tsx":
			output = `/* ${str}*/`;
			break;
		case "js":
			output = `// ${str}`;
			break;
		case "css":
			output = `/* ${str}*/`;
			break;
		case "html":
			output = `<!-- ${str}-->`;
			break;
		case "json":
			output = `/* ${str}*/`;
			break;
		case "sh":
			output = `# ${str}`;
			break;
		case "fish":
			output = `# ${str}`;
			break;
		case "md":
			output = `<!-- ${str}-->`;
			break;
		case "vim":
			output = `" ${str}`;
			break;
		case "yaml":
			output = `# ${str}`;
			break;
		case "toml":
			output = `# ${str}`;
			break;
		case "sql":
			output = `-- ${str}`;
			break;
		case "graphql":
			output = `# ${str}`;
			break;
		case "json5":
			output = `/* ${str}*/`;
			break;
		default:
			output = `// ${str}`;
	}

	return output;
};

interface TruncateCodeOptions {
	numLines: number;
}

const truncateCode = (code: Code, opts: TruncateCodeOptions): string => {
	const mdast = code;
	const codeStr = mdastToString(mdast);
	const firstLines = codeStr
		.split("\n")
		.filter(
			(line) =>
				line.trim() !== "" &&
				!["#", "//", "/*", "<!--", "--"].find((str) =>
					line.trim().startsWith(str),
				),
		)
		.slice(0, opts.numLines)
		.join("\n");
	// @ts-ignore
	return `${firstLines}\n${getCommentForLang(code.lang)}`;
};

const codesFromMdAst = (mdxContent: string): Code[] => {
	const tree = fromMarkdown(mdxContent);
	return tree.children.filter((node) => node.type === "code") as Code[];
};

const defaultNumLines = 3;
type GetCodesFn = (
	mdxContent: string,
	options: TruncateCodeOptions,
) => Promise<CodeResults | null>;

export const getCodesFromMdx: GetCodesFn = async (
	mdxContent: string,
	{ numLines = defaultNumLines },
): Promise<CodeResults | null> => {
	const codes = codesFromMdAst(mdxContent);
	if (codes.length === 0) {
		return null;
	}

	const result = [];
	for (const code of codes) {
		const finalCodeStr = truncateCode(code, { numLines });
		result.push({
			lang: code.lang,
			text: finalCodeStr,
		});
	}

	return result;
};

// const getCodesFromMdxAsHtml = async (
// 	mdxContent: string,
// 	{ numLines = defaultNumLines },
// ): Promise<CodeResults | null> => {
// 	const codes = codesFromMdAst(mdxContent);
// 	if (codes.length === 0) {
// 		return null;
// 	}
// 	const result = [];
// 	for (const code of codes) {
// 		const hast = raw(toHast(code, { allowDangerousHtml: true }));
// 		const safeHast = sanitize(hast);
// 		const html = toHtml(safeHast);
// 		result.push({
// 			lang: code.lang,
// 			html,
// 		});
// 	}
// 	return result;
// };
