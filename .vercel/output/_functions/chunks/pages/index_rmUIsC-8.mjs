import { fromMarkdown } from 'mdast-util-from-markdown';
import { toString } from 'mdast-util-to-string';
import path, { dirname } from 'path';
import { A as AstroError, k as UnknownContentCollectionError, e as createComponent, l as renderUniqueStylesheet, n as renderScriptElement, o as createHeadAndContent, r as renderTemplate, h as renderComponent, u as unescapeHTML, d as createAstro, m as maybeRenderHead, i as renderSlot, g as addAttribute, p as renderTransition, F as Fragment } from '../astro_XjYta8gE.mjs';
import 'kleur/colors';
import 'clsx';
import 'cssesc';
import { $ as $$Icon, a as $$Layout } from './about_LWRLzwh0.mjs';
import { p as prependForwardSlash } from '../astro/assets-service_TkJxMaBE.mjs';
import fs from 'fs';
import { fileURLToPath } from 'url';
/* empty css                          */

function createCollectionToGlobResultMap({
  globResult,
  contentDir
}) {
  const collectionToGlobResultMap = {};
  for (const key in globResult) {
    const keyRelativeToContentDir = key.replace(new RegExp(`^${contentDir}`), "");
    const segments = keyRelativeToContentDir.split("/");
    if (segments.length <= 1)
      continue;
    const collection = segments[0];
    collectionToGlobResultMap[collection] ??= {};
    collectionToGlobResultMap[collection][key] = globResult[key];
  }
  return collectionToGlobResultMap;
}
const cacheEntriesByCollection = /* @__PURE__ */ new Map();
function createGetCollection({
  contentCollectionToEntryMap,
  dataCollectionToEntryMap,
  getRenderEntryImport
}) {
  return async function getCollection(collection, filter) {
    let type;
    if (collection in contentCollectionToEntryMap) {
      type = "content";
    } else if (collection in dataCollectionToEntryMap) {
      type = "data";
    } else {
      console.warn(
        `The collection **${collection}** does not exist or is empty. Ensure a collection directory with this name exists.`
      );
      return;
    }
    const lazyImports = Object.values(
      type === "content" ? contentCollectionToEntryMap[collection] : dataCollectionToEntryMap[collection]
    );
    let entries = [];
    if (!Object.assign({"BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": true, "SITE": "https://example.com", "ASSETS_PREFIX": undefined}, { _: process.env._ })?.DEV && cacheEntriesByCollection.has(collection)) {
      entries = [...cacheEntriesByCollection.get(collection)];
    } else {
      entries = await Promise.all(
        lazyImports.map(async (lazyImport) => {
          const entry = await lazyImport();
          return type === "content" ? {
            id: entry.id,
            slug: entry.slug,
            body: entry.body,
            collection: entry.collection,
            data: entry.data,
            async render() {
              return render({
                collection: entry.collection,
                id: entry.id,
                renderEntryImport: await getRenderEntryImport(collection, entry.slug)
              });
            }
          } : {
            id: entry.id,
            collection: entry.collection,
            data: entry.data
          };
        })
      );
      cacheEntriesByCollection.set(collection, entries);
    }
    if (typeof filter === "function") {
      return entries.filter(filter);
    } else {
      return entries;
    }
  };
}
async function render({
  collection,
  id,
  renderEntryImport
}) {
  const UnexpectedRenderError = new AstroError({
    ...UnknownContentCollectionError,
    message: `Unexpected error while rendering ${String(collection)} → ${String(id)}.`
  });
  if (typeof renderEntryImport !== "function")
    throw UnexpectedRenderError;
  const baseMod = await renderEntryImport();
  if (baseMod == null || typeof baseMod !== "object")
    throw UnexpectedRenderError;
  const { default: defaultMod } = baseMod;
  if (isPropagatedAssetsModule(defaultMod)) {
    const { collectedStyles, collectedLinks, collectedScripts, getMod } = defaultMod;
    if (typeof getMod !== "function")
      throw UnexpectedRenderError;
    const propagationMod = await getMod();
    if (propagationMod == null || typeof propagationMod !== "object")
      throw UnexpectedRenderError;
    const Content = createComponent({
      factory(result, baseProps, slots) {
        let styles = "", links = "", scripts = "";
        if (Array.isArray(collectedStyles)) {
          styles = collectedStyles.map((style) => {
            return renderUniqueStylesheet(result, {
              type: "inline",
              content: style
            });
          }).join("");
        }
        if (Array.isArray(collectedLinks)) {
          links = collectedLinks.map((link) => {
            return renderUniqueStylesheet(result, {
              type: "external",
              src: prependForwardSlash(link)
            });
          }).join("");
        }
        if (Array.isArray(collectedScripts)) {
          scripts = collectedScripts.map((script) => renderScriptElement(script)).join("");
        }
        let props = baseProps;
        if (id.endsWith("mdx")) {
          props = {
            components: propagationMod.components ?? {},
            ...baseProps
          };
        }
        return createHeadAndContent(
          unescapeHTML(styles + links + scripts),
          renderTemplate`${renderComponent(
            result,
            "Content",
            propagationMod.Content,
            props,
            slots
          )}`
        );
      },
      propagation: "self"
    });
    return {
      Content,
      headings: propagationMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: propagationMod.frontmatter ?? {}
    };
  } else if (baseMod.Content && typeof baseMod.Content === "function") {
    return {
      Content: baseMod.Content,
      headings: baseMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: baseMod.frontmatter ?? {}
    };
  } else {
    throw UnexpectedRenderError;
  }
}
function isPropagatedAssetsModule(module) {
  return typeof module === "object" && module != null && "__astroPropagation" in module;
}

