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
                Create Agent</p>
              <div class="flex justify-center items-center gap-x-[6px] mr-7">
                <p class="text-secondaryText leading-[12px] text-[8px] xl:leading-[16px] xl:text-[12px] font-[400]">
                  User</p>
                <img alt="" class="w-1 h-2" src="../assets/svg/bgBack.svg">
                <p class="text-secondaryText leading-[12px] text-[8px] xl:leading-[16px] xl:text-[12px] font-[400]">
                  Customer Care</p>
                <img alt="" class="w-1 h-2" src="../assets/svg/bgBack.svg">
                <p class="text-secondaryText leading-[12px] text-[8px] xl:leading-[16px] xl:text-[12px] font-[400]">
                  Add customer care</p>
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
        <div class="bg-white rounded-[10px]">
          <div class="">
            <div class="px-4 pt-4 flex justify-center items-center gap-x-[10px] xl:gap-x-[16px]">
              <div class="w-1/4">
                <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">
                  Customer care name</p>
                <input class="createNormalInput" placeholder="Enter customer care name" type="text">
              </div>
              <div class="w-1/4">
                <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">
                  Mobile number</p>
                <input class="createNormalInput" placeholder="Enter mobile number" type="text">
              </div>
              <div class="w-1/4">
                <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">Email
                  address</p>
                <input class="createNormalInput" placeholder="Enter email address" type="text">
              </div>
              <div class="w-1/4">
                <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">
                  Password</p>
                <input class="createNormalInput" placeholder="Enter password" type="text">
              </div>
            </div>
            <div class="px-4 flex justify-start items-center gap-x-[10px] xl:gap-x-[16px] mt-[12px] xl:mt-[16px]">
              <div class="w-1/4">
                <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">
                  NID number</p>
                <input class="createNormalInput" placeholder="Enter NID number" type="text">
              </div>
              <div class="w-1/4">
                <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">
                  Address</p>
                <input class="createNormalInput" placeholder="Enter address" type="text">
              </div>

            </div>

          </div>
          <div class="p-4">
            <div class="rounded-[4px] border border-corporateBorder px-4">
              <div class="flex justify-between items-center w-full">
                <p class="text-primaryText leading-[24px] xl:leading-[28px] text-[18px] xl:text-[20px] font-[600] text-center">
                  Permissions</p>
                <div class="form-group  mt-5">
                  <input id="html" type="checkbox">
                  <label class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[500]"
                         for="html">Give All Permission</label>
                </div>
              </div>
              <hr class="border-t border-corporateBorder mt-1">
              <div class="pt-[8px] pb-[8px]">
                <div class="flex divide-x divide-corporateBorder">
                  <div class="w-1/2">
                    <div class="py-[8px] pr-[24px]">
                      <div class="flex justify-start items-center">
                        <div class="form-group mt-2 flex justify-end">
                          <input id="booking" type="checkbox">
                          <label
                              class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]"
                              for="booking">Ticket booking</label>
                        </div>
                      </div>
                      <hr class="border-t border-dashed border-corporateBorder">
                      <div class="flex justify-start items-center">
                        <div class="form-group mt-4 flex justify-end">
                          <input id="booking" type="checkbox">
                          <label
                              class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]"
                              for="booking">Fare discount</label>
                        </div>
                      </div>
                      <hr class="border-t border-dashed border-corporateBorder">
                      <div class="flex justify-start items-center">
                        <div class="form-group mt-4 flex justify-end">
                          <input id="booking" type="checkbox">
                          <label
                              class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]"
                              for="booking">Report</label>
                        </div>
                      </div>
                      <hr class="border-t border-dashed border-corporateBorder">
                      <div class="flex justify-start items-center">
                        <div class="form-group mt-4 flex justify-end">
                          <input id="booking" type="checkbox">
                          <label
                              class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]"
                              for="booking">Manage ticket</label>
                        </div>
                      </div>
                      <hr class="border-t border-dashed border-corporateBorder">
                      <div class="flex justify-start items-center">
                        <div class="form-group mt-4 flex justify-end">
                          <input id="booking" type="checkbox">
                          <label
                              class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]"
                              for="booking">Manage order</label>
                        </div>
                      </div>
                      <hr class="border-t border-dashed border-corporateBorder">
                      <div class="flex justify-start items-center">
                        <div class="form-group mt-4 mb-0 flex justify-end">
                          <input id="booking" type="checkbox">
                          <label
                              class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]"
                              for="booking">Required passenger mobile number</label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="w-1/2">
                    <div class="py-[8px] pl-[24px]">
                      <div class="flex justify-start items-center">
                        <div class="form-group mt-4 flex justify-end">
                          <input id="booking" type="checkbox">
                          <label
                              class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]"
                              for="booking">Cancel ticket</label>
                        </div>
                      </div>
                      <hr class="border-t border-dashed border-corporateBorder">
                      <div class="flex justify-start items-center">
                        <div class="form-group mt-4 flex justify-end">
                          <input id="booking" type="checkbox">
                          <label
                              class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]"
                              for="booking">Cancel & refund</label>
                        </div>
                      </div>
                      <hr class="border-t border-dashed border-corporateBorder">
                      <div class="flex justify-start items-center">
                        <div class="form-group mt-4 flex justify-end">
                          <input id="booking" type="checkbox">
                          <label
                              class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]"
                              for="booking">Full bus reserve</label>
                        </div>
                      </div>
                      <hr class="border-t border-dashed border-corporateBorder">
                      <div class="flex justify-start items-center">
                        <div class="form-group mt-4 flex justify-end">
                          <input id="booking" type="checkbox">
                          <label
                              class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]"
                              for="booking">Reservation</label>
                        </div>
                      </div>
                      <hr class="border-t border-dashed border-corporateBorder">
                      <div class="flex justify-start items-center">
                        <div class="form-group mt-4 flex justify-end">
                          <input id="booking" type="checkbox">
                          <label
                              class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]"
                              for="booking">Cancel reservation</label>
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
            
            <div class="flex gap-x-2 items-center">
              <router-link to="/userCreateCustomercare" class="lessOpacityCorporateButton">Create customer care</router-link>
              <button class="flex justify-center items-center gap-x-[10px] corporateButton">
                 <img src="../assets/svg/save_change.svg" alt="">Save changes
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
  padding: 10px;
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
  top: 2px;
  left: 9px;
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
