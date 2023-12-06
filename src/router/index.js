// Composables
import { createRouter, createWebHistory } from 'vue-router'
import { useAuth } from '@/store/auth';
//parei em  2:09:00
const routes = [
  {
    path: '/Login',
    component: () => import('@/layouts/Login.vue'),
    beforeEnter: (to, from, next) => {
      const authStore = useAuth();
      if (authStore.isLoggeddIn) {
        next({ name: 'dashboard' })
      } else {
        next();
      }
    },
    children: [
      {
        path: '',
        name: 'login',
        component: () => import('@/views/Login.vue'),
      },
    ],
  },
  {
    path: '/',
    component: () => import('@/layouts/Dashboard.vue'),
    beforeEnter: (to, from, next) => {
      const authStore = useAuth();
      if (!authStore.isLoggeddIn) {
        next({ name: 'login' })
      } else {
        next();
      }
    },
    children: [
      {
        path: '',
        name: 'dashboard',
        component: () => import('@/views/Dashboard.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
