<script setup>
import { ref, watch, computed } from 'vue'

const props = defineProps({
  modelValue: { type: Number, default: 1 },
  min: { type: Number, default: 1 },
  max: { type: Number, default: 99 }
})

const emit = defineEmits(['update:modelValue'])

const internalQty = ref(props.modelValue)

watch(() => props.modelValue, (v) => {
  internalQty.value = v
})

const isDecrementDisabled = computed(() => internalQty.value <= props.min)
const isIncrementDisabled = computed(() => internalQty.value >= props.max)

function decrement() {
  if (internalQty.value > props.min) {
    internalQty.value -= 1
    emit('update:modelValue', internalQty.value)
  }
}

function increment() {
  if (internalQty.value < props.max) {
    internalQty.value += 1
    emit('update:modelValue', internalQty.value)
  }
}
</script>

<template>
  <div class="w-11/12 mx-auto flex items-center justify-between">
    <span class="text-gray-400 text-sm">تعداد</span>
    <div class="flex items-center gap-3">
      <button
        class="w-9 h-9 rounded-full bg-[#1E1E1E] text-white disabled:opacity-40"
        :disabled="isDecrementDisabled"
        @click="decrement"
      >
        -
      </button>
      <span class="text-white text-lg min-w-6 text-center">{{ internalQty }}</span>
      <button
        class="w-9 h-9 rounded-full bg-[#1E1E1E] text-white disabled:opacity-40"
        :disabled="isIncrementDisabled"
        @click="increment"
      >
        +
      </button>
    </div>
  </div>
</template>


