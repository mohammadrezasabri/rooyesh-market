<script setup> 
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { auth } from '../lib/supabase.js';

const email = ref('')
const password = ref('')
const loading = ref(false)
const errorMessage = ref('')
const router = useRouter()

const checklogin = async () => {
  // پاک کردن خطاهای قبلی
  errorMessage.value = ''
  
  // اعتبارسنجی فیلدها
  if (email.value.trim() === '') {
    errorMessage.value = 'لطفاً ایمیل را وارد کنید'
    return
  }
  if (password.value.trim() === '') {
    errorMessage.value = 'لطفاً رمز عبور را وارد کنید'
    return
  }

  loading.value = true

  try {
    const { data, error } = await auth.signIn(email.value, password.value)

    if (error) {
      errorMessage.value = error.message
    } else {
      alert('با موفقیت وارد شدید')
      router.push('/home')
    }
  } catch (error) {
    errorMessage.value = 'خطا در ورود'
    console.error('Login error:', error)
  } finally {
    loading.value = false
  }
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
        <div class="text-5xl font-bold bg-gradient-to-l from-amber-200 via-amber  -300 to-green-700 text-transparent bg-clip-text leading-22">
          رویش مارکت
        </div>
        <div class="text-white tracking-[12px] font-thin text-xl -mt-2.5 opacity-45">
          rooyesh market
        </div>
      </div>
  
      <!-- متن راهنما -->
      <div class="w-full text-[#FFFFFF] text-lg mt-8 text-right ">
        :اطلاعات ورود خود را وارد کنید
      </div>

      <!-- نمایش خطا -->
      <div v-if="errorMessage" class="w-full text-red-400 text-sm text-center mb-4">
        {{ errorMessage }}
      </div>

      <!-- فیلدهای ورودی -->
      <div class=" relative top-4 w-70 space-y-4 ">
        <input v-model="email" type="email" placeholder="ایمیل"
          class="w-full py-2 h-14 text-white bg-transparent border border-gray-400 rounded-xl text-center placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500">
        <input v-model="password" type="password" placeholder="رمز عبور"
          class="w-full py-2 h-14 text-white bg-transparent border border-gray-400 rounded-xl text-center placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500">
      </div>
  
      <!-- دکمه‌ها -->
      <div class="absolute bottom-14 w-full max-w-sm text-amber-700 text-4xl z-10 space-y-4">
        <button @click="checklogin" :disabled="loading" 
          class="w-full min-h-14 scroll-py-4 bg-[#22FF00]/10 font-bold rounded-2xl opacity-60 disabled:opacity-30">
          <span class="align-super">{{ loading ? 'در حال ورود...' : 'ورود' }}</span>
        </button>
        
      </div>
  
    </div>

</template>