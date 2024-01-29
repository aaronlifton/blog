<script type="ts">
  export let src;
  export let alt;
  export let marginBottom = true;
  export let baseUrl;

  let path = `${src.replace("screenshots", "images")}`;
  onMount(() => (baseUrl = window.location.href));
</script>

<a href={path}>
  <img {src} {alt} class:mb-10={marginBottom} />
</a>
