<template>
  <!-- Top nav bar start-->
  <div class="bg-white h-[72px] sticky top-0 border-b border-[#DBDBDB] z-10">
    <div class="flex justify-between items-center">
      <div class="px-[30px] flex flex-col gap-y-[4px]">
        <p class="lg:leading-[16px] xl:leading-[28px] lg:text-[14px] xl:text-[20px] font-[600] text-primaryText">
          Online/Offline Access</p>
        <div class="flex justify-center items-center gap-x-[6px] mr-4">
          <p class="text-secondaryText leading-[12px] text-[8px] xl:leading-[16px] xl:text-[12px] font-[400]">
            Action in Bulk</p>
          <img alt="" class="w-1 h-2" src="../assets/svg/bgBack.svg">
          <p class="text-secondaryText leading-[12px] text-[8px] xl:leading-[16px] xl:text-[12px] font-[400]">
            Online/Offline Access</p>
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
            <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">
              From</p>
            <div
                class="w-full h-[40px] border border-[#DBDBDB] flex justify-between items-center mt-[10px] leading-[20px] rounded-[4px] px-[20px] xl:px-[8px] overflow-hidden">
              <input
                  class="outline-none placeholder:text-[#4D4D4F] placeholder:text-[14px] placeholder:leading-[20px]"
                  placeholder="Select date"
                  type="text">
              <img alt="" class="h-5 w-5" src="../assets/svg/count2.svg">
            </div>
          </div>
          <div class="w-1/4">
            <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">
              To</p>
            <div
                class="w-full h-[40px] border border-[#DBDBDB] flex justify-between items-center mt-[10px] leading-[20px] rounded-[4px] px-[20px] xl:px-[8px] overflow-hidden">
              <input
                  class="outline-none placeholder:text-[#4D4D4F] placeholder:text-[14px] placeholder:leading-[20px]"
                  placeholder="Select date"
                  type="text">
              <img alt="" class="h-5 w-5" src="../assets/svg/count2.svg">
            </div>
          </div>
          <div class="w-1/4">
            <p class="text-primaryText leading-[20px] text-[14px] xl:leading-[24px] xl:text-[16px] font-[600]">
              Permission type</p>
            <Dropdown
                v-model="selectedCity"
                :options="cities"
                class="w-full py-[4px] mt-[10px] placeholder:text-primaryText placeholder:leading-[16px] placeholder:text-[12px] xl:placeholder:leading-[20px] xl:placeholder:text-[14px]"
                optionLabel="name" placeholder="Select permission type"/>
          </div>
        </div>

      </div>

      <div class="flex justify-center pb-4">
        <button
            class="my-1 flex gap-x-[9px] justify-center items-center bg-corporate text-white leading-[14px] xl:leading-[16px] text-[11px] xl:text-[12px] font-[500] py-3 pl-[17px] pr-[24px] rounded-full"><span>
                <img alt="" class="w-[13px] xl:h-[13px]" src="../assets/svg/white_search.svg">
              </span>Search
        </button>
      </div>
    </div>
    <div class="mt-3 xl:mt-4 bg-white rounded-[10px]">
      <div class="px-4 pt-4">
        <p class="leading-[20px] xl:leading-[24px] text-[14px] xl:text-[16px] font-[600] text-primaryText">
          COUNTERMAN</p>
        <div class="mt-4 xl:mt-5 flex">
          <div class="w-[30%] flex flex-col mb-[8px]">
            <p class="leading-[20px] xl:leading-[24px] text-[14px] xl:text-[16px] font-[400] text-[#4D4D4F]">Counter 1</p>
            <div class="form-group flex justify-start mt-[8px]">
              <input id="booking" type="checkbox">
              <label
                  class="leading-[20px] xl:leading-[24px] text-[14px] xl:text-[16px] font-[400] text-[#4D4D4F]"
                  for="booking">Mark all</label>
            </div>
          </div>

          <div class="w-[70%] flex flex-col">
            <div class="flex gap-x-4 items-center">
              <div class="form-group flex justify-start w-[33.33%]">
                <input id="booking" type="checkbox">
                <label
                    class="leading-[20px] xl:leading-[24px] text-[14px] xl:text-[16px] font-[400] text-[#4D4D4F]"
                    for="booking">Fahim Ahmed</label>
              </div>
              <div class="form-group flex justify-start w-[33.33%]">
                <input id="booking" type="checkbox">
                <label
                    class="leading-[20px] xl:leading-[24px] text-[14px] xl:text-[16px] font-[400] text-[#4D4D4F]"
                    for="booking">Fahim Ahmed</label>
              </div>
              <div class="form-group flex justify-start w-[33.33%]">
                <input id="booking" type="checkbox">
                <label
                    class="leading-[20px] xl:leading-[24px] text-[14px] xl:text-[16px] font-[400] text-[#4D4D4F]"
                    for="booking">Fahim Ahmed</label>
              </div>
            </div>
            <hr class="border-t border-dashed border-corporateBorder">
            <div class="flex gap-x-4 items-center pt-4">
              <div class="form-group flex justify-start w-[33.33%]">
                <input id="booking" type="checkbox">
                <label
                    class="leading-[20px] xl:leading-[24px] text-[14px] xl:text-[16px] font-[400] text-[#4D4D4F]"
                    for="booking">Fahim Ahmed</label>
              </div>
              <div class="form-group flex justify-start w-[33.33%]">
                <input id="booking" type="checkbox">
                <label
                    class="leading-[20px] xl:leading-[24px] text-[14px] xl:text-[16px] font-[400] text-[#4D4D4F]"
                    for="booking">Fahim Ahmed</label>
              </div>
              <div class="form-group flex justify-start w-[33.33%]">
                <input id="booking" type="checkbox">
                <label
                    class="leading-[20px] xl:leading-[24px] text-[14px] xl:text-[16px] font-[400] text-[#4D4D4F]"
                    for="booking">Fahim Ahmed</label>
              </div>
            </div>
          </div>

        </div>
        <hr class="border-t border-[#DBDBDB]">
        <div class="flex mt-3 xl:mt-4">
          <div class="w-[30%] flex flex-col">
            <p class="leading-[20px] xl:leading-[24px] text-[14px] xl:text-[16px] font-[400] text-[#4D4D4F]">Counter 2</p>
            <div class="form-group flex justify-start mt-[8px]">
              <input id="booking" type="checkbox">
              <label
                  class="leading-[20px] xl:leading-[24px] text-[14px] xl:text-[16px] font-[400] text-[#4D4D4F]"
                  for="booking">Mark all</label>
            </div>
          </div>
          <div class="flex gap-x-4 items-center w-[70%]">
            <div class="form-group flex justify-start w-[33.33%]">
              <input id="booking" type="checkbox">
              <label
                  class="leading-[20px] xl:leading-[24px] text-[14px] xl:text-[16px] font-[400] text-[#4D4D4F]"
                  for="booking">Fahim Ahmed</label>
            </div>
            <div class="form-group flex justify-start w-[33.33%]">
              <input id="booking" type="checkbox">
              <label
                  class="leading-[20px] xl:leading-[24px] text-[14px] xl:text-[16px] font-[400] text-[#4D4D4F]"
                  for="booking">Fahim Ahmed</label>
            </div>
            <div class="form-group flex justify-start w-[33.33%]">
              <input id="booking" type="checkbox">
              <label
                  class="leading-[20px] xl:leading-[24px] text-[14px] xl:text-[16px] font-[400] text-[#4D4D4F]"
                  for="booking">Fahim Ahmed</label>
            </div>
          </div>
        </div>

        <hr class="border-t border-[#DBDBDB]">
        <div class="flex mt-3 xl:mt-4">
          <div class="w-[30%] flex flex-col">
            <p class="leading-[20px] xl:leading-[24px] text-[14px] xl:text-[16px] font-[400] text-[#4D4D4F]">Counter 3</p>
            <div class="form-group flex justify-start mt-[8px]">
              <input id="booking" type="checkbox">
              <label
                  class="leading-[20px] xl:leading-[24px] text-[14px] xl:text-[16px] font-[400] text-[#4D4D4F]"
                  for="booking">Mark all</label>
            </div>
          </div>
          <div class="flex gap-x-4 items-center w-[70%]">
            <div class="form-group flex justify-start w-[33.33%]">
              <input id="booking" type="checkbox">
              <label
                  class="leading-[20px] xl:leading-[24px] text-[14px] xl:text-[16px] font-[400] text-[#4D4D4F]"
                  for="booking">Fahim Ahmed</label>
            </div>
            <div class="form-group flex justify-start w-[33.33%]">
              <input id="booking" type="checkbox">
              <label
                  class="leading-[20px] xl:leading-[24px] text-[14px] xl:text-[16px] font-[400] text-[#4D4D4F]"
                  for="booking">Fahim Ahmed</label>
            </div>
            <div class="form-group flex justify-start w-[33.33%]">
              <input id="booking" type="checkbox">
              <label
                  class="leading-[20px] xl:leading-[24px] text-[14px] xl:text-[16px] font-[400] text-[#4D4D4F]"
                  for="booking">Fahim Ahmed</label>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-4 xl:mt-5 w-[60%]">
      <div class="flex justify-between">
        <p class="text-primaryText text-sm font-[400] mb-6">
          *Last updated on 09:23 AM, 18 July 2022</p>
        <button class="flex justify-center items-center gap-x-[10px] text-white leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[500] bg-[#48A43F] rounded-full px-[20px] py-[11px] xl:px-[24px] xl:py-[13px]">
          <img alt="" src="/src/assets/svg/save_change.svg">Save changes
        </button>
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
  top: 4px;
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
import DropdownMenu from "../components/DropdownMenu.vue";

export default {
  components: {
    DropdownMenu
  }
}
</script>
