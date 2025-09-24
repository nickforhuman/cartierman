<script setup lang="ts">
import { computed } from 'vue'
import { RouterView, useRoute } from 'vue-router'
import TitleComponent from './components/client/TitleComponent.vue'
import HelpdeskComponent from './components/client/HelpdeskComponent.vue'
import FooterComponent from './components/client/FooterComponent.vue'
const route = useRoute()
const isAdmin = computed(() => route.path.startsWith('/admin'))
</script>

<template>
  <main class="w-full min-h-screen bg-background">
    <header v-if="!isAdmin" class="w-full h-auto z-50 inset-0">
      <TitleComponent v-if="!isAdmin" />
    </header>
    <RouterView />
    <HelpdeskComponent v-if="!isAdmin" />
    <FooterComponent v-if="!isAdmin" />
  </main>
</template>

<style scoped></style>
