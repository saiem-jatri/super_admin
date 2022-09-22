<template>
  <div class="flex bg-corporateBg">
    <!-- Side Nav bar -->
    <div class="h-screen w-[280px] bg-white border-r border-[#DBDBDB]">
      <div class="flex flex-col justify-between">
        <div class="px-[10px] flex justify-center items-center py-[30px]">
          <img alt="" class="w-[66px] h-[32px]" src="@/assets/imgs/Logo.png">
        </div>
        <div class="px-[10px] overflow-y-auto h-[calc(100vh-150px)]">
          <a class="menu">Dashboard</a>
          <a class="bg-corporate w-full text-white p-1 rounded-sm block cursor-pointer">Bus Company</a>
          <a class="menu">Routes</a>
          <a class="menu">Routes</a>
          <a class="menu">Counter</a>
          <a class="menu">Trips</a>
          <a class="menu">User</a>
          <a class="menu">Agent</a>
          <a class="menu">Migrate Trips</a>
          <a class="menu">Migrate Tickets</a>
          <a class="menu">Trip Expense Configaration</a>
          <a class="dropDownMenu flex justify-center items-center">Reports <span><img alt=""
                                                                                      class="w-[12px] h-[7px]"
                                                                                      src="../assets/svg/down_arrow.svg"></span></a>
          <a class="dropDownMenu flex justify-center items-center">Invoice <span><img alt=""
                                                                                      class="w-[12px] h-[7px]"
                                                                                      src="../assets/svg/down_arrow.svg"></span></a>
          <a class="menu">Offer & Promotion</a>
          <a class="dropDownMenu flex justify-center items-center">Action in Bulk <span><img
              alt="" class="w-[12px] h-[7px]" src="../assets/svg/down_arrow.svg"></span></a>
          <p class="menuSection ">CONFIGARATION</p>
          <a class="menu">Bus</a>
          <a class="menu">Stopage</a>
          <a class="menu">Challan Configaration</a>
          <a class=" py-[8px] w-full text-black leading-[20px] text-[14px] font-[500] block cursor-pointer">Fees</a>
        </div>
        <button class="p-4 flex justify-center items-center gap-x-4 border-t border-[#DBDBDB]"><img
            alt="" class="h-[16px] w-[16px]" src="../assets/svg/logout.svg"> Logout
        </button>
      </div>

    </div>
    <!-- side nav bar end -->
    <div class="h-screen w-full overflow-y-auto bg-[#F7F7F7]">
      <!-- Top nav bar start-->
      <div class="bg-white h-[72px] sticky top-0 border-b border-[#DBDBDB] z-10">
        <div class="flex justify-between items-center">
          <div class="pl-8 flex flex-col gap-y-2">
            <p class="text-[#151414] leading-[28px] text-[20px] font-[600]">User</p>
            <div class="flex justify-center items-center gap-x-[6px]">
              <p class="text-secondaryText leading-[12px] text-[8px] xl:leading-[16px] xl:text-[12px] font-[400]">
                User</p>
              <img alt="" class="w-1 h-2" src="../assets/svg/bgBack.svg">
              <p class="text-secondaryText leading-[12px] text-[8px] xl:leading-[16px] xl:text-[12px] font-[400]">Jatri
                Admin</p>
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
        <div class="mt-[16px] bg-white pb-4 rounded-[10px]">
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
                      optionLabel="name" placeholder="Desh Traveles"/>
                </div>
                <div class="w-1/2">
                  <p class="text-primaryText leading-[20px] text-[14px] xl:leading-[24px] xl:text-[16px] font-[600]">
                    Route</p>
                  <Dropdown
                      v-model="selectedCity"
                      :options="cities"
                      class="w-full py-[4px] mt-[10px] placeholder:text-primaryText placeholder:leading-[16px] placeholder:text-[12px] xl:placeholder:leading-[20px] xl:placeholder:text-[14px]"
                      optionLabel="name" placeholder="Route"/>
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
                      optionLabel="name" placeholder="Trip name"/>
                </div>
                <div class="w-1/2">
                  <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">
                    Date</p>
                  <div
                      class="w-full h-[40px] border border-[#DBDBDB] flex justify-between items-center mt-[10px] leading-[20px] rounded-[4px] px-[20px] xl:px-[4px] 2xl:px-[8px] overflow-hidden">
                    <input
                        class="outline-none pl-2 placeholder:text-[#4D4D4F] placeholder:text-[14px] placeholder:leading-[20px]"
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
                      optionLabel="name" placeholder="Desh Traveles"/>
                </div>
                <div class="w-1/2">
                  <p class="text-primaryText leading-[20px] text-[14px] xl:leading-[24px] xl:text-[16px] font-[600]">
                    Route</p>
                  <Dropdown
                      v-model="selectedCity"
                      :options="cities"
                      class="w-full py-[4px] mt-[10px] placeholder:text-primaryText placeholder:leading-[16px] placeholder:text-[12px] xl:placeholder:leading-[20px] xl:placeholder:text-[14px]"
                      optionLabel="name" placeholder="Route"/>
                </div>
              </div>
              <div class="flex justify-start items-center gap-x-4 w-full mt-3 xl:mt-4">
                <div class="w-1/2">
                  <p class="text-primaryText leading-[20px] text-[14px] xl:leading-[24px] xl:text-[16px] font-[600]">
                    Operator</p>
                  <Dropdown
                      v-model="selectedCity"
                      :options="cities"
                      class="w-full py-[4px] mt-[10px] placeholder:text-primaryText placeholder:leading-[16px] placeholder:text-[12px] xl:placeholder:leading-[20px] xl:placeholder:text-[14px]"
                      optionLabel="name" placeholder="Desh Traveles"/>
                </div>
                <div class="w-1/2">
                  <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">
                    Date</p>
                  <div
                      class="w-full h-[40px] border border-[#DBDBDB] flex justify-between items-center mt-[10px] leading-[20px] rounded-[4px] px-[20px] xl:px-[4px] 2xl:px-[8px] overflow-hidden">
                    <input
                        class="outline-none pl-2 placeholder:text-[#4D4D4F] placeholder:text-[14px] placeholder:leading-[20px]"
                        placeholder="Select date"
                        type="text">
                    <img alt="" class="h-5 w-5" src="../assets/svg/count2.svg">
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="p-2">
            <div class="flex justify-between items-center border-b pb-4">
              <div class="w-1/2 border-r border-dashed border-corporateBorder">
                <p class="leading-[20px] xl:leading-[24px] text-[14px] xl:text-[16px] font-[600] text-corporateSecondaryBlue">
                  SEATS</p>
                <div class="mt-3 xl:mt-4 flex flex-col justify-center items-center">
                  <div class="flex gap-x-[70px] xl:gap-x-[80px]">
                    <div class="flex gap-x-[20px] xl:gap-x-[26px]">
                      <button class="migrateSeat">A1</button>
                      <button class="migrateSeat">A2</button>
                    </div>
                    <div class="flex gap-x-[20px] xl:gap-x-[26px]">
                      <button class="migrateSeat">A3</button>
                      <button class="migrateSeat">A4</button>
                    </div>
                  </div>
                  <div class="flex gap-x-[70px] xl:gap-x-[80px] mt-[20px] xl:mt-[24px]">
                    <div class="flex gap-x-[20px] xl:gap-x-[26px]">
                      <button class="migrateSeat">A1</button>
                      <button class="migrateSeat">A2</button>
                    </div>
                    <div class="flex gap-x-[20px] xl:gap-x-[26px]">
                      <button class="migrateSeatAsh">A3</button>
                      <button class="migrateSeatAsh">A4</button>
                    </div>
                  </div>
                  <div class="flex gap-x-[70px] xl:gap-x-[80px] mt-[20px] xl:mt-[24px]">
                    <div class="flex gap-x-[20px] xl:gap-x-[26px]">
                      <button class="migrateSeatAsh">A1</button>
                      <button class="migrateSeatAsh">A2</button>
                    </div>
                    <div class="flex gap-x-[20px] xl:gap-x-[26px]">
                      <button class="migrateSeatAsh">A3</button>
                      <button class="migrateSeatAsh">A4</button>
                    </div>
                  </div>
                  <div class="flex gap-x-[70px] xl:gap-x-[80px] mt-[20px] xl:mt-[24px]">
                    <div class="flex gap-x-[20px] xl:gap-x-[26px]">
                      <button class="migrateSeatAsh">A1</button>
                      <button class="migrateSeatAsh">A2</button>
                    </div>
                    <div class="flex gap-x-[20px] xl:gap-x-[26px]">
                      <button class="migrateSeatAsh">A3</button>
                      <button class="migrateSeatAsh">A4</button>
                    </div>
                  </div>
                  <div class="flex gap-x-[70px] xl:gap-x-[80px] mt-[20px] xl:mt-[24px]">
                    <div class="flex gap-x-[20px] xl:gap-x-[26px]">
                      <button class="migrateSeatAsh">A1</button>
                      <button class="migrateSeatAsh">A2</button>
                    </div>
                    <div class="flex gap-x-[20px] xl:gap-x-[26px]">
                      <button class="migrateSeatAsh">A3</button>
                      <button class="migrateSeatAsh">A4</button>
                    </div>
                  </div>
                  <div class="flex gap-x-[70px] xl:gap-x-[80px] mt-[20px] xl:mt-[24px]">
                    <div class="flex gap-x-[20px] xl:gap-x-[26px]">
                      <button class="migrateSeatAsh">A1</button>
                      <button class="migrateSeatAsh">A2</button>
                    </div>
                    <div class="flex gap-x-[20px] xl:gap-x-[26px]">
                      <button class="migrateSeatAsh">A3</button>
                      <button class="migrateSeatPrimaryOrange border border-corporate tooltip bg-white">

                        <span class="tooltiptext ">
                          <div class="w-[286px] rounded-[4px] text-primaryText bg-white">
                            <div class="border border-corporateBorder">
                              <p class="border-b border-corporateBorder py-[8px]">[F3]</p>
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
                                class="fas fa-times"></i> Cancel</a>
                              </div>
                          </div>
                        </span>
                        F3
                      </button>
                    </div>
                  </div>
                  <div class="flex gap-x-[70px] xl:gap-x-[80px] mt-[20px] xl:mt-[24px]">
                    <div class="flex gap-x-[20px] xl:gap-x-[26px]">
                      <button class="migrateSeatAsh">A1</button>
                      <button class="migrateSeatAsh">A2</button>
                    </div>
                    <div class="flex gap-x-[20px] xl:gap-x-[26px]">
                      <button class="migrateSeatAsh">A3</button>
                      <button class="migrateSeatAsh">A4</button>
                    </div>
                  </div>
                  <div class="flex gap-x-[70px] xl:gap-x-[80px] mt-[20px] xl:mt-[24px]">
                    <div class="flex gap-x-[20px] xl:gap-x-[26px]">
                      <button class="migrateSeatAsh">A1</button>
                      <button class="migrateSeatAsh">A2</button>
                    </div>
                    <div class="flex gap-x-[20px] xl:gap-x-[26px]">
                      <button class="migrateSeatAsh">A3</button>
                      <button class="migrateSeatAsh">A4</button>
                    </div>
                  </div>
                  <div class="flex gap-x-[70px] xl:gap-x-[80px] mt-[20px] xl:mt-[24px]">
                    <div class="flex gap-x-[20px] xl:gap-x-[26px]">
                      <button class="migrateSeatAsh">A1</button>
                      <button class="migrateSeatAsh">A2</button>
                    </div>
                    <div class="flex gap-x-[20px] xl:gap-x-[26px]">
                      <button class="migrateSeatAsh">A3</button>
                      <button class="migrateSeatAsh">A4</button>
                    </div>
                  </div>

                </div>

              </div>

              <div class="w-1/2">
                <div class="mt-9 xl:mt-10 flex flex-col justify-center items-center">
                  <div class="flex gap-x-[70px] xl:gap-x-[80px]">
                    <div class="flex gap-x-[20px] xl:gap-x-[26px]">
                      <button class="migrateSeatPrimaryOrange">A1</button>
                      <button class="migrateSeatPrimaryOrange">A2</button>
                    </div>
                    <div class="flex gap-x-[20px] xl:gap-x-[26px]">
                      <button class="migrateSeatPrimaryOrange">A3</button>
                      <button class="migrateSeatPrimaryOrange">A4</button>
                    </div>
                  </div>
                  <div class="flex gap-x-[70px] xl:gap-x-[80px] mt-[20px] xl:mt-[24px]">
                    <div class="flex gap-x-[20px] xl:gap-x-[26px]">
                      <button class="migrateSeatAsh tooltip bg-white">
                        <span class="tooltiptext ">
                          <div class="w-[286px] border border-corporateBorder rounded-[4px] text-primaryText bg-white">
                            <p class="border-b border-corporateBorder py-[8px]">Selected seat: [B1]</p>
                            <div class="mt-[10px] flex gap-x-[10px] items-center px-2">
                              <label class="w-[30%] bg-white" for="#">Migrate for:</label>
                              <div class="w-[70%]">
                                <Dropdown v-model="selectedCity"
                                          :options="cities"
                                          class="w-full py-[4px] mb-2 mt-[10px] placeholder:text-primaryText"
                                          optionLabel="name"
                                          placeholder="Owner"/>
                             </div>
                            </div>
                          </div>
                        </span>
                        A4
                      </button>
                      <button class="migrateSeat">A2</button>
                    </div>
                    <div class="flex gap-x-[20px] xl:gap-x-[26px]">
                      <button class="migrateSeatAsh">A3</button>
                      <button class="migrateSeatAsh">A4</button>
                    </div>
                  </div>
                  <div class="flex gap-x-[70px] xl:gap-x-[80px] mt-[20px] xl:mt-[24px]">
                    <div class="flex gap-x-[20px] xl:gap-x-[26px]">
                      <button class="migrateSeatAsh">A1</button>
                      <button class="migrateSeatAsh">A2</button>
                    </div>
                    <div class="flex gap-x-[20px] xl:gap-x-[26px]">
                      <button class="migrateSeatAsh">A3</button>
                      <button class="migrateSeatAsh">A4</button>
                    </div>
                  </div>
                  <div class="flex gap-x-[70px] xl:gap-x-[80px] mt-[20px] xl:mt-[24px]">
                    <div class="flex gap-x-[20px] xl:gap-x-[26px]">
                      <button class="migrateSeatPrimaryOrange">A1</button>
                      <button class="migrateSeatPrimaryOrange">A2</button>
                    </div>
                    <div class="flex gap-x-[20px] xl:gap-x-[26px]">
                      <button class="migrateSeatPrimaryOrange">A3</button>
                      <button class="migrateSeatPrimaryOrange">A4</button>
                    </div>
                  </div>
                  <div class="flex gap-x-[70px] xl:gap-x-[80px] mt-[20px] xl:mt-[24px]">
                    <div class="flex gap-x-[20px] xl:gap-x-[26px]">
                      <button class="migrateSeatPrimaryOrange">A1</button>
                      <button class="migrateSeatPrimaryOrange">A2</button>
                    </div>
                    <div class="flex gap-x-[20px] xl:gap-x-[26px]">
                      <button class="migrateSeatPrimaryOrange">A3</button>
                      <button class="migrateSeatPrimaryOrange">A4</button>
                    </div>
                  </div>
                  <div class="flex gap-x-[70px] xl:gap-x-[80px] mt-[20px] xl:mt-[24px]">
                    <div class="flex gap-x-[20px] xl:gap-x-[26px]">
                      <button class="migrateSeatAsh">A1</button>
                      <button class="migrateSeatAsh">A2</button>
                    </div>
                    <div class="flex gap-x-[20px] xl:gap-x-[26px]">
                      <button class="migrateSeatAsh">A3</button>
                      <button class="migrateSeatAsh">A4</button>
                    </div>
                  </div>
                  <div class="flex gap-x-[70px] xl:gap-x-[80px] mt-[20px] xl:mt-[24px]">
                    <div class="flex gap-x-[20px] xl:gap-x-[26px]">
                      <button class="migrateSeatAsh">A1</button>
                      <button class="migrateSeatAsh">A2</button>
                    </div>
                    <div class="flex gap-x-[20px] xl:gap-x-[26px]">
                      <button class="migrateSeat">A3</button>
                      <button class="migrateSeatAsh">A4</button>
                    </div>
                  </div>
                  <div class="flex gap-x-[70px] xl:gap-x-[80px] mt-[20px] xl:mt-[24px]">
                    <div class="flex gap-x-[20px] xl:gap-x-[26px]">
                      <button class="migrateSeatDarkAsh">A1</button>
                      <button class="migrateSeatDarkAsh">A2</button>
                    </div>
                    <div class="flex gap-x-[20px] xl:gap-x-[26px]">
                      <button class="migrateSeatDarkAsh">A3</button>
                      <button class="migrateSeatDarkAsh">A4</button>
                    </div>
                  </div>
                  <div class="flex gap-x-[70px] xl:gap-x-[80px] mt-[20px] xl:mt-[24px]">
                    <div class="flex gap-x-[20px] xl:gap-x-[26px]">
                      <button class="migrateSeatAsh">A1</button>
                      <button class="migrateSeatAsh">A2</button>
                    </div>
                    <div class="flex gap-x-[20px] xl:gap-x-[26px]">
                      <button class="migrateSeatAsh">A3</button>
                      <button class="migrateSeatAsh">
                        A4
                      </button>
                    </div>
                  </div>

                </div>

              </div>
            </div>
            <!--                modal-->
            <div class="flex items-center justify-center">
              <button class="createBtnDisable mt-5" @click="toggleModal()">Confirm migration</button>
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
                      Cancel ticket</p>
                    <img alt="" class="h-5 w-5 cursor-pointer" src="../assets/svg/modal_cross.svg"
                         @click="toggleModal()">
                  </div>
                  <p class="px-[24px] mt-5 text-center">Are you sure you want to cancel ticket of seat [A1].</p>

                  <div class="px-4 py-3 flex justify-center items-center gap-x-[16px] mt-8">
                    <button class="py-2 px-10 bg-[#48A43F] text-white rounded-full mr-2"
                            type="button"><i class="fas fa-times"></i> No
                    </button>
                    <button class="py-2 px-102 bg-corporate text-white rounded-full mr-2" type="button"><i
                        class="fas fa-plus"></i>Yes
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
        {name: 'Rome', code: 'RM'},
        // {name: 'London', code: 'LDN'},
        // {name: 'Istanbul', code: 'IST'},
        // {name: 'Paris', code: 'PRS'}
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
