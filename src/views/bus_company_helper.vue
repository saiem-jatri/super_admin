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
            <p class="lg:leading-[16px] xl:leading-[28px] lg:text-[14px] xl:text-[20px] font-[600] text-primaryText">Helper</p>
            <div class="flex justify-center items-center gap-x-[6px]">
              <p class="text-secondaryText leading-[12px] text-[8px] xl:leading-[16px] xl:text-[12px] font-[400]">Company</p>
              <img src="../assets/svg/bgBack.svg" alt="" class="w-1 h-2">
              <p class="text-secondaryText leading-[12px] text-[8px] xl:leading-[16px] xl:text-[12px] font-[400]">Desh Travels Limited</p>
              <img src="../assets/svg/bgBack.svg" alt="" class="w-1 h-2">
              <p class="text-secondaryText leading-[12px] text-[8px] xl:leading-[16px] xl:text-[12px] font-[400]">Manage</p>
              <img src="../assets/svg/bgBack.svg" alt="" class="w-1 h-2">
              <p class="text-secondaryText leading-[12px] text-[8px] xl:leading-[16px] xl:text-[12px] font-[400]">Staff</p>
              <img src="../assets/svg/bgBack.svg" alt="" class="w-1 h-2">
              <p class="text-secondaryText leading-[12px] text-[8px] xl:leading-[16px] xl:text-[12px] font-[400]">Helper</p>
            </div>
          </div>
        </div>
        <div class="flex gap-x-2 p-4 justify-center items-center mr-6 ">
            <router-link to="/BusCompanyCreateHelper" class="topBarAddButton">
              <span><img src="../assets/svg/plus.svg" class="h-[9.33px] w-[9.33px]" alt=""></span>Add helper
            </router-link>
            
            <img src="../assets/person/person1.png" alt="" class="h-[30px] xl:h-[40px] w-[30px] xl:w-[40px] rounded-full">
            <p class="text-[#151414] leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[500]">Mostafa Mamun Emon</p>
            <img src="../assets/person/downArrow.svg" alt="" class="w-[12px] h-[6px]">
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
      <div class="mt-[16px] bg-white">
          <div class="p-4 flex justify-between items-center">
            <div class="flex justify-start items-center gap-x-4 w-full">
              <div class="w-1/4 xl:w-1/5">
                <p class="text-primaryText leading-[20px] text-[14px] xl:leading-[24px] xl:text-[16px] font-[600]">Staff type</p>
                <Dropdown class="w-full p-[1px] mt-[10px] placeholder:text-primaryText placeholder:leading-[16px] placeholder:text-[12px] xl:placeholder:leading-[20px] xl:placeholder:text-[14px]" v-model="selectedCity" :options="cities" optionLabel="name" placeholder="Supervisor" />
              </div>
              <div class="w-1/4 xl:w-1/5">
                <div class="flex justify-between items-center w-full">
                  <p class="text-primaryText leading-[20px] text-[14px] xl:leading-[24px] xl:text-[16px] font-[600]">Name</p>
                </div>
                <input type="text" class="focus:outline-none mt-[10px] w-full border border-[#DBDBDB] rounded-[4px] pl-2 py-2 placeholder:text-[#676769] placeholder:leading-[16px] placeholder:text-[12px] xl:placeholder:leading-[20px] xl:placeholder:text-[14px]" placeholder="Enter name">
              </div>

              <div class="w-1/4 xl:w-1/5">
                <div class="flex justify-between items-center w-full">
                  <p class="text-primaryText leading-[20px] text-[14px] xl:leading-[24px] xl:text-[16px] font-[600]">Mobile number</p>
                </div>
                <input type="text" class="focus:outline-none mt-[10px] w-full border border-[#DBDBDB] rounded-[4px] pl-2 py-2 placeholder:text-[#676769] placeholder:leading-[16px] placeholder:text-[12px] xl:placeholder:leading-[20px] xl:placeholder:text-[14px]" placeholder="Enter mobile number">
              </div>
            </div>
            <button class="flex gap-x-[9px] justify-center items-center bg-corporate text-white leading-[14px] xl:leading-[16px] text-[11px] xl:text-[12px] font-[500] py-3 pl-[17px] pr-[24px] rounded-full"><span>
              <img src="../assets/svg/white_search.svg" class="w-[25px] xl:w-[20px] xl:h-[20px]" alt="">
            </span>Search</button>
          </div>
      </div>
      <div class="bg-white rounded-[8px] mt-4">
        <!-- table start -->
        <table class="min-w-full">
          <thead>
          <tr class="bg-[#4D4D4F] h-[36px]">
            <th scope="col" class="companyTableHead" style="border-radius: 8px 0 0 0">
              SL
            </th>
            <th scope="col" class="companyTableHead">
                HELPER NAME
            </th>
            <th scope="col" class="companyTableHead">
              MOBILE
            </th>

            <th scope="col" class="companyTableHead">
              Email
            </th>
            <th scope="col" class="companyTableHead">
              STATUS
            </th>
            <th scope="col" class="companyTableHead" style="border-radius: 0 8px 0 0">
              ACTION
            </th>
          </tr>
          </thead>
          <tbody>
          <tr class="border-b border-[#EDEDED]">
            <td class="text-primaryText border-r border-[#DBDBDB] text-center leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px]">01</td>
            <td class="text-primaryText border-r border-[#DBDBDB] text-center leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px]">
              Fahim Ahmed
            </td>
            <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText">
              +8801708630439
            </td>
            <td class="leading-[20px] text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText">
              owner.mail@gmail.com
            </td>
            <td class="border-r border-[#DBDBDB]">
              <div class="flex justify-center items-center">
                <p class="companyTableStatus">Active</p>
              </div>
            </td>
            <td class="border-r border-[#DBDBDB]">
              <div class="py-[5px] px-[18px] flex justify-center items-center gap-x-[16px]">
                <button class="companyEditButton"><span><img src="../assets/svg/edit.svg" class="w-3 h-3" alt=""></span>Edit</button>
              </div>
            </td>
          </tr>
          <tr class="border-b border-[#EDEDED]">
            <td class="text-primaryText border-r border-[#DBDBDB] text-center leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px]">01</td>
            <td class="text-primaryText border-r border-[#DBDBDB] text-center leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px]">
              Fahim Ahmed
            </td>
            <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText">
              +8801708630439
            </td>
            <td class="leading-[20px] text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText">
              owner.mail@gmail.com
            </td>
            <td class="border-r border-[#DBDBDB]">
              <div class="flex justify-center items-center">
                <p class="companyTableStatus">Active</p>
              </div>
            </td>
            <td class="border-r border-[#DBDBDB]">
              <div class="py-[5px] px-[18px] flex justify-center items-center gap-x-[16px]">
                <button class="companyEditButton"><span><img src="../assets/svg/edit.svg" class="w-3 h-3" alt=""></span>Edit</button>
              </div>
            </td>
          </tr>
          <tr class="border-b border-[#EDEDED]">
            <td class="text-primaryText border-r border-[#DBDBDB] text-center leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px]">01</td>
            <td class="text-primaryText border-r border-[#DBDBDB] text-center leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px]">
              Fahim Ahmed
            </td>
            <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText">
              +8801708630439
            </td>
            <td class="leading-[20px] text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText">
              owner.mail@gmail.com
            </td>
            <td class="border-r border-[#DBDBDB]">
              <div class="flex justify-center items-center">
                <p class="companyTableStatus">Active</p>
              </div>
            </td>
            <td class="border-r border-[#DBDBDB]">
              <div class="py-[5px] px-[18px] flex justify-center items-center gap-x-[16px]">
                <button class="companyEditButton"><span><img src="../assets/svg/edit.svg" class="w-3 h-3" alt=""></span>Edit</button>
              </div>
            </td>
          </tr>
          <tr class="border-b border-[#EDEDED]">
            <td class="text-primaryText border-r border-[#DBDBDB] text-center leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px]">01</td>
            <td class="text-primaryText border-r border-[#DBDBDB] text-center leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px]">
              Fahim Ahmed
            </td>
            <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText">
              +8801708630439
            </td>
            <td class="leading-[20px] text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText">
              owner.mail@gmail.com
            </td>
            <td class="border-r border-[#DBDBDB]">
              <div class="flex justify-center items-center">
                <p class="companyTableStatus">Active</p>
              </div>
            </td>
            <td class="border-r border-[#DBDBDB]">
              <div class="py-[5px] px-[18px] flex justify-center items-center gap-x-[16px]">
                <button class="companyEditButton"><span><img src="../assets/svg/edit.svg" class="w-3 h-3" alt=""></span>Edit</button>
              </div>
            </td>
          </tr>
          <tr class="border-b border-[#EDEDED]">
            <td class="text-primaryText border-r border-[#DBDBDB] text-center leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px]">01</td>
            <td class="text-primaryText border-r border-[#DBDBDB] text-center leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px]">
              Fahim Ahmed
            </td>
            <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText">
              +8801708630439
            </td>
            <td class="leading-[20px] text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText">
              owner.mail@gmail.com
            </td>
            <td class="border-r border-[#DBDBDB]">
              <div class="flex justify-center items-center">
                <p class="companyTableStatus">Active</p>
              </div>
            </td>
            <td class="border-r border-[#DBDBDB]">
              <div class="py-[5px] px-[18px] flex justify-center items-center gap-x-[16px]">
                <button class="companyEditButton"><span><img src="../assets/svg/edit.svg" class="w-3 h-3" alt=""></span>Edit</button>
              </div>
            </td>
          </tr>
          <tr class="border-b border-[#EDEDED]">
            <td class="text-primaryText border-r border-[#DBDBDB] text-center leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px]">01</td>
            <td class="text-primaryText border-r border-[#DBDBDB] text-center leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px]">
              Fahim Ahmed
            </td>
            <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText">
              +8801708630439
            </td>
            <td class="leading-[20px] text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText">
              owner.mail@gmail.com
            </td>
            <td class="border-r border-[#DBDBDB]">
              <div class="flex justify-center items-center">
                <p class="companyTableStatus">Active</p>
              </div>
            </td>
            <td class="border-r border-[#DBDBDB]">
              <div class="py-[5px] px-[18px] flex justify-center items-center gap-x-[16px]">
                <button class="companyEditButton"><span><img src="../assets/svg/edit.svg" class="w-3 h-3" alt=""></span>Edit</button>
              </div>
            </td>
          </tr>
          </tbody>
        </table>
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
