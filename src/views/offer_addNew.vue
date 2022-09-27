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
                Add Offer</p>
              <div class="flex justify-center items-center gap-x-[6px]">
                <p class="text-secondaryText leading-[12px] text-[8px] xl:leading-[16px] xl:text-[12px] font-[400]">
                  Company</p>
                <img alt="" class="w-1 h-2" src="../assets/svg/bgBack.svg">
                <p class="text-secondaryText leading-[12px] text-[8px] xl:leading-[16px] xl:text-[12px] font-[400]">
                  Offers & Promotion</p>
                <img alt="" class="w-1 h-2" src="../assets/svg/bgBack.svg">
                <p class="text-secondaryText leading-[12px] text-[8px] xl:leading-[16px] xl:text-[12px] font-[400]">
                  Offers</p>
                <img alt="" class="w-1 h-2" src="../assets/svg/bgBack.svg">
                <p class="text-secondaryText leading-[12px] text-[8px] xl:leading-[16px] xl:text-[12px] font-[400]">
                  Add offer</p>
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

        <!--        card-->
        <div class="mt-[16px] bg-white rounded-[10px]">
          <div class="p-4">
            <div class="flex justify-center items-center gap-x-[10px] xl:gap-x-[16px]">
              <div class="w-1/4">
                <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">
                  Bus operator</p>
                <Dropdown v-model="selectedCity" :opti6ns="cities" class="w-full py-[4px] mt-[10px]" optionLabel="name"
                          placeholder="Desh Travels"/>
              </div>
              <div class="w-1/4">
                <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">
                  Discount amount</p>
                <input class="createNormalInput" placeholder="Enter amount" type="text">
              </div>
              <div class="w-1/4">
                <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">Jatri
                  discount</p>
                <input class="createNormalInput" placeholder="Enter amount" type="text">
              </div>
              <div class="w-1/4">
                <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">
                  Operator discount</p>
                <input class="createNormalInput" placeholder="Enter amount" type="text">
              </div>
            </div>
            <div class="flex justify-center items-center gap-x-[10px] xl:gap-x-[16px] mt-[12px] xl:mt-[16px]">
              <div class="w-1/4">
                <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">
                  Route</p>
                <Dropdown v-model="selectedCity" :opti6ns="cities" class="w-full py-[4px] mt-[10px]" optionLabel="name"
                          placeholder="Select counter city"/>
              </div>
              <div class="w-1/4">
                <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">
                  Start date</p>
                <div
                    class="w-full h-[40px] border border-[#DBDBDB] flex justify-between items-center mt-[10px] leading-[20px] rounded-[4px] px-[20px] xl:px-[8px] overflow-hidden">
                  <input
                      class="outline-none pl-2 placeholder:text-[#4D4D4F] placeholder:text-[14px] placeholder:leading-[20px]"
                      placeholder="Select date"
                      type="text">
                  <img alt="" class="h-5 w-5" src="../assets/svg/count2.svg">
                </div>
              </div>
              <div class="w-1/4">
                <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">
                  Expiration date</p>
                <div
                    class="w-full h-[40px] border border-[#DBDBDB] flex justify-between items-center mt-[10px] leading-[20px] rounded-[4px] px-[20px] xl:px-[8px] overflow-hidden">
                  <input
                      class="outline-none pl-2 placeholder:text-[#4D4D4F] placeholder:text-[14px] placeholder:leading-[20px]"
                      placeholder="Select date"
                      type="text">
                  <img alt="" class="h-5 w-5" src="../assets/svg/count2.svg">
                </div>
              </div>
              <div class="w-1/4">
                <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">
                  Service type</p>
                <Dropdown v-model="selectedCity" :opti6ns="cities" class="w-full py-[4px] mt-[10px]" optionLabel="name"
                          placeholder="Select service type"/>
              </div>
            </div>
            <div class="flex justify-start items-center gap-x-[10px] xl:gap-x-[16px] mt-[12px] xl:mt-[16px]">
              <div class="w-1/4">
                <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">Usage
                  limit for all</p>
                <input class="createNormalInput" placeholder="Enter amount" type="text">
              </div>
              <div class="w-1/4">
                <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">
                  Only first time usage</p>
                <Dropdown v-model="selectedCity" :opti6ns="cities" class="w-full py-[4px] mt-[10px]" optionLabel="name"
                          placeholder="Yes"/>
              </div>
              <div class="w-1/4">
                <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">Usage
                  limit per user</p>
                <input class="createNormalInput" placeholder="Enter amount" type="text">
              </div>
            </div>
          </div>
          <!--          offer access-->
          <div class="p-4">
            <div class="rounded-[4px] border border-corporateBorder px-4 py-4">
              <p class="leading-[20px] xl:leading-[24px] text-[14px] xl:text-[16px] text-primaryText font-[600]">Offer
                access</p>
              <div class="flex justify-start gap-x-[43px]">
                <div class="form-group mt-3 flex">
                  <input id="fare" type="checkbox">
                  <label
                      class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]"
                      for="fare">Jatri Web</label>
                </div>
                <div class="form-group mt-3 flex">
                  <input id="fare" type="checkbox">
                  <label
                      class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]"
                      for="fare">Jatri App</label>
                </div>
                <div class="form-group mt-3 flex">
                  <input id="fare" type="checkbox">
                  <label
                      class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]"
                      for="fare">Jatri CS</label>
                </div>
                <div class="form-group mt-3 flex">
                  <input id="fare" type="checkbox">
                  <label
                      class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]"
                      for="fare">Jatri API</label>
                </div>
                <div class="form-group mt-3 flex">
                  <input id="fare" type="checkbox">
                  <label
                      class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]"
                      for="fare">Route</label>
                </div>
                <div class="form-group mt-3 flex">
                  <input id="fare" type="checkbox">
                  <label
                      class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]"
                      for="fare">Third party counter</label>
                </div>
              </div>
            </div>
          </div>

          <div class="p-4">
            <div class="w-full">
              <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">Offer
                title</p>
              <input class="createNormalInput" placeholder="Enter offer title" type="text">
            </div>
          </div>
          <div class="p-4">
            <div class="w-full">
              <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">
                Description</p>
              <textarea id=""
                        class="w-full mt-[10px] border border-corporateBorder rounded-[4px] p-[8px] focus:outline-none placeholder:text-[#676769] placeholder:leading-[20px] placeholder:text-[14px]"
                        cols="10" name=""
                        placeholder="Enter offer description"
                        rows="5"></textarea>
            </div>
          </div>
          <div class="p-4">
            <div class="rounded-[4px] px-4">
              <hr class="border-t border-dashed border-corporateBorder mt-1">
              <div class="pt-[8px] pb-[8px]">
                <div class="flex divide-x divide-dashed divide-corporateBorder">
                  <div class="w-1/2">
                    <div class="py-[8px] pr-[24px]">
                      <p class="leading-[20px] xl:leading-[24px] text-[14px] xl:text-[16px] font-[600] text-primaryText">
                        Banner</p>
                      <div>
                        <input id="chooseFile" class="hidden" name="" type="file">
                        <label
                            class="w-full bg-[#EFF7FD] h-[40px] cursor-pointer border border-dashed border-corporateSecondaryBlue mt-[10px] rounded-[4px] flex justify-center items-center"
                            for="chooseFile">
                          <div class="flex gap-x-[8px]">
                            <img alt="" class="w-[18px] h-[15px]" src="../assets/svg/file.svg">
                            <p class="text-corporateSecondaryBlue leading-[20px] text-[14px] font-[400]">Upload
                              banner</p>
                            <p class="text-corporateSecondaryBlue leading-[20px] text-[14px] font-[400] border-b border-corporateSecondaryBlue">
                              Browse file</p>
                          </div>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div class="w-1/2">
                    <div class="py-2 pl-[16px]">
                      <p class="leading-[20px] xl:leading-[24px] text-[14px] xl:text-[16px] font-[600] text-primaryText">
                        File preview</p>
                      <div class="h-[358px] w-full flex justify-center items-center">
                        <div class="flex flex-col gap-y-[10px] justify-center items-center">
                          <img alt="" class="h-5 w-5" src="../assets/svg/exclamatory.svg">
                          <p class="text-corporateSecondaryBlack leading-[20px] xl:leading-[24px] text-[14px] xl:text-[16px] text-center">
                            File preview will be available <br> once you upload a file.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
          <hr class="border-t border-corporateBorder">
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
            <div class="flex gap-x-1 items-center">
              <button
                  class="flex justify-center items-center text-white leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[600] bg-corporate bg-opacity-30 rounded-full px-[20px] py-[11px] xl:px-[24px] xl:py-[13px]">
                Create promo
              </button>
            </div>
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
