import fs from "node:fs/promises";
import path from "path";
import * as acorn from "acorn";
import { fromMarkdown } from "mdast-util-from-markdown";
import { toMarkdown } from "mdast-util-to-markdown";
import { mdxjsEsm } from "micromark-extension-mdxjs-esm";
import {
  mdxjsEsmFromMarkdown,
  mdxjsEsmToMarkdown,
} from "mdast-util-mdxjs-esm";

//const doc = await fs.readFile('example.mdx')

const root = path.resolve(process.cwd(), "../");
const contentPath = path.join(root, "src/content/blog");
const blogPost = await fs.readFile(
  path.resolve(
    contentPath,
    "eslint-allow-underscore-prefix.mdx",
  ),
  "utf-8",
);
//const markdown = markdownIt({ html: true, linkify: true }) .use(frontMatter) .parse(blogPost);

const getFirstCodeFromMdx = (mdx) => {
  const tree = fromMarkdown(blogPost, {
    extensions: [mdxjsEsm({ acorn, addResult: true })],
    mdastExtensions: [mdxjsEsmFromMarkdown()],
  });

  if (tree.children.length === 0) {
    return null;
  }
  const codes = tree.children.filter(
    (node) => node.type === "code",
  );
  const cleanedCode = codes[0].value.replace("\n", "");
  const renderedCode = toMarkdown(codes[0], {
    extensions: [mdxjsEsmToMarkdown()],
  }).replace("\n", "");
  return {
    code: cleanedCode,
    lang: codes[0].lang,
    rendered: renderedCode,
  };
};

const res = getFirstCodeFromMdx(blogPost);
// fs.writeFile("example.mdx", res.rendered);
