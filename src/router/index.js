import { createRouter, createWebHistory } from 'vue-router'
import PropsView from '../views/PropsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'props',
      component: PropsView
    },
    {
      path: '/emit',
      name: 'emit',
      component: () => import('../views/EmitView.vue')
    },
    {
      path: '/provider',
      name: 'provider',
      component: () => import('../views/ProviderView.vue')
    },
    {
      path: '/pinia',
      name: 'pinia',
      component: () => import('../views/PiniaView.vue')
    },
    {
      path: '/model',
      name: 'model',
      component: () => import('../views/ModelView.vue')
    },
  ]
})

export default router
