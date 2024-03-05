import { A as AstroError, b as UnknownContentCollectionError, c as createComponent, r as renderUniqueStylesheet, d as renderScriptElement, e as createHeadAndContent, f as renderTemplate, g as renderComponent, u as unescapeHTML } from '../astro_V9-A_eD8.mjs';
import { p as prependForwardSlash } from '../astro/assets-service_ER1hFDUu.mjs';
import 'kleur/colors';
import 'clsx';
import 'cssesc';
import { createClient } from '@libsql/client';

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
lookupMap = {"autoFormatTest":{"type":"content","entries":{"optimizing-react-is-easy":"/src/content/autoFormatTest/optimizing-react-is-easy.mdx"}},"blog":{"type":"content","entries":{"neovim-macros-vs-registers":"/src/content/blog/neovim-macros-vs-registers.mdx","eslint-allow-underscore-prefix":"/src/content/blog/eslint-allow-underscore-prefix.mdx","neovim-spellcheck":"/src/content/blog/neovim-spellcheck.mdx","shaku-post":"/src/content/blog/shaku-post.mdx","speculation-rules-api":"/src/content/blog/speculation-rules-api.mdx","optimizing-react-is-easy":"/src/content/blog/optimizing-react-is-easy.mdx","rails-react-monorepos-2023":"/src/content/blog/rails-react-monorepos-2023.md","creating-a-sharedroot-group-in-osx":"/src/content/blog/creating-a-sharedroot-group-in-osx.md","wezterm-configuration-tricks":"/src/content/blog/wezterm-configuration-tricks.mdx","ruby-now-produces-machine-code-on-the-fly":"/src/content/blog/yjit-how-it-works/yjit-how-it-works.mdx"}}};

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/autoFormatTest/optimizing-react-is-easy.mdx": () => import('../optimizing-react-is-easy_Duo-Lp-O.mjs'),"/src/content/blog/creating-a-sharedroot-group-in-osx.md": () => import('../creating-a-sharedroot-group-in-osx_LhXWRr4e.mjs'),"/src/content/blog/eslint-allow-underscore-prefix.mdx": () => import('../eslint-allow-underscore-prefix_5BZHDbND.mjs'),"/src/content/blog/neovim-macros-vs-registers.mdx": () => import('../neovim-macros-vs-registers_5PmLo3p9.mjs'),"/src/content/blog/neovim-spellcheck.mdx": () => import('../neovim-spellcheck_3R47f89a.mjs'),"/src/content/blog/optimizing-react-is-easy.mdx": () => import('../optimizing-react-is-easy_MhUYjdg_.mjs'),"/src/content/blog/rails-react-monorepos-2023.md": () => import('../rails-react-monorepos-2023_bR87B5fb.mjs'),"/src/content/blog/shaku-post.mdx": () => import('../shaku-post_AaQg8TZp.mjs'),"/src/content/blog/speculation-rules-api.mdx": () => import('../speculation-rules-api_jwdeS96h.mjs'),"/src/content/blog/wezterm-configuration-tricks.mdx": () => import('../wezterm-configuration-tricks_WLRFQ90L.mjs'),"/src/content/blog/yjit-how-it-works/yjit-how-it-works.mdx": () => import('../yjit-how-it-works_Q_flSGKF.mjs')});
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const getCollection = createGetCollection({
	contentCollectionToEntryMap,
	dataCollectionToEntryMap,
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
});

const client = createClient({
  url: "libsql://devblog-aaronlifton.turso.io",
  authToken: "eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJpYXQiOiIyMDI0LTAxLTMxVDIyOjIwOjU1LjgyNzkyNTM3MVoiLCJpZCI6Ijc3MjJlODUzLWMwODUtMTFlZS1hOTQ3LThhNjE5YjY2M2I0NiJ9.LSV_ZuDZBI8BJPTbOYr2IZ7UsOuYisOmpSENGbdltWAxRGfOduTZ-qPvDaLFq_4YCbWmw5NXa1Dnk4CDZiciBQ"
});
const getViewsBySlug = async (slug) => {
  if (!slug) {
    return 0;
  }
  try {
    const initialViewCount = 0;
    const transaction = await client.transaction("write");
    const rsSelected = await transaction.execute({
      sql: "SELECT * FROM post_stats WHERE slug = :slug",
      args: { slug }
    });
    const prevViewCount = rsSelected?.rows?.length ? rsSelected.rows[0].views : initialViewCount;
    const rsUpdated = await transaction.execute({
      sql: "INSERT INTO post_stats (uid, slug, views) VALUES (:uid, :slug, :views) ON CONFLICT(slug) DO UPDATE SET views = :views RETURNING views",
      args: {
        uid: crypto.randomUUID(),
        slug,
        views: prevViewCount + 1
      }
    });
    await transaction.commit();
    return rsUpdated.rows[0].views;
  } catch (e) {
    console.error(e);
    return 0;
  }
};

const getViewsFn = getViewsBySlug ;
async function getStaticPaths() {
  const posts = await getCollection("blog");
  return posts.map((post) => ({
    params: { slug: post.slug }
  }));
}
const GET = async ({ params, request: _ }) => {
  let views = 0;
  if (params.slug) {
    views = await getViewsFn(params.slug);
  }
  return new Response(JSON.stringify({ views }));
};

const _slug__json = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  getStaticPaths
}, Symbol.toStringTag, { value: 'Module' }));

export { _slug__json as _, getCollection as g };
