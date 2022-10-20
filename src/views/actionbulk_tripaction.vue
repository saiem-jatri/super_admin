<template>
  <!-- Top nav bar start-->
  <div class="bg-white h-[72px] sticky top-0 border-b border-[#DBDBDB] z-10">
    <div class="flex justify-between items-center">
      <div class="px-[30px] flex flex-col gap-y-[4px]">
        <p class="lg:leading-[16px] xl:leading-[28px] lg:text-[14px] xl:text-[20px] font-[600] text-primaryText">
          Trip Action</p>
        <div class="flex justify-center items-center gap-x-[6px] mr-4">
          <p class="text-secondaryText leading-[12px] text-[8px] xl:leading-[16px] xl:text-[12px] font-[400]">
            Action in Bulk</p>
          <img alt="" class="w-1 h-2" src="../assets/svg/bgBack.svg">
          <p class="text-secondaryText leading-[12px] text-[8px] xl:leading-[16px] xl:text-[12px] font-[400]">
            Trip action</p>
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
        <img alt="" class="h-[30px] xl:h-[40px] w-[30px] xl:w-[40px] rounded-full"
             src="../assets/person/person1.png">
        <p class="text-[#151414] leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[500]">Admin
          Name</p>
        <img alt="" class="w-[12px] h-[6px]" src="../assets/person/downArrow.svg">
      </div>
    </div>
  </div>
  <!-- top nav bar end -->
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
                optionLabel="name" placeholder="Select bus operator"/>
          </div>
          <div class="w-1/4">
            <p class="text-primaryText leading-[20px] text-[14px] xl:leading-[24px] xl:text-[16px] font-[600]">
              Trip ID</p>
              <input class="focus:outline-none mt-[10px] w-full border border-[#DBDBDB] rounded-[4px] pl-2 py-2 placeholder:text-[#676769] placeholder:leading-[16px] placeholder:text-[12px] xl:placeholder:leading-[20px] xl:placeholder:text-[14px]" placeholder="Enter trip id" type="text" data-v-5ccf79a5="">
          </div>
          <div class="w-1/4">
            <p class="text-primaryText leading-[20px] text-[14px] xl:leading-[24px] xl:text-[16px] font-[600]">Route</p>
            <Dropdown
                v-model="selectedCity"
                :options="cities"
                class="w-full py-[4px] mt-[10px] placeholder:text-primaryText placeholder:leading-[16px] placeholder:text-[12px] xl:placeholder:leading-[20px] xl:placeholder:text-[14px]"
                optionLabel="name" placeholder="Select route"/>
          </div>
          <div class="w-1/4">
            <p class="text-primaryText leading-[20px] text-[14px] xl:leading-[24px] xl:text-[16px] font-[600]">
              Status</p>
            <Dropdown
                v-model="selectedCity"
                :options="cities"
                class="w-full py-[4px] mt-[10px] placeholder:text-primaryText placeholder:leading-[16px] placeholder:text-[12px] xl:placeholder:leading-[20px] xl:placeholder:text-[14px]"
                optionLabel="name" placeholder="Select option"/>
          </div>
        </div>
      </div>

      <div class="flex justify-between px-4 pb-4">
        <div class="w-1/2 flex gap-x-4 pr-2">
          <div class="w-1/2">
            <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">
              From</p>
            <div
                class="w-full h-[40px] border border-[#DBDBDB] flex justify-between items-center mt-[10px] leading-[20px] rounded-[4px] px-[20px] xl:px-[8px] overflow-hidden">
              <input
                  class="outline-none placeholder:text-[#4D4D4F] placeholder:text-[14px] placeholder:leading-[20px]"
                  placeholder="Select date"
                  type="text">
              <img alt="" class="h-5 w-5" src="../assets/svg/count2.svg">
            </div>
          </div>
          <div class="w-1/2">
            <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">
              To</p>
            <div
                class="w-full h-[40px] border border-[#DBDBDB] flex justify-between items-center mt-[10px] leading-[20px] rounded-[4px] px-[20px] xl:px-[8px] overflow-hidden">
              <input
                  class="outline-none placeholder:text-[#4D4D4F] placeholder:text-[14px] placeholder:leading-[20px]"
                  placeholder="Select date"
                  type="text">
              <img alt="" class="h-5 w-5" src="../assets/svg/count2.svg">
            </div>
          </div>
        </div>
        <button
            class="mt-8 flex gap-x-[9px] justify-center items-center bg-corporate text-white leading-[14px] xl:leading-[16px] text-[11px] xl:text-[12px] font-[500] w-[104px] h-[40px] rounded-full"><span>
                <img alt="" class="w-[13px] xl:h-[13px]" src="../assets/svg/white_search.svg">
              </span>Search
        </button>
      </div>
    </div>
    <div class="flex justify-between items-center mt-4 gap-x-6">
      <div class="w-1/3">
        <div>
          <input id="chooseFile" class="hidden" name="" type="file">
          <label
              class="w-full bg-white h-[80px] cursor-pointer border border-dashed border-corporateSecondaryBlue rounded-[4px] flex justify-center items-center"
              for="chooseFile">
            <div class="flex gap-x-[8px] items-center">
              <img alt="" class="w-[18px] h-[15px]" src="../assets/svg/file.svg">
              <p class="text-corporateSecondaryBlue leading-[20px] text-[14px] font-[500]">Upload updated fare</p>
              <p class="text-corporateSecondaryBlue leading-[20px] text-[14px] font-[600] border-b border-corporateSecondaryBlue">
                Browse file</p>
            </div>
          </label>
        </div>
      </div>
      <button
          class="flex gap-x-[9px] justify-center items-center bg-corporate text-white leading-[14px] xl:leading-[16px] text-[11px] xl:text-[12px] font-[500] py-3 pl-[17px] pr-[24px] rounded-full mt-8"><span>
                <img alt="" class="w-[13px] h-[13px]" src="../assets/svg/export.svg">
              </span>Export
      </button>
    </div>

     <!-- Action after file upload -->
    <div class="flex justify-between items-center mt-4 gap-x-6">
        <div class="w-1/3">
          <div
              class="h-[80px] border border-dashed border-corporateSecondaryBlue rounded-[4px] flex justify-center items-center bg-white">
            <div class="flex justify-between w-full items-center pl-4 pr-4 2xl:pr-[20px]">
              <div class="flex w-full items-center gap-x-[10px]">
                <p class="leading-[20px] xl:leading-[24px] text-[14px] xl:text-[16px] text-primaryText font-[400]">
                  Updated
                  fare.file</p>
                <img alt="" class="w-[20px] h-[20px" src="../assets/svg/border-cross.svg">
              </div>
  
              <input id="chooseFile" class="hidden" name="" type="file">
              <label class="w-full cursor-pointer rounded-[4px] flex justify-center items-center"
                     for="chooseFile">
                <div class="2xl:ml-40">
                  <p class="text-[#E0293B] leading-[20px] text-[14px] font-[600] border-b border-[#E0293B]">Replace
                    file</p>
                </div>
              </label>
            </div>
          </div>
          <p class="text-sm mt-2">*Last updated on 09:23 AM, 18 July 2022</p>
        </div>
        <div class="mt-10">
          <button
              class="flex gap-x-[9px] justify-center items-center bg-corporate text-white leading-[14px] xl:leading-[16px] text-[11px] xl:text-[12px] font-[500] py-3 pl-[17px] pr-[24px] rounded-full mt-8"><span>
                  <img alt="" class="w-[13px] h-[13px]" src="../assets/svg/export.svg">
                </span>Export
          </button>
        </div>
      </div>

      
    <div class="bg-white rounded-[8px] mt-4">
      <!-- table start -->
      <table class="min-w-full">
        <thead>
        <tr class="bg-[#4D4D4F] h-[36px]">
          <th class="companyTableHead" scope="col" style="border-radius:4px 0 0 0">
            SL
          </th>
          <th class="companyTableHead" scope="col">
            TRIP ID
          </th>

          <th class="companyTableHead" scope="col">
            TRIP
          </th>
          <th class="companyTableHead" scope="col">
            Active
          </th>
          <th class="companyTableHead" scope="col" style="border-radius:0 4px 0 0">
            inactive
          </th>
        </tr>
        </thead>
        <tbody>
        <tr class="border-b border-[#EDEDED]">
          <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText">
            01
          </td>
          <td class="leading-[20px] text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText ">
            <div class="flex justify-center items-center text-center">
              <p class="px-2 py-1 rounded-[4px] bg-[#EDEDED] leading-[12px] xl:leading-[16px] text-[12px] font-[600] text-primaryText">
                HSbEkaPN</p>
            </div>
          </td>
          <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText text-start pl-[5px] py-[14px]">
            Dhaka-Tangail-Bogura-Rangpur
          </td>
          <td class="border-r border-[#DBDBDB]">
            <div class="flex justify-center items-center">
              <p class="companyTableStatus">Yes</p>
            </div>
          </td>
          <td class="border-r border-[#DBDBDB]">
          </td>
        </tr>
        <tr class="border-b border-[#EDEDED]">
          <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText">
            01
          </td>
          <td class="leading-[20px] text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText ">
            <div class="flex justify-center items-center text-center">
              <p class="px-2 py-1 rounded-[4px] bg-[#EDEDED] leading-[12px] xl:leading-[16px] text-[12px] font-[600] text-primaryText">
                HSbEkaPN</p>
            </div>
          </td>
          <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText text-start pl-[5px] py-[14px]">
            Dhaka-Tangail-Bogura-Rangpur
          </td>
          <td class="border-r border-[#DBDBDB]">

          </td>
          <td class="border-r border-[#DBDBDB]">
            <div class="flex justify-center items-center">
              <p class="companyTableStatus">Yes</p>
            </div>
          </td>
        </tr>
        <tr class="border-b border-[#EDEDED]">
          <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText">
            01
          </td>
          <td class="leading-[20px] text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText ">
            <div class="flex justify-center items-center text-center">
              <p class="px-2 py-1 rounded-[4px] bg-[#EDEDED] leading-[12px] xl:leading-[16px] text-[12px] font-[600] text-primaryText">
                HSbEkaPN</p>
            </div>
          </td>
          <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText text-start pl-[5px] py-[14px]">
            Dhaka-Tangail-Bogura-Rangpur
          </td>
          <td class="border-r border-[#DBDBDB]">
            <div class="flex justify-center items-center">
              <p class="companyTableStatus">Yes</p>
            </div>
          </td>
          <td class="border-r border-[#DBDBDB]">
          </td>
        </tr>
        <tr class="border-b border-[#EDEDED]">
          <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText">
            01
          </td>
          <td class="leading-[20px] text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText ">
            <div class="flex justify-center items-center text-center">
              <p class="px-2 py-1 rounded-[4px] bg-[#EDEDED] leading-[12px] xl:leading-[16px] text-[12px] font-[600] text-primaryText">
                HSbEkaPN</p>
            </div>
          </td>
          <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText text-start pl-[5px] py-[14px]">
            Dhaka-Tangail-Bogura-Rangpur
          </td>
          <td class="border-r border-[#DBDBDB]">
            <div class="flex justify-center items-center">
              <p class="companyTableStatus">Yes</p>
            </div>
          </td>
          <td class="border-r border-[#DBDBDB]">
          </td>
        </tr>
        <tr class="border-b border-[#EDEDED]">
          <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText">
            01
          </td>
          <td class="leading-[20px] text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText ">
            <div class="flex justify-center items-center text-center">
              <p class="px-2 py-1 rounded-[4px] bg-[#EDEDED] leading-[12px] xl:leading-[16px] text-[12px] font-[600] text-primaryText">
                HSbEkaPN</p>
            </div>
          </td>
          <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText text-start pl-[5px] py-[14px]">
            Dhaka-Tangail-Bogura-Rangpur
          </td>
          <td class="border-r border-[#DBDBDB]">
            <div class="flex justify-center items-center">
              <p class="companyTableStatus">Yes</p>
            </div>
          </td>
          <td class="border-r border-[#DBDBDB]">
          </td>
        </tr>
        <tr class="border-b border-[#EDEDED]">
          <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText">
            01
          </td>
          <td class="leading-[20px] text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText ">
            <div class="flex justify-center items-center text-center">
              <p class="px-2 py-1 rounded-[4px] bg-[#EDEDED] leading-[12px] xl:leading-[16px] text-[12px] font-[600] text-primaryText">
                HSbEkaPN</p>
            </div>
          </td>
          <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText text-start pl-[5px] py-[14px]">
            Dhaka-Tangail-Bogura-Rangpur
          </td>
          <td class="border-r border-[#DBDBDB]">

          </td>
          <td class="border-r border-[#DBDBDB]">
            <div class="flex justify-center items-center">
              <p class="companyTableStatus">Yes</p>
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

<script>
import DropdownMenu from "../components/DropdownMenu.vue";

export default {
  components: {
    DropdownMenu
  }
}
</script>
