<template>
  <div class="w-full relative">
    <!-- Swiper -->
    <swiper
      :pagination="{ type: 'progressbar' }"
      :navigation="true"
      :modules="modules"
      :autoplay="{
        delay: 2000,
        disableOnInteraction: false,
      }"
      class="w-full h-72 shadow-lg relative"
    >
      <swiper-slide
        v-for="(slide, index) in slides"
        :key="index"
        class="relative flex justify-center items-center text-white text-xl font-semibold"
      >
        <img :src="slide.image" alt="" class="w-full h-full object-cover" />
      </swiper-slide>
    </swiper>
  </div>
</template>
<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'

// Swiper CSS
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// Swiper Modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules'

const modules = [Pagination, Navigation, Autoplay]

// Resimler için daha basit bir yaklaşım
const slides = [
  {
    text: 'Slide 1',
    image: '/src/assets/contents/magazine/magazine-1.jpg',
  },
  {
    text: 'Slide 2',
    image: '/src/assets/contents/magazine/magazine-2.jpg',
  },
  {
    text: 'Slide 3',
    image: '/src/assets/contents/magazine/magazine-3.jpg',
  },

  {
    text: 'Slide 4',
    image: '/src/assets/contents/magazine/magazine.jpg',
  },
  {
    text: 'Slide 4',
    image: '/src/assets/contents/magazine/magazine-5.jpg',
  },
]
</script>
<style>
/* Progress bar rengi */
.swiper-pagination-progressbar-fill {
  background: var(--color-secondary) !important;
}

/* Navigation butonları */
.swiper-button-next,
.swiper-button-prev {
  color: white !important;
  background: rgba(0, 0, 0, 0.4);
  width: 40px;
  height: 40px;
  padding: 8px;
  border-radius: 50%;
  transition: all 0.3s ease;
}

.swiper-button-next:hover,
.swiper-button-prev:hover {
  background: rgba(0, 0, 0, 0.7);
}
</style>
