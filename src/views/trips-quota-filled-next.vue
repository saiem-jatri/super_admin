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
                  Create Trip</p>
                <div class="flex justify-center items-center gap-x-[6px] mr-2">
                  <p class="text-secondaryText leading-[12px] text-[8px] xl:leading-[16px] xl:text-[12px] font-[400]">
                    Trips</p>
                  <img alt="" class="w-1 h-2" src="../assets/svg/bgBack.svg">
                  <p class="text-secondaryText leading-[12px] text-[8px] xl:leading-[16px] xl:text-[12px] font-[400]">Desh
                    Travels</p>
                  <img alt="" class="w-1 h-2" src="../assets/svg/bgBack.svg">
                  <p class="text-secondaryText leading-[12px] text-[8px] xl:leading-[16px] xl:text-[12px] font-[400]">Add
                    trip</p>
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

      <!--        card-->
      <div class="bg-white rounded-[6px]">
            <div class="p-4">
              <div class="flex items-center gap-x-[6px] mr-2">
                <p class="text-secondaryText leading-[12px] text-[8px] xl:leading-[16px] xl:text-[12px] font-[400]">Trip
                  Information</p>
                <img alt="" class="w-1 h-2" src="../assets/svg/bgBack.svg">
                <p class="text-secondaryText leading-[12px] text-[8px] xl:leading-[16px] xl:text-[12px] font-[400]">
                  Boarding & Dropping</p>
                <img alt="" class="w-1 h-2" src="../assets/svg/bgBack.svg">
                <p class="text-secondaryText leading-[12px] text-[8px] xl:leading-[16px] xl:text-[12px] font-[400]">Seat &
                  Fare</p>
                <img alt="" class="w-1 h-2" src="../assets/svg/bgBack.svg">
                <p class="text-secondaryText leading-[12px] text-[8px] xl:leading-[16px] xl:text-[12px] font-[400]">
                  Permissions & Commissions</p>
                <img alt="" class="w-1 h-2" src="../assets/svg/bgBack.svg">
                <p class="text-secondaryText leading-[12px] text-[8px] xl:leading-[16px] xl:text-[12px] font-[400]">Assign
                  Counterman & Agent</p>
                <img alt="" class="w-1 h-2" src="../assets/svg/bgBack.svg">
                <p class="text-primaryText leading-[12px] text-[8px] xl:leading-[16px] xl:text-[12px] font-[600]">Assign
                  Qouta</p>
                <img alt="" class="w-1 h-2" src="../assets/svg/bgBack.svg">
                <p class="text-secondaryText leading-[12px] text-[8px] xl:leading-[16px] xl:text-[12px] font-[400]">Trip
                  Facilities & Policies</p>
                <img alt="" class="w-1 h-2" src="../assets/svg/bgBack.svg">
                <p class="text-secondaryText leading-[12px] text-[8px] xl:leading-[16px] xl:text-[12px] font-[400]">
                  Preview</p>
              </div>
              <div class="flex justify-between items-center">
                <p class="text-corporateSecondaryBlue leading-[20px] xl:leading-[24px] text-[14px] xl:text-[16px] font-[600] mt-2">
                  ASSIGN QOUTA</p>
                <p class="flex gap-x-[10px]">
                  <img alt="" src="../assets/svg/back_arrow.svg">
                  <a class="leading-[12px] xl:leading-[16px] text-[10px] xl:text-[12px] border-b-2 border-primaryText block text-primaryText font-[600]"
                     href="#">Prev
                    .step</a>
                </p>
              </div>
            </div>
          </div>
          <div class="bg-white rounded-[10px] mt-[12px] xl:mt-[16px]">
            <div class="p-4">
              <p class="text-corporateSecondaryBlue leading-[20px] xl:leading-[24px] text-[14px] xl:text-[16px] font-[600]">
                ASSIGN
                QOUTA</p>
              <p class="text-primaryText leading-[20px] xl:leading-[24px] text-[14px] xl:text-[16px] font-[600] mt-3 xl:mt-4">
                Jatri</p>
              <div class="flex justify-center items-center w-1/4 mt-[10px]">
                <button class="tripPermissionBtnleftWithbg">Yes</button>
                <button class="tripPermissionBtnright">No</button>
              </div>
              <div class="mt-5">
                <div class="border border-[#DBDBDB] rounded-[6px] flex">
                  <div class="w-[20%] border-r border-corporateBorder">
                    <p class="p-[9px] leading-[12px] xl:leading-[16px] text-[10px] xl:text-[12px] font-[500] text-[#676769]">COUNTER
                      LIST</p>
                    <hr class="border-t border-corporateBorder">
                    <div class="flex flex-col divide-y divide-dashed">
                      <a class="p-[8px] xl:p-[10px] text-corporateSecondaryBlue leading-[20px] xl:leading-[24px] text-[14px] xl:text-[16px]"
                         href="#">
                        Counter 1</a>
                      <a class="counterDesign" href="#">Counter 2</a>
                      <a class="counterDesign" href="#">Counter 3</a>
                      <a class="counterDesign" href="#">Counter 4</a>
                      <a class="counterDesign" href="#">Counter 5</a>
                      <a class="counterDesign" href="#">Counter 6</a>
                      <a class="counterDesign" href="#">Counter 7</a>
                      <a class="counterDesign" href="#">Counter 8</a>
                      <hr class="border-t border-corporateBorder">
                    </div>
                  </div>
                  <div class="w-[45%] p-[20px]  border-r border-corporateBorder">
                    <p class="leading-[20px] xl:leading-[24px] text-[14px] xl:text-[16px] font-[600]">SELECTED
                      SEATS</p>
  
                      <div class="flex gap-x-[23px] mt-3 xl:mt-5">
                        <button class="quotaSeatwithBg">C1</button>
                        <button class="quotaSeatwithBg">C2</button>
                        <button class="quotaSeatwithBg">C3</button>
                        <button class="quotaSeatwithBg">C4</button>
                      </div>
                  </div>
                  <div class="w-[35%]">
                    <p class="px-[16px] py-[9px] leading-[12px] xl:leading-[16px] text-[10px] xl:text-[12px] font-[500] text-[#676769]">
                      RELEASE TIME</p>
                    <div class="flex justify-between items-center px-[16px] py-[9px] ">
                      <label class="leading-[16px] xl:leading-[24px] text-[12px] xl:text-[16px] min-w-[123px]" for="#">Counter
                        name 1:</label>
                      <input class="border border-corporateBorder rounded-[4px] px-2 py-[6px] focus:outline-none"
                             placeholder="Enter time"
                             type="text">
                    </div>
  
                    <hr class="border-t border-corporateBorder mt-[8px]">
                    <div class="p-[24px]">
                      <div class="flex gap-x-[26px] justify-around">
                        <button class="quotaSeatLocked"><img class="m-auto" src="../assets/svg/lock.svg" alt=""></button>
                        <button class="quotaSeatLocked"><img class="m-auto" src="../assets/svg/lock.svg" alt=""></button>
                        <button class="quotaSeat cursor-default border-none">&nbsp</button>
                        <button class="quotaSeatLocked"><img class="m-auto" src="../assets/svg/lock.svg" alt=""></button>
                        <button class="quotaSeatLocked"><img class="m-auto" src="../assets/svg/lock.svg" alt=""></button>
                      </div>
                      <div class="flex gap-x-[26px] justify-around mt-2 xl:mt-3">
                        <button class="quotaSeatLocked"><img class="m-auto" src="../assets/svg/lock.svg" alt=""></button>
                        <button class="quotaSeatLocked"><img class="m-auto" src="../assets/svg/lock.svg" alt=""></button>
                        <button class="quotaSeat cursor-default border-none">&nbsp</button>
                        <button class="quotaSeat">B3</button>
                        <button class="quotaSeat">B4</button>
                      </div>
                      <div class="flex gap-x-[26px] justify-around mt-2 xl:mt-3">
                        <button class="quotaSeatwithBg">C1</button>
                        <button class="quotaSeatwithBg">C2</button>
                        <button class="quotaSeat cursor-default border-none">&nbsp</button>
                        <button class="quotaSeatwithBg">C3</button>
                        <button class="quotaSeatwithBg">C4</button>
                      </div>
                      <div class="flex gap-x-[26px] justify-around mt-2 xl:mt-3">
                        <button class="quotaSeat">D1</button>
                        <button class="quotaSeat">D2</button>
                        <button class="quotaSeat cursor-default border-none">&nbsp</button>
                        <button class="quotaSeat">D3</button>
                        <button class="quotaSeat">D4</button>
                      </div>
                      <div class="flex gap-x-[26px] justify-around mt-2 xl:mt-3">
                        <button class="quotaSeat">E1</button>
                        <button class="quotaSeat">E2</button>
                        <button class="quotaSeat cursor-default border-none">&nbsp</button>
                        <button class="quotaSeat">E3</button>
                        <button class="quotaSeat">E4</button>
                      </div>
                      <div class="flex gap-x-[26px] justify-around mt-2 xl:mt-3">
                        <button class="quotaSeat">F1</button>
                        <button class="quotaSeat">F2</button>
                        <button class="quotaSeat cursor-default border-none">&nbsp</button>
                        <button class="quotaSeat">F3</button>
                        <button class="quotaSeat">F4</button>
                      </div>
                      <div class="flex gap-x-[26px] justify-around mt-2 xl:mt-3">
                        <button class="quotaSeat">G1</button>
                        <button class="quotaSeat">G2</button>
                        <button class="quotaSeat cursor-default border-none">&nbsp</button>
                        <button class="quotaSeat">G3</button>
                        <button class="quotaSeat">G4</button>
                      </div>
                      <div class="flex gap-x-[26px] justify-around mt-2 xl:mt-3">
                        <button class="quotaSeat">H1</button>
                        <button class="quotaSeat">H2</button>
                        <button class="quotaSeat cursor-default border-none">&nbsp</button>
                        <button class="quotaSeat">H3</button>
                        <button class="quotaSeat">H4</button>
                      </div>
                      <div class="flex gap-x-[26px] justify-around mt-2 xl:mt-3">
                        <button class="quotaSeat">I1</button>
                        <button class="quotaSeat">I2</button>
                        <button class="quotaSeat cursor-default border-none">&nbsp</button>
                        <button class="quotaSeat">I3</button>
                        <button class="quotaSeat">I4</button>
                      </div>
                    </div>
  
                  </div>
                </div>
              </div>
            </div>

            <div class="px-4 pb-4">
            <p class="text-corporateSecondaryBlue leading-[20px] xl:leading-[24px] text-[14px] xl:text-[16px] font-[600]">
                ASSIGNED QOUTA SEAT PREVIEW</p>
            <!-- table start -->
            <div class="rounded-[6px] border border-[#EDEDED] mt-4 overflow-hidden">
              <table class="min-w-full">
                <thead>
                  <tr>
                    <th class="border border-t-0 first:border-l-0 last:border-r-0 border-[#EDEDED]" scope="col"></th>
                    <th class="border border-t-0 first:border-l-0 last:border-r-0 border-[#EDEDED] text-4 leading-5 text-[#676769] text-left font-[400] p-[10px]"
                        scope="col">
                      Selected seats
                    </th>
                    <th class="border border-t-0 first:border-l-0 last:border-r-0 border-[#EDEDED] text-4 leading-5 text-[#676769] text-left font-[400] p-[10px]"
                        scope="col"> Release time
                    </th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td class="border border-b-0 first:border-l-0 last:border-r-0 border-[#EDEDED] text-4 leading-5 text-left p-[10px]">Jatri</td>
                    <td class="border border-b-0 first:border-l-0 last:border-r-0 border-[#EDEDED] text-4 leading-5 text-left p-[10px]">[C1], [C2], [C3], [C4]</td>
                    <td class="border border-b-0 first:border-l-0 last:border-r-0 border-[#EDEDED] text-4 leading-5 text-left p-[10px]">08:30 PM</td>
                  </tr>
                  <tr>
                    <td class="border border-b-0 first:border-l-0 last:border-r-0 border-[#EDEDED] text-4 leading-5 text-left p-[10px]">Counter 1</td>
                    <td class="border border-b-0 first:border-l-0 last:border-r-0 border-[#EDEDED] text-4 leading-5 text-left p-[10px]">[A1], [A2], [A3], [A4]</td>
                    <td class="border border-b-0 first:border-l-0 last:border-r-0 border-[#EDEDED] text-4 leading-5 text-left p-[10px]">08:30 PM</td>
                  </tr>
                  <tr>
                    <td class="border border-b-0 first:border-l-0 last:border-r-0 border-[#EDEDED] text-4 leading-5 text-left p-[10px]">Counter 2</td>
                    <td class="border border-b-0 first:border-l-0 last:border-r-0 border-[#EDEDED] text-4 leading-5 text-left p-[10px]">[B1], [B2]</td>
                    <td class="border border-b-0 first:border-l-0 last:border-r-0 border-[#EDEDED] text-4 leading-5 text-left p-[10px]">08:30 PM</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          </div>

          <div class="bg-white rounded-[8px] mt-4">
          <div class="p-4">
            <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600] mb-[17px]">
              Update for an period</p>
            <!-- table start -->
            <div class="rounded-[10px] border border-[#EDEDED] mt-4 overflow-hidden">
              <table class="min-w-full">
                <thead>
                  <tr>
                    <th class="border-r border-[#EDEDED] text-4 leading-6 font-[400] p-[10px] uppercase w-1/2" scope="col"> DATE
                    </th>
                    <th class="text-4 leading-6 font-[400] p-[10px] uppercase flex items-center justify-center gap-x-5"
                        scope="col"><span>Check for all</span> <span><div class="form-group mb-0"><input
                        id="readAll" type="checkbox"><label
                        class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]"
                        for="readAll"></label>
                          </div></span>
                    </th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td class="border-r border-[#EDEDED] text-4 text-center leading-6 p-[16px] bg-[#F7F7F7]">18 July 2022</td>
                    <td class="text-4 text-center leading-6 p-[16px] bg-[#F7F7F7]">
                      <div class="form-group mb-0"><input id="read1" type="checkbox" checked><label
                          class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]"
                          for="read1"></label>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="border-r border-[#EDEDED] text-4 text-center leading-6 p-[16px]">18 July 2022</td>
                    <td class="text-4 text-center leading-6 p-[16px]">
                      <div class="form-group mb-0"><input id="read2" type="checkbox" checked><label
                          class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]"
                          for="read2"></label>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="border-r border-[#EDEDED] text-4 text-center leading-6 p-[16px] bg-[#F7F7F7]">18 July 2022</td>
                    <td class="text-4 text-center leading-6 p-[16px] bg-[#F7F7F7]">
                      <div class="form-group mb-0"><input id="read3" type="checkbox" checked><label
                          class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]"
                          for="read3"></label>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="border-r border-[#EDEDED] text-4 text-center leading-6 p-[16px]">18 July 2022</td>
                    <td class="text-4 text-center leading-6 p-[16px]">
                      <div class="form-group mb-0"><input id="read4" type="checkbox"><label
                          class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]"
                          for="read4"></label>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="border-r border-[#EDEDED] text-4 text-center leading-6 p-[16px] bg-[#F7F7F7]">18 July 2022</td>
                    <td class="text-4 text-center leading-6 p-[16px] bg-[#F7F7F7]">
                      <div class="form-group mb-0"><input id="read5" type="checkbox"><label
                          class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]"
                          for="read5"></label>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="border-r border-[#EDEDED] text-4 text-center leading-6 p-[16px]">18 July 2022</td>
                    <td class="text-4 text-center leading-6 p-[16px]">
                      <div class="form-group mb-0"><input id="read6" type="checkbox"><label
                          class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]"
                          for="read6"></label>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="border-r border-[#EDEDED] text-4 text-center leading-6 p-[16px] bg-[#F7F7F7]">18 July 2022</td>
                    <td class="text-4 text-center leading-6 p-[16px] bg-[#F7F7F7]">
                      <div class="form-group mb-0"><input id="read6" type="checkbox"><label
                          class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]"
                          for="read6"></label>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
          </div>
          </div>
          </div>

      <div class="flex justify-center items-center gap-x-4 my-5">
        <button class="bg-[#48A43F] flex gap-x-3 justify-center items-center text-white rounded-full px-5 py-3 leading-[12px] text-[10px] xl:leading-[16px] xl:text-[12px]" data-v-0d08c475="">
          <span data-v-0d08c475=""><img src="/src/assets/svg/save.svg" alt="" data-v-0d08c475=""></span> Save changes
        </button>
        <router-link to="/tripsFacilities" class="nextStepButton flex items-center gap-[10px]">
           Next step<span><img src="../assets/svg/right-white-arrow.svg" class="h-[9.33px] w-[9.33px]" alt=""></span>
        </router-link>
      </div>


      <div class="bg-white rounded-[10px]">
      <div class="p-4 flex justify-between items-center">
        <div>
          <p class="text-primaryText leading-[28px] text-[20px] xl:leading-[32px] xl:text-[24px] font-[600] mb-[8px]">Cancel trip</p>
          <p class="text-primaryText ">By clicking “Cancel trip”, it will cancel the trip and the tickets in the trip. This action could not be undone.</p>
        </div>
        <div>
          <button @click="openModal" class="border border-corporateBorder font-semibold items-center text-corporateError rounded-full px-6 py-3 leading-[12px] text-[10px] xl:leading-[16px] xl:text-[12px]">
          Cancel trip
          </button>
          <Dialog header="Cancel Trip" v-model:visible="displayModal" :breakpoints="{'960px': '75vw', '640px': '90vw'}" :style="{width: '360px'}" :modal="true">
            <p class="text-[14px] leading-5 text-[#4D4D4F] text-center">By confirming, the trip will be cancelled and all its ticket. You will not be able to perform any action in this trip further. Are you sure you want to cancel the trip?</p>
           <div class="mt-[30px] flex gap-x-8 justify-end items-center">
              <button @click="closeModal" icon="pi pi-times" class="p-button-text text-[12px] leading-4 font-[500] text-[#1E88E5]"> No, thanks</button>
              <button @click="closeModal" icon="pi pi-check" autofocus class="bg-[#F04935] px-6 py-3 text-white text-[12px] leading-4 font-[500] rounded-[100px]">Cancel trip</button>
          </div>
        </Dialog>
        </div>
      </div>
    </div>

    </div>
