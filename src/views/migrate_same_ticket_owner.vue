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
        <img alt="" class="w-[12px] h-[6px]" src="../assets/person/downArrow.svg">
      </div>
    </div>
  </div>
  <!-- top nav bar end -->

  <!-- body start-->
  <div class="px-[30px] py-[24px]">
    <!--card-->
    <div class="bg-white pb-4 rounded-[10px]">
      <div class="flex justify-between items-center divide-x border-b">
        <div class="p-4 w-1/2">
          <p class="leading-[20px] xl:leading-[24px] text-[14px] xl:text-[16px] font-[600] text-corporateSecondaryBlue">
            MIGRATE
            FROM:
            TRIP 1</p>
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
                <img alt="" class="h-5 w-5" src="@/assets/svg/count2.svg">
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
                <img alt="" class="h-5 w-5" src="@/assets/svg/count2.svg">
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="px-4 pt-4 pb-1">
        <div class="flex justify-between items-center border-b pb-4">
          <div class="w-1/2 border-r border-dashed border-corporateBorder">
            <p class="leading-[20px] xl:leading-[24px] text-[14px] xl:text-[16px] font-[600] text-corporateSecondaryBlue">
              SEATS</p>
            <div class="mt-2 xl:mt-4 flex flex-col justify-center items-center">
              <div class="flex gap-x-[70px] xl:gap-x-[80px] mt-3">
                <div class="flex gap-x-[20px] xl:gap-x-[26px]">
                  <button class="migrateSeatPrimaryOrange">A1</button>
                  <button class="migrateSeatPrimaryOrange">A2</button>
                </div>
                <div class="flex gap-x-[20px] xl:gap-x-[26px]">
                  <button class="migrateSeatPrimaryOrange">A3</button>
                  <button class="migrateSeatPrimaryOrange">A4</button>
                </div>
              </div>
              <div class="flex gap-x-[70px] xl:gap-x-[80px] mt-3">
                <div class="flex gap-x-[20px] xl:gap-x-[26px]">
                  <button class="migrateSeatPrimaryOrange">B1</button>
                  <button class="migrateSeatPrimaryOrange">B2</button>
                </div>
                <div class="flex gap-x-[20px] xl:gap-x-[26px]">
                  <button class="migrateSeatPrimaryOrange">B3</button>
                  <button class="migrateSeatAsh">B4</button>
                </div>
              </div>
              <div class="flex gap-x-[70px] xl:gap-x-[80px] mt-3">
                <div class="flex gap-x-[20px] xl:gap-x-[26px]">
                  <button class="migrateSeatAsh">C1</button>
                  <button class="migrateSeatAsh">C2</button>
                </div>
                <div class="flex gap-x-[20px] xl:gap-x-[26px]">
                  <button class="migrateSeatPrimaryOrange">C3</button>
                  <button class="migrateSeatAsh">C4</button>
                </div>
              </div>
              <div class="flex gap-x-[70px] xl:gap-x-[80px] mt-3">
                <div class="flex gap-x-[20px] xl:gap-x-[26px]">
                  <button class="migrateSeatAsh">D1</button>
                  <button class="migrateSeatAsh">D2</button>
                </div>
                <div class="flex gap-x-[20px] xl:gap-x-[26px]">
                  <button class="migrateSeatPrimaryOrange">D3</button>
                  <button class="migrateSeatAsh">D4</button>
                </div>
              </div>
              <div class="flex gap-x-[70px] xl:gap-x-[80px] mt-3">
                <div class="flex gap-x-[20px] xl:gap-x-[26px]">
                  <button class="migrateSeatAsh">E1</button>
                  <button class="migrateSeatAsh">E2</button>
                </div>
                <div class="flex gap-x-[20px] xl:gap-x-[26px]">
                  <button class="migrateSeatAsh">E3</button>
                  <button class="migrateSeatAsh">E4</button>
                </div>
              </div>
              <div class="flex gap-x-[70px] xl:gap-x-[80px] mt-3">
                <div class="flex gap-x-[20px] xl:gap-x-[26px]">
                  <button class="migrateSeatAsh">F1</button>
                  <button class="migrateSeatAsh">F2</button>
                </div>
                <div class="flex gap-x-[20px] xl:gap-x-[26px]">
                  <button class="migrateSeatPrimaryOrange border border-corporate tooltip bg-white">
                        <span class="tooltiptext ">
                          <div class="w-[286px] rounded-[4px] text-primaryText bg-white">
                            <div class="border border-corporateBorder">
                              <p class="border-b border-corporateBorder font-semibold py-[8px]">[F3]</p>
                            <div class="flex items-center">
                              <div class="w-[30%] border-r border-corporateBorder">
                                <p class="w-full h-[34px] text-center flex justify-center items-center">
                                  Name
                                </p>
                              </div>
                              <div class="w-[70%]">
                                <p class="w-full h-[34px] text-center flex justify-center items-center">
                                  Abdul Karim
                                </p>
                             </div>
                            </div>
                            <div class="flex items-center bg-[#F5F7F7]">
                              <div class="w-[30%] border-r border-corporateBorder">
                                <p class="w-full h-[34px] text-center flex justify-center items-center">
                                  Mobile
                                </p>
                              </div>
                              <div class="w-[70%]">
                                <p class="w-full h-[34px] text-center flex justify-center items-center">
                                  99
                                </p>
                             </div>
                            </div>
                            <div class="flex items-center">
                              <div class="w-[30%] border-r border-corporateBorder">
                                <p class="w-full h-[34px] text-center flex justify-center items-center">
                                  From - to
                                </p>
                              </div>
                              <div class="w-[70%]">
                                <p class="w-full h-[34px] text-center flex justify-center items-center">
                                  Abdul Karim
                                </p>
                             </div>
                            </div>
                             <div class="flex items-center bg-[#F5F7F7]">
                              <div class="w-[30%] border-r border-corporateBorder">
                                <p class="w-full h-[34px] text-center flex justify-center items-center">
                                  Issued on
                                </p>
                              </div>
                              <div class="w-[70%]">
                                <p class="w-full h-[34px] text-center flex justify-center items-center">
                                  99
                                </p>
                             </div>
                            </div>
                            </div>
                            <div class="pt-[10px] pb-2 border border-corporateBorder">
                            <a class="py-2 px-8 bg-[#E0293B] text-white rounded-full mr-2" type="button"><i
                                class="fas fa-times"></i> Cancel ticket</a>
                              </div>
                          </div>
                        </span>
                    F3
                  </button>
                  <button class="migrateSeatPrimaryOrange border border-corporate tooltip bg-white">
                        <span class="tooltiptext ">
                          <div class="w-[286px] rounded-[4px] text-primaryText bg-white">
                            <div class="border border-corporateBorder">
                              <p class="border-b border-corporateBorder font-semibold py-[8px]">[F4]</p>
                            <div class="flex items-center">
                              <div class="w-[30%] border-r border-corporateBorder">
                                <p class="w-full h-[34px] text-center flex justify-center items-center">
                                  Name
                                </p>
                              </div>
                              <div class="w-[70%]">
                                <p class="w-full h-[34px] text-center flex justify-center items-center">
                                  Abdul Karim
                                </p>
                             </div>
                            </div>
                            <div class="flex items-center bg-[#F5F7F7]">
                              <div class="w-[30%] border-r border-corporateBorder">
                                <p class="w-full h-[34px] text-center flex justify-center items-center">
                                  Mobile
                                </p>
                              </div>
                              <div class="w-[70%]">
                                <p class="w-full h-[34px] text-center flex justify-center items-center">
                                  99
                                </p>
                             </div>
                            </div>
                            <div class="flex items-center">
                              <div class="w-[30%] border-r border-corporateBorder">
                                <p class="w-full h-[34px] text-center flex justify-center items-center">
                                  From - to
                                </p>
                              </div>
                              <div class="w-[70%]">
                                <p class="w-full h-[34px] text-center flex justify-center items-center">
                                  Abdul Karim
                                </p>
                             </div>
                            </div>
                             <div class="flex items-center bg-[#F5F7F7]">
                              <div class="w-[30%] border-r border-corporateBorder">
                                <p class="w-full h-[34px] text-center flex justify-center items-center">
                                  Issued on
                                </p>
                              </div>
                              <div class="w-[70%]">
                                <p class="w-full h-[34px] text-center flex justify-center items-center">
                                  99
                                </p>
                             </div>
                            </div>
                            </div>
                            <div class="pt-[10px] pb-2 border border-corporateBorder">
                            <a class="py-2 px-8 bg-[#E0293B] text-white rounded-full mr-2" type="button"><i
                                class="fas fa-times"></i> Cancel ticket</a>
                              </div>
                          </div>
                        </span>
                    F4
                  </button>
                </div>
              </div>
              <div class="flex gap-x-[70px] xl:gap-x-[80px] mt-3">
                <div class="flex gap-x-[20px] xl:gap-x-[26px]">
                  <button class="migrateSeatAsh">G1</button>
                  <button class="migrateSeatAsh">G2</button>
                </div>
                <div class="flex gap-x-[20px] xl:gap-x-[26px]">
                  <button class="migrateSeatAsh">G3</button>
                  <button class="migrateSeatAsh">G4</button>
                </div>
              </div>
              <div class="flex gap-x-[70px] xl:gap-x-[80px] mt-3">
                <div class="flex gap-x-[20px] xl:gap-x-[26px]">
                  <button class="migrateSeatAsh">H1</button>
                  <button class="migrateSeatAsh">H2</button>
                </div>
                <div class="flex gap-x-[20px] xl:gap-x-[26px]">
                  <button class="migrateSeatAsh">H3</button>
                  <button class="migrateSeatAsh">H4</button>
                </div>
              </div>
              <div class="flex gap-x-[70px] xl:gap-x-[80px] mt-3">
                <div class="flex gap-x-[20px] xl:gap-x-[26px]">
                  <button class="migrateSeatAsh">I1</button>
                  <button class="migrateSeatAsh">I2</button>
                </div>
                <div class="flex gap-x-[20px] xl:gap-x-[26px]">
                  <button class="migrateSeatAsh">I3</button>
                  <button class="migrateSeatAsh">I4</button>
                </div>
              </div>
            </div>

          </div>

          <div class="w-1/2">
            <div class="mt-9 xl:mt-12 flex flex-col justify-center items-center">
              <div class="flex gap-x-[70px] xl:gap-x-[80px]">
                <div class="flex gap-x-[20px] xl:gap-x-[26px] relative">
                  <p class="absolute -left-8 top-0 2xl:top-3 font-medium text-[12px] leading-4 hidden">[F3]</p>
                  <button class="migrateSeat">A1</button>
                  <button class="migrateSeat">A2</button>
                  <p class="absolute -right-8 top-0 2xl:top-3 font-medium text-[12px] leading-4 hidden">[D3]</p>
                </div>
                <div class="flex gap-x-[20px] xl:gap-x-[26px] relative">
                  <p class="absolute -left-8 top-0 2xl:top-3 font-medium text-[12px] leading-4 hidden">[F3]</p>
                  <button class="migrateSeat">A3</button>
                  <button class="migrateSeat">A4</button>
                  <p class="absolute -right-8 top-0 2xl:top-3 font-medium text-[12px] leading-4 hidden">[D3]</p>
                </div>
              </div>

              <div class="flex gap-x-[70px] xl:gap-x-[80px] mt-3">
                <div class="flex gap-x-[20px] xl:gap-x-[26px] relative">
                  <p class="absolute -left-8 top-0 2xl:top-3 font-medium text-[12px] leading-4 hidden">[F3]</p>
                  <button class="migrateSeatAsh">B1</button>
                  <button class="migrateSeatAsh">B2</button>
                  <p class="absolute -right-8 top-0 2xl:top-3 font-medium text-[12px] leading-4 hidden">[D3]</p>
                </div>
                <div class="flex gap-x-[20px] xl:gap-x-[26px] relative">
                  <p class="absolute -left-8 top-0 2xl:top-3 font-medium text-[12px] leading-4 hidden">[F3]</p>
                  <button class="migrateSeat">B3</button>
                  <button class="migrateSeatAsh">B4</button>
                  <p class="absolute -right-8 top-0 2xl:top-3 font-medium text-[12px] leading-4 hidden">[D3]</p>
                </div>
              </div>

              <div class="flex gap-x-[70px] xl:gap-x-[80px] mt-3">
                <div class="flex gap-x-[20px] xl:gap-x-[26px] relative">
                  <p class="absolute -left-8 top-0 2xl:top-3 font-medium text-[12px] leading-4">[F4]</p>
                  <button class="migrateSeat tooltip bg-white">
                        <span class="tooltiptext ">
                          <div class="w-[286px] border border-corporateBorder rounded-[4px] text-primaryText bg-white">
                            <p class="border-b border-corporateBorder py-[8px]">Selected seat: <span
                                class="font-semibold">[C1]</span></p>
                            <div class="flex gap-x-[10px] items-center px-2">
                              <label class="w-[30%] bg-white" for="#">Migrate for:</label>
                              <div class="w-[70%]">
                                <Dropdown v-model="selectedCity"
                                          :options="cities"
                                          class="w-full py-[4px] mb-2 mt-[10px] text-left placeholder:text-primaryText"
                                          optionLabel="name"
                                          placeholder="Owner"/>
                             </div>
                            </div>
                          </div>
                        </span>
                    C1
                  </button>
                  <button class="migrateSeat tooltip bg-white">
                        <span class="tooltiptext ">
                          <div class="w-[286px] border border-corporateBorder rounded-[4px] text-primaryText bg-white">
                            <p class="border-b border-corporateBorder py-[8px]">Selected seat: <span
                                class="font-semibold">[C2]</span></p>
                            <div class="flex gap-x-[10px] items-center px-2">
                              <label class="w-[30%] bg-white" for="#">Migrate for:</label>
                              <div class="w-[70%]">
                                <Dropdown v-model="selectedCity"
                                          :options="cities"
                                          class="w-full py-[4px] mb-2 mt-[10px] text-left placeholder:text-primaryText"
                                          optionLabel="name"
                                          placeholder="Owner"/>
                             </div>
                            </div>
                          </div>
                        </span>
                    C2
                  </button>
                  <p class="absolute -right-8 top-0 2xl:top-3 font-medium text-[12px] leading-4">[F3]</p>
                </div>
                <div class="flex gap-x-[20px] xl:gap-x-[26px] relative">
                  <p class="absolute -left-8 top-0 2xl:top-3 font-medium text-[12px] leading-4 hidden">[F3]</p>
                  <button class="migrateSeat">C3</button>
                  <button class="migrateSeatAsh">C4</button>
                  <p class="absolute -right-8 top-0 2xl:top-3 font-medium text-[12px] leading-4 hidden">[D3]</p>
                </div>
              </div>

              <div class="flex gap-x-[70px] xl:gap-x-[80px] mt-3">
                <div class="flex gap-x-[20px] xl:gap-x-[26px] relative">
                  <p class="absolute -left-8 top-0 2xl:top-3 font-medium text-[12px] leading-4 hidden">[F3]</p>
                  <button class="migrateSeatAsh">D1</button>
                  <button class="migrateSeatAsh">D2</button>
                  <p class="absolute -right-8 top-0 2xl:top-3 font-medium text-[12px] leading-4 hidden">[D3]</p>
                </div>
                <div class="flex gap-x-[20px] xl:gap-x-[26px] relative">
                  <p class="absolute -left-8 top-0 2xl:top-3 font-medium text-[12px] leading-4 hidden">[F3]</p>
                  <button class="migrateSeat">D2</button>
                  <button class="migrateSeatAsh">D4</button>
                  <p class="absolute -right-8 top-0 2xl:top-3 font-medium text-[12px] leading-4 hidden">[D3]</p>
                </div>
              </div>

              <div class="flex gap-x-[70px] xl:gap-x-[80px] mt-3">
                <div class="flex gap-x-[20px] xl:gap-x-[26px] relative">
                  <p class="absolute -left-8 top-0 2xl:top-3 font-medium text-[12px] leading-4 hidden">[F3]</p>
                  <button class="migrateSeatAsh">E1</button>
                  <button class="migrateSeatAsh">E2</button>
                  <p class="absolute -right-8 top-0 2xl:top-3 font-medium text-[12px] leading-4 hidden">[D3]</p>
                </div>
                <div class="flex gap-x-[20px] xl:gap-x-[26px] relative">
                  <p class="absolute -left-8 top-0 2xl:top-3 font-medium text-[12px] leading-4 hidden">[F3]</p>
                  <button class="migrateSeatAsh">E3</button>
                  <button class="migrateSeatAsh">E4</button>
                  <p class="absolute -right-8 top-0 2xl:top-3 font-medium text-[12px] leading-4 hidden">[D3]</p>
                </div>
              </div>

              <div class="flex gap-x-[70px] xl:gap-x-[80px] mt-3">
                <div class="flex gap-x-[20px] xl:gap-x-[26px] relative">
                  <p class="absolute -left-8 top-0 2xl:top-3 font-medium text-[12px] leading-4 hidden">[F3]</p>
                  <button class="migrateSeatAsh">F1</button>
                  <button class="migrateSeatAsh">F2</button>
                  <p class="absolute -right-8 top-0 2xl:top-3 font-medium text-[12px] leading-4 hidden">[D3]</p>
                </div>
                <div class="flex gap-x-[20px] xl:gap-x-[26px] relative">
                  <p class="absolute -left-8 top-0 2xl:top-3 font-medium text-[12px] leading-4 hidden">[F3]</p>
                  <button class="migrateSeatAsh">F3</button>
                  <button class="migrateSeatAsh">F4</button>
                  <p class="absolute -right-8 top-0 2xl:top-3 font-medium text-[12px] leading-4 hidden">[D3]</p>
                </div>
              </div>

              <div class="flex gap-x-[70px] xl:gap-x-[80px] mt-3">
                <div class="flex gap-x-[20px] xl:gap-x-[26px] relative">
                  <p class="absolute -left-8 top-0 2xl:top-3 font-medium text-[12px] leading-4 hidden">[F3]</p>
                  <button class="migrateSeatDarkAsh">G1</button>
                  <button class="migrateSeatDarkAsh">G2</button>
                  <p class="absolute -right-8 top-0 2xl:top-3 font-medium text-[12px] leading-4 hidden">[D3]</p>
                </div>
                <div class="flex gap-x-[20px] xl:gap-x-[26px] relative">
                  <p class="absolute -left-8 top-0 2xl:top-3 font-medium text-[12px] leading-4 hidden">[F3]</p>
                  <button class="migrateSeatDarkAsh">G3</button>
                  <button class="migrateSeatDarkAsh">G4</button>
                  <p class="absolute -right-8 top-0 2xl:top-3 font-medium text-[12px] leading-4 hidden">[D3]</p>
                </div>
              </div>

              <div class="flex gap-x-[70px] xl:gap-x-[80px] mt-3">
                <div class="flex gap-x-[20px] xl:gap-x-[26px] relative">
                  <p class="absolute -left-8 top-0 2xl:top-3 font-medium text-[12px] leading-4 hidden">[F3]</p>
                  <button class="migrateSeatAsh">H1</button>
                  <button class="migrateSeatAsh">H2</button>
                  <p class="absolute -right-8 top-0 2xl:top-3 font-medium text-[12px] leading-4 hidden">[D3]</p>
                </div>
                <div class="flex gap-x-[20px] xl:gap-x-[26px] relative">
                  <p class="absolute -left-8 top-0 2xl:top-3 font-medium text-[12px] leading-4 hidden">[F3]</p>
                  <button class="migrateSeatAsh">H3</button>
                  <button class="migrateSeatAsh">H4</button>
                  <p class="absolute -right-8 top-0 2xl:top-3 font-medium text-[12px] leading-4 hidden">[D3]</p>
                </div>
              </div>

              <div class="flex gap-x-[70px] xl:gap-x-[80px] mt-3">
                <div class="flex gap-x-[20px] xl:gap-x-[26px] relative">
                  <p class="absolute -left-8 top-0 2xl:top-3 font-medium text-[12px] leading-4 hidden">[F3]</p>
                  <button class="migrateSeatAsh">I1</button>
                  <button class="migrateSeatAsh">I2</button>
                  <p class="absolute -right-8 top-0 2xl:top-3 font-medium text-[12px] leading-4 hidden">[D3]</p>
                </div>
                <div class="flex gap-x-[20px] xl:gap-x-[26px] relative">
                  <p class="absolute -left-8 top-0 2xl:top-3 font-medium text-[12px] leading-4 hidden">[F3]</p>
                  <button class="migrateSeatAsh">I3</button>
                  <button class="migrateSeatAsh">I4</button>
                  <p class="absolute -right-8 top-0 2xl:top-3 font-medium text-[12px] leading-4 hidden">[D3]</p>
                </div>
              </div>


            </div>
          </div>
        </div>
        <!--modal-->
        <div class="flex items-center justify-center">
          <button class="createBtn mt-5" @click="toggleModal()">Confirm migration</button>
        </div>
        <div id="modal" class="fixed z-10 overflow-y-auto top-0 w-full left-0 hidden">
          <div
              class="flex items-center justify-center min-height-100vh pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div class="fixed inset-0 transition-opacity">
              <div class="absolute inset-0 bg-gray-900 opacity-75"/>
            </div>
            <span class="hidden sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>
            <div
                aria-labelledby="modal-headline"
                aria-modal="true"
                class="inline-block align-center bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all ease-in-out delay-700 sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
                role="dialog">
              <div
                  class="w-full px-[24px] py-[8px] bg-corporate flex justify-between items-center transition transform ">
                <p class="leading-[24px] xl:leading-[28px] text-[18px] xl:text-[20px] font-[500] text-white">
                  Migrate Trip</p>
                <img alt="" class="h-5 w-5 cursor-pointer" src="../assets/svg/modal_cross.svg"
                     @click="toggleModal()">
              </div>
              <p class="px-[24px] mt-5 text-center">Are you sure you want to migrate this trip from trip 1 <br> to
                trip
                2</p>

              <div class="px-4 py-3 flex justify-center items-center gap-x-[16px] mt-8">
                <button class="py-2 px-8 bg-[#E0293B] text-white rounded-full mr-2"
                        type="button"
                        @click="toggleModal()"><i class="fas fa-times"></i> Cancel
                </button>
                <button class="py-2 px-6 bg-corporate text-white rounded-full mr-2" type="button"><i
                    class="fas fa-plus"></i>Migrate trip
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-4 xl:mt-5 bg-[#FDF0F1] p-[18px] flex gap-x-2 rounded-[10px]">
      <img alt="" src="../assets/svg/warning.svg">
      <p>Seat [F3] is already booked in trip 2. You have migrate the seat manually or cancel the tickets.</p>
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


/*tooltip*/
.tooltip {
  position: relative;
  display: inline-block;
}

.tooltip .tooltiptext {
  visibility: hidden;
  width: 120px;
  background-color: white;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;

  /* Position the tooltip */
  position: absolute;
  z-index: 10;
}

.tooltip:hover .tooltiptext {
  visibility: visible;
}
</style>

<script>
export default {
  data() {
    return {
      selectedCity: null,
      cities: [
        {name: 'New York', code: 'NY'},
        {name: 'Rome', code: 'RM'}
      ]
    }
  },
  methods: {
    toggleModal() {
      document.getElementById('modal').classList.toggle('hidden')
    }
  }
}

</script>
