<template>
  <header class="z-20">
    <ModNav />
  </header>
  <section>
    <NuxtPage />
  </section>
  <footer>
    <ModFooter />
  </footer>
</template>

<script lang="ts">
export default {
  head() {
    return {
      title: "Mrs O'Donoghue",
      link: [
        {
          rel: "icon",
          type: "image/png",
          href: `favicon.png`,
        },
      ],
      script: [
        { src: "https://identity.netlify.com/v1/netlify-identity-widget.js" },
      ],
    };
  },
};
</script>
