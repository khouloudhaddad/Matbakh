<script setup lang="ts">
import notFoundImg from "@/assets/img/404.jpg";
</script>

<template>
  <div
    class="max-w-screen w-full flex flex-col items-center gap-5 justify-center h-[75vh]"
  >
    <img :src="notFoundImg" alt="404" class="max-w-[320px]" />
    <h1 class="text-6xl font-semibold text-sea-buckthorn-600">
      404: Not Found
    </h1>
    <router-link
      to="/"
      class="shadow-lg border border-soft-peach-800 flex items-center gap-2 mt-8 bg-soft-peach-600 px-4 py-3 rounded-md hover:bg-white transition-all text-white hover:text-soft-peach-800 text-semibold"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="size-5"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
        />
      </svg>

      Back Home
    </router-link>
  </div>
</template>


<style scoped>
</style>