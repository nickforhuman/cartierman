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
  <!-- 🔎 Search Sidebar -->
  <transition name="slide">
    <div v-if="isSearchSidebar" class="fixed inset-0 z-50 bg-black/50 flex">
      <aside class="w-72 h-full bg-white shadow-xl relative">
        <!-- header -->
        <div class="flex items-center justify-between px-4 py-3 border-b">
          <h2 class="text-lg font-semibold text-secondary">Search</h2>
          <button class="p-2 rounded-full hover:bg-gray-100" @click="searchSidebarToggle()">
            <X />
          </button>
        </div>
        <!-- content -->
        <div class="p-4">
          <form class="flex items-center border rounded-lg overflow-hidden">
            <input type="search" placeholder="Search..." class="flex-1 px-3 py-2 outline-none" />
            <button type="submit" class="px-3 py-2 bg-primary text-white hover:bg-primary/80">
              <Search />
            </button>
          </form>
        </div>
      </aside>
    </div>
  </transition>

  <!-- 📌 Navigation Sidebar -->
  <transition name="slide">
    <div v-if="isNavSidebar" class="fixed inset-0 z-50 bg-black/50 flex">
      <aside class="w-72 h-full bg-[rgba(0,0,0,0.6)] shadow-xl relative">
        <!-- header -->
        <div class="flex items-center justify-between px-4 py-3 border-b">
          <h1 class="font-bold text-secondary">CARTIERMAN</h1>
          <button
            class="p-2 rounded-full text-secondary cursor-pointer hover:bg-gray-100"
            @click="navSidebarToggle()"
          >
            <X />
          </button>
        </div>
        <!-- content -->
        <ul class="p-4 space-y-2">
          <li>
            <router-link
              to="/"
              class="block px-3 py-2 rounded-lg hover:bg-primary/10 text-secondary"
            >
              Home
            </router-link>
          </li>
          <li>
            <router-link
              to="/about"
              class="block px-3 py-2 rounded-lg hover:bg-primary/10 text-secondary"
            >
              About
            </router-link>
          </li>
        </ul>
        <!-- footer -->
        <div class="absolute bottom-0 w-full border-t p-4">
          <p class="text-sm text-gray-500">© 2025 Cartierman</p>
        </div>
      </aside>
    </div>
  </transition>

  <!--  Basket Sidebar -->
  <transition name="slide">
    <div v-if="isBasketSidebar" class="fixed inset-0 z-50 bg-black/50 flex justify-end">
      <aside class="w-80 h-full bg-white shadow-xl relative">
        <!-- header -->
        <div class="flex items-center justify-between px-4 py-3 border-b">
          <h2 class="text-lg font-semibold text-secondary">Your Basket</h2>
          <button class="p-2 rounded-full hover:bg-gray-100" @click="basketSidebarToggle()">
            <X />
          </button>
        </div>
        <!-- content -->
        <div class="p-4 space-y-3">
          <p class="text-gray-500">Your basket is empty.</p>
        </div>
        <!-- footer -->
        <div class="absolute bottom-0 w-full border-t p-4">
          <button class="w-full py-2 bg-primary text-white rounded-lg hover:bg-primary/80">
            Checkout
          </button>
        </div>
      </aside>
    </div>
  </transition>
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
