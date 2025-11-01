<script setup>
import { onMounted, ref } from 'vue';
import { supabase } from '../lib/supabase';
import SkeletonLoader from '../components/SkeletonLoader.vue';
import Nav from '../components/nav.vue';
import templateapp from '../components/templateapp.vue';
import backdrop from '../components/backdrop.vue';

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
    <templateapp>
        <backdrop/>
        <div class="w-full px-4 pt-6 pb-20 z-10">
            <h1 class="text-2xl sm:text-3xl font-bold text-white mb-6 text-center" dir="rtl">فروشگاه</h1>
            
            <SkeletonLoader v-if="loading" :count="6" />
            <div v-else-if="errorMsg" class="text-red-400 text-center">
                {{ errorMsg }}
            </div>
            <div v-else class="grid grid-cols-3 gap-4 sm:gap-6">
                <div
                    v-for="(item, index) in products"
                    :key="index"
                    class="w-25 sm:w-28 h-26 sm:h-28 bg-[#1E1E1E] hover:bg-[#22c55e]/20 transition-colors duration-300 rounded-2xl flex flex-col items-center justify-center text-white text-center text-sm shadow-md"
                >
                    <img
                        :src="item.image"
                        :alt="item.title"
                        class="mt-2 w-14 h-14 mb-1 object-contain rounded-xl"
                    />
                    <span dir="rtl" class="relative -top-1 font-medium truncate w-[80px] block">{{ item.title }}</span>
                </div>
            </div>
        </div>
        <Nav/>
    </templateapp>
</template>