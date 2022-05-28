<template>
  <div>
    <h1>Menu</h1>
    <ModAccordion>
      <!-- section -->
      <template v-slot:sectionName><h2 class="pt-1">Bakery</h2></template>
      <template v-slot:item>
        <!-- bgImage -->
        <div
          class="bg-cover bg-center rounded"
          :data="bakery"
          v-for="bakery of bakery"
          :key="bakery.slug"
          v-bind:style="{ backgroundImage: 'url(' + bakery.image + ')' }"
        >
          <!-- overlay -->
          <div class="menuOverlay">
            <!-- itemName -->
            <h3 class="p-2 pt-4" @click="menuItemClick(index)">
              {{ bakery.title }}
            </h3>
            <!-- itemDescription -->
            <p>
              {{ bakery.description }}
            </p>
            <!-- itemPrice -->
            <h4 class="m-2">{{ bakery.price }} K</h4>
          </div>
        </div>
      </template>
    </ModAccordion>
    <ModAccordion>
      <!-- section -->
      <template v-slot:sectionName><h2 class="pt-1">Cafe</h2></template>
      <template v-slot:item>
        <!-- bgImage -->
        <div class="bg-cover bg-center rounded">
          <!-- overlay -->
          <div class="menuOverlay">
            <!-- itemName -->
            <h3 class="p-2 pt-4" @click="menuItemClick(index)">Coming Soon</h3>
            <!-- itemDescription -->
            <p></p>
            <!-- itemPrice -->
            <h4 class="m-2"></h4>
          </div>
        </div>
      </template>
    </ModAccordion>
  </div>
</template>

<script setup>
const { data: bakery } = await useAsyncData("bakery", () =>
  queryContent("/bakery").find()
);
</script>
