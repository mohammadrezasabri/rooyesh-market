<script setup>
const props = defineProps({
    count: {
        type: Number,
        default: 6
    }
})
</script>


<template>
    <div class="animate-pulse grid grid-cols-3 gap-4 sm:gap-6 -mt-5">
        <div 
        v-for="n in count"
        :key="n"
        class="w-25 sm:w-28 h-26 sm:h-28 bg-[#1E1E1E] rounded-2xl flex flex-col items-center justify-center shadow-md"
        >
    <div class="bg-gray-700 w-14 h-14 mb-2 rounded-xl"></div>
    <div class="bg-gray-600 w-16 h-3 rounded-md"></div>
        </div>
    </div>
</template>