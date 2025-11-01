import { createWebHistory, createRouter } from 'vue-router'
import { useAuthStore } from '../stores/auth.js'

import login from '../page/login.vue'
import home from '../page/home.vue'
import profile from '../page/profile.vue'
import product from '../page/product.vue'
import changePassword from '../page/change-password.vue'
import orders from '../page/OrdersPage.vue' 
import allproducts from '../page/AllProduct.vue'

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: login, meta: { requiresGuest: true } },
  { 
    path: '/home',
    name: 'home',
    component: home,
    meta: { requiresAuth: true }
  },
  { 
    path: '/profile',
    name: 'profile',
    component: profile,
    meta: { requiresAuth: true }
  },
  { 
    path: '/product',
    name: 'product',
    component: product,
    meta: { requiresAuth: true }
  },
  { 
    path: '/change-password', 
    component: changePassword,
    meta: { requiresAuth: true }
  },
  { 
    path: '/orders',                // ✅ مسیر جدید برای صفحه سفارشات
    name: 'orders',
    component: orders,
    meta: { requiresAuth: true }    // چون فقط کاربر واردشده باید ببینه
  },
  { 
    path: '/allproducts',
    name: 'allproducts',
    component: allproducts,
    meta: { requiresAuth: true }
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

// ✅ محافظ مسیرها (همونطور که داری عالیه)
router.beforeEach(async (to, from, next) => {
  const authStore = useAuthStore()
  
  if (!authStore.user) {
    await authStore.getCurrentUser()
  }
  
  if (to.meta.requiresAuth && !authStore.isAuthenticated) {
    next('/login')
    return
  }

  if (to.meta.requiresGuest && authStore.isAuthenticated) {
    next('/home')
    return
  }

  next()
})

export default router
