<template>
    <!-- Top nav bar start-->
    <div class="bg-white h-[72px] sticky top-0 border-b border-[#DBDBDB] z-10">
            <div class="flex justify-between items-center">
              <div class="pl-6 flex flex-col gap-y-[4px]">
                <p class="lg:leading-[16px] xl:leading-[28px] lg:text-[14px] xl:text-[20px] font-[600] text-primaryText">
                  Route Wise Sales</p>
                <div class="flex justify-center items-center gap-x-[6px] mr-4">
                  <p class="text-secondaryText leading-[12px] text-[8px] xl:leading-[16px] xl:text-[12px] font-[400]">Report</p>
                  <img alt="" class="w-1 h-2" src="../assets/svg/bgBack.svg">
                  <p class="text-secondaryText leading-[12px] text-[8px] xl:leading-[16px] xl:text-[12px] font-[400]">
                    Route wise sales</p>
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
                        optionLabel="name" placeholder="Selectr bus operator"/>
                  </div>
                  <div class="w-1/4">
                    <p class="text-primaryText leading-[20px] text-[14px] xl:leading-[24px] xl:text-[16px] font-[600]">
                        Ticket booking type</p>
                    <Dropdown
                        v-model="selectedCity"
                        :options="cities"
                        class="w-full py-[4px] mt-[10px] placeholder:text-primaryText placeholder:leading-[16px] placeholder:text-[12px] xl:placeholder:leading-[20px] xl:placeholder:text-[14px]"
                        optionLabel="name" placeholder="Select ticket booking type"/>
                  </div>
                  <div class="w-1/4">
                    <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">From date</p>
                    <div class="w-full h-[40px] border border-[#DBDBDB] flex justify-between items-center mt-[10px] leading-[20px] rounded-[4px] px-[20px] xl:px-[4px] 2xl:px-[8px] overflow-hidden">
                        <input class="outline-none placeholder:text-[#4D4D4F] placeholder:text-[14px] placeholder:leading-[20px]" placeholder="Select date" type="text">
                        <img alt="" class="h-5 w-5" src="../assets/svg/count2.svg">
                    </div>
                 </div>
                 <div class="w-1/4">
                    <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">To date</p>
                    <div class="w-full h-[40px] border border-[#DBDBDB] flex justify-between items-center mt-[10px] leading-[20px] rounded-[4px] px-[20px] xl:px-[4px] 2xl:px-[8px] overflow-hidden">
                        <input class="outline-none placeholder:text-[#4D4D4F] placeholder:text-[14px] placeholder:leading-[20px]" placeholder="Select date" type="text">
                        <img alt="" class="h-5 w-5" src="../assets/svg/count2.svg">
                    </div>
                 </div>
                </div>
              </div>

              <div class="px-4 pb-4 flex justify-between items-center gap-x-4">
                <div class="w-1/4">
                    <p class="text-primaryText leading-[20px] text-[14px] xl:leading-[24px] xl:text-[16px] font-[600]">
                      Route</p>
                    <Dropdown
                        v-model="selectedCity"
                        :options="cities"
                        class="w-full py-[4px] mt-[10px] placeholder:text-primaryText placeholder:leading-[16px] placeholder:text-[12px] xl:placeholder:leading-[20px] xl:placeholder:text-[14px]"
                        optionLabel="name" placeholder="Select route"/>
                  </div>
                  <div class="w-1/4">
                  <p class="text-primaryText leading-[20px] text-[14px] xl:leading-[24px] xl:text-[16px] font-[600]">
                    Route direction</p>
                  <Dropdown
                      v-model="selectedCity"
                      :options="cities"
                      class="w-full py-[4px] mt-[10px] placeholder:text-primaryText placeholder:leading-[16px] placeholder:text-[12px] xl:placeholder:leading-[20px] xl:placeholder:text-[14px]"
                      optionLabel="name" placeholder="Select route direction"/>
                  </div>
                  <div class="w-1/4">
                    <p class="text-primaryText leading-[20px] text-[14px] xl:leading-[24px] xl:text-[16px] font-[600]">
                      User type</p>
                    <Dropdown
                        v-model="selectedCity"
                        :options="cities"
                        class="w-full py-[4px] mt-[10px] placeholder:text-primaryText placeholder:leading-[16px] placeholder:text-[12px] xl:placeholder:leading-[20px] xl:placeholder:text-[14px]"
                        optionLabel="name" placeholder="Select user type"/>
                  </div>
                <div class="w-1/4">
                    <p class="text-primaryText leading-[20px] text-[14px] xl:leading-[24px] xl:text-[16px] font-[600]">
                      Ticket status</p>
                    <Dropdown
                        v-model="selectedCity"
                        :options="cities"
                        class="w-full py-[4px] mt-[10px] placeholder:text-primaryText placeholder:leading-[16px] placeholder:text-[12px] xl:placeholder:leading-[20px] xl:placeholder:text-[14px]"
                        optionLabel="name" placeholder="Select ticket status"/>
                  </div>
              </div>

              <div class="px-4 pt-1 pb-5 flex justify-center items-center gap-x-4">
                <div>
                  <button
                      class="flex gap-x-[9px] justify-center items-center bg-corporate text-white leading-[14px] xl:leading-[16px] text-[11px] xl:text-[12px] font-[500] py-3 pl-[17px] pr-[24px] rounded-full"><span>
                    <img alt="" class="w-[13px] xl:h-[13px]" src="../assets/svg/white_search.svg">
                  </span>Search
                  </button>
                </div>
              </div>


            </div>
            <div class="flex justify-end items-center mt-4 xl:mt-5 gap-x-6">
              <button
                  class="flex gap-x-[9px] justify-center items-center border border-[#8D8D8F] bg-transparent text-corporate leading-[14px] xl:leading-[16px] text-[11px] xl:text-[12px] font-[500] py-3 pl-[17px] pr-[24px] rounded-full"><span>
                    <img alt="" class="w-[13px] h-[13px]" src="../assets/svg/print.svg">
                  </span>Print
              </button>
              <button
                  class="flex gap-x-[9px] justify-center items-center bg-[#48A43F] text-white leading-[14px] xl:leading-[16px] text-[11px] xl:text-[12px] font-[500] py-3 pl-[17px] pr-[24px] rounded-full"><span>
                    <img alt="" class="w-[13px] h-[13px]" src="../assets/svg/export.svg">
                  </span>Export
              </button>
            </div>
            <div class="bg-white rounded-[8px] mt-4">
              <!-- table start -->
              <table class="min-w-full">
                <thead>
                  <tr class="bg-[#4D4D4F] h-[36px]">
                    <th class="companyTableHead" scope="col" style="border-radius: 6px 0 0 0">
                      Issue DATE
                    </th>
                    <th class="companyTableHead" scope="col">
                      journey DATE
                    </th>
                    <th class="companyTableHead" scope="col">
                      trip no
                    </th>
                    <th class="companyTableHead" scope="col">
                      sold tickets
                    </th>
                    <th class="companyTableHead" scope="col">
                        CANCELLED TICKET
                    </th>
                    <th class="companyTableHead" scope="col">
                      operator <br>discount
                    </th>
                    <th class="companyTableHead" scope="col">
                      jatri discount
                    </th>
                    <th class="companyTableHead" scope="col">
                      JATRI <br>COMMISSION
                    </th>
                    <th class="companyTableHead" scope="col">
                      TP COMMISSION
                    </th>
                    <th class="companyTableHead" scope="col">
                      TOTAL AMOUNT
                    </th>
                    <th class="companyTableHead" scope="col">
                      ticket status
                    </th>
                  </tr>
                </thead>
                <tbody>
                <tr class="border-b border-[#EDEDED]">
                  <td class="text-primaryText border-r border-[#DBDBDB] text-center leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] py-3">
                   <div> 19 July 2022</div> <div>09:45 AM</div>
                  </td>
                  <td class="text-primaryText border-r border-[#DBDBDB] text-center leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] py-3">
                    <div> 19 July 2022</div> <div>09:45 AM</div>
                  </td>
                  <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText py-3">
                    lI6dFWyA
                  </td>
                  <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText py-3">
                    222
                  </td>
                  <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText py-3">
                    22
                  </td>
                  <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText py-3">
                    20 TK
                  </td>
                  <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText py-3">
                    20 TK
                  </td>
                  <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText py-3">
                    20 TK
                  </td>
                  <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText py-3">
                    20 TK
                  </td>
                  <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText py-3">
                    2000 TK
                  </td>
                  <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText py-3 px-[10px]">
                    <div class="greenStatusButton">Sold</div>
                  </td>
                </tr>

                <tr class="border-b border-[#EDEDED]">
                  <td class="text-primaryText border-r border-[#DBDBDB] text-center leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] py-3">
                   <div> 19 July 2022</div> <div>09:45 AM</div>
                  </td>
                  <td class="text-primaryText border-r border-[#DBDBDB] text-center leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] py-3">
                    <div> 19 July 2022</div> <div>09:45 AM</div>
                  </td>
                  <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText py-3">
                    lI6dFWyA
                  </td>
                  <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText py-3">
                    222
                  </td>
                  <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText py-3">
                    22
                  </td>
                  <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText py-3">
                    20 TK
                  </td>
                  <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText py-3">
                    20 TK
                  </td>
                  <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText py-3">
                    20 TK
                  </td>
                  <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText py-3">
                   -
                  </td>
                  <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText py-3">
                    2000 TK
                  </td>
                  <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText py-3 px-[10px]">
                    <div class="greenStatusButton">Sold</div>
                  </td>
                </tr>
                
                <tr class="border-b border-[#EDEDED]">
                  <td class="text-primaryText border-r border-[#DBDBDB] text-center leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] py-3">
                   <div> 19 July 2022</div> <div>09:45 AM</div>
                  </td>
                  <td class="text-primaryText border-r border-[#DBDBDB] text-center leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] py-3">
                    <div> 19 July 2022</div> <div>09:45 AM</div>
                  </td>
                  <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText py-3">
                    lI6dFWyA
                  </td>
                  <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText py-3">
                    222
                  </td>
                  <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText py-3">
                    22
                  </td>
                  <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText py-3">
                    20 TK
                  </td>
                  <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText py-3">
                    20 TK
                  </td>
                  <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText py-3">
                    20 TK
                  </td>
                  <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText py-3">
                    20 TK
                  </td>
                  <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText py-3">
                    2000 TK
                  </td>
                  <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText py-3 px-[10px]">
                    <div class="skyStatusButton">Reserved</div>
                  </td>
                </tr>

                <tr class="border-b border-[#EDEDED]">
                  <td class="text-primaryText border-r border-[#DBDBDB] text-center leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] py-3">
                   <div> 19 July 2022</div> <div>09:45 AM</div>
                  </td>
                  <td class="text-primaryText border-r border-[#DBDBDB] text-center leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] py-3">
                    <div> 19 July 2022</div> <div>09:45 AM</div>
                  </td>
                  <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText py-3">
                    lI6dFWyA
                  </td>
                  <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText py-3">
                    222
                  </td>
                  <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText py-3">
                    22
                  </td>
                  <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText py-3">
                    20 TK
                  </td>
                  <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText py-3">
                    20 TK
                  </td>
                  <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText py-3">
                    20 TK
                  </td>
                  <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText py-3">
                    20 TK
                  </td>
                  <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText py-3">
                    2000 TK
                  </td>
                  <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText py-3 px-[10px]">
                    <div class="orangeStatusButton">Cancelled</div>
                  </td>
                </tr>

                <tr class="border-b border-[#EDEDED]">
                  <td class="text-primaryText border-r border-[#DBDBDB] text-center leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] py-3">
                   <div> 19 July 2022</div> <div>09:45 AM</div>
                  </td>
                  <td class="text-primaryText border-r border-[#DBDBDB] text-center leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] py-3">
                    <div> 19 July 2022</div> <div>09:45 AM</div>
                  </td>
                  <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText py-3">
                    lI6dFWyA
                  </td>
                  <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText py-3">
                    222
                  </td>
                  <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText py-3">
                    22
                  </td>
                  <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText py-3">
                    20 TK
                  </td>
                  <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText py-3">
                    20 TK
                  </td>
                  <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText py-3">
                    20 TK
                  </td>
                  <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText py-3">
                    20 TK
                  </td>
                  <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText py-3">
                    2000 TK
                  </td>
                  <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText py-3 px-[10px]">
                    <div class="greenStatusButton">Sold</div>
                  </td>
                </tr>

                <tr class="border-b border-[#EDEDED]">
                  <td class="text-primaryText border-r border-[#DBDBDB] text-center leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] py-3">
                   <div> 19 July 2022</div> <div>09:45 AM</div>
                  </td>
                  <td class="text-primaryText border-r border-[#DBDBDB] text-center leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] py-3">
                    <div> 19 July 2022</div> <div>09:45 AM</div>
                  </td>
                  <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText py-3">
                    lI6dFWyA
                  </td>
                  <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText py-3">
                    222
                  </td>
                  <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText py-3">
                    22
                  </td>
                  <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText py-3">
                    20 TK
                  </td>
                  <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText py-3">
                    20 TK
                  </td>
                  <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText py-3">
                    20 TK
                  </td>
                  <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText py-3">
                    20 TK
                  </td>
                  <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText py-3">
                    2000 TK
                  </td>
                  <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText py-3 px-[10px]">
                    <div class="greenStatusButton">Sold</div>
                  </td>
                </tr>
                </tbody>
              </table>
            </div>

            <div class="flex items-center gap-x-[128px] mt-[30px]">
                <p class="text-[#4D4D4F] text-[12px] xl:text-sm leading-4 xl:leading-5">Showing result 1 to 50 of 500 (10 Pages)</p>
                <div class="flex items-center gap-x-6">
                    <button type="button" class="paginationNextButton"><img class="transform rotate-180" src="../assets/svg/pagination-next.svg" alt=""></button>
                    <button type="button" class="activePaginationButton">01</button>
                    <button type="button" class="paginationButton">02</button>
                    <button type="button" class="paginationButton">03</button>
                    <div type="button" class="paginationButton">...</div>
                    <button type="button" class="paginationButton">10</button>
                    <button type="button" class="paginationNextButton">Next <img src="../assets/svg/pagination-next.svg" alt=""></button>
                    <button type="button"><img class="transform rotate-180" src="../assets/svg/pagination-back.svg" alt=""></button>
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
    import SidebarNav from "../components/SidebarNav.vue";
    
    export default {
      components: {
        DropdownMenu,
        SidebarNav
    }
    }
    </script>
    