<script setup>
defineProps({
  name: { type: String, required: true },
  description: { type: String, default: '' }
})
</script>

<template>
  <div class="text-right w-11/12 mx-auto">
    <h1 class="text-white text-xl sm:text-2xl md:text-3xl font-bold leading-snug">{{ name }}</h1>
    <p class="text-gray-300/80 text-sm sm:text-base md:text-lg mt-2 leading-relaxed">{{ description }}</p>
  </div>
</template>

<style scoped>
</style>


