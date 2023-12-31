import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ConfirmadosView from '../views/ConfirmadosView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'HomeView',
      component: HomeView
    },
    {
      path: '/confirmados',
      name: 'ConfirmadosView',
      component: ConfirmadosView
    }
  ]
})

export default router
