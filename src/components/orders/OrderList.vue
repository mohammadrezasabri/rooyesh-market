<script setup>
import OrderItem from './OrderItem.vue'

defineProps({
  orders: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <div class="w-full max-w-lg space-y-4 z-10">
    <OrderItem v-for="order in orders" :key="order.id" :order="order" />
  </div>

  <div v-if="orders.length === 0" class="text-gray-500 text-center mt-10">
    هنوز سفارشی ثبت نکردی 🍃
  </div>
</template>
