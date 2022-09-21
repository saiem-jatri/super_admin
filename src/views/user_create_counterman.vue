<template>
  <div class="flex bg-corporateBg">
    <!-- Side Nav bar -->
    <div class="h-screen w-[280px] bg-white border-r border-[#DBDBDB]">
      <div class="flex flex-col justify-between">
        <div class="px-[10px] flex justify-center items-center py-[30px]">
          <img alt="" class="w-[66px] h-[32px]" src="@/assets/imgs/Logo.png">
        </div>
        <div class="px-[10px] overflow-y-auto h-[calc(100vh-150px)]">
          <a class="menu">Dashboard</a>
          <a class="menu">Bus Company</a>
          <a class="menu">Routes</a>
          <a class="menu">Routes</a>
          <a class="menu">Counter</a>
          <a class="menu">Trips</a>
          <a class="bg-corporate w-full text-white p-1 rounded-sm block cursor-pointer">User</a>
          <a class="menu">Agent</a>
          <a class="menu">Migrate Trips</a>
          <a class="menu">Migrate Tickets</a>
          <a class="menu">Trip Expense Configaration</a>
          <a class="dropDownMenu flex justify-center items-center">Reports <span><img alt=""
                                                                                      class="w-[12px] h-[7px]"
                                                                                      src="../assets/svg/down_arrow.svg"></span></a>
          <a class="dropDownMenu flex justify-center items-center">Invoice <span><img alt=""
                                                                                      class="w-[12px] h-[7px]"
                                                                                      src="../assets/svg/down_arrow.svg"></span></a>
          <a class="menu">Offer & Promotion</a>
          <a class="dropDownMenu flex justify-center items-center">Action in Bulk <span><img
              alt="" class="w-[12px] h-[7px]" src="../assets/svg/down_arrow.svg"></span></a>
          <p class="menuSection ">CONFIGARATION</p>
          <a class="menu">Bus</a>
          <a class="menu">Stopage</a>
          <a class="menu">Challan Configaration</a>
          <a class=" py-[8px] w-full text-black leading-[20px] text-[14px] font-[500] block cursor-pointer">Fees</a>
        </div>

        <button class="p-4 flex justify-center items-center gap-x-4 border-t border-[#DBDBDB]"><img
            alt="" class="h-[16px] w-[16px]" src="../assets/svg/logout.svg"> Logout
        </button>

      </div>

    </div>
    <!-- side nav bar end -->
    <div class="h-screen w-full overflow-y-auto bg-[#F7F7F7]">
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
                Create Counterman</p>
              <div class="flex justify-center items-center gap-x-[6px]">
                <p class="text-secondaryText leading-[12px] text-[8px] xl:leading-[16px] xl:text-[12px] font-[400]">
                  Company</p>
                <img alt="" class="w-1 h-2" src="../assets/svg/bgBack.svg">
                <p class="text-secondaryText leading-[12px] text-[8px] xl:leading-[16px] xl:text-[12px] font-[400]">Desh
                  Travels Limited</p>
                <img alt="" class="w-1 h-2" src="../assets/svg/bgBack.svg">
                <p class="text-secondaryText leading-[12px] text-[8px] xl:leading-[16px] xl:text-[12px] font-[400]">
                  Manage</p>
                <img alt="" class="w-1 h-2" src="../assets/svg/bgBack.svg">
                <p class="text-secondaryText leading-[12px] text-[8px] xl:leading-[16px] xl:text-[12px] font-[400]">
                  Counterman</p>
                <img alt="" class="w-1 h-2" src="../assets/svg/bgBack.svg">
                <p class="text-secondaryText leading-[12px] text-[8px] xl:leading-[16px] xl:text-[12px] font-[400]">Add
                  counterman</p>
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
                  Counterman name</p>
                <input class="createNormalInput" placeholder="Enter counterman name" type="text">
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
            <div class="flex justify-center items-center gap-x-[10px] xl:gap-x-[16px] mt-[12px] xl:mt-[16px]">
              <div class="w-1/4">
                <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">
                  Bus operator</p>
                <Dropdown v-model="selectedCity" :opti6ns="cities" class="w-full py-[4px] mt-[10px]" optionLabel="name"
                          placeholder="Select bus operator"/>
              </div>
              <div class="w-1/4">
                <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">
                  Coutner</p>
                <Dropdown v-model="selectedCity" :opti6ns="cities" class="w-full py-[4px] mt-[10px]" optionLabel="name"
                          placeholder="Select counter"/>
              </div>
              <div class="w-1/4">
                <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">
                  Route</p>
                <Dropdown v-model="selectedCity" :opti6ns="cities" class="w-full py-[4px] mt-[10px]" optionLabel="name"
                          placeholder="Select counter city"/>
              </div>
              <div class="w-1/4">
                <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">
                  Commission</p>
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
            <div class="flex justify-start items-center gap-x-[10px] xl:gap-x-[16px] mt-[12px] xl:mt-[16px]">
              <div class="w-1/4">
                <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">
                  Print type</p>
                <Dropdown v-model="selectedCity" :opti6ns="cities" class="w-full py-[4px] mt-[10px]" optionLabel="name"
                          placeholder="Select print type"/>
              </div>
              <div class="w-1/4">
                <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">NID
                  number</p>
                <input class="createNormalInput" placeholder="Enter NID number" type="text">
              </div>
              <div class="w-1/2">
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
                  <label class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]"
                         for="html">Give
                    All Permission</label>
                </div>
              </div>
              <hr class="border-t border-corporateBorder mt-1">
              <div class="pt-[8px] pb-[8px]">
                <div class="flex divide-x divide-corporateBorder">
                  <div class="w-1/2">
                    <div class="py-[8px] pr-[24px]">
                      <div class="flex justify-between items-center">
                        <p class="w-[60%] leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px]">Ticket
                          Booking:</p>

                        <div class="form-group mt-2 w-[40%] flex justify-end">
                          <input id="booking" type="checkbox">
                          <label
                              class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]"
                              for="booking">Yes</label>
                        </div>

                      </div>
                      <hr class="border-t border-dashed border-corporateBorder">
                      <div class="flex justify-between items-center">
                        <p class="w-[60%] leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px]">Report:</p>

                        <div class="form-group mt-2 w-[40%] flex justify-end">
                          <input id="report" type="checkbox">
                          <label
                              class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]"
                              for="report">Yes</label>
                        </div>

                      </div>
                      <hr class="border-t border-dashed border-corporateBorder">
                      <div class="flex justify-between items-center">
                        <p class="w-[60%] leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px]">Fare:</p>

                        <div class="form-group mt-2 w-[40%] flex justify-end">
                          <input id="fare" type="checkbox">
                          <label
                              class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]"
                              for="fare">Yes</label>
                        </div>

                      </div>
                      <hr class="border-t border-dashed border-corporateBorder">
                      <div class="flex justify-between items-center">
                        <p class="w-[60%] leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px]">Cancel Other
                          Ticket:</p>

                        <div class="form-group mt-2 w-[40%] flex justify-end">
                          <input id="cancel" type="checkbox">
                          <label
                              class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]"
                              for="cancel">Yes</label>
                        </div>

                      </div>
                      <hr class="border-t border-dashed border-corporateBorder">
                      <div class="flex justify-between items-center">
                        <p class="w-[60%] leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px]">Goods Ticket
                          Booking:</p>

                        <div class="form-group mt-2 w-[40%] flex justify-end">
                          <input id="goods" type="checkbox">
                          <label
                              class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]"
                              for="goods">Yes</label>
                        </div>

                      </div>
                      <hr class="border-t border-dashed border-corporateBorder">
                      <div class="flex justify-between items-center">
                        <p class="w-[60%] leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px]">Trip Edit:</p>

                        <div class="form-group mt-2 w-[40%] flex justify-end">
                          <input id="edit" type="checkbox">
                          <label
                              class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]"
                              for="edit">Yes</label>
                        </div>

                      </div>
                      <hr class="border-t border-dashed border-corporateBorder">
                      <div class="flex justify-between items-center">
                        <p class="w-[60%] leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px]">Cancel
                          Reservation:</p>

                        <div class="form-group mt-2 w-[40%] flex justify-end">
                          <input id="Reservation" type="checkbox">
                          <label
                              class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]"
                              for="Reservation">Yes</label>
                        </div>

                      </div>
                      <hr class="border-t border-dashed border-corporateBorder">
                      <div class="flex justify-between items-center">
                        <p class="w-[60%] leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px]">Eid trip:</p>

                        <div class="form-group mt-2 w-[40%] flex justify-end">
                          <input id="Eid" type="checkbox">
                          <label
                              class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]"
                              for="Eid">Yes</label>
                        </div>

                      </div>
                      <hr class="border-t border-dashed border-corporateBorder">
                      <div class="flex justify-between items-center">
                        <p class="w-[60%] leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px]">Ticket
                          migration:</p>

                        <div class="form-group mt-2 w-[40%] flex justify-end">
                          <input id="migration" type="checkbox">
                          <label
                              class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]"
                              for="migration">Yes</label>
                        </div>

                      </div>
                      <hr class="border-t border-dashed border-corporateBorder">
                      <div class="flex justify-between items-center">
                        <p class="w-[60%] leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px]">Manage trip:</p>

                        <div class="form-group mt-2 w-[40%] flex justify-end">
                          <input id="Manage" type="checkbox">
                          <label
                              class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]"
                              for="Manage">Yes</label>
                        </div>

                      </div>
                      <hr class="border-t border-dashed border-corporateBorder">
                      <div class="flex justify-between items-center">
                        <p class="w-[50%] xl:w-[60%] leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px]">
                          Seats:</p>
                        <div class="flex justify-end items-center gap-x-[24px] w-[50%] xl:w-[40%] mr-4">
                          <div class="form-group mt-4 flex justify-end">
                            <input id="Seats" type="checkbox">
                            <label
                                class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]"
                                for="Seats">Add</label>
                          </div>
                          <div class="form-group mt-4 flex justify-end">
                            <input id="delete" type="checkbox">
                            <label
                                class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]"
                                for="delete">Delete</label>
                          </div>
                        </div>


                      </div>
                    </div>
                  </div>
                  <div class="w-1/2">
                    <div class="py-2 pl-[16px]">
                      <div class="flex justify-between items-center">
                        <p class="w-[60%] leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px]">Fare
                          Discount:</p>

                        <div class="form-group mt-2 w-[40%] flex justify-end">
                          <input id="fare" type="checkbox">
                          <label
                              class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]"
                              for="fare">Yes</label>
                        </div>

                      </div>
                      <hr class="border-t border-dashed border-corporateBorder">
                      <div class="flex justify-between items-center">
                        <p class="w-[60%] leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px]">Trips:</p>

                        <div class="form-group mt-2 w-[40%] flex justify-end">
                          <input id="trip" type="checkbox">
                          <label
                              class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]"
                              for="trip">Yes</label>
                        </div>

                      </div>
                      <hr class="border-t border-dashed border-corporateBorder">
                      <div class="flex justify-between items-center">
                        <p class="w-[60%] leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px]">Ticket
                          Cancel:</p>

                        <div class="form-group mt-2 w-[40%] flex justify-end">
                          <input id="Ticket" type="checkbox">
                          <label
                              class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]"
                              for="Ticket">Yes</label>
                        </div>

                      </div>
                      <hr class="border-t border-dashed border-corporateBorder">
                      <div class="flex justify-between items-center">
                        <p class="w-[60%] leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px]">Extra Ticket
                          Booking:</p>

                        <div class="form-group mt-2 w-[40%] flex justify-end">
                          <input id="Extra" type="checkbox">
                          <label
                              class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]"
                              for="Extra">Yes</label>
                        </div>

                      </div>
                      <hr class="border-t border-dashed border-corporateBorder">
                      <div class="flex justify-between items-center">
                        <p class="w-[60%] leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px]">Trip Pass:</p>

                        <div class="form-group mt-2 w-[40%] flex justify-end">
                          <input id="Pass" type="checkbox">
                          <label
                              class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]"
                              for="Pass">Yes</label>
                        </div>

                      </div>
                      <hr class="border-t border-dashed border-corporateBorder">
                      <div class="flex justify-between items-center">
                        <p class="w-[60%] leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px]">Resevation:</p>

                        <div class="form-group mt-2 w-[40%] flex justify-end">
                          <input id="Resevation" type="checkbox">
                          <label
                              class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]"
                              for="Resevation">Yes</label>
                        </div>

                      </div>
                      <hr class="border-t border-dashed border-corporateBorder">
                      <div class="flex justify-between items-center">
                        <p class="w-[60%] leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px]">Cancel Other
                          Reservation:</p>

                        <div class="form-group mt-2 w-[40%] flex justify-end">
                          <input id="Other" type="checkbox">
                          <label
                              class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]"
                              for="Other">Yes</label>
                        </div>

                      </div>
                      <hr class="border-t border-dashed border-corporateBorder">
                      <div class="flex justify-between items-center">
                        <p class="w-[60%] leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px]">Eid ticket
                          cancel:</p>

                        <div class="form-group mt-2 w-[40%] flex justify-end">
                          <input id="EidC" type="checkbox">
                          <label
                              class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]"
                              for="EidC">Yes</label>
                        </div>

                      </div>
                      <hr class="border-t border-dashed border-corporateBorder">
                      <div class="flex justify-between items-center">
                        <p class="w-[60%] leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px]">Trip
                          migration:</p>

                        <div class="form-group mt-2 w-[40%] flex justify-end">
                          <input id="migration" type="checkbox">
                          <label
                              class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]"
                              for="migration">Yes</label>
                        </div>

                      </div>
                      <hr class="border-t border-dashed border-corporateBorder">
                      <div class="flex justify-between items-center">
                        <p class="w-[60%] leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px]">Full bus
                          reserve:</p>

                        <div class="form-group mt-2 w-[40%] flex justify-end">
                          <input id="bus" type="checkbox">
                          <label
                              class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]"
                              for="bus">Yes</label>
                        </div>

                      </div>
                      <hr class="border-t border-dashed border-corporateBorder">
                      <div class="flex justify-between items-center">
                        <p class="w-[60%] leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px]">SMS:</p>

                        <div class="form-group mt-2 w-[40%] flex justify-end">
                          <input id="SMS" type="checkbox">
                          <label
                              class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]"
                              for="SMS">Yes</label>
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
                Create counterman
              </button>
              <button
                  class="flex justify-center items-center gap-x-[10px] text-white leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[600] bg-corporate bg-opacity-30 rounded-full px-[20px] py-[11px] xl:px-[24px] xl:py-[13px]">
                <img alt="" src="../assets/svg/save_change.svg">Save changes
              </button>
            </div>
          </div>
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
