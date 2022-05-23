<template>
  <div class="relative rounded mb-2">
    <input
      type="checkbox"
      class="peer absolute top-0 inset-x-0 w-full h-16 opacity-0 z-10 cursor-pointer"
    />
    <div class="modgrow h-16 w-full flex items-center bg-buttons rounded">
      <slot name="sectionName" />
    </div>
    <!-- Arrow -->
    <div
      class="absolute top-3 left-2 transition-transform rotate-0 peer-checked:rotate-180"
    >
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-10 w-10"
          viewBox="0 0 20 20"
          fill="primary"
        >
          <path
            fill-rule="evenodd"
            d="M15.707 4.293a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 011.414-1.414L10 8.586l4.293-4.293a1 1 0 011.414 0zm0 6a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L10 14.586l4.293-4.293a1 1 0 011.414 0z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
    </div>
    <!-- Content -->
    <div
      class="overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-fit rounded-b"
    >
      <slot name="item" />
    </div>
  </div>
</template>
