<script lang="ts">
  export let className: string | null = null;
  import { twMerge } from "tailwind-merge";
  // this is for rendering prose in figcaptions
</script>

<article
  class={twMerge("prose text-center max-w-content", className)}
>
  <slot />
</article>

