<script setup>
defineProps({
  order: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <div
    class="flex items-center justify-between  backdrop-blur-lg rounded-2xl p-4 shadow-md border border-green-500 hover:shadow-lg transition"
  >
    <div class="flex items-center gap-4">
      <img
        :src="order.image"
        alt="product"
        class="w-16 h-16 rounded-xl object-cover border border-gray-200"
      />
      <div>
        <h2 class="font-semibold text-gray-800 text-lg">{{ order.name }}</h2>
        <p class="text-gray-500 text-sm">{{ order.date }}</p>
        
      </div>
    </div>
    <p class="font-bold text-green-700 text-base">
      {{ order.price.toLocaleString() }} تومان
    </p>
  </div>
</template>
