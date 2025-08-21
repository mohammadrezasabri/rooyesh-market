import { createMemoryHistory, createRouter } from 'vue-router'

import loading from '../page/loading.vue'
import index  from '../page/index.vue'

const routes = [
  { path: '/', component: loading },
  { path: '/index', component: index}
  //{ path: '/about', component: AboutView },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router