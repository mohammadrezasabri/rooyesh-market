<script setup>
defineProps({
  price: { type: [Number, String], required: true },
  currency: { type: String, default: 'تومان' }
})
</script>

<template>
  <div class="w-11/12 mx-auto flex items-baseline justify-between">
    <span class="text-gray-400 text-sm">قیمت</span>
    <div class="text-orange-400 font-extrabold text-xl sm:text-2xl">
      {{ new Intl.NumberFormat('fa-IR').format(Number(price)) }}
      <span class="text-sm text-gray-300 font-normal">{{ currency }}</span>
    </div>
  </div>
</template>

<style scoped>
</style>


