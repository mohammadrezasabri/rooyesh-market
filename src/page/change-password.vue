<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { auth } from '../lib/supabase.js';

const router = useRouter()
const currentPassword = ref('')
const newPassword = ref('')
const confirmPassword = ref('')
const loading = ref(false)
const errorMessage = ref('')
const successMessage = ref('')

const submitChange = async () => {
  // پاک کردن پیام‌های قبلی
  errorMessage.value = ''
  successMessage.value = ''
  
  // اعتبارسنجی فیلدها
  if (currentPassword.value.trim() === '') {
    errorMessage.value = 'لطفاً رمز عبور فعلی را وارد کنید'
    return
  }
  if (newPassword.value.trim() === '') {
    errorMessage.value = 'لطفاً رمز عبور جدید را وارد کنید'
    return
  }
  if (confirmPassword.value.trim() === '') {
    errorMessage.value = 'لطفاً تکرار رمز عبور جدید را وارد کنید'
    return
  }
  if (newPassword.value !== confirmPassword.value) {
    errorMessage.value = 'رمز عبور جدید و تکرار آن یکسان نیستند'
    return
  }
  if (newPassword.value.length < 6) {
    errorMessage.value = 'رمز عبور جدید باید حداقل 6 کاراکتر باشد'
    return
  }

  loading.value = true

  try {
    const { data, error } = await auth.updatePassword(newPassword.value)

    if (error) {
      errorMessage.value = error.message
    } else {
      successMessage.value = 'رمز عبور با موفقیت تغییر کرد'
      setTimeout(() => {
        router.push('/profile')
      }, 2000)
    }
  } catch (error) {
    errorMessage.value = 'خطا در تغییر رمز عبور'
    console.error('Password change error:', error)
  } finally {
    loading.value = false
  }
}

const goBack = () => {
  router.push('/profile')
}
</script>

<template>
  <div class="min-h-screen w-full flex flex-col items-center justify-between bg-[#242424] relative">
    <!-- پس‌زمینه‌های رنگی (هماهنگ با صفحات دیگر) -->
    <div
      class="absolute top-0 right-5 sm:left-16 md:left-24 lg:left-36 w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 bg-[#FF6600] rounded-b-full rounded-l-full blur-2xl sm:blur-3xl opacity-35 pointer-events-none">
    </div>
    <div
      class="absolute top-40 sm:top-48 md:top-56 lg:top-60 -left-16 sm:-left-24 md:-left-28 lg:-left-32 w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 bg-[#22FF00] rounded-b-full rounded-r-full blur-2xl sm:blur-3xl opacity-15 pointer-events-none">
    </div>
    <div
      class="absolute bottom-0 right-0 w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 bg-[#676767] rounded-l-full rounded-t-full blur-2xl sm:blur-3xl opacity-35 pointer-events-none">
    </div>

    <!-- عنوان -->
    <div class="relative -top-1 lg:-top-4 w-11/12 max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl mt-6 flex items-center justify-center text-white">
      <h1 class="text-orange-400 text-2xl font-bold text-center">تغییر رمز عبور</h1>
    </div>

    <!-- فرم تغییر رمز -->
    <div class="w-11/12 max-w-sm mt-6 z-10">
      <!-- نمایش خطا -->
      <div v-if="errorMessage" class="w-full text-red-400 text-sm text-center mb-4">
        {{ errorMessage }}
      </div>

      <!-- نمایش موفقیت -->
      <div v-if="successMessage" class="w-full text-green-400 text-sm text-center mb-4">
        {{ successMessage }}
      </div>

      <div class="space-y-4">
        <input v-model="currentPassword" type="password" placeholder="رمز عبور فعلی"
          class="w-full py-2 h-14 text-white bg-transparent border border-gray-400 rounded-xl text-center placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500">
        <input v-model="newPassword" type="password" placeholder="رمز عبور جدید"
          class="w-full py-2 h-14 text-white bg-transparent border border-gray-400 rounded-xl text-center placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500">
        <input v-model="confirmPassword" type="password" placeholder="تکرار رمز عبور جدید"
          class="w-full py-2 h-14 text-white bg-transparent border border-gray-400 rounded-xl text-center placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500">
      </div>

      <div class="mt-6 text-amber-700 text-2xl">
        <button @click="submitChange" :disabled="loading" 
          class="w-full min-h-12 bg-[#22FF00]/10 font-bold rounded-2xl opacity-60 disabled:opacity-30">
          {{ loading ? 'در حال تغییر...' : 'تایید' }}
        </button>
      </div>

      <div class="mt-3 text-amber-700 text-lg">
        <button @click="goBack" class="w-full min-h-10 bg-[#22FF00]/10 font-bold rounded-2xl opacity-60">
          بازگشت
        </button>
      </div>
    </div>

    <!-- فاصله پایانی برای هم‌تراز با Nav در صفحات دیگر -->
    <div class="h-20"></div>
  </div>
</template>

