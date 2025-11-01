<script setup>
import Nav from '../components/nav.vue';
import { useRouter } from 'vue-router';
import producthome from '../components/producthome.vue';
import bannerhome from '../components/bannerhome.vue';
import backdrop from '../components/backdrop.vue';
import templateapp from '../components/templateapp.vue';
import suggestionProduct from '../components/suggestionProduct.vue';

const router = useRouter();

const gotoprofile = () => {
  router.push('/profile');
};

const gotohome = () => {
  router.push('/home');
};

const gotoproducts = () => {
  router.push('/allproducts');
};
</script>

<template>
  <!-- نکته: overflow-x-hidden برای جلوگیری از لغزش افقی؛ svh برای ارتفاع دقیق موبایل -->
  <templateapp>
    <!-- پس‌زمینه‌های رنگی (در یک رَپر با overflow-hidden تا بلِر بیرون نزند) -->
    <backdrop/>

    <!-- محتوای صفحه با فاصله‌های مثبت (بدون شیفت‌های منفی) -->
    <div class="relative z-10 w-full flex flex-col items-center gap-y-6 sm:gap-y-8">
      <!-- هدر -->
      <div
        class="w-11/12 max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl mt-4 sm:mt-6 lg:mt-8 flex items-center justify-between text-white"
      >
        <div class="flex-1 items-center justify-center">
          <h1 @click="gotohome" class="text-orange-400 text-2xl font-bold text-center">
            رویـش مارکت
          </h1>
          <p
            class="text-white tracking-[3px] sm:tracking-[2px] font-thin text-xs sm:text-sm opacity-45 text-center"
          >
            rooyesh market
          </p>
        </div>
        <div
          @click="gotoprofile"
          class="w-10 h-10 sm:w-14 sm:h-14 rounded-full overflow-hidden border-2 border-white"
        >
          <img
            src="../assets/img/۲۰۲۴۰۵۲۷_۰۱۲۵۴۰ 1.png"
            alt="profile"
            class="w-full h-full object-cover"
          />
        </div>
      </div>

      <!-- بنر (یک شیفت حذف شد؛ فقط یک رپر ساده) -->
      <bannerhome/>

      <!-- دسته‌ها و مشاهده همه -->
      <div class="w-11/12 max-w-md flex items-center justify-center -mt-4">
        <div class="flex items-center text-green-400 text-xl cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                </svg>

          <span @click="gotoproducts">مشاهده همه</span>
        </div>
      </div>

      <!-- بخش دسته‌بندی محصولات -->
      <producthome/>

      <!-- محصولات پیشنهادی -->
      <suggestionProduct/>

      <!-- نوار ناوبری -->
      <Nav />
    </div>
  </templateapp>
</template>
