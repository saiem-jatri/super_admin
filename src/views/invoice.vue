<template>
  


      <!-- body start-->
      <div class="px-[30px] py-[24px]">
        <!--        card-->
        <div class="bg-white rounded-[10px]">
          <div class="p-4 flex justify-between items-center">
            <div class="flex justify-start items-center gap-x-4 w-full">
              <div class="w-1/4">
                <p class="text-primaryText leading-[20px] text-[14px] xl:leading-[24px] xl:text-[16px] font-[600]">Bus
                  operator</p>
                <Dropdown
                    v-model="selectedCity"
                    :options="cities"
                    class="w-full py-[4px] mt-[10px] placeholder:text-primaryText placeholder:leading-[16px] placeholder:text-[12px] xl:placeholder:leading-[20px] xl:placeholder:text-[14px]"
                    optionLabel="name" placeholder="Desh Traveles"/>
              </div>
              <div class="w-1/4">
                <p class="text-primaryText leading-[20px] text-[14px] xl:leading-[24px] xl:text-[16px] font-[600]">
                  Counter type</p>
                <Dropdown
                    v-model="selectedCity"
                    :options="cities"
                    class="w-full py-[4px] mt-[10px] placeholder:text-primaryText placeholder:leading-[16px] placeholder:text-[12px] xl:placeholder:leading-[20px] xl:placeholder:text-[14px]"
                    optionLabel="name" placeholder="Select counter type"/>
              </div>

              <div class="w-1/4">
                <p class="text-primaryText leading-[20px] text-[14px] xl:leading-[24px] xl:text-[16px] font-[600]">
                  Counter</p>
                <Dropdown
                    v-model="selectedCity"
                    :options="cities"
                    class="w-full py-[4px] mt-[10px] placeholder:text-primaryText placeholder:leading-[16px] placeholder:text-[12px] xl:placeholder:leading-[20px] xl:placeholder:text-[14px]"
                    optionLabel="name" placeholder="Select counter"/>
              </div>
              <div class="w-1/4">
                <p class="text-primaryText leading-[20px] text-[14px] xl:leading-[24px] xl:text-[16px] font-[600]">
                  Stoppage</p>
                <Dropdown
                    v-model="selectedCity"
                    :options="cities"
                    class="w-full py-[4px] mt-[10px] placeholder:text-primaryText placeholder:leading-[16px] placeholder:text-[12px] xl:placeholder:leading-[20px] xl:placeholder:text-[14px]"
                    optionLabel="name" placeholder="Select stoppage"/>
              </div>
            </div>

          </div>
          <div class="px-4 pb-4 flex justify-between items-center">
            <div class="w-1/4">
              <p class="text-primaryText leading-[20px] text-[14px] xl:leading-[24px] xl:text-[16px] font-[600]">
                Commission type</p>
              <Dropdown
                  v-model="selectedCity"
                  :options="cities"
                  class="w-full py-[4px] mt-[10px] placeholder:text-primaryText placeholder:leading-[16px] placeholder:text-[12px] xl:placeholder:leading-[20px] xl:placeholder:text-[14px]"
                  optionLabel="name" placeholder="Fixed"/>
            </div>
            <div class="mt-5">
              <button
                  class="flex gap-x-[9px] justify-center items-center bg-corporate text-white leading-[14px] xl:leading-[16px] text-[11px] xl:text-[12px] font-[500] py-3 pl-[17px] pr-[24px] rounded-full"><span>
                <img alt="" class="w-[13px] xl:h-[13px]" src="../assets/svg/white_search.svg">
              </span>Search
              </button>
            </div>
          </div>
        </div>
        <div class="flex justify-end items-center mt-4 xl:mt-5 gap-x-6">
          <button
              class="flex gap-x-[9px] justify-center items-center border border-[#8D8D8F] bg-transparent text-corporate leading-[14px] xl:leading-[16px] text-[11px] xl:text-[12px] font-[500] py-3 pl-[17px] pr-[24px] rounded-full"><span>
                <img alt="" class="w-[13px] h-[13px]" src="../assets/svg/print.svg">
              </span>Print
          </button>
          <button
              class="flex gap-x-[9px] justify-center items-center bg-corporate text-white leading-[14px] xl:leading-[16px] text-[11px] xl:text-[12px] font-[500] py-3 pl-[17px] pr-[24px] rounded-full"><span>
                <img alt="" class="w-[13px] h-[13px]" src="../assets/svg/export.svg">
              </span>Export
          </button>
        </div>
        <div class="bg-white rounded-[8px] mt-4">
          <!-- table start -->
          <table class="min-w-full">
            <thead>
            <tr class="bg-[#4D4D4F] h-[36px]">
              <th class="companyTableHead" scope="col" style="border-radius: 6px 0 0 0">
                no. of tickets (T)
              </th>
              <th class="companyTableHead" scope="col">
                commission (C)
              </th>

              <th class="companyTableHead" scope="col">
                total amount (T×C)
              </th>
              <th class="companyTableHead" scope="col" style="border-radius: 0 6px 0 0">
                due bill
              </th>
            </tr>
            </thead>
            <tbody>
            <tr class="border-b border-[#EDEDED]">
              <td class="text-primaryText border-r border-[#DBDBDB] text-center leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] py-3">
                01
              </td>

              <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText py-3">
                5 %
              </td>
              <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText py-3">
                Arambag
              </td>
              <td class="leading-[20px] text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText py-3">
                5000 TK
              </td>
            </tr>
            <tr class="border-b border-[#EDEDED]">
              <td class="text-primaryText border-r border-[#DBDBDB] text-center leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] py-3">
                01
              </td>

              <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText py-3">
                5 %
              </td>
              <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText py-3">
                Arambag
              </td>
              <td class="leading-[20px] text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText py-3">
                5000 TK
              </td>
            </tr>
            <tr class="border-b border-[#EDEDED]">
              <td class="text-primaryText border-r border-[#DBDBDB] text-center leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] py-3">
                01
              </td>

              <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText py-3">
                5 %
              </td>
              <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText py-3">
                Arambag
              </td>
              <td class="leading-[20px] text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText py-3">
                5000 TK
              </td>
            </tr>
            <tr class="border-b border-[#EDEDED]">
              <td class="text-primaryText border-r border-[#DBDBDB] text-center leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] py-3">
                01
              </td>

              <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText py-3">
                5 %
              </td>
              <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText py-3">
                Arambag
              </td>
              <td class="leading-[20px] text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText py-3">
                5000 TK
              </td>
            </tr>
            <tr class="border-b border-[#EDEDED]">
              <td class="text-primaryText border-r border-[#DBDBDB] text-center leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] py-3">
                01
              </td>

              <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText py-3">
                5 %
              </td>
              <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText py-3">
                Arambag
              </td>
              <td class="leading-[20px] text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText py-3">
                5000 TK
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

.p-dropdown-panel .p-dropdown-items .p-dropdown-item:not(:last-child), .p-dropdown-panel .p-dropdown-items .p-dropdown-item:not(:last-child):hover {
  border-bottom: 1px dotted #DBDBDB;
}
</style>

<script>
import DropdownMenu from "../components/DropdownMenu.vue";
import SidebarNav from "../components/SidebarNav.vue";

export default {
  components: {
    DropdownMenu,
    SidebarNav
}
}
</script>
