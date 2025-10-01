import { createWebHistory, createRouter } from 'vue-router'

import login  from '../page/login.vue'
import home from '../page/home.vue'
import profile from '../page/profile.vue'
import category from '../page/category.vue'
import product from '../page/product.vue'


const routes = [
  { path: '/', redirect: '/login'},
  { path: '/login', component: login},
  { path: '/home', component: home},
  { path: '/profile', component: profile},
  { path: '/category', component: category},
  { path: '/product', component: product},
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router