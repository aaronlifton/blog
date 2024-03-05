import { g as getCollection, a as getMonthName, i as iconForTag, b as getSlugFromPathname, c as getCodesFromMdx } from './pages/index_rmUIsC-8.mjs';
import { createClient } from '@libsql/client';
import { d as createAstro, e as createComponent, r as renderTemplate, h as renderComponent, u as unescapeHTML, F as Fragment, m as maybeRenderHead, g as addAttribute, s as spreadAttributes, i as renderSlot } from './astro_XjYta8gE.mjs';
import 'kleur/colors';
import clsx from 'clsx';
import 'cssesc';
import { c as $$Image, P as PAGE_SIZE, a as $$Layout, $ as $$Icon, d as $$Prose, e as $$BaseHead, f as $$Header } from './pages/about_LWRLzwh0.mjs';
import fs from 'fs';
import path from 'path';
import { ImageResponse } from '@vercel/og';
import { twMerge } from 'tailwind-merge';
/* empty css                                                           */
import { jsx } from 'react/jsx-runtime';
import * as React from 'react';
import { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { S as Styles } from './_slug_.b479af2a_WDHawjjJ.mjs';
import { atom } from 'nanostores';
import { animate, motion } from 'framer-motion';
import * as pkg from 'react-use';
import fs$1 from 'fs/promises';
/* empty css                          */
/* empty css                          */
/* empty css                          */
/* empty css                          */
import { bundledLanguages } from 'shikiji/langs';
import { createShikiHighlighter } from '@astrojs/markdown-remark';
import { S as Styles$1 } from './index.80736cc8_lvKHVGrU.mjs';

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
const prerender$7 = true;
async function getStaticPaths$6() {
  const posts = await getCollection("blog");
  return posts.map((post) => ({
    params: { slug: post.slug }
  }));
}
const GET$2 = async ({ params, request: _ }) => {
  let views = 0;
  if (params.slug) {
    views = await getViewsFn(params.slug);
  }
  return new Response(JSON.stringify({ views }));
};

const _slug__json = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	GET: GET$2,
	getStaticPaths: getStaticPaths$6,
	prerender: prerender$7
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$j = createAstro("https://example.com");
const $$CodeText = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$j, $$props, $$slots);
  Astro2.self = $$CodeText;
  const { text } = Astro2.props;
  function parseText(text2) {
    const regex = /`([^`]+)`/g;
    let result = text2.replace(regex, "<code>$1</code>");
    return result.replace(/`/g, "");
  }
  const parsedText = parseText(text);
  return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(parsedText)}` })}`;
}, "/Users/aaron/Code/astro/fullstack-dev-blog/src/components/CodeText.astro", void 0);

const $$Astro$i = createAstro("https://example.com");
const $$HomeImage = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$i, $$props, $$slots);
  Astro2.self = $$HomeImage;
  const {
    src,
    alt,
    width = 100,
    postTitle,
    postLink,
    className = ""
  } = Astro2.props;
  return renderTemplate`${src && renderTemplate`${maybeRenderHead()}<a${addAttribute(postLink, "href")} data-astro-cid-hqn3m66j>${renderComponent($$result, "Image", $$Image, { "class": className, "src": src, "widths": [100, 240, 540, 720, src.width], "sizes": `(max-width: 360px) 240px, (max-width: 720px) 540px, (max-width: 1600px) 720px, ${src.width}px`, "title": alt, "alt": `Go to the post titled "${postTitle}"`, "width": width, "data-astro-cid-hqn3m66j": true })}</a>`}`;
}, "/Users/aaron/Code/astro/fullstack-dev-blog/src/components/HomeImage.astro", void 0);

const $$Astro$h = createAstro("https://example.com");
const $$PostPreview = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$h, $$props, $$slots);
  Astro2.self = $$PostPreview;
  const { post, asCard = false } = Astro2.props;
  return renderTemplate`<!-- product.forEach(([color, value]) => { --><!--     return ( --><!--       <div class="post-preview-card" style="min-height:100"> --><!--         <p> --><!--           Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint --><!--           cillum sint consectetur cupidatat. --><!--         </p> --><!--       </div> --><!--     ); --><!--   }) -->${maybeRenderHead()}<div${addAttribute(["post-preview", { "post-preview--card": asCard }], "class:list")} data-astro-cid-jzq3evcu> <div class="post-preview__date-box" data-astro-cid-jzq3evcu> <div class="post-preview__date" data-astro-cid-jzq3evcu> <span class="post-preview__date__day" data-astro-cid-jzq3evcu>${new Date(post.data.pubDate).getDate()}</span> <span class="post-preview__date__month-n-year" data-astro-cid-jzq3evcu>${`${getMonthName(post.data.pubDate)} ${new Date(post.data.pubDate).getFullYear()}`}</span> </div> </div> <div data-astro-cid-jzq3evcu> ${renderComponent($$result, "HomeImage", $$HomeImage, { "src": post.data.cover, "alt": post.data.coverAlt, "link": `/posts/${post.slug}`, "postTitle": post.data.title, "postLink": `/blog/${post.slug}`, "width": asCard ? 400 : 100, "data-home-image": true, "data-astro-cid-jzq3evcu": true })} </div> <div class="flex flex-1 flex-col" data-astro-cid-jzq3evcu> <div class="post-preview__title space-apart flex
      dark:text-dark-primary" data-astro-cid-jzq3evcu> <a${addAttribute(`/blog/${post.slug}`, "href")}${addAttribute(post.data.title, "title")} class="text-md grow
        font-normal" data-astro-cid-jzq3evcu> ${renderComponent($$result, "CodeText", $$CodeText, { "text": post.data.title, "data-astro-cid-jzq3evcu": true })} </a> </div> <p class="post-preview__desc" data-astro-cid-jzq3evcu> ${renderComponent($$result, "CodeText", $$CodeText, { "text": post.data.description, "data-astro-cid-jzq3evcu": true })} </p> <div class="flex grow flex-row gap-2" data-astro-cid-jzq3evcu> <!-- <p style="color:oklab(83.9% -2.09 4.37)">Sample code:</p> --> <!-- <p style="lab(83.37% 1.51 -22.22)">Sample code:</p> --> <!-- <p style="lab(86.96% 0.87 -16.77)">Sample code:</p> --> <!-- oklch(89% 0.045 270.12) --> <!-- oklch(86% 0.06 270.12) --> <!-- oklch(86.5% 0.072 309.04) // French lilac -150 --> <!-- oklch(81.5% 0.107 309.04) // French lilac -175<F19> --> <!-- <SampleCode slug = {post.slug} /> --> <!-- <ReadPostButton link={\`/blog/\${post.slug}\`} /> --> </div> </div> </div> `;
}, "/Users/aaron/Code/astro/fullstack-dev-blog/src/components/PostPreview.astro", void 0);

