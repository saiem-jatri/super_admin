<template>
  <!-- Top nav bar start-->
  <div class="bg-white h-[72px] sticky top-0 border-b border-[#DBDBDB] z-10">
    <div class="flex justify-between items-center">
      <p class="p-6 text-[#151414] leading-[28px] text-[20px] font-[600]">Routes</p>
      <div
          class="w-[230px] xl:w-[270px] h-[40px] border border-[#DBDBDB] flex justify-center items-center leading-[20px] rounded-[4px] pl-14 xl:pl-[9px] overflow-hidden">
        <img alt="" class="h-5 w-5" src="../assets/svg/search.svg">
        <input class="outline-none pl-2 placeholder:text-[#4D4D4F] placeholder:text-[14px] placeholder:leading-[20px]"
               placeholder="PNR or mobile number"
               type="text">
      </div>
      <div class="flex gap-x-2 p-4 justify-center items-center mr-6 ">
        <router-link class="topBarAddButton" to="/createRoutes">
          <span><img alt="" class="h-[9.33px] w-[9.33px]" src="../assets/svg/plus.svg"></span>Add Route
        </router-link>

        <img alt="" class="h-[30px] xl:h-[40px] w-[30px] xl:w-[40px] rounded-full" src="../assets/person/person1.png">
        <p class="text-[#151414] leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[500]">Mostafa Mamun
          Emon</p>
        <img alt="" class="w-[12px] h-[6px]" src="../assets/person/downArrow.svg">
      </div>
    </div>
  </div>
  <!-- top nav bar end -->
  <!-- body start-->
  <div class="px-[30px] py-[24px]">
    <!--        card-->
    <div class="bg-white rounded-[6px]">
      <div class="p-4 flex justify-between items-center">
        <div class="flex justify-start items-center gap-x-4 w-full">
          <div class="w-1/4 xl:w-1/5">
            <p class="text-primaryText leading-[20px] text-[14px] xl:leading-[24px] xl:text-[16px] font-[600]">Bus
              operator</p>
            <Dropdown
                v-model="selectedCity"
                :options="cities"
                class="w-full py-[4px] mt-[10px] placeholder:text-primaryText placeholder:leading-[16px] placeholder:text-[12px] xl:placeholder:leading-[20px] xl:placeholder:text-[14px]"
                optionLabel="name" placeholder="Select bus operator"/>
          </div>
          <div class="w-1/4 xl:w-1/5">
            <p class="text-primaryText leading-[20px] text-[14px] xl:leading-[24px] xl:text-[16px] font-[600]">Origin
              city</p>
            <Dropdown
                v-model="selectedCity"
                :options="cities"
                class="w-full py-[4px] mt-[10px] placeholder:text-primaryText placeholder:leading-[16px] placeholder:text-[12px] xl:placeholder:leading-[20px] xl:placeholder:text-[14px]"
                optionLabel="name" placeholder="Select origin city"/>
          </div>

          <div class="w-1/4 xl:w-1/5">
            <p class="text-primaryText leading-[20px] text-[14px] xl:leading-[24px] xl:text-[16px] font-[600]">
              Destination city</p>
            <Dropdown
                v-model="selectedCity"
                :options="cities"
                class="w-full py-[4px] mt-[10px] placeholder:text-primaryText placeholder:leading-[16px] placeholder:text-[12px] xl:placeholder:leading-[20px] xl:placeholder:text-[14px]"
                optionLabel="name" placeholder="Select destination city"/>
          </div>
        </div>
        <button
            class="flex gap-x-[9px] justify-center items-center bg-corporate text-white leading-[14px] xl:leading-[16px] text-[11px] xl:text-[12px] font-[500] w-[104px] h-[40px] rounded-full mt-8"><span>
                <img alt="" class="w-[13px] h-[13px]" src="../assets/svg/white_search.svg">
              </span>Search
        </button>
      </div>
    </div>
    <div class="bg-white rounded-[8px] mt-4">
      <!-- table start -->
      <table class="min-w-full">
        <thead>
        <tr class="bg-[#4D4D4F] h-[36px]">
          <th class="companyTableHead" scope="col" style="border-radius: 8px 0 0 0">
            SL
          </th>
          <th class="companyTableHead" scope="col">
            ROUTE
          </th>
          <th class="companyTableHead" scope="col">
            DIRECTION
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
            01
          </td>
          <td class="text-primaryText border-r border-[#DBDBDB] text-center leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px]">
            Dhaka - Tangail - Bogura - Rangpur
          </td>
          <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText">
            Up
          </td>
          <td class="border-r border-[#DBDBDB]">
            <div class="flex justify-center items-center">
              <p class="companyTableStatus">Active</p>
            </div>
          </td>
          <td class="border-r border-[#DBDBDB]">
            <div class="py-[7px] px-[18px] flex justify-center items-center gap-x-[16px]">
              <button class="companyEditButton"><span><img alt="" class="w-3 h-3" src="../assets/svg/edit.svg"></span>Edit
              </button>
            </div>
          </td>
        </tr>
        <tr class="border-b border-[#EDEDED]">
          <td class="text-primaryText border-r border-[#DBDBDB] text-center leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px]">
            01
          </td>
          <td class="text-primaryText border-r border-[#DBDBDB] text-center leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px]">
            Dhaka - Tangail - Bogura - Rangpur
          </td>
          <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText">
            Down
          </td>
          <td class="border-r border-[#DBDBDB]">
            <div class="flex justify-center items-center">
              <p class="companyTableStatus">Active</p>
            </div>
          </td>
          <td class="border-r border-[#DBDBDB]">
            <div class="py-[7px] px-[18px] flex justify-center items-center gap-x-[16px]">
              <button class="companyEditButton"><span><img alt="" class="w-3 h-3" src="../assets/svg/edit.svg"></span>Edit
              </button>
            </div>
          </td>
        </tr>
        <tr class="border-b border-[#EDEDED]">
          <td class="text-primaryText border-r border-[#DBDBDB] text-center leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px]">
            01
          </td>
          <td class="text-primaryText border-r border-[#DBDBDB] text-center leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px]">
            Dhaka - Tangail - Bogura - Rangpur
          </td>
          <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText">
            Up
          </td>
          <td class="border-r border-[#DBDBDB]">
            <div class="flex justify-center items-center">
              <p class="companyTableStatus">Active</p>
            </div>
          </td>
          <td class="border-r border-[#DBDBDB]">
            <div class="py-[7px] px-[18px] flex justify-center items-center gap-x-[16px]">
              <button class="companyEditButton"><span><img alt="" class="w-3 h-3" src="../assets/svg/edit.svg"></span>Edit
              </button>
            </div>
          </td>
        </tr>
        <tr class="border-b border-[#EDEDED]">
          <td class="text-primaryText border-r border-[#DBDBDB] text-center leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px]">
            01
          </td>
          <td class="text-primaryText border-r border-[#DBDBDB] text-center leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px]">
            Dhaka - Tangail - Bogura - Rangpur
          </td>
          <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText">
            Up
          </td>
          <td class="border-r border-[#DBDBDB]">
            <div class="flex justify-center items-center">
              <p class="companyTableStatus">Active</p>
            </div>
          </td>
          <td class="border-r border-[#DBDBDB]">
            <div class="py-[7px] px-[18px] flex justify-center items-center gap-x-[16px]">
              <button class="companyEditButton"><span><img alt="" class="w-3 h-3" src="../assets/svg/edit.svg"></span>Edit
              </button>
            </div>
          </td>
        </tr>
        <tr class="border-b border-[#EDEDED]">
          <td class="text-primaryText border-r border-[#DBDBDB] text-center leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px]">
            01
          </td>
          <td class="text-primaryText border-r border-[#DBDBDB] text-center leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px]">
            Dhaka - Tangail - Bogura - Rangpur
          </td>
          <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText">
            Up
          </td>
          <td class="border-r border-[#DBDBDB]">
            <div class="flex justify-center items-center">
              <p class="companyTableStatus">Active</p>
            </div>
          </td>
          <td class="border-r border-[#DBDBDB]">
            <div class="py-[7px] px-[18px] flex justify-center items-center gap-x-[16px]">
              <button class="companyEditButton"><span><img alt="" class="w-3 h-3" src="../assets/svg/edit.svg"></span>Edit
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
