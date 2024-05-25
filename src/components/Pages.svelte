<script lang="ts">
export let baseUrl: string;
export let currentPage: number;
export let totalPages: number;

const prevPage = `${baseUrl}/${currentPage - 1}`;
const nextPage = `${baseUrl}/${currentPage + 1}`;
const pageUrl = (page: number) => `${baseUrl}/${page}`;
</script>

<nav>
  {#if currentPage > 1}
    <a href={prevPage}>prev</a>
  {/if}

  {#each Array(totalPages) as _, i}
    <a href={pageUrl(i + 1)} class:selected={currentPage === i + 1}>{i + 1}</a>
  {/each}
  {#if currentPage < totalPages}
    <a href={nextPage}>next</a>
  {/if}
</nav>

<style>
nav {
  @apply my-4 flex w-full justify-center;
}
a {
  @apply mx-1 rounded-lg px-3 py-1 text-accent-gray-dark;
}

a.selected {
  @apply bg-primary text-white;
}
</style>
