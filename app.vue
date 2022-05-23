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

<script lang="ts" setup>
import "./assets/css/tailwind.css";
export default {
  head() {
    return {
      script: [
        { src: "https://identity.netlify.com/v1/netlify-identity-widget.js" },
      ],
    };
  },
};
</script>
