<script lang="ts">
  export let baseUrl: string;
  export let currentPage: number
  export let totalPages: number;

  const prevPage = `${baseUrl}/${currentPage - 1}`;
  const nextPage = `${baseUrl}/${currentPage + 1}`;
  const pageUrl = (page: number) => `${baseUrl}/${page}`;
</script>

<nav>
  <a href={prevPage}>prev</a>

  {#each Array(totalPages) as _, i}
    <a href={pageUrl(i+1)} class:selected={currentPage === i + 1}>{i + 1}</a>
  {/each}

  <a href={nextPage}>next</a>
</nav>

<style>
  nav {
    @apply w-full flex justify-center mb-4;
  }
  a {
    @apply mx-1 px-3 py-1 rounded-lg text-accent-gray-dark;
  }

  a.selected {
    @apply bg-primary text-white;
  }
</style>
