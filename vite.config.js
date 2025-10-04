import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(),
    tailwindcss(),
  ],
  server: {
    host: '0.0.0.0', // اجازه دسترسی از تمام IP ها
    port: 3000, // پورت مشخص
    strictPort: true, // اگر پورت در دسترس نباشد، خطا بدهد
  }
})
