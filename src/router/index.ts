import HomeView from '@/views/HomeView.vue'
import AdminLogin from '@/views/auth/admin/LoginView.vue'
import AdminRegister from '@/views/auth/admin/RegisterView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    // admin authentication
    {
      path: '/admin/login',
      name: 'admin-login',
      component: AdminLogin,
    },
    {
      path: '/admin/register',
      name: 'admin-register',
      component: AdminRegister,
    },
  ],
})

export default router
