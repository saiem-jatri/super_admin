<template>
  <!-- Top nav bar start-->
  <div class="bg-white h-[72px] sticky top-0 border-b border-[#DBDBDB] z-10">
    <div class="flex justify-between items-center">
      <p class="p-6 text-[#151414] leading-[28px] text-[20px] font-[600]">Counter</p>
      <div
          class="w-[230px] xl:w-[270px] h-[40px] border border-[#DBDBDB] flex justify-center items-center leading-[20px] rounded-[4px] pl-14 xl:pl-[9px] overflow-hidden">
        <img alt="" class="h-5 w-5" src="../assets/svg/search.svg">
        <input class="outline-none pl-2 placeholder:text-[#4D4D4F] placeholder:text-[14px] placeholder:leading-[20px]"
               placeholder="PNR or mobile number"
               type="text">
      </div>
      <div class="flex gap-x-2 p-4 justify-center items-center mr-6 ">
        <router-link class="topBarAddButton flex items-center gap-x-3" to="/createCounter">
          <span><img alt="" class="h-[9.33px] w-[9.33px]" src="../assets/svg/plus.svg"></span>Add counter
        </router-link>
        <img alt="" class="h-[30px] xl:h-[40px] w-[30px] xl:w-[40px] rounded-full" src="../assets/person/person1.png">
        <p class="text-[#151414] leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[500]">Admin Name</p>
        <img alt="" class="w-[12px] h-[6px]" src="../assets/person/downArrow.svg">
      </div>
    </div>
  </div>
  <!-- top nav bar end -->
  <!-- body start-->
  <div class="px-[30px] py-[24px]">
    <!--        card-->
    <div class="bg-white rounded-[4px]">
      <div class="p-4 flex justify-between items-center">
        <div class="flex justify-start items-center gap-x-4 w-full">
          <div class="w-1/4">
            <p class="text-primaryText leading-[20px] text-[14px] xl:leading-[24px] xl:text-[16px] font-[600]">Bus
              operator</p>
            <Dropdown
                v-model="selectedCity"
                :options="cities" class="w-full py-[4px] mt-[10px] placeholder:text-primaryText placeholder:leading-[16px] placeholder:text-[12px] xl:placeholder:leading-[20px] xl:placeholder:text-[14px]" optionLabel="name" placeholder="Desh Traveles"/>
          </div>
          <div class="w-1/4">
            <p class="text-primaryText leading-[20px] text-[14px] xl:leading-[24px] xl:text-[16px] font-[600]">Counter
              type</p>
            <Dropdown
                v-model="selectedCity"
                :options="cities" class="w-full py-[4px] mt-[10px] placeholder:text-primaryText placeholder:leading-[16px] placeholder:text-[12px] xl:placeholder:leading-[20px] xl:placeholder:text-[14px]" optionLabel="name" placeholder="Select counter type"/>
          </div>

          <div class="w-1/4">
            <p class="text-primaryText leading-[20px] text-[14px] xl:leading-[24px] xl:text-[16px] font-[600]">
              Counter</p>
            <Dropdown
                v-model="selectedCity"
                :options="cities" class="w-full py-[4px] mt-[10px] placeholder:text-primaryText placeholder:leading-[16px] placeholder:text-[12px] xl:placeholder:leading-[20px] xl:placeholder:text-[14px]" optionLabel="name" placeholder="Select counter"/>
          </div>
          <div class="w-1/4">
            <p class="text-primaryText leading-[20px] text-[14px] xl:leading-[24px] xl:text-[16px] font-[600]">
              Stoppage</p>
            <Dropdown
                v-model="selectedCity"
                :options="cities" class="w-full py-[4px] mt-[10px] placeholder:text-primaryText placeholder:leading-[16px] placeholder:text-[12px] xl:placeholder:leading-[20px] xl:placeholder:text-[14px]" optionLabel="name" placeholder="Select stoppage"/>
          </div>
        </div>

      </div>
      <div class="flex justify-center items-center pb-4">
        <div class="w-1/5 xl:w-[15%]">
          <button
              class="flex gap-x-[9px] justify-center items-center bg-corporate text-white leading-[14px] xl:leading-[16px] text-[11px] xl:text-[12px] font-[500] py-3 pl-[17px] pr-[24px] rounded-full"><span>
                <img alt="" class="w-[25px] xl:w-[13px] xl:h-[13px]" src="../assets/svg/white_search.svg">
              </span>Search
          </button>
        </div>
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
            COUNTER NAME
          </th>

          <th class="companyTableHead" scope="col">
            COUNTER type
          </th>
          <th class="companyTableHead" scope="col">
            STOPPAGE
          </th>
          <th class="companyTableHead" scope="col">
            Address
          </th>
          <th class="companyTableHead" scope="col">
            MOBILE NUMBER
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

          <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText">
            Arambag
          </td>
          <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText">
            Own
          </td>
          <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText">
            Arambag
          </td>
          <td class="leading-[20px] text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText">
            Opposite of notredame <br> college, Arambag, Dhaka
          </td>

          <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText">
            +8801708630439
          </td>
          <td class="border-r border-[#DBDBDB]">
            <div class="flex justify-center items-center">
              <p class="companyTableStatus">Active</p>
            </div>
          </td>
          <td class="border-r border-[#DBDBDB]">
            <div class="py-[5px] px-[18px] flex justify-evenly items-center gap-x-[16px]">
              <button class="companyEditButton"><span><img alt="" class="w-[16px] h-[231px]"
                                                           src="../assets/svg/edit.svg"></span>Edit
              </button>
              <img alt="" src="../assets/svg/man.svg">
            </div>
          </td>
        </tr>
        <tr class="border-b border-[#EDEDED]">
          <td class="text-primaryText border-r border-[#DBDBDB] text-center leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px]">
            01
          </td>

          <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText">
            Arambag
          </td>
          <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText">
            Own
          </td>
          <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText">
            Arambag
          </td>
          <td class="leading-[20px] text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText">
            Opposite of notredame <br> college, Arambag, Dhaka
          </td>

          <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText">
            +8801708630439
          </td>
          <td class="border-r border-[#DBDBDB]">
            <div class="flex justify-center items-center">
              <p class="companyTableStatus">Active</p>
            </div>
          </td>
          <td class="border-r border-[#DBDBDB]">
            <div class="py-[5px] px-[18px] flex justify-evenly items-center gap-x-[16px]">
              <button class="companyEditButton"><span><img alt="" class="w-[16px] h-[231px]"
                                                           src="../assets/svg/edit.svg"></span>Edit
              </button>
              <img alt="" src="../assets/svg/man.svg">
            </div>
          </td>
        </tr>
        <tr class="border-b border-[#EDEDED]">
          <td class="text-primaryText border-r border-[#DBDBDB] text-center leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px]">
            01
          </td>

          <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText">
            Arambag
          </td>
          <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText">
            Own
          </td>
          <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText">
            Arambag
          </td>
          <td class="leading-[20px] text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText">
            Opposite of notredame <br> college, Arambag, Dhaka
          </td>

          <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText">
            +8801708630439
          </td>
          <td class="border-r border-[#DBDBDB]">
            <div class="flex justify-center items-center">
              <p class="companyTableStatus">Active</p>
            </div>
          </td>
          <td class="border-r border-[#DBDBDB]">
            <div class="py-[5px] px-[18px] flex justify-evenly items-center gap-x-[16px]">
              <button class="companyEditButton"><span><img alt="" class="w-[16px] h-[231px]"
                                                           src="../assets/svg/edit.svg"></span>Edit
              </button>
              <img alt="" src="../assets/svg/man.svg">
            </div>
          </td>
        </tr>
        <tr class="border-b border-[#EDEDED]">
          <td class="text-primaryText border-r border-[#DBDBDB] text-center leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px]">
            01
          </td>

          <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText">
            Arambag
          </td>
          <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText">
            Own
          </td>
          <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText">
            Arambag
          </td>
          <td class="leading-[20px] text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText">
            Opposite of notredame <br> college, Arambag, Dhaka
          </td>

          <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText">
            +8801708630439
          </td>
          <td class="border-r border-[#DBDBDB]">
            <div class="flex justify-center items-center">
              <p class="companyTableStatus">Active</p>
            </div>
          </td>
          <td class="border-r border-[#DBDBDB]">
            <div class="py-[5px] px-[18px] flex justify-evenly items-center gap-x-[16px]">
              <button class="companyEditButton"><span><img alt="" class="w-[16px] h-[231px]"
                                                           src="../assets/svg/edit.svg"></span>Edit
              </button>
              <img alt="" src="../assets/svg/man.svg">
            </div>
          </td>
        </tr>
        <tr class="border-b border-[#EDEDED]">
          <td class="text-primaryText border-r border-[#DBDBDB] text-center leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px]">
            01
          </td>

          <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText">
            Arambag
          </td>
          <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText">
            Own
          </td>
          <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText">
            Arambag
          </td>
          <td class="leading-[20px] text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText">
            Opposite of notredame <br> college, Arambag, Dhaka
          </td>

          <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText">
            +8801708630439
          </td>
          <td class="border-r border-[#DBDBDB]">
            <div class="flex justify-center items-center">
              <p class="companyTableStatus">Active</p>
            </div>
          </td>
          <td class="border-r border-[#DBDBDB]">
            <div class="py-[5px] px-[18px] flex justify-evenly items-center gap-x-[16px]">
              <button class="companyEditButton"><span><img alt="" class="w-[16px] h-[231px]"
                                                           src="../assets/svg/edit.svg"></span>Edit
              </button>
              <img alt="" src="../assets/svg/man.svg">
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

.p-dropdown-panel .p-dropdown-items .p-dropdown-item:not(:last-child), .p-dropdown-panel .p-dropdown-items .p-dropdown-item:not(:last-child):hover {
  border-bottom: 1px dotted #DBDBDB;
}
</style>
