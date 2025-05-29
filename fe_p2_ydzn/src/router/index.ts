import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView, // <-- Aquí va el Home, NO paises
    },
    {
      path: '/series',
      name: 'series',
      component: () => import('../views/SeriesView.vue'),
    },
    {
      path: '/paises',
      name: 'paises',
      component: () => import('../views/PaisesView.vue'),
    },
  ],
})

export default router
