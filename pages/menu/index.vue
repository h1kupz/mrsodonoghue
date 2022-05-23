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
          v-for="(menu, index) in bakery"
          :key="menu.itemName"
          v-bind:style="{ backgroundImage: 'url(' + menu.itemImage + ')' }"
        >
          <!-- overlay -->
          <div class="menuOverlay">
            <!-- itemName -->
            <h3 class="p-2 pt-4" @click="menuItemClick(index)">
              {{ menu.itemName }}
            </h3>
            <!-- itemDescription -->
            <p>
              {{ menu.itemDescription }}
            </p>
            <!-- itemPrice -->
            <h4 class="m-2">{{ menu.itemPrice }}</h4>
          </div>
        </div>
      </template>
    </ModAccordion>
    <ModAccordion>
      <!-- section -->
      <template v-slot:sectionName><h2 class="pt-1">Breakfast</h2></template>
      <template v-slot:item>
        <!-- bgImage -->
        <div
          class="bg-cover bg-center rounded"
          v-for="(menu, index) in breakfast"
          :key="menu.itemName"
          v-bind:style="{ backgroundImage: 'url(' + menu.itemImage + ')' }"
        >
          <!-- overlay -->
          <div class="menuOverlay">
            <!-- itemName -->
            <h3 class="p-2 pt-4" @click="menuItemClick(index)">
              {{ menu.itemName }}
            </h3>
            <!-- itemDescription -->
            <p>
              {{ menu.itemDescription }}
            </p>
            <!-- itemPrice -->
            <h4 class="m-2">{{ menu.itemPrice }}</h4>
          </div>
        </div>
      </template>
    </ModAccordion>
  </div>
</template>

http://oxenfree.net/images/OX_Mod_bg.jpg
<script>
export default {
  data() {
    return {
      bakery: [
        {
          itemName: "Bread",
          itemImage: "",
          itemDescription:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam molestias in dolorem? Quaerat atque, sint vero possimus dolores, deleniti temporibus nisi amet ab odit velit voluptatum soluta.",
          itemPrice: "00 k",
        },
        {
          itemName: "Bread",
          itemImage: "",
          itemDescription:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam molestias in dolorem? Quaerat atque.",
          itemPrice: "00 k",
        },
        {
          itemName: "Bread",
          itemImage: "",
          itemDescription:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam molestias in dolorem? Quaerat atque, sint vero possimus dolores, deleniti temporibus nisi amet ab odit velit voluptatum soluta.",
          itemPrice: "00 k",
        },
      ],
      breakfast: [
        {
          itemName: "Breakfast",
          itemImage: "",
          itemDescription:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam molestias in dolorem? Quaerat atque, sint vero possimus dolores, deleniti temporibus nisi amet ab odit velit voluptatum soluta.",
          itemPrice: "00 k",
        },
        {
          itemName: "Breakfast",
          itemImage: "",
          itemDescription:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam molestias in dolorem? Quaerat atque, sint vero possimus dolores, deleniti temporibus nisi amet ab odit velit voluptatum soluta.",
          itemPrice: "00 k",
        },
        {
          itemName: "Breakfast",
          itemImage: "",
          itemDescription:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam molestias in dolorem? Quaerat atque, sint vero possimus dolores, deleniti temporibus nisi amet ab odit velit voluptatum soluta.",
          itemPrice: "00 k",
        },
      ],
    };
  },
};
</script>
