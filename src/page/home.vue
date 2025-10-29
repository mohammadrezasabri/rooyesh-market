<script setup>
import Nav from '../components/nav.vue';
import { useRouter } from 'vue-router';
import producthome from '../components/producthome.vue';
import bannerhome from '../components/bannerhome.vue';
import backdrop from '../components/backdrop.vue';
import templateapp from '../components/templateapp.vue';

const router = useRouter();

const gotoprofile = () => {
  router.push('/profile');
};

const gotohome = () => {
  router.push('/home');
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
          <span>&lt;</span>
          <span>مشاهده همه</span>
        </div>
      </div>

      <!-- بخش دسته‌بندی محصولات -->
      <producthome/>

      <!-- محصولات پیشنهادی -->
      <div class="w-11/12 max-w-md flex flex-row-reverse items-center justify-between">
        <div class="text-orange-500 font-bold text-lg">محصولات پیشنهادی</div>
        <div class="flex items-center text-green-400 text-sm cursor-pointer">
          <span class="mr-1">&lt;</span>
          <span>مشاهده همه</span>
        </div>
      </div>

      <div dir="rtl" class="w-full max-w-md mx-auto px-4 relative -top-6">
        <div class="flex items-start gap-4 overflow-x-auto">
          <!-- تیتر -->
          <div class="flex-shrink-0 w-28 mt-6 leading-tight">
            <p class="text-orange-500 text-sm font-extrabold">پیشنهاد</p>
            <p class="text-orange-500 text-sm font-extrabold">شگفت‌انگیز برای شما</p>
          </div>

          <!-- لیست محصولات اسکرول‌پذیر -->
          <div
            class="flex gap-3 scrollba r-none -mx-2 p-2"
            style="-webkit-overflow-scrolling: touch; direction: rtl"
          >
            <div class="w-28 min-w-[7rem] bg-[#1E1E1E] p-2 rounded-xl flex-shrink-0">
              <img
                src="../assets/img/image 2.png"
                alt="محصول"
                class="w-full h-20 object-cover rounded-md mb-1"
              />
              <p class="text-white text-xs font-semibold">چیپس لیز</p>
              <p class="text-orange-400 text-[11px] mt-0.5">20,000 تومان</p>
            </div>
            <div class="w-28 min-w-[7rem] bg-[#1E1E1E] p-2 rounded-xl flex-shrink-0">
              <img
                src="../assets/img/image 2 (1).png"
                alt="محصول"
                class="w-full h-20 object-cover rounded-md mb-1"
              />
              <p class="text-white text-xs font-semibold">نوشابه خانواده</p>
              <p class="text-orange-400 text-[11px] mt-0.5">25,000 تومان</p>
            </div>
            <div class="w-28 min-w-[7rem] bg-[#1E1E1E] p-2 rounded-xl flex-shrink-0">
              <img
                src="../assets/img/57cdffa416a872dbaa4ac09c328deae7dec40e01.png"
                alt="محصول"
                class="w-full h-20 object-cover rounded-md mb-1"
              />
              <p class="text-white text-xs font-semibold">پنیر کاله</p>
              <p class="text-orange-400 text-[11px] mt-0.5">18,000 تومان</p>
            </div>
          </div>
        </div>
      </div>

      <!-- نوار ناوبری -->
      <Nav />
    </div>
  </templateapp>
</template>
