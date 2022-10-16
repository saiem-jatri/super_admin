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
            <p class="lg:leading-[16px] xl:leading-[28px] lg:text-[14px] xl:text-[20px] font-[600] text-primaryText">Trips</p>
            <div class="flex justify-center items-center gap-x-[6px]">
              <p class="text-secondaryText leading-[12px] text-[8px] xl:leading-[16px] xl:text-[12px] font-[400]">Company</p>
              <img src="../assets/svg/bgBack.svg" alt="" class="w-1 h-2">
              <p class="text-secondaryText leading-[12px] text-[8px] xl:leading-[16px] xl:text-[12px] font-[400]">Desh Travels Limited</p>
              <img src="../assets/svg/bgBack.svg" alt="" class="w-1 h-2">
              <p class="text-secondaryText leading-[12px] text-[8px] xl:leading-[16px] xl:text-[12px] font-[400]">Manage</p>
              <img src="../assets/svg/bgBack.svg" alt="" class="w-1 h-2">
              <p class="text-secondaryText leading-[12px] text-[8px] xl:leading-[16px] xl:text-[12px] font-[400]">Trips</p>
            </div>
          </div>
        </div>
        <div class="flex gap-x-2 p-4 justify-center items-center">
            <router-link to="/tripsAdd" class="topBarAddButton">
              <span><img src="../assets/svg/plus.svg" class="h-[9.33px] w-[9.33px]" alt=""></span>Add Trips
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
            <router-link to="/busCompanyTabsRoute" :class="$route.path === '/busCompanyTabsRoute' ? 'companyOwnerTabActive' : 'companyOwnerTabNonActive' ">Route</router-link>
            <router-link to="/busCompanyTabsCounter" :class="$route.path === '/busCompanyTabsCounter' ? 'companyOwnerTabActive' : 'companyOwnerTabNonActive' ">Counter</router-link>
            <router-link to="/busCompanyTabsTrips" :class="$route.path === '/busCompanyTabsTrips' ? 'companyOwnerTabActive' : 'companyOwnerTabNonActive' ">Trips</router-link>
            <router-link to="/busCompanyTabsAgent" :class="$route.path === '/busCompanyTabsAgent' ? 'companyOwnerTabActive' : 'companyOwnerTabNonActive' ">Agent</router-link>
            <router-link to="/counterman" :class="$route.path === '/counterman' ? 'companyOwnerTabActive' : 'companyOwnerTabNonActive' ">Counterman</router-link>
            <router-link to="/supervisor" :class="$route.path === '/supervisor' ? 'companyOwnerTabActive' : 'companyOwnerTabNonActive' ">Staffs</router-link>
            <router-link to="/companyTicket" :class="$route.path === '/companyTicket' ? 'companyOwnerTabActive' : 'companyOwnerTabNonActive' ">Ticket</router-link>
          </div>
        </div>
        <!--        card-->
        <div class="bg-white rounded-[4px] mt-4">
          <div class="p-4 flex justify-between items-center">
            <div class="flex justify-start items-center gap-x-4 w-full">
              <div class="w-1/4">
                <p class="text-primaryText leading-[20px] text-[14px] xl:leading-[24px] xl:text-[16px] font-[600]">From</p>
                <Dropdown class="w-full py-[4px] mt-[10px] placeholder:text-primaryText placeholder:leading-[16px] placeholder:text-[12px] xl:placeholder:leading-[20px] xl:placeholder:text-[14px]" v-model="selectedCity" :options="cities" optionLabel="name" placeholder="Select location" />
              </div>

              <div class="w-1/4">
                <p class="text-primaryText leading-[20px] text-[14px] xl:leading-[24px] xl:text-[16px] font-[600]">To</p>
                <Dropdown class="w-full py-[4px] mt-[10px] placeholder:text-primaryText placeholder:leading-[16px] placeholder:text-[12px] xl:placeholder:leading-[20px] xl:placeholder:text-[14px]" v-model="selectedCity" :options="cities" optionLabel="name" placeholder="Select location" />
              </div>
              <div class="w-1/4">
                <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">Trip ID</p>
                <input type="text" class="createNormalInput" placeholder="Enter trip id">
              </div>
              <div class="w-1/4">
                <p class="text-primaryText leading-[20px] text-[14px] xl:leading-[24px] xl:text-[16px] font-[600]">Direction</p>
                <Dropdown class="w-full py-[4px] mt-[10px] placeholder:text-primaryText placeholder:leading-[16px] placeholder:text-[12px] xl:placeholder:leading-[20px] xl:placeholder:text-[14px]" v-model="selectedCity" :options="cities" optionLabel="name" placeholder="Select direction" />
              </div>
            </div>
          </div>
          <div class="flex justify-between items-center px-4 pt-1 pb-4">
              <div class="w-[24.2%]">
                <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">Trip date</p>
                <div class="w-full h-[40px] border border-[#DBDBDB] flex justify-between items-center mt-[10px] leading-[20px] rounded-[4px] px-[8px] overflow-hidden" >
                  <input type="text" class="outline-none pl-2 placeholder:text-[#4D4D4F] placeholder:text-[14px] placeholder:leading-[20px]" placeholder="Select date">
                  <img src="../assets/svg/count2.svg" class="h-5 w-5" alt="">
                </div>
            </div>

            <div class="mt-8">
              <button class="flex gap-x-[9px] justify-center items-center bg-corporate text-white leading-[14px] xl:leading-[16px] text-[11px] xl:text-[12px] font-[500] py-3 pl-[17px] pr-[24px] rounded-full"><span>
                <img src="../assets/svg/white_search.svg" class="w-[13px] xl:h-[13px]" alt="">
              </span>Search</button>
            </div>
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
                Route
              </th>

              <th scope="col" class="companyTableHead">
                Date & time
              </th>
              <th scope="col" class="companyTableHead">
                DIRECTION
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

              <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText">
                Dhaka - Tangail - Bogura - Rangpur
              </td>
              <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText">
                <div> 09:45 AM</div>
                <div>18 July 2022</div>
              </td>

              <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText">
                Up
              </td>
              <td class="border-r border-[#DBDBDB]">
                <div class="flex justify-center items-center">
              <button @click="openModal" class="flex justify-center items-center bg-[#E0293B] w-[140px] h-[35px] rounded gap-x-[8px] leading-[16px] xl:leading-[20px] text-[12px] xl:text-[14px] text-white"> <InputSwitch v-model="checked" /> Inactive</button>

              <Dialog header="Active trip?" v-model:visible="displayModal" :breakpoints="{'960px': '75vw', '640px': '90vw'}" :style="{width: '360px'}" :modal="true">
                <p class="text-[14px] leading-5">By confirming, trip status will be <strong>ACTIVE.</strong> Are you sure you want to switch the status from inactive to <strong>ACTIVE?</strong></p>
               <div class="mt-[30px] flex gap-x-8 justify-end items-center">
                  <button @click="closeModal" icon="pi pi-times" class="flex items-center gap-x-3 p-button-text text-[12px] leading-4 font-[500] text-[#E0293B]"> <img class="w-[10px] h-[10px] mt-[2px]" src="../assets/svg/close.svg" alt=""> Cancel</button>
                  <button @click="closeModal" icon="pi pi-check" autofocus class="flex items-center gap-x-3 bg-[#F04935] px-6 py-3 text-white text-[12px] leading-4 font-[500] rounded-[100px]"><img src="../assets/svg/check.svg" alt="">Confirm</button>
              </div>
              </Dialog>

                </div>
              </td>
              <td class="border-r border-[#DBDBDB]">
                <div class="py-[5px] px-[18px] flex justify-evenly items-center gap-x-[16px]">
                  <button class="flex justify-center items-center bg-[#EDEDED] gap-x-[10px] leading-[16px] text-[12px] font-[500] text-primaryText rounded-full w-[80px] h-[26px] xl:w-[90px] xl:h-[36px]"><span><img src="../assets/svg/ash_cross.svg" class="w-[8px] h-[8px]" alt=""></span>Cancel</button>
                  <button class="companyEditButton"><span><img src="../assets/svg/copy.svg" class="w-[16px] h-[231px]" alt=""></span>Copy</button>
                  <button class="flex justify-center items-center gap-x-[10px] bg-[#1E88E5] leading-[16px] text-[12px] font-[500] text-white rounded-full w-[80px] h-[26px] xl:w-[90px] xl:h-[36px]"><span><img src="../assets/svg/white_edit.svg" class="w-[16px] h-[231px]" alt=""></span>Edit</button>
                </div>
              </td>
            </tr>
            <tr class="border-b border-[#EDEDED]">
              <td class="text-primaryText border-r border-[#DBDBDB] text-center leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px]">01</td>

              <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText">
                Dhaka - Tangail - Bogura - Rangpur
              </td>
              <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText">
                <div> 09:45 AM</div>
                <div>18 July 2022</div>
              </td>

              <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText">
                Up
              </td>
              <td class="border-r border-[#DBDBDB]">
                <div class="flex justify-center items-center">
                  <button class="flex justify-center items-center bg-[#48A43F] w-[140px] h-[35px] rounded gap-x-[8px] leading-[16px] xl:leading-[20px] text-[12px] xl:text-[14px] text-white"> <InputSwitch v-model="checked" class="mr-2" /> Active</button>

                </div>
              </td>
              <td class="border-r border-[#DBDBDB]">
                <div class="py-[5px] px-[18px] flex justify-evenly items-center gap-x-[16px]">
                  <button class="flex justify-center items-center bg-[#EDEDED] gap-x-[10px] leading-[16px] text-[12px] font-[500] text-primaryText rounded-full w-[80px] h-[26px] xl:w-[90px] xl:h-[36px]"><span><img src="../assets/svg/ash_cross.svg" class="w-[8px] h-[8px]" alt=""></span>Cancel</button>
                  <button class="companyEditButton"><span><img src="../assets/svg/copy.svg" class="w-[16px] h-[231px]" alt=""></span>Copy</button>
                  <button class="flex justify-center items-center gap-x-[10px] bg-[#1E88E5] leading-[16px] text-[12px] font-[500] text-white rounded-full w-[80px] h-[26px] xl:w-[90px] xl:h-[36px]"><span><img src="../assets/svg/white_edit.svg" class="w-[16px] h-[231px]" alt=""></span>Edit</button>
                </div>
              </td>
            </tr>
            <tr class="border-b border-[#EDEDED]">
              <td class="text-primaryText border-r border-[#DBDBDB] text-center leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px]">01</td>

              <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText">
                Dhaka - Tangail - Bogura - Rangpur
              </td>
              <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText">
                <div> 09:45 AM</div>
                <div>18 July 2022</div>
              </td>

              <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText">
                Up
              </td>
              <td class="border-r border-[#DBDBDB]">
                <div class="flex justify-center items-center">
                  <button class="flex justify-center items-center bg-[#48A43F] w-[140px] h-[35px] rounded gap-x-[8px] leading-[16px] xl:leading-[20px] text-[12px] xl:text-[14px] text-white"> <InputSwitch v-model="checked" class="mr-2" /> Active</button>

                </div>
              </td>
              <td class="border-r border-[#DBDBDB]">
                <div class="py-[5px] px-[18px] flex justify-evenly items-center gap-x-[16px]">
                  <button class="flex justify-center items-center bg-[#EDEDED] gap-x-[10px] leading-[16px] text-[12px] font-[500] text-primaryText rounded-full w-[80px] h-[26px] xl:w-[90px] xl:h-[36px]"><span><img src="../assets/svg/ash_cross.svg" class="w-[8px] h-[8px]" alt=""></span>Cancel</button>
                  <button class="companyEditButton"><span><img src="../assets/svg/copy.svg" class="w-[16px] h-[231px]" alt=""></span>Copy</button>
                  <button class="flex justify-center items-center gap-x-[10px] bg-[#1E88E5] leading-[16px] text-[12px] font-[500] text-white rounded-full w-[80px] h-[26px] xl:w-[90px] xl:h-[36px]"><span><img src="../assets/svg/white_edit.svg" class="w-[16px] h-[231px]" alt=""></span>Edit</button>
                </div>
              </td>
            </tr>
            <tr class="border-b border-[#EDEDED]">
              <td class="text-primaryText border-r border-[#DBDBDB] text-center leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px]">01</td>

              <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText">
                Dhaka - Tangail - Bogura - Rangpur
              </td>
              <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText">
                <div> 09:45 AM</div>
                <div>18 July 2022</div>
              </td>

              <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText">
               Down
              </td>
              <td class="border-r border-[#DBDBDB]">
                <div class="flex justify-center items-center">
                  <button class="flex justify-center items-center bg-[#48A43F] w-[140px] h-[35px] rounded gap-x-[8px] leading-[16px] xl:leading-[20px] text-[12px] xl:text-[14px] text-white"> <InputSwitch v-model="checked" class="mr-2" /> Active</button>

                </div>
              </td>
              <td class="border-r border-[#DBDBDB]">
                <div class="py-[5px] px-[18px] flex justify-evenly items-center gap-x-[16px]">
                  <button class="flex justify-center items-center bg-[#EDEDED] gap-x-[10px] leading-[16px] text-[12px] font-[500] text-primaryText rounded-full w-[80px] h-[26px] xl:w-[90px] xl:h-[36px]"><span><img src="../assets/svg/ash_cross.svg" class="w-[8px] h-[8px]" alt=""></span>Cancel</button>
                  <button class="companyEditButton"><span><img src="../assets/svg/copy.svg" class="w-[16px] h-[231px]" alt=""></span>Copy</button>
                  <button class="flex justify-center items-center gap-x-[10px] bg-[#1E88E5] leading-[16px] text-[12px] font-[500] text-white rounded-full w-[80px] h-[26px] xl:w-[90px] xl:h-[36px]"><span><img src="../assets/svg/white_edit.svg" class="w-[16px] h-[231px]" alt=""></span>Edit</button>
                </div>
              </td>
            </tr>
            <tr class="border-b border-[#EDEDED]">
              <td class="text-primaryText border-r border-[#DBDBDB] text-center leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px]">01</td>

              <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText">
                Dhaka - Tangail - Bogura - Rangpur
              </td>
              <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText">
                <div> 09:45 AM</div>
                <div>18 July 2022</div>
              </td>

              <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText">
                Up
              </td>
              <td class="border-r border-[#DBDBDB]">
                <div class="flex justify-center items-center">
                  <button class="flex justify-center items-center bg-[#48A43F] w-[140px] h-[35px] rounded gap-x-[8px] leading-[16px] xl:leading-[20px] text-[12px] xl:text-[14px] text-white"> <InputSwitch v-model="checked" class="mr-2" /> Active</button>

                </div>
              </td>
              <td class="border-r border-[#DBDBDB]">
                <div class="py-[5px] px-[18px] flex justify-evenly items-center gap-x-[16px]">
                  <button class="flex justify-center items-center bg-[#EDEDED] gap-x-[10px] leading-[16px] text-[12px] font-[500] text-primaryText rounded-full w-[80px] h-[26px] xl:w-[90px] xl:h-[36px]"><span><img src="../assets/svg/ash_cross.svg" class="w-[8px] h-[8px]" alt=""></span>Cancel</button>
                  <button class="companyEditButton"><span><img src="../assets/svg/copy.svg" class="w-[16px] h-[231px]" alt=""></span>Copy</button>
                  <button class="flex justify-center items-center gap-x-[10px] bg-[#1E88E5] leading-[16px] text-[12px] font-[500] text-white rounded-full w-[80px] h-[26px] xl:w-[90px] xl:h-[36px]"><span><img src="../assets/svg/white_edit.svg" class="w-[16px] h-[231px]" alt=""></span>Edit</button>
                </div>
              </td>
            </tr>
            <tr class="border-b border-[#EDEDED]">
              <td class="text-primaryText border-r border-[#DBDBDB] text-center leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px]">01</td>

              <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText">
                Dhaka - Tangail - Bogura - Rangpur
              </td>
              <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText">
                <div> 09:45 AM</div>
                <div>18 July 2022</div>
              </td>

              <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText">
                Up
              </td>
              <td class="border-r border-[#DBDBDB]">
                <div class="flex justify-center items-center">
                  <button class="flex justify-center items-center bg-[#48A43F] w-[140px] h-[35px] rounded gap-x-[8px] leading-[16px] xl:leading-[20px] text-[12px] xl:text-[14px] text-white"> <InputSwitch v-model="checked" class="mr-2" /> Active</button>

                </div>
              </td>
              <td class="border-r border-[#DBDBDB]">
                <div class="py-[5px] px-[18px] flex justify-evenly items-center gap-x-[16px]">
                  <button class="flex justify-center items-center bg-[#EDEDED] gap-x-[10px] leading-[16px] text-[12px] font-[500] text-primaryText rounded-full w-[80px] h-[26px] xl:w-[90px] xl:h-[36px]"><span><img src="../assets/svg/ash_cross.svg" class="w-[8px] h-[8px]" alt=""></span>Cancel</button>
                  <button class="companyEditButton"><span><img src="../assets/svg/copy.svg" class="w-[16px] h-[231px]" alt=""></span>Copy</button>
                  <button class="flex justify-center items-center gap-x-[10px] bg-[#1E88E5] leading-[16px] text-[12px] font-[500] text-white rounded-full w-[80px] h-[26px] xl:w-[90px] xl:h-[36px]"><span><img src="../assets/svg/white_edit.svg" class="w-[16px] h-[231px]" alt=""></span>Edit</button>
                </div>
              </td>
            </tr>
            </tbody>
          </table>
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
.p-dropdown-panel .p-dropdown-items .p-dropdown-item:not(:last-child), .p-dropdown-panel .p-dropdown-items .p-dropdown-item:not(:last-child):hover{
  border-bottom: 1px dotted #DBDBDB;
}
.p-inputswitch-slider{
  height: 16px;
  width: 35px;
  margin-top: 6px;
}
.p-inputswitch .p-inputswitch-slider:before {
  background: #ffffff;
  width: 10px !important;
  height: 10px !important;
  left: 0;
  margin-top: -5px !important;
  border-radius: 50%;
  transition-duration: 0.2s;
}
.p-inputswitch .p-inputswitch-slider,
.p-inputswitch.p-inputswitch-checked .p-inputswitch-slider,
.p-inputswitch:not(.p-disabled):hover .p-inputswitch-slider {
    background: #fff !important;
}
.p-inputswitch .p-inputswitch-slider:before,
.p-inputswitch:not(.p-disabled):hover .p-inputswitch-slider:hover:before {
    background: #C8C8C8 !important;
}
.p-inputswitch.p-inputswitch-checked .p-inputswitch-slider:before {
    background: #48A43F !important;
}

.p-dialog .p-dialog-header {
  justify-content: center;
  padding: 24px 16px 16px;
}
.p-dialog .p-dialog-header-icons {
  display: none !important;
}
.p-dialog .p-dialog-header .p-dialog-title {
  font-size: 24px;
  line-height: 32px;
}
.p-dialog .p-dialog-content {
  background: #ffffff;
  color: #495057;
  padding: 0 1.5rem 1rem 1.5rem;
}
</style>

<script>
export default {
  data() {
    return {
      checked: true,
      displayModal: false
    }
  },

  methods: {
      openModal() {
          this.displayModal = true;
      },
      closeModal() {
          this.displayModal = false;
      },
  }
}
</script>
