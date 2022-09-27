<template>
      <!-- Top nav bar start-->
      <div class="bg-white h-[72px] sticky top-0 border-b border-[#DBDBDB] z-10 px-[32px]">
        <div class="flex justify-between">
          <div class="flex justify-center items-center gap-x-[32px]">

            <button class="flex justify-center items-center gap-x-[10px]">
              <img src="../assets/svg/Back.svg" class="w-[12px] h-[12px]" alt="">
              <p class="text-primaryText leading-[12px] text-[10px] xl:leading-[16px] xl:text-[12px] font-[500]">Back</p>
            </button>
            <div class="flex flex-col gap-y-[4px]">
              <p class="lg:leading-[16px] xl:leading-[28px] lg:text-[14px] xl:text-[20px] font-[600] text-primaryText">Create Routes</p>
              <div class="flex justify-center items-center gap-x-[6px] mr-4">
                <p class="text-secondaryText leading-[12px] text-[8px] xl:leading-[16px] xl:text-[12px] font-[400]">Routes</p>
                <img src="../assets/svg/bgBack.svg" alt="" class="w-1 h-2">
                <p class="text-secondaryText leading-[12px] text-[8px] xl:leading-[16px] xl:text-[12px] font-[400]">Add routes</p>
              </div>
            </div>
          </div>
          <div class="flex gap-x-[24px] p-4 w-1/2 justify-end items-center pr-2 ">
            <!--            <input type="text" class="w-[270px] h-[40px] border border-[#DBDBDB] placeholder:text-[#4D4D4F] placeholder:text-[14px] leading-[20px] rounded-[4px] pl-8 focus:outline-none" placeholder="PNR or mobile number">-->
            <!--            <img src="../assets/svg/search.svg" class="h-5 w-5 absolute left-[242px]" alt="">-->
            <div class="w-[200px] h-[30px] xl:w-[270px] xl:h-[40px] border border-[#DBDBDB] flex justify-center items-center leading-[20px] rounded-[4px] pl-[9px] overflow-hidden" >
              <img src="../assets/svg/search.svg" class="h-2 w-2 xl:h-5 xl:w-5" alt="">
              <input type="text" class="outline-none pl-32 xl:pl-2 placeholder:text-[#4D4D4F] placeholder:text-[8px] placeholder:leading-[16px] xl:placeholder:text-[14px] xl:placeholder:leading-[20px]" placeholder="PNR or mobile number">
            </div>
            <div class="flex justify-center items-center gap-x-1">
              <img src="../assets/person/person1.png" alt="" class="h-[30px]  w-[30px] xl:h-[40px] xl:w-[40px] rounded-full">
              <p class="text-[#151414] leading-[16px] text-[10px] xl:leading-[24px] xl:text-[16px] font-[500]">Mostafa Mamun Emon</p>
              <img src="../assets/person/downArrow.svg" alt="" class="w-[12px] h-[6px]">
            </div>
          </div>
        </div>
      </div>
      <!-- top nav bar end -->
      <!-- body start-->
      <div class="px-[30px] py-[24px]">

        <!--        card-->
        <div class="bg-white rounded-[10px]">
          <div class="p-4">
              <div class="flex justify-between  divide-x divide-corporateBorder">
                <div class="w-1/2 pr-[60px] xl:pr-[125px]">
                  <div class="flex justify-between items-center">
                    <label for="#" class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] text-primaryText font-[400]">Select operator:</label>
                    <div class="w-[200px] xl:w-[270px]">
                      <Dropdown class="w-full py-[4px] mt-[10px] placeholder:text-primaryText" v-model="selectedCity" :options="cities" optionLabel="name" placeholder="Select operator" />
                    </div>
                  </div>
                  <div class="flex justify-between items-center mt-[12px] xl:mt-[16px]">
                    <label for="#" class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] text-primaryText font-[400]">Select origin city:</label>
                    <div class="w-[200px] xl:w-[270px] mb-2">
                      <Dropdown class="w-full py-[4px] mt-[10px] placeholder:text-primaryText" v-model="selectedCity" :options="cities" optionLabel="name" placeholder="Select origin city" />
                    </div>
                  </div>
                  <button class="w-full border border-dashed border-[#1E88E5] flex justify-center items-center bg-[#EFF7FD] rounded-[4px] mt-[12px] xl:mt-[16px]">
                    <div class="flex justify-center items-center gap-x-[11px] py-[8px]">
                      <img src="../assets/svg/createPlus.svg" class="w-[10px] h-[10px]" alt="">
                      <p class="text-primaryText font-[600] leading-[16px] xl:leading-[20px] text-[12px] xl:text-[14px]">Add via city</p>
                    </div>
                  </button>
                  <div class="flex justify-between items-center mt-[12px] xl:mt-[8px]">
                    <label for="#" class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] text-primaryText font-[400]">Select destination city:</label>
                    <div class="w-[200px] xl:w-[270px] mb-2">
                      <Dropdown class="w-full py-[4px] mt-[10px] placeholder:text-primaryText" v-model="selectedCity" :options="cities" optionLabel="name" placeholder="Select destination city" />
                    </div>
                  </div>
                  <div class="mt-[12px] xl:mt-[16px] bg-[#F7F7F7] rounded-[4px]">
                      <div class="py-[2px] xl:py-[6px] pl-[12px] xl:pl-[16px] flex gap-x-[10px] items-center">
                          <p class="text-primaryText leading-[20px] xl:leading-[24px] text-[14px] xl:text-[16px] font-[400] ">Route direction:</p>
                        <div class="flex justify-evenly items-center w-[50%]">
                          <div class="form-group mt-2">
                            <input type="checkbox" id="read">
                            <label for="read" class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]">up</label>
                          </div>
                          <div class="form-group mt-2">
                            <input type="checkbox" id="down">
                            <label for="down" class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]">down</label>
                          </div>
                        </div>
                      </div>
                  </div>
                </div>
                <div class="w-1/2">
                  <div class=" pl-4">
                    <p class="leading-[24px] xl:leading-[28px] text-[18px] xl:text-[20px] text-primaryText font-[600]">Possible best routes</p>
                    <hr class="mt-[6px] xl:mt-[8px] border-t border-[#EDEDED]">
                    <div class="h-[200px] w-full flex justify-center items-center">
                        <div class="flex flex-col gap-y-[10px] justify-center items-center">
                          <img src="../assets/svg/exclamatory.svg" class="h-5 w-5" alt="">
                          <p class="text-corporateSecondaryBlack leading-[20px] xl:leading-[24px] text-[14px] xl:text-[16px] text-center">Best possible routes will appeared <br>once you select via city.</p>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
          </div>
          <hr class="mt-[12px] xl:mt-[16px] border-t border-corporateBorder">
          <div class="px-[16px] py-[20px] w-full flex justify-between items-center">
            <div class="flex gap-x-[16px] items-center">
              <p class="text-primaryText font-[600] leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] ">Status</p>
              <div class="flex justify-center items-center">
                <button class="viaCityActive">Active</button>
                <button class="viaCityInActive">Inactive</button>
              </div>
            </div>
            <button class="createBtn">Create routes</button>
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
  /*padding: 10px;*/
  display: inline-block;
  position: relative;
  vertical-align: middle;
  cursor: pointer;
  margin-right: 5px;
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
  top: 0px;
  left: 9px;
  width: 6px;
  height: 14px;
  border:2px solid white;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
  /*background-color: white;*/
}
</style>