// astro-head-inject

const contentDir = '/src/content/';

const contentEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/autoFormatTest/optimizing-react-is-easy.mdx": () => import('../optimizing-react-is-easy_QHRW9gmk.mjs'),"/src/content/blog/creating-a-sharedroot-group-in-osx.md": () => import('../creating-a-sharedroot-group-in-osx_SOoAJfhH.mjs'),"/src/content/blog/eslint-allow-underscore-prefix.mdx": () => import('../eslint-allow-underscore-prefix_ehUcwjae.mjs'),"/src/content/blog/neovim-macros-vs-registers.mdx": () => import('../neovim-macros-vs-registers_2HF0oK-z.mjs'),"/src/content/blog/neovim-spellcheck.mdx": () => import('../neovim-spellcheck_yCFWWr84.mjs'),"/src/content/blog/optimizing-react-is-easy.mdx": () => import('../optimizing-react-is-easy_xlVFur7q.mjs'),"/src/content/blog/rails-react-monorepos-2023.md": () => import('../rails-react-monorepos-2023_kNj-YYwT.mjs'),"/src/content/blog/shaku-post.mdx": () => import('../shaku-post_sxeg56i3.mjs'),"/src/content/blog/speculation-rules-api.mdx": () => import('../speculation-rules-api_AnwZIoIZ.mjs'),"/src/content/blog/wezterm-configuration-tricks.mdx": () => import('../wezterm-configuration-tricks_NnWnv2w3.mjs'),"/src/content/blog/yjit-how-it-works/yjit-how-it-works.mdx": () => import('../yjit-how-it-works_kEfyg1Qx.mjs')});
const contentCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = /* #__PURE__ */ Object.assign({});
const dataCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {"blog":{"type":"content","entries":{"neovim-macros-vs-registers":"/src/content/blog/neovim-macros-vs-registers.mdx","eslint-allow-underscore-prefix":"/src/content/blog/eslint-allow-underscore-prefix.mdx","neovim-spellcheck":"/src/content/blog/neovim-spellcheck.mdx","creating-a-sharedroot-group-in-osx":"/src/content/blog/creating-a-sharedroot-group-in-osx.md","optimizing-react-is-easy":"/src/content/blog/optimizing-react-is-easy.mdx","rails-react-monorepos-2023":"/src/content/blog/rails-react-monorepos-2023.md","speculation-rules-api":"/src/content/blog/speculation-rules-api.mdx","shaku-post":"/src/content/blog/shaku-post.mdx","wezterm-configuration-tricks":"/src/content/blog/wezterm-configuration-tricks.mdx","ruby-now-produces-machine-code-on-the-fly":"/src/content/blog/yjit-how-it-works/yjit-how-it-works.mdx"}},"autoFormatTest":{"type":"content","entries":{"optimizing-react-is-easy":"/src/content/autoFormatTest/optimizing-react-is-easy.mdx"}}};

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/autoFormatTest/optimizing-react-is-easy.mdx": () => import('../optimizing-react-is-easy_3vnjRVJP.mjs'),"/src/content/blog/creating-a-sharedroot-group-in-osx.md": () => import('../creating-a-sharedroot-group-in-osx_p_vDE9v3.mjs'),"/src/content/blog/eslint-allow-underscore-prefix.mdx": () => import('../eslint-allow-underscore-prefix_eogwMSAK.mjs'),"/src/content/blog/neovim-macros-vs-registers.mdx": () => import('../neovim-macros-vs-registers_Jh1e93As.mjs'),"/src/content/blog/neovim-spellcheck.mdx": () => import('../neovim-spellcheck_gwHCq5B-.mjs'),"/src/content/blog/optimizing-react-is-easy.mdx": () => import('../optimizing-react-is-easy_sTWlGsiO.mjs'),"/src/content/blog/rails-react-monorepos-2023.md": () => import('../rails-react-monorepos-2023_pQZcmhnz.mjs'),"/src/content/blog/shaku-post.mdx": () => import('../shaku-post_lJRDrAsa.mjs'),"/src/content/blog/speculation-rules-api.mdx": () => import('../speculation-rules-api_U6zIThhI.mjs'),"/src/content/blog/wezterm-configuration-tricks.mdx": () => import('../wezterm-configuration-tricks_y3c09OYF.mjs'),"/src/content/blog/yjit-how-it-works/yjit-how-it-works.mdx": () => import('../yjit-how-it-works_-qwmjMep.mjs')});
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const getCollection = createGetCollection({
	contentCollectionToEntryMap,
	dataCollectionToEntryMap,
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
});

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

export { getMonthName as a, getSlugFromPathname as b, getCodesFromMdx as c, index as d, getCollection as g, iconForTag as i };
