<template>
  <transition name="fade">
    <div
      v-if="isLoading"
      class="w-full h-screen inset-0 absolute overflow-hidden z-50 bg-white flex gap-2 justify-center items-center"
    >
      <h1 class="text-md text-secondary newsreader">CARTIERMAN</h1>
      <div class="p-2 ronded-xl border-4 border-secondary border-dashed animate-spin"></div>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const isLoading = ref(true)

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false
  }, 3500)
})
</script>
