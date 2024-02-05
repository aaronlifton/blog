<script lang="ts">
  import { onMount } from 'svelte';
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();
  onMount(() => {
    console.log('WelcomeDialog mounted');
  });
  function handleClick() {
    dispatch('close');
  }
</script>

<dialog>
  <button on:click={handleClick}>Close</button>
  <h1>Welcome</h1>
  <p>Thank you for visiting our spacecraft!</p>
</dialog>


<h1>hello world!</h1>

<style>
  
</style>
