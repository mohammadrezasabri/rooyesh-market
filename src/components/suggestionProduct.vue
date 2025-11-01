<script setup>
import { onMounted, ref } from 'vue';
import { supabase } from '../lib/supabase';
import { useRouter } from 'vue-router';

const products = ref([]);
const loading = ref(true);
const errorMsg = ref('');

const router = useRouter();

// تابع برای انتخاب 4 محصول به صورت رندم
const getRandomProducts = (allProducts, count = 4) => {
  if (!allProducts || allProducts.length === 0) return [];
  if (allProducts.length <= count) return allProducts;
  
  const shuffled = [...allProducts].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

onMounted(async () => {
  try {
    const { data, error } = await supabase.from('rm_product').select('*');
    console.log('data', data);
    console.log('error', error);

    if (error) throw error;

    // انتخاب 4 محصول به صورت رندم
    products.value = getRandomProducts(data || []);
  } catch (error) {
    errorMsg.value = 'خطا در دریافت محصولات 😕';
    console.error(error.message);
  } finally {
    loading.value = false;
  }
});

const formatPrice = (price) => {
  if (!price) return '';
  return new Intl.NumberFormat('fa-IR').format(price) + ' تومان';
};

const gotoproducts = () => {
  router.push('/allproducts');
};
</script>


<template>
    <div class="w-11/12 max-w-md flex flex-row-reverse items-center justify-between">
        <div class="text-orange-500 font-bold text-lg">محصولات پیشنهادی</div>
        <div class="flex items-center text-green-400 text-sm cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                </svg>

          <span @click="gotoproducts">مشاهده همه</span>
        </div>
      </div>

      <div dir="rtl" class="w-full max-w-md mx-auto px-4 relative -top-6">
        <div class="flex items-start gap-4 overflow-x-auto">
          <!-- تیتر -->
          <div class="flex-shrink-0 w-28 mt-6 leading-tight">
            <p class="text-orange-500 text-sm font-extrabold"> پیشنهاد های</p>
            <p class="text-orange-500 text-sm font-extrabold">شگفت‌انگیز برای شما</p>
          </div>

          <!-- لیست محصولات اسکرول‌پذیر -->
          <div
            v-if="loading"
            class="flex gap-3 scrollbar-none -mx-2 p-2"
            style="-webkit-overflow-scrolling: touch; direction: rtl"
          >
            <div v-for="n in 4" :key="n" class="w-28 min-w-[7rem] bg-[#1E1E1E] p-2 rounded-xl flex-shrink-0 animate-pulse">
              <div class="w-full h-20 bg-gray-700 rounded-md mb-1"></div>
              <div class="h-4 bg-gray-700 rounded mb-1"></div>
              <div class="h-3 bg-gray-700 rounded"></div>
            </div>
          </div>
          <div
            v-else-if="errorMsg"
            class="text-red-400 text-sm text-center py-4"
          >
            {{ errorMsg }}
          </div>
          <div
            v-else
            class="flex gap-3 scrollbar-none -mx-2 p-2"
            style="-webkit-overflow-scrolling: touch; direction: rtl"
          >
            <div
              v-for="(item, index) in products"
              :key="index"
              class="w-28 min-w-[7rem] bg-[#1E1E1E] p-2 rounded-xl flex-shrink-0"
            >
              <img
                :src="item.image"
                :alt="item.title"
                class="w-full h-20 object-cover rounded-md mb-1"
              />
              <p class="text-white text-xs font-semibold">{{ item.title }}</p>
              <p v-if="item.price" class="text-orange-400 text-[11px] mt-0.5">{{ formatPrice(item.price) }}</p>
            </div>
          </div>
        </div>
      </div>
</template>