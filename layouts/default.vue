<template>
  <main>
    <header class="z-20">
      <ModNav />
    </header>
    <Transition name="page">
      <section>
        <slot />
      </section>
    </Transition>
    <footer>
      <ModFooter />
    </footer>
  </main>
</template>
