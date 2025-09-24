<template>
  <transition name="slide">
    <!-- chat box start  -->
    <div
      v-if="isHelpdesk"
      class="fixed w-72 md:w-164 h-106 z-50 bottom-25 right-15 bg-primary/50 backdrop-blur-md border border-secondary rounded-2xl"
    >
      <!-- chat header start  -->
      <div class="absolute top-0 w-full py-1 bg-primary/20 flex justify-between">
        <!-- profile image start  -->
        <div class="flex justify-center text-secondary items-center m-2 gap-2">
          <img
            src="@/assets/contents/chat/profileimage.jpg"
            class="rounded-full p-2 w-16 h-16"
            alt=""
          />
          cartierman AI
        </div>
        <!-- profile image end  -->
        <div class="flex justify-center items-center">
          <button type="button" class="p-2 text-secondary">
            <EllipsisVertical />
          </button>
        </div>
      </div>
      <!-- chat header end  -->
      <div class="absolute w-full h-full">
        <!-- alisa  -->
        <div>
          <h1
            class="absolute px-4 py-2 rounded-2xl rounded-bl-sm left-2 bottom-35 text-secondary bg-primary border border-secondary"
          >
            Hello, i have a question
          </h1>
        </div>
        <!-- john -->
        <div class="absolute px-4 py-2 rounded-2xl rounded-br-sm right-2 bottom-20 bg-secondary">
          <h1>hi, of course</h1>
        </div>
      </div>
      <!-- message box start  -->
      <div class="absolute bottom-0 py-1 w-full flex justify-between">
        <form action="" class="flex justify-center w-full items-center gap-1">
          <input
            type="text"
            placeholder="type"
            class="bg-primary/10 py-2 outline outline-secondary/10 px-2 m-1 w-full text-secondary/50 italic"
          />
          <button
            type="button"
            class="flex justify-center items-center text-secondary m-1 bg-primary rounded-full p-4"
          >
            <SendHorizontal />
          </button>
        </form>
      </div>
      <!-- message box end  -->
    </div>
  </transition>
  <div
    @click="Helpdesk"
    class="fixed md:px-6 md:py-4 p-6 z-50 bottom-2 gap-2 right-2 flex justify-center items-center rounded-full bg-primary text-secondary select-none"
  >
    <MessageCircleMore class="w-8 h-8" />
    <h1 class="hidden md:flex">CHAT TO AN EXPERT</h1>
  </div>
</template>

<script setup lang="ts">
import { MessageCircleMore, EllipsisVertical, SendHorizontal } from 'lucide-vue-next'
import { ref } from 'vue'

const isHelpdesk = ref(false)
const Helpdesk = () => {
  isHelpdesk.value = !isHelpdesk.value
}
</script>

<style scoped>
/* Slide animasiyası */
.slide-enter-from {
  opacity: 0;
  transform: translateY(50px); /* aşağıdan gəlsin */
}
.slide-enter-active {
  transition: all 0.4s ease;
}
.slide-enter-to {
  opacity: 1;
  transform: translateY(0);
}

.slide-leave-from {
  opacity: 1;
  transform: translateY(0);
}
.slide-leave-active {
  transition: all 0.4s ease;
}
.slide-leave-to {
  opacity: 0;
  transform: translateY(50px);
}
</style>
