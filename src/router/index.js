import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Kujiset',
    name: 'Kujiset',
    component: () => import( '../views/Kujiset.vue')
  },
  {
    path: '/Privacy',
    name: 'Privacy',
    component: () => import('../views/Privacy.vue')
  },
  // Privacy
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
