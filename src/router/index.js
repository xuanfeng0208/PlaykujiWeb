import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Kujiset from '../views/Kujiset.vue'
import Privacy from '../views/Privacy.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Kujiset',
    name: 'Kujiset',
    component: Kujiset
    // component: () => import( '../views/Kujiset.vue')
  },
  {
    path: '/Privacy',
    name: 'Privacy',
    component: Privacy
    // component: () => import('../views/Privacy.vue')
  },
  // Privacy
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
