import { createWebHistory, createRouter } from 'vue-router'
import { useAuthStore } from '../stores/auth.js'

import login  from '../page/login.vue'
import home from '../page/home.vue'
import profile from '../page/profile.vue' 
import product from '../page/product.vue'
import changePassword from '../page/change-password.vue'

const routes = [
  { path: '/', redirect: '/login'},
  { path: '/login', component: login, meta: { requiresGuest: true }},
  { path: '/home',
    name:'home',
    component: home,
    meta: { requiresAuth: true }},
  { path: '/profile',
    name: 'profile',
    component: profile,
    meta: { requiresAuth: true }},
  { path: '/product',
    name:'product',
    component: product,
    meta: { requiresAuth: true }},
  { path: '/change-password', 
    component: changePassword,
    meta: { requiresAuth: true }},
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

// Route guards
router.beforeEach(async (to, from, next) => {
  const authStore = useAuthStore()
  
  // Initialize auth if not already done
  if (!authStore.user) {
    await authStore.getCurrentUser()
  }
  
  // Check if route requires authentication
  if (to.meta.requiresAuth && !authStore.isAuthenticated) {
    next('/login')
    return
  }
  
  // Check if route requires guest (not authenticated)
  if (to.meta.requiresGuest && authStore.isAuthenticated) {
    next('/home')
    return
  }
  
  next()
})

export default router