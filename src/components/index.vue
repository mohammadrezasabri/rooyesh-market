<script setup>

import { useRouter } from 'vue-router';

const router = useRouter();

const gotologin = () =>{
  router.push('/login')
}

</script>



<template>
    <div class="h-full w-full flex flex-col items-center justify-center bg-[#242424] relative z-0">
    
    <!-- بکگراند های blur -->
    <div class="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
      <div class="absolute -top-16 left-36 -right-6 w-96 h-96 bg-[#FF6600]/35 rounded-b-full rounded-l-full blur-3xl"></div>
      <div class="absolute top-80 -left-32 w-96 h-96 bg-[#22FF00]/15 rounded-b-full rounded-r-full blur-3xl"></div>
      <div class="absolute -bottom-44 -right-44 w-96 h-96 bg-[#676767]/35 rounded-l-full rounded-t-full blur-3xl"></div>
    </div>

    <!-- متن ها -->
    <div class="text-center -mt-24">
      <div class="text-6xl font-bold bg-gradient-to-l from-amber-200 via-amber-300 to-green-700 text-transparent bg-clip-text leading-24">
        رویش مارکت
      </div>
      <div class="text-white tracking-[13px] font-thin text-xl -mt-2.5 opacity-45">
        rooyesh market
      </div>
      <div class="text-white text-6xl mt-0 opacity-70">
        خوش اومدی
      </div>
    </div>

    <!-- دکمه -->
    <div class="absolute bottom-14 w-96 text-[#FF6600] text-4xl">
      <button @click="gotologin" class="w-full py-3 bg-[#22FF00]/10 font-bold rounded-xl">
        <span class="align-super opacity-60">بـــزن بــریـم</span>
      </button>
    </div>
  </div>
</template>