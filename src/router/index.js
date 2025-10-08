import { createWebHistory, createRouter } from 'vue-router'

import login  from '../page/login.vue'
import home from '../page/home.vue'
import profile from '../page/profile.vue' 
import product from '../page/product.vue'
import changePassword from '../page/change-password.vue'


const routes = [
  { path: '/', redirect: '/login'},
  { path: '/login', component: login},
  { path: '/home',
    name:'home',
    component: home},
  { path: '/profile',
    name: 'profile',
    component: profile},
  { path: '/product',
    name:'product',
    component: product},
  { path: '/change-password', component: changePassword},
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router