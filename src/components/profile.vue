<script setup>

</script>


<template>

<div class="min-h-screen w-full flex flex-col items-center justify-between bg-[#242424] relative overflow-hidden">

    <!-- پس‌زمینه‌های رنگی -->
    <div
      class="absolute top-0 left-1/2 transform -translate-x-1/2 w-64 h-64 md:w-80 md:h-80 bg-[#FF6600] rounded-b-full rounded-l-full blur-3xl opacity-35 pointer-events-none">
    </div>
    <div
      class="absolute top-1/2 -left-20 w-64 h-64 md:w-80 md:h-80 bg-[#22FF00] rounded-b-full rounded-r-full blur-3xl opacity-15 pointer-events-none">
    </div>
    <div
      class="absolute bottom-0 right-0 w-64 h-64 md:w-80 md:h-80 bg-[#676767] rounded-l-full rounded-t-full blur-3xl opacity-35 pointer-events-none">
    </div>

    <!-- عکس کاربر -->
    <div class="mt-10 shrink-0">
      <img src="../assets/img/Group 20.png" alt="" class="max-h-40 md:max-h-64 object-contain">
    </div>

    <!-- اطلاعات کاربر -->
    <div class="w-full px-6 text-[#FFFFFF] font-bold text-xl text-center md:text-2xl space-y-1">
      <p>سید محمد بنی لوحی</p>
      <p class="text-sm md:text-base">نام کاربری: smb.gd</p>
    </div>

    <!-- دکمه‌ها -->
    <div class="flex flex-col items-center space-y-4 w-full px-6 mt-6">
      <button class="w-full max-w-sm h-10 border border-[#FFFFFF33] rounded-xl text-[#FF6600] font-bold">
        سفارش ها
      </button>

      <button class="w-full max-w-sm h-10 border border-[#FFFFFF33] rounded-xl text-[#FF6600] font-bold">
        تغییر رمز عبور
      </button>

      <button class="w-full max-w-sm h-10 border border-[#FFFFFF33] rounded-xl text-[#FF6600] font-bold">
        کد های تخفیف
      </button>

      <button class="w-full max-w-sm h-10 border border-[#FFFFFF33] rounded-xl text-[#FF6600] font-bold">
        خروج از حساب کاربری
      </button>
    </div>

    <!-- دکمه برگشت -->
    <div class="mt-6 shrink-0 text-[#FF6600]">
      <button class="py-2 px-10 md:px-20 font-bold rounded-2xl text-lg md:text-xl bg-[#22FF00]/10">
        <span>برگشت</span>
      </button>
    </div>

    <!-- نوار ناوبری -->
    <div class="w-full max-w-md h-16 grid grid-cols-4 gap-4 bg-[#1E1E1E] p-4 rounded-3xl text-white mb-10 mt-6 shrink-0">
      <div class="flex items-center justify-center"><img src="../assets/img/image 3.png " class="w-6 h-6 md:w-8 md:h-8" alt=""></div>
      <div class="flex items-center justify-center"><img src="../assets/img/image 7.png " class="w-6 h-6 md:w-8 md:h-8" alt=""></div>
      <div class="flex items-center justify-center"><img src="../assets/img/image 11.png " class="w-6 h-6 md:w-8 md:h-8" alt=""></div>
      <div class="flex items-center justify-center"><img src="../assets/img/image.png" class="w-6 h-6 md:w-8 md:h-8" alt=""></div>
    </div>

  </div>

</template>