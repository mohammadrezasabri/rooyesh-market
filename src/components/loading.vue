<script setup>
defineProps({
msg:String
})
</script>


<template>
    <div class="text-center">
            <div class="text-4xl font-bold bg-linear-to-l from-amber-600 via-lime-800 to-green-700 text-transparent bg-clip-text opacity-50">رویش مارکت</div>
            <div class="text-white text-2xl tracking-[0.10em] mt-2 text-center opacity-45">{{msg}}</div>       
            <div class="absolute top-80 -left-32  w-96 h-96 bg-[#22FF00] rounded-b-full  rounded-r-full blur-3xl  opacity-15"></div>     
        </div>
</template>