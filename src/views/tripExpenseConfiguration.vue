<template>
        <!-- Top nav bar start-->
        <div class="bg-white h-[72px] sticky top-0 border-b border-[#DBDBDB] z-10 px-[32px]">
          <div class="flex justify-between">
            <div class="flex justify-center items-center gap-x-[32px]">
                <p class="lg:leading-[16px] xl:leading-[28px] lg:text-[14px] xl:text-[20px] font-[600] text-primaryText">Trip Expense Configaration</p>
            </div>
            <div class="flex gap-x-2 p-4 justify-center items-center mr-6 ">
              <img src="../assets/person/person1.png" alt="" class="h-[30px] xl:h-[40px] w-[30px] xl:w-[40px] rounded-full">
              <p class="text-[#151414] leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[500]">Mostafa Mamun Emon</p>
              <img src="../assets/person/downArrow.svg" alt="" class="w-[12px] h-[6px]">
          </div>
          </div>
        </div>
        <!-- top nav bar end -->
        <!-- body start-->
        <div class="px-[30px] py-[24px]">
  <!--        card-->
          <div class="bg-white rounded">
            <div class="p-4">
                  <div class="flex justify-between items-center gap-x-4 w-full">
                  <div class="w-1/4 xl:w-1/5">
                    <p class="text-primaryText leading-[20px] text-[14px] xl:leading-[24px] xl:text-[16px] font-[600]">Bus operator</p>
                    <Dropdown class="w-full py-1 mt-[10px] placeholder:text-primaryText placeholder:leading-[16px] placeholder:text-[12px] xl:placeholder:leading-[20px] xl:placeholder:text-[14px]" v-model="selectedCity" :options="cities" optionLabel="name" placeholder="Dash Travels" />
                  </div>
                  <div class="flex items-end self-end gap-[10px] hidden">
                    <img src="../assets/svg/refresh.svg" alt="Refresh Img">
                    <p class="text-corporateError leading-[16px] text-[12px] font-[700]">Reset</p>
                  </div>
                </div>

                <div>

                <div class="p-4 bg-corporateBg rounded my-4 flex justify-between items-center">
                  <div class="flex items-center gap-x-4 w-1/2">
                    <div>
                      <img src="../assets/svg/hamburger.svg" alt="">
                    </div>
                    <div class="w-1/2">
                    <p class="text-primaryText leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[600]">Field name</p>
                    <input type="text" class="focus:outline-none mt-[10px] w-full border border-[#DBDBDB] rounded-[4px] pl-2 py-2 placeholder:text-[#676769] placeholder:leading-[16px] placeholder:text-[12px] xl:placeholder:leading-[20px] xl:placeholder:text-[14px]" placeholder="Oil">
                    </div>
                    <div class="w-1/2">
                    <p class="text-primaryText leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[600]"> Maximum value (TK)</p>
                    <input type="number" class="focus:outline-none mt-[10px] w-full border border-[#DBDBDB] rounded-[4px] pl-2 py-2 placeholder:text-[#676769] placeholder:leading-[16px] placeholder:text-[12px] xl:placeholder:leading-[20px] xl:placeholder:text-[14px]" placeholder="5000">
                    </div>
                  </div>
                  <div class="hidden">
                    <img src="../assets/svg/close-cirlce.svg" alt="">
                  </div>
                </div>
                </div>
                
                <router-link to="/tripExpenseConfigurationFilled" class="w-full border border-dashed border-[#B6B6B6] flex justify-center items-center bg-corporateBg rounded-[4px]"> 
                  <div class="flex justify-center items-center gap-x-[11px] py-[12px]"><img alt="" class="w-[10px] h-[10px]" src="/src/assets/svg/createPlus.svg">
                    <p class="text-primaryText font-[600] leading-[20px] text-[14px]">Add another agent</p>
                  </div>
                </router-link>
                </div>

                <hr class="border-t border-corporateBorder">
                <div class="px-[16px] py-[20px] w-full flex justify-center items-center">
                  <router-link to="/tripExpenseConfigurationFilled" class="lessOpacityCorporateButton">Create routes</router-link>
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
  