<template>
  <main>
    <h1>Menu</h1>
    <ModAccordion>
      <!-- section -->
      <template v-slot:sectionName><h2 class="pt-1">Bakery</h2></template>
      <template v-slot:item>
        <!-- bgImage v-bind:style="{ backgroundImage: 'url(' + bakery.image + ')' }" -->
        <div
          class="bg-cover bg-center rounded"
          :data="bakery"
          v-for="bakery of bakery"
          :key="bakery.slug"
        >
          <!-- overlay -->
          <div class="menuOverlay">
            <!-- itemName -->
            <h3 @click="menuItemClick(index)">
              {{ bakery.title }}
            </h3>
            <!-- itemDescription -->
            <p>
              {{ bakery.description }}
            </p>
            <!-- itemPrice
            <h4 class="pb-3">{{ bakery.price }} K</h4> -->
          </div>
        </div>
      </template>
    </ModAccordion>
    <ModAccordionOpen>
      <!-- section -->
      <template v-slot:sectionName><h2 class="pt-1">Cafe</h2></template>
      <template v-slot:item>
        <!-- bgImage -->
        <div class="bg-cover bg-center rounded">
          <!-- overlay -->
          <div class="menuOverlay">
            <!-- itemName -->
            <h3 class="pb-3" @click="menuItemClick(index)">Coming Soon</h3>
          </div>
        </div>
      </template>
    </ModAccordionOpen>
  </main>
</template>

<script setup>
const { data: bakery } = await useAsyncData("bakery", () =>
  queryContent("/bakery").sort({ order: 1 }).find()
);
</script>
