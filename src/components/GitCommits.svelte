<script lang="ts">
    import { onMount } from "svelte";
    import trpc  from "$services/trpc.ts"


    let loading: boolean = false;
    onMount(async () => {
            try {
                loading = true;
                const { data } = await trpc.gitCommits.query();
                console.log({data})
            } catch (e) {
                console.error("PostStats", e);
            } finally {
                loading = false;
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
