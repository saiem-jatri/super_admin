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
                    Agent</p>
                  <img alt="" class="w-1 h-2" src="../assets/svg/bgBack.svg">
                  <p class="text-secondaryText leading-[12px] text-[8px] xl:leading-[16px] xl:text-[12px] font-[400]">
                    Add agent</p>
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
                    Agent name</p>
                  <input class="createNormalInput" placeholder="Enter agent name" type="text">
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
  
              <hr class="border-t border-corporateBorder mt-3 xl:mt-4">
              <div class="p-4">
                <p class="text-corporateSecondaryBlue leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">COMPANY 1 INFORMATION</p>
                <div class="flex justify-start items-center gap-x-[10px] xl:gap-x-[16px] mt-[12px] xl:mt-[16px]">
                    <div class="w-1/4">
                  <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">
                    Company name</p>
                  <Dropdown v-model="selectedCity" :opti6ns="cities" class="w-full py-[4px] mt-[10px]" optionLabel="name"
                            placeholder="Select Company name"/>
                </div>
                <div class="w-1/4">
                  <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">
                    Counter</p>
                  <Dropdown v-model="selectedCity" :opti6ns="cities" class="w-full py-[4px] mt-[10px]" optionLabel="name"
                            placeholder="Select counter"/>
                </div>
                <div class="w-1/2">
                  <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">
                    Route</p>
                  <Dropdown v-model="selectedCity" :opti6ns="cities" class="w-full py-[4px] mt-[10px]" optionLabel="name"
                            placeholder="Select route"/>
                </div>
                </div>
              </div>
              <div class="px-4 flex justify-start items-center gap-x-[10px] xl:gap-x-[16px]">
                <div class="w-1/4">
                  <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">
                    Payment type</p>
                  <Dropdown v-model="selectedCity" :opti6ns="cities" class="w-full py-[4px] mt-[10px]" optionLabel="name"
                            placeholder="Select Payment type"/>
                </div>
                <div class="w-1/4">
                  <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">
                    Prepaid CAP (TK)</p>
                  <Dropdown v-model="selectedCity" :opti6ns="cities" class="w-full py-[4px] mt-[10px]" optionLabel="name"
                            placeholder="Enter amount"/>
                </div>
                <div class="w-1/4">
                  <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">
                    Commission rate</p>
                  <div class="py-[2px] border border-[#DBDBDB] mt-[10px] rounded-[4px] leading-[20px]">
                    <div class="w-full h-[35px] flex justify-between items-center overflow-hidden divide-x">
                      <input
                          class="p-4 text-[#676769] leading-[20px] text-[14px] font-[400] w-2/5 placeholder:text-primaryText focus:outline-none"
                          placeholder="30">
                      <div class="p-2 w-3/5 ">
                        <div class="flex justify-between xl:gap-x-2 items-center bg-[#F7F7F7] xl:px-2">
                          <select aria-label="Default select example"
                                  class="form-selectpy-1 text-base bg-[#F7F7F7] rounded focus:outline-none xl:w-full">
                            <option class="leading-[16px] xl:leading-[20px] text-[10px] xl:text-[14px] font-[500]"
                                    selected>
                              Percentage %
                            </option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </select>
                          <img alt="" class="w-[12px] h-5" src="../assets/svg/down_arrow.svg">
                        </div>
                      </div>
  
                    </div>
                  </div>
  
  
                </div>
              </div>
            </div>
            <div class="m-4">
              <div class="rounded-[4px] border border-corporateBorder">
                <div class="flex justify-between items-center w-full px-4">
                  <p class="text-primaryText leading-[24px] xl:leading-[28px] text-[18px] xl:text-[20px] font-[600] text-center">
                    Permissions</p>
                  <div class="form-group  mt-5">
                    <input id="html" type="checkbox">
                    <label class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]"
                           for="html">Give
                      All Permission</label>
                  </div>
                </div>
                <hr class="border-t border-corporateBorder">
                <div class="px-4">
                    <div class="pt-[8px] pb-[8px]">
                  <div class="flex divide-x divide-corporateBorder">
                    <div class="w-1/2">
                      <div class="py-[8px] pr-[24px]">
                        <div class="flex justify-start items-center">
                          <div class="form-group mb-[15px] flex justify-end">
                            <input id="booking" type="checkbox">
                            <label
                                class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]"
                                for="booking">Ticket booking</label>
                          </div>
                        </div>
                        <hr class="border-t border-dashed border-corporateBorder">
                        <div class="flex justify-start items-center">
                          <div class="form-group my-[15px] flex justify-end">
                            <input id="booking" type="checkbox">
                            <label
                                class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]"
                                for="booking">Fare discount</label>
                          </div>
                        </div>
                        <hr class="border-t border-dashed border-corporateBorder">
                        <div class="flex justify-start items-center">
                            <div class="form-group Goods ticket my-[15px] flex justify-end">
                            <input id="booking" type="checkbox">
                            <label
                                class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]"
                                for="booking">Report</label>
                          </div>
                        </div>
                        <hr class="border-t border-dashed border-corporateBorder">
                        <div class="flex justify-start items-center">
                          <div class="form-group Goods ticket my-[15px] flex justify-end">
                            <input id="booking" type="checkbox">
                            <label
                                class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]"
                                for="booking">Trip pass</label>
                          </div>
                        </div>
                        <hr class="border-t border-dashed border-corporateBorder">
                        <div class="flex justify-start items-center">
                          <div class="form-group Goods ticket my-[15px] flex justify-end">
                            <input id="booking" type="checkbox">
                            <label
                                class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]"
                                for="booking">Subroute</label>
                          </div>
                        </div>
                        <hr class="border-t border-dashed border-corporateBorder">
                        <div class="flex justify-start items-center">
                          <div class="form-group Goods ticket mt-[15px] mb-0 flex justify-end">
                            <input id="booking" type="checkbox">
                            <label
                                class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]"
                                for="booking">Allow SMS</label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="w-1/2">
                      <div class="py-[8px] pl-[24px]">
                        <div class="flex justify-start items-center">
                          <div class="form-group mb-[15px] flex justify-end">
                            <input id="booking" type="checkbox">
                            <label
                                class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]"
                                for="booking">Cancel ticket</label>
                          </div>
                        </div>
                        <hr class="border-t border-dashed border-corporateBorder">
                        <div class="flex justify-start items-center">
                          <div class="form-group my-[15px] flex justify-end">
                            <input id="booking" type="checkbox">
                            <label
                                class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]"
                                for="booking">Extra ticket booking</label>
                          </div>
                        </div>
                        <hr class="border-t border-dashed border-corporateBorder">
                        <div class="flex justify-start items-center">
                          <div class="form-group my-[15px] flex justify-end">
                            <input id="booking" type="checkbox">
                            <label
                                class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]"
                                for="booking">Goods ticket booking</label>
                          </div>
                        </div>
                        <hr class="border-t border-dashed border-corporateBorder">
                        <div class="flex justify-start items-center">
                          <div class="form-group my-[15px] flex justify-end">
                            <input id="booking" type="checkbox">
                            <label
                                class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]"
                                for="booking">Reservation</label>
                          </div>
                        </div>
                        <hr class="border-t border-dashed border-corporateBorder">
                        <div class="flex justify-start items-center">
                          <div class="form-group my-[15px] flex justify-end">
                            <input id="booking" type="checkbox">
                            <label
                                class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]"
                                for="booking">Cancel reservation</label>
                          </div>
                        </div>
                        <hr class="border-t border-dashed border-corporateBorder">
                        <div class="flex justify-start items-center">
                          <div class="form-group mt-[15px] mb-0 flex justify-end">
                            <input id="booking" type="checkbox">
                            <label
                                class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]"
                                for="booking">Required passenger mobile number</label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                </div>
              </div>


              <hr class="border-t border-dashed border-corporateBorder my-3 xl:my-4">
              <div class="">
                <p class="text-corporateSecondaryBlue leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">COMPANY 2 INFORMATION</p>
                <div class="flex justify-start items-center gap-x-[10px] xl:gap-x-[16px] mt-[12px] xl:mt-[16px]">
                    <div class="w-1/4">
                  <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">
                    Company name</p>
                  <Dropdown v-model="selectedCity" :opti6ns="cities" class="w-full py-[4px] mt-[10px]" optionLabel="name"
                            placeholder="Select Company name"/>
                </div>
                <div class="w-1/4">
                  <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">
                    Counter</p>
                  <Dropdown v-model="selectedCity" :opti6ns="cities" class="w-full py-[4px] mt-[10px]" optionLabel="name"
                            placeholder="Select counter"/>
                </div>
                <div class="w-1/2">
                  <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">
                    Route</p>
                  <Dropdown v-model="selectedCity" :opti6ns="cities" class="w-full py-[4px] mt-[10px]" optionLabel="name"
                            placeholder="Select route"/>
                </div>
                </div>
              </div>
              <div class="flex justify-start items-center gap-x-[10px] xl:gap-x-[16px] mt-[12px] xl:mt-[16px]">
                <div class="w-1/4">
                  <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">
                    Payment type</p>
                  <Dropdown v-model="selectedCity" :opti6ns="cities" class="w-full py-[4px] mt-[10px]" optionLabel="name"
                            placeholder="Select Payment type"/>
                </div>
                <div class="w-1/4">
                  <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">
                    Commission rate</p>
                  <div class="py-[2px] border border-[#DBDBDB] mt-[10px] rounded-[4px] leading-[20px]">
                    <div class="w-full h-[35px] flex justify-between items-center overflow-hidden divide-x">
                      <input
                          class="p-4 text-[#676769] leading-[20px] text-[14px] font-[400] w-2/5 placeholder:text-primaryText focus:outline-none"
                          placeholder="30">
                      <div class="p-2 w-3/5 ">
                        <div class="flex justify-between xl:gap-x-2 items-center bg-[#F7F7F7] xl:px-2">
                          <select aria-label="Default select example"
                                  class="form-selectpy-1 text-base bg-[#F7F7F7] rounded focus:outline-none xl:w-full">
                            <option class="leading-[16px] xl:leading-[20px] text-[10px] xl:text-[14px] font-[500]"
                                    selected>
                              Percentage %
                            </option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </select>
                          <img alt="" class="w-[12px] h-5" src="../assets/svg/down_arrow.svg">
                        </div>
                      </div>
  
                    </div>
                  </div>
  
  
                </div>
              </div>
            </div>
            <div class="m-4">
              <div class="rounded-[4px] border border-corporateBorder">
                <div class="flex justify-between items-center w-full px-4">
                  <p class="text-primaryText leading-[24px] xl:leading-[28px] text-[18px] xl:text-[20px] font-[600] text-center">
                    Permissions</p>
                  <div class="form-group  mt-5">
                    <input id="html" type="checkbox">
                    <label class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]"
                           for="html">Give
                      All Permission</label>
                  </div>
                </div>
                <hr class="border-t border-corporateBorder">
                <div class="px-4">
                    <div class="pt-[8px] pb-[8px]">
                  <div class="flex divide-x divide-corporateBorder">
                    <div class="w-1/2">
                      <div class="py-[8px] pr-[24px]">
                        <div class="flex justify-start items-center">
                          <div class="form-group mb-[15px] flex justify-end">
                            <input id="booking" type="checkbox">
                            <label
                                class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]"
                                for="booking">Ticket booking</label>
                          </div>
                        </div>
                        <hr class="border-t border-dashed border-corporateBorder">
                        <div class="flex justify-start items-center">
                          <div class="form-group my-[15px] flex justify-end">
                            <input id="booking" type="checkbox">
                            <label
                                class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]"
                                for="booking">Fare discount</label>
                          </div>
                        </div>
                        <hr class="border-t border-dashed border-corporateBorder">
                        <div class="flex justify-start items-center">
                            <div class="form-group Goods ticket my-[15px] flex justify-end">
                            <input id="booking" type="checkbox">
                            <label
                                class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]"
                                for="booking">Report</label>
                          </div>
                        </div>
                        <hr class="border-t border-dashed border-corporateBorder">
                        <div class="flex justify-start items-center">
                          <div class="form-group Goods ticket my-[15px] flex justify-end">
                            <input id="booking" type="checkbox">
                            <label
                                class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]"
                                for="booking">Trip pass</label>
                          </div>
                        </div>
                        <hr class="border-t border-dashed border-corporateBorder">
                        <div class="flex justify-start items-center">
                          <div class="form-group Goods ticket my-[15px] flex justify-end">
                            <input id="booking" type="checkbox">
                            <label
                                class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]"
                                for="booking">Subroute</label>
                          </div>
                        </div>
                        <hr class="border-t border-dashed border-corporateBorder">
                        <div class="flex justify-start items-center">
                          <div class="form-group Goods ticket mt-[15px] mb-0 flex justify-end">
                            <input id="booking" type="checkbox">
                            <label
                                class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]"
                                for="booking">Allow SMS</label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="w-1/2">
                      <div class="py-[8px] pl-[24px]">
                        <div class="flex justify-start items-center">
                          <div class="form-group mb-[15px] flex justify-end">
                            <input id="booking" type="checkbox">
                            <label
                                class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]"
                                for="booking">Cancel ticket</label>
                          </div>
                        </div>
                        <hr class="border-t border-dashed border-corporateBorder">
                        <div class="flex justify-start items-center">
                          <div class="form-group my-[15px] flex justify-end">
                            <input id="booking" type="checkbox">
                            <label
                                class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]"
                                for="booking">Extra ticket booking</label>
                          </div>
                        </div>
                        <hr class="border-t border-dashed border-corporateBorder">
                        <div class="flex justify-start items-center">
                          <div class="form-group my-[15px] flex justify-end">
                            <input id="booking" type="checkbox">
                            <label
                                class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]"
                                for="booking">Goods ticket booking</label>
                          </div>
                        </div>
                        <hr class="border-t border-dashed border-corporateBorder">
                        <div class="flex justify-start items-center">
                          <div class="form-group my-[15px] flex justify-end">
                            <input id="booking" type="checkbox">
                            <label
                                class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]"
                                for="booking">Reservation</label>
                          </div>
                        </div>
                        <hr class="border-t border-dashed border-corporateBorder">
                        <div class="flex justify-start items-center">
                          <div class="form-group my-[15px] flex justify-end">
                            <input id="booking" type="checkbox">
                            <label
                                class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]"
                                for="booking">Cancel reservation</label>
                          </div>
                        </div>
                        <hr class="border-t border-dashed border-corporateBorder">
                        <div class="flex justify-start items-center">
                          <div class="form-group mt-[15px] mb-0 flex justify-end">
                            <input id="booking" type="checkbox">
                            <label
                                class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]"
                                for="booking">Required passenger mobile number</label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                </div>
              </div>

              <hr class="border-t border-dashed my-4 border-corporateBorder">
              <button class="w-full border border-dashed border-corporateSecondaryBlue flex justify-center items-center bg-[#EFF7FD] rounded-[4px]">
                <div class="flex justify-center items-center gap-x-[11px] py-[12px]"><img alt="" class="w-[10px] h-[10px]" src="/src/assets/svg/createPlus.svg">
                    <p class="text-primaryText font-[600] leading-[20px] text-[14px]">Add another agent</p></div>
                </button>
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
                    class="flex justify-center items-center text-white leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[500] bg-corporate rounded-full px-[20px] py-[11px] xl:px-[24px] xl:py-[13px]">
                    Create agent
                </button>
              </div>
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
  