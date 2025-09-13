<script setup>
import Nav from '../components/nav.vue';
</script>



<template>
     <div class="h-screen flex flex-col items-center justify-center bg-[#242424]/100 relative z-0">
        <div class="absolute inset-0 -z-10">
            <div class="absolute -top-16 left-36 -right-6 w-96 h-96 bg-[#FF6600]/35 rounded-b-full rounded-l-full blur-3xl "></div>
            <div class="absolute top-80 -left-32 w-96 h-96 bg-[#22FF00]/15 rounded-b-full rounded-r-full blur-3xl"></div>
            <div class="absolute -bottom-44 -right-44 w-96 h-96 bg-[#676767]/35 rounded-l-full rounded-t-full blur-3xl"></div>
        </div>
        
        <!-- عنوان دسته‌ها -->
        <div class="text-center bg-gradient-to-l from-[#FCB07F] via-[#FFC184] to-[#FFD86C] text-transparent  bg-clip-text text-5xl  font-bold mt-7">
            دسته ها
        </div>
    
        <!-- شبکه دسته‌ها (4 ستون و 4 ردیف) -->
        <div class="mt-12 grid grid-cols-4 gap-4">
            <!-- آیتم‌های دسته -->
            <div class="w-20 h-24 bg-[#242424]/55 rounded-xl flex flex-col items-center justify-center text-white text-sm"><img src="../assets/img/rb_12580.png" alt="">دسر</div>
            <div class="w-20 h-24 bg-[#242424]/55 rounded-xl flex flex-col items-center justify-center text-white text-sm"><img src="../assets/img/rb_2150731924.png" alt="">کیک</div>
            <div class="w-20 h-24 bg-[#242424]/55 rounded-xl flex flex-col items-center justify-center text-white text-sm"><img src="../assets/img/rb_2151261349.png" alt="">میان‌وعده</div>
            <div class="w-20 h-24 bg-[#242424]/55 rounded-xl flex flex-col items-center justify-center text-white text-sm"><img src="../assets/img/rb_2151261349.png" alt=""> چیپس</div>
            <div class="w-20 h-24 bg-[#242424]/55 rounded-xl flex flex-col items-center justify-center text-white text-sm"><img src="../assets/img/rb_2151261349.png" alt="">دسر</div>
            <div class="w-20 h-24 bg-[#242424]/55 rounded-xl flex flex-col items-center justify-center text-white text-sm"><img src="../assets/img/rb_2151261349.png" alt="">کافه</div>
            <div class="w-20 h-24 bg-[#242424]/55 rounded-xl flex flex-col items-center justify-center text-white text-sm"><img src="../assets/img/rb_2151261349.png" alt="">بستنی</div>
            <div class="w-20 h-24 bg-[#242424]/55 rounded-xl flex flex-col items-center justify-center text-white text-sm"><img src="../assets/img/rb_2151261349.png" alt=""> </div>
            <div class="w-20 h-24 bg-[#242424]/55 rounded-xl flex flex-col items-center justify-center text-white text-sm"><img src="../assets/img/rb_2151261349.png" alt="">دسر</div>
            <div class="w-20 h-24 bg-[#242424]/55 rounded-xl flex flex-col items-center justify-center text-white text-sm"><img src="../assets/img/rb_2151261349.png" alt="">کیک</div>
            <div class="w-20 h-24 bg-[#242424]/55 rounded-xl flex flex-col items-center justify-center text-white text-sm"><img src="../assets/img/rb_2151261349.png" alt="">میان وعده</div>
            <div class="w-20 h-24 bg-[#242424]/55 rounded-xl flex flex-col items-center justify-center text-white text-sm"><img src="../assets/img/rb_2151261349.png" alt="">چیپس</div>
            <div class="w-20 h-24 bg-[#242424]/55 rounded-xl flex flex-col items-center justify-center text-white text-sm"><img src="../assets/img/rb_2151261349.png" alt="">دسر</div>
            <div class="w-20 h-24 bg-[#242424]/55 rounded-xl flex flex-col items-center justify-center text-white text-sm"><img src="../assets/img/rb_2151261349.png" alt="">کافه</div>
            <div class="w-20 h-24 bg-[#242424]/55 rounded-xl flex flex-col items-center justify-center text-white text-sm"><img src="../assets/img/rb_2151261349.png" alt="">بستنی</div>
            <div class="w-20 h-24 bg-[#242424]/55 rounded-xl flex flex-col items-center justify-center text-white text-sm"><img src="../assets/img/rb_2151261349.png" alt="">نسکافه</div>
        </div>
    
        <!-- دکمه برگشت -->
        <div class="mt-22 text-[#FF6600] ">
            <button class=" py-1.5 px-20 font-bold rounded-2xl text-xl bg-[#22FF00]/10 ">
                <span>برگشت</span>
            </button>
        </div>
        
        <Nav/>
        
    
    </div>
</template>