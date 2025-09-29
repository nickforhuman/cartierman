<script setup lang="ts">
import { computed } from 'vue'
import { RouterView, useRoute } from 'vue-router'
import TitleComponent from './components/client/TitleComponent.vue'
// import HelpdeskComponent from './components/client/HelpdeskComponent.vue'
import LoaderComponent from './components/LoaderComponent.vue'
import FooterComponent from './components/client/FooterComponent.vue'
import NavigationlandingComponent from './components/client/NavigationlandingComponent.vue'
const route = useRoute()
const isAdmin = computed(() => route.path.startsWith('/admin'))
</script>

<template>
  <LoaderComponent />
  <main class="w-full min-h-screen bg-background scroll-smooth">
    <header v-if="!isAdmin" class="w-full h-auto absolute z-50 inset-0 scroll-smooth">
      <TitleComponent v-if="!isAdmin" />
      <NavigationlandingComponent />
    </header>
    <RouterView />
    <!-- <HelpdeskComponent v-if="!isAdmin" /> -->
    <FooterComponent v-if="!isAdmin" />
  </main>
</template>

<style scoped>
/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px var(--color-background);
  border-radius: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: var(--color-secondary);
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: var(--color-secondary);
}
</style>