const $$Astro$g = createAstro("https://example.com");
const $$PostPreviewList = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$g, $$props, $$slots);
  Astro2.self = $$PostPreviewList;
  const { posts, heading, mode = "col", asCard = false } = Astro2.props;
  const sortedPosts = posts.sort(
    (a, b) => new Date(a.data.pubDate).valueOf() - new Date(b.data.pubDate).valueOf()
  );
  return renderTemplate`${heading ? renderTemplate`${maybeRenderHead()}<h2${addAttribute(`post-preview__heading post-preview__heading--${mode}`, "class")} data-astro-cid-n45jycaa>${heading}</h2>` : ""}<hr data-astro-cid-n45jycaa> <section${addAttribute(`post-preview__list post-preview__list--${mode}`, "class")} data-astro-cid-n45jycaa> ${sortedPosts.map((post) => renderTemplate`${renderComponent($$result, "PostPreview", $$PostPreview, { "post": post, "asCard": asCard, "data-astro-cid-n45jycaa": true })}`)} </section> `;
}, "/Users/aaron/Code/astro/fullstack-dev-blog/src/components/PostPreviewList.astro", void 0);

const $$Astro$f = createAstro("https://example.com");
const $$PostPreviewListFooter = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
  Astro2.self = $$PostPreviewListFooter;
  return renderTemplate`${maybeRenderHead()}<div class="page__actions" data-astro-cid-xz6e2keb> <a class="action__go-to-blog ink-h" href="/blog" title="All Posts" data-astro-cid-xz6e2keb>All Posts &rarr;</a> </div> `;
}, "/Users/aaron/Code/astro/fullstack-dev-blog/src/components/PostPreviewListFooter.astro", void 0);

/** @returns {void} */

function run(fn) {
	return fn();
}

function blank_object() {
	return Object.create(null);
}

/**
 * @param {Function[]} fns
 * @returns {void}
 */
function run_all(fns) {
	fns.forEach(run);
}

let current_component;

/** @returns {void} */
function set_current_component(component) {
	current_component = component;
}

// general each functions:

function ensure_array_like(array_like_or_iterator) {
	return array_like_or_iterator?.length !== undefined
		? array_like_or_iterator
		: Array.from(array_like_or_iterator);
}

const ATTR_REGEX = /[&"]/g;
const CONTENT_REGEX = /[&<]/g;

/**
 * Note: this method is performance sensitive and has been optimized
 * https://github.com/sveltejs/svelte/pull/5701
 * @param {unknown} value
 * @returns {string}
 */
function escape(value, is_attr = false) {
	const str = String(value);
	const pattern = is_attr ? ATTR_REGEX : CONTENT_REGEX;
	pattern.lastIndex = 0;
	let escaped = '';
	let last = 0;
	while (pattern.test(str)) {
		const i = pattern.lastIndex - 1;
		const ch = str[i];
		escaped += str.substring(last, i) + (ch === '&' ? '&amp;' : ch === '"' ? '&quot;' : '&lt;');
		last = i + 1;
	}
	return escaped + str.substring(last);
}

/** @returns {string} */
function each(items, fn) {
	items = ensure_array_like(items);
	let str = '';
	for (let i = 0; i < items.length; i += 1) {
		str += fn(items[i], i);
	}
	return str;
}

function validate_component(component, name) {
	if (!component || !component.$$render) {
		if (name === 'svelte:component') name += ' this={...}';
		throw new Error(
			`<${name}> is not a valid SSR component. You may need to review your build config to ensure that dependencies are compiled, rather than imported as pre-compiled modules. Otherwise you may need to fix a <${name}>.`
		);
	}
	return component;
}

let on_destroy;

/** @returns {{ render: (props?: {}, { $$slots, context }?: { $$slots?: {}; context?: Map<any, any>; }) => { html: any; css: { code: string; map: any; }; head: string; }; $$render: (result: any, props: any, bindings: any, slots: any, context: any) => any; }} */
function create_ssr_component(fn) {
	function $$render(result, props, bindings, slots, context) {
		const parent_component = current_component;
		const $$ = {
			on_destroy,
			context: new Map(context || (parent_component ? parent_component.$$.context : [])),
			// these will be immediately discarded
			on_mount: [],
			before_update: [],
			after_update: [],
			callbacks: blank_object()
		};
		set_current_component({ $$ });
		const html = fn(result, props, bindings, slots);
		set_current_component(parent_component);
		return html;
	}
	return {
		render: (props = {}, { $$slots = {}, context = new Map() } = {}) => {
			on_destroy = [];
			const result = { title: '', head: '', css: new Set() };
			const html = $$render(result, props, {}, $$slots, context);
			run_all(on_destroy);
			return {
				html,
				css: {
					code: Array.from(result.css)
						.map((css) => css.code)
						.join('\n'),
					map: null // TODO
				},
				head: result.title + result.head
			};
		},
		$$render
	};
}

/** @returns {string} */
function add_attribute(name, value, boolean) {
	if (value == null || (boolean && !value)) return '';
	const assignment = boolean && value === true ? '' : `="${escape(value, true)}"`;
	return ` ${name}${assignment}`;
}

/* src/components/Pages.svelte generated by Svelte v4.2.8 */

const css$2 = {
	code: "nav.svelte-13cncr3{margin-bottom:1rem;display:flex;width:100%;justify-content:center\n}a.svelte-13cncr3{margin-left:0.25rem;margin-right:0.25rem;border-radius:0.5rem;padding-left:0.75rem;padding-right:0.75rem;padding-top:0.25rem;padding-bottom:0.25rem;--tw-text-opacity:1;color:rgb(107 114 128 / var(--tw-text-opacity))\n}a.selected.svelte-13cncr3{--tw-bg-opacity:1;background-color:rgb(126 34 206 / var(--tw-bg-opacity));--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity))\n}",
	map: null
};

const Pages = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let { baseUrl } = $$props;
	let { currentPage } = $$props;
	let { totalPages } = $$props;
	const prevPage = `${baseUrl}/${currentPage - 1}`;
	const nextPage = `${baseUrl}/${currentPage + 1}`;
	const pageUrl = page => `${baseUrl}/${page}`;
	if ($$props.baseUrl === void 0 && $$bindings.baseUrl && baseUrl !== void 0) $$bindings.baseUrl(baseUrl);
	if ($$props.currentPage === void 0 && $$bindings.currentPage && currentPage !== void 0) $$bindings.currentPage(currentPage);
	if ($$props.totalPages === void 0 && $$bindings.totalPages && totalPages !== void 0) $$bindings.totalPages(totalPages);
	$$result.css.add(css$2);

	return `<nav class="svelte-13cncr3"><a${add_attribute("href", prevPage, 0)} class="svelte-13cncr3">prev</a> ${each(Array(totalPages), (_, i) => {
		return `<a${add_attribute("href", pageUrl(i + 1), 0)} class="${["svelte-13cncr3", currentPage === i + 1 ? "selected" : ""].join(' ').trim()}">${escape(i + 1)}</a>`;
	})} <a${add_attribute("href", nextPage, 0)} class="svelte-13cncr3">next</a> </nav>`;
});

