import { compile } from "@mdx-js/mdx";
import { raw } from "hast-util-raw";
import { sanitize } from "hast-util-sanitize";
import { toHtml } from "hast-util-to-html";
import { fromMarkdown } from "mdast-util-from-markdown";
import { toHast } from "mdast-util-to-hast";
import { toString as mdastToString } from "mdast-util-to-string";
import path from "path";
import getReadingTime from "reading-time";
import "./markdown.d.ts";

type FirstCodeResult = {lang: string, html: string}
export const getFirstCodeFromMdx = async (mdxContent: string): Promise<FirstCodeResult | void> => {
  const root = path.resolve(process.cwd(), "../");
  const tree = fromMarkdown(mdxContent);

  if (tree.children.length === 0) {
    return;
  }
  const codes = tree.children.filter((node) => node.type === "code");
  if (codes.length === 0) {
    return ;
  }
  console.log(codes[0]);

  // const cleanedCode = codes[0].value.replace("\n", "");
  const mdast = codes[0];
  const hast = raw(toHast(mdast, { allowDangerousHtml: true }));
  const safeHast = sanitize(hast);
  const html = toHtml(safeHast);

  return {
    lang: codes[0].lang,
    html,
  };
};

export function remarkReadingTime() {
  return (tree, { data: { astro  } }) => {
    const textOnPage = mdastToString(tree);
    const readingTime = getReadingTime(textOnPage);
    // readingTime.text will give us minutes read as a friendly string,
    // i.e. "3 min read"
    astro.frontmatter.minutesRead = readingTime.text;
  };
}
