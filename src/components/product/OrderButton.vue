<script setup>
const props = defineProps({
  label: { type: String, default: 'سفارش' },
  disabled: { type: Boolean, default: false }
})
const emit = defineEmits(['click'])

function handleClick() {
  if (!props.disabled) emit('click')
}
</script>

<template>
  <button
    class="w-11/12 mx-auto block py-3 rounded-2xl text-center font-bold text-[#242424] bg-gradient-to-r from-[#FFD86C] via-[#FFC184] to-[#FCB07F] disabled:opacity-50"
    :disabled="disabled"
    @click="handleClick"
  >
    {{ label }}
  </button>
</template>

<style scoped>
</style>