const $$Astro$e = createAstro("https://example.com");
async function getStaticPaths$5({
  paginate
}) {
  let posts = await getCollection("blog");
  posts = posts.filter((post) => !post.data.draft).sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
  return paginate(posts, { pageSize: PAGE_SIZE });
}
const prerender$6 = true;
const $$page$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$page$1;
  const { page } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate`${page && renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="mb-vert-padding flex items-center justify-center"> <p class="full not-prose mb-0 translate-x-2/4 text-center text-base italic">
Page ${page.currentPage} </p> </div> ${renderComponent($$result3, "PostPreviewList", $$PostPreviewList, { "posts": page.data, "heading": "Posts" })} ${renderComponent($$result3, "PostPreviewListFooter", $$PostPreviewListFooter, {})} ${renderComponent($$result3, "Pages", Pages, { "baseUrl": Astro2.url.pathname.slice(0, -2), "currentPage": page.currentPage, "totalPages": page.lastPage })} ` })}`}` })}`;
}, "/Users/aaron/Code/astro/fullstack-dev-blog/src/pages/blog/[page].astro", void 0);

const $$file$4 = "/Users/aaron/Code/astro/fullstack-dev-blog/src/pages/blog/[page].astro";
const $$url$4 = "/blog/[page]";

const _page_$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$page$1,
	file: $$file$4,
	getStaticPaths: getStaticPaths$5,
	prerender: prerender$6,
	url: $$url$4
}, Symbol.toStringTag, { value: 'Module' }));

const prerender$5 = true;
async function GET$1({ props }) {
  const { post } = props;
  if (post.data.draft === true) {
    Astro.response.status = 404;
    Astro.response.statusText = "Not found";
    return;
  }
  const DmSansBold = fs.readFileSync(
    path.resolve("public/fonts/dm-sans-latin-600-normal.ttf")
  );
  const DmSansReqular = fs.readFileSync(
    path.resolve("public/fonts/dm-sans-latin-400-normal.ttf")
  );
  const postCover = fs.readFileSync(
    process.env.NODE_ENV === "development" ? path.resolve(
      post.data.cover.src.replace(/\?.*/, "").replace("/@fs", "")
    ) : path.resolve(post.data.cover.src.replace("/", "dist/"))
  );
  const html = {
    type: "div",
    props: {
      children: [
        {
          type: "div",
          props: {
            // using tailwind
            tw: "w-[250px] h-[100px] flex rounded-3xl ",
            children: [
              {
                type: "img",
                props: {
                  src: postCover.buffer
                }
              }
            ]
          }
        },
        {
          type: "div",
          props: {
            tw: "pl-10 shrink flex",
            children: [
              {
                type: "div",
                props: {
                  style: {
                    fontSize: "48px",
                    fontFamily: "DM Sans Bold"
                  },
                  children: post.data.title
                }
              }
            ]
          }
        },
        {
          type: "div",
          props: {
            tw: "absolute right-[40px] bottom-[40px] flex items-center",
            children: [
              {
                type: "div",
                props: {
                  tw: "text-blue-600 text-3xl",
                  style: {
                    fontFamily: "DM Sans Bold"
                  },
                  children: "Aaron Lifton"
                }
              },
              {
                type: "div",
                props: {
                  tw: "px-2 text-3xl",
                  style: {
                    fontSize: "30px"
                  },
                  children: "|"
                }
              },
              {
                type: "div",
                props: {
                  tw: "text-3xl",
                  children: "Blog"
                }
              }
            ]
          }
        }
      ],
      tw: "w-full h-full flex items-center justify-center relative px-22",
      style: {
        background: "#f7f8e8",
        fontFamily: "DM Sans Regular"
      }
    }
  };
  return new ImageResponse(html, {
    width: 1200,
    height: 600,
    fonts: [
      {
        name: "DM Sans Bold",
        data: DmSansBold.buffer,
        style: "normal"
      },
      {
        name: "DM Sans Regular",
        data: DmSansReqular.buffer,
        style: "normal"
      }
    ]
  });
}
async function getStaticPaths$4() {
  const blogPosts = await getCollection("blog");
  return blogPosts.map((post) => ({
    params: { slug: post.slug },
    props: { post }
  }));
}

const og_png = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	GET: GET$1,
	getStaticPaths: getStaticPaths$4,
	prerender: prerender$5
}, Symbol.toStringTag, { value: 'Module' }));

/* src/components/Prose.svelte generated by Svelte v4.2.8 */

const Prose = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let { className = null } = $$props;
	if ($$props.className === void 0 && $$bindings.className && className !== void 0) $$bindings.className(className);
	return `<article${add_attribute("class", twMerge("prose text-center max-w-content", className), 0)}>${slots.default ? slots.default({}) : ``}</article>`;
});

/* src/components/ZoomImage.svelte generated by Svelte v4.2.8 */

const css$1 = {
	code: "dialog.svelte-fu0dbb.svelte-fu0dbb{z-index:1;--tw-bg-opacity:1;background-color:rgba(240, 243, 255, var(--tw-bg-opacity));transition-property:all;transition-timing-function:cubic-bezier(.23,1,.32,1);transition-delay:150ms;transition-duration:300ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}@supports (color: color(display-p3 0 0 0)){dialog.svelte-fu0dbb.svelte-fu0dbb{background-color:color(display-p3 0.94177 0.95165 0.99851 / var(--tw-bg-opacity))}}@supports (color: oklab(0% 0 0)){dialog.svelte-fu0dbb.svelte-fu0dbb{background-color:oklch(0.964844 0.01775 275 / var(--tw-bg-opacity))}}dialog.svelte-fu0dbb.svelte-fu0dbb::backdrop{transition:backdrop 0.5s ease-in-out;background:rgba(0, 0, 0, 0.3)}dialog[open].svelte-fu0dbb.svelte-fu0dbb{--tw-bg-opacity:1;background-color:rgba(250, 251, 254, var(--tw-bg-opacity))}@supports (color: oklab(0% 0 0)){dialog[open].svelte-fu0dbb.svelte-fu0dbb{background-color:oklch(0.988281 0.0046875 275 / var(--tw-bg-opacity))}}dialog.svelte-fu0dbb img.svelte-fu0dbb{margin-bottom:1rem}",
	map: null
};

const ZoomImage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let { src } = $$props;
	let { alt } = $$props;
	let { caption } = $$props;
	let { hero = false } = $$props;
	caption ||= alt;

	if ($$props.src === void 0 && $$bindings.src && src !== void 0) $$bindings.src(src);
	if ($$props.alt === void 0 && $$bindings.alt && alt !== void 0) $$bindings.alt(alt);
	if ($$props.caption === void 0 && $$bindings.caption && caption !== void 0) $$bindings.caption(caption);
	if ($$props.hero === void 0 && $$bindings.hero && hero !== void 0) $$bindings.hero(hero);
	$$result.css.add(css$1);

	return ` <button aria-label="Open full-size image"><figure class="my-8 bg-surface rounded-md py-1">${slots.default ? slots.default({}) : ``} ${caption && !hero
	? `${validate_component(Prose, "Prose").$$render(
			$$result,
			{
				className: "mb-2 prose-gray text-base italic"
			},
			{},
			{
				default: () => {
					return `<figcaption>${escape(caption)}</figcaption>`;
				}
			}
		)}`
	: ``}</figure></button> <dialog class="${[
		"p-3 animate-dialog-in animate-dialog-out svelte-fu0dbb",
		("") + ' ' + ("bg-gray-50" )
	].join(' ').trim()}"><button class="absolute top-0 right-0 p-2 border border-radius-md bg-gray-100 border-color-gray-300 border-1 w-8 h-8 text-gray-400 hover:text-red-400 text-base font-bold leading-5" aria-label="Close" data-svelte-h="svelte-5ya9si">X</button> <figure class="bg-surface rounded-md py-1"><img${add_attribute("src", src, 0)}${add_attribute("alt", alt, 0)} class="svelte-fu0dbb"> ${validate_component(Prose, "Prose").$$render($$result, { className: "mb-2 prose-gray" }, {}, {
		default: () => {
			return `<figcaption>${escape(caption)}</figcaption>`;
		}
	})}</figure> </dialog>`;
});

const $$Astro$d = createAstro("https://example.com");
const $$IconTextLink = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$IconTextLink;
  const { text, iconName, className, ...rest } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${spreadAttributes(rest)}${addAttribute(twMerge(
    className,
    "[&_svg]:fill-theme-amethyst-100; align-middle text-sm text-gray-500 text-amethyst-800 no-underline underline-offset-4 hover:text-amethyst-900 hover:no-underline [&:hover_svg]:bg-amethyst-200 [&:hover_svg]:stroke-amethyst-500 [&:hover_svg]:text-amethyst-500 [&_hover_span]:underline [&_span]:underline [&_svg]:bg-amethyst-100"
  ), "class")}> <span class="underline underline-offset-4">Back to top</span> ${renderComponent($$result, "Icon", $$Icon, { "name": "tabler/chevron-up", "class": "inline-block" })} </a>`;
}, "/Users/aaron/Code/astro/fullstack-dev-blog/src/components/IconTextLink.astro", void 0);

