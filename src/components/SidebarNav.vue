<template>
  <div class="h-screen w-[280px] bg-white border-r border-[#DBDBDB]">
    <div class="flex flex-col justify-between">
      <div class="px-[10px] flex justify-center items-center py-[30px]">
        <img alt="" class="w-[66px] h-[32px]" src="@/assets/imgs/Logo.png">
      </div>
      <div class="px-[10px] overflow-y-auto h-[calc(100vh-150px)]">
        <router-link :class="$route.path === '/dashboard' ? 'activeMenu' : 'menu mt-0' " to="/dashboard">Dashboard
        </router-link>
        <router-link :class="$route.path === '/company' ? 'activeMenu' : 'menu' " to="/company">Bus Company
        </router-link>
        <router-link :class="$route.path === '/routes' ? 'activeMenu' : 'menu' " to="/routes">Routes</router-link>
        <router-link :class="$route.path === '/counter' ? 'activeMenu' : 'menu' " to="/counter">Counter</router-link>
        <router-link :class="$route.path === '/trips' ? 'activeMenu' : 'menu' " to="/trips">Trips</router-link>
        <router-link :class="$route.path === '/user' ? 'activeMenu' : 'menu' " to="/user">User</router-link>
        <router-link :class="$route.path === '/agent' ? 'activeMenu' : 'menu' " to="/agent">Agent</router-link>
        <router-link :class="$route.path === '/migrateTrip' ? 'activeMenu' : 'menu' " to="/migrateTrip">Migrate Trips
        </router-link>
        <router-link :class="$route.path === '/migrateTicket' ? 'activeMenu' : 'menu' " to="/migrateTicket">Migrate
          Tickets
        </router-link>
        <router-link :class="$route.path === '/tripExpenseConfiguration' ? 'activeMenu' : 'menu' "
                     to="/tripExpenseConfiguration">Trip Expense
          Configaration
        </router-link>

        <!-- <router-link to="" :class="$route.path === '' ? 'bg-corporate w-full text-white p-1 rounded-sm block cursor-pointer' : 'menu dropDownMenu flex justify-center items-center'">
          Reports <span><img alt="" class="w-[12px] h-[7px]" src="../assets/svg/down_arrow.svg"></span>
        </router-link> -->

        <ul class="border-b border-corporateBorder">
          <dropdown-menu height="min-h-[138px]" title="Reports">
            <router-link :class="$route.path === '/operatorWiseSales' ? 'activeMenu' : 'menu border-b border-dashed p-[10px]' " to="/operatorWiseSales">
              Operator Wise Sales
            </router-link>
            <router-link :class="$route.path === '/counterWiseSales' ? 'activeMenu' : 'menu border-b border-dashed p-[10px]' " to="/counterWiseSales">
              Counter Wise Sales
            </router-link>
            <router-link :class="$route.path === '/userWiseSales' ? 'activeMenu' : 'menu border-b border-dashed p-[10px]' " to="/userWiseSales">User
              Wise Sales
            </router-link>
            <router-link :class="$route.path === '/routeWiseSales' ? 'activeMenu' : 'menu border-b border-dashed p-[10px]' " to="/routeWiseSales">
              Route Wise Sales
            </router-link>
            <router-link :class="$route.path === '/subrouteWiseSales' ? 'activeMenu' : 'menu border-b border-dashed p-[10px]' " to="/subrouteWiseSales">
              Sub-Route Wise Sales
            </router-link>
            <router-link :class="$route.path === '/busWiseSales' ? 'activeMenu' : 'menu border-b border-dashed p-[10px]' " to="/busWiseSales">
              Bus Wise Sales
            </router-link>
            <router-link :class="$route.path === '/tripWiseSales' ? 'activeMenu' : 'menu border-b border-dashed p-[10px]' " to="/tripWiseSales">
              Trip Wise Sales
            </router-link>
            <router-link :class="$route.path === '/cancelTripReport' ? 'activeMenu' : 'menu border-b border-dashed p-[10px]' " to="/cancelTripReport">
              Cancel Trip Report
            </router-link>
            <router-link :class="$route.path === '/cancelTicketReport' ? 'activeMenu' : 'menu border-b border-dashed p-[10px]' " to="/cancelTicketReport">
              Cancel Ticket Report
            </router-link>
            <router-link :class="$route.path === '/reserveTicket' ? 'activeMenu' : 'menu border-b border-dashed p-[10px]' " to="/reserveTicket">
              Reserve Ticket Report
            </router-link>
            <router-link :class="$route.path === '/discountReport' ? 'activeMenu' : 'menu p-[10px]' " to="/discountReport">
              Discount Report
            </router-link>
            <router-link :class="$route.path === '/TripMigrationReport' ? 'activeMenu' : 'menu p-[10px]' " to="/TripMigrationReport">
              Trip Migration Report
            </router-link>
            <router-link :class="$route.path === '/totalLogHistory' ? 'activeMenu' : 'menu p-[10px]' " to="/totalLogHistory">
              Total Log History
            </router-link>
            <router-link :class="$route.path === '/jatriSalesReport' ? 'activeMenu' : 'menu p-[10px]' " to="/jatriSalesReport">
              Jatri Sales Report
            </router-link>
            <router-link :class="$route.path === '/busTypeWiseSales' ? 'activeMenu' : 'menu p-[10px]' " to="/busTypeWiseSales">
              Bus Type Wise Sales
            </router-link>
            <router-link :class="$route.path === '' ? 'activeMenu' : 'menu p-[10px]' " to="">
              Insurrance Sales
            </router-link>
            <router-link :class="$route.path === '/userLogSessionReport' ? 'activeMenu' : 'menu p-[10px]' " to="/userLogSessionReport">
              User Log Session Report
            </router-link>
          </dropdown-menu>
        </ul>

        <!-- <router-link to="" :class="$route.path === '' ? 'bg-corporate w-full text-white p-1 rounded-sm block cursor-pointer' : 'menu dropDownMenu flex justify-center items-center'">
          Invoice <span><img alt="" class="w-[12px] h-[7px]" src="../assets/svg/down_arrow.svg"></span>
        </router-link> -->

        <ul class="border-b border-corporateBorder">
          <dropdown-menu height="min-h-[138px]" title="Invoice">
            <router-link :class="$route.path === '/invoice' ? 'activeMenu' : 'menu border-b border-dashed p-[10px]' "
                         to="/invoice">
              Preodic Due Bill
            </router-link>
            <router-link
                :class="$route.path === '/invoiceCurrentbill' ? 'activeMenu px-2' : 'menu border-b border-dashed p-[10px]' "
                to="/invoiceCurrentbill">
              Current Due
            </router-link>
            <router-link
                :class="$route.path === '/invoiceGeneratebill' ? 'activeMenu px-2' : 'menu border-b border-dashed p-[10px]' "
                to="/invoiceGeneratebill">
              Generate Bill
            </router-link>
            <router-link :class="$route.path === '' ? 'activeMenu' : 'menu p-[10px]' " to="">Bill Adjustment
            </router-link>
          </dropdown-menu>
        </ul>

        <router-link :class="$route.path === '/offer' ? 'activeMenu' : 'menu' " to="/offer">Offer & Promotion
        </router-link>

        <!-- <router-link to="" :class="$route.path === '' ? 'bg-corporate w-full text-white p-1 rounded-sm block cursor-pointer' : 'menu dropDownMenu flex justify-center items-center'">
          Action in Bulk <span><img alt="" class="w-[12px] h-[7px]" src="../assets/svg/down_arrow.svg"></span>
        </router-link> -->

        <ul class="border-b border-corporateBorder">
          <dropdown-menu height="min-h-[138px]" title="Action in Bulk">
            <router-link
                :class="$route.path === '/actionFareUpdate' ? 'activeMenu' : 'menu border-b border-dashed p-[10px]' "
                to="/actionFareUpdate">
              Fare Update
            </router-link>
            <router-link
                :class="$route.path === '/updateStopageTime' ? 'activeMenu' : 'menu border-b border-dashed p-[10px]' "
                to="/updateStopageTime">
              Update Stoppage Time
            </router-link>
            <router-link :class="$route.path === '/tripAction' ? 'activeMenu' : 'menu border-b border-dashed p-[10px]' "
                         to="/tripAction">Trip
              Actions
            </router-link>
            <router-link
                :class="$route.path === '/offlineAccess' ? 'activeMenu' : 'menu border-b border-dashed p-[10px]' "
                to="/offlineAccess">
              Online/Offline Access
            </router-link>
            <router-link
                :class="$route.path === '/dateRangePermission' ? 'activeMenu' : 'menu border-b border-dashed p-[10px]' "
                to="/dateRangePermission">Date
              Range Permission
            </router-link>
            <router-link :class="$route.path === '/quotaRelease' ? 'activeMenu' : 'menu p-[10px]' " to="/quotaRelease">
              Qouta Release
            </router-link>
          </dropdown-menu>
        </ul>

        <p class="menuSection">CONFIGARATION</p>
        <router-link :class="$route.path === '/bus' ? 'activeMenu' : 'menu border-b border-dashed p-[10px]' "
                     to="/bus">
          Bus
        </router-link>
        <router-link :class="$route.path === '' ? 'activeMenu' : 'menu' " to="">Stopage</router-link>
        <router-link :class="$route.path === '' ? 'activeMenu' : 'menu' " to="">Challan Configaration</router-link>
        <router-link :class="$route.path === '' ? 'activeMenu' : 'menu' " to="">Fees</router-link>
      </div>
      <button class="p-4 flex justify-center items-center gap-x-4 border-t border-[#DBDBDB]">
        <img alt="" class="h-[16px] w-[16px]" src="../assets/svg/logout.svg"> Logout
      </button>
    </div>
  </div>
</template>

<style>
select {
  /* for Firefox */
  -moz-appearance: none;
  /* for Chrome */
  -webkit-appearance: none;
}

.p-dropdown .p-dropdown-label.p-placeholder {
  color: #6c757d;
  font-size: 14px;
}

.p-dropdown-label.p-inputtext {
  padding: 10px 10px !important;
}

/* For IE10 */
select::-ms-expand {
  display: none;
}

.p-dropdown-label.p-inputtext {
  padding: 5px 10px !important;
}

.p-dropdown-panel .p-dropdown-items .p-dropdown-item:not(:last-child), .p-dropdown-panel .p-dropdown-items .p-dropdown-item:not(:last-child):hover {
  border-bottom: 1px dotted #DBDBDB;
}

.dropdown-menu .activeMenu {
  padding: 4px 8px;
}
</style>

<script>
import DropdownMenu from "../components/DropdownMenu.vue";

export default {
  name: "sidebarNav",
  components: {
    DropdownMenu
  }
}
</script>