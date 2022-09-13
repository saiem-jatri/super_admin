import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/login/index.vue'
import ForgetPassword from '@/views/forgetPassword.vue'
import Dashboard from '@/views/dashboard.vue'
import BusCompany from '@/views/bus_company.vue'
import CreateCompany from '@/views/create_company.vue'
import CreateFilled from '@/views/create_filled.vue'
import CompanyOwner from '@/views/bus_company_owner.vue'
import CompanyTicket from '@/views/bus_company_Ticket.vue'
import companyCreateOwner from '@/views/bus_company_create_owner.vue'
import companyCreateRoute from '@/views/bus_company_create_route.vue'
import companyCreateCounter from '@/views/bus_company_create_counter.vue'
import companyManageTrip from '@/views/bus_company_manage_trips.vue'
import companyCreateCounterman from '@/views/bus_company_create_counterman.vue'
import companyCreateSupervisor from '@/views/bus_company_create_supervisor.vue'
import companyCreateDriver from '@/views/bus_company_create_driver.vue'
import companyCreateHelper from '@/views/bus_company_create_helper.vue'
import companyManageCreateDriver from '@/views/bus_company_manage_create_driver.vue'
import viacity from '@/views/bus_company_manage_via_city.vue'
import companyManageCompany from  '@/views/bus_company_manage_company.vue'
import viacityFilled from '@/views/bus_company_manage_via_city_filled.vue'

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
    {
      path: '/createFilled',
      name: 'createFilled',
      component: CreateFilled
    },
    {
      path: '/companyOwner',
      name: 'companyOwner',
      component: CompanyOwner
    },
    {
      path: '/companyTicket',
      name: 'companyTicket',
      component: CompanyTicket
    },
    {
      path: '/createOwner',
      name: 'createOwner',
      component: companyCreateOwner
    },
    {
      path: '/createRoute',
      name: 'createRoute',
      component: companyCreateRoute
    },
    {
      path: '/createCounter',
      name: 'createCounter',
      component: companyCreateCounter
    },
    {
      path: '/manageTrip',
      name: 'companyManageTrip',
      component: companyManageTrip
    },

    {
      path: '/createSupervisor',
      name: 'companyCreateSupervisor',
      component: companyCreateSupervisor
    },
    {
      path: '/createDriver',
      name: 'companyCreateDriver',
      component: companyCreateDriver
    },
    {
      path: '/createHelper',
      name: 'companyCreateHelper',
      component: companyCreateHelper
    },
    {
      path: '/createManageDriver',
      name: 'companyManageCreateDriver',
      component: companyManageCreateDriver
    },
    {
      path: '/viaCity',
      name: 'viacity',
      component: viacity
    },
    {
      path: '/viaCityFilled',
      name: 'viacityFilled',
      component: viacityFilled
    },
    {
      path: '/manageCompany',
      name: 'companyManageCompany',
      component: companyManageCompany
    },
  ]
})

export default router
