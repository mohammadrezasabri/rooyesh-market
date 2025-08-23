<script setup>
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
import Cookies from "js-cookie";

const router = useRouter()

onMounted(() => {
  setTimeout(() => {
    const cookies = Cookies.get("rooyesh-market");
    if (cookies === undefined) {
      // یعنی کوکی وجود نداره = کاربر لاگین نکرده
      router.push("/index");
    } else {
      // یعنی کاربر قبلا لاگین کرده
      router.push("/home");
    }
  }, 5000); // بعد ۵ ثانیه
});

defineProps({
  msg: String,
  texthome: String
});
</script>



<template>
    <div class="text-center ">
            <div class="text-4xl font-bold bg-linear-to-l from-amber-600 via-lime-800 to-green-700 text-transparent bg-clip-text opacity-50">{{ texthome }} </div>
            <div class="text-white text-2xl tracking-[0.10em] mt-2 text-center opacity-45">{{msg}}</div>       
            <div class="absolute top-80 -left-32  w-96 h-96 bg-[#22FF00] rounded-b-full  rounded-r-full blur-3xl  opacity-15"></div>     
        </div>
</template>