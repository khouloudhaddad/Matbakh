<script setup lang="ts">
    import timeIcon from '../../src/assets/img/clock.svg';
    import fireIcon from '../../src/assets/img/fire.svg';
    import ratingIcon from '../../src/assets/img/stars.svg';
    defineProps<{
        title: String,
        duration: Number
        calories: Number,
        rating: Number,
        reviewCount: Number,
        img: String
    }>();
</script>

<template>
    <div class="card flex flex-col mb-3 items-center relative rounded-lg shadow-lg">
        <div class="">
            <img :src="img" :alt="title" class="w-full rounded-t-lg">
        </div>
        <div class="flex flex-col items-start px-3 py-4 w-full">
            <h5 class="text-xl capitalize font-semibold mb-1">{{ title }}</h5>
            <div class="flex w-full gap-3 mb-4">
                <div class="flex gap-1">
                    <img :src="timeIcon" alt="duration">
                    <span>{{ duration }}</span>
                </div>
                <div class="flex gap-1">
                    <img :src="fireIcon" alt="calories">
                    <span>{{ calories }}</span>
                </div>
                <div class="flex gap-1">
                    <img :src="ratingIcon" alt="rating">
                    <span>{{ rating }} ({{ reviewCount }})</span>
                </div>
            </div>
            <button class="bg-sea-buckthorn-500 hover:bg-sea-buckthorn-600 transition-all font-semibold px-5 py-2 text-white rounded-md">View</button>
        </div>
    </div>
</template>


<style scoped>

</style>