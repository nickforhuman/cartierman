<script setup lang="ts">
// import { computed } from 'vue'
import { RouterView, useRoute } from 'vue-router'
import TitleComponent from './components/client/TitleComponent.vue'
import HelpdeskComponent from './components/client/HelpdeskComponent.vue'
const route = useRoute()
const ClientComponentsShow = route.path.startsWith('/')
</script>

<template>
  <main class="w-full min-h-screen bg-background">
    <header v-if="ClientComponentsShow" class="w-full h-auto z-50 inset-0">
      <TitleComponent />
    </header>
    <RouterView />
    <HelpdeskComponent v-if="ClientComponentsShow" />
  </main>
</template>

<style scoped></style>
