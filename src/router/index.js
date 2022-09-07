import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/login/index.vue'
import ForgetPassword from '@/views/forgetPassword.vue'
import Dashboard from '@/views/dashboard.vue'
import BusCompany from '@/views/bus_company.vue'
import CreateCompany from '@/views/create_company.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Login
    },
    {
      path: '/forgetPassword',
      name: 'forgetPassword',
      component: ForgetPassword
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/company',
      name: 'company',
      component: BusCompany
    },
    {
      path: '/create',
      name: 'create',
      component: CreateCompany
    },

  ]
})

export default router
