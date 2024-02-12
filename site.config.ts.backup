import type { SiteConfig } from "@/types";
import type { AstroExpressiveCodeOptions } from "astro-expressive-code";

export const siteConfig: SiteConfig = {
  // Used as both a meta property (src/components/BaseHead.astro L:31 + L:49) & the generated satori png (src/pages/og-image/[slug].png.ts)
  author: "Aaron Lifton",
  // Meta property used to construct the meta title property, found in src/components/BaseHead.astro L:11
  title: "Aaron's Dev Blog",
  // Meta property used as the default description meta property
  description: "An opinionated starter theme for Astro",
  // HTML lang property, found in src/layouts/Base.astro L:18
  lang: "zh-CN",
  // Meta property, found in src/components/BaseHead.astro L:42
  ogLocale: "zh_CN",
  // Date.prototype.toLocaleDateString() parameters, found in src/utils/date.ts.
  date: {
    locale: "zh-CN",
    options: {
      day: "numeric",
      month: "short",
      year: "numeric",
    },
  },
  // webmentions: {
  // 	link: "https://webmention.io/astro-cactus.chriswilliams.dev/webmention",
  // },
};

// Used to generate links in both the Header & Footer.
export const menuLinks: Array<{ title: string; path: string }> = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "/about/",
  },
  {
    title: "Blog",
    path: "/posts/",
  },
];
