<template>
  <!-- Top nav bar start-->
  <div class="bg-white h-[72px] sticky top-0 border-b border-[#DBDBDB] z-10 px-[32px]">
    <div class="flex justify-between">
      <div class="flex justify-center items-center gap-x-[32px]">

        <button class="flex justify-center items-center gap-x-[10px]">
          <img alt="" class="w-[12px] h-[12px]" src="../assets/svg/Back.svg">
          <p class="text-primaryText leading-[12px] text-[10px] xl:leading-[16px] xl:text-[12px] font-[500]">
            Back</p>
        </button>
        <div class="flex flex-col gap-y-[4px]">
          <p class="lg:leading-[16px] xl:leading-[28px] lg:text-[14px] xl:text-[20px] font-[600] text-primaryText">
            Create Bus</p>
          <div class="flex justify-center items-center gap-x-[6px]">
            <p class="text-secondaryText leading-[12px] text-[8px] xl:leading-[16px] xl:text-[12px] font-[400]">
              Counter</p>
            <img alt="" class="w-1 h-2" src="../assets/svg/bgBack.svg">
            <p class="text-secondaryText leading-[12px] text-[8px] xl:leading-[16px] xl:text-[12px] font-[400]">
              Add bus</p>
          </div>
        </div>
      </div>
      <div class="flex gap-x-[24px] p-4 w-1/2 justify-end items-center pr-2 ">
        <div
            class="w-[200px] h-[30px] xl:w-[270px] xl:h-[40px] border border-[#DBDBDB] flex justify-center items-center leading-[20px] rounded-[4px] pl-[9px] overflow-hidden">
          <img alt="" class="h-2 w-2 xl:h-5 xl:w-5" src="../assets/svg/search.svg">
          <input
              class="outline-none pl-32 xl:pl-2 placeholder:text-[#4D4D4F] placeholder:text-[8px] placeholder:leading-[16px] xl:placeholder:text-[14px] xl:placeholder:leading-[20px]"
              placeholder="PNR or mobile number"
              type="text">
        </div>
        <div class="flex justify-center items-center gap-x-1">
          <img alt="" class="h-[30px]  w-[30px] xl:h-[40px] xl:w-[40px] rounded-full"
               src="../assets/person/person1.png">
          <p class="text-[#151414] leading-[16px] text-[10px] xl:leading-[24px] xl:text-[16px] font-[500]">Mostafa
            Mamun Emon</p>
          <img alt="" class="w-[12px] h-[6px]" src="../assets/person/downArrow.svg">
        </div>
      </div>
    </div>
  </div>
  <!-- top nav bar end -->

  <!-- body start-->
  <div class="px-[30px] py-[24px]">

    <!--card-->
    <div class="bg-white rounded-[10px]">
      <div class="px-4 pt-4 flex flex-col">
        <div class="flex justify-center items-center gap-x-[10px] xl:gap-x-[16px]">
          <div class="w-1/4">
            <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">
              Brand</p>
            <input class="createNormalInput" placeholder="Enter bus brand name" type="text">
          </div>
          <div class="w-1/4">
            <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">
              Display name</p>
            <input class="createNormalInput" placeholder="Enter bus display name" type="text">
          </div>
          <div class="w-1/4">
            <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">
              Class/Type</p>
            <Dropdown v-model="selectedCity" :options="cities" class="w-full py-[4px] mt-[10px]" optionLabel="name"
                      placeholder="Select class"/>
          </div>
          <div class="w-1/4">
            <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">
              Seat plan name</p>
            <input class="createNormalInput" placeholder="Enter seat plan name" type="text">
          </div>
        </div>
        <div class="flex gap-x-[16px] items-center mt-4">
          <p class="text-primaryText font-[600] leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] ">
            Bus Type</p>
          <div class="flex justify-center items-center">
            <button
                class="bg-[#F04935] w-[90px] xl:w-[110px] text-white leading-[16px] xl:leading-[20px] text-[12px] xl:text-[14px] flex justify-center items-center font-[400] h-[40px] rounded-l-[4px]">
              Ac
            </button>
            <button
                class="bg-[#F7F7F7] w-[90px] xl:w-[110px] text-primaryText leading-[16px] xl:leading-[20px] text-[12px] xl:text-[14px] border border-[#DBDBDB] flex justify-center items-center font-[400] h-[40px] rounded-r-[4px]">
              Non AC
            </button>
          </div>
        </div>
        <hr class="px-4 border-t border-[#DBDBDB] mt-4">
        <!--          offer access-->
        <div class="pt-4">
          <p class="leading-[20px] xl:leading-[24px] text-[14px] xl:text-[16px] text-primaryText font-[600] mb-2">Bus
            facilities</p>
          <div class="flex justify-start gap-x-[19px]">
            <div class="form-group mt-3 flex w-[16.66%]">
              <input id="fare" type="checkbox">
              <label
                  class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]"
                  for="fare">WiFi</label>
            </div>
            <div class="form-group mt-3 flex w-[16.66%]">
              <input id="fare" type="checkbox">
              <label
                  class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]"
                  for="fare">Charging port</label>
            </div>
            <div class="form-group mt-3 flex w-[16.66%]">
              <input id="fare" type="checkbox">
              <label
                  class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]"
                  for="fare">Leg rest</label>
            </div>
            <div class="form-group mt-3 flex w-[16.66%]">
              <input id="fare" type="checkbox">
              <label
                  class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]"
                  for="fare">WiFi</label>
            </div>
            <div class="form-group mt-3 flex w-[16.66%]">
              <input id="fare" type="checkbox">
              <label
                  class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]"
                  for="fare">Charging port</label>
            </div>
            <div class="form-group mt-3 flex w-[16.66%]">
              <input id="fare" type="checkbox">
              <label
                  class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]"
                  for="fare">Leg rest</label>
            </div>
          </div>
          <hr class="px-4 pt-1 border-t border-dashed border-[#DBDBDB]">
          <div class="flex justify-start gap-x-[19px]">
            <div class="form-group mt-3 flex w-[16.66%]">
              <input id="fare" type="checkbox">
              <label
                  class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]"
                  for="fare">WiFi</label>
            </div>
            <div class="form-group mt-3 flex w-[16.66%]">
              <input id="fare" type="checkbox">
              <label
                  class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]"
                  for="fare">Charging port</label>
            </div>
            <div class="form-group mt-3 flex w-[16.66%]">
              <input id="fare" type="checkbox">
              <label
                  class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]"
                  for="fare">Leg rest</label>
            </div>
            <div class="form-group mt-3 flex w-[16.66%]">
              <input id="fare" type="checkbox">
              <label
                  class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]"
                  for="fare">WiFi</label>
            </div>
            <div class="form-group mt-3 flex w-[16.66%]">
              <input id="fare" type="checkbox">
              <label
                  class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]"
                  for="fare">Charging port</label>
            </div>
            <div class="form-group mt-3 flex w-[16.66%]">
              <input id="fare" type="checkbox">
              <label
                  class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]"
                  for="fare">Leg rest</label>
            </div>
          </div>
        </div>
      </div>
      <div class="px-4">
        <div class="rounded-[4px]">
          <hr class="border-t border-corporateBorder mt-1">
          <div class="pt-[8px] pb-[8px]">
            <div class="flex divide-x divide-corporateBorder">
              <div class="w-[55%]">
                <div class="py-[8px] pr-[24px]">
                  <p class="leading-[20px] xl:leading-[24px] text-[14px] xl:text-[16px] font-[600] text-primaryText">
                    Add seat</p>
                  <div class="flex gap-x-4 mt-4 items-center">
                    <p class="text-primaryText leading-[16px] xl:leading-[20px] text-[12px] xl:text-[14px]">Select
                      row:</p>
                    <div>
                      <Dropdown v-model="selectedCity" :opti6ns="cities" class="w-full py-1"
                                optionLabel="name"
                                placeholder="Select row"/>
                    </div>
                  </div>
                  <div class="mt-4 flex justify-center gap-x-2">
                    <input class="w-[20%] border border-[#DBDBDB] text-center rounded-[4px] py-3 focus:outline-none"
                           placeholder="Seat 1"
                           type="text">
                    <input class="w-[20%] border border-[#DBDBDB] text-center rounded-[4px] py-3 focus:outline-none"
                           placeholder="Seat 2"
                           type="text">
                    <input class="w-[20%] border border-[#DBDBDB] text-center rounded-[4px] py-3 focus:outline-none"
                           placeholder="Seat 3"
                           type="text">
                    <input class="w-[20%] border border-[#DBDBDB] text-center rounded-[4px] py-3 focus:outline-none"
                           placeholder="Seat 4"
                           type="text">
                    <input class="w-[20%] border border-primaryText text-center rounded-[4px] py-3 focus:outline-none"
                           placeholder="Seat 5"
                           type="text">
                  </div>
                  <div class="flex justify-center items-center mt-4 xl:mt-5">
                    <router-link
                        class="bg-corporate bg-opacity-30 flex gap-x-3 justify-center items-center text-white rounded-full w-[120px] h-[40px] mr-4 leading-[12px] text-[10px] xl:leading-[16px] xl:text-[12px] w-1/5"
                        to="">
                      <span><img alt="" class="h-[9.33px] w-[9.33px]" src="../assets/svg/plus.svg"></span>Add seats
                    </router-link>
                  </div>
                </div>
              </div>

              <div class="w-[45%]">
                <div class="py-2 pl-[16px]">
                  <div class="flex justify-between">
                    <p class="leading-[20px] xl:leading-[24px] text-[14px] xl:text-[16px] font-[600] text-primaryText">
                      Seat layout preview</p>
                    <button class="flex gap-x-[9px] items-center">
                      <img alt="" class="w-[13px]" src="../assets/svg/reset.svg">
                      <p class="text-corporateError leading-[14px] xl:leading-[16px] text-[12px]">Reset</p>
                    </button>
                  </div>
                  <div class="flex gap-x-[30px] 2xl:gap-x-[50px] items-center mt-4">
                    <p class="w-[20%] leading-[14px] xl:leading-[16px] text-[12px] text-[#676769] font-[400]">Ex 2</p>
                    <div class="flex gap-x-[20px] xl:gap-x-[26px] justify-start w-[80%]">
                      <div
                          class="bg-[#EDEDED] w-[40px] xl:w-[50px] h-[26px] xl:h-[36px] focus:outline-none text-center text-[12px] flex items-center justify-center rounded-[2px]">
                        <p><span class="opacity-0">A1</span></p>
                      </div>
                      <div
                          class="bg-[#EDEDED] w-[40px] xl:w-[50px] h-[26px] xl:h-[36px] focus:outline-none text-center text-[12px] flex items-center justify-center rounded-[2px]">
                        <p><span class="opacity-0">A2</span></p>
                      </div>
                      <div
                          class="bg-[#EDEDED] w-[40px] xl:w-[50px] h-[26px] xl:h-[36px] focus:outline-none text-center text-[12px] flex items-center justify-center rounded-[2px]">
                          <p><span class="opacity-0">A3</span></p>
                      </div>
                      <div
                          class="bg-[#EDEDED] w-[40px] xl:w-[50px] h-[26px] xl:h-[36px] focus:outline-none text-center text-[12px] flex items-center justify-center rounded-[2px]">
                          <p><span class="opacity-0">A4</span></p>
                      </div>
                      <div
                          class="bg-[#EDEDED] w-[40px] xl:w-[50px] h-[26px] xl:h-[36px] focus:outline-none text-center text-[12px] flex items-center justify-center rounded-[2px]">
                          <p><span class="opacity-0">A5</span></p>
                      </div>
                    </div>
                  </div>
                  <div class="flex gap-x-[30px] 2xl:gap-x-[50px] items-center mt-3">
                    <p class="w-[20%] leading-[14px] xl:leading-[16px] text-[12px] text-[#676769] font-[400]">Ex 1</p>
                    <div class="flex gap-x-[20px] xl:gap-x-[26px] justify-start w-[80%]">
                      <div
                          class="bg-[#f04935] text-white w-[40px] xl:w-[50px] h-[26px] xl:h-[36px] focus:outline-none text-center text-[12px] flex items-center justify-center rounded-[2px]">
                        <p>A1</p>
                      </div>
                      <div
                          class="bg-[#f04935] text-white w-[40px] xl:w-[50px] h-[26px] xl:h-[36px] focus:outline-none text-center text-[12px] flex items-center justify-center rounded-[2px]">
                        <p>A2</p>
                      </div>
                      <div
                          class="bg-[#EDEDED] text-primaryText w-[40px] xl:w-[50px] h-[26px] xl:h-[36px] focus:outline-none text-center text-[12px] flex items-center justify-center rounded-[2px]">
                        <p>A3</p>
                      </div>
                      <div
                          class="bg-[#f04935] text-white w-[40px] xl:w-[50px] h-[26px] xl:h-[36px] focus:outline-none text-center text-[12px] flex items-center justify-center rounded-[2px]">
                        <p>A4</p>
                      </div>
                      <div
                          class="bg-[#f04935] text-white w-[40px] xl:w-[50px] h-[26px] xl:h-[36px] focus:outline-none text-center text-[12px] flex items-center justify-center rounded-[2px]">
                        <p>A5</p>
                      </div>
                    </div>
                  </div>
                  <div class="flex gap-x-[30px] 2xl:gap-x-[50px] items-center mt-3">
                    <p class="w-[20%] leading-[14px] xl:leading-[16px] text-[12px] text-[#676769] font-[400]">Ex 1</p>
                    <div class="flex gap-x-[20px] xl:gap-x-[26px] justify-start w-[80%]">
                      <div
                          class="bg-[#f04935] text-white w-[40px] xl:w-[50px] h-[26px] xl:h-[36px] focus:outline-none text-center text-[12px] flex items-center justify-center rounded-[2px]">
                        <p>A1</p>
                      </div>
                      <div
                          class="bg-[#f04935] text-white w-[40px] xl:w-[50px] h-[26px] xl:h-[36px] focus:outline-none text-center text-[12px] flex items-center justify-center rounded-[2px]">
                        <p>A2</p>
                      </div>
                      <div
                          class="bg-[#EDEDED] text-primaryText w-[40px] xl:w-[50px] h-[26px] xl:h-[36px] focus:outline-none text-center text-[12px] flex items-center justify-center rounded-[2px]">
                        <p>A3</p>
                      </div>
                      <div
                          class="bg-[#f04935] text-white w-[40px] xl:w-[50px] h-[26px] xl:h-[36px] focus:outline-none text-center text-[12px] flex items-center justify-center rounded-[2px]">
                        <p>A4</p>
                      </div>
                      <div
                          class="bg-[#f04935] text-white w-[40px] xl:w-[50px] h-[26px] xl:h-[36px] focus:outline-none text-center text-[12px] flex items-center justify-center rounded-[2px]">
                        <p>A5</p>
                      </div>
                    </div>
                  </div>
                  <div class="flex gap-x-[30px] 2xl:gap-x-[50px] items-center mt-3">
                    <p class="w-[20%] leading-[14px] xl:leading-[16px] text-[12px] text-[#676769] font-[400]">Ex 1</p>
                    <div class="flex gap-x-[20px] xl:gap-x-[26px] justify-start w-[80%]">
                      <div
                          class="bg-[#f04935] text-white w-[40px] xl:w-[50px] h-[26px] xl:h-[36px] focus:outline-none text-center text-[12px] flex items-center justify-center rounded-[2px]">
                        <p>A1</p>
                      </div>
                      <div
                          class="bg-[#f04935] text-white w-[40px] xl:w-[50px] h-[26px] xl:h-[36px] focus:outline-none text-center text-[12px]  flex items-center justify-center rounded-[2px]">
                        <p>A2</p>
                      </div>
                      <div
                          class="bg-[#EDEDED] text-primaryText w-[40px] xl:w-[50px] h-[26px] xl:h-[36px] focus:outline-none text-center text-[12px] flex items-center justify-center rounded-[2px]">
                        <p>A3</p>
                      </div>
                      <div
                          class="bg-[#f04935] text-white w-[40px] xl:w-[50px] h-[26px] xl:h-[36px] focus:outline-none text-center text-[12px] flex items-center justify-center rounded-[2px]">
                        <p>A4</p>
                      </div>
                      <div
                          class="bg-[#f04935] text-white w-[40px] xl:w-[50px] h-[26px] xl:h-[36px] focus:outline-none text-center text-[12px] flex items-center justify-center rounded-[2px]">
                        <p>A5</p>
                      </div>
                    </div>
                  </div>
                  <div class="flex gap-x-[30px] 2xl:gap-x-[50px] items-center mt-3">
                    <p class="w-[20%] leading-[14px] xl:leading-[16px] text-[12px] text-[#676769] font-[400]">Ex 1</p>
                    <div class="flex gap-x-[20px] xl:gap-x-[26px] justify-start w-[80%]">
                      <div
                          class="bg-[#f04935] text-white w-[40px] xl:w-[50px] h-[26px] xl:h-[36px] focus:outline-none text-center text-[12px] flex items-center justify-center rounded-[2px]">
                        <p>A1</p>
                      </div>
                      <div
                          class="bg-[#f04935] text-white w-[40px] xl:w-[50px] h-[26px] xl:h-[36px] focus:outline-none text-center text-[12px] flex items-center justify-center rounded-[2px]">
                        <p>A2</p>
                      </div>
                      <div
                          class="bg-[#EDEDED] text-primaryText w-[40px] xl:w-[50px] h-[26px] xl:h-[36px] focus:outline-none text-center text-[12px] flex items-center justify-center rounded-[2px]">
                        <p>A3</p>
                      </div>
                      <div
                          class="bg-[#f04935] text-white w-[40px] xl:w-[50px] h-[26px] xl:h-[36px] focus:outline-none text-center text-[12px] flex items-center justify-center rounded-[2px]">
                        <p>A4</p>
                      </div>
                      <div
                          class="bg-[#f04935] text-white w-[40px] xl:w-[50px] h-[26px] xl:h-[36px] focus:outline-none text-center text-[12px] flex items-center justify-center rounded-[2px]">
                        <p>A5</p>
                      </div>
                    </div>
                  </div>
                  <div class="flex gap-x-[30px] 2xl:gap-x-[50px] items-center mt-3">
                    <p class="w-[20%] leading-[14px] xl:leading-[16px] text-[12px] text-[#676769] font-[400]">Ex 1</p>
                    <div class="flex gap-x-[20px] xl:gap-x-[26px] justify-start w-[80%]">
                      <div
                          class="bg-[#f04935] text-white w-[40px] xl:w-[50px] h-[26px] xl:h-[36px] focus:outline-none text-center text-[12px] flex items-center justify-center rounded-[2px]">
                        <p>A1</p>
                      </div>
                      <div
                          class="bg-[#f04935] text-white w-[40px] xl:w-[50px] h-[26px] xl:h-[36px] focus:outline-none text-center text-[12px] flex items-center justify-center rounded-[2px]">
                        <p>A2</p>
                      </div>
                      <div
                          class="bg-[#EDEDED] text-primaryText w-[40px] xl:w-[50px] h-[26px] xl:h-[36px] focus:outline-none text-center text-[12px] flex items-center justify-center rounded-[2px]">
                        <p>A3</p>
                      </div>
                      <div
                          class="bg-[#f04935] text-white w-[40px] xl:w-[50px] h-[26px] xl:h-[36px] focus:outline-none text-center text-[12px] flex items-center justify-center rounded-[2px]">
                        <p>A4</p>
                      </div>
                      <div
                          class="bg-[#f04935] text-white w-[40px] xl:w-[50px] h-[26px] xl:h-[36px] focus:outline-none text-center text-[12px] flex items-center justify-center rounded-[2px]">
                        <p>A5</p>
                      </div>
                    </div>
                  </div>
                  <div class="flex gap-x-[30px] 2xl:gap-x-[50px] items-center mt-3">
                    <p class="w-[20%] leading-[14px] xl:leading-[16px] text-[12px] text-[#676769] font-[400]">Ex 1</p>
                    <div class="flex gap-x-[20px] xl:gap-x-[26px] justify-start w-[80%]">
                      <div
                          class="bg-[#f04935] text-white w-[40px] xl:w-[50px] h-[26px] xl:h-[36px] focus:outline-none text-center text-[12px] flex items-center justify-center rounded-[2px]">
                        <p>A1</p>
                      </div>
                      <div
                          class="bg-[#f04935] text-white w-[40px] xl:w-[50px] h-[26px] xl:h-[36px] focus:outline-none text-center text-[12px] flex items-center justify-center rounded-[2px]">
                        <p>A2</p>
                      </div>
                      <div
                          class="bg-[#EDEDED] text-primaryText w-[40px] xl:w-[50px] h-[26px] xl:h-[36px] focus:outline-none text-center text-[12px] flex items-center justify-center rounded-[2px]">
                        <p>A3</p>
                      </div>
                      <div
                          class="bg-[#f04935] text-white w-[40px] xl:w-[50px] h-[26px] xl:h-[36px] focus:outline-none text-center text-[12px] flex items-center justify-center rounded-[2px]">
                        <p>A4</p>
                      </div>
                      <div
                          class="bg-[#f04935] text-white w-[40px] xl:w-[50px] h-[26px] xl:h-[36px] focus:outline-none text-center text-[12px]  flex items-center justify-center rounded-[2px]">
                        <p>A5</p>
                      </div>
                    </div>
                  </div>
                  <div class="flex gap-x-[30px] 2xl:gap-x-[50px] items-center mt-3">
                    <p class="w-[20%] leading-[14px] xl:leading-[16px] text-[12px] text-[#676769] font-[400]">Ex 1</p>
                    <div class="flex gap-x-[20px] xl:gap-x-[26px] justify-start w-[80%]">
                      <div
                          class="bg-[#f04935] text-white w-[40px] xl:w-[50px] h-[26px] xl:h-[36px] focus:outline-none text-center text-[12px] flex items-center justify-center rounded-[2px]">
                        <p>A1</p>
                      </div>
                      <div
                          class="bg-[#f04935] text-white w-[40px] xl:w-[50px] h-[26px] xl:h-[36px] focus:outline-none text-center text-[12px] flex items-center justify-center rounded-[2px]">
                        <p>A2</p>
                      </div>
                      <div
                          class="bg-[#f04935] text-white w-[40px] xl:w-[50px] h-[26px] xl:h-[36px] focus:outline-none text-center text-[12px] flex items-center justify-center rounded-[2px]">
                        <p>A3</p>
                      </div>
                      <div
                          class="bg-[#f04935] text-white w-[40px] xl:w-[50px] h-[26px] xl:h-[36px] focus:outline-none text-center text-[12px] flex items-center justify-center rounded-[2px]">
                        <p>A4</p>
                      </div>
                      <div
                          class="bg-[#f04935] text-white w-[40px] xl:w-[50px] h-[26px] xl:h-[36px] focus:outline-none text-center text-[12px] flex items-center justify-center rounded-[2px]">
                        <p>A5</p>
                      </div>
                    </div>
                  </div>
                  <div class="flex gap-x-[30px] 2xl:gap-x-[50px] items-center mt-3">
                    <p class="w-[20%] leading-[14px] xl:leading-[16px] text-[12px] text-[#676769] font-[400]">Row 7</p>
                    <div class="flex gap-x-[20px] xl:gap-x-[26px] justify-start w-[80%]">
                      <div
                          class="bg-[#EDEDED] w-[40px] xl:w-[50px] h-[26px] xl:h-[36px] focus:outline-none text-center text-[12px] flex items-center justify-center rounded-[2px]">
                        <p>A1</p>
                      </div>
                      <div
                          class="bg-[#EDEDED] w-[40px] xl:w-[50px] h-[26px] xl:h-[36px] focus:outline-none text-center text-[12px] flex items-center justify-center rounded-[2px]">
                        <p>A2</p>
                      </div>
                      <div
                          class="bg-[#EDEDED] w-[40px] xl:w-[50px] h-[26px] xl:h-[36px] focus:outline-none text-center text-[12px] flex items-center justify-center rounded-[2px]">
                        <p>A3</p>
                      </div>
                      <div
                          class="bg-[#EDEDED] w-[40px] xl:w-[50px] h-[26px] xl:h-[36px] focus:outline-none text-center text-[12px] flex items-center justify-center rounded-[2px]">
                        <p>A4</p>
                      </div>
                      <div
                          class="bg-[#EDEDED] border border-corporate w-[40px] xl:w-[50px] h-[26px] xl:h-[36px] focus:outline-none text-center text-[12px] flex items-center justify-center rounded-[2px]">
                        <p>A5</p>
                      </div>
                    </div>
                  </div>
                  <div class="flex gap-x-[30px] 2xl:gap-x-[50px] items-center mt-3">
                    <p class="w-[20%] leading-[14px] xl:leading-[16px] text-[12px] text-[#676769] font-[400]">Row 8</p>
                    <div class="flex gap-x-[20px] xl:gap-x-[26px] justify-start w-[80%]">
                      <div
                          class="bg-[#EDEDED] w-[40px] xl:w-[50px] h-[26px] xl:h-[36px] focus:outline-none text-center text-[12px] flex items-center justify-center rounded-[2px]">
                        <p>A1</p>
                      </div>
                      <div
                          class="bg-[#EDEDED] w-[40px] xl:w-[50px] h-[26px] xl:h-[36px] focus:outline-none text-center text-[12px] flex items-center justify-center rounded-[2px]">
                        <p>A2</p>
                      </div>
                      <div
                          class="bg-[#EDEDED] w-[40px] xl:w-[50px] h-[26px] xl:h-[36px] focus:outline-none text-center text-[12px] flex items-center justify-center rounded-[2px]">
                        <p>A3</p>
                      </div>
                      <div
                          class="bg-[#EDEDED] w-[40px] xl:w-[50px] h-[26px] xl:h-[36px] focus:outline-none text-center text-[12px] flex items-center justify-center rounded-[2px]">
                        <p>A4</p>
                      </div>
                      <div
                          class="bg-[#EDEDED] w-[40px] xl:w-[50px] h-[26px] xl:h-[36px] focus:outline-none text-center text-[12px] flex items-center justify-center rounded-[2px]">
                        <p>A5</p>
                      </div>
                    </div>
                  </div>
                  <div class="flex gap-x-[30px] 2xl:gap-x-[50px] items-center mt-3">
                    <p class="w-[20%] leading-[14px] xl:leading-[16px] text-[12px] text-[#676769] font-[400]">Row 9</p>
                    <div class="flex gap-x-[20px] xl:gap-x-[26px] justify-start w-[80%]">
                      <div
                          class="bg-[#EDEDED] w-[40px] xl:w-[50px] h-[26px] xl:h-[36px] focus:outline-none text-center text-[12px] flex items-center justify-center rounded-[2px]">
                        <p>A1</p>
                      </div>
                      <div
                          class="bg-[#EDEDED] w-[40px] xl:w-[50px] h-[26px] xl:h-[36px] focus:outline-none text-center text-[12px] flex items-center justify-center rounded-[2px]">
                        <p>A2</p>
                      </div>
                      <div
                          class="bg-[#EDEDED] w-[40px] xl:w-[50px] h-[26px] xl:h-[36px] focus:outline-none text-center text-[12px] flex items-center justify-center rounded-[2px]">
                        <p>A3</p>
                      </div>
                      <div
                          class="bg-[#EDEDED] w-[40px] xl:w-[50px] h-[26px] xl:h-[36px] focus:outline-none text-center text-[12px] flex items-center justify-center rounded-[2px]">
                        <p>A4</p>
                      </div>
                      <div
                          class="bg-[#EDEDED] w-[40px] xl:w-[50px] h-[26px] xl:h-[36px] focus:outline-none text-center text-[12px] flex items-center justify-center rounded-[2px]">
                        <p>A5</p>
                      </div>
                    </div>
                  </div>
                  <div class="flex gap-x-[30px] 2xl:gap-x-[50px] items-center mt-3">
                    <p class="w-[20%] leading-[14px] xl:leading-[16px] text-[12px] text-[#676769] font-[400]">Row 10</p>
                    <div class="flex gap-x-[20px] xl:gap-x-[26px] justify-start w-[80%]">
                      <div
                          class="bg-[#EDEDED] w-[40px] xl:w-[50px] h-[26px] xl:h-[36px] focus:outline-none text-center text-[12px] flex items-center justify-center rounded-[2px]">
                        <p>A1</p>
                      </div>
                      <div
                          class="bg-[#EDEDED] w-[40px] xl:w-[50px] h-[26px] xl:h-[36px] focus:outline-none text-center text-[12px] flex items-center justify-center rounded-[2px]">
                        <p>A2</p>
                      </div>
                      <div
                          class="bg-[#EDEDED] w-[40px] xl:w-[50px] h-[26px] xl:h-[36px] focus:outline-none text-center text-[12px] flex items-center justify-center rounded-[2px]">
                        <p>A3</p>
                      </div>
                      <div
                          class="bg-[#EDEDED] w-[40px] xl:w-[50px] h-[26px] xl:h-[36px] focus:outline-none text-center text-[12px] flex items-center justify-center rounded-[2px]">
                        <p>A4</p>
                      </div>
                      <div
                          class="bg-[#EDEDED] w-[40px] xl:w-[50px] h-[26px] xl:h-[36px] focus:outline-none text-center text-[12px] flex items-center justify-center rounded-[2px]">
                        <p>A5</p>
                      </div>
                    </div>
                  </div>
                  <div class="flex gap-x-[30px] 2xl:gap-x-[50px] items-center mt-3">
                    <p class="w-[20%] leading-[14px] xl:leading-[16px] text-[12px] text-[#676769] font-[400]">Row 12</p>
                    <div class="flex gap-x-[20px] xl:gap-x-[26px] justify-start w-[80%]">
                      <div
                          class="bg-[#EDEDED] w-[40px] xl:w-[50px] h-[26px] xl:h-[36px] focus:outline-none text-center text-[12px] flex items-center justify-center rounded-[2px]">
                        <p>A1</p>
                      </div>
                      <div
                          class="bg-[#EDEDED] w-[40px] xl:w-[50px] h-[26px] xl:h-[36px] focus:outline-none text-center text-[12px] flex items-center justify-center rounded-[2px]">
                        <p>A2</p>
                      </div>
                      <div
                          class="bg-[#EDEDED] w-[40px] xl:w-[50px] h-[26px] xl:h-[36px] focus:outline-none text-center text-[12px] flex items-center justify-center rounded-[2px]">
                        <p>A3</p>
                      </div>
                      <div
                          class="bg-[#EDEDED] w-[40px] xl:w-[50px] h-[26px] xl:h-[36px] focus:outline-none text-center text-[12px] flex items-center justify-center rounded-[2px]">
                        <p>A4</p>
                      </div>
                      <div
                          class="bg-[#EDEDED] w-[40px] xl:w-[50px] h-[26px] xl:h-[36px] focus:outline-none text-center text-[12px] flex items-center justify-center rounded-[2px]">
                        <p>A5</p>
                      </div>
                    </div>
                  </div>
                  <div class="flex gap-x-[30px] 2xl:gap-x-[50px] items-center mt-3">
                    <p class="w-[20%] leading-[14px] xl:leading-[16px] text-[12px] text-[#676769] font-[400]">Row 13</p>
                    <div class="flex gap-x-[20px] xl:gap-x-[26px] justify-start w-[80%]">
                      <div
                          class="bg-[#EDEDED] w-[40px] xl:w-[50px] h-[26px] xl:h-[36px] focus:outline-none text-center text-[12px] flex items-center justify-center rounded-[2px]">
                        <p>A1</p>
                      </div>
                      <div
                          class="bg-[#EDEDED] w-[40px] xl:w-[50px] h-[26px] xl:h-[36px] focus:outline-none text-center text-[12px] flex items-center justify-center rounded-[2px]">
                        <p>A2</p>
                      </div>
                      <div
                          class="bg-[#EDEDED] w-[40px] xl:w-[50px] h-[26px] xl:h-[36px] focus:outline-none text-center text-[12px] flex items-center justify-center rounded-[2px]">
                        <p>A3</p>
                      </div>
                      <div
                          class="bg-[#EDEDED] w-[40px] xl:w-[50px] h-[26px] xl:h-[36px] focus:outline-none text-center text-[12px] flex items-center justify-center rounded-[2px]">
                        <p>A4</p>
                      </div>
                      <div
                          class="bg-[#EDEDED] w-[40px] xl:w-[50px] h-[26px] xl:h-[36px] focus:outline-none text-center text-[12px] flex items-center justify-center rounded-[2px]">
                        <p>A5</p>
                      </div>
                    </div>
                  </div>
                  <div class="flex gap-x-[30px] 2xl:gap-x-[50px] items-center mt-3">
                    <p class="w-[20%] leading-[14px] xl:leading-[16px] text-[12px] text-[#676769] font-[400]">Row 14</p>
                    <div class="flex gap-x-[20px] xl:gap-x-[26px] justify-start w-[80%]">
                      <div
                          class="bg-[#EDEDED] w-[40px] xl:w-[50px] h-[26px] xl:h-[36px] focus:outline-none text-center text-[12px] flex items-center justify-center rounded-[2px]">
                        <p>A1</p>
                      </div>
                      <div
                          class="bg-[#EDEDED] w-[40px] xl:w-[50px] h-[26px] xl:h-[36px] focus:outline-none text-center text-[12px] flex items-center justify-center rounded-[2px]">
                        <p>A2</p>
                      </div>
                      <div
                          class="bg-[#EDEDED] w-[40px] xl:w-[50px] h-[26px] xl:h-[36px] focus:outline-none text-center text-[12px] flex items-center justify-center rounded-[2px]">
                        <p>A3</p>
                      </div>
                      <div
                          class="bg-[#EDEDED] w-[40px] xl:w-[50px] h-[26px] xl:h-[36px] focus:outline-none text-center text-[12px] flex items-center justify-center rounded-[2px]">
                        <p>A4</p>
                      </div>
                      <div
                          class="bg-[#EDEDED] w-[40px] xl:w-[50px] h-[26px] xl:h-[36px] focus:outline-none text-center text-[12px] flex items-center justify-center rounded-[2px]">
                        <p>A5</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      <hr class="border-t border-corporateBorder">
      <div class="px-[16px] py-[20px] w-full flex justify-center items-center">
        <router-link
            class="flex justify-center items-center text-white leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[600] bg-corporate bg-opacity-30 rounded-full px-[20px] py-[11px] xl:px-[24px] xl:py-[13px]"
            to="/busCreateEdit">
          Preview bus
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

