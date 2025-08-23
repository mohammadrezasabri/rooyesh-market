import { createMemoryHistory, createRouter } from 'vue-router'

import loading from '../page/loading.vue'
import index  from '../page/index.vue'
import login  from '../page/login.vue'
import home from '../components/home.vue'
import profile from '../components/profile.vue'

const routes = [
  { path: '/', component: loading },
  { path: '/index', component: index},
  { path: '/login', component: login},
  { path: '/home', component: home},
  { path: '/profile', component: profile},
  //{ path: '/about', component: AboutView },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router