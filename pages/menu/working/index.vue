<template>
  <div>
    <h1>Menu</h1>
    <!-- BAKERY -->
    <ModAccordion>
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
            <MarkdownRenderer :value="bakery" />
            <h4 class="price">{{ bakery.price }} K</h4>
          </div>
        </div>
      </template>
    </ModAccordion>
    <h1 class="menuSection">Cafe</h1>
    <!-- BREAKFAST -->
    <ModAccordion>
      <template v-slot:sectionName><h2 class="pt-1">Breakfast</h2></template>
      <template v-slot:item>
        <!-- bgImage v-bind:style="{ backgroundImage: 'url(' + bakery.image + ')' }" -->
        <div
          class="bg-cover bg-center rounded"
          :data="breakfast"
          v-for="breakfast of breakfast"
          :key="breakfast.slug"
        >
          <!-- overlay -->
          <div class="menuOverlay">
            <!-- itemName -->
            <h3 @click="menuItemClick(index)">
              {{ breakfast.title }}
            </h3>
            <!-- itemDescription -->
            <MarkdownRenderer :value="breakfast" />
            <h4 class="price">{{ breakfast.price }} K</h4>
          </div>
        </div>
      </template>
    </ModAccordion>
    <!-- SANDWICHES -->
    <ModAccordion>
      <template v-slot:sectionName><h2 class="pt-1">Sandwiches</h2></template>
      <template v-slot:item>
        <!-- bgImage v-bind:style="{ backgroundImage: 'url(' + bakery.image + ')' }" -->
        <div
          class="bg-cover bg-center rounded"
          :data="sandwiches"
          v-for="sandwiches of sandwiches"
          :key="sandwiches.slug"
        >
          <!-- overlay -->
          <div class="menuOverlay">
            <!-- itemName -->
            <h3 @click="menuItemClick(index)">
              {{ sandwiches.title }}
            </h3>
            <!-- itemDescription -->
            <MarkdownRenderer :value="sandwiches" />
            <h4 class="price">{{ sandwiches.price }} K</h4>
          </div>
        </div>
      </template>
    </ModAccordion>
    <!-- MAIN -->
    <ModAccordion>
      <template v-slot:sectionName><h2 class="pt-1">Main</h2></template>
      <template v-slot:item>
        <!-- bgImage v-bind:style="{ backgroundImage: 'url(' + bakery.image + ')' }" -->
        <div
          class="bg-cover bg-center rounded"
          :data="main"
          v-for="main of main"
          :key="main.slug"
        >
          <!-- overlay -->
          <div class="menuOverlay">
            <!-- itemName -->
            <h3 @click="menuItemClick(index)">
              {{ main.title }}
            </h3>
            <!-- itemDescription -->
            <MarkdownRenderer :value="main" />
            <h4 class="price">{{ main.price }} K</h4>
          </div>
        </div>
      </template>
    </ModAccordion>
    <!-- DRINKS -->
    <ModAccordion>
      <template v-slot:sectionName><h2 class="pt-1">Drinks</h2></template>
      <template v-slot:item>
        <!-- bgImage v-bind:style="{ backgroundImage: 'url(' + bakery.image + ')' }" -->
        <div
          class="bg-cover bg-center rounded"
          :data="drinks"
          v-for="drinks of drinks"
          :key="drinks.slug"
        >
          <!-- overlay -->
          <div class="menuOverlay">
            <!-- itemName -->
            <h3 @click="menuItemClick(index)">
              {{ drinks.title }}
            </h3>
            <!-- itemDescription -->
            <MarkdownRenderer :value="drinks" />
            <h4 class="price">{{ drinks.price }} K</h4>
          </div>
        </div>
      </template>
    </ModAccordion>
    <!-- DESSERT -->
    <ModAccordion>
      <template v-slot:sectionName><h2 class="pt-1">Dessert</h2></template>
      <template v-slot:item>
        <!-- bgImage v-bind:style="{ backgroundImage: 'url(' + bakery.image + ')' }" -->
        <div
          class="bg-cover bg-center rounded"
          :data="dessert"
          v-for="dessert of dessert"
          :key="dessert.slug"
        >
          <!-- overlay -->
          <div class="menuOverlay">
            <!-- itemName -->
            <h3 @click="menuItemClick(index)">
              {{ dessert.title }}
            </h3>
            <!-- itemDescription -->
            <MarkdownRenderer :value="dessert" />
            <h4 class="price">{{ dessert.price }} K</h4>
          </div>
        </div>
      </template>
    </ModAccordion>
  </div>
</template>

<script setup>
const { data: bakery } = await useAsyncData("bakery", () =>
  queryContent("/bakery").sort({ order: 1 }).find()
);
const { data: breakfast } = await useAsyncData("breakfast", () =>
  queryContent("/breakfast").sort({ order: 1 }).find()
);
const { data: sandwiches } = await useAsyncData("sandwiches", () =>
  queryContent("/sandwiches").sort({ order: 1 }).find()
);
const { data: main } = await useAsyncData("main", () =>
  queryContent("/main").sort({ order: 1 }).find()
);
const { data: drinks } = await useAsyncData("drinks", () =>
  queryContent("/drinks").sort({ order: 1 }).find()
);
const { data: dessert } = await useAsyncData("dessert", () =>
  queryContent("/dessert").sort({ order: 1 }).find()
);
</script>
