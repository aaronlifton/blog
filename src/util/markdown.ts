import { type RemarkPlugin } from "@astrojs/markdown-remark";
import { type Code } from "@types/mdast/index.d.ts";
import { raw } from "hast-util-raw";
import { sanitize } from "hast-util-sanitize";
import { toHtml } from "hast-util-to-html";
import { fromMarkdown } from "mdast-util-from-markdown";
import { toHast } from "mdast-util-to-hast";
import { toString as mdastToString } from "mdast-util-to-string";
import getReadingTime from "reading-time";
import "./markdown.d.ts";

type CodeResult = Pick<Code, "lang"> & {
  html: string;
  post?: CollectionEntry<"blog">;
  text: string;
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

const getCommentForLang = (lang: Pick<Code, "lang">["lang"]): string => {
  const str = "continued...";
  if (lang === null || lang === undefined) {
    return str;
  }
  let output: string
  switch(lang) {
    case "astro":
      output = `<!-- ${str}-->`;
      break
    case "lua":
      output = `-- ${str}`;
      break
    case "jsx":
      output = `/* ${str}*/`;
      break
    case "ts":
      output = `// ${str}`;
      break
    case "tsx":
      output = `/* ${str}*/`;
      break
    case "js":
      output  = `// ${str}`;
      break
    case "css":
      output = `/* ${str}*/`;
      break
    case "html":
      output = `<!-- ${str}-->`;
      break
    case "json":
      output = `/* ${str}*/`;
      break
    case "sh":
      output =`# ${str}`;
      break
    case "fish":
      output = `# ${str}`;
      break
    case "md":
      output = `<!-- ${str}-->`;
      break
    case "vim":
      output = `" ${str}`;
      break
    case "yaml":
      output = `# ${str}`;
      break
    case "toml":
      output = `# ${str}`;
      break
    case "sql": 
      output = `-- ${str}`;
      break
    case "graphql":
      output = `# ${str}`;
      break
    case "json5":
      output = `/* ${str}*/`;
      break
    default:
      output = `// ${str}`;
  };

  return output
}

const truncateCode = (code: Code): string => {
    const mdast = code;
    const codeStr = mdastToString(mdast);
    const firstLines =
      codeStr
        .split("\n")
        .filter(
          (line) =>
            line.trim() !== "" &&
            !["#", "//", "/*", "<!--", "--"].find(str => line.trim().startsWith(str)))
        .slice(0, 3)
        .join("\n")
    return `${firstLines}\n${getCommentForLang(code.lang)}`;
}

export const getCodesFromMdx = async (
  mdxContent: string,
): Promise<CodeResults | null> => {
  const tree = fromMarkdown(mdxContent);

  if (tree.children.length === 0) {
    return null;
  }
  const codes = tree.children.filter((node) => node.type === "code") as Code[];
  // codes = codes.filter((code) => !mdastToString(code).includes("eslint"));
  if (codes.length === 0) {
    return null;
  }

  const result = [];
  for (const code of codes) {
    const finalCodeStr = truncateCode(code)
    const hast = raw(toHast(code, { allowDangerousHtml: true }));
    const safeHast = sanitize(hast);
    const html = toHtml(safeHast);
    result.push({
      lang: code.lang,
      html,
      text: finalCodeStr,
    });
  }

  return result;
};

export const remarkReadingTime: RemarkPlugin = (tree, { data: { astro } }) => {
  const textOnPage = mdastToString(tree);
  const readingTime = getReadingTime(textOnPage);
  // readingTime.text will give us minutes read as a friendly string,
  // i.e. "3 min read"
  astro.frontmatter.minutesRead = readingTime.text;
};
