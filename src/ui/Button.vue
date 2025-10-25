<template>
    <button
      :class="[
        base,
        variants[variant],
        sizes[size],
        { 'rounded-full': pill, 'w-full': block },
        customClass
      ]"
      v-bind="$attrs"
    >
      <slot />
    </button>
  </template>
  
  <script>
  export default {
    name: 'UiButton',
    props: {
      variant: { type: String, default: 'secondary' },
      size: { type: String, default: 'md' },
      pill: { type: Boolean, default: false },
      block: { type: Boolean, default: false },
      customClass: { type: String, default: '' },
    },
    computed: {
      base() {
        return `
          inline-flex items-center justify-center font-semibold rounded-2xl
          transition-colors duration-300 select-none
          focus:outline-none focus:ring-2 focus:ring-emerald-400/40
          disabled:opacity-50 disabled:pointer-events-none
        `;
      },
      variants() {
        return {
          primary: 'bg-[#FF6600]/20 text-white hover:bg-[#ff7a1f] active:bg-[#e85f00] shadow shadow-[#FF6600]/25',
          secondary: 'bg-[#1E1E1E] text-white border border-[#333] hover:bg-white/10',
          soft: 'bg-[#22FF00]/10 text-[#FF6600] hover:bg-[#22FF00]/20',
          link: 'text-emerald-400 hover:text-emerald-300 underline underline-offset-4',
        };
      },
      sizes() {
        return {
          sm: 'h-8 px-3 text-xs',
          md: 'h-10 px-4 text-sm',
          lg: 'h-12 px-6 text-base',
        };
      },
    },
  };
  </script>
  