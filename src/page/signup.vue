<script setup> 
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const username = ref('')
const password = ref('')
const confirmPassword = ref('')
const router = useRouter()

const signup = async () => {
  // اعتبارسنجی فیلدها
  if (username.value.trim() === '') {
    alert('لطفاً نام کاربری را وارد کنید')
    return
  }
  if (password.value.trim() === '') {
    alert('لطفاً رمز عبور را وارد کنید')
    return
  }
  if (confirmPassword.value.trim() === '') {
    alert('لطفاً تایید رمز عبور را وارد کنید')
    return
  }
  if (password.value !== confirmPassword.value) {
    alert('رمز عبور و تایید رمز عبور مطابقت ندارند')
    return
  }

  try {
    // ارسال داده‌ها به API
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: username.value,
        password: password.value,
        title: 'User Registration',
        body: 'New user account created'
      })
    })

    if (response.ok) {
      alert('حساب کاربری با موفقیت ایجاد شد')
      router.push('/home')
    } else {
      alert('خطا در ایجاد حساب کاربری')
    }
  } catch (error) {
    console.error('Error:', error)
    alert('خطا در ارتباط با سرور')
  }
}

const goToLogin = () => {
  router.push('/login')
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
      <div class="text-5xl font-bold bg-gradient-to-l from-amber-200 via-amber-300 to-green-700 text-transparent bg-clip-text leading-22">
        رویش مارکت
      </div>
      <div class="text-white tracking-[12px] font-thin text-xl -mt-2.5 opacity-45">
        rooyesh market
      </div>
    </div>

    <!-- متن راهنما -->
    <div class="w-full text-[#FFFFFF] text-lg mt-8 text-right">
      :اطلاعات حساب کاربری جدید را وارد کنید
    </div>

    <!-- فیلدهای ورودی -->
    <div class="relative top-4 w-70 space-y-4">
      <input v-model="username" type="text" placeholder="نام کاربری"
        class="w-full py-2 h-14 text-white bg-transparent border border-gray-400 rounded-xl text-center placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500">
      <input v-model="password" type="password" placeholder="رمز عبور"
        class="w-full py-2 h-14 text-white bg-transparent border border-gray-400 rounded-xl text-center placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500">
      <input v-model="confirmPassword" type="password" placeholder="تایید رمز عبور"
        class="w-full py-2 h-14 text-white bg-transparent border border-gray-400 rounded-xl text-center placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500">
    </div>

    <!-- دکمه‌ها -->
    <div class="absolute bottom-14 w-full max-w-sm text-amber-700 text-4xl z-10 space-y-4">
      <button @click="signup" class="w-full min-h-14 scroll-py-4 bg-[#22FF00]/10 font-bold rounded-2xl opacity-60">
        <span class="align-super">ایجاد حساب کاربری</span>
      </button>
      
      <button @click="goToLogin" class="w-full min-h-12 text-white text-lg bg-transparent border border-gray-400 rounded-xl hover:bg-gray-800/20 transition-colors">
        <span>بازگشت به ورود</span>
      </button>
    </div>

</div>
</template>
