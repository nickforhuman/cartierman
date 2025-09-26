<template>
  <section class="w-full h-auto flex justify-center items-center">
    <div class="w-full min-h-screen grid m-1 grid-cols-2 gap-1">
      <!-- card start  -->
      <div
        v-for="collectionItem in collectionItems"
        class="relative inset-0 overflow-hidden cursor-pointer shadow-md"
        :key="collectionItem.id"
      >
        <!-- eticket  -->
        <div
          class="absolute shadow-sm px-2 md:px-4 text-xs py-2 md:py-1 bg-secondary border-l-2 border-l-white text-primary top-2 right-0 z-10"
        >
          <h1>Trend Collection</h1>
        </div>
        <img
          :src="collectionItem.image"
          class="absolute hover:scale-110 transition object-cover w-full h-full"
          alt=""
        />
        <!-- label  -->
        <div
          class="absolute bg-primary/60 text-secondary py-1 md:py-2 flex flex-col justify-center items-start z-10 w-full bottom-0"
        >
          <h1 class="text-xl md:text-md m-1 newsreader">{{ collectionItem.name }}</h1>
          <p class="text-xs italic m-1">{{ collectionItem.description }}</p>
          <div class="w-full flex justify-center items-center p-1">
            <router-link
              to="/"
              class="px-4 py-2 w-64 bg-primary text-secondary hover:bg-white transition flex justify-center items-center gap-2"
              >discover <ChevronUp class="w-4 h-4"
            /></router-link>
          </div>
        </div>
      </div>
      <!-- card end  -->
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ChevronUp } from 'lucide-vue-next'
const collectionItems = ref([
  {
    id: 1,
    name: 'Lorem Ipsum',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    image: new URL('@/assets/contents/collections/collection-1.jpg', import.meta.url).href,
  },
  {
    id: 2,
    name: 'Lorem Ipsum',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    image: new URL('@/assets/contents/collections/collection-2.jpg', import.meta.url).href,
  },
  {
    id: 3,
    name: 'Lorem Ipsum',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    image: new URL('@/assets/contents/collections/collection-3.jpg', import.meta.url).href,
  },
  {
    id: 4,
    name: 'Lorem Ipsum',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    image: new URL('@/assets/contents/collections/collection-4.jpg', import.meta.url).href,
  },
])
</script>