.p-buttonset .p-button {
  margin: 0;
  width: 183px;
  height: 38px;
}

.pi {
  font-size: 13px;
}

.p-button-label {
  font-weight: 400;
}

.p-selectbutton .p-button.p-highlight {
  background: #48A43F;
  background-color: #48A43F;
}


/*checkbox*/


.form-group {
  display: block;
  /*margin-bottom: 15px;*/
}

.form-group input {
  padding: 0;
  height: 14px;
  width: 14px;
  margin-bottom: 0;
  display: none;
  cursor: pointer;
}

.form-group label {
  position: relative;
  cursor: pointer;
}

.form-group label:before {
  content: '';
  -webkit-appearance: none;
  background-color: transparent;
  border: 2px solid #151414;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05), inset 0px -15px 10px -12px rgba(0, 0, 0, 0.05);
  padding: 8px;
  display: inline-block;
  position: relative;
  vertical-align: middle;
  cursor: pointer;
  margin-right: 9px;
  border-radius: 4px;
}

.form-group input:checked + label:before {
  background-color: #48A43F;
  border: 2px solid #48A43F;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05), inset 0px -15px 10px -12px rgba(0, 0, 0, 0.05);
}

.form-group input:checked + label:after {
  content: '';
  display: block;
  position: absolute;
  top: 1px;
  left: 7px;
  width: 6px;
  height: 14px;
  border: 2px solid white;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
  /*background-color: white;*/
}
</style>

<script>
export default {
  data() {
    return {
      selectedCity: null,
      cities: [
        {name: 'Own', code: 'NY'},
        {name: 'Third Party', code: 'RM'},
        // {name: 'London', code: 'LDN'},
        // {name: 'Istanbul', code: 'IST'},
        // {name: 'Paris', code: 'PRS'}
      ]
    }
  }

}
</script>
