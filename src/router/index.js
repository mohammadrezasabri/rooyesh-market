import { createWebHistory, createRouter } from 'vue-router'

import login  from '../page/login.vue'
import home from '../page/home.vue'
import profile from '../page/profile.vue'
import index from '../components/index.vue'


const routes = [
  { path: '/', redirect: '/login'},
  { path: '/login', component: login},
  { path: '/home', component: home},
  { path: '/index', component: index},
  { path: '/profile', component: profile},
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router