<template>
      <!-- Top nav bar start-->
      <div class="bg-white h-[72px] sticky top-0 border-b border-[#DBDBDB] z-10">
        <div class="flex justify-between items-center">
          <div class="pl-6 flex flex-col gap-y-[4px]">
            <p class="lg:leading-[16px] xl:leading-[28px] lg:text-[14px] xl:text-[20px] font-[600] text-primaryText">
              Promotion</p>
            <div class="flex justify-center items-center gap-x-[6px] mr-4">
              <p class="text-secondaryText leading-[12px] text-[8px] xl:leading-[16px] xl:text-[12px] font-[400]">
                Offers & Promotion</p>
              <img alt="" class="w-1 h-2" src="../assets/svg/bgBack.svg">
              <p class="text-secondaryText leading-[12px] text-[8px] xl:leading-[16px] xl:text-[12px] font-[400]">
                Offers</p>
            </div>
          </div>
          <div
              class="w-[230px] xl:w-[270px] h-[40px] border border-[#DBDBDB] flex justify-center items-center leading-[20px] rounded-[4px] pl-14 xl:pl-[9px] overflow-hidden">
            <img alt="" class="h-5 w-5" src="../assets/svg/search.svg">
            <input
                class="outline-none pl-2 placeholder:text-[#4D4D4F] placeholder:text-[14px] placeholder:leading-[20px]"
                placeholder="PNR or mobile number"
                type="text">
          </div>
          <div class="flex gap-x-2 p-4 justify-center items-center mr-6 ">
            <router-link to="/AddPromo" class="topBarAddButton">
              <span><img src="../assets/svg/plus.svg" class="h-[9.33px] w-[9.33px]" alt=""></span>Add promo code
            </router-link>
            <img alt="" class="h-[30px] xl:h-[40px] w-[30px] xl:w-[40px] rounded-full"
                 src="../assets/person/person1.png">
            <p class="text-[#151414] leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[500]">Mostafa
              Mamun Emon</p>
            <img alt="" class="w-[12px] h-[6px]" src="../assets/person/downArrow.svg">
          </div>
        </div>
      </div>
      <!-- top nav bar end -->

      <!-- body start-->
      <div class="px-[30px] py-[24px]">
        <!--        tab start-->
        <div class="border-b border-[#EDEDED]">
          <div class="flex justify-start items-center">
            <router-link to="/offer" :class="$route.path === '/offer' ? 'companyOwnerTabActive' : 'companyOwnerTabNonActive' ">Offers</router-link>
            <router-link to="/promotion" :class="$route.path === '/promotion' ? 'companyOwnerTabActive' : 'companyOwnerTabNonActive' ">Promotion</router-link>
          </div>
        </div>
        <!--        card-->
        <div class="mt-[16px] bg-white rounded-[10px]">
          <div class="p-4 flex justify-between gap-x-[21px] items-center">
            <div class="flex justify-start items-center gap-x-4 w-full">
              <div class="w-1/4">
                <p class="text-primaryText leading-[20px] text-[14px] xl:leading-[24px] xl:text-[16px] font-[600]">Bus
                  operator</p>
                <Dropdown
                    v-model="selectedCity"
                    :options="cities"
                    class="w-full py-1 mt-[10px] placeholder:text-primaryText placeholder:leading-[16px] placeholder:text-[12px] xl:placeholder:leading-[20px] xl:placeholder:text-[14px]"
                    optionLabel="name" placeholder="Select bus operator"/>
              </div>
              <div class="w-1/4">
                <div class="flex justify-between items-center w-full">
                  <p class="text-primaryText leading-[20px] text-[14px] xl:leading-[24px] xl:text-[16px] font-[600]">
                    Promo code</p>
                </div>
                <input
                    class="focus:outline-none mt-[10px] w-full border border-[#DBDBDB] rounded-[4px] pl-2 py-2 placeholder:text-[#676769] placeholder:leading-[16px] placeholder:text-[12px] xl:placeholder:leading-[20px] xl:placeholder:text-[14px]"
                    placeholder="Enter promo code"
                    type="text">
              </div>
            </div>
            <button
                class="flex gap-x-[9px] justify-center items-center bg-corporate text-white leading-[14px] xl:leading-[16px] text-[11px] xl:text-[12px] font-[500] py-3 px-6 rounded-full mt-7"><span>
                <img alt="" class="w-[25px] xl:w-[20px] xl:h-[20px]" src="../assets/svg/white_search.svg">
              </span>Search
            </button>
          </div>
        </div>
        <div class="bg-white rounded-[8px] mt-4">
          <!-- table start -->
          <table class="min-w-full">
            <thead>
            <tr class="bg-[#4D4D4F] h-[36px]">
              <th class="companyTableHead" scope="col">
                Promo code
              </th>
              <th class="companyTableHead w-[150px]" scope="col">
                Route
              </th>

              <th class="companyTableHead" scope="col">
                discount
              </th>
              <th class="companyTableHead" scope="col">
                usage limit
              </th>
              <th class="companyTableHead" scope="col">
                appilied count
              </th>
              <th class="companyTableHead" scope="col">
                Date
              </th>
              <th class="companyTableHead" scope="col">
                STATUS
              </th>
              <th class="companyTableHead" scope="col" style="border-radius: 0 8px 0 0">
                ACTION
              </th>
            </tr>
            </thead>
            <tbody>
            <tr class="border-b border-[#EDEDED]">
              <td class="text-primaryText border-r border-[#DBDBDB] text-center leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px]">
                Promo code
              </td>
              <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText">
                Dhaka - Rnagpur
              </td>
              <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText">
                <div>Discount: 5%</div>
                <div>Up to: 50 TK</div>
              </td>
              <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] px-2 border-r border-[#DBDBDB] text-primaryText py-2">
                <div>Usage limit: 100 </div>
                <div>Usage limit per user: 100</div>
                <div>Only first time: No</div>
              </td>
              <td class="leading-[20px] text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText ">
                <div class="flex justify-center items-center gap-x-[8px] underline">
                  5000000 <span><img alt="" class="w-[7px] h-[12px]" src="../assets/svg/right-black-arrow.svg"></span>
                </div>
              </td>
              <td class="px-2 text-[12px] font-[500] border-r border-[#DBDBDB] text-primaryText">
                <div>Activation: 19 July 2022, 09:45 AM</div>
                <div>Expiration: 19 July 2022, 09:45 AM</div>
                <div>Created: 19 July 2022, 09:45 AM</div>
              </td>
              <td class="border-r border-[#DBDBDB]">
                <div class="flex justify-center items-center">
                  <p class="companyTableStatus">Active</p>
                </div>
              </td>
              <td class="border-r border-[#DBDBDB]">
                <div class="py-[5px] px-[18px] flex justify-center items-center gap-x-[16px]">
                  <button class="companyEditButton"><span><img alt="" class="w-3 h-3"
                                                               src="../assets/svg/edit.svg"></span>Edit
                  </button>
                </div>
              </td>
            </tr>
            <tr class="border-b border-[#EDEDED]">
              <td class="text-primaryText border-r border-[#DBDBDB] text-center leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px]">
                Promo code
              </td>
              <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText">
                Dhaka - Rnagpur
              </td>
              <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText">
                <div>Discount: 5%</div>
                <div>Up to: 50 TK</div>
              </td>
              <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] px-2 border-r border-[#DBDBDB] text-primaryText py-2">
                <div>Usage limit: 100 </div>
                <div>Usage limit per user: 100</div>
                <div>Only first time: No</div>
              </td>
              <td class="leading-[20px] text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText ">
                <div class="flex justify-center items-center gap-x-[8px] underline">
                  5000000 <span><img alt="" class="w-[7px] h-[12px]" src="../assets/svg/right-black-arrow.svg"></span>
                </div>
              </td>
              <td class="px-2 text-[12px] font-[500] border-r border-[#DBDBDB] text-primaryText">
                <div>Activation: 19 July 2022, 09:45 AM</div>
                <div>Expiration: 19 July 2022, 09:45 AM</div>
                <div>Created: 19 July 2022, 09:45 AM</div>
              </td>
              <td class="border-r border-[#DBDBDB]">
                <div class="flex justify-center items-center">
                  <p class="companyTableStatusInactive">Inactive</p>
                </div>
              </td>
              <td class="border-r border-[#DBDBDB]">
                <div class="py-[5px] px-[18px] flex justify-center items-center gap-x-[16px]">
                  <button class="companyEditButton"><span><img alt="" class="w-3 h-3"
                                                               src="../assets/svg/edit.svg"></span>Edit
                  </button>
                </div>
              </td>
            </tr>

            <tr class="border-b border-[#EDEDED]">
              <td class="text-primaryText border-r border-[#DBDBDB] text-center leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px]">
                Promo code
              </td>
              <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText">
                Chapainababganj- Chapainababganj
              </td>
              <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText">
                <div>Discount: 5%</div>
                <div>Up to: 50 TK</div>
              </td>
              <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] px-2 border-r border-[#DBDBDB] text-primaryText py-2">
                <div>Usage limit: 100 </div>
                <div>Usage limit per user: 100</div>
                <div>Only first time: No</div>
              </td>
              <td class="leading-[20px] text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText ">
                <div class="flex justify-center items-center gap-x-[8px] underline">
                  5000000 <span><img alt="" class="w-[7px] h-[12px]" src="../assets/svg/right-black-arrow.svg"></span>
                </div>
              </td>
              <td class="px-2 text-[12px] font-[500] border-r border-[#DBDBDB] text-primaryText">
                <div>Activation: 19 July 2022, 09:45 AM</div>
                <div>Expiration: 19 July 2022, 09:45 AM</div>
                <div>Created: 19 July 2022, 09:45 AM</div>
              </td>
              <td class="border-r border-[#DBDBDB]">
                <div class="flex justify-center items-center">
                  <p class="companyTableStatus">Active</p>
                </div>
              </td>
              <td class="border-r border-[#DBDBDB]">
                <div class="py-[5px] px-[18px] flex justify-center items-center gap-x-[16px]">
                  <button class="companyEditButton"><span><img alt="" class="w-3 h-3"
                                                               src="../assets/svg/edit.svg"></span>Edit
                  </button>
                </div>
              </td>
            </tr>

            <tr class="border-b border-[#EDEDED]">
              <td class="text-primaryText border-r border-[#DBDBDB] text-center leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px]">
                Promo code
              </td>
              <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText">
                Dhaka - Rnagpur
              </td>
              <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText">
                <div>Discount: 5%</div>
                <div>Up to: 50 TK</div>
              </td>
              <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] px-2 border-r border-[#DBDBDB] text-primaryText py-2">
                <div>Usage limit: 100 </div>
                <div>Usage limit per user: 100</div>
                <div>Only first time: No</div>
              </td>
              <td class="leading-[20px] text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText ">
                <div class="flex justify-center items-center gap-x-[8px] underline">
                  5000000 <span><img alt="" class="w-[7px] h-[12px]" src="../assets/svg/right-black-arrow.svg"></span>
                </div>
              </td>
              <td class="px-2 text-[12px] font-[500] border-r border-[#DBDBDB] text-primaryText">
                <div>Activation: 19 July 2022, 09:45 AM</div>
                <div>Expiration: 19 July 2022, 09:45 AM</div>
                <div>Created: 19 July 2022, 09:45 AM</div>
              </td>
              <td class="border-r border-[#DBDBDB]">
                <div class="flex justify-center items-center">
                  <p class="companyTableStatus">Active</p>
                </div>
              </td>
              <td class="border-r border-[#DBDBDB]">
                <div class="py-[5px] px-[18px] flex justify-center items-center gap-x-[16px]">
                  <button class="companyEditButton"><span><img alt="" class="w-3 h-3"
                                                               src="../assets/svg/edit.svg"></span>Edit
                  </button>
                </div>
              </td>
            </tr>

            <tr class="border-b border-[#EDEDED]">
              <td class="text-primaryText border-r border-[#DBDBDB] text-center leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px]">
                Promo code
              </td>
              <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText">
                Chapainababganj- Chapainababganj
              </td>
              <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText">
                <div>Discount: 5%</div>
                <div>Up to: 50 TK</div>
              </td>
              <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] px-2 border-r border-[#DBDBDB] text-primaryText py-2">
                <div>Usage limit: 100 </div>
                <div>Usage limit per user: 100</div>
                <div>Only first time: No</div>
              </td>
              <td class="leading-[20px] text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText ">
                <div class="flex justify-center items-center gap-x-[8px] underline">
                  5000000 <span><img alt="" class="w-[7px] h-[12px]" src="../assets/svg/right-black-arrow.svg"></span>
                </div>
              </td>
              <td class="px-2 text-[12px] font-[500] border-r border-[#DBDBDB] text-primaryText">
                <div>Activation: 19 July 2022, 09:45 AM</div>
                <div>Expiration: 19 July 2022, 09:45 AM</div>
                <div>Created: 19 July 2022, 09:45 AM</div>
              </td>
              <td class="border-r border-[#DBDBDB]">
                <div class="flex justify-center items-center">
                  <p class="companyTableStatus">Active</p>
                </div>
              </td>
              <td class="border-r border-[#DBDBDB]">
                <div class="py-[5px] px-[18px] flex justify-center items-center gap-x-[16px]">
                  <button class="companyEditButton"><span><img alt="" class="w-3 h-3"
                                                               src="../assets/svg/edit.svg"></span>Edit
                  </button>
                </div>
              </td>
            </tr>

            <tr class="border-b border-[#EDEDED]">
              <td class="text-primaryText border-r border-[#DBDBDB] text-center leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px]">
                Promo code
              </td>
              <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText">
                Dhaka - Rnagpur
              </td>
              <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText">
                <div>Discount: 5%</div>
                <div>Up to: 50 TK</div>
              </td>
              <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] px-2 border-r border-[#DBDBDB] text-primaryText py-2">
                <div>Usage limit: 100 </div>
                <div>Usage limit per user: 100</div>
                <div>Only first time: No</div>
              </td>
              <td class="leading-[20px] text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText ">
                <div class="flex justify-center items-center gap-x-[8px] underline">
                  5000000 <span><img alt="" class="w-[7px] h-[12px]" src="../assets/svg/right-black-arrow.svg"></span>
                </div>
              </td>
              <td class="px-2 text-[12px] font-[500] border-r border-[#DBDBDB] text-primaryText">
                <div>Activation: 19 July 2022, 09:45 AM</div>
                <div>Expiration: 19 July 2022, 09:45 AM</div>
                <div>Created: 19 July 2022, 09:45 AM</div>
              </td>
              <td class="border-r border-[#DBDBDB]">
                <div class="flex justify-center items-center">
                  <p class="companyTableStatus">Active</p>
                </div>
              </td>
              <td class="border-r border-[#DBDBDB]">
                <div class="py-[5px] px-[18px] flex justify-center items-center gap-x-[16px]">
                  <button class="companyEditButton"><span><img alt="" class="w-3 h-3"
                                                               src="../assets/svg/edit.svg"></span>Edit
                  </button>
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

.p-dropdown-panel .p-dropdown-items .p-dropdown-item:not(:last-child), .p-dropdown-panel .p-dropdown-items .p-dropdown-item:not(:last-child):hover {
  border-bottom: 1px dotted #DBDBDB;
}
</style>
<script>
import DropdownMenu from "../components/DropdownMenu.vue";

export default {
  components: {
    DropdownMenu
  }
}
</script>
