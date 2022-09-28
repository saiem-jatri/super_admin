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
                Company</p>
              <div class="flex justify-center items-center gap-x-[6px]">
                <p class="text-secondaryText leading-[12px] text-[8px] xl:leading-[16px] xl:text-[12px] font-[400]">Desh
                  Travels Limited</p>
                <img alt="" class="w-1 h-2" src="../assets/svg/bgBack.svg">
                <p class="text-secondaryText leading-[12px] text-[8px] xl:leading-[16px] xl:text-[12px] font-[400]">
                  Manage</p>
                <img alt="" class="w-1 h-2" src="../assets/svg/bgBack.svg">
                <p class="text-secondaryText leading-[12px] text-[8px] xl:leading-[16px] xl:text-[12px] font-[400]">Desh
                  Travels Limited</p>
                <img alt="" class="w-1 h-2" src="../assets/svg/bgBack.svg">
                <p class="text-secondaryText leading-[12px] text-[8px] xl:leading-[16px] xl:text-[12px] font-[400]">
                  Route</p>
                <img alt="" class="w-1 h-2" src="../assets/svg/bgBack.svg">
                <p class="text-secondaryText leading-[12px] text-[8px] xl:leading-[16px] xl:text-[12px] font-[400]">Add
                  route</p>
              </div>
            </div>
          </div>
          <div class="flex gap-x-[24px] p-4 w-1/2 justify-end items-center pr-2 ">
            <!--            <input type="text" class="w-[270px] h-[40px] border border-[#DBDBDB] placeholder:text-[#4D4D4F] placeholder:text-[14px] leading-[20px] rounded-[4px] pl-8 focus:outline-none" placeholder="PNR or mobile number">-->
            <!--            <img src="../assets/svg/search.svg" class="h-5 w-5 absolute left-[242px]" alt="">-->
            <div
                class="w-[200px] h-[30px] xl:w-[270px] xl:h-[40px] border border-[#DBDBDB] flex justify-center items-center leading-[20px] rounded-[4px] pl-[9px] overflow-hidden">
              <img alt="" class="h-2 w-2 xl:h-5 xl:w-5" src="../assets/svg/search.svg">
              <input class="outline-none pl-32 xl:pl-2 placeholder:text-[#4D4D4F] placeholder:text-[8px] placeholder:leading-[16px] xl:placeholder:text-[14px] xl:placeholder:leading-[20px]"
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
        <div class="mt-[16px] bg-white rounded-[10px]">
          <div class="p-4">
            <div class="flex justify-between  divide-x divide-corporateBorder">
              <div class="w-1/2 pr-[60px] xl:pr-[125px]">
                <div class="flex justify-between items-center">
                  <label class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] text-primaryText font-[400]"
                         for="#">Select
                    origin city:</label>
                  <div class="w-[200px] xl:w-[270px]">
                    <Dropdown v-model="selectedCity" :options="cities"
                              class="w-full p-[1px] mt-[10px] placeholder:text-primaryText" optionLabel="name" placeholder="Owner"/>
                  </div>
                </div>
                <div class="flex justify-between items-center mt-[12px] xl:mt-[16px]">
                  <label class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] text-primaryText font-[400]"
                         for="#">Add
                    via city (optional):</label>
                  <div class="w-[200px] xl:w-[270px] mb-2">
                    <Dropdown v-model="selectedCity" :options="cities"
                              class="w-full p-[1px] mt-[10px] placeholder:text-primaryText" optionLabel="name" placeholder="Owner"/>
                  </div>
                </div>
                <button
                    class="w-full border border-dashed border-corporateSecondaryBlue flex justify-center items-center bg-[#EFF7FD] rounded-[4px] mt-[12px] xl:mt-[16px]">
                  <div class="flex justify-center items-center gap-x-[11px] py-[8px]">
                    <img alt="" class="w-[10px] h-[10px]" src="../assets/svg/createPlus.svg">
                    <p class="text-primaryText font-[600] leading-[16px] xl:leading-[20px] text-[12px] xl:text-[14px]">
                      Add via city</p>
                  </div>
                </button>
                <div class="flex justify-between items-center mt-[12px] xl:mt-[8px]">
                  <label class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] text-primaryText font-[400]"
                         for="#">Select
                    destination city:</label>
                  <div class="w-[200px] xl:w-[270px] mb-2">
                    <Dropdown v-model="selectedCity" :options="cities"
                              class="w-full p-[1px] mt-[10px] placeholder:text-primaryText" optionLabel="name" placeholder="Rangpur"/>
                  </div>
                </div>
                <div class="mt-[12px] xl:mt-[16px] bg-[#F7F7F7] rounded-[4px]">
                  <div class="py-[2px] xl:py-[6px] pl-[12px] xl:pl-[16px] flex gap-x-[10px] items-center">
                    <p class="text-primaryText leading-[20px] xl:leading-[24px] text-[14px] xl:text-[16px] font-[400] ">
                      Route direction:</p>
                    <div class="flex justify-evenly items-center w-[50%]">
                      <div class="form-group mt-2">
                        <input id="read" type="checkbox">
                        <label class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]"
                               for="read">up</label>
                      </div>
                      <div class="form-group mt-2">
                        <input id="down" type="checkbox">
                        <label class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]"
                               for="down">down</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="w-1/2">
                <div class=" pl-4">
                  <p class="leading-[24px] xl:leading-[28px] text-[18px] xl:text-[20px] text-primaryText font-[600]">
                    Possible best routes</p>
                  <hr class="mt-[6px] xl:mt-[8px] border-t border-[#EDEDED]">
                  <div class="h-[200px] w-full flex justify-center items-center">
                    <div class="flex flex-col gap-y-[10px] justify-center items-center">
                      <img alt="" class="h-5 w-5" src="../assets/svg/exclamatory.svg">
                      <p class="text-corporateSecondaryBlack leading-[20px] xl:leading-[24px] text-[14px] xl:text-[16px] text-center">
                        Best possible routes will appeared <br>once you select via city.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr class="mt-[12px] xl:mt-[16px] border-t border-corporateBorder">
          <div class="px-[16px] py-[20px] w-full flex justify-between items-center">
            <div class="flex gap-x-[16px] items-center">
              <p class="text-primaryText font-[600] leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] ">
                Status</p>
              <div class="flex justify-center items-center">
                <button
                    class="bg-[#48A43F] w-[90px] xl:w-[110px] text-white leading-[16px] xl:leading-[20px] text-[12px] xl:text-[14px] flex justify-center items-center font-[400] h-[40px] rounded-l-[4px]">
                  Active
                </button>
                <button
                    class="bg-[#F7F7F7] w-[90px] xl:w-[110px] text-primaryText leading-[16px] xl:leading-[20px] text-[12px] xl:text-[14px] border border-[#DBDBDB] flex justify-center items-center font-[400] h-[40px] rounded-r-[4px]">
                  Inactive
                </button>
              </div>
            </div>
            <router-link to="/viaCity" class="corporateButton">Create routes</router-link>
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
  /*padding: 10px;*/
  display: inline-block;
  position: relative;
  vertical-align: middle;
  cursor: pointer;
  margin-right: 5px;
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
  top: 0px;
  left: 9px;
  width: 6px;
  height: 14px;
  border: 2px solid white;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
  /*background-color: white;*/
}
</style>
