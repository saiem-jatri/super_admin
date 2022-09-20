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
                Create Jatri Admin</p>
              <div class="flex justify-center items-center gap-x-[6px]">
                <p class="text-secondaryText leading-[12px] text-[8px] xl:leading-[16px] xl:text-[12px] font-[400]">
                  User</p>
                <img alt="" class="w-1 h-2" src="../assets/svg/bgBack.svg">
                <p class="text-secondaryText leading-[12px] text-[8px] xl:leading-[16px] xl:text-[12px] font-[400]">
                  Jatri admin</p>
                <img alt="" class="w-1 h-2" src="../assets/svg/bgBack.svg">
                <p class="text-secondaryText leading-[12px] text-[8px] xl:leading-[16px] xl:text-[12px] font-[400]">Add
                  jatri admin</p>
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
          <div class="p-4 flex items-center gap-x-4 w-full">
            <div class="w-1/4">
              <div class="flex justify-between items-center w-full">
                <p class="text-primaryText leading-[18px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">Owner
                  name</p>
              </div>
              <input
                  class="focus:outline-none mt-[10px] w-full border border-[#DBDBDB] rounded-[4px] pl-2 py-2 placeholder:text-[#676769] placeholder:leading-[16px] placeholder:text-[10px] xl:placeholder:leading-[20px] xl:placeholder:text-[14px]"
                  placeholder="Enter owner name"
                  type="text">
            </div>
            <div class="w-1/4">
              <div class="flex justify-between items-center w-full">
                <p class="text-primaryText leading-[18px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">
                  Degisnation</p>
              </div>
              <input
                  class="focus:outline-none mt-[10px] w-full border border-[#DBDBDB] rounded-[4px] pl-2 py-2 placeholder:text-[#676769] placeholder:leading-[16px] placeholder:text-[10px] xl:placeholder:leading-[20px] xl:placeholder:text-[14px]"
                  placeholder="Enter degisnation"
                  type="text">
            </div>

            <div class="w-1/4">
              <div class="flex justify-between items-center w-full">
                <p class="text-primaryText leading-[18px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">
                  Mobile number</p>
              </div>
              <input
                  class="focus:outline-none mt-[10px] w-full border border-[#DBDBDB] rounded-[4px] pl-2 py-2 placeholder:text-[#676769] placeholder:leading-[16px] placeholder:text-[10px] xl:placeholder:leading-[20px] xl:placeholder:text-[14px]"
                  placeholder="Enter mobile number"
                  type="text">
            </div>
            <div class="w-1/4">
              <div class="flex justify-between items-center w-full">
                <p class="text-primaryText leading-[18px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">
                  Email address</p>
              </div>
              <input
                  class="focus:outline-none mt-[10px] w-full border border-[#DBDBDB] rounded-[4px] pl-2 py-2 placeholder:text-[#676769] placeholder:leading-[16px] placeholder:text-[10px] xl:placeholder:leading-[20px] xl:placeholder:text-[14px]"
                  placeholder="Enter email address"
                  type="text">
            </div>
          </div>
          <div class="p-4 flex items-center gap-x-4 w-full">
            <div class="w-1/4">
              <div class="flex justify-between items-center w-full">
                <p class="text-primaryText leading-[18px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">
                  Password</p>
              </div>
              <input
                  class="focus:outline-none mt-[10px] w-full border border-[#DBDBDB] rounded-[4px] pl-2 py-2 placeholder:text-[#676769] placeholder:leading-[16px] placeholder:text-[10px] xl:placeholder:leading-[20px] xl:placeholder:text-[14px]"
                  placeholder="Enter password"
                  type="text">
            </div>
            <div class="w-1/4">
              <div class="flex justify-between items-center w-full">
                <p class="text-primaryText leading-[18px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">
                  NID number</p>
              </div>
              <input
                  class="focus:outline-none mt-[10px] w-full border border-[#DBDBDB] rounded-[4px] pl-2 py-2 placeholder:text-[#676769] placeholder:leading-[16px] placeholder:text-[10px] xl:placeholder:leading-[20px] xl:placeholder:text-[14px]"
                  placeholder="Enter NID number"
                  type="text">
            </div>

            <div class="w-1/2">
              <div class="flex justify-between items-center w-full">
                <p class="text-primaryText leading-[18px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">
                  Address</p>
              </div>
              <input
                  class="focus:outline-none mt-[10px] w-full border border-[#DBDBDB] rounded-[4px] pl-2 py-2 placeholder:text-[#676769] placeholder:leading-[16px] placeholder:text-[10px] xl:placeholder:leading-[20px] xl:placeholder:text-[14px]"
                  placeholder="Enter address"
                  type="text">
            </div>
          </div>
          <div class="p-4">
            <div class="mt-4 rounded-[4px] border border-corporateBorder pt-3 px-4">
              <div class="flex justify-between w-full">
                <p class="leading-[24px] xl:leading-[28px] text-[18px] xl:text-[20px] font-[600] text-primaryText flex justify-center items-center">
                  Permissions</p>
                <div class="form-group  mt-5">
                  <input id="html" type="checkbox">
                  <label class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[14px] font-[400]"
                         for="html">Give
                    All Permission</label>
                </div>
              </div>
              <hr class="border-t border-corporateBorder mt-[10px]">
              <div class="flex divide-x divide-corporateBorder">
                <div class="w-1/2">
                  <div class="py-[18px] pl-[16px] pr-[46px]">
                    <div class="flex justify-between items-center">
                      <p class="w-[60%] leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px]">Dashboard:</p>
                      <div class="w-[40%] flex justify-between items-center mt-4">
                        <div class="form-group">
                          <input id="read" type="checkbox">
                          <label
                              class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]"
                              for="read">Read</label>
                        </div>
                        <div class="form-group">
                          <input id="write" type="checkbox">
                          <label
                              class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]"
                              for="write">Write</label>
                        </div>
                      </div>
                    </div>
                    <hr class="border-t border-dashed border-corporateBorder mt-[15px]">

                    <div class="flex justify-between items-center">
                      <p class="w-[60%] leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px]">Admin:</p>
                      <div class="w-[40%] flex justify-between items-center mt-4">
                        <div class="form-group">
                          <input id="read" type="checkbox">
                          <label
                              class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]"
                              for="read">Read</label>
                        </div>
                        <div class="form-group">
                          <input id="write" type="checkbox">
                          <label
                              class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]"
                              for="write">Write</label>
                        </div>
                      </div>
                    </div>
                    <hr class="border-t border-dashed border-corporateBorder mt-[15px]">

                    <div class="flex justify-between items-center">
                      <p class="w-[60%] leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px]">Trip copy:</p>
                      <div class="w-[40%] flex justify-between items-center mt-4">
                        <div class="form-group">
                          <input id="read" type="checkbox">
                          <label
                              class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]"
                              for="read">Read</label>
                        </div>
                        <div class="form-group">
                          <input id="write" type="checkbox">
                          <label
                              class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]"
                              for="write">Write</label>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
                <div class="w-1/2">
                  <div class="py-[18px] pl-[16px] pr-[46px]">
                    <div class="flex justify-between items-center">
                      <p class="w-[60%] leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px]">Report:</p>
                      <div class="w-[40%] flex justify-between items-center mt-4">
                        <div class="form-group">
                          <input id="read" type="checkbox">
                          <label
                              class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]"
                              for="read">Read</label>
                        </div>
                        <div class="form-group">
                          <input id="write" type="checkbox">
                          <label
                              class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]"
                              for="write">Write</label>
                        </div>
                      </div>
                    </div>
                    <hr class="border-t border-dashed border-corporateBorder mt-[15px]">

                    <div class="flex justify-between items-center">
                      <p class="w-[60%] leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px]">Company Deploy:</p>
                      <div class="w-[40%] flex justify-between items-center mt-4">
                        <div class="form-group">
                          <input id="read" type="checkbox">
                          <label
                              class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]"
                              for="read">Read</label>
                        </div>
                        <div class="form-group">
                          <input id="write" type="checkbox">
                          <label
                              class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]"
                              for="write">Write</label>
                        </div>
                      </div>
                    </div>
                    <hr class="border-t border-dashed border-corporateBorder mt-[15px]">

                    <div class="flex justify-between items-center">
                      <p class="w-[60%] leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px]">Seat plan edit:</p>
                      <div class="w-[40%] flex justify-between items-center mt-4">
                        <div class="form-group">
                          <input id="read" type="checkbox">
                          <label
                              class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]"
                              for="read">Yes</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr class="mt-[16px] border-t border-corporateBorder">
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
              <button
                  class="flex justify-center items-center text-white leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[600] bg-corporate bg-opacity-30 rounded-full px-[20px] py-[11px] xl:px-[24px] xl:py-[13px]">
                Create company
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
