<template>
    <div class="h-screen w-[280px] bg-white border-r border-[#DBDBDB]">
      <div class="flex flex-col justify-between">
        <div class="px-[10px] flex justify-center items-center py-[30px]">
          <img alt="" class="w-[66px] h-[32px]" src="@/assets/imgs/Logo.png">
        </div>
        <div class="px-[10px] overflow-y-auto h-[calc(100vh-150px)]">
          <router-link to="/dashboard" :class="$route.path === '/dashboard' ? 'activeMenu' : 'menu mt-0' ">Dashboard</router-link>
          <router-link to="/company" :class="$route.path === '/company' ? 'activeMenu' : 'menu' ">Bus Company</router-link>
          <router-link to="/routes" :class="$route.path === '/routes' ? 'activeMenu' : 'menu' ">Routes</router-link>
          <router-link to="/counter" :class="$route.path === '/counter' ? 'activeMenu' : 'menu' ">Counter</router-link>
          <router-link to="/trips" :class="$route.path === '/trips' ? 'activeMenu' : 'menu' ">Trips</router-link>
          <router-link to="/user" :class="$route.path === '/user' ? 'activeMenu' : 'menu' ">User</router-link>
          <router-link to="/agent" :class="$route.path === '/agent' ? 'activeMenu' : 'menu' ">Agent</router-link>
          <router-link to="/manageTrip" :class="$route.path === '/manageTrip' ? 'activeMenu' : 'menu' ">Manage Trips</router-link>
          <router-link to="/migrateTicket" :class="$route.path === '/migrateTicket' ? 'activeMenu' : 'menu' ">Migrate Tickets</router-link>
          <router-link to="/tripExpenseConfiguration" :class="$route.path === '/tripExpenseConfiguration' ? 'activeMenu' : 'menu' ">Trip Expense Configaration</router-link>

          <!-- <router-link to="" :class="$route.path === '' ? 'bg-corporate w-full text-white p-1 rounded-sm block cursor-pointer' : 'menu dropDownMenu flex justify-center items-center'">
            Reports <span><img alt="" class="w-[12px] h-[7px]" src="../assets/svg/down_arrow.svg"></span>
          </router-link> -->

          <ul class="border-b border-corporateBorder pb-1">
            <dropdown-menu height="min-h-[138px]" title="Reports">
                <router-link to="" :class="$route.path === '' ? 'activeMenu' : 'menu border-b border-dashed p-[10px]' ">Operator Wise Sales</router-link>
                <router-link to="" :class="$route.path === '' ? 'activeMenu' : 'menu border-b border-dashed p-[10px]' ">Counter Wise Sales</router-link>
                <router-link to="" :class="$route.path === '' ? 'activeMenu' : 'menu border-b border-dashed p-[10px]' ">User Wise Sales</router-link>
                <router-link to="" :class="$route.path === '' ? 'activeMenu' : 'menu border-b border-dashed p-[10px]' ">Sub-Route Wise Sales</router-link>
                <router-link to="" :class="$route.path === '' ? 'activeMenu' : 'menu border-b border-dashed p-[10px]' ">Bus Wise Sales</router-link>
                <router-link to="" :class="$route.path === '' ? 'activeMenu' : 'menu border-b border-dashed p-[10px]' ">Trip Wise Sales</router-link>
                <router-link to="" :class="$route.path === '' ? 'activeMenu' : 'menu border-b border-dashed p-[10px]' ">Cancel Trip Report</router-link>
                <router-link to="" :class="$route.path === '' ? 'activeMenu' : 'menu border-b border-dashed p-[10px]' ">Cancel Ticket Report</router-link>
                <router-link to="" :class="$route.path === '' ? 'activeMenu' : 'menu border-b border-dashed p-[10px]' ">Reserve Ticket Report</router-link>
                <router-link to="" :class="$route.path === '' ? 'activeMenu' : 'menu p-[10px]' ">Discount Report</router-link>
            </dropdown-menu>
          </ul>
          
          <!-- <router-link to="" :class="$route.path === '' ? 'bg-corporate w-full text-white p-1 rounded-sm block cursor-pointer' : 'menu dropDownMenu flex justify-center items-center'">
            Invoice <span><img alt="" class="w-[12px] h-[7px]" src="../assets/svg/down_arrow.svg"></span>
          </router-link> -->

          <ul class="border-b border-corporateBorder pb-1">
            <dropdown-menu height="min-h-[138px]" title="Invoice">
                <router-link to="" :class="$route.path === '' ? 'activeMenu' : 'menu border-b border-dashed p-[10px]' ">Preodic Due Bill</router-link>
                <router-link to="/invoiceCurrentbill" :class="$route.path === '/invoiceCurrentbill' ? 'activeMenu px-2' : 'menu border-b border-dashed p-[10px]' ">Current Due</router-link>
                <router-link to="/invoiceGeneratebill" :class="$route.path === '/invoiceGeneratebill' ? 'activeMenu px-2' : 'menu border-b border-dashed p-[10px]' ">Generate Bill</router-link>
                <router-link to="" :class="$route.path === '' ? 'activeMenu' : 'menu p-[10px]' ">Bill Adjustment</router-link>
            </dropdown-menu>
          </ul>

          <router-link to="/offer" :class="$route.path === '/offer' ? 'activeMenu' : 'menu' ">Offer & Promotion</router-link>
          
          <!-- <router-link to="" :class="$route.path === '' ? 'bg-corporate w-full text-white p-1 rounded-sm block cursor-pointer' : 'menu dropDownMenu flex justify-center items-center'">
            Action in Bulk <span><img alt="" class="w-[12px] h-[7px]" src="../assets/svg/down_arrow.svg"></span>
          </router-link> -->

          <ul class="border-b border-corporateBorder pb-1">
            <dropdown-menu height="min-h-[138px]" title="Action in Bulk">
                <router-link to="" :class="$route.path === '' ? 'activeMenu' : 'menu border-b border-dashed p-[10px]' ">Fare Update</router-link>
                <router-link to="" :class="$route.path === '' ? 'activeMenu' : 'menu border-b border-dashed p-[10px]' ">Update Stoppage Time</router-link>
                <router-link to="" :class="$route.path === '' ? 'activeMenu' : 'menu border-b border-dashed p-[10px]' ">Trip Actions</router-link>
                <router-link to="" :class="$route.path === '' ? 'activeMenu' : 'menu border-b border-dashed p-[10px]' ">Online/Offline Access</router-link>
                <router-link to="" :class="$route.path === '' ? 'activeMenu' : 'menu border-b border-dashed p-[10px]' ">Date Range Permission</router-link>
                <router-link to="" :class="$route.path === '' ? 'activeMenu' : 'menu p-[10px]' ">Qouta Release</router-link>
            </dropdown-menu>
          </ul>

          <p class="menuSection">CONFIGARATION</p>
          <router-link to="" :class="$route.path === '' ? 'activeMenu' : 'menu' ">Bus</router-link>
          <router-link to="" :class="$route.path === '' ? 'activeMenu' : 'menu' ">Stopage</router-link>
          <router-link to="" :class="$route.path === '' ? 'activeMenu' : 'menu' ">Challan Configaration</router-link>
          <router-link to="" :class="$route.path === '' ? 'activeMenu' : 'menu' ">Fees</router-link>
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