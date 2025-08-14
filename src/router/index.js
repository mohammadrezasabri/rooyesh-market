import { createMemoryHistory, createRouter } from 'vue-router'

import loading from '../page/loading.vue'

const routes = [
  { path: '/', component: loading },
  //{ path: '/about', component: AboutView },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router