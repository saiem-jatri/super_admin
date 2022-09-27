<template>
    <div class="h-screen w-[280px] bg-white border-r border-[#DBDBDB]">
      <div class="flex flex-col justify-between">
        <div class="px-[10px] flex justify-center items-center py-[30px]">
          <img alt="" class="w-[66px] h-[32px]" src="@/assets/imgs/Logo.png">
        </div>
        <div class="px-[10px] overflow-y-auto h-[calc(100vh-150px)]">
          <a class="menu">Dashboard</a>
          <a class="menu">Bus Company</a>
          <a class="menu">Routes</a>
          <a class="bg-corporate w-full text-white p-1 rounded-sm block cursor-pointer">Counter</a>
          <a class="menu">Trips</a>
          <a class="menu">User</a>
          <a class="menu">Agent</a>
          <a class="menu">Migrate Trips</a>
          <a class="menu">Migrate Tickets</a>
          <a class="menu">Trip Expense Configaration</a>
          <a class="dropDownMenu flex justify-center items-center">Reports <span><img alt=""
                                                                                      class="w-[12px] h-[7px]"
                                                                                      src="../assets/svg/down_arrow.svg"></span></a>
          <ul class="border-b border-corporateBorder pb-1">
            <dropdown-menu height="h-24" title="Invoice">
              <a class="block bg-corporate w-full text-white p-1 rounded-sm block cursor-pointer">Preodic Due Bill</a>
              <a class="block border-b border-dashed py-[10px] cursor-pointer">Current Due</a>
              <a class="block border-b border-dashed py-[10px] cursor-pointer">Generate Bill</a>
              <a class="block border-b border-dashed py-[10px] cursor-pointer">Bill Adjustment</a>
            </dropdown-menu>
          </ul>
          <a class="menu">Offer & Promotion</a>
          <a class="dropDownMenu flex justify-center items-center">Action in Bulk <span><img
              alt="" class="w-[12px] h-[7px]" src="../assets/svg/down_arrow.svg"></span></a>
          <p class="menuSection ">CONFIGARATION</p>
          <a class="menu">Bus</a>
          <a class="menu">Stopage</a>
          <a class="menu">Challan Configaration</a>
          <a class=" py-[8px] w-full text-black leading-[20px] text-[14px] font-[500] block cursor-pointer">Fees</a>
        </div>
        <button class="p-4 flex justify-center items-center gap-x-4 border-t border-[#DBDBDB]"><img
            alt="" class="h-[16px] w-[16px]" src="../assets/svg/logout.svg"> Logout
        </button>
      </div>

    </div>
</template>

<script>
    export default {
        name: "sidebarNav"
    }
</script>