const $$Astro$c = createAstro("https://example.com");
const $$FormattedDate = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$FormattedDate;
  const { date } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<time${addAttribute(date.toISOString(), "datetime")}> ${date.toLocaleDateString("en-us", {
    year: "numeric",
    month: "short",
    day: "numeric"
  })} </time>`;
}, "/Users/aaron/Code/astro/fullstack-dev-blog/src/components/FormattedDate.astro", void 0);

const IconButton = React.forwardRef(({ variant, className: providedClassName, ...rest }, ref) => {
  variant ||= "rounded-full";
  const className = React.useMemo(() => {
    return twMerge(
      clsx(
        "bg-surface",
        "hover:bg-hover",
        "text-on-background",
        "disabled:bg-disabled",
        "disabled:text-on-disabled",
        "disabled:hover:cursor-not-allowed",
        "disabled:hover:bg-disabled",
        "hover:text-primary",
        "transition-colors",
        "duration-300",
        {
          "min-w-[40px] h-[40px] flex justify-center items-center rounded-full px-2": variant === "rounded-full",
          "rounded border border-divider p-1 shadow-sm shadow-shadow": variant === "rounded"
        },
        providedClassName
      )
    );
  }, [variant, providedClassName]);
  return /* @__PURE__ */ jsx(
    "button",
    {
      ref,
      type: "button",
      ...rest,
      className
    }
  );
});

/* src/components/PostStats.svelte generated by Svelte v4.2.8 */

const css = {
	code: ".post-stats__views.svelte-xfpbcr{margin-left:0.25rem;margin-right:0.25rem;padding-right:0.25rem;font-style:italic;--tw-text-opacity:1;color:rgb(156 163 175 / var(--tw-text-opacity))\n}",
	map: null
};

const PostStats = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let { slug = "" } = $$props;
	let views = 0;

	if ($$props.slug === void 0 && $$bindings.slug && slug !== void 0) $$bindings.slug(slug);
	$$result.css.add(css);
	return `<span class="emdash" data-svelte-h="svelte-14zf0s3">—</span> <span class="post-stats__views svelte-xfpbcr">${escape(views)} views</span>`;
});

const $$Astro$b = createAstro("https://example.com");
const $$Tags = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$Tags;
  let { tags } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="tags w-full max-w-xl mx-auto flex center justify-center" data-astro-cid-pjkakwps> ${tags && tags.map((tag, idx) => renderTemplate`<span class="tag mr-1" data-astro-cid-pjkakwps> <a${addAttribute(`/tags/${tag}`, "href")} data-astro-cid-pjkakwps> ${iconForTag(tag) && renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "name": iconForTag(tag), "class": "stroke-primary fill-theme-primary", "data-astro-cid-pjkakwps": true })}`} ${tag} </a> ${idx !== tags.length - 1 && ", "} </span>`)} </div> `;
}, "/Users/aaron/Code/astro/fullstack-dev-blog/src/components/Tags.astro", void 0);

const $$Astro$a = createAstro("https://example.com");
const $$TOC$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$TOC$1;
  const { toc, depth = 1, ...props } = Astro2.props;
  const { use: Cmp, class: className } = props;
  const as = props.as ?? props.style ?? "bullet";
  const maxDepth = Number(props.maxDepth);
  const hasMaxDepth = Number.isInteger(maxDepth);
  const headings = toc.filter((it) => it.depth === depth);
  const Tag = Cmp ?? "menu" === as ? "menu" : "number" === as ? "ol" : "ul";
  return renderTemplate`${renderComponent($$result, "Tag", Tag, { "data-astro-toc": depth }, { "default": ($$result2) => renderTemplate`${headings.map((it, idx) => {
    const nextHeading = headings[idx + 1];
    const subHeadings = toc.slice(
      toc.indexOf(it) + 1,
      nextHeading ? toc.indexOf(nextHeading) : void 0
    );
    const hasSubHeadings = subHeadings.length > 0;
    const shouldRenderSubHeadings = hasMaxDepth ? maxDepth > it.depth : hasSubHeadings;
    return renderTemplate`${maybeRenderHead()}<li${addAttribute(depth, "data-astro-toc")}> ${Cmp ? renderTemplate`${renderComponent($$result2, "Cmp", Cmp, { ...it, "class": className })}` : it.url ? renderTemplate`<a${addAttribute(it.url, "href")}>${it.title}</a>` : it.title} ${shouldRenderSubHeadings ? renderTemplate`${renderComponent($$result2, "Astro.self", Astro2.self, { "toc": subHeadings, "depth": it.depth + 1, ...props })}` : null} </li>`;
  })}` })}`;
}, "/Users/aaron/Code/astro/fullstack-dev-blog/node_modules/astro-toc/lib/TOC.astro", void 0);

const activeHeading = atom(null);
const lastActiveHeading = atom(null);

const isBrowser = typeof window !== "undefined";

const { useWindowSize } = pkg;
function useBreakpoint(breakpoint = 768) {
  if (!isBrowser)
    return;
  const [isBreakpoint, setIsBreakpoint] = useState(false);
  const { width } = useWindowSize();
  useEffect(() => {
    if (width <= breakpoint) {
      setIsBreakpoint(true);
    } else {
      setIsBreakpoint(false);
    }
  }, [width]);
  return isBreakpoint;
}

const CircleIndicator = () => {
  const isMobile = useBreakpoint(768);
  if (isMobile) {
    console.log("isMobile");
    return null;
  }
  const indicatorRef = useRef(null);
  activeHeading.subscribe((activeHeader) => {
    const indicator = indicatorRef.current;
    if (indicator && activeHeader) {
      const { top } = activeHeader.getBoundingClientRect();
      animate(indicator, { y: top - 133 });
      lastActiveHeading.set(activeHeader);
    }
    return { activeHeader };
  });
  return /* @__PURE__ */ jsx("div", { className: Styles.wrapper, children: /* @__PURE__ */ jsx(motion.div, { className: Styles.container, children: /* @__PURE__ */ jsx(
    motion.div,
    {
      style: {
        willChange: "transform"
      },
      className: Styles.item,
      ref: indicatorRef
    }
  ) }) });
};

const $$Astro$9 = createAstro("https://example.com");
const $$TOC = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$TOC;
  const { headings } = Astro2.props;
  let tocItems = headings.map((heading) => ({
    depth: heading.depth,
    title: heading.text,
    url: `#${heading.slug}`
  }));
  const minimumDepth = Math.min(...tocItems.map((item) => item.depth));
  if (minimumDepth > 1) {
    tocItems = tocItems.map((tocItem) => ({
      ...tocItem,
      depth: tocItem.depth - 1
    }));
  }
  return renderTemplate`${maybeRenderHead()}<div class="hidden bg-slate-50 p-4 lg:flex lg:h-full lg:flex-col" data-astro-cid-obewoz47> <div${addAttribute(["flex", "items-center", "gap-2", "h-10", "flex-none"], "class:list")} data-astro-cid-obewoz47> ${renderComponent($$result, "Icon", $$Icon, { "name": "tabler/list", "data-astro-cid-obewoz47": true })} <b class="m-0" data-astro-cid-obewoz47>Table of contents</b> <div class="ml-auto flex items-center transition-transform duration-150 ease-in group-open:rotate-180 lg:hidden" data-astro-cid-obewoz47> ${renderComponent($$result, "Icon", $$Icon, { "name": "tabler/chevron-down", "data-astro-cid-obewoz47": true })} </div> </div> <!-- <TOCProgress client:load /> --> <nav data-toc-wrapper${addAttribute([
    "not-prose",
    "pt-4",
    // "h-full",
    "h-auto",
    "min-h-0",
    "lg:overflow-y-auto",
    "leading-6",
    "[&_a_*]:indent-0",
    "[&_ol]:m-0",
    "[&_ol]:list-none",
    "[&_ol]:pl-4",
    "[&_ol_li]:my-4",
    "[&_ol_li[data-active]>a]:text-primary",
    "[&_ol_li[data-active]>a:first-of-type]:text-zinc-800",
    "[&_ol_li[data-active]>a:first-of-type]:text-bold",
    "[&_ol_li[data-active]]>a:text-zinc-800",
    "[&_ol_li]:relative",
    "[&_ol_li_a:hover]:bg-hover",
    "[&_ol_li_a]:block",
    // "[&_ol_li_a]:truncate",
    "[&_ol_li_a]:border-b-0",
    "[&_ol_li_a]:transition-colors",
    "[&_ol_li_a]:duration-150",
    "[&_ol_ol]:pl-8",
    "[&_ol_ol_ol]:pl-12",
    "[&_ol_ol_ol_ol]:pl-16",
    "[&_ol_li_a]:text-zinc-300",
    "[&_ol_li_a]:text-[rgb(99, 102, 241)]",
    "[&_ol_li_a]:no-underline",
    "[&_ol_li_a:hover:first-of-type]:text-zinc-800",
    "[&_ol_li[data-active]_a:hover:first-of-type]:text-zinc-800",
    "flex flex-row"
  ], "class:list")} data-astro-cid-obewoz47> ${renderComponent($$result, "TOCScroll", CircleIndicator, { "client:load": true, "client:component-hydration": "load", "client:component-path": "$components/react/TOCIndicator.tsx", "client:component-export": "default", "data-astro-cid-obewoz47": true })} ${renderComponent($$result, "TableOfContents", $$TOC$1, { "toc": tocItems, "as": "number", "data-astro-cid-obewoz47": true })} </nav> </div> <details class="group px-horizontal-padding py-4 lg:hidden" aria-label="Table of contents" data-astro-cid-obewoz47> <summary class="list-none" data-astro-cid-obewoz47> <div class="align-center flex items-center gap-2" data-astro-cid-obewoz47> ${renderComponent($$result, "Icon", $$Icon, { "name": "tabler/list", "data-astro-cid-obewoz47": true })} <h2 class="m-0" data-astro-cid-obewoz47>Table of contents</h2> <div class="ml-auto flex items-center transition-transform duration-150 ease-in group-open:rotate-180 lg:hidden" data-astro-cid-obewoz47> ${renderComponent($$result, "Icon", $$Icon, { "name": "tabler/chevron-down", "data-astro-cid-obewoz47": true })} </div> </div> </summary> <nav data-toc-wrapper${addAttribute([
    "mt-4",
    "[&_ol]:m-0",
    "[&_ol]:list-outside",
    "[&_ol]:px-horizontal-padding",
    "[&_ol_li:not(:first-child)]:mt-1"
  ], "class:list")} data-astro-cid-obewoz47> ${renderComponent($$result, "TableOfContents", $$TOC$1, { "toc": tocItems, "as": "number", "data-astro-cid-obewoz47": true })} </nav> </details>  `;
}, "/Users/aaron/Code/astro/fullstack-dev-blog/src/components/TOC.astro", void 0);

