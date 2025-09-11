<script setup> 
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import Cookies from 'js-cookie';

const phone = ref('')
const router = useRouter()

const checklogin=()=>{
  if(phone.value.trim()=== ''){
    alert('لطفاً شماره تلفن خود را وارد کنید')
    return
  }

  Cookies.set('rooyesh-market', phone.value,{expires: 7})
  alert('با موفقیت ثبت نام شدید')

router.push('/home')
  
}




</script>

<template>

<div class="h-screen overflow-hidden flex flex-col items-center justify-center bg-[#242424] relative">
  
      <!-- لایه دایره‌های تزئینی -->
      <div class="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div class="absolute -top-16 left-36 -right-6 w-96 h-96 bg-[#FF6600] rounded-b-full rounded-l-full blur-3xl opacity-35"></div>
        <div class="absolute top-80 -left-32 w-96 h-96 bg-[#22FF00] rounded-b-full rounded-r-full blur-3xl opacity-15"></div>
        <div class="absolute -bottom-44 -right-44 w-96 h-96 bg-[#676767] rounded-l-full rounded-t-full blur-3xl opacity-35"></div>
      </div>
  
      <!-- محتوای صفحه -->
      <div class="text-center -mt-60 z-10">
        <div class="text-6xl font-bold bg-gradient-to-l from-amber-200 via-amber-300 to-green-700 text-transparent bg-clip-text leading-24">
          رویش مارکت
        </div>
        <div class="text-white tracking-[13px] font-thin text-xl -mt-2.5 opacity-45">
          rooyesh market
        </div>
      </div>
  
      <!-- متن راهنما -->
      <div class="w-full text-[#FFFFFF] text-lg mt-8 text-right pr-6 z-10">
        :شماره‌ی خود را وارد کنید
      </div>
  
      <!-- فیلد ورودی -->
      <div class="mt-2 w-full max-w-sm md:max-w-md lg:max-w-lg z-10">
        <input v-model="phone" type="text" placeholder="۰۹۱۳ *** ۶۱۴"
          class="w-full py-2 h-14 text-white bg-transparent border border-gray-400 rounded-xl text-center placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500">
      </div>
  
      <!-- دکمه -->
      <div class="absolute bottom-14 w-full max-w-sm text-amber-700 text-4xl z-10">
        <button @click="checklogin" class="w-full min-h-14 scroll-py-4  bg-[#22FF00]/10 font-bold rounded-2xl opacity-60">
          <span class="align-super">بـــزن بــریـم</span>
        </button>
      </div>
  
    </div>

</template>