import {createRouter, createWebHistory} from 'vue-router'
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
import companyManageCompany from '@/views/bus_company_manage_company.vue'
import viacityFilled from '@/views/bus_company_manage_via_city_filled.vue'
import companyManageOwner from '@/views/bus_company_manage_owner.vue'
import Routes from '@/views/routes.vue'
import RouteCreate from '@/views/route_create.vue'
import RoutesViaCity from '@/views/routes_via_city.vue'
import TripPreview from '@/views/trip_preview.vue'
import RouteViaCityFilled from '@/views/route_via_city_filled.vue'
import Counter from '@/views/counter.vue'
import CreateCounter from '@/views/counter_create.vue'
import THirdPartyCounter from '@/views/thirdparty_counter.vue'
import Trips from '@/views/trips.vue'
import TripsInformation from '@/views/tripInformation.vue'
import TripsBoarding from "@/views/trips-boarding.vue";
import TripsAdd from "@/views/tripsAdd.vue";
import TripsPermission from '@/views/trip_permission.vue'
import TripsAgent from '@/views/trips_agent.vue'
import TripsQuota from '@/views/trips_quota.vue'
import TripFacilities from '@/views/trip_facilities.vue'
import User from '@/views/user.vue'
import UserAdmin from '@/views/user_admin.vue'
import UserCounterman from '@/views/user_counterman.vue'
import UserAgent from '@/views/user_agent.vue'
import UserCustomerCare from '@/views/user_customer_care.vue'
import UserCreateAdmin from '@/views/user_create_admin.vue'
import UserCreateCounterman from '@/views/user_create_counterman.vue'
import UserCreateAgent from '@/views/user_create_agent.vue'

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
            name: 'companyCreateCounter',
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
            path: '/createCounterMan',
            name: 'companyCreateCounterman',
            component: companyCreateCounterman
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
            path: '/manageCounter',
            name: 'companyManageCompany',
            component: companyManageCompany
        },
        {
            path: '/manageOwner',
            name: 'companyManageOwner',
            component: companyManageOwner
        },

        //    routes start
        {
            path: '/routes',
            name: 'Routes',
            component: Routes
        },
        {
            path: '/routeCreate',
            name: 'RouteCreate',
            component: RouteCreate
        },
        {
            path: '/routeViaCity',
            name: 'RoutesViaCity',
            component: RoutesViaCity
        },
        {
            path: '/routeViaCityFilled',
            name: 'RouteViaCityFilled',
            component: RouteViaCityFilled
        },

        //  counter start
        {
            path: '/counter',
            name: 'Counter',
            component: Counter
        },
        {
            path: '/counterCreate',
            name: 'CreateCounter',
            component: CreateCounter
        },
        {
            path: '/thirdPartyCounter',
            name: 'THirdPartyCounter',
            component: THirdPartyCounter
        },

        //    Trips started
        {
            path: '/trips',
            name: 'Trips',
            component: Trips
        },
        {
            path: '/tripsInformation',
            name: 'TripsInformation',
            component: TripsInformation
        },
        {
            path: '/tripsBoarding',
            name: 'TripsBoarding',
            component: TripsBoarding
        },

        {
            path: '/tripsAdd',
            name: 'TripsAdd',
            component: TripsAdd
        },
        {
            path: '/tripsPermission',
            name: 'TripsPermission',
            component: TripsPermission
        },
        {
            path: '/tripsAgent',
            name: 'TripsAgent',
            component: TripsAgent
        },
        {
            path: '/tripsQuota',
            name: 'TripsQuota',
            component: TripsQuota
        },
        {
            path: '/tripsFacilities',
            name: 'TripFacilities',
            component: TripFacilities
        },

        {
            path: '/tripsAdd',
            name: 'TripsAdd',
            component: TripsAdd
        },
        {
            path: '/tripsPermission',
            name: 'TripsPermission',
            component: TripsPermission
        },
        {
            path: '/tripPreview',
            name: 'TripPreview',
            component: TripPreview,
        },
        //user Start
        {
            path: '/user',
            name: 'User',
            component: User,
        },
        {
            path: '/userAdmin',
            name: 'UserAdmin',
            component: UserAdmin,
        },
        {
            path: '/userCounterman',
            name: 'UserCounterman',
            component: UserCounterman,
        },
        {
            path: '/userAgent',
            name: 'UserAgent',
            component: UserAgent,
        },
        {
            path: '/userCustomerCare',
            name: 'UserCustomerCare',
            component: UserCustomerCare,
        },
        {
            path: '/userCreateAdmin',
            name: 'UserCreateAdmin',
            component: UserCreateAdmin,
        },
        {
            path: '/userCreateCounterman',
            name: 'UserCreateCounterman',
            component: UserCreateCounterman,
        },
        {
            path: '/userCreateAgent',
            name: 'UserCreateAgent',
            component: UserCreateAgent,
        },
    ]

})

export default router
