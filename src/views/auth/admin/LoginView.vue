<template>
  <!-- admin login start -->
  <section class="w-full h-screen grid lg:grid-cols-2">
    <!-- left side start -->
    <div
      class="hidden lg:block bg-[url('@/assets/contents/auth/login.jpg')] bg-cover bg-center"
    ></div>
    <!-- left side end -->

    <!-- right side start -->
    <div class="flex justify-center items-center bg-gray-100 m-4">
      <div class="w-full max-w-md bg-white shadow-2xl rounded-2xl p-8 flex flex-col gap-6">
        <!-- title -->
        <div class="text-center">
          <h1 class="text-3xl font-extrabold text-gray-800">Admin Login</h1>
          <p class="text-sm text-gray-500 mt-2">Hesabınıza giriş edin və idarə panelinə keçin</p>
        </div>

        <!-- form -->
        <form class="flex flex-col gap-4">
          <input
            type="email"
            placeholder="info@example.com"
            class="px-4 py-2 w-full border rounded-lg focus:ring-2 focus:ring-secondary focus:outline-none"
          />

          <input
            type="password"
            placeholder="••••••••"
            class="px-4 py-2 w-full border rounded-lg focus:ring-2 focus:ring-secondary focus:outline-none"
          />

          <div class="flex justify-between items-center text-sm">
            <label class="flex items-center gap-2">
              <input type="checkbox" class="accent-secondary" />
              <span class="text-gray-600">Yadda saxla</span>
            </label>
            <a href="#" class="text-secondary hover:underline">Şifrəni unutdun?</a>
          </div>

          <button
            type="submit"
            class="w-full py-2 bg-secondary text-white rounded-lg shadow-md hover:bg-secondary/90 transition"
          >
            Giriş et
          </button>
        </form>

        <!-- footer -->
        <p class="text-xs text-center text-gray-500">
          © 2025 Admin Panel. Bütün hüquqlar qorunur.
        </p>
      </div>
    </div>
    <!-- right side end -->
  </section>
  <!-- admin login end -->
</template>
