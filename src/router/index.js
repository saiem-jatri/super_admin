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
import TripsInformationNext from '@/views/TripsInformationNext.vue'
import TripsBoarding from "@/views/trips-boarding.vue"
import AnotherTripsBoarding from "@/views/another-trips-boarding.vue"
import AnotherTripsBoardingNext from "@/views/another-trips-boarding-next.vue"
import TripsAdd from "@/views/tripsAdd.vue"
import TripsBusRouteSelect from "@/views/trips-bus-route-select.vue"
import TripsBusRouteSelectNext from "@/views/trips-bus-route-select-next.vue"
import TripsAddNext from "@/views/tripsAddNext.vue"
import TripsPermission from '@/views/trip_permission.vue'
import ManageUserRestriction from '@/views/manage-user-restriction.vue'
import ManageUserRestrictionFilled from '@/views/manage-user-restriction-filled.vue'
import TripsQuotaFilled from '@/views/trips-quota-filled.vue'
import TripsModal from '@/views/trips-modal.vue'
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
import UserCreateCustomercare from '@/views/user_create_customercare.vue'
import MigrateTrip from '@/views/migrate_trip.vue'
import Agent from '@/views/agent.vue'
import AddAgent from '@/views/add-agent.vue'
import AddAgentNext from '@/views/add-agent-next.vue'
import AddAgentSave from '@/views/add-agent-save.vue'
import TripExpenseConfiguration from '@/views/tripExpenseConfiguration.vue'
import TripExpenseConfigurationFilled from '@/views/TripExpenseConfigurationFilled.vue'
import TripExpenseConfigurationFinal from '@/views/TripExpenseConfigurationFinal.vue'
import MigrateSelect from '@/views/migrate_select_seat.vue'
import MigrateSameTicketOwner from '@/views/migrate_same_ticket_owner.vue'
import MigrateTicket from '@/views/migrate_ticket.vue'
import MigrateTicketSelect from '@/views/migrate_tikcet_select_seat.vue'
import Invoice from '@/views/invoice.vue'
import InvoiceCurrentbill from '@/views/invoice_currentbill.vue'
import InvoiceGeneratebill from '@/views/invoice_generatebill.vue'
import Offer from '@/views/offer.vue'
import OfferAndPromotion from '@/views/offer_promotion.vue'
import OfferAdd from '@/views/offer_addNew.vue'
import OfferNew from '@/views/new_offer.vue'
import OfferAddFilled from '@/views/offer_addNew_filled.vue'
import OfferAndPromotionTable from '@/views/offer_promotion_table.vue'

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
            path: '/tripsModal',
            name: 'TripsModal',
            component: TripsModal
        },
        {
            path: '/tripsInformation',
            name: 'TripsInformation',
            component: TripsInformation
        },
        {
            path: '/tripsInformationNext',
            name: 'TripsInformationNext',
            component: TripsInformationNext
        },
        {
            path: '/tripsBoarding',
            name: 'TripsBoarding',
            component: TripsBoarding
        },
        {
            path: '/anotherTripsBoarding',
            name: 'AnotherTripsBoarding',
            component: AnotherTripsBoarding
        },
        {
            path: '/anotherTripsBoardingNext',
            name: 'AnotherTripsBoardingNext',
            component: AnotherTripsBoardingNext
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
            path: '/tripsQuotaFilled',
            name: 'TripsQuotaFilled',
            component: TripsQuotaFilled,
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
            path: '/tripsBusRouteSelect',
            name: 'TripsBusRouteSelect',
            component: TripsBusRouteSelect
        },
        {
            path: '/tripsBusRouteSelectNext',
            name: 'TripsBusRouteSelectNext',
            component: TripsBusRouteSelectNext
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
        {
            path: '/userCreateCustomercare',
            name: 'UserCreateCustomercare',
            component: UserCreateCustomercare,
        },

        //    migrate trip started
        {
            path: '/migrateTrip',
            name: 'MigrateTrip',
            component: MigrateTrip,
        },
        {
            path: '/migrateSelect',
            name: 'MigrateSelect',
            component: MigrateSelect,
        },
        {
            path: '/migrateSame',
            name: 'MigrateSameTicketOwner',
            component: MigrateSameTicketOwner,
        },
        // migrate ticket
        {
            path: '/migrateTicket',
            name: 'MigrateTicket',
            component: MigrateTicket,
        },
        {
            path: '/migrateTicketSelect',
            name: 'MigrateTicketSelect',
            component: MigrateTicketSelect,
        },

        {
            path: '/tripsAddNext',
            name: 'TripsAddNext',
            component: TripsAddNext
        },
        {
            path: '/manageUserRestriction',
            name: 'ManageUserRestriction',
            component: ManageUserRestriction,
        },
        {
            path: '/manageUserRestrictionFilled',
            name: 'ManageUserRestrictionFilled',
            component: ManageUserRestrictionFilled,
        },
        {
            path: '/tripsQuotaFilled',
            name: 'TripsQuotaFilled',
            component: TripsQuotaFilled,
        },

        //Agent Start
        {
            path: '/agent',
            name: 'Agent',
            component: Agent,
        },
        {
            path: '/addAgent',
            name: 'AddAgent',
            component: AddAgent,
        },
        {
            path: '/addAgentNext',
            name: 'AddAgentNext',
            component: AddAgentNext,
        },
        {
            path: '/addAgentSave',
            name: 'AddAgentSave',
            component: AddAgentSave,
        },
        //invoice started
        {
            path: '/invoice',
            name: 'Invoice',
            component: Invoice,
        },
        {
            path: '/invoiceCurrentbill',
            name: 'InvoiceCurrentbill',
            component: InvoiceCurrentbill,
        },
        {
            path: '/invoiceGeneratebill',
            name: 'InvoiceGeneratebill',
            component: InvoiceGeneratebill,
        },
        //offer and promotion started
        {
            path: '/offer',
            name: 'Offer',
            component: Offer,
        },
        {
            path: '/offerAndPromotion',
            name: 'OfferAndPromotion',
            component: OfferAndPromotion,
        },
        {
            path: '/offerAdd',
            name: 'OfferAdd',
            component: OfferAdd,
        },
        {
            path: '/offerNew',
            name: 'OfferNew',
            component: OfferNew,
        },
        {
            path: '/offerNewFilled',
            name: 'OfferAddFilled',
            component: OfferAddFilled,
        },
        {
            path: '/offerAndPromotionTable',
            name: 'OfferAndPromotionTable',
            component: OfferAndPromotionTable,
        },
        //Trip Expense Configaration
        {
            path: '/tripExpenseConfiguration',
            name: 'TripExpenseConfiguration',
            component: TripExpenseConfiguration
        },
        {
            path: '/tripExpenseConfigurationFilled',
            name: 'TripExpenseConfigurationFilled',
            component: TripExpenseConfigurationFilled
        },
        {
            path: '/tripExpenseConfigurationFinal',
            name: 'TripExpenseConfigurationFinal',
            component: TripExpenseConfigurationFinal
        },

    ]

})

export default router