</template>

<style scoped>
    .p-dropdown .p-dropdown-label.p-placeholder {
    color: black;
    font-size: 14px;
    }
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
    .p-buttonset .p-button {
    margin: 0;
    width: 183px;
    height: 38px;
    }
    
    .p-button-label{
    font-weight: 400;
    }
    .p-selectbutton .p-button.p-highlight{
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
    
    .blueSeatButton {
    background-color: #1E88E5;
    }
    .emptySeat {
    opacity: 0;
    cursor: auto;
    }
    </style>
    
    <script>
    import ashDropdown from "../components/AshDropdown.vue";
    export default {
      components: {
        ashDropdown
      },
      data() {
        return {
          selectedCity: null,
          displayModal: false,
          seatSelectStatus: false,
          cities: [
            {name: 'Own', code: 'NY'},
            {name: 'Third Party', code: 'RM'},
            // {name: 'London', code: 'LDN'},
            // {name: 'Istanbul', code: 'IST'},
            // {name: 'Paris', code: 'PRS'}
          ]
        }
      },
      methods: {
            openModal() {
                this.displayModal = true;
            },
            closeModal() {
                this.displayModal = false;
            },
            extraSeat() {
              this.seatSelectStatus = !this.seatSelectStatus
          }
        }
    }  
    </script>
    
    
    