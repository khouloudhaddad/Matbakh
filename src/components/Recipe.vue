<script setup lang="ts">
import timeIcon from "@/assets/img/clock.svg";
import fireIcon from "@/assets/img/fire.svg";
import ratingIcon from "@/assets/img/stars.svg";
import Tags from "@/components/Tags.vue";
defineProps<{
  title: String;
  duration: Number;
  calories: Number;
  rating: Number;
  reviewCount: Number;
  img: String;
  id: Number;
  tags: Array<string>;
}>();
</script>

<template>
  <div
    class="card flex flex-col mb-3 items-center relative rounded-lg shadow-lg"
  >
    <div class="max-h-[280px] overflow-hidden">
      <img
        :src="img"
        :alt="title"
        class="rounded-t-lg object-cover max-w-full"
      />
    </div>
    <Tags :tags="tags" class="absolute top-3 left-3 rtl:left-0 rtl:right-3" />
    <div class="flex flex-col items-start p-4 w-full">
      <h5>
        <router-link
          class="text-xl capitalize font-semibold mb-1 hover:text-soft-peach-700 transition-all"
          :to="`/recipes/${id}`"
          >{{ title }}</router-link
        >
      </h5>
      <div class="flex w-full gap-3 mb-4">
        <div class="flex gap-1">
          <img :src="timeIcon" alt="duration" />
          <span>{{ duration }}</span>
        </div>
        <div class="flex gap-1">
          <img :src="fireIcon" alt="calories" />
          <span>{{ calories }}</span>
        </div>
        <div class="flex gap-1">
          <img :src="ratingIcon" alt="rating" />
          <span>{{ rating }} ({{ reviewCount }})</span>
        </div>
      </div>
      <router-link
        :to="{ name: 'recipe', params: { id: id } }"
        class="bg-sea-buckthorn-500 hover:bg-sea-buckthorn-600 transition-all font-semibold px-5 py-2 text-white rounded-md"
      >
        {{ $t('View') }}
      </router-link>
    </div>
  </div>
</template>


<style scoped>
</style>