const $$Astro$8 = createAstro("https://example.com");
const $$BlogPost = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$BlogPost;
  const {
    title,
    description,
    pubDate,
    updatedDate,
    cover,
    coverAlt,
    tags,
    headings
  } = Astro2.props;
  const slug = getSlugFromPathname(Astro2.url.pathname);
  const tocEmpty = headings.length === 0;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "data-astro-cid-bvzihdzo": true }, { "default": ($$result2) => renderTemplate`   ${renderComponent($$result2, "Prose", $$Prose, { "data-astro-cid-bvzihdzo": true }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div data-blog-post-container${addAttribute({ toc: tocEmpty ? "closed" : "open" }, "data-toc")}${addAttribute([
    "group flex flex-col lg:flex-row-reverse lg:gap-8",
    !tocEmpty && "lg:flex-row-reverse"
  ], "class:list")} data-astro-cid-bvzihdzo> ${!tocEmpty && renderTemplate`<aside${addAttribute({
    "--offset-from-top": "1rem"
  }, "style")}${addAttribute([
    "relative",
    "shrink-0",
    "mb-0",
    "lg:mb-8",
    "lg:ml-auto",
    "lg:mb-0",
    "lg:basis-1/3",
    "lg:sticky",
    "lg:top-[var(--offset-from-top)]",
    "lg:h-[calc(100vh-var(--offset-from-top)_*_2)]",
    "[&_h2]:m-0",
    "max-w-prose"
  ], "class:list")} data-astro-cid-bvzihdzo> ${renderComponent($$result3, "IconButton", IconButton, { "data-toggle-toc": true, "variant": "rounded-full", "data-open-toc-label": "Open ToC", "data-closed-toc-label": "Close ToC", "aria-label": "Close Table of Contents", "style": {
    // @ts-ignore
    "--duration": "150ms"
  }, "data-preload": true, "className": clsx(
    "z-1",
    "absolute",
    "top-4",
    "right-4",
    "hidden",
    "lg:grid",
    "lg:min-w-0",
    "lg:group-data-toc-open:grid-cols-[0fr_max-content]",
    "lg:group-data-toc-closed:grid-cols-[1fr_max-content]",
    "transition-all",
    "duration-[var(--duration)]",
    "ease-in-out",
    "overflow-hidden",
    "lg:justify-center",
    "p-6"
  ), "data-astro-cid-bvzihdzo": true }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "Icon", $$Icon, { "name": "tabler/x", "class": clsx(
    "col-start-2",
    "col-end-2",
    "row-start-1",
    "row-end-1",
    "scale-0",
    "transition-transform",
    "duration-[var(--duration)]",
    "ease-out",
    "group-data-toc-open:scale-100",
    "group-data-toc-open:delay-[var(--duration)]",
    "fill-slate-100",
    "border-md border-2 text-slate-400",
    "bg-slate-200",
    "text-slate-600"
  ), "data-astro-cid-bvzihdzo": true })} ${renderComponent($$result4, "Icon", $$Icon, { "name": "tabler/list", "class": clsx(
    "col-start-2",
    "col-end-2",
    "row-start-1",
    "row-end-1",
    "scale-0",
    "transition-transform",
    "duration-[var(--duration)]",
    "ease-in",
    "group-data-toc-closed:scale-100",
    "group-data-toc-closed:delay-[var(--duration)"
  ), "data-astro-cid-bvzihdzo": true })} <div${addAttribute([
    "col-start-1",
    "col-end-1",
    "group-data-toc-closed:mx-2",
    "truncate"
  ], "class:list")} data-astro-cid-bvzihdzo>
Open ToC
</div> ` })} <div data-blog-post-toc-container data-preload${addAttribute([
    "lg:h-full",
    "lg:p-4",
    "lg:ml-auto",
    "lg:group-data-toc-open:translate-x-0",
    "lg:group-data-toc-open:scale-x-1",
    "lg:group-data-toc-open:opacity-1",
    "lg:group-data-toc-closed:translate-x-full",
    "lg:group-data-toc-closed:opacity-0",
    "lg:group-data-toc-closed:scale-x-0",
    "lg:group-data-toc-closed:pointer-events-none",
    "transition-[transform,opacity]",
    "duration-300",
    "ease-in-out"
  ], "class:list")} data-astro-cid-bvzihdzo> ${renderComponent($$result3, "TOC", $$TOC, { "headings": headings, "data-astro-cid-bvzihdzo": true })} </div> </aside>`} <!-- /** min-w-0 [&>pre]:my-8 [&>pre]:max-sm:full-bleed [&>[data-codeblock]]:my-8 --> <!-- [&>[data-codeblock]]:max-sm:full-bleed [&>[data-codeblock]_pre]:max-sm:rounded-none --> <div data-blog-post class="min-w-0" data-astro-cid-bvzihdzo> <div class="hero-image" data-astro-cid-bvzihdzo> ${false} ${renderComponent($$result3, "Tags", $$Tags, { "tags": tags, "data-astro-cid-bvzihdzo": true })} <div class="prose" data-astro-cid-bvzihdzo> <div class="title" data-astro-cid-bvzihdzo> <span class="date mb-3" data-astro-cid-bvzihdzo> ${renderComponent($$result3, "FormattedDate", $$FormattedDate, { "date": pubDate, "data-astro-cid-bvzihdzo": true })} ${updatedDate && renderTemplate`<div class="last-updated-on" data-astro-cid-bvzihdzo>
Last updated on ${renderComponent($$result3, "FormattedDate", $$FormattedDate, { "date": updatedDate, "data-astro-cid-bvzihdzo": true })} </div>`} </span> ${renderComponent($$result3, "PostStats", PostStats, { "slug": slug, "client:load": true, "client:component-hydration": "load", "client:component-path": "$components/PostStats.svelte", "client:component-export": "default", "data-astro-cid-bvzihdzo": true })} <h1 class="text-3xl" data-astro-cid-bvzihdzo>${renderComponent($$result3, "CodeText", $$CodeText, { "text": title, "data-astro-cid-bvzihdzo": true })}</h1> <hr class="not-prose" data-astro-cid-bvzihdzo> </div> ${renderSlot($$result3, $$slots["default"])} ${renderComponent($$result3, "IconTextLink", $$IconTextLink, { "data-back-to-top": true, "text": "Back to top", "iconName": "tabler/chevron-up", "data-astro-cid-bvzihdzo": true })} </div> </div> </div> </div> ` })} `, "head": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "head" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "BaseHead", $$BaseHead, { "title": title, "description": description, "cover": cover.src, "data-astro-cid-bvzihdzo": true })} ` })}`, "header": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "header" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Header", $$Header, { "data-astro-cid-bvzihdzo": true })} ` })}` })}  `;
}, "/Users/aaron/Code/astro/fullstack-dev-blog/src/layouts/BlogPost.astro", void 0);

const $$Astro$7 = createAstro("https://example.com");
const prerender$4 = true;
async function getStaticPaths$3() {
  const posts = await getCollection("blog");
  return posts.filter((post) => !post.data.draft).map((post) => ({
    params: { slug: post.slug },
    props: post
  }));
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$;
  const post = Astro2.props;
  const { Content, headings, remarkPluginFrontmatter } = await post.render();
  return renderTemplate`${renderComponent($$result, "BlogPost", $$BlogPost, { ...post.data, "headings": headings }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex w-full flex-col gap-8 pb-4 transition-all md:flex-row"> ${renderComponent($$result2, "ZoomImage", ZoomImage, { "src": post.data.cover.src, "alt": post.data.coverAlt, "caption": post.data.coverAlt, "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/aaron/Code/astro/fullstack-dev-blog/src/components/ZoomImage.svelte", "client:component-export": "default" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Image", $$Image, { "src": post.data.cover, "widths": [240, 540, 720, post.data.cover.width], "sizes": `(max-width: 360px) 240px, (max-width: 720px) 540px, (max-width: 1600px) 720px, ${post.data.cover.width}px`, "alt": post.data.coverAlt })} ` })} </div> ${renderComponent($$result2, "Content", Content, {})} ` })}`;
}, "/Users/aaron/Code/astro/fullstack-dev-blog/src/pages/blog/[...slug].astro", void 0);

const $$file$3 = "/Users/aaron/Code/astro/fullstack-dev-blog/src/pages/blog/[...slug].astro";
const $$url$3 = "/blog/[...slug]";

const ____slug_$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$,
	file: $$file$3,
	getStaticPaths: getStaticPaths$3,
	prerender: prerender$4,
	url: $$url$3
}, Symbol.toStringTag, { value: 'Module' }));

const prerender$3 = true;
async function getStaticPaths$2() {
  const files = await fs$1.readdir("src/content/blog/assets/");
  return files.map((fileName) => {
    return {
      params: {
        slug: fileName
      }
    };
  });
}
const GET = async ({ props, params }) => {
  const imagePath = path.join(
    process.cwd(),
    "/src/content/blog/assets/screenshots/nvim-no-unused-vars.png"
  );
  const imageBuffer = await fs$1.readFile(imagePath);
  return new Response(imageBuffer, {
    headers: {
      "Content-Type": "image/png"
    }
  });
};

const ____slug_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	GET,
	getStaticPaths: getStaticPaths$2,
	prerender: prerender$3
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$6 = createAstro("https://example.com");
const prerender$2 = true;
async function getStaticPaths$1() {
  const allPosts = await getCollection("blog");
  const filteredPosts = allPosts.filter((post) => !post.data.draft);
  const allTags = /* @__PURE__ */ new Set();
  filteredPosts.map((post) => {
    post.data.tags && post.data.tags.map((tag) => allTags.add(tag));
  });
  return Array.from(allTags).map((tag) => ({
    params: { page: 1, tag },
    pageSize: PAGE_SIZE
  }));
}
const $$tag = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$tag;
  const tagName = Astro2.params["tag"];
  return Astro2.redirect(`${tagName}/1`);
}, "/Users/aaron/Code/astro/fullstack-dev-blog/src/pages/tags/[tag].astro", void 0);

