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
        <!--            <input type="text" class="w-[270px] h-[40px] border border-[#DBDBDB] placeholder:text-[#4D4D4F] placeholder:text-[14px] leading-[20px] rounded-[4px] pl-8 focus:outline-none" placeholder="PNR or mobile number">-->
        <!--            <img src="../assets/svg/search.svg" class="h-5 w-5 absolute left-[242px]" alt="">-->
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
    <div class="bg-white rounded-[6px] flex justify-between p-4">
      <p class="leading-[28px] xl:leading-[32px] text-[20px] xl:text-[24px] text-primaryText font-[600]">Preview bus</p>
      <button
          class="border border-[#8D8D8F] leading-[16px] text-[12px] font-[600] text-corporate rounded-full w-[80px] h-[26px] xl:w-[90px] xl:h-[36px]">
        Edit
      </button>
    </div>
    <!--        card-->
    <div class="mt-[16px] bg-white rounded-[10px]">
      <div class="rounded-[4px] px-4">
        <div class="flex divide-x divide-corporateBorder">
          <div class="w-[55%]">
            <div class="py-[16px] pl-[16px] pr-[6px]">
              <div class="flex gap-x-4 justify-between">
                <div class="w-1/2">
                  <label
                      class="leading-[20px] xl:leading-[24px] text-[14px] xl:text-[16px] font-[600] text-primaryText"
                      for="brand">Brand</label>
                  <input
                      class="w-full mt-[10px] bg-[#F7F7F7] rounded-[4px] py-[6px] px-[8px] focus:outline-none placeholder:text-primaryText placeholder:leading-[16px] xl:placeholder:leading-[20px] placeholder:text-[12px] xl:placeholder:text-[14px]"
                      placeholder="Hino AK 1J" type="text">
                </div>
                <div class="w-1/2">
                  <label
                      class="leading-[20px] xl:leading-[24px] text-[14px] xl:text-[16px] font-[600] text-primaryText"
                      for="brand">Display name</label>
                  <input
                      class="w-full mt-[10px] bg-[#F7F7F7] rounded-[4px] py-[6px] px-[8px] focus:outline-none placeholder:text-primaryText placeholder:leading-[16px] xl:placeholder:leading-[20px] placeholder:text-[12px] xl:placeholder:text-[14px]"
                      placeholder="Hino 1J - 36 Seat" type="text">
                </div>
              </div>
              <div class="flex gap-x-4 justify-between mt-4">
                <div class="w-1/2">
                  <label
                      class="leading-[20px] xl:leading-[24px] text-[14px] xl:text-[16px] font-[600] text-primaryText"
                      for="brand">Class/Type</label>
                  <input
                      class="w-full mt-[10px] bg-[#F7F7F7] rounded-[4px] py-[6px] px-[8px] focus:outline-none placeholder:text-primaryText placeholder:leading-[16px] xl:placeholder:leading-[20px] placeholder:text-[12px] xl:placeholder:text-[14px]"
                      placeholder="Mixed class" type="text">
                </div>
                <div class="w-1/2">
                  <label
                      class="leading-[20px] xl:leading-[24px] text-[14px] xl:text-[16px] font-[600] text-primaryText"
                      for="brand">Seat plan name</label>
                  <input
                      class="w-full mt-[10px] bg-[#F7F7F7] rounded-[4px] py-[6px] px-[8px] focus:outline-none placeholder:text-primaryText placeholder:leading-[16px] xl:placeholder:leading-[20px] placeholder:text-[12px] xl:placeholder:text-[14px]"
                      placeholder="Seat plan name" type="text">
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
              <hr class="border-t border-[#DBDBDB] mt-4">

              <p class="mt-4 leading-[20px] xl:leading-[24px] text-[14px] xl:text-[16px] text-primaryText font-[600]">
                Bus facilities</p>
              <p class="mt-4 leading-[16px] xl:leading-[20px] text-[12px] xl:text-[14px] text-primaryText font-[400]">
                WiFi, Charging port, Leg rest</p>
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
              <hr class="border-t border-[#DBDBDB] mt-3">
              <div class="flex justify-start gap-x-[24px] mt-[14px]">
                <p class="leading-[16px] xl:leading-[20px] text-[12px] xl:text-[14px] font-[400] text-primaryText">
                  Color:</p>
                <div class="flex gap-x-6">
                  <div class="flex gap-x-1 justify-center items-center">
                    <div class="h-[14px] w-[14px] rounded-[2px] bg-[#f04935]"></div>
                    <p class="leading-[20px] xl:leading-[24px] text-[14px] xl:text-[16px] font-[400] text-primaryText">
                      Economy</p>
                  </div>

                  <div class="flex gap-x-1 justify-center items-center">
                    <div class="h-[14px] w-[14px] rounded-[2px] bg-[#1E88E5]"></div>
                    <p class="leading-[20px] xl:leading-[24px] text-[14px] xl:text-[16px] font-[400] text-primaryText">
                      Business</p>
                  </div>
                </div>
              </div>
              <hr class="border-t border-[#DBDBDB] mt-3">
              <div class="flex gap-x-[30px] 2xl:gap-x-[50px] items-center mt-4">
                <p class="w-[20%] leading-[14px] xl:leading-[16px] text-[12px] text-[#676769] font-[400]">Ex 2</p>
                <div class="flex gap-x-[20px] xl:gap-x-[26px] justify-start w-[80%]">
                  <div
                      class="bg-[#EDEDED] w-[40px] xl:w-[50px] h-[26px] xl:h-[36px] focus:outline-none text-center text-[12px] text-center flex items-center justify-center">
                    <p>A1</p>
                  </div>
                  <div
                      class="bg-[#EDEDED] w-[40px] xl:w-[50px] h-[26px] xl:h-[36px] focus:outline-none text-center text-[12px] text-center flex items-center justify-center">
                    <p>A2</p>
                  </div>
                  <div
                      class="bg-[#EDEDED] w-[40px] xl:w-[50px] h-[26px] xl:h-[36px] focus:outline-none text-center text-[12px] text-center flex items-center justify-center">
                    <p>A3</p>
                  </div>
                  <div
                      class="bg-[#EDEDED] w-[40px] xl:w-[50px] h-[26px] xl:h-[36px] focus:outline-none text-center text-[12px] text-center flex items-center justify-center">
                    <p>A4</p>
                  </div>
                  <div
                      class="bg-[#EDEDED] w-[40px] xl:w-[50px] h-[26px] xl:h-[36px] focus:outline-none text-center text-[12px] text-center flex items-center justify-center">
                    <p>A5</p>
                  </div>
                </div>
              </div>
              <div class="flex gap-x-[30px] 2xl:gap-x-[50px] items-center mt-4">
                <p class="w-[20%] leading-[14px] xl:leading-[16px] text-[12px] text-[#676769] font-[400]">Ex 1</p>
                <div class="flex gap-x-[20px] xl:gap-x-[26px] justify-start w-[80%]">
                  <div
                      class="bg-[#1E88E5] text-white w-[40px] xl:w-[50px] h-[26px] xl:h-[36px] focus:outline-none text-center text-[12px] text-center flex items-center justify-center">
                    <p>A1</p>
                  </div>
                  <div
                      class="bg-[#1E88E5] text-white w-[40px] xl:w-[50px] h-[26px] xl:h-[36px] focus:outline-none text-center text-[12px] text-center flex items-center justify-center">
                    <p>A2</p>
                  </div>
                  <div
                      class="bg-[#EDEDED] text-primaryText w-[40px] xl:w-[50px] h-[26px] xl:h-[36px] focus:outline-none text-center text-[12px] text-center flex items-center justify-center">
                    <p>A3</p>
                  </div>
                  <div
                      class="bg-[#1E88E5] text-white w-[40px] xl:w-[50px] h-[26px] xl:h-[36px] focus:outline-none text-center text-[12px] text-center flex items-center justify-center">
                    <p>A4</p>
                  </div>
                  <div
                      class="bg-[#1E88E5] text-white w-[40px] xl:w-[50px] h-[26px] xl:h-[36px] focus:outline-none text-center text-[12px] text-center flex items-center justify-center">
                    <p>A5</p>
                  </div>
                </div>
              </div>
              <div class="flex gap-x-[30px] 2xl:gap-x-[50px] items-center mt-4">
                <p class="w-[20%] leading-[14px] xl:leading-[16px] text-[12px] text-[#676769] font-[400]">Ex 1</p>
                <div class="flex gap-x-[20px] xl:gap-x-[26px] justify-start w-[80%]">
                  <div
                      class="bg-[#f04935] text-white w-[40px] xl:w-[50px] h-[26px] xl:h-[36px] focus:outline-none text-center text-[12px] text-center flex items-center justify-center">
                    <p>A1</p>
                  </div>
                  <div
                      class="bg-[#f04935] text-white w-[40px] xl:w-[50px] h-[26px] xl:h-[36px] focus:outline-none text-center text-[12px] text-center flex items-center justify-center">
                    <p>A2</p>
                  </div>
                  <div
                      class="bg-[#EDEDED] text-primaryText w-[40px] xl:w-[50px] h-[26px] xl:h-[36px] focus:outline-none text-center text-[12px] text-center flex items-center justify-center">
                    <p>A3</p>
                  </div>
                  <div
                      class="bg-[#f04935] text-white w-[40px] xl:w-[50px] h-[26px] xl:h-[36px] focus:outline-none text-center text-[12px] text-center flex items-center justify-center">
                    <p>A4</p>
                  </div>
                  <div
                      class="bg-[#f04935] text-white w-[40px] xl:w-[50px] h-[26px] xl:h-[36px] focus:outline-none text-center text-[12px] text-center flex items-center justify-center">
                    <p>A5</p>
                  </div>
                </div>
              </div>
              <div class="flex gap-x-[30px] 2xl:gap-x-[50px] items-center mt-4">
                <p class="w-[20%] leading-[14px] xl:leading-[16px] text-[12px] text-[#676769] font-[400]">Ex 1</p>
                <div class="flex gap-x-[20px] xl:gap-x-[26px] justify-start w-[80%]">
                  <div
                      class="bg-[#f04935] text-white w-[40px] xl:w-[50px] h-[26px] xl:h-[36px] focus:outline-none text-center text-[12px] text-center flex items-center justify-center">
                    <p>A1</p>
                  </div>
                  <div
                      class="bg-[#f04935] text-white w-[40px] xl:w-[50px] h-[26px] xl:h-[36px] focus:outline-none text-center text-[12px] text-center flex items-center justify-center">
                    <p>A2</p>
                  </div>
                  <div
                      class="bg-[#EDEDED] text-primaryText w-[40px] xl:w-[50px] h-[26px] xl:h-[36px] focus:outline-none text-center text-[12px] text-center flex items-center justify-center">
                    <p>A3</p>
                  </div>
                  <div
                      class="bg-[#f04935] text-white w-[40px] xl:w-[50px] h-[26px] xl:h-[36px] focus:outline-none text-center text-[12px] text-center flex items-center justify-center">
                    <p>A4</p>
                  </div>
                  <div
                      class="bg-[#f04935] text-white w-[40px] xl:w-[50px] h-[26px] xl:h-[36px] focus:outline-none text-center text-[12px] text-center flex items-center justify-center">
                    <p>A5</p>
                  </div>
                </div>
              </div>
              <div class="flex gap-x-[30px] 2xl:gap-x-[50px] items-center mt-4">
                <p class="w-[20%] leading-[14px] xl:leading-[16px] text-[12px] text-[#676769] font-[400]">Ex 1</p>
                <div class="flex gap-x-[20px] xl:gap-x-[26px] justify-start w-[80%]">
                  <div
                      class="bg-[#1E88E5] text-white w-[40px] xl:w-[50px] h-[26px] xl:h-[36px] focus:outline-none text-center text-[12px] text-center flex items-center justify-center">
                    <p>A1</p>
                  </div>
                  <div
                      class="bg-[#1E88E5] text-white w-[40px] xl:w-[50px] h-[26px] xl:h-[36px] focus:outline-none text-center text-[12px] text-center flex items-center justify-center">
                    <p>A2</p>
                  </div>
                  <div
                      class="bg-[#EDEDED] text-primaryText w-[40px] xl:w-[50px] h-[26px] xl:h-[36px] focus:outline-none text-center text-[12px] text-center flex items-center justify-center">
                    <p>A3</p>
                  </div>
                  <div
                      class="bg-[#1E88E5] text-white w-[40px] xl:w-[50px] h-[26px] xl:h-[36px] focus:outline-none text-center text-[12px] text-center flex items-center justify-center">
                    <p>A4</p>
                  </div>
                  <div
                      class="bg-[#1E88E5] text-white w-[40px] xl:w-[50px] h-[26px] xl:h-[36px] focus:outline-none text-center text-[12px] text-center flex items-center justify-center">
                    <p>A5</p>
                  </div>
                </div>
              </div>
              <div class="flex gap-x-[30px] 2xl:gap-x-[50px] items-center mt-4">
                <p class="w-[20%] leading-[14px] xl:leading-[16px] text-[12px] text-[#676769] font-[400]">Ex 1</p>
                <div class="flex gap-x-[20px] xl:gap-x-[26px] justify-start w-[80%]">
                  <div
                      class="bg-[#1E88E5] text-white w-[40px] xl:w-[50px] h-[26px] xl:h-[36px] focus:outline-none text-center text-[12px] text-center flex items-center justify-center">
                    <p>A1</p>
                  </div>
                  <div
                      class="bg-[#1E88E5] text-white w-[40px] xl:w-[50px] h-[26px] xl:h-[36px] focus:outline-none text-center text-[12px] text-center flex items-center justify-center">
                    <p>A2</p>
                  </div>
                  <div
                      class="bg-[#EDEDED] text-primaryText w-[40px] xl:w-[50px] h-[26px] xl:h-[36px] focus:outline-none text-center text-[12px] text-center flex items-center justify-center">
                    <p>A3</p>
                  </div>
                  <div
                      class="bg-[#1E88E5] text-white w-[40px] xl:w-[50px] h-[26px] xl:h-[36px] focus:outline-none text-center text-[12px] text-center flex items-center justify-center">
                    <p>A4</p>
                  </div>
                  <div
                      class="bg-[#1E88E5] text-white w-[40px] xl:w-[50px] h-[26px] xl:h-[36px] focus:outline-none text-center text-[12px] text-center flex items-center justify-center">
                    <p>A5</p>
                  </div>
                </div>
              </div>
              <div class="flex gap-x-[30px] 2xl:gap-x-[50px] items-center mt-4">
                <p class="w-[20%] leading-[14px] xl:leading-[16px] text-[12px] text-[#676769] font-[400]">Ex 1</p>
                <div class="flex gap-x-[20px] xl:gap-x-[26px] justify-start w-[80%]">
                  <div
                      class="bg-[#1E88E5] text-white w-[40px] xl:w-[50px] h-[26px] xl:h-[36px] focus:outline-none text-center text-[12px] text-center flex items-center justify-center">
                    <p>A1</p>
                  </div>
                  <div
                      class="bg-[#1E88E5] text-white w-[40px] xl:w-[50px] h-[26px] xl:h-[36px] focus:outline-none text-center text-[12px] text-center flex items-center justify-center">
                    <p>A2</p>
                  </div>
                  <div
                      class="bg-[#EDEDED] text-primaryText w-[40px] xl:w-[50px] h-[26px] xl:h-[36px] focus:outline-none text-center text-[12px] text-center flex items-center justify-center">
                    <p>A3</p>
                  </div>
                  <div
                      class="bg-[#1E88E5] text-white w-[40px] xl:w-[50px] h-[26px] xl:h-[36px] focus:outline-none text-center text-[12px] text-center flex items-center justify-center">
                    <p>A4</p>
                  </div>
                  <div
                      class="bg-[#1E88E5] text-white w-[40px] xl:w-[50px] h-[26px] xl:h-[36px] focus:outline-none text-center text-[12px] text-center flex items-center justify-center">
                    <p>A5</p>
                  </div>
                </div>
              </div>
              <div class="flex gap-x-[30px] 2xl:gap-x-[50px] items-center mt-4">
                <p class="w-[20%] leading-[14px] xl:leading-[16px] text-[12px] text-[#676769] font-[400]">Ex 1</p>
                <div class="flex gap-x-[20px] xl:gap-x-[26px] justify-start w-[80%]">
                  <div
                      class="bg-[#1E88E5] text-white w-[40px] xl:w-[50px] h-[26px] xl:h-[36px] focus:outline-none text-center text-[12px] text-center flex items-center justify-center">
                    <p>A1</p>
                  </div>
                  <div
                      class="bg-[#1E88E5] text-white w-[40px] xl:w-[50px] h-[26px] xl:h-[36px] focus:outline-none text-center text-[12px] text-center flex items-center justify-center">
                    <p>A2</p>
                  </div>
                  <div
                      class="bg-[#1E88E5] text-white w-[40px] xl:w-[50px] h-[26px] xl:h-[36px] focus:outline-none text-center text-[12px] text-center flex items-center justify-center">
                    <p>A3</p>
                  </div>
                  <div
                      class="bg-[#1E88E5] text-white w-[40px] xl:w-[50px] h-[26px] xl:h-[36px] focus:outline-none text-center text-[12px] text-center flex items-center justify-center">
                    <p>A4</p>
                  </div>
                  <div
                      class="bg-[#1E88E5] text-white w-[40px] xl:w-[50px] h-[26px] xl:h-[36px] focus:outline-none text-center text-[12px] text-center flex items-center justify-center">
                    <p>A5</p>
                  </div>
                </div>
              </div>
              <div class="flex gap-x-[30px] 2xl:gap-x-[50px] items-center mt-4">
                <p class="w-[20%] leading-[14px] xl:leading-[16px] text-[12px] text-[#676769] font-[400]">Row 7</p>
                <div class="flex gap-x-[20px] xl:gap-x-[26px] justify-start w-[80%]">
                  <div
                      class="bg-[#EDEDED] w-[40px] xl:w-[50px] h-[26px] xl:h-[36px] focus:outline-none text-center text-[12px] text-center flex items-center justify-center">
                    <p>A1</p>
                  </div>
                  <div
                      class="bg-[#EDEDED] w-[40px] xl:w-[50px] h-[26px] xl:h-[36px] focus:outline-none text-center text-[12px] text-center flex items-center justify-center">
                    <p>A2</p>
                  </div>
                  <div
                      class="bg-[#EDEDED] w-[40px] xl:w-[50px] h-[26px] xl:h-[36px] focus:outline-none text-center text-[12px] text-center flex items-center justify-center">
                    <p>A3</p>
                  </div>
                  <div
                      class="bg-[#EDEDED] w-[40px] xl:w-[50px] h-[26px] xl:h-[36px] focus:outline-none text-center text-[12px] text-center flex items-center justify-center">
                    <p>A4</p>
                  </div>
                  <div
                      class="bg-[#EDEDED] w-[40px] xl:w-[50px] h-[26px] xl:h-[36px] focus:outline-none text-center text-[12px] text-center flex items-center justify-center">
                    <p>A5</p>
                  </div>
                </div>
              </div>
              <div class="flex gap-x-[30px] 2xl:gap-x-[50px] items-center mt-4">
                <p class="w-[20%] leading-[14px] xl:leading-[16px] text-[12px] text-[#676769] font-[400]">Row 8</p>
                <div class="flex gap-x-[20px] xl:gap-x-[26px] justify-start w-[80%]">
                  <div
                      class="bg-[#EDEDED] w-[40px] xl:w-[50px] h-[26px] xl:h-[36px] focus:outline-none text-center text-[12px] text-center flex items-center justify-center">
                    <p>A1</p>
                  </div>
                  <div
                      class="bg-[#EDEDED] w-[40px] xl:w-[50px] h-[26px] xl:h-[36px] focus:outline-none text-center text-[12px] text-center flex items-center justify-center">
                    <p>A2</p>
                  </div>
                  <div
                      class="bg-[#EDEDED] w-[40px] xl:w-[50px] h-[26px] xl:h-[36px] focus:outline-none text-center text-[12px] text-center flex items-center justify-center">
                    <p>A3</p>
                  </div>
                  <div
                      class="bg-[#EDEDED] w-[40px] xl:w-[50px] h-[26px] xl:h-[36px] focus:outline-none text-center text-[12px] text-center flex items-center justify-center">
                    <p>A4</p>
                  </div>
                  <div
                      class="bg-[#EDEDED] w-[40px] xl:w-[50px] h-[26px] xl:h-[36px] focus:outline-none text-center text-[12px] text-center flex items-center justify-center">
                    <p>A5</p>
                  </div>
                </div>
              </div>
              <div class="flex gap-x-[30px] 2xl:gap-x-[50px] items-center mt-4">
                <p class="w-[20%] leading-[14px] xl:leading-[16px] text-[12px] text-[#676769] font-[400]">Row 9</p>
                <div class="flex gap-x-[20px] xl:gap-x-[26px] justify-start w-[80%]">
                  <div
                      class="bg-[#EDEDED] w-[40px] xl:w-[50px] h-[26px] xl:h-[36px] focus:outline-none text-center text-[12px] text-center flex items-center justify-center">
                    <p>A1</p>
                  </div>
                  <div
                      class="bg-[#EDEDED] w-[40px] xl:w-[50px] h-[26px] xl:h-[36px] focus:outline-none text-center text-[12px] text-center flex items-center justify-center">
                    <p>A2</p>
                  </div>
                  <div
                      class="bg-[#EDEDED] w-[40px] xl:w-[50px] h-[26px] xl:h-[36px] focus:outline-none text-center text-[12px] text-center flex items-center justify-center">
                    <p>A3</p>
                  </div>
                  <div
                      class="bg-[#EDEDED] w-[40px] xl:w-[50px] h-[26px] xl:h-[36px] focus:outline-none text-center text-[12px] text-center flex items-center justify-center">
                    <p>A4</p>
                  </div>
                  <div
                      class="bg-[#EDEDED] w-[40px] xl:w-[50px] h-[26px] xl:h-[36px] focus:outline-none text-center text-[12px] text-center flex items-center justify-center">
                    <p>A5</p>
                  </div>
                </div>
              </div>
              <div class="flex gap-x-[30px] 2xl:gap-x-[50px] items-center mt-4">
                <p class="w-[20%] leading-[14px] xl:leading-[16px] text-[12px] text-[#676769] font-[400]">Row 10</p>
                <div class="flex gap-x-[20px] xl:gap-x-[26px] justify-start w-[80%]">
                  <div
                      class="bg-[#EDEDED] w-[40px] xl:w-[50px] h-[26px] xl:h-[36px] focus:outline-none text-center text-[12px] text-center flex items-center justify-center">
                    <p>A1</p>
                  </div>
                  <div
                      class="bg-[#EDEDED] w-[40px] xl:w-[50px] h-[26px] xl:h-[36px] focus:outline-none text-center text-[12px] text-center flex items-center justify-center">
                    <p>A2</p>
                  </div>
                  <div
                      class="bg-[#EDEDED] w-[40px] xl:w-[50px] h-[26px] xl:h-[36px] focus:outline-none text-center text-[12px] text-center flex items-center justify-center">
                    <p>A3</p>
                  </div>
                  <div
                      class="bg-[#EDEDED] w-[40px] xl:w-[50px] h-[26px] xl:h-[36px] focus:outline-none text-center text-[12px] text-center flex items-center justify-center">
                    <p>A4</p>
                  </div>
                  <div
                      class="bg-[#EDEDED] w-[40px] xl:w-[50px] h-[26px] xl:h-[36px] focus:outline-none text-center text-[12px] text-center flex items-center justify-center">
                    <p>A5</p>
                  </div>
                </div>
              </div>
              <div class="flex gap-x-[30px] 2xl:gap-x-[50px] items-center mt-4">
                <p class="w-[20%] leading-[14px] xl:leading-[16px] text-[12px] text-[#676769] font-[400]">Row 12</p>
                <div class="flex gap-x-[20px] xl:gap-x-[26px] justify-start w-[80%]">
                  <div
                      class="bg-[#EDEDED] w-[40px] xl:w-[50px] h-[26px] xl:h-[36px] focus:outline-none text-center text-[12px] text-center flex items-center justify-center">
                    <p>A1</p>
                  </div>
                  <div
                      class="bg-[#EDEDED] w-[40px] xl:w-[50px] h-[26px] xl:h-[36px] focus:outline-none text-center text-[12px] text-center flex items-center justify-center">
                    <p>A2</p>
                  </div>
                  <div
                      class="bg-[#EDEDED] w-[40px] xl:w-[50px] h-[26px] xl:h-[36px] focus:outline-none text-center text-[12px] text-center flex items-center justify-center">
                    <p>A3</p>
                  </div>
                  <div
                      class="bg-[#EDEDED] w-[40px] xl:w-[50px] h-[26px] xl:h-[36px] focus:outline-none text-center text-[12px] text-center flex items-center justify-center">
                    <p>A4</p>
                  </div>
                  <div
                      class="bg-[#EDEDED] w-[40px] xl:w-[50px] h-[26px] xl:h-[36px] focus:outline-none text-center text-[12px] text-center flex items-center justify-center">
                    <p>A5</p>
                  </div>
                </div>
              </div>
              <div class="flex gap-x-[30px] 2xl:gap-x-[50px] items-center mt-4">
                <p class="w-[20%] leading-[14px] xl:leading-[16px] text-[12px] text-[#676769] font-[400]">Row 13</p>
                <div class="flex gap-x-[20px] xl:gap-x-[26px] justify-start w-[80%]">
                  <div
                      class="bg-[#EDEDED] w-[40px] xl:w-[50px] h-[26px] xl:h-[36px] focus:outline-none text-center text-[12px] text-center flex items-center justify-center">
                    <p>A1</p>
                  </div>
                  <div
                      class="bg-[#EDEDED] w-[40px] xl:w-[50px] h-[26px] xl:h-[36px] focus:outline-none text-center text-[12px] text-center flex items-center justify-center">
                    <p>A2</p>
                  </div>
                  <div
                      class="bg-[#EDEDED] w-[40px] xl:w-[50px] h-[26px] xl:h-[36px] focus:outline-none text-center text-[12px] text-center flex items-center justify-center">
                    <p>A3</p>
                  </div>
                  <div
                      class="bg-[#EDEDED] w-[40px] xl:w-[50px] h-[26px] xl:h-[36px] focus:outline-none text-center text-[12px] text-center flex items-center justify-center">
                    <p>A4</p>
                  </div>
                  <div
                      class="bg-[#EDEDED] w-[40px] xl:w-[50px] h-[26px] xl:h-[36px] focus:outline-none text-center text-[12px] text-center flex items-center justify-center">
                    <p>A5</p>
                  </div>
                </div>
              </div>
              <div class="flex gap-x-[30px] 2xl:gap-x-[50px] items-center mt-4">
                <p class="w-[20%] leading-[14px] xl:leading-[16px] text-[12px] text-[#676769] font-[400]">Row 14</p>
                <div class="flex gap-x-[20px] xl:gap-x-[26px] justify-start w-[80%]">
                  <div
                      class="bg-[#EDEDED] w-[40px] xl:w-[50px] h-[26px] xl:h-[36px] focus:outline-none text-center text-[12px] text-center flex items-center justify-center">
                    <p>A1</p>
                  </div>
                  <div
                      class="bg-[#EDEDED] w-[40px] xl:w-[50px] h-[26px] xl:h-[36px] focus:outline-none text-center text-[12px] text-center flex items-center justify-center">
                    <p>A2</p>
                  </div>
                  <div
                      class="bg-[#EDEDED] w-[40px] xl:w-[50px] h-[26px] xl:h-[36px] focus:outline-none text-center text-[12px] text-center flex items-center justify-center">
                    <p>A3</p>
                  </div>
                  <div
                      class="bg-[#EDEDED] w-[40px] xl:w-[50px] h-[26px] xl:h-[36px] focus:outline-none text-center text-[12px] text-center flex items-center justify-center">
                    <p>A4</p>
                  </div>
                  <div
                      class="bg-[#EDEDED] w-[40px] xl:w-[50px] h-[26px] xl:h-[36px] focus:outline-none text-center text-[12px] text-center flex items-center justify-center">
                    <p>A5</p>
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
            class="flex justify-center items-center text-white leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[600] bg-corporate rounded-full px-[20px] py-[11px] xl:px-[24px] xl:py-[13px]"
            to="/doubleDackerbusCreate">
          Create bus
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
