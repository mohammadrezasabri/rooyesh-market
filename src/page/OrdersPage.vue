<script setup>
import { ref } from 'vue'
import OrderList from '../components/orders/OrderList.vue'
import OrdersHeader from '../components/orders/OrdersHeader.vue'
import Nav from '../components/nav.vue'


const orders = ref([
  {
    id: 1,
    name: 'چیپس مزمز',
    price: 35000,
    image: '/img/products/chips.jpg',
    date: '1403/07/30',

  },
  {
    id: 2,
    name: 'پفک نمکی چی توز',
    price: 28000,
    image: '/img/products/pofak.jpg',
    date: '1403/08/01',
 
  },
  {
    id: 3,
    name: 'نوشابه کوکاکولا ۱ لیتری',
    price: 20000,
    image: '/img/products/cocacola.jpg',
    date: '1403/08/02',
 
  },
])
</script>

<template>
  <div
    class="relative min-h-screen overflow-hidden bg-[#242424] flex flex-col items-center p-5"
  >
    <!-- پس‌زمینه بلور -->
    <div
      class="absolute top-0 right-5 sm:left-16 md:left-24 lg:left-36 w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 bg-[#FF6600] rounded-b-full rounded-l-full blur-2xl sm:blur-3xl opacity-35 pointer-events-none">
    </div>
    <div
      class="absolute top-40 sm:top-48 md:top-56 lg:top-60 -left-16 sm:-left-24 md:-left-28 lg:-left-32 w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 bg-[#22FF00] rounded-b-full rounded-r-full blur-2xl sm:blur-3xl opacity-15 pointer-events-none">
    </div>
    <div
      class="absolute bottom-0 right-0 w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 bg-[#676767] rounded-l-full rounded-t-full blur-2xl sm:blur-3xl opacity-35 pointer-events-none">
    </div>

    <!-- اجزای صفحه -->
    <OrdersHeader />
    <OrderList :orders="orders" />

    <Nav/>

  </div>
</template>

<style scoped>

</style>