const $$file$2 = "/Users/aaron/Code/astro/fullstack-dev-blog/src/pages/tags/[tag].astro";
const $$url$2 = "/tags/[tag]";

const _tag_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$tag,
	file: $$file$2,
	getStaticPaths: getStaticPaths$1,
	prerender: prerender$2,
	url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$5 = createAstro("https://example.com");
const $$HeadingWithIcon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$HeadingWithIcon;
  const { text, tag, className } = Astro2.props;
  const icon = iconForTag(tag);
  return renderTemplate`${maybeRenderHead()}<h5> ${icon && renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "name": icon, "class:list": ["inline relative top-[-0.1ch]", className] })}`}${text} </h5>`;
}, "/Users/aaron/Code/astro/fullstack-dev-blog/src/components/HeadingWithIcon.astro", void 0);

const $$Astro$4 = createAstro("https://example.com");
const prerender$1 = true;
async function getStaticPaths({ paginate }) {
  const allPosts = await getCollection("blog");
  const filteredPosts = allPosts.filter((post) => !post.data.draft);
  const allTags = /* @__PURE__ */ new Set();
  filteredPosts.forEach((post) => {
    post.data.tags && post.data.tags.forEach((tag) => allTags.add(tag));
  });
  return Array.from(allTags).flatMap((tag) => {
    const postsWithTag = allPosts.filter(
      (post) => post.data.tags.includes(tag)
    );
    return paginate(postsWithTag, {
      params: { tag, page },
      props: { allTags },
      pageSize: PAGE_SIZE
    });
  });
}
const $$page = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$page;
  const { page: page2 } = Astro2.props;
  const { tag } = Astro2.params;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "data-astro-cid-ouutwvjz": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="title flex items-center justify-center align-middle leading-4" data-astro-cid-ouutwvjz> ${renderComponent($$result2, "HeadingWithIcon", $$HeadingWithIcon, { "text": tag, "tag": tag, "className": "mr-2", "data-astro-cid-ouutwvjz": true })} <span class="emdash" data-astro-cid-ouutwvjz>—</span> <span class="relative top-[-0.1ch] text-center italic leading-4
      text-accent-gray-dark" data-astro-cid-ouutwvjz>
Page ${page2.currentPage} </span> </div> ${renderComponent($$result2, "PostPreviewList", $$PostPreviewList, { "posts": page2.data, "heading": "Posts", "data-astro-cid-ouutwvjz": true })} ${renderComponent($$result2, "Pages", Pages, { "baseUrl": Astro2.url.pathname.slice(0, -2), "currentPage": page2.currentPage, "totalPages": page2.data.length, "data-astro-cid-ouutwvjz": true })} ` })} 
line-height: 6; }`;
}, "/Users/aaron/Code/astro/fullstack-dev-blog/src/pages/tags/[tag]/[page].astro", void 0);

const $$file$1 = "/Users/aaron/Code/astro/fullstack-dev-blog/src/pages/tags/[tag]/[page].astro";
const $$url$1 = "/tags/[tag]/[page]";

const _page_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$page,
	file: $$file$1,
	getStaticPaths,
	prerender: prerender$1,
	url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const cachedHighlighters = /* @__PURE__ */ new Map();
function getCachedHighlighter(opts) {
  const key = JSON.stringify(opts, Object.keys(opts).sort());
  if (cachedHighlighters.has(key)) {
    return cachedHighlighters.get(key);
  }
  const highlighter = createShikiHighlighter(opts);
  cachedHighlighters.set(key, highlighter);
  return highlighter;
}

const $$Astro$3 = createAstro("https://example.com");
const $$Code = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Code;
  const {
    code,
    lang = "plaintext",
    theme = "github-dark",
    experimentalThemes = {},
    wrap = false,
    inline = false
  } = Astro2.props;
  if (typeof lang === "object") {
    if (lang.id) {
      lang.name = lang.id;
    }
    if (lang.grammar) {
      Object.assign(lang, lang.grammar);
    }
  }
  const highlighter = await getCachedHighlighter({
    langs: [
      typeof lang === "string" ? Object.keys(bundledLanguages).includes(lang) ? lang : "plaintext" : lang
    ],
    theme,
    experimentalThemes,
    wrap
  });
  const html = highlighter.highlight(code, typeof lang === "string" ? lang : lang.name, {
    inline
  });
  return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(html)}` })}`;
}, "/Users/aaron/Code/astro/fullstack-dev-blog/node_modules/astro/components/Code.astro", void 0);

const $$Astro$2 = createAstro("https://example.com");
const $$Debug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Debug;
  const key = Object.keys(Astro2.props)[0];
  const value = Astro2.props[key];
  return renderTemplate`${maybeRenderHead()}<div class="astro-debug"> <div class="astro-debug-header"> <h2 class="astro-debug-title"> <span class="astro-debug-label">Debug</span> <span class="astro-debug-name">"${key}"</span> </h2> </div> ${renderComponent($$result, "Code", $$Code, { "code": JSON.stringify(value, null, 2) })} </div> <style>
	.astro-debug {
		font-size: 14px;
		padding: 1rem 1.5rem;
		background: white;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
			'Open Sans', 'Helvetica Neue', sans-serif;
	}

	.astro-debug-header,
	pre.astro-code {
		margin: -1rem -1.5rem 1rem;
		padding: 0.25rem 0.75rem;
	}

	.astro-debug-header {
		background: #ff1639;
		border-radius: 4px;
		border-bottom-left-radius: 0;
		border-bottom-right-radius: 0;
	}

	.astro-debug-title {
		font-size: 1em;
		color: white;
		margin: 0.5em 0;
	}

	.astro-debug-label {
		font-weight: bold;
		text-transform: uppercase;
		margin-right: 0.75em;
	}

	pre.astro-code {
		border: 1px solid #eee;
		padding: 1rem 0.75rem;
		border-radius: 4px;
		border-top-left-radius: 0;
		border-top-right-radius: 0;
		font-size: 14px;
	}
