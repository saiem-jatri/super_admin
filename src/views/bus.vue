<template>
  <!-- Top nav bar start-->
  <div class="bg-white h-[72px] sticky top-0 border-b border-[#DBDBDB] z-10">
    <div class="flex justify-between items-center">
      <div class="pl-6 flex flex-col gap-y-[4px]">
        <p class="lg:leading-[16px] xl:leading-[28px] lg:text-[14px] xl:text-[20px] font-[600] text-primaryText">
          Bus</p>
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
        <router-link class="bg-corporate flex gap-x-3 justify-center items-center text-white rounded-full px-6 py-3 mr-4 leading-[12px] text-[10px] xl:leading-[16px] xl:text-[12px]"
                     to="/busCreate">
          <span><img alt="" class="h-[9.33px] w-[9.33px]" src="../assets/svg/plus.svg"></span>Add bus
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
    <div class="bg-white rounded-[8px]">
      <!-- table start -->
      <table class="min-w-full">
        <thead>
        <tr class="bg-[#4D4D4F] h-[36px]">
          <th class="companyTableHead" scope="col">
            SL
          </th>
          <th class="companyTableHead" scope="col">
            BUS NAME
          </th>

          <th class="companyTableHead" scope="col">
            bus type
          </th>
          <th class="companyTableHead" scope="col">
            SEAT class
          </th>
          <th class="companyTableHead" scope="col">
            seat plan
          </th>
          <th class="companyTableHead" scope="col" style="border-radius: 0 8px 0 0">
            ACTION
          </th>
        </tr>
        </thead>
        <tbody>
        <tr class="border-b border-[#EDEDED]">
          <td class="text-primaryText border-r border-[#DBDBDB] text-center leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px]">
            01
          </td>
          <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText">
            Hino 1J - 36 Seat
          </td>
          <td class="leading-[20px] text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText ">
            AC
          </td>
          <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText">
            Economy
          </td>
          <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText">
            36 seater
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
            01
          </td>
          <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText">
            Hino 1J - 36 Seat
          </td>
          <td class="leading-[20px] text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText ">
            AC
          </td>
          <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText">
            Economy
          </td>
          <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText">
            36 seater
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
            01
          </td>
          <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText">
            Hino 1J - 36 Seat
          </td>
          <td class="leading-[20px] text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText ">
            AC
          </td>
          <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText">
            Economy
          </td>
          <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText">
            36 seater
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
            01
          </td>
          <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText">
            Hino 1J - 36 Seat
          </td>
          <td class="leading-[20px] text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText ">
            Non AC
          </td>
          <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText">
            Economy
          </td>
          <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText">
            36 seater
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
            01
          </td>
          <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText">
            Hino 1J - 36 Seat
          </td>
          <td class="leading-[20px] text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText ">
            Non AC
          </td>
          <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText">
            Economy
          </td>
          <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText">
            36 seater
          </td>
          <td class="border-r border-[#DBDBDB]">
            <div class="py-[5px] px-[18px] flex justify-center items-center gap-x-[16px]">
              <button class="companyEditButton"><span><img alt="" class="w-3 h-3" src="../assets/svg/edit.svg"></span>Edit
              </button>
            </div>
          </td>
        </tr>
        </tbody>
      </table>
    </div>

    <!-- Buttons just for show routing. Remove after development -->
    <div class="mt-6">
      <p class="mb-4 italic text-red-500">*Buttons just for show routing. Remove after development*</p>
      <div class="flex items-center gap-x-4">
        <router-link class="corporateButton" to="/mixedbusCreate">Mixed Class</router-link>
        <router-link class="corporateButton" to="/doubleDackerbusCreate">Double Decker</router-link>
        <router-link class="corporateButton" to="/sleeperCoachBUsCreate">Sleeper Coach</router-link>
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
