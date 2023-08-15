import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ConfirmadosView from '../views/ConfirmadosView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/confirmados',
      name: 'Confirmados',
      component: ConfirmadosView
    }
  ]
})

export default router