</style>`;
}, "/Users/aaron/Code/astro/fullstack-dev-blog/node_modules/astro/components/Debug.astro", void 0);

const SvgPlay = (props) => /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 44, height: 44, fill: "none", stroke: "#000", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, className: "icon icon-tabler icon-tabler-player-play", viewBox: "0 0 24 24", ...props }, /* @__PURE__ */ React.createElement("path", { stroke: "none", d: "M0 0h24v24H0z" }), /* @__PURE__ */ React.createElement("path", { d: "M7 4v16l13-8z" }));

const SvgPlayFilled = (props) => /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 44, height: 44, fill: "none", stroke: "#000", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, className: "icon icon-tabler icon-tabler-player-play-filled", viewBox: "0 0 24 24", ...props }, /* @__PURE__ */ React.createElement("path", { stroke: "none", d: "M0 0h24v24H0z" }), /* @__PURE__ */ React.createElement("path", { fill: "currentColor", stroke: "none", d: "M6 4v16a1 1 0 0 0 1.524.852l13-8a1 1 0 0 0 0-1.704l-13-8A1 1 0 0 0 6 4z" }));

const SvgPause = (props) => /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 44, height: 44, fill: "none", stroke: "#000", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, className: "icon icon-tabler icon-tabler-player-pause", viewBox: "0 0 24 24", ...props }, /* @__PURE__ */ React.createElement("path", { stroke: "none", d: "M0 0h24v24H0z" }), /* @__PURE__ */ React.createElement("path", { d: "M6 6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zM14 6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1z" }));

const SvgPauseFilled = (props) => /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 44, height: 44, fill: "none", stroke: "#000", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, className: "icon icon-tabler icon-tabler-player-pause-filled", viewBox: "0 0 24 24", ...props }, /* @__PURE__ */ React.createElement("path", { stroke: "none", d: "M0 0h24v24H0z" }), /* @__PURE__ */ React.createElement("path", { fill: "currentColor", stroke: "none", d: "M9 4H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zM17 4h-2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z" }));

const isPaused = atom(false);
const isManuallyPaused = atom(false);

const playStatus = Symbol("play");
const playHoverStatus = Symbol("playHover");
const pauseStatus = Symbol("pause");
const pauseHoverStatus = Symbol("pauseHover");
const PlayPause = ({ className: _className, onClick }) => {
  const [status, setStatus] = useState(pauseStatus);
  const isPlayStatus = useMemo(() => status === playStatus || status === playHoverStatus, [status]);
  const iconLookup = {
    [playStatus]: SvgPlay,
    [playHoverStatus]: SvgPlayFilled,
    [pauseStatus]: SvgPause,
    [pauseHoverStatus]: SvgPauseFilled
  };
  const IconComponent = iconLookup[status];
  const handleClick = useCallback(() => {
    isManuallyPaused.set(!isPlayStatus);
    isPaused.set(!isPlayStatus);
    setStatus(isPlayStatus ? pauseStatus : playStatus);
    onClick?.();
  }, [onClick, isPlayStatus]);
  useEffect(() => {
    isPaused.subscribe((paused) => {
      setStatus(paused ? pauseStatus : playStatus);
    });
  }, []);
  return /* @__PURE__ */ jsx(
    "div",
    {
      onClick: handleClick,
      onKeyDown: (e) => e.key === "Enter" && setStatus(isPlayStatus ? pauseStatus : playStatus),
      onMouseEnter: () => setStatus(isPlayStatus ? playHoverStatus : pauseHoverStatus),
      onMouseLeave: () => setStatus(isPlayStatus ? playStatus : pauseStatus),
      className: Styles$1.iconContainer,
      children: /* @__PURE__ */ jsx(IconComponent, { width: 30 })
    }
  );
};

const $$Astro$1 = createAstro("https://example.com");
const $$LatestCodeList = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$LatestCodeList;
  const posts = await getCollection("blog");
  let allCodes = [];
  let livePosts = posts.filter((post) => !post.data.draft);
  for (const post of livePosts) {
    const codes = await getCodesFromMdx(post.body, { numLines: 6 });
    if (!codes)
      continue;
    const codesWithPost = codes.map((code) => ({ ...code, post }));
    allCodes = allCodes.concat(codesWithPost);
  }
  return renderTemplate`${maybeRenderHead()}<div class="codes-header" data-astro-cid-oxnscllx> <h5 data-astro-cid-oxnscllx>Latest code</h5>  ${renderComponent($$result, "PlayPause", PlayPause, { "client:load": true, "className": "icon-container", "client:component-hydration": "load", "client:component-path": "$components/react/PlayPause", "client:component-export": "default", "data-astro-cid-oxnscllx": true })} <div class="output" data-astro-cid-oxnscllx></div> </div> <!-- if mobile needs more performance, use will-change-scroll --> <div class="codes-container flex h-auto w-full snap-x snap-mandatory snap-always
  overflow-auto" data-astro-cid-oxnscllx> ${allCodes.map((code) => renderTemplate`<div class="code" data-astro-cid-oxnscllx> <div class="code-header flex flex-row justify-between" data-astro-cid-oxnscllx> <h2 class="flex grow pr-3 text-xl font-bold" data-astro-cid-oxnscllx>${code.lang}</h2> ${code.post && renderTemplate`<div class="truncate text-sm" data-astro-cid-oxnscllx> <a${addAttribute(`/blog/${code.post.slug}`, "href")} data-astro-cid-oxnscllx>${code.post.data.title}</a> </div>`} </div>  ${renderComponent($$result, "Code", $$Code, { "code": code.text, "lang": code.lang, "class": "code-container", "style": "font-size:9px;", "data-astro-cid-oxnscllx": true })} </div>`)} </div> `;
}, "/Users/aaron/Code/astro/fullstack-dev-blog/src/components/LatestCodeList.astro", void 0);

