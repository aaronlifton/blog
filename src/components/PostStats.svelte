<script lang="ts">
  import { onMount } from "svelte";

  export let slug: string = "";

  let loading: boolean = false;
  let views: number = 0;

  onMount(async () => {
    if (slug && slug.trim() !== "") {
      try {
        loading = true;
        const resp = await fetch(`/api/blog/views/${slug}.json?increment=true`);
        const stats = await resp.json();
        views = stats.views;
      } catch (e) {
        console.error("PostStats", e);
      } finally {
        loading = false;
      }
    }
  });
</script>

<span class="emdash">—</span>
<span class="post-stats__views">{views} views</span>

<style>
  .post-stats__views {
    @apply mx-1 pr-1 italic text-accent-gray-mid;
  }
</style>
