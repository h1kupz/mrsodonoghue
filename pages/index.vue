<template>
  <div class="modgrow">
    <img
      class="lg:w-1/2 md:w-4/6 w-4/5 self-center mb-36"
      src="@/assets/images/ModBadge.png"
      alt="alt"
    />
  </div>
</template>

<script>
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
