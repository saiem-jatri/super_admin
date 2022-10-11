import {createRouter, createWebHistory} from 'vue-router'
import Login from '@/views/login/index.vue'
import ForgetPassword from '@/views/forgetPassword.vue'
import Dashboard from '@/views/dashboard.vue'
import BusCompany from '@/views/bus_company.vue'
import CreateCompany from '@/views/create_company.vue'
import CreateFilled from '@/views/create_filled.vue'
import CompanyOwner from '@/views/bus_company_owner.vue'
import BusCompanyTabsRoute from '@/views/bus-company-tabs-route.vue'
import CompanyTicket from '@/views/bus_company_Ticket.vue'
import companyCreateOwner from '@/views/bus_company_create_owner.vue'
import busCompanyCreateRoute from '@/views/bus_company_create_route.vue'
import BusCompanyTabsCounter from '@/views/bus-company-tabs-counter.vue'
import BusCompanyCreateCounter from '@/views/bus_company_create_counter.vue'
import BusCompanyTabsTrips from '@/views/bus-company-tabs-trips.vue'
import BusCompanyTabsAgent from '@/views/bus-company-tabs-agent.vue'
import companyManageTrip from '@/views/bus_company_manage_trips.vue'
import Counterman from '@/views/counterman.vue'
import companyCreateCounterman from '@/views/bus_company_create_counterman.vue'
import Supervisor from '@/views/supervisor.vue'
import BusCompanyCreateSupervisor from '@/views/bus_company_create_supervisor.vue'
import BusCompanyDriver from '@/views/bus-company-driver.vue'
import BusCompanyCreateDriver from '@/views/bus_company_create_driver.vue'
import BusCompanyHelper from '@/views/bus_company_helper.vue'
import BusCompanyCreateHelper from '@/views/bus_company_create_helper.vue'
import companyManageCreateDriver from '@/views/bus_company_manage_create_driver.vue'
import busCompanyManageViaCity from '@/views/bus_company_manage_via_city.vue'
import busCompanyManageViaCityFilled from '@/views/bus_company_manage_via_city_filled.vue'
import companyManageCompany from '@/views/bus_company_manage_company.vue'
import companyManageOwner from '@/views/bus_company_manage_owner.vue'
import Routes from '@/views/routes.vue'
import CreateRoutes from '@/views/create-routes.vue'
import RoutesViaCity from '@/views/routes_via_city.vue'
import RouteViaCityFilled from '@/views/route_via_city_filled.vue'
import Counter from '@/views/counter.vue'
import CreateCounter from '@/views/create-counter.vue'
import ThirdPartyCounter from '@/views/thirdparty_counter.vue'
import Trips from '@/views/trips.vue'
import TripsAddNext from "@/views/tripsAddNext.vue"
import TripsAdd from "@/views/tripsAdd.vue"
import TripPreview from '@/views/trip_preview.vue'
import TripPreviewNext from '@/views/trips-preview-next.vue'
import TripsInformation from '@/views/tripInformation.vue'
import TripsInformationNext from '@/views/TripsInformationNext.vue'
import TripsBoarding from "@/views/trips-boarding.vue"
import AnotherTripsBoarding from "@/views/another-trips-boarding.vue"
import AnotherTripsBoardingNext from "@/views/another-trips-boarding-next.vue"
import TripsBusRouteSelect from "@/views/trips-bus-route-select.vue"
import TripsBusRouteSelectNext from "@/views/trips-bus-route-select-next.vue"
import TripsBusRouteSelectSeatExtra from "@/views/trips-bus-route-select-extraSeat.vue"
import TripsBusRouteSelectSeatExtraNext from "@/views/trips-bus-route-select-extraSeat-next.vue"
import TripsPermission from '@/views/trip_permission.vue'
import TripsPermissionFilled from '@/views/trip_permission-filled.vue'
import ManageUserRestriction from '@/views/manage-user-restriction.vue'
import ManageUserRestrictionFilled from '@/views/manage-user-restriction-filled.vue'
import TripsQuotaFilled from '@/views/trips-quota-filled.vue'
import TripsQuotaFilledNext from '@/views/trips-quota-filled-next.vue'
import TripsAgent from '@/views/trips_agent.vue'
import TripsAgentFilled from '@/views/trips_agent-filled.vue'
import TripsQuota from '@/views/trips_quota.vue'
import TripFacilities from '@/views/trip_facilities.vue'
import TripFacilitiesNext from '@/views/trip-facilities-next.vue'
import User from '@/views/user.vue'
import UserAdmin from '@/views/user_admin.vue'
import UserCreateAdmin from '@/views/user_create_admin.vue'
import UserCounterman from '@/views/user_counterman.vue'
import UserCreateCounterman from '@/views/user_create_counterman.vue'
import UserAgent from '@/views/user_agent.vue'
import UserCreateAgent from '@/views/user_create_agent.vue'
import UserCustomerCare from '@/views/user_customer_care.vue'
import UserCreateCustomercare from '@/views/user_create_customercare.vue'
import Agent from '@/views/agent.vue'
import AddAgent from '@/views/add-agent.vue'
import AddAgentNext from '@/views/add-agent-next.vue'
import TripExpenseConfiguration from '@/views/tripExpenseConfiguration.vue'
import TripExpenseConfigurationFilled from '@/views/TripExpenseConfigurationFilled.vue'
import MigrateTrip from '@/views/migrate_trip.vue'
import MigrateSelect from '@/views/migrate_select_seat.vue'
import MigrateSameTicketOwner from '@/views/migrate_same_ticket_owner.vue'
import MigrateTicket from '@/views/migrate_ticket.vue'
import MigrateTicketSelect from '@/views/migrate_tikcet_select_seat.vue'
import OperatorWiseSales from '@/views/operator-wise-sales.vue'
import UserWiseSales from '@/views/user-wise-sales.vue'
import UserWiseSalesDetails from '@/views/user-wise-sales-details.vue'
import CounterWiseSales from '@/views/counter-wise-sales.vue'
import CounterWiseSalesDetails from '@/views/counter-wise-sales-details.vue'
import RouteWiseSales from '@/views/route-wise-sales.vue'
import SubRouteWiseSales from '@/views/subroute-wise-sales.vue'
import BusWiseSales from '@/views/bus-wise-sales.vue'
import TripWiseSales from '@/views/trip-wise-sales.vue'
import CancelTripReport from '@/views/cancel-trip-report.vue'
import CancelTicketReport from '@/views/cancel-ticket-report.vue'
import ReserveTicket from '@/views/reserve-ticket.vue'
import DiscountReport from '@/views/discount-report.vue'
import TripMigrationReport from '@/views/trip-migration-report.vue'
import TotalLogHistory from '@/views/total-log-history.vue'
import JatriSalesReport from '@/views/jatri-sales-report.vue'
import BusTypeWiseSales from '@/views/bus-type-wise-sales.vue'
import UserLogSessionReport from '@/views/user-log-session-report.vue'
import GoodsLuggdeReport from '@/views/goods-luggde-report.vue'
import CityWiseSalesReport from '@/views/city-wise-sales-report.vue'
import BusDirectionWiseReport from '@/views/bus-direction-wise-sales-report.vue'
import ChallanReport from '@/views/challan-report.vue'
import TripWiseExpenseReport from '@/views/trip-wise-expense-report.vue'
import Invoice from '@/views/invoice.vue'
import InvoiceCurrentbill from '@/views/invoice_currentbill.vue'
import InvoiceGeneratebill from '@/views/invoice_generatebill.vue'
import Offer from '@/views/offer.vue'
import OfferAdd from '@/views/offer_addNew.vue'
import OfferAddFilled from '@/views/offer_addNew_filled.vue'
import Promotion from '@/views/promotion.vue'
import AddPromo from '@/views/promotion-add-promo.vue'
import AddPromoFilled from '@/views/promotion-add-promo-filled.vue'
import OfferAndPromotionTable from '@/views/offer_promotion_table.vue'
import ActionFareUpdate from '@/views/actionbulk_fareupdate.vue'
import UpdateStopageTime from '@/views/actionbulk_updatestopagetime.vue'
import TripAction from '@/views/actionbulk_tripaction.vue'
import OfflineAccess from '@/views/actionbulk_offlineaccess.vue'
import DateRangePermission from '@/views/actionbulk_daterangePermission.vue'
import QuotaRelease from '@/views/actionbulk_quotaRelease.vue'
import DateRangePermissionEdit from '@/views/actionbulk_daterangePermissionEdit.vue'
import Bus from '@/views/bus.vue'
import BusCreate from '@/views/bus_create.vue'
import BusCreateEdit from '@/views/bus_createEdit.vue'
import MixedbusCreate from '@/views/mixed_bus_create.vue'
import MixedbusCreateActive from '@/views/mixed_bus_create_active.vue'
import MixedbusCreateFilled from '@/views/mixed_bus_create_filled.vue'
import DoubleDackerbusCreate from '@/views/doubleDacker_bus_create.vue'
import DoubleDackerbusCreateActive from '@/views/doubleDacker_bus_create_active.vue'
import DoubleDackerCreateFilled from '@/views/doubleDacker_create_filled.vue'
import SleeperCoachBUsCreate from '@/views/sleeperCoach_bus_create.vue'
import SleeperCoachBUsCreateActive from '@/views/sleeperCoach_bus_create_active.vue'
import SleeperCoachCreateFilled from '@/views/sleeperCoach_create_filled.vue'
import StoppageCity from '@/views/stoppage-city.vue'
import StoppageCityNext from '@/views/stoppage-city-next.vue'
import Stoppage from '@/views/stoppage.vue'
import StoppageNext from '@/views/stoppage-next.vue'
import Challan from '@/views/challan.vue'
import Fees from '@/views/fees.vue'
import OperatorCharge from '@/views/operator-charge.vue'
import SystemUsageBill from '@/views/syatem-usage-bill.vue'

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
            path: '/busCompanyTabsRoute',
            name: 'BusCompanyTabsRoute',
            component: BusCompanyTabsRoute
        },
        {
            path: '/createOwner',
            name: 'createOwner',
            component: companyCreateOwner
        },
        {
            path: '/busCompanyCreateRoute',
            name: 'busCompanyCreateRoute',
            component: busCompanyCreateRoute
        },
        {
            path: '/busCompanyTabsCounter',
            name: 'BusCompanyTabsCounter',
            component: BusCompanyTabsCounter
        },
        {
            path: '/busCompanyCreateCounter',
            name: 'BusCompanyCreateCounter',
            component: BusCompanyCreateCounter
        },
        {
            path: '/busCompanyTabsTrips',
            name: 'BusCompanyTabsTrips',
            component: BusCompanyTabsTrips
        },
        {
            path: '/busCompanyTabsAgent',
            name: 'BusCompanyTabsAgent',
            component: BusCompanyTabsAgent
        },
        {
            path: '/manageTrip',
            name: 'companyManageTrip',
            component: companyManageTrip
        },
        {
            path: '/supervisor',
            name: 'Supervisor',
            component: Supervisor
        },
        {
            path: '/busCompanyCreateSupervisor',
            name: 'BusCompanyCreateSupervisor',
            component: BusCompanyCreateSupervisor
        },
        {
            path: '/busCompanyDriver',
            name: 'BusCompanyDriver',
            component: BusCompanyDriver
        },
        {
            path: '/busCompanyCreateDriver',
            name: 'BusCompanyCreateDriver',
            component: BusCompanyCreateDriver
        },
        {
            path: '/busCompanyHelper',
            name: 'BusCompanyHelper',
            component: BusCompanyHelper
        },
        {
            path: '/busCompanyCreateHelper',
            name: 'BusCompanyCreateHelper',
            component: BusCompanyCreateHelper
        },
        {
            path: '/companyTicket',
            name: 'companyTicket',
            component: CompanyTicket
        },
        {
            path: '/createManageDriver',
            name: 'companyManageCreateDriver',
            component: companyManageCreateDriver
        },
        {
            path: '/busCompanyManageViaCity',
            name: 'busCompanyManageViaCity',
            component: busCompanyManageViaCity
        },
        {
            path: '/busCompanyManageViaCityFilled',
            name: 'busCompanyManageViaCityFilled',
            component: busCompanyManageViaCityFilled
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

        {
            path: '/counterman',
            name: 'Counterman',
            component: Counterman
        },
        {
            path: '/createCounterMan',
            name: 'companyCreateCounterman',
            component: companyCreateCounterman
        },

        //    routes start
        {
            path: '/routes',
            name: 'Routes',
            component: Routes
        },
        {
            path: '/createRoutes',
            name: 'CreateRoutes',
            component: CreateRoutes
        },
        {
            path: '/routesViaCity',
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
            path: '/createCounter',
            name: 'CreateCounter',
            component: CreateCounter
        },
        {
            path: '/thirdPartyCounter',
            name: 'ThirdPartyCounter',
            component: ThirdPartyCounter
        },

        //    Trips started
        {
            path: '/trips',
            name: 'Trips',
            component: Trips
        },
        {
            path: '/tripsAdd',
            name: 'TripsAdd',
            component: TripsAdd
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
            path: '/tripsBusRouteSelectSeatExtra',
            name: 'TripsBusRouteSelectSeatExtra',
            component: TripsBusRouteSelectSeatExtra
        },
        {
            path: '/tripsBusRouteSelectSeatExtraNext',
            name: 'TripsBusRouteSelectSeatExtraNext',
            component: TripsBusRouteSelectSeatExtraNext
        },
        {
            path: '/tripsPermission',
            name: 'TripsPermission',
            component: TripsPermission
        },
        {
            path: '/tripsPermissionFilled',
            name: 'TripsPermissionFilled',
            component: TripsPermissionFilled
        },
        {
            path: '/tripsAgent',
            name: 'TripsAgent',
            component: TripsAgent
        },
        {
            path: '/tripsAgentFilled',
            name: 'TripsAgentFilled',
            component: TripsAgentFilled
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
            path: '/tripsQuotaFilledNext',
            name: 'TripsQuotaFilledNext',
            component: TripsQuotaFilledNext,
        },
        {
            path: '/tripsFacilities',
            name: 'TripFacilities',
            component: TripFacilities
        },
        {
            path: '/tripsFacilitiesNext',
            name: 'TripFacilitiesNext',
            component: TripFacilitiesNext
        },
        {
            path: '/tripPreview',
            name: 'TripPreview',
            component: TripPreview,
        },
        {
            path: '/tripPreviewNext',
            name: 'TripPreviewNext',
            component: TripPreviewNext,
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

        //Reports Start
        {
            path: '/operatorWiseSales',
            name: 'OperatorWiseSales',
            component: OperatorWiseSales,
        },
        {
            path: '/userWiseSales',
            name: 'UserWiseSales',
            component: UserWiseSales,
        },
        {
            path: '/userWiseSalesDetails',
            name: 'UserWiseSalesDetails',
            component: UserWiseSalesDetails,
        },
        {
            path: '/counterWiseSales',
            name: 'CounterWiseSales',
            component: CounterWiseSales,
        },
        {
            path: '/counterWiseSalesDetails',
            name: 'CounterWiseSalesDetails',
            component: CounterWiseSalesDetails,
        },
        {
            path: '/routeWiseSales',
            name: 'RouteWiseSales',
            component: RouteWiseSales,
        },
        {
            path: '/subRouteWiseSales',
            name: 'SubRouteWiseSales',
            component: SubRouteWiseSales,
        },
        {
            path: '/busWiseSales',
            name: 'BusWiseSales',
            component: BusWiseSales,
        },
        {
            path: '/tripWiseSales',
            name: 'TripWiseSales',
            component: TripWiseSales,
        },
        {
            path: '/cancelTripReport',
            name: 'CancelTripReport',
            component: CancelTripReport,
        },
        {
            path: '/cancelTicketReport',
            name: 'CancelTicketReport',
            component: CancelTicketReport,
        },
        {
            path: '/reserveTicket',
            name: 'ReserveTicket',
            component: ReserveTicket,
        },
        {
            path: '/discountReport',
            name: 'DiscountReport',
            component: DiscountReport,
        },
        {
            path: '/tripMigrationReport',
            name: 'TripMigrationReport',
            component: TripMigrationReport,
        },
        {
            path: '/totalLogHistory',
            name: 'TotalLogHistory',
            component: TotalLogHistory,
        },
        {
            path: '/jatriSalesReport',
            name: 'JatriSalesReport',
            component: JatriSalesReport,
        },
        {
            path: '/busTypeWiseSales',
            name: 'BusTypeWiseSales',
            component: BusTypeWiseSales,
        },
        {
            path: '/userLogSessionReport',
            name: 'UserLogSessionReport',
            component: UserLogSessionReport,
        },
        {
            path: '/goodsLuggdeReport',
            name: 'GoodsLuggdeReport',
            component: GoodsLuggdeReport,
        },
        {
            path: '/cityWiseSalesReport',
            name: 'CityWiseSalesReport',
            component: CityWiseSalesReport,
        },
        {
            path: '/busDirectionWiseReport',
            name: 'BusDirectionWiseReport',
            component: BusDirectionWiseReport,
        },
        {
            path: '/challanReport',
            name: 'ChallanReport',
            component: ChallanReport,
        },
        {
            path: '/tripWiseExpenseReport',
            name: 'TripWiseExpenseReport',
            component: TripWiseExpenseReport,
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
            path: '/promotion',
            name: 'Promotion',
            component: Promotion,
        },
        {
            path: '/offerAdd',
            name: 'OfferAdd',
            component: OfferAdd,
        },
        {
            path: '/offerAddFilled',
            name: 'OfferAddFilled',
            component: OfferAddFilled,
        },
        {
            path: '/addPromo',
            name: 'AddPromo',
            component: AddPromo,
        },
        {
            path: '/addPromoFilled',
            name: 'AddPromoFilled',
            component: AddPromoFilled,
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
        //    Action in bulk started

        {
            path: '/actionFareUpdate',
            name: 'ActionFareUpdate',
            component: ActionFareUpdate
        },
        {
            path: '/updateStopageTime',
            name: 'UpdateStopageTime',
            component: UpdateStopageTime
        },
        {
            path: '/tripAction',
            name: 'TripAction',
            component: TripAction
        },
        {
            path: '/offlineAccess',
            name: 'OfflineAccess',
            component: OfflineAccess
        },

        {
            path: '/dateRangePermission',
            name: 'DateRangePermission',
            component: DateRangePermission
        },
        {
            path: '/dateRangePermissionEdit',
            name: 'DateRangePermissionEdit',
            component: DateRangePermissionEdit
        },
        {
            path: '/quotaRelease',
            name: 'QuotaRelease',
            component: QuotaRelease
        },

        //    bus started from here
        {
            path: '/bus',
            name: 'Bus',
            component: Bus
        },
        {
            path: '/busCreate',
            name: 'BusCreate',
            component: BusCreate
        },
        {
            path: '/busCreateEdit',
            name: 'BusCreateEdit',
            component: BusCreateEdit
        },
        {
            path: '/mixedbusCreate',
            name: 'MixedbusCreate',
            component: MixedbusCreate
        },
        {
            path: '/mixedbusCreateActive',
            name: 'MixedbusCreateActive',
            component: MixedbusCreateActive
        },
        {
            path: '/mixedbusCreateFilled',
            name: 'MixedbusCreateFilled',
            component: MixedbusCreateFilled
        },
        {
            path: '/doubleDackerbusCreate',
            name: 'DoubleDackerbusCreate',
            component: DoubleDackerbusCreate
        },
        {
            path: '/doubleDackerbusCreateActive',
            name: 'DoubleDackerbusCreateActive',
            component: DoubleDackerbusCreateActive
        },
        {
            path: '/doubleDackerCreateFilled',
            name: 'DoubleDackerCreateFilled',
            component: DoubleDackerCreateFilled
        },
        {
            path: '/sleeperCoachBUsCreate',
            name: 'SleeperCoachBUsCreate',
            component: SleeperCoachBUsCreate
        },
        {
            path: '/sleeperCoachBUsCreateActive',
            name: 'SleeperCoachBUsCreateActive',
            component: SleeperCoachBUsCreateActive
        },
        {
            path: '/sleeperCoachCreateFilled',
            name: 'SleeperCoachCreateFilled',
            component: SleeperCoachCreateFilled
        },
        {
            path: '/stoppageCity',
            name: 'StoppageCity',
            component: StoppageCity
        },
        {
            path: '/stoppageCityNext',
            name: 'StoppageCityNext',
            component: StoppageCityNext
        },
        {
            path: '/stoppage',
            name: 'Stoppage',
            component: Stoppage
        },
        {
            path: '/stoppageNext',
            name: 'StoppageNext',
            component: StoppageNext
        },
        {
            path: '/challan',
            name: 'Challan',
            component: Challan
        },
        {
            path: '/fees',
            name: 'Fees',
            component: Fees
        },
        {
            path: '/operator',
            name: 'OperatorCharge',
            component: OperatorCharge
        },
        {
            path: '/systemUsageBill',
            name: 'SystemUsageBill',
            component: SystemUsageBill
        },
    ]

})

export default router