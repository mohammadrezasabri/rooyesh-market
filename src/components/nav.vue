<script setup>
import { computed } from "vue";
import { useRouter, useRoute } from "vue-router";

const router = useRouter();
const route = useRoute();

const gotoprofile = () => {
  router.push("/profile");
};

const gotohome = () => {
  router.push("/home");
};

// Import icon assets
import profileActive from "../assets/img/image.png";
import profileInactive from "../assets/img/image 5.png";
import homeActive from "../assets/img/image home.png";
import homeInactive from "../assets/img/image 3.png";

// Computed properties for active states
const isProfileActive = computed(() => route.path === "/profile");
const isHomeActive = computed(() => route.path === "/home");

</script>

<template>
  <div
    class="w-11/12 max-w-md sm:max-w-lg lg:max-w-lg h-13 lg:h-17 grid grid-cols-3 gap-4 sm:gap-6 bg-[#1E1E1E] px-4 py-1 rounded-3xl text-white mb-2 shrink-0 fixed bottom-0 left-1/2 transform -translate-x-1/2 transition-transform duration-300 z-50"
  >
    <div @click="gotoprofile" class="flex items-center justify-center">
      <img
        :src="isProfileActive ? profileActive : profileInactive"
        class="w-8 sm:w-10 h-8 sm:h-10"
        alt=""
      />
    </div>

    <div class="flex items-center justify-center">
      <img
        src="../assets/img/image 7.png"
        class="w-8 sm:w-10 h-8 sm:h-10"
        alt=""
      />
    </div>
    <div @click="gotohome" class="flex items-center justify-center">
      <img
        :src="isHomeActive ? homeActive : homeInactive"
        class="w-8 sm:w-10 h-8 sm:h-10"
        alt=""
      />
    </div>
  </div>
</template>
