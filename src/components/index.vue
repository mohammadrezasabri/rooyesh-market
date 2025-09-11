<template>
  <div class="bg-black flex items-center justify-center min-h-screen overflow-hidden">
    
    <!-- کانتینر شبیه موبایل -->
    <div class="relative w-full max-w-md h-screen bg-[#242424] overflow-hidden">

      <!-- بک‌گراندهای رنگی -->
      <div class="absolute -top-16 left-36 -right-6 w-96 h-96 bg-[#FF6600] rounded-b-full rounded-l-full blur-3xl opacity-35"></div>
      <div class="absolute top-80 -left-32 w-96 h-96 bg-[#22FF00] rounded-b-full rounded-r-full blur-3xl opacity-15"></div>
      <div class="absolute -bottom-44 -right-44 w-96 h-96 bg-[#676767] rounded-l-full rounded-t-full blur-3xl opacity-35"></div>

      <!-- متن اصلی -->
      <div class="text-center -mt-24">
        <div class="text-5xl font-bold bg-gradient-to-l from-amber-200 via-amber-300 to-green-700 text-transparent bg-clip-text leading-[3.5rem]">
          رویش مارکت
        </div>
        <div class="text-white tracking-[10px] font-thin text-lg -mt-2.5 opacity-45">
          rooyesh market
        </div>
        <div class="text-white text-5xl mt-0 opacity-70">
          خوش اومدی
        </div>
      </div>

      <!-- دکمه پایین -->
      <div class="absolute bottom-14 left-0 right-0 px-6">
        <button @click="gotologin" class="w-full py-3 bg-[#22FF00]/10 font-bold rounded-xl text-[#FF6600] text-2xl">
          <span class="opacity-60">بـــزن بــریـم</span>
        </button>
      </div>

    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

// استفاده از Vue Router برای هدایت
const router = useRouter()

function gotologin() {
  router.push('/login') // مسیر صفحه لاگین
}
</script>


