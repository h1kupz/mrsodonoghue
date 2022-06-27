<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
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
        {
          src: "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css",
        },
      ],
    };
  },
};
</script>
