<script setup>
defineProps({
  src: { type: String, required: true },
  alt: { type: String, default: 'product image' }
})
</script>

<template>
  <div class="w-full flex items-center justify-center">
    <img :src="src" :alt="alt" class="w-9/12 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg object-contain rounded-xl shadow-lg"/>
  </div>
  
</template>

<style scoped>
</style>


