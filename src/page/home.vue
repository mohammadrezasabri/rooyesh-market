<script setup>

import Nav from '../components/nav.vue';
import { useRoute, useRouter } from 'vue-router';
import Loading from '../components/loading.vue';
import {ref} from 'vue'

  
  </script>

<template>

  
 <div class="h-full w-full flex flex-col items-center justify-between bg-[#242424] relative ">

    <!-- پس‌زمینه‌های رنگی -->
    <div
      class="absolute top-0 left-36 w-80 h-80 bg-[#FF6600] rounded-b-full rounded-l-full blur-3xl opacity-35 pointer-events-none">
    </div>
    <div
      class="absolute top-60 -left-32 w-80 h-80 bg-[#22FF00] rounded-b-full rounded-r-full blur-3xl opacity-15 pointer-events-none">
    </div>
    <div
      class="absolute bottom-0 right-0 w-80 h-80 bg-[#676767] rounded-l-full rounded-t-full blur-3xl opacity-35 pointer-events-none">
    </div>
    <!-- هدر -->
    <div class="w-11/12 max-w-md mt-4 flex items-center justify-between text-white">
      <!-- تصویر پروفایل -->

      <div class=" rounded-sm">
        <img src="../assets/img/Vector.png" alt="menu" class="w-6 h-6">
      </div>
      <!-- عنوان فروشگاه -->
      <div class="text-center flex-1 -ml-10">
        <h1 class="text-orange-400 text-lg font-bold">رویـش مارکت</h1>
        <p class="text-white tracking-[2px] font-thin text-xs opacity-45 ">royesh markat</p>
      </div>

      <!-- آیکن منو -->

      <div class="w-10 h-10 rounded-full overflow-x-hidden border-2 border-white">
        <img src="../assets/img/۲۰۲۴۰۵۲۷_۰۱۲۵۴۰ 1.png" alt="profile" class="w-full h-full object-cover">
      </div>
    </div>

    <!-- نوار جستجو -->
    <!-- کادر جستجو زیر هدر -->
    <div class="w-11/12 max-w-md mt-4 relative">
      <!-- 🔍 آیکن ذره‌بین -->
      <span class="absolute inset-y-0 right-4 flex items-center pointer-events-none">
        <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z"></path>
        </svg>
      </span>

      <!-- 🔤 کادر ورودی جستجو -->
      <input type="text" placeholder="...محصول مورد نظر را جستجو کنید"
        class="w-full bg-[#1E1E1E] text-white text-sm px-10 py-2 border border-gray-600 rounded-full h-12 placeholder-gray-400 outline-none">
    </div>
    <div class="w-96 h-48 flex items-center pt-3">
      <img src="../assets/img/Untitled 1.png">
    </div>

    <!-- دسته‌ها و مشاهده همه -->
    <div class="w-11/12 max-w-md flex flex-row-reverse items-center justify-between mt-4 px-2">
      <!-- دسته‌ها (راست) -->
      <div class="text-orange-500 font-bold text-lg">دسته ها</div>

      <!-- مشاهده همه (چپ) -->
      <div class="flex items-center text-green-400 text-sm cursor-pointer">
        <span class="mr-1">&lt;</span>
        <span>مشاهده همه</span>
      </div>
    </div>

    <div class="mt-12 grid grid-cols-4 gap-4">
      <div class="w-20 h-24 bg-[#242424]/55 rounded-xl flex flex-col items-center justify-center text-white text-sm">
        <img src="../assets/img/rb_12580.png" alt="">دسر
      </div>
      <div class="w-20 h-24 bg-[#242424]/55 rounded-xl flex flex-col items-center justify-center text-white text-sm">
        <img src="../assets/img/rb_2150731924.png" alt="">کیک
      </div>
      <div class="w-20 h-24 bg-[#242424]/55 rounded-xl flex flex-col items-center justify-center text-white text-sm">
        <img src="../assets/img/rb_2151261349.png" alt="">میان‌وعده
      </div>
      <div class="w-20 h-24 bg-[#242424]/55 rounded-xl flex flex-col items-center justify-center text-white text-sm">
        <img src="../assets/img/rb_11570.png" alt=""> چیپس
      </div>
      <div class="w-20 h-24 bg-[#242424]/55 rounded-xl flex flex-col items-center justify-center text-white text-sm">
        <img src="../assets/img/rb_12580.png" alt="">دسر
      </div>
      <div class="w-20 h-24 bg-[#242424]/55 rounded-xl flex flex-col items-center justify-center text-white text-sm">
        <img src="../assets/img/rb_2149108540.png" alt="">کافه
      </div>
      <div class="w-20 h-24 bg-[#242424]/55 rounded-xl flex flex-col items-center justify-center text-white text-sm">
        <img src="../assets/img/rb_12580.png" alt="">بستنی
      </div>
      <div class="w-20 h-24 bg-[#242424]/55 rounded-xl flex flex-col items-center justify-center text-white text-sm">
        <img src="../assets/img/rb_2149108540.png" alt=""> کافه
      </div>
    </div>

    <div class="w-11/12 max-w-md flex flex-row-reverse items-center justify-between mt-4 px-2">
      <!-- دسته‌ها (راست) -->
      <div class="text-orange-500 font-bold text-lg">محصولات پیشنهادی</div>

      <!-- مشاهده همه (چپ) -->
      <div class="flex items-center text-green-400 text-sm cursor-pointer">
        <span class="mr-1">&lt;</span>
        <span>مشاهده همه</span>
      </div>
    </div>

    <div class="w-full mt-4 px-4">
  <div class="flex items-start gap-4 overflow-x-auto">

    <!-- تیتر -->
    <div class="flex-shrink-0 w-28 mt-6 leading-tight">
      <p class="text-orange-500 text-sm font-extrabold">پیشنهاد</p>
      <p class="text-orange-500 text-sm font-extrabold">شگفت‌انگیز برای شما</p>
    </div>

    <!-- لیست محصولات اسکرول‌پذیر -->
    <div class="flex gap-3 overflow-x-auto scrollbar-none -mx-2 pr-2 pb-2" style="-webkit-overflow-scrolling: touch; direction: rtl;">

      <!-- آیتم محصول 1 -->
      <div class="w-28 min-w-[7rem] bg-[#1E1E1E] p-2 rounded-xl flex-shrink-0">
        <img src="../assets/img/image 2.png" alt="محصول" class="w-full h-20 object-cover rounded-md mb-1">
        <p class="text-white text-xs font-semibold">چیپس لیز</p>
        <p class="text-orange-400 text-[11px] mt-0.5">20,000 تومان</p>
      </div>

      <!-- آیتم محصول 2 -->
      <div class="w-28 min-w-[7rem] bg-[#1E1E1E] p-2 rounded-xl flex-shrink-0">
        <img src="../assets/img/image 2 (1).png" alt="محصول" class="w-full h-20 object-cover rounded-md mb-1">
        <p class="text-white text-xs font-semibold">نوشابه خانواده</p>
        <p class="text-orange-400 text-[11px] mt-0.5">25,000 تومان</p>
      </div>

      <!-- آیتم محصول 3 -->
      <div class="w-28 min-w-[7rem] bg-[#1E1E1E] p-2 rounded-xl flex-shrink-0">
        <img src="../assets/img/57cdffa416a872dbaa4ac09c328deae7dec40e01.png" alt="محصول" class="w-full h-20 object-cover rounded-md mb-1">
        <p class="text-white text-xs font-semibold">پنیر کاله</p>
        <p class="text-orange-400 text-[11px] mt-0.5">18,000 تومان</p>
      </div>
    </div>

  </div>
</div>



    <!-- نوار ناوبری -->
    <Nav/>


  </div>

</template>