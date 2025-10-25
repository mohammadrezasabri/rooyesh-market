<script setup>
import Nav from '../components/nav.vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '../stores/auth';
import UiButton from '../ui/Button.vue'


const router = useRouter()
const authStore = useAuthStore()

const goback = ()=>{
  router.push('/home')
}


const goOrders = () =>{
  router.push('/orders')
}

const logout = async () => {

  const{success , error} = await authStore.signOut()
  
  if (success){
    router.push('/login')
  }else{
    console.error('خطا در خروج',error)
  }

}

  
  


const goChangePassword = ()=>{
  router.push('/change-password')
}
</script>


<template>

<div class="min-h-screen w-full flex flex-col items-center justify-between bg-[#242424] relative ">

    <!-- پس‌زمینه‌های رنگی -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div class="absolute -top-16 left-36 -right-6 w-96 h-96 bg-[#FF6600] rounded-b-full rounded-l-full blur-3xl opacity-35"></div>
        <div class="absolute top-80 -left-32 w-96 h-96 bg-[#22FF00] rounded-b-full rounded-r-full blur-3xl opacity-15"></div>
        <div class="absolute -bottom-44 -right-44 w-96 h-96 bg-[#676767] rounded-l-full rounded-t-full blur-3xl opacity-35"></div>
      </div>

    <!-- عکس کاربر -->
    <div class="mt-10 shrink-0">
      <img src="../assets/img/Group 20.png" alt="" class="max-h-60 md:max-h-64 object-contain">
    </div>

    <!-- اطلاعات کاربر -->
    <div class="relative -top-10 text-[#FFFFFF] font-bold text-xl text-center md:text-2xl space-y-1">
      <p>سید محمد بنی لوحی</p>
      <p dir="rtl" class="text-sm md:text-base">نام کاربری: smb.gd</p>
    </div>

    <!-- دکمه‌ها -->
    <!-- گروه دکمه‌های وسط -->
    <div class="relative -top-15 flex flex-col items-center space-y-4 w-11/12">
  <UiButton variant="secondary" size="lg" block class="max-w-sm" @click="goOrders">
    سفارش‌ها
  </UiButton>

  <UiButton variant="secondary" size="lg" block class="max-w-sm" @click="goChangePassword">
    تغییر رمز عبور
  </UiButton>

  <UiButton variant="primary" size="lg" block class="max-w-sm" @click="logout">
    خروج از حساب کاربری
  </UiButton>
</div>

<div class="relative -top-20 shrink-0">
  <UiButton variant="soft" size="lg" block class="max-w-sm" @click="goback">
    برگشت
  </UiButton>
</div>




    <!-- نوار ناوبری -->
    <Nav/>

  </div>

</template>