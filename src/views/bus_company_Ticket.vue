<template>
      <!-- Top nav bar start-->
      <div class="bg-white h-[72px] sticky top-0 border-b border-[#DBDBDB] z-10 px-[32px]">
        <div class="flex justify-between">
          <div class="flex justify-center items-center gap-x-[32px]">

            <button class="flex justify-center items-center gap-x-[10px]">
              <img src="../assets/svg/Back.svg" class="w-[12px] h-[12px]" alt="">
              <p class="text-primaryText leading-[12px] text-[10px] xl:leading-[16px] xl:text-[12px] font-[500]">Back</p>
            </button>
            <div class="flex flex-col gap-y-[4px]">
              <p class="lg:leading-[16px] xl:leading-[28px] lg:text-[14px] xl:text-[20px] font-[600] text-primaryText">Ticket</p>
              <div class="flex justify-center items-center gap-x-[6px]">
                <p class="text-secondaryText leading-[12px] text-[8px] xl:leading-[16px] xl:text-[12px] font-[400]">Company</p>
                <img src="../assets/svg/bgBack.svg" alt="" class="w-1 h-2">
                <p class="text-secondaryText leading-[12px] text-[8px] xl:leading-[16px] xl:text-[12px] font-[400]">Desh Travels Limited</p>
                <img src="../assets/svg/bgBack.svg" alt="" class="w-1 h-2">
                <p class="text-secondaryText leading-[12px] text-[8px] xl:leading-[16px] xl:text-[12px] font-[400]">Manage</p>
                <img src="../assets/svg/bgBack.svg" alt="" class="w-1 h-2">
                <p class="text-secondaryText leading-[12px] text-[8px] xl:leading-[16px] xl:text-[12px] font-[400]">Ticket</p>
              </div>
            </div>
          </div>
          <div class="flex gap-x-[24px] p-4 w-1/2 justify-end items-center pr-2 ">
            <!--            <input type="text" class="w-[270px] h-[40px] border border-[#DBDBDB] placeholder:text-[#4D4D4F] placeholder:text-[14px] leading-[20px] rounded-[4px] pl-8 focus:outline-none" placeholder="PNR or mobile number">-->
            <!--            <img src="../assets/svg/search.svg" class="h-5 w-5 absolute left-[242px]" alt="">-->
            <div class="w-[200px] h-[30px] xl:w-[270px] xl:h-[40px] border border-[#DBDBDB] flex justify-center items-center rounded-[4px] pl-[9px] gap-x-2" >
              <img src="../assets/svg/search.svg" class="h-2 w-2 xl:h-5 xl:w-5 mt-1" alt="">
              <input type="text" class="outline-none placeholder:text-[#4D4D4F] w-[90%] placeholder:text-[8px] placeholder:leading-[16px] xl:placeholder:text-[14px] xl:placeholder:leading-[20px]" placeholder="PNR or mobile number">
            </div>
            <div class="flex justify-center items-center gap-x-1">
              <img src="../assets/person/person1.png" alt="" class="h-[30px]  w-[30px] xl:h-[40px] xl:w-[40px] rounded-full">
              <p class="text-[#151414] leading-[16px] text-[10px] xl:leading-[24px] xl:text-[16px] font-[500]">Mostafa Mamun Emon</p>
              <img src="../assets/person/downArrow.svg" alt="" class="w-[12px] h-[6px]">
            </div>
          </div>
        </div>
      </div>
      <!-- top nav bar end -->
      <!-- body start-->
      <div class="px-[30px] py-[24px]">
        <!--        tab start-->
        <div class="border-b border-[#EDEDED]">
          <div class="flex justify-start items-center">
            <router-link to="/companyOwner" :class="$route.path === '/companyOwner' ? 'companyOwnerTabActive' : 'companyOwnerTabNonActive' ">Owner</router-link>
            <router-link to="/busCompanyTabsRoute" :class="$route.path === '/busCompanyTabsRoute' ? 'companyOwnerTabActive' : 'companyOwnerTabNonActive' ">Routes</router-link>
            <router-link to="/busCompanyTabsCounter" :class="$route.path === '/busCompanyTabsCounter' ? 'companyOwnerTabActive' : 'companyOwnerTabNonActive' ">Counter</router-link>
            <router-link to="/busCompanyTabsTrips" :class="$route.path === '/busCompanyTabsTrips' ? 'companyOwnerTabActive' : 'companyOwnerTabNonActive' ">Trips</router-link>
            <router-link to="/busCompanyTabsAgent" :class="$route.path === '/busCompanyTabsAgent' ? 'companyOwnerTabActive' : 'companyOwnerTabNonActive' ">Agent</router-link>
            <router-link to="/counterman" :class="$route.path === '/counterman' ? 'companyOwnerTabActive' : 'companyOwnerTabNonActive' ">Counterman</router-link>
            <router-link to="/supervisor" :class="$route.path === '/supervisor' ? 'companyOwnerTabActive' : 'companyOwnerTabNonActive' ">Staffs</router-link>
            <router-link to="/companyTicket" :class="$route.path === '/companyTicket' ? 'companyOwnerTabActive' : 'companyOwnerTabNonActive' ">Ticket</router-link>
          </div>
        </div>
        <!--        card-->
        <div class="mt-4 bg-white rounded-[10px]">
          <div class="p-4">
            <p class="text-primaryText leading-[20px] text-[14px] font-[600]">3 part ticket</p>
            <img src="../assets/svg/skelaton.svg" class="mt-4" alt="">

           <div class="flex justify-between  mt-4">
             <p class="text-primaryText leading-[20px] text-[14px] font-[600]">Ticket format name</p>
             <a href="#" class="text-primaryText leading-[16px] text-[12px] font-[600] border-b border-primaryText">Edit</a>
           </div>
            <img src="../assets/svg/ticket.svg" alt="" class="h-full w-full mt-4 ">



            <p class="text-primaryText leading-[20px] text-[14px] font-[600] mt-5">2 part ticket</p>
            <img src="../assets/svg/skelaton.svg" class="mt-4" alt="">

            <div class="flex justify-between  mt-4">
              <p class="text-primaryText leading-[20px] text-[14px] font-[600]">Ticket format name</p>
              <a href="#" class="text-primaryText leading-[16px] text-[12px] font-[600] border-b border-primaryText">Edit</a>
            </div>
            <img src="../assets/svg/ticket.svg" alt="" class="h-full w-full mt-4 ">
          </div>
        </div>
      </div>
</template>

<style scoped>
select {
  /* for Firefox */
  -moz-appearance: none;
  /* for Chrome */
  -webkit-appearance: none;
}

/* For IE10 */
select::-ms-expand {
  display: none;
}

.p-dropdown-label.p-inputtext {
  padding: 5px 10px !important;
}
.p-dropdown-panel .p-dropdown-items .p-dropdown-item:not(:last-child), .p-dropdown-panel .p-dropdown-items .p-dropdown-item:not(:last-child):hover{
  border-bottom: 1px dotted #DBDBDB;
}
</style>
