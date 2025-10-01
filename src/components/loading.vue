<template>
  <!-- دیگه چیزی نشون نمی‌ده -->
  <div style="display: none;"></div>
</template>

<script setup>
import { onMounted } from "vue";
import Cookies from "js-cookie";
import { useRouter } from "vue-router";

const router = useRouter();

// onMounted(() => {
//   const cookieValue = Cookies.get("rooyesh-market");

//   if (cookieValue) {
//     // قبلا لاگین کرده → بفرست به home
//     router.push("/home");
//   } else {
//     // کوکی وجود نداره → بفرست به login
//     router.push("/login");
//   }
// });
</script>
