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
              <p class="lg:leading-[16px] xl:leading-[28px] lg:text-[14px] xl:text-[20px] font-[600] text-primaryText">Create Counterman</p>
              <div class="flex justify-center items-center gap-x-[6px]">
                <p class="text-secondaryText leading-[12px] text-[8px] xl:leading-[16px] xl:text-[12px] font-[400]">Company</p>
                <img src="../assets/svg/bgBack.svg" alt="" class="w-1 h-2">
                <p class="text-secondaryText leading-[12px] text-[8px] xl:leading-[16px] xl:text-[12px] font-[400]">Desh Travels Limited</p>
                <img src="../assets/svg/bgBack.svg" alt="" class="w-1 h-2">
                <p class="text-secondaryText leading-[12px] text-[8px] xl:leading-[16px] xl:text-[12px] font-[400]">Manage</p>
                <img src="../assets/svg/bgBack.svg" alt="" class="w-1 h-2">
                <p class="text-secondaryText leading-[12px] text-[8px] xl:leading-[16px] xl:text-[12px] font-[400]">Counterman</p>
                <img src="../assets/svg/bgBack.svg" alt="" class="w-1 h-2">
                <p class="text-secondaryText leading-[12px] text-[8px] xl:leading-[16px] xl:text-[12px] font-[400]">Add counterman</p>
              </div>
            </div>
          </div>
          <div class="flex gap-x-[24px] p-4 w-1/2 justify-end items-center pr-2 ">
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
            <div class="flex justify-center items-center gap-x-[10px] xl:gap-x-[16px]">
              <div class="w-1/4">
                <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">Counter name</p>
                <input type="text" class="createNormalInput" placeholder="Enter counter name">
              </div>
              <div class="w-1/4">
                <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">Mobile number</p>
                <input type="text" class="createNormalInput" placeholder="Enter mobile number">
              </div>
              <div class="w-1/4">
                <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">Email address</p>
                <input type="text" class="createNormalInput" placeholder="Enter email address">
              </div>
              <div class="w-1/4">
                <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">Password</p>
                <input type="text" class="createNormalInput" placeholder="Enter password">
              </div>
            </div>
            <div class="flex justify-center items-center gap-x-[10px] xl:gap-x-[16px] mt-[12px] xl:mt-[16px]">
              <div class="w-1/4">
                <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">Coutner</p>
                <Dropdown class="w-full py-[4px] mt-[10px]" v-model="selectedCity" :opti6ns="cities" optionLabel="name" placeholder="Select counter" />
              </div>
              <div class="w-1/4 relative">
                <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">Route</p>
                <Dropdown class="w-full py-[4px] mt-[10px]" v-model="selectedCity" :opti6ns="cities" optionLabel="name" placeholder="Select counter" />
                <p class="bg-[#1E88E5] text-white rounded py-1 px-[6px] text-[12px] xl:text-sm inline-block absolute top-[38px] right-[40px] xl:top-[40px] xl:right-[120px]">+21</p>
              </div>
              <div class="w-1/4">
                <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]"> Commission</p>
                <div class="py-[2px] border border-[#DBDBDB] mt-[10px] rounded-[4px] leading-[20px]">
                  <div class="w-full h-[35px] flex justify-between items-center overflow-hidden divide-x">
                    <input class="px-2 py-4 text-[#676769] leading-[20px] text-[14px] font-[400] w-2/5 placeholder:text-primaryText focus:outline-none" placeholder="Days">
                    <div class="p-2 w-3/5">
                      <div class="flex justify-between xl:gap-x-2 items-center bg-[#F7F7F7] xl:px-2">
                        <select class="py-1 text-base bg-[#F7F7F7] rounded focus:outline-none xl:w-full leading-[16px] xl:leading-[20px] text-[10px] xl:text-[14px] font-[500]">
                          <option selected=""> Percentage % </option><option value="1">One</option><option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                        <img alt="" class="w-[10px] xl:w-[12px] h-5" src="/src/assets/svg/down_arrow.svg">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="w-1/4">
                <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">Print type</p>
                <Dropdown class="w-full py-[4px] mt-[10px]" v-model="selectedCity" :opti6ns="cities" optionLabel="name" placeholder="Select print type" />
              </div>
            </div>
            <div class="flex justify-start items-center gap-x-[10px] xl:gap-x-[16px] mt-[12px] xl:mt-[16px]">
              <div class="w-[24.2%]">
                <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">NID number</p>
                <input type="text" class="createNormalInput" placeholder="Enter NID number">
              </div>
              <div class="w-[24.2%]">
                <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">Address</p>
                <input type="text" class="createNormalInput" placeholder="Enter address">
              </div>
            </div>
          </div>
          <div class="px-4 pb-4">
            <div class="rounded-[4px] border border-corporateBorder px-4">
          <div class="flex justify-between items-center w-full">
             <p class="text-primaryText leading-[24px] xl:leading-[28px] text-[16px] xl:text-[20px] font-[600] text-center">Permissions</p>
                <div class="form-group mt-4">
                  <input type="checkbox" id="html">
                  <label for="html" class="text-primaryText leading-[20px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[600]">Give All Permission</label>
                </div>
              </div>
              <hr class="border-t border-corporateBorder mt-1">
              <div class="pt-[8px] pb-[8px]">
                <div class="flex divide-x divide-corporateBorder">
                  <div class="w-1/2">
                    <div class="py-[8px] pr-[24px]">
                      <div class="flex justify-between items-center">
                        <p class="w-[60%] mb-4 leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px]">Ticket Booking:</p>
                        <div class="form-group w-[40%] flex justify-end">
                          <input type="checkbox" checked id="booking">
                          <label for="booking" class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]">Yes</label>
                        </div>
                      </div>
                      <hr class="border-t border-dashed border-corporateBorder">
                      <div class="flex justify-between items-center">
                        <p class="w-[60%] leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px]">Report:</p>

                        <div class="form-group mt-4 w-[40%] flex justify-end">
                          <input type="checkbox" checked id="report">
                          <label for="report" class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]">Yes</label>
                        </div>

                      </div>
                      <hr class="border-t border-dashed border-corporateBorder">
                      <div class="flex justify-between items-center">
                        <p class="w-[60%] leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px]">Fare:</p>

                        <div class="form-group mt-4 w-[40%] flex justify-end">
                          <input type="checkbox" checked id="fare">
                          <label for="fare" class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]">Yes</label>
                        </div>

                      </div>
                      <hr class="border-t border-dashed border-corporateBorder">
                      <div class="flex justify-between items-center">
                        <p class="w-[60%] leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px]">Cancel Other Ticket:</p>

                        <div class="form-group mt-4 w-[40%] flex justify-end">
                          <input type="checkbox" id="cancel">
                          <label for="cancel" class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]">Yes</label>
                        </div>

                      </div>
                      <hr class="border-t border-dashed border-corporateBorder">
                      <div class="flex justify-between items-center">
                        <p class="w-[60%] leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px]">Goods Ticket Booking:</p>

                        <div class="form-group mt-4 w-[40%] flex justify-end">
                          <input type="checkbox" id="goods">
                          <label for="goods" class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]">Yes</label>
                        </div>

                      </div>
                      <hr class="border-t border-dashed border-corporateBorder">
                      <div class="flex justify-between items-center">
                        <p class="w-[60%] leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px]">Trip Edit:</p>

                        <div class="form-group mt-4 w-[40%] flex justify-end">
                          <input type="checkbox" id="edit">
                          <label for="edit" class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]">Yes</label>
                        </div>

                      </div>
                      <hr class="border-t border-dashed border-corporateBorder">
                      <div class="flex justify-between items-center">
                        <p class="w-[60%] leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px]">Cancel Reservation:</p>

                        <div class="form-group mt-4 w-[40%] flex justify-end">
                          <input type="checkbox" id="Reservation">
                          <label for="Reservation" class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]">Yes</label>
                        </div>

                      </div>
                      <hr class="border-t border-dashed border-corporateBorder">
                      <div class="flex justify-between items-center">
                        <p class="w-[60%] leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px]">Eid trip:</p>

                        <div class="form-group mt-4 w-[40%] flex justify-end">
                          <input type="checkbox" id="Eid">
                          <label for="Eid" class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]">Yes</label>
                        </div>

                      </div>
                      <hr class="border-t border-dashed border-corporateBorder">
                      <div class="flex justify-between items-center">
                        <p class="w-[60%] leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px]">Ticket migration:</p>

                        <div class="form-group mt-4 w-[40%] flex justify-end">
                          <input type="checkbox" id="migration">
                          <label for="migration" class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]">Yes</label>
                        </div>

                      </div>
                      <hr class="border-t border-dashed border-corporateBorder">
                      <div class="flex justify-between items-center">
                        <p class="w-[60%] leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px]">Manage trip:</p>

                        <div class="form-group mt-4 w-[40%] flex justify-end">
                          <input type="checkbox" id="Manage">
                          <label for="Manage" class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]">Yes</label>
                        </div>

                      </div>
                      <hr class="border-t border-dashed border-corporateBorder">
                      <div class="flex justify-between items-center">
                        <p class="w-[50%] xl:w-[60%] mt-4 leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px]">Seats:</p>
                        <div class="flex justify-end items-center gap-x-[24px] w-[50%] xl:w-[40%]">
                          <div class="form-group mt-4  mb-0 flex justify-end">
                            <input type="checkbox" id="Seats">
                            <label for="Seats" class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]">Add</label>
                          </div>
                          <div class="form-group mt-4 mb-0 flex justify-end">
                            <input type="checkbox" id="delete">
                            <label for="delete" class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]">Delete</label>
                          </div>
                        </div>


                      </div>
                    </div>
                  </div>
                  <div class="w-1/2">
                    <div class="py-2 pl-[16px]">
                      <div class="flex justify-between items-center">
                        <p class="w-[60%] mb-4 leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px]">Fare Discount:</p>
                        <div class="form-group w-[40%] flex justify-end">
                          <input type="checkbox" id="booking">
                          <label for="booking" class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]">Yes</label>
                        </div>
                      </div>
                      <hr class="border-t border-dashed border-corporateBorder">
                      <div class="flex justify-between items-center">
                        <p class="w-[60%] leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px]">Trips:</p>

                        <div class="form-group mt-4 w-[40%] flex justify-end">
                          <input type="checkbox" id="trip">
                          <label for="trip" class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]">Yes</label>
                        </div>

                      </div>
                      <hr class="border-t border-dashed border-corporateBorder">
                      <div class="flex justify-between items-center">
                        <p class="w-[60%] leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px]">Ticket Cancel:</p>

                        <div class="form-group mt-4 w-[40%] flex justify-end">
                          <input type="checkbox" id="Ticket">
                          <label for="Ticket" class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]">Yes</label>
                        </div>

                      </div>
                      <hr class="border-t border-dashed border-corporateBorder">
                      <div class="flex justify-between items-center">
                        <p class="w-[60%] leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px]">Extra Ticket Booking:</p>

                        <div class="form-group mt-4 w-[40%] flex justify-end">
                          <input type="checkbox" id="Extra">
                          <label for="Extra" class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]">Yes</label>
                        </div>

                      </div>
                      <hr class="border-t border-dashed border-corporateBorder">
                      <div class="flex justify-between items-center">
                        <p class="w-[60%] leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px]">Trip Pass:</p>

                        <div class="form-group mt-4 w-[40%] flex justify-end">
                          <input type="checkbox" id="Pass">
                          <label for="Pass" class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]">Yes</label>
                        </div>

                      </div>
                      <hr class="border-t border-dashed border-corporateBorder">
                      <div class="flex justify-between items-center">
                        <p class="w-[60%] leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px]">Resevation:</p>

                        <div class="form-group mt-4 w-[40%] flex justify-end">
                          <input type="checkbox" id="Resevation">
                          <label for="Resevation" class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]">Yes</label>
                        </div>

                      </div>
                      <hr class="border-t border-dashed border-corporateBorder">
                      <div class="flex justify-between items-center">
                        <p class="w-[60%] leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px]">Cancel Other Reservation:</p>

                        <div class="form-group mt-4 w-[40%] flex justify-end">
                          <input type="checkbox" id="Other">
                          <label for="Other" class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]">Yes</label>
                        </div>

                      </div>
                      <hr class="border-t border-dashed border-corporateBorder">
                      <div class="flex justify-between items-center">
                        <p class="w-[60%] leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px]">Eid ticket cancel:</p>

                        <div class="form-group mt-4 w-[40%] flex justify-end">
                          <input type="checkbox" id="EidC">
                          <label for="EidC" class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]">Yes</label>
                        </div>

                      </div>
                      <hr class="border-t border-dashed border-corporateBorder">
                      <div class="flex justify-between items-center">
                        <p class="w-[60%] leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px]">Trip migration:</p>

                        <div class="form-group mt-4 w-[40%] flex justify-end">
                          <input type="checkbox" id="migration">
                          <label for="migration" class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]">Yes</label>
                        </div>

                      </div>
                      <hr class="border-t border-dashed border-corporateBorder">
                      <div class="flex justify-between items-center">
                        <p class="w-[60%] leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px]">Full bus reserve:</p>

                        <div class="form-group mt-4 w-[40%] flex justify-end">
                          <input type="checkbox" id="bus">
                          <label for="bus" class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]">Yes</label>
                        </div>

                      </div>
                      <hr class="border-t border-dashed border-corporateBorder">
                      <div class="flex justify-between items-center">
                        <p class="w-[60%] mt-4 leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px]">SMS:</p>

                        <div class="form-group mt-4 mb-0 w-[40%] flex justify-end">
                          <input type="checkbox" id="SMS">
                          <label for="SMS" class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]">Yes</label>
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
              <p class="text-primaryText font-[600] leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] ">Status</p>
              <div class="flex justify-center items-center">
                <button class="bg-[#48A43F] w-[90px] xl:w-[110px] text-white leading-[16px] xl:leading-[20px] text-[12px] xl:text-[14px] flex justify-center items-center font-[400] h-[40px] rounded-l-[4px]">Active</button>
                <button class="bg-[#F7F7F7] w-[90px] xl:w-[110px] text-primaryText leading-[16px] xl:leading-[20px] text-[12px] xl:text-[14px] border border-[#DBDBDB] flex justify-center items-center font-[400] h-[40px] rounded-r-[4px]">Inactive</button>
              </div>
            </div>
              <div class="flex gap-x-2 items-center">
                <button class="lessOpacityCorporateButton">Create counterman</button>
                <button class="flex justify-center items-center gap-x-[10px] corporateButton">
                  <img src="../assets/svg/save_change.svg" alt="">Save changes</button>
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
.p-dropdown-panel .p-dropdown-items .p-dropdown-item:not(:last-child), .p-dropdown-panel .p-dropdown-items .p-dropdown-item:not(:last-child):hover{
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
  padding: 10px;
  display: inline-block;
  position: relative;
  vertical-align: middle;
  cursor: pointer;
  margin-right: 9px;
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
  top: 2px;
  left: 9px;
  width: 6px;
  height: 14px;
  border:2px solid white;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
  /*background-color: white;*/
}
</style>

<script>
export  default {
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
