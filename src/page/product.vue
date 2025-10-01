<script setup>
import { ref, computed } from 'vue'
import ProductImage from '../components/product/ProductImage.vue'
import ProductDetails from '../components/product/ProductDetails.vue'
import ProductPrice from '../components/product/ProductPrice.vue'
import QuantitySelector from '../components/product/QuantitySelector.vue'
import OrderButton from '../components/product/OrderButton.vue'
import Nav from '../components/nav.vue'

// Mock product; replace with real data or route params later
const product = ref({
  id: 1,
  name: 'چیپس لیز نمکی',
  description: 'چیپس لیز با طعم نمکی، ترد و خوشمزه، مناسب برای میان‌وعده.',
  price: 20000,
  image: new URL('../assets/img/image 2.png', import.meta.url).href
})

const qty = ref(1)
const total = computed(() => product.value.price * qty.value)

function placeOrder() {
  // Placeholder: you can connect to cart flow later
  alert(`سفارش ${qty.value} عدد از «${product.value.name}» ثبت شد!`)
}
</script>

<template>
  <div class="min-h-screen w-full bg-[#242424] relative flex flex-col items-center">
    <!-- background circles (match other pages) -->
    <div class="absolute inset-0 -z-10">
      <div class="absolute top-0 right-5 sm:left-16 md:left-24 lg:left-36 w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 bg-[#FF6600] rounded-b-full rounded-l-full blur-2xl sm:blur-3xl opacity-35 pointer-events-none"></div>
      <div class="absolute top-40 sm:top-48 md:top-56 lg:top-60 -left-16 sm:-left-24 md:-left-28 lg:-left-32 w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 bg-[#22FF00] rounded-b-full rounded-r-full blur-2xl sm:blur-3xl opacity-15 pointer-events-none"></div>
      <div class="absolute bottom-0 right-0 w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 bg-[#676767] rounded-l-full rounded-t-full blur-2xl sm:blur-3xl opacity-35 pointer-events-none"></div>
    </div>

    <div class="w-11/12 max-w-md sm:max-w-lg lg:max-w-3xl pt-6 pb-28">
      <!-- Product content -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
        <div class="order-1 lg:order-none">
          <ProductImage :src="product.image" :alt="product.name" />
        </div>
        <div class="order-2 lg:order-none space-y-5 lg:space-y-6">
          <ProductDetails :name="product.name" :description="product.description" />
          <ProductPrice :price="product.price" />
          <QuantitySelector v-model="qty" />
          <div class="w-11/12 mx-auto flex items-center justify-between">
            <span class="text-gray-400 text-sm">مبلغ کل</span>
            <div class="text-green-400 font-extrabold text-lg sm:text-xl">
              {{ new Intl.NumberFormat('fa-IR').format(total) }}
              <span class="text-xs text-gray-300 font-normal">تومان</span>
            </div>
          </div>
          <OrderButton label="افزودن به سبد" @click="placeOrder" />
        </div>
      </div>
    </div>

    <Nav />
  </div>
</template>

<style scoped>
</style>


