<template>
  <div class="flex h-12 mx-2">
    <a
      href="/"
      class="lg:modgrow px-4 flex flex-col justify-center rounded rounded-tl-[16px] hover:rounded-tl mr-2 modbutton"
    >
      <img
        class="h-7 self-center"
        src="@/assets/images/ModIcon.png"
        alt="Home"
      />
    </a>
    <a href="/menu" class="modgrow rounded mr-2 modbutton">
      <h4 class="self-center">Menu</h4>
    </a>
    <a href="/location" class="modgrow rounded mr-2 modbutton">
      <h4 class="self-center">Location</h4>
    </a>
    <a
      href="#contact"
      class="modgrow rounded rounded-tr-[16px] hover:rounded-tr modbutton"
    >
      <h4 class="self-center">Contact</h4>
    </a>
  </div>
</template>
