<template>
  <div class="flex bg-corporateBg">
    <!-- Side Nav bar -->
    <div class="h-screen w-[280px] bg-white border-r border-[#DBDBDB]">
      <div class="flex flex-col justify-between">
        <div class="px-[10px] flex justify-center items-center py-[30px]">
          <img src="@/assets/imgs/Logo.png" alt="" class="w-[66px] h-[32px]">
        </div>
        <div class="px-[10px] overflow-y-auto h-[calc(100vh-150px)]">
          <a class="menu">Dashboard</a>
          <a class="bg-corporate w-full text-white p-1 rounded-sm block cursor-pointer">Bus Company</a>
          <a class="menu">Routes</a>
          <a class="menu">Routes</a>
          <a class="menu">Counter</a>
          <a class="menu">Trips</a>
          <a class="menu">User</a>
          <a class="menu">Agent</a>
          <a class="menu">Migrate Trips</a>
          <a class="menu">Migrate Tickets</a>
          <a class="menu">Trip Expense Configaration</a>
          <a class="dropDownMenu flex justify-center items-center">Reports <span><img src="../assets/svg/down_arrow.svg" alt="" class="w-[12px] h-[7px]"></span></a>
          <a class="dropDownMenu flex justify-center items-center">Invoice <span><img src="../assets/svg/down_arrow.svg" alt="" class="w-[12px] h-[7px]"></span></a>
          <a class="menu">Offer & Promotion</a>
          <a class="dropDownMenu flex justify-center items-center">Action in Bulk <span><img src="../assets/svg/down_arrow.svg" alt="" class="w-[12px] h-[7px]"></span></a>
          <p class="menuSection ">CONFIGARATION</p>
          <a class="menu">Bus</a>
          <a class="menu">Stopage</a>
          <a class="menu">Challan Configaration</a>
          <a class=" py-[8px] w-full text-black leading-[20px] text-[14px] font-[500] block cursor-pointer">Fees</a>
        </div>

        <button class="p-4 flex justify-center items-center gap-x-4 border-t border-[#DBDBDB]">  <img src="../assets/svg/logout.svg" class="h-[16px] w-[16px]" alt=""> Logout </button>

      </div>

    </div>
    <!-- side nav bar end -->
    <div class="h-screen w-full overflow-y-auto bg-[#F7F7F7]">
      <!-- Top nav bar start-->
      <div class="bg-white h-[72px] sticky top-0 border-b border-[#DBDBDB] z-10 px-[32px]">
        <div class="flex justify-between">
          <div class="flex justify-center items-center gap-x-[32px]">
            <div class="flex justify-center items-center gap-x-[10px]">
              <img src="../assets/svg/Back.svg" class="w-[12px] h-[12px]" alt="">
              <p class="text-primaryText leading-[16px] text-[12px] font-[500]">Back</p>
            </div>
            <div class="flex flex-col gap-y-[4px]">
              <p class="leading-[28px] text-[20px] font-[600] text-primaryText">Create Company</p>
              <div class="flex justify-center items-center gap-x-[6px]">
                <p class="text-secondaryText leading-[16px] text-[12px] font-[400]">Bus Company</p>
                <img src="../assets/svg/bgBack.svg" alt="" class="w-1 h-2">
                <p class="text-secondaryText leading-[16px] text-[12px] font-[400]">Add company</p>
              </div>
            </div>
          </div>
          <div class="flex gap-x-[24px] p-4 w-1/2 justify-end items-center pr-2 ">
            <!--            <input type="text" class="w-[270px] h-[40px] border border-[#DBDBDB] placeholder:text-[#4D4D4F] placeholder:text-[14px] leading-[20px] rounded-[4px] pl-8 focus:outline-none" placeholder="PNR or mobile number">-->
            <!--            <img src="../assets/svg/search.svg" class="h-5 w-5 absolute left-[242px]" alt="">-->
            <div class="w-[270px] h-[40px] border border-[#DBDBDB] flex justify-center items-center leading-[20px] rounded-[4px] pl-[9px] overflow-hidden" >
              <img src="../assets/svg/search.svg" class="h-5 w-5" alt="">
              <input type="text" class="outline-none pl-2 placeholder:text-[#4D4D4F] placeholder:text-[14px] placeholder:leading-[20px]" placeholder="PNR or mobile number">
            </div>
            <img src="../assets/person/person1.png" alt="" class="h-[40px] w-[40px] rounded-full">
            <p class="text-[#151414] leading-[24px] text-[16px] font-[500]">Mostafa Mamun Emon</p>
            <img src="../assets/person/downArrow.svg" alt="" class="w-[12px] h-[6px]">
          </div>
        </div>
      </div>
      <!-- top nav bar end -->
      <!-- body start-->
      <div class="px-[30px] py-[24px]">
        <div class="bg-white rounded-[8px]">
          <!--          border-b-->
          <div class=" border-b border-[#DBDBDB]">
            <div class="p-[16px]">
              <p class="text-[#1E88E5] leading-[24px] text-[16px] font-[600]">COMPANY INFORMATION</p>
              <p class="text-primaryText leading-[24px] text-[16px] font-[600] mt-[16px]">Company logo</p>

              <div class="w-[480px] h-[100px] border border-dashed border-[#1E88E5] mt-[10px] rounded-[4px] flex justify-center items-center">
                <div class="flex justify-between w-full items-center pl-[10px] pr-[20px]">
                  <div class="flex">
                    <img src="../assets/logo/main_logo.svg" class="w-[138px] h-[67px]" alt="">
                    <img src="../assets/svg/border-cross.svg" class="w-[20px] h-[20px] mb-16 ml-10" alt="">
                  </div>

                  <input type="file" name="" id="chooseFile" class="hidden">
                  <label for="chooseFile" class="w-[480px] h-[100px] cursor-pointer mt-[10px] rounded-[4px] flex justify-center items-center">
                    <div class="ml-48">
                      <p class="text-[#E0293B] leading-[20px] text-[14px] font-[600] border-b border-[#E0293B]">Replace file</p>
                    </div>
                  </label>
                </div>
              </div>
              <!--          input grid start-->
              <div class="flex gap-x-[16px] justify-center items-center mt-[16px]">
                <div class="w-1/4">
                  <div class="flex justify-between items-center w-full">
                    <p class="text-primaryText leading-[24px] text-[16px] font-[600]">Company name</p>
                    <img src="../assets/svg/smallStar.svg" class="w-[9px] h-[24px]" alt="">
                  </div>
                  <input type="text" class="createNormalInput" placeholder="Enter company name">
                </div>

                <div class="w-1/4">
                  <div class="flex justify-between items-center w-full">
                    <p class="text-primaryText leading-[24px] text-[16px] font-[600]">Different display name</p>
                    <img src="../assets/svg/smallStar.svg" class="w-[9px] h-[24px]" alt="">
                  </div>
                  <input type="text" class="createNormalInput" placeholder="Enter company name">
                </div>

                <div class="w-1/4">
                  <div class="flex justify-between items-center w-full">
                    <p class="text-primaryText leading-[24px] text-[16px] font-[600]">Company mobile number</p>
                    <img src="../assets/svg/smallStar.svg" class="w-[9px] h-[24px]" alt="">
                  </div>
                  <input type="text" class="createNormalInput" placeholder="Enter company name">
                </div>

                <div class="w-1/4">
                  <div class="flex justify-between items-center w-full">
                    <p class="text-primaryText leading-[24px] text-[16px] font-[600]">Contact person</p>
                    <img src="../assets/svg/smallStar.svg" class="w-[9px] h-[24px]" alt="">
                  </div>
                  <input type="text" class="createNormalInput" placeholder="Enter company name">
                </div>
              </div>
              <!--          2nd grid-->
              <div class="flex gap-x-[16px] justify-center items-center mt-[16px]">
                <div class="w-1/4 relative">
                  <p class="text-primaryText leading-[24px] text-[16px] font-[600]">Print type</p>
                  <Dropdown class="w-full p-[1px] mt-[10px]" v-model="selectedCity" :options="cities" optionLabel="name" placeholder="Select a City" />
                </div>

                <div class="w-1/4 relative">
                  <p class="text-primaryText leading-[24px] text-[16px] font-[600]">Print type</p>
                  <Dropdown class="w-full p-[1px] mt-[10px]" v-model="selectedCity" :options="cities" optionLabel="name" placeholder="Select a City" />
                </div>

                <div class="w-1/4 relative">
                  <p class="text-primaryText leading-[24px] text-[16px] font-[600]">Print type</p>
                  <Dropdown class="w-full p-[1px] mt-[10px]" v-model="selectedCity" :options="cities" optionLabel="name" placeholder="Select a City" />
                </div>

                <div class="w-1/4 relative">
                  <p class="text-primaryText leading-[24px] text-[16px] font-[600]">Print type</p>
                  <Dropdown class="w-full p-[1px] mt-[10px]" v-model="selectedCity" :options="cities" optionLabel="name" placeholder="Select a City" />
                </div>
              </div>
              <!--          3rd grid-->
              <div class="flex gap-x-[16px] justify-center items-center mt-[16px]">
                <div class="w-1/4 relative">
                  <p class="text-primaryText leading-[24px] text-[16px] font-[600]">Allow coach details</p>
                  <Dropdown class="w-full p-[1px] mt-[10px]" v-model="selectedCity" :opti6ns="cities" optionLabel="name" placeholder="Select a City" />
                </div>

                <div class="w-1/4 relative">
                  <p class="text-primaryText leading-[24px] text-[16px] font-[600]">Allow farewise report</p>
                  <Dropdown class="w-full p-[1px] mt-[10px]" v-model="selectedCity" :options="cities" optionLabel="name" placeholder="Select a City" />
                </div>

                <div class="w-1/4 relative">
                  <p class="text-primaryText leading-[24px] text-[16px] font-[600]">Allow coachwise trip</p>
                  <Dropdown class="w-full p-[1px] mt-[10px]" v-model="selectedCity" :options="cities" optionLabel="name" placeholder="Select a City" />
                </div>

                <div class="w-1/4 relative">
                  <p class="text-primaryText leading-[24px] text-[16px] font-[600]">Allow refund</p>
                  <Dropdown class="w-full p-[1px] mt-[10px]" v-model="selectedCity" :options="cities" optionLabel="name" placeholder="Select a City" />
                </div>
              </div>
              <!--          4th grid-->
              <div class="flex gap-x-[16px] justify-center items-center mt-[16px]">
                <div class="w-1/4 relative">
                  <p class="text-primaryText leading-[24px] text-[16px] font-[600]">Allow due</p>
                  <Dropdown class="w-full p-[1px] mt-[10px]" v-model="selectedCity" :options="cities" optionLabel="name" placeholder="Select a City" />
                </div>

                <div class="w-1/4 relative">
                  <p class="text-primaryText leading-[24px] text-[16px] font-[600]">Allow referral</p>
                  <Dropdown class="w-full p-[1px] mt-[10px]" v-model="selectedCity" :options="cities" optionLabel="name" placeholder="Select a City" />
                </div>

                <div class="w-1/4 relative">
                  <p class="text-primaryText leading-[24px] text-[16px] font-[600]">Reservation status</p>
                  <Dropdown class="w-full p-[1px] mt-[10px]" v-model="selectedCity" :options="cities" optionLabel="name" placeholder="Select a City" />
                </div>

                <div class="w-1/4 relative">
                  <p class="text-primaryText leading-[24px] text-[16px] font-[600]">Allow discount</p>
                  <Dropdown class="w-full p-[1px] mt-[10px]" v-model="selectedCity" :options="cities" optionLabel="name" placeholder="Select a City" />
                </div>
              </div>
              <!--          5th grid-->
              <div class="flex gap-x-[16px] justify-center items-center mt-[16px]">
                <div class="w-1/4 relative">
                  <p class="text-primaryText leading-[24px] text-[16px] font-[600]">Allow net pay edit</p>
                  <Dropdown class="w-full p-[1px] mt-[10px]" v-model="selectedCity" :options="cities" optionLabel="name" placeholder="Select a City" />
                </div>
                <div class="w-1/4">
                  <div class="flex justify-between items-center w-full">
                    <p class="text-primaryText leading-[24px] text-[16px] font-[600]">Allowable goods weight</p>
                  </div>
                  <input type="text" class="focus:outline-none mt-[10px] w-full border border-[#DBDBDB] rounded-[4px] pl-2 py-2 placeholder:text-[#676769] placeholder:leading-[20px] placeholder:text-[14px]" placeholder="Enter company name">
                </div>

                <div class="w-1/4">
                  <div class="flex justify-between items-center w-full">
                    <p class="text-primaryText leading-[24px] text-[16px] font-[600]">Overweight goods charge per KG</p>
                  </div>
                  <input type="text" class="focus:outline-none mt-[10px] w-full border border-[#DBDBDB] rounded-[4px] pl-2 py-2 placeholder:text-[#676769] placeholder:leading-[20px] placeholder:text-[14px]" placeholder="Enter company name">
                </div>



                <div class="w-1/4 relative">
                  <p class="text-primaryText leading-[24px] text-[16px] font-[600]">Allow qouta</p>
                  <Dropdown class="w-full p-[1px] mt-[10px]" v-model="selectedCity" :options="cities" optionLabel="name" placeholder="Select a City" />
                </div>
              </div>
              <!--          6th grid-->
              <div class="flex gap-x-[16px] justify-center items-center mt-[16px]">
                <div class="w-1/4 relative">
                  <p class="text-primaryText leading-[24px] text-[16px] font-[600]">Allow digital ticketing</p>
                  <Dropdown class="w-full p-[1px] mt-[10px]" v-model="selectedCity" :options="cities" optionLabel="name" placeholder="Select a City" />
                </div>

                <div class="w-1/4 relative">
                  <p class="text-primaryText leading-[24px] text-[16px] font-[600]">Multiple owner (if any)</p>
                  <Dropdown class="w-full p-[1px] mt-[10px]" v-model="selectedCity" :options="cities" optionLabel="name" placeholder="Select a City" />
                </div>

                <div class="w-1/4">
                  <div class="flex justify-between items-center w-full">
                    <p class="text-primaryText leading-[24px] text-[16px] font-[600]">Complain number</p>
                  </div>
                  <input type="text" class="focus:outline-none mt-[10px] w-full border border-[#DBDBDB] rounded-[4px] pl-2 py-2 placeholder:text-[#676769] placeholder:leading-[20px] placeholder:text-[14px]" placeholder="Enter company name">
                </div>


                <div class="w-1/4">
                  <div class="flex justify-between items-center w-full">
                    <p class="text-primaryText leading-[24px] text-[16px] font-[600]">Facebook link</p>
                  </div>
                  <input type="text" class="focus:outline-none mt-[10px] w-full border border-[#DBDBDB] rounded-[4px] pl-2 py-2 placeholder:text-[#676769] placeholder:leading-[20px] placeholder:text-[14px]" placeholder="Enter company name">
                </div>
              </div>
              <!--          7th grid-->
              <div class="flex gap-x-[16px] justify-center items-center mt-[16px]">
                <div class="w-1/4">
                  <p class="text-primaryText leading-[24px] text-[16px] font-[600]">Auto renewal trips</p>
                  <div class="w-full mt-[10px] h-[40px] border border-[#DBDBDB] flex justify-between items-center leading-[20px] rounded-[4px] overflow-hidden divide-x" >
                    <div class="flex justify-between items-center">
                      <div class="flex justify-between items-center w-[270px]">
                        <select class="form-select appearance-none w-full block px-3 pl-[22px] py-1.5 text-base bg-white rounded focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example">
                          <option selected>3</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                        <img src="../assets/svg/down_arrow.svg" class="w-[12px] h-5 ml-10" alt="">
                      </div>
                    </div>
                    <p class="p-4 text-[#676769] leading-[20px] text-[14px] font-[400]">Days</p>
                  </div>

                </div>

                <div class="w-1/4">
                  <p class="text-primaryText leading-[24px] text-[16px] font-[600]">Trail start date</p>
                  <div class="w-full h-[40px] border border-[#DBDBDB] flex justify-between items-center mt-[10px] leading-[20px] rounded-[4px] px-[20px] xl:px-[8px] overflow-hidden" >
                    <input type="text" class="outline-none pl-2 placeholder:text-[#4D4D4F] placeholder:text-[14px] placeholder:leading-[20px]" placeholder="Select trail end date">
                    <img src="../assets/svg/count2.svg" class="h-5 w-5" alt="">
                  </div>
                </div>

                <div class="w-1/4">
                  <p class="text-primaryText leading-[24px] text-[16px] font-[600]">Trail end date</p>
                  <div class="w-full h-[40px] border border-[#DBDBDB] flex justify-between items-center mt-[10px] leading-[20px] rounded-[4px] px-[20px] xl:px-[8px] overflow-hidden" >
                    <input type="text" class="outline-none pl-2 placeholder:text-[#4D4D4F] placeholder:text-[14px] placeholder:leading-[20px]" placeholder="Select trail end date">
                    <img src="../assets/svg/count2.svg" class="h-5 w-5" alt="">
                  </div>
                </div>


                <div class="w-1/4">
                  <p class="text-primaryText leading-[24px] text-[16px] font-[600]">Online ticket commission</p>
                  <div class="w-full mt-[10px] h-[40px] border border-[#DBDBDB] flex justify-between items-center leading-[20px] rounded-[4px] overflow-hidden divide-x" >
                    <p class="p-4 text-[#676769] leading-[20px] text-[14px] font-[400] w-1/2">Days</p>
                    <div class="p-2">
                      <div class="flex justify-between items-center w-1/2 px-4 bg-[#F7F7F7]">
                        <select class="form-select appearance-none bg-[#F7F7F7] px-3 py-1 text-base bg-white rounded focus:outline-none" aria-label="Default select example">
                          <option selected class="leading-[20px] text-[14px] font-[500]">Percentage %</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                        <img src="../assets/svg/down_arrow.svg" class="w-[12px] h-5" alt="">
                      </div>
                    </div>

                  </div>

                </div>
              </div>
              <!--          8th grid-->
              <div class="flex gap-x-[16px]  items-center mt-[16px]">
                <div class="w-1/4 relative">
                  <p class="text-primaryText leading-[24px] text-[16px] font-[600]">Challan type</p>
                  <Dropdown class="w-full p-[1px] mt-[10px]" v-model="selectedCity" :opti6ns="cities" optionLabel="name" placeholder="Select a City" />
                </div>

                <div class="w-1/4 relative">
                  <p class="text-primaryText leading-[24px] text-[16px] font-[600]">Ticket holding time</p>
                  <Dropdown class="w-full p-[1px] mt-[10px]" v-model="selectedCity" :options="cities" optionLabel="name" placeholder="Select a City" />
                </div>

              </div>
            </div>

          </div>
          <!--          2nd section start-->
          <div class="border-b border-[#DBDBDB]">
            <div class="p-[16px]">
              <p class="text-[#1E88E5] leading-[24px] text-[16px] font-[600]">TRIP PERMISSION</p>
              <div class="mt-[16px] flex gap-x-[16px] items-center">
                <div class="w-1/4">
                  <p class="text-primaryText leading-[24px] text-[16px] font-[600]">Default trip order</p>
                  <div class="flex justify-center items-center mt-[10px]">
                    <button class="w-1/2 bg-corporate text-white leading-[20px] text-[14px] flex justify-center items-center font-[400] h-[40px] rounded-l-[4px]">Ascending</button>
                    <button class="w-1/2 bg-white text-[#676769] leading-[20px] text-[14px] border border-[#DBDBDB] flex justify-center items-center font-[400] h-[40px] rounded-r-[4px]">Descending</button>
                  </div>
                </div>
                <div class="w-1/4">
                  <p class="text-primaryText leading-[24px] text-[16px] font-[600]">Time to show in trip list</p>
                  <Dropdown class="w-full p-[1px] mt-[10px]" v-model="selectedCity" :options="cities" optionLabel="name" placeholder="Only trip time" />
                </div>

              </div>
            </div>
          </div>

          <!--          3rd section start-->
          <div class="border-b border-[#DBDBDB]">
            <div class="p-[16px]">
              <p class="text-[#1E88E5] leading-[24px] text-[16px] font-[600]">USER TYPE</p>
              <div class="mt-[21px] flex gap-x-[16px] items-center">
                <button class="createFilledActiveTypeButton">Owner</button>
                <button class="createFilledActiveTypeButton">Company admin</button>
                <button class="createFilledActiveTypeButton">Accounts department</button>
                <button class="createUserTypeButton">Counter manager</button>
                <button class="createUserTypeButton">Manager</button>
              </div>
              <div class="mt-[24px] flex gap-x-[16px] items-center">
                <input type="text" class="focus:outline-none w-1/4 mt-[10px] w-full border border-primaryText rounded-[4px] pl-2 py-2 placeholder:text-primaryText placeholder:leading-[20px] placeholder:text-[14px] " placeholder="Audit department">
                <button class="flex justify-center items-center bg-[#1E88E5] mt-1 text-white leading-[20px] text-[14px] font-[400] border border-corporateBorder rounded-full px-[24px] py-[12px]">Add role</button>
              </div>

            </div>
          </div>
          <!--          4th section start-->
          <div class="border-b border-[#DBDBDB]">
            <div class="p-[16px]">
              <p class="text-[#1E88E5] leading-[24px] text-[16px] font-[600]">MULTIPLE OWNER 1</p>
              <div class="flex gap-x-[16px] items-center border-b border-dashed border-corporateBorder py-[16px]">
                <div class="w-1/4">
                  <p class="text-primaryText leading-[24px] text-[16px] font-[600]">Multiple owner name</p>
                  <input type="text" class="createNormalInputActive" placeholder="Enter company owner details">
                </div>

                <div class="w-1/4">
                  <p class="text-primaryText leading-[24px] text-[16px] font-[600]">Multiple owner number</p>
                  <input type="text" class="createNormalInputActive" placeholder="Enter company email address">
                </div>

                <div class="w-1/4">
                  <p class="text-primaryText leading-[24px] text-[16px] font-[600]">Multiple owner degisnation</p>
                  <input type="text" class="createNormalInputActive" placeholder="Enter company address">
                </div>
              </div>

              <div class="w-full border border-dashed border-[#1E88E5] flex justify-center items-center bg-[#EFF7FD] rounded-[4px]">
                <div class="flex justify-center items-center gap-x-[11px] py-[12px]">
                  <img src="../assets/svg/createPlus.svg" class="w-[10px] h-[10px]" alt="">
                  <p class="text-primaryText font-[600] leading-[20px] text-[14px]">Add another company owner</p>
                </div>
              </div>
            </div>
          </div>
          <!--          5th section start-->
          <div class="border-b border-[#DBDBDB]">
            <div class="p-[16px]">
              <p class="text-[#1E88E5] leading-[24px] text-[16px] font-[600]">SMS SERVICES</p>
              <div class="grid grid-cols-4 gap-x-[16px] items-center">
                <div class="mt-[16px]">
                  <p class="text-primaryText leading-[24px] text-[16px] font-[600]">Required phone</p>
                  <Dropdown class="w-full p-[1px] mt-[10px]" v-model="selectedCity" :opti6ns="cities" optionLabel="name" placeholder="Select a City" />
                </div>

                <div class="mt-[16px]">
                  <p class="text-primaryText leading-[24px] text-[16px] font-[600]">Allow SMS</p>
                  <Dropdown class="w-full p-[1px] mt-[10px]" v-model="selectedCity" :options="cities" optionLabel="name" placeholder="Select a City" />
                </div>

                <div class=" mt-[16px]">
                    <p class="text-primaryText leading-[24px] text-[16px] font-[600]">SMS user</p>
                  <input type="text" class="createNormalInput" placeholder="Enter company name">
                </div>

                <div class=" mt-[16px]">
                  <p class="text-primaryText leading-[24px] text-[16px] font-[600]">SMS API key</p>
                  <input type="text" class="createNormalInput" placeholder="Enter mobile number">
                </div>

                <div class=" mt-[16px]">
                  <p class="text-primaryText leading-[24px] text-[16px] font-[600]">SMS Sender ID</p>
                  <input type="text" class="createNormalInput" placeholder="Enter sender id ">
                </div>
              </div>
              <hr class="border-b border-dashed border-corporateBorder mt-[16px]">

              <div class="grid grid-cols-3 gap-x-[16px]">
                  <div class="border border-corporateBorder rounded-[4px] mt-[16px]">
                      <div class="bg-[#FDE5E2] pl-[11px] pr-[8px] pt-[16px] pb-[16px]">
                        <div class="flex justify-between">
                          <div class="form-group">
                            <input type="checkbox" id="html">
                            <label for="html" class="text-primaryText leading-[24px] text-[16px] font-[600]">Sold ticket</label>
                          </div>

                          <div class="form-group">
                            <input type="checkbox" id="unicode">
                            <label for="unicode" class="text-primaryText leading-[24px] text-[16px] font-[600]">Unicode</label>
                          </div>
                        </div>
                      </div>
                    <div class="px-[8px] py-[10px]">
                      <p class="text-primaryText leading-[20px] text-[14px] font-[600]">SMS format</p>
                      <textarea name="sms" id="" cols="30" rows="10" class="w-full mt-[10px] border border-corporateBorder rounded-[4px] p-2 placeholder:text-[14px] placeholder:leading-[20px] placeholder:font-[400] focus:outline-none" placeholder="Enter SMS"></textarea>
                    </div>

                    <div class="bg-[#F7F7F7] mt-[10px]">
                        <div class="px-[8px] py-[10px]">
                            <div class="flex justify-between">
                              <p class="text-primaryText leading-[20px] text-[14px] font-[600]">Example:</p>
                              <div class="form-group">
                                <input type="checkbox" id="format">
                                <label for="format" class="text-primaryText leading-[24px] text-[16px] font-[600]">Use this format</label>
                              </div>
                            </div>
                          <p class="mt-[16px] leading-[20px] text-[14px] font-[400]">{{`Dear <passengerName>, your ticket is successfully confirmed with <company> from <boarding>, <from> to <to>. PNR: <pnr>, Coach: <coach>, seats: <seats>, fare: <fare>. Your departure is at <departureDateTime>.`}}</p>
                        </div>
                    </div>



                  </div>
                <div class="border border-corporateBorder rounded-[4px] mt-[16px]">
                  <div class="bg-[#FDE5E2] pl-[11px] pr-[8px] pt-[16px] pb-[16px]">
                    <div class="flex justify-between">
                      <div class="form-group">
                        <input type="checkbox" id="html">
                        <label for="html" class="text-primaryText leading-[24px] text-[16px] font-[600]">Sold ticket</label>
                      </div>

                      <div class="form-group">
                        <input type="checkbox" id="unicode">
                        <label for="unicode" class="text-primaryText leading-[24px] text-[16px] font-[600]">Unicode</label>
                      </div>
                    </div>
                  </div>
                  <div class="px-[8px] py-[10px]">
                    <p class="text-primaryText leading-[20px] text-[14px] font-[600]">SMS format</p>
                    <textarea name="sms" id="" cols="30" rows="10" class="w-full mt-[10px] border border-corporateBorder rounded-[4px] p-2 placeholder:text-[14px] placeholder:leading-[20px] placeholder:font-[400] focus:outline-none" placeholder="Enter SMS"></textarea>
                  </div>

                  <div class="bg-[#F7F7F7] mt-[10px]">
                    <div class="px-[8px] py-[10px]">
                      <div class="flex justify-between">
                        <p class="text-primaryText leading-[20px] text-[14px] font-[600]">Example:</p>
                        <div class="form-group">
                          <input type="checkbox" id="format">
                          <label for="format" class="text-primaryText leading-[24px] text-[16px] font-[600]">Use this format</label>
                        </div>
                      </div>
                      <p class="mt-[16px] leading-[20px] text-[14px] font-[400]">{{`Dear <passengerName>, your ticket is successfully confirmed with <company> from <boarding>, <from> to <to>. PNR: <pnr>, Coach: <coach>, seats: <seats>, fare: <fare>. Your departure is at <departureDateTime>.`}}</p>
                    </div>
                  </div>



                </div>
                <div class="border border-corporateBorder rounded-[4px] mt-[16px]">
                  <div class="bg-[#FDE5E2] pl-[11px] pr-[8px] pt-[16px] pb-[16px]">
                    <div class="flex justify-between">
                      <div class="form-group">
                        <input type="checkbox" id="html">
                        <label for="html" class="text-primaryText leading-[24px] text-[16px] font-[600]">Sold ticket</label>
                      </div>

                      <div class="form-group">
                        <input type="checkbox" id="unicode">
                        <label for="unicode" class="text-primaryText leading-[24px] text-[16px] font-[600]">Unicode</label>
                      </div>
                    </div>
                  </div>
                  <div class="px-[8px] py-[10px]">
                    <p class="text-primaryText leading-[20px] text-[14px] font-[600]">SMS format</p>
                    <textarea name="sms" id="" cols="30" rows="10" class="w-full mt-[10px] border border-corporateBorder rounded-[4px] p-2 placeholder:text-[14px] placeholder:leading-[20px] placeholder:font-[400] focus:outline-none" placeholder="Enter SMS"></textarea>
                  </div>

                  <div class="bg-[#F7F7F7] mt-[10px]">
                    <div class="px-[8px] py-[10px]">
                      <div class="flex justify-between">
                        <p class="text-primaryText leading-[20px] text-[14px] font-[600]">Example:</p>
                        <div class="form-group">
                          <input type="checkbox" id="format">
                          <label for="format" class="text-primaryText leading-[24px] text-[16px] font-[600]">Use this format</label>
                        </div>
                      </div>
                      <p class="mt-[16px] leading-[20px] text-[14px] font-[400]">{{`Dear <passengerName>, your ticket is successfully confirmed with <company> from <boarding>, <from> to <to>. PNR: <pnr>, Coach: <coach>, seats: <seats>, fare: <fare>. Your departure is at <departureDateTime>.`}}</p>
                    </div>
                  </div>



                </div>
                <div class="border border-corporateBorder rounded-[4px] mt-[16px]">
                  <div class="bg-[#FDE5E2] pl-[11px] pr-[8px] pt-[16px] pb-[16px]">
                    <div class="flex justify-between">
                      <div class="form-group">
                        <input type="checkbox" id="html">
                        <label for="html" class="text-primaryText leading-[24px] text-[16px] font-[600]">Sold ticket</label>
                      </div>

                      <div class="form-group">
                        <input type="checkbox" id="unicode">
                        <label for="unicode" class="text-primaryText leading-[24px] text-[16px] font-[600]">Unicode</label>
                      </div>
                    </div>
                  </div>
                  <div class="px-[8px] py-[10px]">
                    <p class="text-primaryText leading-[20px] text-[14px] font-[600]">SMS format</p>
                    <textarea name="sms" id="" cols="30" rows="10" class="w-full mt-[10px] border border-corporateBorder rounded-[4px] p-2 placeholder:text-[14px] placeholder:leading-[20px] placeholder:font-[400] focus:outline-none" placeholder="Enter SMS"></textarea>
                  </div>

                  <div class="bg-[#F7F7F7] mt-[10px]">
                    <div class="px-[8px] py-[10px]">
                      <div class="flex justify-between">
                        <p class="text-primaryText leading-[20px] text-[14px] font-[600]">Example:</p>
                        <div class="form-group">
                          <input type="checkbox" id="format">
                          <label for="format" class="text-primaryText leading-[24px] text-[16px] font-[600]">Use this format</label>
                        </div>
                      </div>
                      <p class="mt-[16px] leading-[20px] text-[14px] font-[400]">{{`Dear <passengerName>, your ticket is successfully confirmed with <company> from <boarding>, <from> to <to>. PNR: <pnr>, Coach: <coach>, seats: <seats>, fare: <fare>. Your departure is at <departureDateTime>.`}}</p>
                    </div>
                  </div>



                </div>
                <div class="border border-corporateBorder rounded-[4px] mt-[16px]">
                  <div class="bg-[#FDE5E2] pl-[11px] pr-[8px] pt-[16px] pb-[16px]">
                    <div class="flex justify-between">
                      <div class="form-group">
                        <input type="checkbox" id="html">
                        <label for="html" class="text-primaryText leading-[24px] text-[16px] font-[600]">Sold ticket</label>
                      </div>

                      <div class="form-group">
                        <input type="checkbox" id="unicode">
                        <label for="unicode" class="text-primaryText leading-[24px] text-[16px] font-[600]">Unicode</label>
                      </div>
                    </div>
                  </div>
                  <div class="px-[8px] py-[10px]">
                    <p class="text-primaryText leading-[20px] text-[14px] font-[600]">SMS format</p>
                    <textarea name="sms" id="" cols="30" rows="10" class="w-full mt-[10px] border border-corporateBorder rounded-[4px] p-2 placeholder:text-[14px] placeholder:leading-[20px] placeholder:font-[400] focus:outline-none" placeholder="Enter SMS"></textarea>
                  </div>

                  <div class="bg-[#F7F7F7] mt-[10px]">
                    <div class="px-[8px] py-[10px]">
                      <div class="flex justify-between">
                        <p class="text-primaryText leading-[20px] text-[14px] font-[600]">Example:</p>
                        <div class="form-group">
                          <input type="checkbox" id="format">
                          <label for="format" class="text-primaryText leading-[24px] text-[16px] font-[600]">Use this format</label>
                        </div>
                      </div>
                      <p class="mt-[16px] leading-[20px] text-[14px] font-[400]">{{`Dear <passengerName>, your ticket is successfully confirmed with <company> from <boarding>, <from> to <to>. PNR: <pnr>, Coach: <coach>, seats: <seats>, fare: <fare>. Your departure is at <departureDateTime>.`}}</p>
                    </div>
                  </div>



                </div>
              </div>
            </div>
          </div>
          <!--          6th section start-->
          <div class="border-b-2 border-[#DBDBDB]">
            <div class="p-[16px]">
              <div class="border-b border-dashed border-corporateBorder py-[16px]">
                <p class="text-primaryText leading-[24px] text-[16px] font-[600]">Terms & condition</p>
                <textarea name="" id="" cols="30" rows="10" class="w-full mt-[18px] border border-corporateBorder rounded-[4px] p-[8px] focus:outline-none placeholder:text-[#676769] placeholder:leading-[20px] placeholder:text-[14px]" placeholder="Enter terms & condition"></textarea>
                <p class="text-[#676769] leading-[16px] text-[12px] font-[400] mt-[8px]">*Max 500 charecters</p>
              </div>

              <div class="border-b border-dashed border-corporateBorder py-[16px]">
                <p class="text-primaryText leading-[24px] text-[16px] font-[600]">Luguage policy</p>
                <textarea name="" id="" cols="30" rows="10" class="w-full mt-[18px] border border-corporateBorder rounded-[4px] p-[8px] focus:outline-none placeholder:text-[#676769] placeholder:leading-[20px] placeholder:text-[14px]" placeholder="Enter luguage policy"></textarea>
                <p class="text-[#676769] leading-[16px] text-[12px] font-[400] mt-[8px]">*Max 500 charecters</p>
              </div>


              <p class="text-primaryText leading-[24px] text-[16px] font-[600] mt-[16px]">Cancellation policy</p>
              <textarea name="" id="" cols="30" rows="10" class="w-full mt-[18px] border border-corporateBorder rounded-[4px] p-[8px] focus:outline-none placeholder:text-[#676769] placeholder:leading-[20px] placeholder:text-[14px]" placeholder="Enter cancellation policy"></textarea>
              <p class="text-[#676769] leading-[16px] text-[12px] font-[400] mt-[8px]">*Max 500 charecters</p>

            </div>
          </div>

          <div class="px-[16px] py-[20px] w-full flex justify-between items-center">
            <div class="flex gap-x-[16px] items-center">
              <p class="text-primaryText font-[600] leading-[24px] text-[16px] ">Status</p>
              <div class="flex justify-center items-center">
                <button class="bg-[#48A43F] w-[110px] text-white leading-[20px] text-[14px] flex justify-center items-center font-[400] h-[40px] rounded-l-[4px]">Active</button>
                <button class="bg-[#F7F7F7] w-[110px] text-primaryText leading-[20px] text-[14px] border border-[#DBDBDB] flex justify-center items-center font-[400] h-[40px] rounded-r-[4px]">Inactive</button>
              </div>
            </div>
            <button class="flex justify-center items-center text-white leading-[20px] text-[14px] font-[600] bg-corporate rounded-full px-[24px] py-[13px]">Create company</button>
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
.p-dropdown-panel .p-dropdown-items .p-dropdown-item:not(:last-child), .p-dropdown-panel .p-dropdown-items .p-dropdown-item:not(:last-child):hover{
  border-bottom: 1px dotted #DBDBDB;
}

/*checkbox*/


.form-group {
  display: block;
  margin-bottom: 15px;
}

.form-group input {
  padding: 0;
  height: 18px;
  width: 18px;
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
        {name: 'New York', code: 'NY'},
        {name: 'Rome', code: 'RM'},
        {name: 'London', code: 'LDN'},
        {name: 'Istanbul', code: 'IST'},
        {name: 'Paris', code: 'PRS'}
      ]
    }
  }

}
</script>