const $$Astro = createAstro("https://example.com");
const prerender = true;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  let posts = await getCollection("blog");
  posts = Array.from(posts).filter((post) => !post.data.draft).sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="hero flex justify-center pb-vert-padding"> <div class="hero__tagline flex justify-center"> ${renderComponent($$result2, "Prose", $$Prose, { "className": "prose prose-base mb-3 dark:prose-invert lg:prose-base" }, { "default": ($$result3) => renderTemplate`
A developer blog focusing on Ruby on Rails, React, AstroJS, and Neovim.
` })} </div> </div> <div class="flex gap-6 rounded-lg border border-2 border-card-border bg-card-bg bg-opacity-50 p-4 scrollbar-thin scrollbar-track-card-bg dark:border-slate-300"> ${renderComponent($$result2, "LatestCodeList", $$LatestCodeList, {})} </div> ${renderComponent($$result2, "PostPreviewList", $$PostPreviewList, { "posts": posts, "heading": "Recent posts", "asCard": true })}  ${renderComponent($$result2, "PostPreviewListFooter", $$PostPreviewListFooter, {})} ` })}`;
}, "/Users/aaron/Code/astro/fullstack-dev-blog/src/pages/index.astro", void 0);

const $$file = "/Users/aaron/Code/astro/fullstack-dev-blog/src/pages/index.astro";
const $$url = "";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	prerender,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { ZoomImage as Z, _slug__json as _, _page_$1 as a, ____slug_$1 as b, ____slug_ as c, _tag_ as d, _page_ as e, index as i, og_png as o };
