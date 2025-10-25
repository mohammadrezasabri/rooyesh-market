<script setup>

import Nav from '../components/nav.vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

import deser from "../assets/img/57cdffa416a872dbaa4ac09c328deae7dec40e01.png"

const categories = [
  { name: "دسر", img: deser },
  { name: "کیک", img: deser },
  { name: "میان وعده", img: deser },
  { name: "چیپس", img: deser },
  { name: "بستنی", img: deser },
  { name: "کافه", img: deser },
];




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

      
      <!-- عنوان فروشگاه -->
      <div class="  flex-1 items-center justify-center ">
        <h1 @click="gotohome"  class="text-orange-400 text-2xl font-bold text-center ">رویـش مارکت</h1>
        <p class="text-white tracking-[3px] sm:tracking-[2px] font-thin text-xs sm:text-sm opacity-45 text-center">rooyesh market</p>
      </div>

      <!-- آیکن منو -->

      <div @click="gotoprofile" class="w-10 h-10 sm:w-14 sm:h-14 rounded-full overflow-x-hidden border-2 border-white">
        <img src="../assets/img/۲۰۲۴۰۵۲۷_۰۱۲۵۴۰ 1.png" alt="profile" class="w-full h-full object-cover">
      </div>
    </div>
    
    <div class="w-full relative -top-6 sm:-top-5 lg:-top-10">
      <!-- جایگزینِ کل بلوک <img ...> قبلی شود -->
<div class="w-full relative -top-1 sm:-top-5 lg:-top-10">
  <div
    dir="rtl"
    class="mx-auto w-11/12 max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl h-40 md:h-48
           rounded-[28px] md:rounded-[36px] overflow-hidden relative shadow-2xl"
  >
    
   

    <!-- هاله‌های رنگی نرم (match با بک‌گراند اصلی) -->
    <div class="pointer-events-none absolute -left-12 -bottom-10 w-36 h-36 sm:w-40 sm:h-40 rounded-full bg-[#22FF00]/30 blur-2xl"></div>
    <div class="pointer-events-none absolute -right-12 -top-10 w-36 h-36 sm:w-40 sm:h-40 rounded-full bg-[#FF6600]/35 blur-2xl"></div>



    <!-- محتوا -->
    <div class="relative h-full flex flex-col items-center justify-center px-4 text-center select-none">
      <h2
        class="font-extrabold leading-tight tracking-tight
               bg-gradient-to-r from-emerald-200 via-rose-200 to-amber-200 bg-clip-text text-transparent
               text-3xl md:text-4xl"
               >
        هایپر مارکت رویش
      </h2>

      <p
        class="mt-1.5 md:mt-2 text-white/70 [text-transform:lowercase]
               tracking-[0.22em] sm:tracking-[0.25em] text-[11px] sm:text-[13px]"
      >
        souper market rooyesh
      </p>
    </div>



  </div>
</div>

    </div>

    <!-- دسته‌ها و مشاهده همه -->
    <div class="w-11/12 max-w-md  flex justify-center items-center justify-between relative -top-10 sm:-top-6 lg:-top-13">
      <!-- دسته‌ها (راست) -->
      

      <!-- مشاهده همه (وسط) -->
      <div class="flex items-center relative -top-3 text-green-400 text-xl cursor-pointer ">
        <span class="">&lt;</span>
        <span>مشاهده همه</span>
      </div>
    </div>

    <!-- بخش دسته‌بندی محصولات در صفحه Home -->
<div class="relative -top-18 lg:-top-16 grid grid-cols-3 gap-4 sm:gap-6">
  <!-- ردیف اول -->
  <div
    v-for="(item, index) in categories.slice(0, 3)"
    :key="index"
    class="w-22 sm:w-28 h-22 sm:h-28 bg-[#1E1E1E] hover:bg-[#22c55e]/20 transition-colors duration-300 rounded-2xl flex flex-col items-center justify-center text-white text-sm shadow-md ">
    <img :src="item.img" alt="" class="mt-2 w-15 h-15 mb-1 object-contain rounded-xl" />
    <span class="relative -top-1 sm:-top-1 font-medium">{{ item.name }}</span>
  </div>

  <!-- ردیف دوم -->
  <div
    v-for="(item, index) in categories.slice(3, 6)"
    :key="'row2-' + index"
    class="w-22 sm:w-28 h-22 sm:h-28 bg-[#1E1E1E] hover:bg-[#22c55e]/20 transition-colors duration-300 rounded-2xl flex flex-col items-center justify-center text-white text-sm shadow-md "
  >
    <img :src="item.img" alt="" class="mt-2 w-15 h-15 mb-1 object-contain rounded-xl" />
    <span class="relative sm:-top-1 font-medium">{{ item.name }}</span>
  </div>
</div>


    <div class="w-11/12 max-w-md flex flex-row-reverse items-center justify-between relative -top-22 lg:-top-19">
      <!-- دسته‌ها (راست) -->
      <div class="text-orange-500 font-bold text-lg">محصولات پیشنهادی</div>

      <!-- مشاهده همه (چپ) -->
      <div class="flex items-center text-green-400 text-sm cursor-pointer">
        <span class="mr-1">&lt;</span>
        <span>مشاهده همه</span>
      </div>
    </div>

    <div class="w-full max-w-md mx-auto px-4 relative -top-23  lg:-top-22">
  <div class="flex items-start gap-4 overflow-x-auto">

    <!-- تیتر -->
    <div class="flex-shrink-0 w-28 mt-6 leading-tight">
      <p class="text-orange-500 text-sm font-extrabold">پیشنهاد</p>
      <p class="text-orange-500 text-sm font-extrabold">شگفت‌انگیز برای شما</p>
    </div>

    <!-- لیست محصولات اسکرول‌پذیر -->
    <div class="flex gap-3  scrollbar-none -mx-2 p-2" style="-webkit-overflow-scrolling: touch; direction: rtl;">

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