<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const gotoprofile = () => {
  router.push('/profile')
}

const gotohome = () => {
  router.push('/home')
}

const gotocategory = () => {
  router.push('/category')
}
</script>


<template>
<div class="w-11/12 max-w-md sm:max-w-lg lg:max-w-2xl h-16 lg:h-20 grid grid-cols-4 gap-4 sm:gap-6 bg-[#1E1E1E] px-4 py-1 rounded-3xl text-white mb-2 shrink-0 fixed bottom-0 left-1/2 transform -translate-x-1/2 transition-transform duration-300 z-50">
      <div @click="gotoprofile" class="flex items-center justify-center"><img src="../assets/img/image 5.png" class="w-8 sm:w-10  h-8 sm:h-10 " alt=""></div>
      <div @click="gotocategory" class="flex items-center justify-center"><img src="../assets/img/image 11.png" class="w-8 sm:w-10  h-8 sm:h-10" alt=""></div>
      <div  class="flex items-center justify-center"><img src="../assets/img/image 7.png" class="w-8 sm:w-10  h-8 sm:h-10" alt=""></div>
      <div @click="gotohome" class="flex items-center justify-center"><img src="../assets/img/image home.png" class="w-8 sm:w-10  h-8 sm:h-10" alt=""></div>
    </div>
</template>