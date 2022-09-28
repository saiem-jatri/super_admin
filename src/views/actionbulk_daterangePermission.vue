<template>
  <!-- Top nav bar start-->
  <div class="bg-white h-[72px] sticky top-0 border-b border-[#DBDBDB] z-10">
    <div class="flex justify-between items-center">
      <div class="px-[30px] flex flex-col gap-y-[4px]">
        <p class="lg:leading-[16px] xl:leading-[28px] lg:text-[14px] xl:text-[20px] font-[600] text-primaryText">
          Online/Offline Access</p>
        <div class="flex justify-center items-center gap-x-[6px] mr-4">
          <p class="text-secondaryText leading-[12px] text-[8px] xl:leading-[16px] xl:text-[12px] font-[400]">
            Action in Bulk</p>
          <img alt="" class="w-1 h-2" src="../assets/svg/bgBack.svg">
          <p class="text-secondaryText leading-[12px] text-[8px] xl:leading-[16px] xl:text-[12px] font-[400]">
            Online/Offline Access</p>
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
                optionLabel="name" placeholder="All operator"/>
          </div>
          <div class="w-1/4">
            <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">
              Trip ID</p>
            <input class="createNormalInput" placeholder="Trip id" type="text">
          </div>
          <div class="w-1/4">
            <p class="text-primaryText leading-[20px] text-[14px] xl:leading-[24px] xl:text-[16px] font-[600]">Route</p>
            <Dropdown
                v-model="selectedCity"
                :options="cities"
                class="w-full py-[4px] mt-[10px] placeholder:text-primaryText placeholder:leading-[16px] placeholder:text-[12px] xl:placeholder:leading-[20px] xl:placeholder:text-[14px]"
                optionLabel="name" placeholder="All route"/>
          </div>
          <div class="w-1/4">
            <p class="text-primaryText leading-[20px] text-[14px] xl:leading-[24px] xl:text-[16px] font-[600]">
              Status</p>
            <Dropdown
                v-model="selectedCity"
                :options="cities"
                class="w-full py-[4px] mt-[10px] placeholder:text-primaryText placeholder:leading-[16px] placeholder:text-[12px] xl:placeholder:leading-[20px] xl:placeholder:text-[14px]"
                optionLabel="name" placeholder="Active"/>
          </div>
        </div>

      </div>

      <div class="flex justify-center pb-4">
        <button
            class="mt-5 flex gap-x-[9px] justify-center items-center bg-corporate text-white leading-[14px] xl:leading-[16px] text-[11px] xl:text-[12px] font-[500] py-3 pl-[17px] pr-[24px] rounded-full"><span>
                <img alt="" class="w-[13px] xl:h-[13px]" src="../assets/svg/white_search.svg">
              </span>Search
        </button>
      </div>
    </div>
    <div class="mt-3 xl:mt-4 bg-white rounded-[10px]">
      <div class="p-4">
        <p class="leading-[20px] xl:leading-[24px] text-[14px] xl:text-[16px] font-[600] text-primaryText">
          COUNTERMAN</p>
        <div class="mt-4 xl:mt-5 flex">
          <div class="w-[30%]">
            <p class="leading-[20px] xl:leading-[24px] text-[14px] xl:text-[16px] font-[400] text-[#4D4D4F]">Counter
              1</p>
          </div>

          <div class="w-[70%] flex flex-col gap-y-4">
            <div class="flex gap-x-4 items-center">
              <p class="w-[33.33%] leading-[20px] xl:leading-[24px] text-[14px] xl:text-[16px] font-[400] text-[#4D4D4F]">
                Fahim Ahmed</p>
              <p class="w-[33.33%] leading-[20px] xl:leading-[24px] text-[14px] xl:text-[16px] font-[400] text-[#4D4D4F]">
                Fahim Ahmed</p>
              <p class="w-[33.33%] leading-[20px] xl:leading-[24px] text-[14px] xl:text-[16px] font-[400] text-[#4D4D4F]">
                Fahim Ahmed</p>
            </div>
            <hr class="border-t border-dashed border-corporateBorder">
            <div class="flex gap-x-4 items-center">
              <p class="w-[33.33%] leading-[20px] xl:leading-[24px] text-[14px] xl:text-[16px] font-[400] text-[#4D4D4F]">
                Fahim Ahmed</p>
              <p class="w-[33.33%] leading-[20px] xl:leading-[24px] text-[14px] xl:text-[16px] font-[400] text-[#4D4D4F]">
                Fahim Ahmed</p>
              <p class="w-[33.33%] leading-[20px] xl:leading-[24px] text-[14px] xl:text-[16px] font-[400] text-[#4D4D4F]">
                Fahim Ahmed</p>
            </div>
          </div>

        </div>
        <hr class="border-t border-[#DBDBDB] mt-4 xl:mt-5">
        <div class="flex mt-3 xl:mt-4">
          <p class="w-[30%] leading-[20px] xl:leading-[24px] text-[14px] xl:text-[16px] font-[400] text-[#4D4D4F]">
            Counter 2</p>
          <div class="flex gap-x-4 items-center w-[70%]">
            <p class="w-[33.33%] leading-[20px] xl:leading-[24px] text-[14px] xl:text-[16px] font-[400] text-[#4D4D4F]">
              Fahim Ahmed</p>
            <p class="w-[33.33%] leading-[20px] xl:leading-[24px] text-[14px] xl:text-[16px] font-[400] text-[#4D4D4F]">
              Fahim Ahmed</p>
            <p class="w-[33.33%] leading-[20px] xl:leading-[24px] text-[14px] xl:text-[16px] font-[400] text-[#4D4D4F]">
              Fahim Ahmed</p>
          </div>
        </div>

        <hr class="border-t border-[#DBDBDB] mt-4 xl:mt-5">
        <div class="flex mt-3 xl:mt-4">
          <p class="w-[30%] leading-[20px] xl:leading-[24px] text-[14px] xl:text-[16px] font-[400] text-[#4D4D4F]">
            Counter 3</p>
          <div class="flex gap-x-4 items-center w-[70%]">
            <p class="w-[33.33%] leading-[20px] xl:leading-[24px] text-[14px] xl:text-[16px] font-[400] text-[#4D4D4F]">
              Fahim Ahmed</p>
            <p class="w-[33.33%] leading-[20px] xl:leading-[24px] text-[14px] xl:text-[16px] font-[400] text-[#4D4D4F]">
              Fahim Ahmed</p>
            <p class="w-[33.33%] leading-[20px] xl:leading-[24px] text-[14px] xl:text-[16px] font-[400] text-[#4D4D4F]">
              Fahim Ahmed</p>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-4 xl:mt-5 w-[60%]">
      <div class="flex justify-between items-center">
        <p class="text-primaryText leading-[16px] xl:leading-[20px] text-[14px] xl:leading-[24px] xl:text-[16px] font-[400] mb-6">
          *Last updated on 09:23 AM, 18 July 2022</p>
        <router-link class="flex justify-center items-center gap-x-[10px] text-white leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[500] bg-corporate rounded-full px-[20px] py-[11px] xl:px-[24px] xl:py-[13px]"
                     to="/dateRangePermissionEdit">
          <img alt="" class="text-white" src="/src/assets/svg/edit_white.svg">Edit permission
        </router-link>
      </div>
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
