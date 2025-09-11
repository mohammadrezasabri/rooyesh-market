<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const gotoprofile = () => {
  router.push('/profile')
}

const gotohome = () => {
  router.push('/home')
}
</script>


<template>
<div class="w-11/12 max-w-md h-16 grid grid-cols-4 gap-4 bg-[#1E1E1E] px-4 py-1 rounded-3xl text-white mb-2 shrink-0 fixed bottom-0 left-1/2 transform -translate-x-1/2 transition-transform duration-300 z-50">
      <div @click="gotoprofile" class="flex items-center justify-center"><img src="../assets/img/image 5.png" class="w-8 h-8" alt=""></div>
      <div  class="flex items-center justify-center"><img src="../assets/img/image 11.png" class="w-8 h-8" alt=""></div>
      <div  class="flex items-center justify-center"><img src="../assets/img/image 7.png" class="w-8 h-8" alt=""></div>
      <div @click="gotohome" class="flex items-center justify-center"><img src="../assets/img/image home.png" class="w-8 h-8" alt=""></div>
    </div>
</template>