<script setup>

import Nav from '../components/nav.vue';
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import { supabase } from '../lib/supabase';

const router = useRouter()

const products = ref([]);
const loading = ref(true);
const errorMsg = ref("");

onMounted(async () => {
  try {
    const { data, error } = await supabase.from("rm_product").select("*");
    console.log('data', data)
    console.log('error', error)

    if (error) throw error;
   
    products.value = data;
   
  } catch (error) {
    errorMsg.value = "خطا در دریافت محصولات 😕";
    console.error(error.message);
  } finally {
    loading.value = false;
  }
});


const gotoprofile = () => {
  router.push('/profile')
}

const gotohome = () => {
  router.push('/home')
}




  </script>

<template>
  <!-- نکته: overflow-x-hidden برای جلوگیری از لغزش افقی؛ svh برای ارتفاع دقیق موبایل -->
  <div  class="min-h-[100svh] w-full flex flex-col items-center justify-start bg-[#242424] relative overflow-x-hidden">

    <!-- پس‌زمینه‌های رنگی (در یک رَپر با overflow-hidden تا بلِر بیرون نزند) -->
    <div class="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <div
        class="absolute top-2 right-5 sm:left-16 md:left-24 lg:left-36 w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 bg-[#FF6600] rounded-b-full rounded-l-full blur-2xl sm:blur-3xl opacity-35">
      </div>
      <div
        class="absolute top-40 sm:top-48 md:top-56 lg:top-60 -left-12 sm:-left-20 md:-left-24 lg:-left-28 w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 bg-[#22FF00] rounded-b-full rounded-r-full blur-2xl sm:blur-3xl opacity-15">
      </div>
      <div
        class="absolute bottom-2 right-2 w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 bg-[#676767] rounded-l-full rounded-t-full blur-2xl sm:blur-3xl opacity-35">
      </div>
    </div>

    <!-- محتوای صفحه با فاصله‌های مثبت (بدون شیفت‌های منفی) -->
    <div class="relative z-10 w-full flex flex-col items-center gap-y-6 sm:gap-y-8">

      <!-- هدر -->
      <div class="w-11/12 max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl mt-4 sm:mt-6 lg:mt-8 flex items-center justify-between text-white">
        <div class="flex-1 items-center justify-center">
          <h1 @click="gotohome" class="text-orange-400 text-2xl font-bold text-center">رویـش مارکت</h1>
          <p class="text-white tracking-[3px] sm:tracking-[2px] font-thin text-xs sm:text-sm opacity-45 text-center">rooyesh market</p>
        </div>
        <div @click="gotoprofile" class="w-10 h-10 sm:w-14 sm:h-14 rounded-full overflow-hidden border-2 border-white">
          <img src="../assets/img/۲۰۲۴۰۵۲۷_۰۱۲۵۴۰ 1.png" alt="profile" class="w-full h-full object-cover ">
        </div>
      </div>

      <!-- بنر (یک شیفت حذف شد؛ فقط یک رپر ساده) -->
      <div class="w-full">
        <div
          class="mx-auto w-11/12 max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl h-40 md:h-48 rounded-[28px] md:rounded-[36px] overflow-hidden relative shadow-2xl"
        >
          <!-- هاله‌های رنگی نرم -->
          <div class="pointer-events-none absolute -left-12 -bottom-10 w-36 h-36 sm:w-40 sm:h-40 rounded-full bg-[#22FF00]/30 blur-2xl"></div>
          <div class="pointer-events-none absolute -right-12 -top-10 w-36 h-36 sm:w-40 sm:h-40 rounded-full bg-[#FF6600]/35 blur-2xl"></div>

          <!-- محتوا -->
          <div class="relative h-full flex flex-col items-center justify-center px-4 text-center select-none">
            <h2
              class="font-extrabold leading-tight tracking-tight bg-gradient-to-r from-emerald-200 via-rose-200 to-amber-200 bg-clip-text text-transparent text-3xl md:text-4xl"
            >
              هایپر مارکت رویش
            </h2>
            <p class="mt-1.5 md:mt-2 text-white/70 [text-transform:lowercase] tracking-[0.22em] sm:tracking-[0.25em] text-[11px] sm:text-[13px]">
              souper market rooyesh
            </p>
          </div>
        </div>
      </div>

      <!-- دسته‌ها و مشاهده همه -->
      <div class="w-11/12 max-w-md flex items-center justify-center">
        <div class="flex items-center text-green-400 text-xl cursor-pointer">
          <span>&lt;</span>
          <span>مشاهده همه</span>
        </div>
      </div>

      <!-- بخش دسته‌بندی محصولات -->
       <div v-if="loading" class="text-gray-400 text-center">درحال بارگذاری...</div>
       <div v-else-if="errorMsg" class="text-red-400 text-center">
    {{ errorMsg }}
  </div>
      <div v-else class="grid grid-cols-3 gap-4 sm:gap-6">
        <!-- ردیف اول -->
        <div
          v-for="(item, index) in products.slice(0, 3)"
          :key="'row1-'  + index"
          class="w-22 sm:w-28 h-22 sm:h-28 bg-[#1E1E1E] hover:bg-[#22c55e]/20 transition-colors duration-300 rounded-2xl flex flex-col items-center justify-center text-white text-sm shadow-md"
        >
          <img :src="item.image" alt="product" class="mt-2 w-15 h-15 mb-1 object-contain rounded-xl" />
          <span class="relative -top-1 font-medium">{{ item.title }}</span>
        </div>

        <!-- ردیف دوم -->
        <div
          v-for="(item, index) in products.slice(3, 6)"
          :key="'row2-' + index"
          class="w-22 sm:w-28 h-22 sm:h-28 bg-[#1E1E1E] hover:bg-[#22c55e]/20 transition-colors duration-300 rounded-2xl flex flex-col items-center justify-center text-white text-sm shadow-md"
        >
          <img :src="item.image" alt="product" class="mt-2 w-15 h-15 mb-1 object-contain rounded-xl" />
          <span class="relative font-medium">{{ item.title }}</span>
        </div>
      </div>

      <!-- محصولات پیشنهادی -->
      <div class="w-11/12 max-w-md flex flex-row-reverse items-center justify-between">
        <div class="text-orange-500 font-bold text-lg">محصولات پیشنهادی</div>
        <div class="flex items-center text-green-400 text-sm cursor-pointer">
          <span class="mr-1">&lt;</span>
          <span>مشاهده همه</span>
        </div>
      </div>

      <div  dir="rtl" class="w-full max-w-md mx-auto px-4">
        <div class="flex items-start gap-4 overflow-x-auto">
          <!-- تیتر -->
          <div class="flex-shrink-0 w-28 mt-6 leading-tight">
            <p class="text-orange-500 text-sm font-extrabold">پیشنهاد</p>
            <p class="text-orange-500 text-sm font-extrabold">شگفت‌انگیز برای شما</p>
          </div>

          <!-- لیست محصولات اسکرول‌پذیر -->
          <div class="flex gap-3 scrollba r-none -mx-2 p-2" style="-webkit-overflow-scrolling: touch; direction: rtl;">
            <div class="w-28 min-w-[7rem] bg-[#1E1E1E] p-2 rounded-xl flex-shrink-0">
              <img src="../assets/img/image 2.png" alt="محصول" class="w-full h-20 object-cover rounded-md mb-1">
              <p class="text-white text-xs font-semibold">چیپس لیز</p>
              <p class="text-orange-400 text-[11px] mt-0.5">20,000 تومان</p>
            </div>
            <div class="w-28 min-w-[7rem] bg-[#1E1E1E] p-2 rounded-xl flex-shrink-0">
              <img src="../assets/img/image 2 (1).png" alt="محصول" class="w-full h-20 object-cover rounded-md mb-1">
              <p class="text-white text-xs font-semibold">نوشابه خانواده</p>
              <p class="text-orange-400 text-[11px] mt-0.5">25,000 تومان</p>
            </div>
            <div class="w-28 min-w-[7rem] bg-[#1E1E1E] p-2 rounded-xl flex-shrink-0">
              <img src="../assets/img/57cdffa416a872dbaa4ac09c328deae7dec40e01.png" alt="محصول" class="w-full h-20 object-cover rounded-md mb-1">
              <p class="text-white text-xs font-semibold">پنیر کاله</p>
              <p class="text-orange-400 text-[11px] mt-0.5">18,000 تومان</p>
            </div>
          </div>
        </div>
      </div>

      <!-- نوار ناوبری -->
      <Nav />
    </div>
  </div>
</template>
