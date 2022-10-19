<template>
      <!-- Top nav bar start-->
      <div class="bg-white h-[72px] sticky top-0 border-b border-[#DBDBDB] z-10">
        <div class="flex justify-between items-center">
          <div class="pl-8 flex flex-col gap-y-2">
            <p class="text-[#151414] leading-[28px] text-[20px] font-[600]">Migrate Trips</p>
          </div>
          <div
              class="w-[230px] xl:w-[270px] h-[40px] border border-[#DBDBDB] flex justify-center items-center leading-[20px] rounded-[4px] pl-14 xl:pl-[9px] overflow-hidden">
            <img alt="" class="h-5 w-5" src="@/assets/svg/search.svg">
            <input
                class="outline-none pl-2 placeholder:text-[#4D4D4F] placeholder:text-[14px] placeholder:leading-[20px]"
                placeholder="PNR or mobile number"
                type="text">
          </div>
          <div class="flex gap-x-2 p-4 justify-center items-center mr-6 ">
            <img alt="" class="h-[30px] xl:h-[40px] w-[30px] xl:w-[40px] rounded-full"
                 src="@/assets/person/person1.png">
            <p class="text-[#151414] leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[500]">Admin
              Name</p>
            <img alt="" class="w-[12px] h-[6px]" src="@/assets/person/downArrow.svg">
          </div>
        </div>
      </div>
      <!-- top nav bar end -->

      <!-- body start-->
      <div class="px-[30px] py-[24px]">
        <!--        card-->
        <div class="bg-white rounded-[10px]">
          <div class="flex justify-between items-center divide-x border-b">
            <div class="p-4 w-1/2">
              <p class="leading-[20px] xl:leading-[24px] text-[14px] xl:text-[16px] font-[600] text-corporateSecondaryBlue">
                MIGRATE FROM: TRIP 1</p>
              <div class="flex justify-start items-center gap-x-4 w-full mt-3 xl:mt-4">
                <div class="w-1/2">
                  <p class="text-primaryText leading-[20px] text-[14px] xl:leading-[24px] xl:text-[16px] font-[600]">
                    Operator</p>
                  <Dropdown
                      v-model="selectedCity"
                      :options="cities"
                      class="w-full py-[4px] mt-[10px] placeholder:text-primaryText placeholder:leading-[16px] placeholder:text-[12px] xl:placeholder:leading-[20px] xl:placeholder:text-[14px]"
                      optionLabel="name" placeholder="Select bus operator"/>
                </div>
                <div class="w-1/2">
                  <p class="text-primaryText leading-[20px] text-[14px] xl:leading-[24px] xl:text-[16px] font-[600]">
                    Route</p>
                  <Dropdown
                      v-model="selectedCity"
                      :options="cities"
                      class="w-full py-[4px] mt-[10px] placeholder:text-primaryText placeholder:leading-[16px] placeholder:text-[12px] xl:placeholder:leading-[20px] xl:placeholder:text-[14px]"
                      optionLabel="name" placeholder="Select route"/>
                </div>
              </div>
              <div class="flex justify-start items-center gap-x-4 w-full mt-3 xl:mt-4">
                <div class="w-1/2">
                  <p class="text-primaryText leading-[20px] text-[14px] xl:leading-[24px] xl:text-[16px] font-[600]">
                    Trip</p>
                  <Dropdown
                      v-model="selectedCity"
                      :options="cities"
                      class="w-full py-[4px] mt-[10px] placeholder:text-primaryText placeholder:leading-[16px] placeholder:text-[12px] xl:placeholder:leading-[20px] xl:placeholder:text-[14px]"
                      optionLabel="name" placeholder="Select trip"/>
                </div>
                <div class="w-1/2">
                  <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">
                    Date</p>
                  <div
                      class="w-full h-[40px] border border-[#DBDBDB] flex justify-between items-center mt-[10px] leading-[20px] rounded-[4px] px-[20px] xl:px-[4px] 2xl:px-[8px] overflow-hidden">
                    <input
                        class="outline-none placeholder:text-[#4D4D4F] placeholder:text-[14px] placeholder:leading-[20px]"
                        placeholder="Select date"
                        type="text">
                    <img alt="" class="h-5 w-5" src="../assets/svg/count2.svg">
                  </div>
                </div>
              </div>
            </div>
            <div class="p-4 w-1/2">
              <p class="leading-[20px] xl:leading-[24px] text-[14px] xl:text-[16px] font-[600] text-corporateSecondaryBlue">
                MIGRATE
                FROM:
                TRIP 2</p>
              <div class="flex justify-start items-center gap-x-4 w-full mt-3 xl:mt-4">
                <div class="w-1/2">
                  <p class="text-primaryText leading-[20px] text-[14px] xl:leading-[24px] xl:text-[16px] font-[600]">
                    Operator</p>
                  <Dropdown
                      v-model="selectedCity"
                      :options="cities"
                      class="w-full py-[4px] mt-[10px] placeholder:text-primaryText placeholder:leading-[16px] placeholder:text-[12px] xl:placeholder:leading-[20px] xl:placeholder:text-[14px]"
                      optionLabel="name" placeholder="Select bus operator"/>
                </div>
                <div class="w-1/2">
                  <p class="text-primaryText leading-[20px] text-[14px] xl:leading-[24px] xl:text-[16px] font-[600]">
                    Route</p>
                  <Dropdown
                      v-model="selectedCity"
                      :options="cities"
                      class="w-full py-[4px] mt-[10px] placeholder:text-primaryText placeholder:leading-[16px] placeholder:text-[12px] xl:placeholder:leading-[20px] xl:placeholder:text-[14px]"
                      optionLabel="name" placeholder="Select route"/>
                </div>
              </div>
              <div class="flex justify-start items-center gap-x-4 w-full mt-3 xl:mt-4">
                <div class="w-1/2">
                  <p class="text-primaryText leading-[20px] text-[14px] xl:leading-[24px] xl:text-[16px] font-[600]">
                    Trip</p>
                  <Dropdown
                      v-model="selectedCity"
                      :options="cities"
                      class="w-full py-[4px] mt-[10px] placeholder:text-primaryText placeholder:leading-[16px] placeholder:text-[12px] xl:placeholder:leading-[20px] xl:placeholder:text-[14px]"
                      optionLabel="name" placeholder="Select trip"/>
                </div>
                <div class="w-1/2">
                  <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">
                    Date</p>
                  <div
                      class="w-full h-[40px] border border-[#DBDBDB] flex justify-between items-center mt-[10px] leading-[20px] rounded-[4px] px-[20px] xl:px-[4px] 2xl:px-[8px] overflow-hidden">
                    <input
                        class="outline-none placeholder:text-[#4D4D4F] placeholder:text-[14px] placeholder:leading-[20px]"
                        placeholder="Select date"
                        type="text">
                    <img alt="" class="h-5 w-5" src="../assets/svg/count2.svg">
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="p-4">
            <div class="flex justify-between items-center">
              <div class="w-1/2 border-r border-dashed border-corporateBorder">
                <p class="leading-[20px] xl:leading-[24px] text-[14px] xl:text-[16px] font-[600] text-corporateSecondaryBlue">
                  SEATS</p>
                <div class="mt-5 xl:mt-7 flex flex-col gap-y-3 justify-center items-center">

                  <div class="flex gap-x-[20px] xl:gap-x-[26px]">
                      <button class="migrateSeat">A1</button>
                      <button class="migrateSeat">A2</button>
                      <button class="migrateSeat blankSeat">&nbsp;</button>
                      <button class="migrateSeat">A3</button>
                      <button class="migrateSeat">A4</button>
                  </div>

                  <div class="flex gap-x-[20px] xl:gap-x-[26px]">
                      <button class="migrateSeatAsh">B1</button>
                      <button class="migrateSeatAsh">B2</button>
                      <button class="migrateSeatAsh blankSeat">&nbsp;</button>
                      <button class="migrateSeat">B3</button>
                      <button class="migrateSeatAsh">B4</button>
                  </div>

                  <div class="flex gap-x-[20px] xl:gap-x-[26px]">
                      <button class="migrateSeatAsh">C1</button>
                      <button class="migrateSeatAsh">C2</button>
                      <button class="migrateSeat blankSeat">&nbsp;</button>
                      <button class="migrateSeatAsh">C3</button>
                      <button class="migrateSeatAsh">C4</button>
                  </div>

                  <div class="flex gap-x-[20px] xl:gap-x-[26px]">
                      <button class="migrateSeatAsh">D1</button>
                      <button class="migrateSeatAsh">D2</button>
                      <button class="migrateSeat blankSeat">&nbsp;</button>
                      <button class="migrateSeatAsh">D3</button>
                      <button class="migrateSeatAsh">D4</button>
                  </div>

                  <div class="flex gap-x-[20px] xl:gap-x-[26px]">
                      <button class="migrateSeatAsh">E1</button>
                      <button class="migrateSeatAsh">E2</button>
                      <button class="migrateSeat blankSeat">&nbsp;</button>
                      <button class="migrateSeatAsh">E3</button>
                      <button class="migrateSeatAsh">E4</button>
                  </div>

                  <div class="flex gap-x-[20px] xl:gap-x-[26px]">
                      <button class="migrateSeatAsh">F1</button>
                      <button class="migrateSeatAsh">F2</button>
                      <button class="migrateSeat blankSeat">&nbsp;</button>
                      <button class="migrateSeatAsh">F3</button>
                      <button class="migrateSeatAsh">F4</button>
                  </div>

                  <div class="flex gap-x-[20px] xl:gap-x-[26px]">
                      <button class="migrateSeatAsh">G1</button>
                      <button class="migrateSeatAsh">G2</button>
                      <button class="migrateSeat blankSeat">&nbsp;</button>
                      <button class="migrateSeatAsh">G3</button>
                      <button class="migrateSeatAsh">G4</button>
                  </div>

                  <div class="flex gap-x-[20px] xl:gap-x-[26px]">
                      <button class="migrateSeatAsh">H1</button>
                      <button class="migrateSeatAsh">H2</button>
                      <button class="migrateSeat blankSeat">&nbsp;</button>
                      <button class="migrateSeatAsh">H3</button>
                      <button class="migrateSeatAsh">H4</button>
                  </div>

                  <div class="flex gap-x-[20px] xl:gap-x-[26px]">
                      <button class="migrateSeatAsh">I1</button>
                      <button class="migrateSeatAsh">I2</button>
                      <button class="migrateSeat blankSeat">&nbsp;</button>
                      <button class="migrateSeatAsh">I3</button>
                      <button class="migrateSeatAsh">I4</button>
                  </div>
                </div>
              </div>

              <div class="w-1/2 flex justify-center items-center h-full">
                <div class="flex flex-col justify-center items-center">
                  <img alt="" class="w-5 h-5" src="../assets/svg/appear.svg">
                  <p class="leading-[20px] xl:leading-[24px] text-[14px] xl:text-[16px] text-corporateSecondaryBlack mt-[10px]">
                    Seats will be available after selecting route and trip.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Buttons just for show routing. Remove after development -->
       <div class="mt-6">
       <p class="mb-4 italic text-red-500">*Buttons just for show routing. Remove after development*</p>
        <router-link to="/MigrateSelect" class="corporateButton">Next</router-link>
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

