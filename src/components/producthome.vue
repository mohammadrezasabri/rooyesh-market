<script setup>
import { onMounted, ref } from 'vue';
import { supabase } from '../lib/supabase';
const products = ref([]);
const loading = ref(true);
const errorMsg = ref('');

onMounted(async () => {
  try {
    const { data, error } = await supabase.from('rm_product').select('*');
    console.log('data', data);
    console.log('error', error);

    if (error) throw error;

    products.value = data;
  } catch (error) {
    errorMsg.value = 'خطا در دریافت محصولات 😕';
    console.error(error.message);
  } finally {
    loading.value = false;
  }
});

</script>


<template>
    <div v-if="loading" class="text-gray-400 text-center ">درحال بارگذاری...</div>
      <div v-else-if="errorMsg" class="text-red-400 text-center">
        {{ errorMsg }}
      </div>
      <div v-else class="grid grid-cols-3 gap-4 sm:gap-6 -mt-5">
        <!-- ردیف اول -->
        <div
          v-for="(item, index) in products.slice(0, 3)"
          :key="'row1-' + index"
          class="w-25 sm:w-28 h-26 sm:h-28 bg-[#1E1E1E] hover:bg-[#22c55e]/20 transition-colors duration-300 rounded-2xl flex flex-col items-center justify-center text-white text-center text-sm shadow-md"
        >
          <img
            :src="item.image"
            alt="product"
            class="mt-2 w-14 h-14 mb-1 object-contain rounded-xl"
          />
          <span dir="rtl" class="relative -top-1 font-medium truncate w-[80px] block">{{ item.title }}</span>
        </div>

        <!-- ردیف دوم -->
        <div
          v-for="(item, index) in products.slice(3, 6)"
          :key="'row2-' + index"
          class="w-25 sm:w-28 h-26 sm:h-28 bg-[#1E1E1E] hover:bg-[#22c55e]/20 transition-colors duration-300 rounded-2xl flex flex-col items-center justify-center text-white text-center text-sm shadow-md"
        >
          <img
            :src="item.image"
            alt="product"
            class="mt-2 w-15 h-15 mb-1 object-contain rounded-xl"
          />
          <span dir="rtl" class="relative font-medium truncate w-[80px] block">{{ item.title }}</span>
        </div>
      </div>
</template>