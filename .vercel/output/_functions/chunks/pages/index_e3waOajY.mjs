import { fromMarkdown } from 'mdast-util-from-markdown';
import { toString } from 'mdast-util-to-string';
import path, { dirname } from 'path';
import { j as createAstro, c as createComponent, f as renderTemplate, m as maybeRenderHead, n as renderSlot, l as addAttribute, p as renderTransition, g as renderComponent, F as Fragment } from '../astro_V9-A_eD8.mjs';
import 'kleur/colors';
import 'clsx';
import 'cssesc';
import { $ as $$Icon, a as $$Layout } from './about_mRcxcZE_.mjs';
import { g as getCollection } from './_slug__-Da_Y3ly.mjs';
import fs from 'fs';
import { fileURLToPath } from 'url';
/* empty css                          */

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootPath = path.join(__dirname, "../");
function getAllPaths(iconsPath) {
  let allFilePaths = [];
  const files = fs.readdirSync(iconsPath, { withFileTypes: true });
  const getFilePath = (file) => path.join(file.path, file.name);
  for (const file of files) {
    const filePath = getFilePath(file);
    if (file.isDirectory()) {
      allFilePaths = allFilePaths.concat(getAllPaths(filePath).map((fp) => {
        return path.join(file.name, path.parse(fp).name);
      }));
    } else {
      allFilePaths.push(path.parse(file.name).name);
    }
  }
  return allFilePaths;
}
const icons = getAllPaths(path.join(rootPath, "icons"));
const tagIconMap = {
  // ruby: "rails",
  rails: "rails",
  "quick tips": "tabler/bulb-light",
  performance: "tabler/rocket",
  optimization: "tabler/speed",
  monorepo: "tabler/stack",
  osx: "apple",
  terminal: "tabler/terminal",
  productivity: "tabler/inbox",
  compilers: "tabler/cpp"
};
const iconCache = /* @__PURE__ */ new Map();
const iconForTag = (tag) => {
  if (iconCache.has(tag)) {
    return iconCache.get(tag);
  }
  const iconName = tagIconMap[tag] || tag;
  if (!icons.includes(iconName)) {
    iconCache.set(tag, null);
    return null;
  }
  iconCache.set(tag, iconName);
  return iconName;
};

const getCommentForLang = (lang) => {
  const str = "continued...";
  if (lang === null || lang === void 0) {
    return str;
  }
  let output;
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
const truncateCode = (code, opts) => {
  const mdast = code;
  const codeStr = toString(mdast);
  const firstLines = codeStr.split("\n").filter(
    (line) => line.trim() !== "" && !["#", "//", "/*", "<!--", "--"].find(
      (str) => line.trim().startsWith(str)
    )
  ).slice(0, opts.numLines).join("\n");
  return `${firstLines}
${getCommentForLang(code.lang)}`;
};
const codesFromMdAst = (mdxContent) => {
  const tree = fromMarkdown(mdxContent);
  return tree.children.filter((node) => node.type === "code");
};
const defaultNumLines = 3;
const getCodesFromMdx = async (mdxContent, { numLines = defaultNumLines }) => {
  const codes = codesFromMdAst(mdxContent);
  if (codes.length === 0) {
    return null;
  }
  const result = [];
  for (const code of codes) {
    const finalCodeStr = truncateCode(code, { numLines });
    result.push({
      lang: code.lang,
      text: finalCodeStr
    });
  }
  return result;
};

const unique = (array) => Array.from(new Set(array));

const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];
const getMonthName = (date) => MONTHS[new Date(date).getMonth()];
const getSlugFromPathname = (pathname) => path.basename(pathname, path.extname(pathname));

const $$Astro$1 = createAstro("https://example.com");
const $$TagList = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$TagList;
  const { tags } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="mb-4 text-center" data-astro-cid-lga65v7i> ${renderSlot($$result, $$slots["header"])} <ul class="tag-list" data-astro-cid-lga65v7i> ${tags.map((tag) => renderTemplate`<li data-astro-cid-lga65v7i> <a class="tag"${addAttribute(`/tags/${tag}`, "href")}${addAttribute(`View posts tagged under "${tag}"`, "title")} style="display: inline-block;" data-astro-cid-lga65v7i${addAttribute(renderTransition($$result, "p4dclvmf", "slide", ""), "data-astro-transition-scope")}> ${iconForTag(tag) && renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "name": iconForTag(tag), "data-astro-cid-lga65v7i": true })}`} <span data-astro-cid-lga65v7i>${tag}</span> </a> </li>`)} </ul> </div> `;
}, "/Users/aaron/Code/astro/fullstack-dev-blog/src/components/TagList.astro", "self");

const $$Astro = createAstro("https://example.com");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const blogPosts = await getCollection("blog");
  const filteredPosts = blogPosts.filter((post) => !post.data.draft);
  const data = filteredPosts.map((post) => post.data.tags);
  const allTags = unique(data.flat());
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "TagList", $$TagList, { "tags": allTags }, { "header": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "header" }, { "default": ($$result4) => renderTemplate` ${maybeRenderHead()}<h5> ${renderComponent($$result4, "Icon", $$Icon, { "name": "tabler/tags", "class": "relative top-[-0.1ch] inline" })}Tags
</h5> ` })}` })} ` })}`;
}, "/Users/aaron/Code/astro/fullstack-dev-blog/src/pages/tags/index.astro", void 0);

const $$file = "/Users/aaron/Code/astro/fullstack-dev-blog/src/pages/tags/index.astro";
const $$url = "/tags";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { getSlugFromPathname as a, getCodesFromMdx as b, index as c, getMonthName as g, iconForTag as i };
