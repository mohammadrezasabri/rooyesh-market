<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter()
const currentPassword = ref('')
const newPassword = ref('')
const confirmPassword = ref('')

const submitChange = () => {
  if (currentPassword.value.trim() === '') {
    alert('لطفاً رمز عبور فعلی را وارد کنید')
    return
  }
  if (newPassword.value.trim() === '') {
    alert('لطفاً رمز عبور جدید را وارد کنید')
    return
  }
  if (confirmPassword.value.trim() === '') {
    alert('لطفاً تکرار رمز عبور جدید را وارد کنید')
    return
  }
  if (newPassword.value !== confirmPassword.value) {
    alert('رمز عبور جدید و تکرار آن یکسان نیستند')
    return
  }

  alert('رمز عبور با موفقیت تغییر کرد')
  router.push('/profile')
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
      <div class="space-y-4">
        <input v-model="currentPassword" type="password" placeholder="رمز عبور فعلی"
          class="w-full py-2 h-14 text-white bg-transparent border border-gray-400 rounded-xl text-center placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500">
        <input v-model="newPassword" type="password" placeholder="رمز عبور جدید"
          class="w-full py-2 h-14 text-white bg-transparent border border-gray-400 rounded-xl text-center placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500">
        <input v-model="confirmPassword" type="password" placeholder="تکرار رمز عبور جدید"
          class="w-full py-2 h-14 text-white bg-transparent border border-gray-400 rounded-xl text-center placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500">
      </div>

      <div class="mt-6 text-amber-700 text-2xl">
        <button @click="submitChange" class="w-full min-h-12 bg-[#22FF00]/10 font-bold rounded-2xl opacity-60">
          تایید
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

