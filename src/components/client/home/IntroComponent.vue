<script setup lang="ts">
import { Instagram, Facebook, Linkedin } from 'lucide-vue-next'
import SwiperComponent from './SwiperComponent.vue'
</script>
<template>
  <section class="relative w-full h-160 overflow-hidden sm:flex hidden justify-center items-end">
    <div class="absolute inset-0 w-full h-full bg-[rgba(0,0,0,0.6)] z-10"></div>
    <video autoplay muted loop class="absolute inset-0 w-full h-full object-cover">
      <source src="@/assets/contents/intro/introduction.mp4" type="video/mp4" />
    </video>
    <!-- navigate  -->
    <div
      class="w-full flex flex-col justify-end items-center gap-2 font-bold z-20 bg-primary/50 py-4 text-center"
    >
      <h1 class="text-xl text-secondary">Lorem Ipsum</h1>
      <p class="text-xs text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <router-link
        to="/"
        class="px-4 py-2 bg-secondary test-primary m-2 hover:bg-primary hover:text-secondary transition"
        >DISCOVER</router-link
      >
      <!-- social media start  -->
      <div class="w-full flex justify-center items-center gap-2">
        <ul
          class="flex justify-center items-center gap-3 text-secondary border-r border-r-secondary p-2"
        >
          <li>
            <a href=""><Instagram /></a>
          </li>
          <li>
            <a href=""><Facebook /></a>
          </li>
          <li>
            <a href=""><Linkedin /></a>
          </li>
        </ul>
        <!-- contact -->
        <ul class="flex justify-start flex-col text-left text-secondary">
          <li><a href="tel:9945552323">+994 (555) 23 23</a></li>
          <li><a href="">info@cartierman.com</a></li>
        </ul>
      </div>
      <!-- social media end  -->
    </div>
  </section>
  <!-- mobile intro  -->
  <section class="flex sm:hidden">
    <SwiperComponent />
  </section>
</template>
