<script lang="ts">
  import { onMount } from "svelte";
  import Prose from "./Prose.svelte";

  export let src: string;
  export let alt: string;
  export let caption: string;
  export let hero: boolean = false;
  let dialogEl: HTMLDialogElement | null;
  let dialogOpen = false;
  caption ||= alt;

  const toggleDialog = (event: MouseEvent) => {
    event.preventDefault();
    if (!dialogOpen) {
      dialogEl?.showModal();
    } else {
      console.log("closing")
      dialogEl.close();
    }
    dialogOpen = !dialogOpen;
  };
  const closeDialog = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      dialogOpen = false;
      dialogEl?.close();
    }
  }
  const handleClick = (event: MouseEvent) => {
    if (!dialogOpen) return;

    if (event.target instanceof HTMLDialogElement === false && event.target instanceof HTMLButtonElement === false) {
      console.log({ dialogEl });
    }
  };

  onMount(() => {
    dialogEl = document?.querySelector("dialog");
  });
</script>

<svelte:document on:click={handleClick} on:keydown={closeDialog} />
<button on:click={toggleDialog} aria-label="Open full-size image">
  <figure class="my-8 bg-surface rounded-md py-1">
    <slot />
    {#if caption && !hero}
      <Prose className={"mb-2 prose-gray text-base italic"}>
        <figcaption>{caption}</figcaption>
      </Prose>
    {/if}
  </figure>
</button>

<dialog
  class:bg-red-50={dialogOpen}
  class:bg-gray-50={!dialogOpen}
  class="p-3 animate-dialog-in animate-dialog-out"
>
  <button
    on:click={toggleDialog}
    class="absolute top-0 right-0 p-2 border border-radius-md bg-gray-100 border-color-gray-300 border-1 w-8 h-8 text-gray-400 hover:text-red-400 text-base font-bold leading-5"
    aria-label="Close"
  >
    X</button
  >
  <figure class="bg-surface rounded-md py-1">
    <img {src} {alt} />
    <Prose className={"mb-2 prose-gray"}>
      <figcaption>{caption}</figcaption>
    </Prose>
  </figure>
</dialog>

<style>
  dialog {
    @apply transition-all duration-300 delay-150 ease-in-out bg-slate-100 z-1;
  }
  dialog::backdrop {
    transition: backdrop 0.5s ease-in-out;
    background: rgba(0, 0, 0, 0.3);
  }
  dialog[open] {
    @apply bg-gray-50;
  }

  dialog img {
    @apply mb-4;
  }
  dialog img + span {
    @apply mb-2;
  }
  .dialog-prose {
    @apply mb-2 text-accent-gray-dark;
  }
  svg {
    @apply absolute right-0 bottom-0;
    color: black;
    g {
      color: black;
    }
  }
</style>
