<template>
    <!-- Top nav bar start-->
    <div class="bg-white h-[72px] sticky top-0 border-b border-[#DBDBDB] z-10">
            <div class="flex justify-between items-center">
              <div class="pl-6 flex flex-col gap-y-[4px]">
                <p class="lg:leading-[16px] xl:leading-[28px] lg:text-[14px] xl:text-[20px] font-[600] text-primaryText">
                    Operator Wise Sales</p>
                <div class="flex justify-center items-center gap-x-[6px] mr-4">
                  <p class="text-secondaryText leading-[12px] text-[8px] xl:leading-[16px] xl:text-[12px] font-[400]">Report</p>
                  <img alt="" class="w-1 h-2" src="../assets/svg/bgBack.svg">
                  <p class="text-secondaryText leading-[12px] text-[8px] xl:leading-[16px] xl:text-[12px] font-[400]">
                    Operator wise sales</p>
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
                        Ticket booking type</p>
                    <Dropdown
                        v-model="selectedCity"
                        :options="cities"
                        class="w-full py-[4px] mt-[10px] placeholder:text-primaryText placeholder:leading-[16px] placeholder:text-[12px] xl:placeholder:leading-[20px] xl:placeholder:text-[14px]"
                        optionLabel="name" placeholder="Select ticket booking type"/>
                  </div>
    
                  <div class="w-1/4">
                    <p class="text-primaryText leading-[20px] text-[14px] xl:leading-[24px] xl:text-[16px] font-[600]">
                        Counter type</p>
                    <Dropdown
                        v-model="selectedCity"
                        :options="cities"
                        class="w-full py-[4px] mt-[10px] placeholder:text-primaryText placeholder:leading-[16px] placeholder:text-[12px] xl:placeholder:leading-[20px] xl:placeholder:text-[14px]"
                        optionLabel="name" placeholder="Select counter type"/>
                  </div>
                  <div class="w-1/4">
                  <p class="text-primaryText leading-[20px] text-[14px] xl:leading-[24px] xl:text-[16px] font-[600]">
                    Counter</p>
                  <Dropdown
                      v-model="selectedCity"
                      :options="cities"
                      class="w-full py-[4px] mt-[10px] placeholder:text-primaryText placeholder:leading-[16px] placeholder:text-[12px] xl:placeholder:leading-[20px] xl:placeholder:text-[14px]"
                      optionLabel="name" placeholder="Select counter"/>
                </div>
                </div>
              </div>

              <div class="px-4 pb-4 flex justify-between items-center gap-x-4">
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
                    <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">Trip/coach no</p>
                    <input type="text" class="createNormalInput" placeholder="Enter trip/coach no">
                </div>
              </div>

              <div class="px-4 pb-4 flex justify-between items-center gap-x-4">
                <div class="w-1/4">
                    <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">Bus type</p>
                    <div class="flex items-center gap-5">
                        <div class="form-group mt-4 mb-0" data-v-0d946802="">
                            <input type="checkbox" id="read" data-v-0d946802="">
                            <label for="read" class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]" data-v-0d946802=""> AC</label>
                       </div>
                       <div class="form-group mt-4 mb-0" data-v-0d946802="">
                            <input type="checkbox" id="read" data-v-0d946802="">
                            <label for="read" class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]" data-v-0d946802=""> Non AC</label>
                       </div>
                    </div>
                 </div> 
                <div class="mt-5">
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
                        Company name
                    </th>
                    <th class="companyTableHead" scope="col">
                        Trip no
                    </th>
                    <th class="companyTableHead" scope="col">
                        Sold <br>ticket
                    </th>
                    <th class="companyTableHead" scope="col">
                        Sold ticket <br>amount
                    </th>
                    <th class="companyTableHead" scope="col">
                        CANCELLED <br>Ticket
                    </th>
                    <th class="companyTableHead" scope="col">
                        Cancelled <br>amount
                    </th>
                    <th class="companyTableHead" scope="col">
                        Company <br>discount
                    </th>
                    <th class="companyTableHead" scope="col">
                        Third-party <br>commission
                    </th>
                    <th class="companyTableHead" scope="col">
                        Third-party <br>discount
                    </th>
                    <th class="companyTableHead" scope="col">
                        Jatri <br>commission
                    </th>
                    <th class="companyTableHead" scope="col">
                        Total <br>commission
                    </th>
                    <th class="companyTableHead" scope="col" style="border-radius: 0 6px 0 0">
                        TOTAL AMOUNT
                    </th>
                    </tr>
                </thead>
                <tbody>
                <tr class="border-b border-[#EDEDED]">
                  <td class="text-primaryText border-r border-[#DBDBDB] text-center leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] py-3">
                    Mimzal Paribahan
                  </td>
    
                  <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText py-3">
                    lI6dFWyA
                  </td>
                  <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText py-3">
                    9
                  </td>
                  <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText py-3">
                    99999 TK
                  </td>
                  <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText py-3">
                    9999
                  </td>
                  <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText py-3">
                    99999 TK
                  </td>
                  <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText py-3">
                    99999 TK
                  </td>
                  <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText py-3">
                    99999 TK
                  </td>
                  <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText py-3">
                    99999 TK
                  </td>
                  <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText py-3">
                    99999 TK
                  </td>
                  <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText py-3">
                    99999 TK
                  </td>
                  <td class="leading-[20px] text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText py-3">
                    99999 TK
                  </td>
                </tr>

                <tr class="border-b border-[#EDEDED]">
                  <td class="text-primaryText border-r border-[#DBDBDB] text-center leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] py-3">
                    Mimzal Paribahan
                  </td>
    
                  <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText py-3">
                    lI6dFWyA
                  </td>
                  <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText py-3">
                    9
                  </td>
                  <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText py-3">
                    99999 TK
                  </td>
                  <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText py-3">
                    9999
                  </td>
                  <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText py-3">
                    99999 TK
                  </td>
                  <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText py-3">
                    99999 TK
                  </td>
                  <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText py-3">
                    99999 TK
                  </td>
                  <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText py-3">
                    99999 TK
                  </td>
                  <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText py-3">
                    99999 TK
                  </td>
                  <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText py-3">
                    99999 TK
                  </td>
                  <td class="leading-[20px] text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText py-3">
                    99999 TK
                  </td>
                </tr>

                <tr class="border-b border-[#EDEDED]">
                  <td class="text-primaryText border-r border-[#DBDBDB] text-center leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] py-3">
                    Mimzal Paribahan
                  </td>
    
                  <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText py-3">
                    lI6dFWyA
                  </td>
                  <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText py-3">
                    9
                  </td>
                  <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText py-3">
                    99999 TK
                  </td>
                  <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText py-3">
                    9999
                  </td>
                  <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText py-3">
                    99999 TK
                  </td>
                  <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText py-3">
                    99999 TK
                  </td>
                  <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText py-3">
                    99999 TK
                  </td>
                  <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText py-3">
                    99999 TK
                  </td>
                  <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText py-3">
                    99999 TK
                  </td>
                  <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText py-3">
                    99999 TK
                  </td>
                  <td class="leading-[20px] text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText py-3">
                    99999 TK
                  </td>
                </tr>

                <tr class="border-b border-[#EDEDED]">
                  <td class="text-primaryText border-r border-[#DBDBDB] text-center leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] py-3">
                    Mimzal Paribahan
                  </td>
    
                  <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText py-3">
                    lI6dFWyA
                  </td>
                  <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText py-3">
                    9
                  </td>
                  <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText py-3">
                    99999 TK
                  </td>
                  <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText py-3">
                    9999
                  </td>
                  <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText py-3">
                    99999 TK
                  </td>
                  <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText py-3">
                    99999 TK
                  </td>
                  <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText py-3">
                    99999 TK
                  </td>
                  <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText py-3">
                    99999 TK
                  </td>
                  <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText py-3">
                    99999 TK
                  </td>
                  <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText py-3">
                    99999 TK
                  </td>
                  <td class="leading-[20px] text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText py-3">
                    99999 TK
                  </td>
                </tr>

                <tr class="border-b border-[#EDEDED]">
                  <td class="text-primaryText border-r border-[#DBDBDB] text-center leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] py-3">
                    Mimzal Paribahan
                  </td>
    
                  <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText py-3">
                    lI6dFWyA
                  </td>
                  <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText py-3">
                    9
                  </td>
                  <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText py-3">
                    99999 TK
                  </td>
                  <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText py-3">
                    9999
                  </td>
                  <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText py-3">
                    99999 TK
                  </td>
                  <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText py-3">
                    99999 TK
                  </td>
                  <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText py-3">
                    99999 TK
                  </td>
                  <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText py-3">
                    99999 TK
                  </td>
                  <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText py-3">
                    99999 TK
                  </td>
                  <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText py-3">
                    99999 TK
                  </td>
                  <td class="leading-[20px] text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText py-3">
                    99999 TK
                  </td>
                </tr>

                <tr class="border-b border-[#EDEDED]">
                  <td class="text-primaryText border-r border-[#DBDBDB] text-center leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] py-3">
                    Mimzal Paribahan
                  </td>
    
                  <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText py-3">
                    lI6dFWyA
                  </td>
                  <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText py-3">
                    9
                  </td>
                  <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText py-3">
                    99999 TK
                  </td>
                  <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText py-3">
                    9999
                  </td>
                  <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText py-3">
                    99999 TK
                  </td>
                  <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText py-3">
                    99999 TK
                  </td>
                  <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText py-3">
                    99999 TK
                  </td>
                  <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText py-3">
                    99999 TK
                  </td>
                  <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText py-3">
                    99999 TK
                  </td>
                  <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText py-3">
                    99999 TK
                  </td>
                  <td class="leading-[20px] text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText py-3">
                    99999 TK
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
  content:'';
  -webkit-appearance: none;
  background-color: transparent;
  border: 2px solid #151414;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05), inset 0px -15px 10px -12px rgba(0, 0, 0, 0.05);
  padding: 8px;
  display: inline-block;
  position: relative;
  vertical-align: middle;
  cursor: pointer;
  margin-right: 11px;
  border-radius: 4px;
}

.form-group input:checked + label:before{
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
  border:2px solid white;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
  /*background-color: white;*/
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
    