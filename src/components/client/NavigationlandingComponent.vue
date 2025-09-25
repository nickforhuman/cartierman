<template>
  <nav
    class="flex justify-between items-center sticky top-0 px-4 py-2 z-50 bg-[rgba(0,0,0,0.6)] w-full"
  >
    <!-- toggle toolbar  -->
    <div class="flex justify-between items-center gap-2 text-secondary">
      <div><Menu /></div>
      <div><Search /></div>
    </div>
    <!-- logo start  -->
    <div>
      <h1 class="tracing-widest text-secondary text-4xl">CARTIERMAN</h1>
    </div>
    <!-- profile bar  -->
    <div class="flex justify-center gap-2 text-secondary">
      <div><Heart /></div>
      <div><User /></div>
      <div><ShoppingBasket /></div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { Heart, User, ShoppingBasket, Menu, Search } from 'lucide-vue-next'
</script>
