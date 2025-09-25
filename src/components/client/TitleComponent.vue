<script setup lang="ts">
import { MapPinned, ChevronRight } from 'lucide-vue-next'
</script>
<template>
  <!-- title bar start  -->
  <div
    class="w-full h-auto sticky bg-primary text-second flex md:justify-between justify-center items-center shadow-sm"
  >
    <!-- get location direction  -->
    <div class="md:flex hidden justify-center">
      <a
        href="https://maps.app.goo.gl/yopgxCGW4MPETNCA6"
        target="_blank"
        class="text-secondary text-xs flex justify-center items-center gap-2 px-6 py-1 border-r border-r-secondary"
      >
        <MapPinned class="w-4 h-4" />
        direction
      </a>
    </div>
    <!-- collections navigate start  -->
    <div class="flex justify-center items-center">
      <router-link
        to="/"
        class="text-secondary text-xs flex justify-center items-center gap-2 py-1"
      >
        Go to 2025 Mens New Season Style Collection <ChevronRight class="w-4 h-4" />
      </router-link>
    </div>
    <!-- language selection start  -->
    <div
      class="text-xs md:flex hidden justify-center items-center text-secondary border-l border-l-secondary"
    >
      <select name="Az" id="Languages">
        <option value="Az">Azerbaijan</option>
        <option value="Tr">Turkey (c)</option>
        <option value="En">Engilish</option>
        <option value="Ru">Russian</option>
      </select>
    </div>
  </div>
  <!-- title bar end  -->
</template>
