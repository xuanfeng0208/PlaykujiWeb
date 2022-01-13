import { createRouter, createWebHistory } from 'vue-router'
// import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Kujiset from '../views/Kujiset.vue'
import Privacy from '../views/Privacy.vue'
import SliderKuji from '../views/SliderKuji.vue'


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
    path: '/SliderKuji',
    name: 'SliderKuji',
    component: SliderKuji
    // component: () => import( '../views/SliderKuji.vue')
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
  history: createWebHistory(process.env.BASE_URL),
  // history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
