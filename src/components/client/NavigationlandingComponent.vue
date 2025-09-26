<template>
  <nav
    class="flex justify-between items-center sticky top-0 px-4 py-2 z-50 bg-[rgba(0,0,0,0.6)] w-full"
  >
    <!-- toggle toolbar  -->
    <div class="flex justify-between items-center gap-2 text-secondary">
      <div @click="navSidebarToggle" class="cursor-pointer"><Menu /></div>
      <div @click="searchSidebarToggle" class="cursor-pointer"><Search /></div>
    </div>
    <!-- logo start  -->
    <div>
      <router-link to="/">
        <h1 class="tracing-widest newsreader text-secondary sm:text-2xl md:text-4xl select-none">
          CARTIERMAN
        </h1>
      </router-link>
    </div>
    <!-- profile bar  -->
    <div class="flex justify-center gap-2 text-secondary">
      <div><Heart /></div>
      <div><User /></div>
      <div @click="basketSidebarToggle()" class="cursor-pointer"><ShoppingBasket /></div>
    </div>
  </nav>
  <transition name="slide">
    <!-- search start  -->
    <div
      v-if="isSearchSidebar"
      class="w-full overflow-hidden h-screen bg-[rgba(0,0,0,0.6)] fixed z-50 inset-0"
    >
      <div class="w-68 h-screen bg-white absolute left-0">
        <!-- sidebar header  -->
        <div class="text-secondary absolute top-0 left-0">
          <button class="m-2 bg-primary/10 p-2 cursor-pointer" @click="searchSidebarToggle()">
            <X />
          </button>
        </div>
        <div class="py-16 flex justify-center items-center">
          <form action="" class="m-2 relative flex">
            <input
              type="search"
              placeholder="search..."
              class="outline-none border-b border-b-secondart/30"
            />
            <button type="submit" class="flex justify-center items-center"><Search /></button>
          </form>
        </div>
      </div>
    </div>
    <!-- search end  -->
  </transition>
  <transition name="slide">
    <!-- sidebars start  -->
    <div
      v-if="isNavSidebar"
      class="w-full overflow-hidden h-screen bg-[rgba(0,0,0,0.6)] fixed z-50 inset-0"
    >
      <div class="w-68 h-screen bg-white">
        <!-- sidebar header start -->
        <div class="w-full flex justify-between items-center">
          <div>
            <h1 class="mx-2 text-secondary font-bold">CARTIERMAN</h1>
          </div>
          <div class="text-secondary">
            <button class="m-2 bg-primary/10 p-2 cursor-pointer" @click="navSidebarToggle()">
              <X />
            </button>
          </div>
        </div>
        <!-- sidebar header end  -->
        <ul>
          <li>
            <router-link to="/" class="p-2 hover:bg-primary/20 w-full">Home</router-link>
          </li>
        </ul>
      </div>
    </div>
    <!-- sidebars end  -->
  </transition>

  <!-- sidebar basket start  -->

  <transition name="slide">
    <!-- sidebars start  -->
    <div
      v-if="isBasketSidebar"
      class="w-full overflow-hidden h-screen bg-[rgba(0,0,0,0.6)] fixed z-50 inset-0"
    >
      <div class="w-68 h-screen bg-white absolute right-0">
        <!-- sidebar header  -->
        <div class="text-secondary absolute top-0 left-0">
          <button class="m-2 bg-primary/10 p-2 cursor-pointer" @click="basketSidebarToggle()">
            <X />
          </button>
        </div>
      </div>
    </div>
    <!-- sidebars end  -->
  </transition>
  <!-- sidebar basket end  -->
</template>

<script setup lang="ts">
import { Heart, User, ShoppingBasket, Menu, Search, X } from 'lucide-vue-next'
import { ref } from 'vue'

// navigation side bar
const isNavSidebar = ref(false)
const navSidebarToggle = () => {
  isNavSidebar.value = !isNavSidebar.value
}
// basket sidebar
const isBasketSidebar = ref(false)
const basketSidebarToggle = () => {
  isBasketSidebar.value = !isBasketSidebar.value
}
// search sidebar
const isSearchSidebar = ref(false)
const searchSidebarToggle = () => {
  isSearchSidebar.value = !isSearchSidebar.value
}
</script>
