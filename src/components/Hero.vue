<script setup lang="ts">
import omlette from "@/assets/img/omlette.avif";
import { ref, onMounted, withDefaults } from "vue";
const props = withDefaults(
  defineProps<{
    image?: string;
    title?: string;
    description?: string;
    btnText?: string;
    showBtn?: boolean;
  }>(),
  {
    image: omlette,
    title: "Master the Kitchen with Ease: Unleash Your Inner Chef Today",
    description:
      "Discover recipes helping you to find the easiest way to cook.",
    showBtn: false,
    btnText: "Browse Recipes",
  }
);

</script>

<template>
  <div class="w-screen bg-gray-200 py-14 mb-10 px-5">
    <div
      class="flex lg:flex-row flex-col-reverse items-center justify-between w-full max-w-[1200px] mx-auto"
    >
      <div class="md:mb-0 mt-10 text-center lg:text-left lg:max-w-[50%] px-5">
        <h1 class="text-4xl lg:text-5xl">
          {{ props.title }}
        </h1>
        <p class="pt-10 py-12 text-2xl">
          {{ props.description }}
        </p>
        <router-link
          v-if="showBtn"
          class="bg-sea-buckthorn-500 px-6 py-3 rounded-md text-white hover:bg-sea-buckthorn-600 transition-all text-lg"
          to="/recipes"
          >{{ props.btnText }}</router-link
        >
      </div>
      <div>
        <img
          :src="props.image"
          :alt="props.title"
          class="max-w-[500px] w-full"
        />
      </div>
    </div>
  </div>
</template>


<style scoped>
</style>