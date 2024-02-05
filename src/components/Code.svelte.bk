<script lang="ts">
  import type {
    BuiltinLanguage,
    BuiltinTheme,
    LanguageRegistration,
    SpecialLanguage,
    ThemeRegistration,
    ThemeRegistrationRaw,
  } from "shikiji";
  import { bundledLanguages } from "shikiji/langs";
  import { getCachedHighlighter } from "../../node_modules/astro/dist/core/shiki.js";
  import { onMount } from "svelte";

  export let code;
  export let lang = "plaintext";
  export let theme = "material-theme-darker";
  export let wrap = false;
  export let inline = false;
  let experimentalThemes = {};
  let html = "";

  // shiki -> shikiji compat
  if (typeof lang === "object") {
    // `id` renamed to `name` (always override)
    if ((lang as any).id) {
      lang.name = (lang as any).id;
    }
    // `grammar` flattened to lang itself
    if ((lang as any).grammar) {
      Object.assign(lang, (lang as any).grammar);
    }
  }

  getCachedHighlighter({
    langs: [
      typeof lang === "string"
        ? Object.keys(bundledLanguages).includes(lang)
          ? lang
          : "plaintext"
        : lang,
    ],
    theme,
    experimentalThemes,
    wrap,
  }).then((highlighter) => {
    html = highlighter.highlight(
      code,
      typeof lang === "string" ? lang : lang.name,
      {
        inline,
      },
    );
    return html;
  });
</script>

Hello world
{@debug html}
{@html html}
