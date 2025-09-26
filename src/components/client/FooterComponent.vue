<template>
  <!-- footer start -->
  <footer class="w-full bg-primary text-secondary">
    <div
      class="max-w-7xl mx-auto px-4 py-10 grid sm:grid-cols-1 md:grid-cols-2 gap-8 border-t border-t-secondary"
    >
      <!-- info start -->
      <div class="flex flex-col items-center md:items-start text-center md:text-left gap-2">
        <!-- logo -->
        <h1 class="text-3xl newsreader font-bold">CARTIEMAN</h1>
        <h2 class="text-md">LOREM IPSUM</h2>
        <p class="text-xs leading-relaxed">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        </p>
      </div>
      <!-- info end -->

      <div class="grid grid-cols-3 w-full">
        <!-- links column -->
        <div class="flex justify-center md:justify-start">
          <ul class="space-y-2 text-sm text-center">
            <li class="text-xl font-bold py-1 text-secondary">Short link</li>
            <li><router-link to="/" class="hover:underline">example</router-link></li>
            <li><router-link to="/" class="hover:underline">example</router-link></li>
            <li><router-link to="/" class="hover:underline">example</router-link></li>
            <li><router-link to="/" class="hover:underline">example</router-link></li>
            <li><router-link to="/" class="hover:underline">example</router-link></li>
            <li><router-link to="/" class="hover:underline">example</router-link></li>
          </ul>
        </div>

        <!-- links column -->
        <div class="flex justify-center md:justify-start">
          <ul class="space-y-2 text-sm text-center">
            <li class="text-xl font-bold py-1 text-secondary">Short link</li>
            <li><router-link to="/" class="hover:underline">example</router-link></li>
            <li><router-link to="/" class="hover:underline">example</router-link></li>
            <li><router-link to="/" class="hover:underline">example</router-link></li>
            <li><router-link to="/" class="hover:underline">example</router-link></li>
            <li><router-link to="/" class="hover:underline">example</router-link></li>
            <li><router-link to="/" class="hover:underline">example</router-link></li>
          </ul>
        </div>

        <!-- links column -->
        <div class="flex justify-center md:justify-start">
          <ul class="space-y-2 text-sm text-center">
            <li class="text-xl font-bold py-1 text-secondary">Short link</li>
            <li><router-link to="/" class="hover:underline">example</router-link></li>
            <li><router-link to="/" class="hover:underline">example</router-link></li>
            <li><router-link to="/" class="hover:underline">example</router-link></li>
            <li><router-link to="/" class="hover:underline">example</router-link></li>
            <li><router-link to="/" class="hover:underline">example</router-link></li>
            <li><router-link to="/" class="hover:underline">example</router-link></li>
          </ul>
        </div>
      </div>
    </div>
    <!-- copy -->
    <div class="w-full border-t border-t-secondary py-5">
      <h1 class="text-center text-xs md:text-sm text-secondary">
        &copy; All rights reserved. Code by
        <span class="text-danger font-bold underline">Inal Karakhanli</span>
      </h1>
    </div>
  </footer>
  <!-- footer end -->
</template>
