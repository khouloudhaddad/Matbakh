<script setup lang="ts">
import omlette from "@/assets/img/omlette.avif";
</script>

<template>
  <div class="w-screen bg-gray-200 py-14">
    <div
      class="flex items-center justify-between w-full max-w-[1200px] mx-auto"
    >
      <div>
        <h1 class="text-4xl md:text-5xl">
          Master the Kitchen <br />with Ease: Unleash <br />Your Inner Chef
          Today
        </h1>
        <p class="pt-10 py-12 text-2xl">
          Discover recipes helping you<br />to find the easiest way to cook.
        </p>
        <router-link
          class="bg-sea-buckthorn-500 px-6 py-3 rounded-md text-white hover:bg-sea-buckthorn-600 transition-all text-lg"
          to=""
          >Browse Recipes</router-link
        >
      </div>
      <div>
        <img :src="omlette" alt="" class="max-w-[500px] w-full" />
      </div>
    </div>
  </div>
</template>


<style scoped>
</style>