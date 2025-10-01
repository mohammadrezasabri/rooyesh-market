<script setup>

import Nav from '../components/nav.vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter()
const gotoprofile = () => {
  router.push('/profile')
}

const gotohome = () => {
  router.push('/home')
}




  </script>

<template>

  
 <div class="min-h-screen w-full flex flex-col items-center justify-between bg-[#242424] relative ">

    <!-- پس‌زمینه‌های رنگی -->
    <div
      class="absolute top-0 right-5 sm:left-16 md:left-24 lg:left-36 w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 bg-[#FF6600] rounded-b-full rounded-l-full blur-2xl sm:blur-3xl opacity-35 pointer-events-none">
    </div>
    <div
      class="absolute top-40 sm:top-48 md:top-56 lg:top-60 -left-16 sm:-left-24 md:-left-28 lg:-left-32 w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 bg-[#22FF00] rounded-b-full rounded-r-full blur-2xl sm:blur-3xl opacity-15 pointer-events-none">
    </div>
    <div
      class="absolute bottom-0 right-0 w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 bg-[#676767] rounded-l-full rounded-t-full blur-2xl sm:blur-3xl opacity-35 pointer-events-none">
    </div>
    <!-- هدر -->
    <div class="relative -top-1 lg:-top-4 w-11/12 max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl mt-4 sm:mt-6 lg:mt-8 flex items-center justify-between text-white">
      <!-- تصویر پروفایل -->

      <div   class=" rounded-sm cursor-pointer" >
        <img  src="../assets/img/Vector.png" alt="menu" class="w-7 h-7 sm:w-10 sm:h-10 ">
      </div>
      <!-- عنوان فروشگاه -->
      <div class="text-center flex-1 -ml-6 sm:-ml-8 md:-ml-10">
        <h1 @click="gotohome"  class="text-orange-400 text-2xl font-bold">رویـش مارکت</h1>
        <p class="text-white tracking-[1px] sm:tracking-[2px] font-thin text-xs sm:text-sm opacity-45 ">royesh markat</p>
      </div>

      <!-- آیکن منو -->

      <div @click="gotoprofile" class="w-10 h-10 sm:w-14 sm:h-14 rounded-full overflow-x-hidden border-2 border-white">
        <img src="../assets/img/۲۰۲۴۰۵۲۷_۰۱۲۵۴۰ 1.png" alt="profile" class="w-full h-full object-cover">
      </div>
    </div>

    <!-- نوار جستجو -->
    <!-- کادر جستجو زیر هدر -->
    <div class="w-11/12 max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl mt-4 sm:mt-6 relative -top-4 sm:-top-3 lg:-top-10">
      <!-- 🔍 آیکن ذره‌بین -->
      <span class="absolute inset-y-0 right-3 sm:right-4 flex items-center pointer-events-none">
        <svg class="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z"></path>
        </svg>
      </span>

      <!-- 🔤 کادر ورودی جستجو -->
      <input type="text" placeholder="...محصول مورد نظر را جستجو کنید"
        class="w-full bg-[#1E1E1E] text-white text-sm sm:text-base px-8 sm:px-10 py-2 sm:py-3 border border-gray-600 rounded-full h-10 sm:h-12 placeholder-gray-400 outline-none">
    </div>
    <div class="w-full relative -top-6 sm:-top-5 lg:-top-10">
      <img src="../assets/img/Untitled 1.png" alt="Hero banner" class="w-full  max-h-40 sm:max-h-40 md:max-h-48 object-contain ">
    </div>

    <!-- دسته‌ها و مشاهده همه -->
    <div class="w-11/12 max-w-md  flex flex-row-reverse items-center justify-between relative -top-10 sm:-top-6 lg:-top-13">
      <!-- دسته‌ها (راست) -->
      <div class="text-orange-500 font-bold text-lg">دسته ها</div>

      <!-- مشاهده همه (چپ) -->
      <div class="flex items-center text-green-400 text-sm cursor-pointer">
        <span class="mr-1">&lt;</span>
        <span>مشاهده همه</span>
      </div>
    </div>

    <div class="relative -top-12 lg:-top-16  grid grid-cols-4  gap-2">
      <div class="w-18 sm:w-20 h-20 sm:h-22 bg-[#1E1E1E] rounded-xl flex flex-col items-center justify-center text-white text-sm">
        <img src="../assets/img/rb_12580.png" alt="">
        <span class="relative sm:-top-2">دسر</span>
      </div>
      <div class="w-18 sm:w-20 h-20 sm:h-22 bg-[#1E1E1E] rounded-xl flex flex-col items-center justify-center text-white text-sm">
        <img src="../assets/img/rb_2150731924.png" alt="">
        <span class="relative sm:-top-2">کیک</span>
      </div>
      <div class="w-18 sm:w-20 h-20 sm:h-22 bg-[#1E1E1E] rounded-xl flex flex-col items-center justify-center text-white text-sm">
        <img src="../assets/img/rb_2151261349.png" alt="">
        <span class="relative sm:-top-2">میان وعده</span>
      </div>
      <div class="w-18 sm:w-20 h-20 sm:h-22 bg-[#1E1E1E] rounded-xl flex flex-col items-center justify-center text-white text-sm">
        <img src="../assets/img/rb_11570.png" alt=""> 
        <span class="relative sm:-top-2"> چیپس</span>
      </div>
      <div class="w-18 sm:w-20 h-20 sm:h-22 bg-[#1E1E1E] rounded-xl flex flex-col items-center justify-center text-white text-sm">
        <img src="../assets/img/rb_12580.png" alt="">
        <span class="relative sm:-top-2"> دسر</span>
      </div>
      <div class="w-18 sm:w-20 h-20 sm:h-22 bg-[#1E1E1E] rounded-xl flex flex-col items-center justify-center text-white text-sm">
        <img src="../assets/img/rb_2149108540.png" alt="">
        <span class="relative sm:-top-2"> کافه</span>
      </div>
      <div class="w-18 sm:w-20 h-20 sm:h-22 bg-[#1E1E1E] rounded-xl flex flex-col items-center justify-center text-white text-sm">
        <img src="../assets/img/rb_12580.png" alt=""> 
        <span class="relative sm:-top-2"> بستنی</span>
      </div>
      <div class="w-18 sm:w-20 h-20 sm:h-22 bg-[#1E1E1E] rounded-xl flex flex-col items-center justify-center text-white text-sm">
        <img src="../assets/img/rb_2149108540.png" alt=""> 
        <span class="relative sm:-top-2"> کافه</span>
      </div>
    </div>

    <div class="w-11/12 max-w-md flex flex-row-reverse items-center justify-between relative -top-13 lg:-top-19">
      <!-- دسته‌ها (راست) -->
      <div class="text-orange-500 font-bold text-lg">محصولات پیشنهادی</div>

      <!-- مشاهده همه (چپ) -->
      <div class="flex items-center text-green-400 text-sm cursor-pointer">
        <span class="mr-1">&lt;</span>
        <span>مشاهده همه</span>
      </div>
    </div>

    <div class="w-full max-w-md mx-auto px-4 relative -top-18 lg:-top-22">
  <div class="flex items-start gap-4 overflow-x-auto">

    <!-- تیتر -->
    <div class="flex-shrink-0 w-28 mt-6 leading-tight">
      <p class="text-orange-500 text-sm font-extrabold">پیشنهاد</p>
      <p class="text-orange-500 text-sm font-extrabold">شگفت‌انگیز برای شما</p>
    </div>

    <!-- لیست محصولات اسکرول‌پذیر -->
    <div class="flex gap-3  scrollbar-none -mx-2 " style="-webkit-overflow-scrolling: touch; direction: rtl;">

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