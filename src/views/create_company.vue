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
                Create Company</p>
              <div class="flex justify-center items-center gap-x-[6px]">
                <p class="text-secondaryText leading-[12px] text-[8px] xl:leading-[16px] xl:text-[12px] font-[400]">Bus
                  Company</p>
                <img alt="" class="w-1 h-2" src="../assets/svg/bgBack.svg">
                <p class="text-secondaryText leading-[12px] text-[8px] xl:leading-[16px] xl:text-[12px] font-[400]">Add
                  company</p>
                <img alt="" class="w-1 h-2" src="../assets/svg/bgBack.svg">
                <p class="text-secondaryText leading-[12px] text-[8px] xl:leading-[16px] xl:text-[12px] font-[400]">Desh
                  Travels Limited</p>
                <img alt="" class="w-1 h-2" src="../assets/svg/bgBack.svg">
                <p class="text-secondaryText leading-[12px] text-[8px] xl:leading-[16px] xl:text-[12px] font-[400]">
                  Manage</p>
                <img alt="" class="w-1 h-2" src="../assets/svg/bgBack.svg">
                <p class="text-secondaryText leading-[12px] text-[8px] xl:leading-[16px] xl:text-[12px] font-[400]">
                  Owner</p>
              </div>
            </div>
          </div>
          <div class="flex gap-x-[24px] p-4 w-1/2 justify-end items-center pr-2 ">
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
        <div class="bg-white rounded-[8px]">
          <!--          border-b-->
          <div class=" border-b border-[#DBDBDB]">
            <div class="p-[16px]">
              <p class="text-corporateSecondaryBlue leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">
                COMPANY INFORMATION</p>
              <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600] mt-[16px]">
                Company logo</p>

              <div>
                <input id="chooseFile" class="hidden" name="" type="file">
                <label class="w-[480px] h-[100px] cursor-pointer border border-dashed border-corporateSecondaryBlue mt-[10px] rounded-[4px] flex justify-center items-center"
                       for="chooseFile">
                  <div class="flex gap-x-[8px]">
                    <img alt="" class="w-[18px] h-[15px]" src="../assets/svg/file.svg">
                    <p class="text-corporateSecondaryBlue leading-[20px] text-[14px] font-[400]">Upload company logo
                      file</p>
                    <p class="text-corporateSecondaryBlue leading-[20px] text-[14px] font-[400] border-b border-corporateSecondaryBlue">
                      Browse file</p>
                  </div>
                </label>
              </div>
              <!--          input grid start-->
              <div class="flex gap-x-[16px] justify-center items-center mt-[16px]">
                <div class="w-1/4">
                  <div class="flex justify-between items-center w-full">
                    <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">
                      Company name</p>
                    <img alt="" class="w-[9px] h-[24px]" src="../assets/svg/smallStar.svg">
                  </div>
                  <input class="createNormalInput" placeholder="Enter company name" type="text">
                </div>

                <div class="w-1/4">
                  <div class="flex justify-between items-center w-full">
                    <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">
                      Different display name</p>
                    <img alt="" class="w-[9px] h-[24px]" src="../assets/svg/smallStar.svg">
                  </div>
                  <input class="createNormalInput" placeholder="Enter different company name" type="text">
                </div>

                <div class="w-1/4">
                  <div class="flex justify-between items-center w-full">
                    <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">
                      Company mobile number</p>
                    <img alt="" class="w-[9px] h-[24px]" src="../assets/svg/smallStar.svg">
                  </div>
                  <input class="createNormalInput" placeholder="Enter company mobile name" type="text">
                </div>

                <div class="w-1/4">
                  <div class="flex justify-between items-center w-full">
                    <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">
                      Contact person</p>
                    <img alt="" class="w-[9px] h-[24px]" src="../assets/svg/smallStar.svg">
                  </div>
                  <input class="createNormalInput" placeholder="Enter contact person" type="text">
                </div>
              </div>
              <!--          2nd grid-->
              <div class="flex gap-x-[16px] justify-center items-center mt-[16px]">
                <div class="w-1/4 relative">
                  <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">
                    Print type</p>
                  <Dropdown v-model="selectedCity" :options="cities" class="w-full py-[4px] mt-[10px]"
                            optionLabel="name" placeholder="Select print type"/>
                </div>

                <div class="w-1/4 relative">
                  <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">
                    Max seat per ticekt</p>
                  <Dropdown v-model="selectedCity" :options="cities" class="w-full py-[4px] mt-[10px]"
                            optionLabel="name" placeholder="Enter max seat per ticket"/>
                </div>

                <div class="w-1/4 relative">
                  <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">
                    Fare type</p>
                  <Dropdown v-model="selectedCity" :options="cities" class="w-full py-[4px] mt-[10px]"
                            optionLabel="name" placeholder="Select fare type"/>
                </div>

                <div class="w-1/4 relative">
                  <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">
                    Allow pass</p>
                  <Dropdown v-model="selectedCity" :options="cities" class="w-full py-[4px] mt-[10px]"
                            optionLabel="name" placeholder="Select option"/>
                </div>
              </div>
              <!--          3rd grid-->
              <div class="flex gap-x-[16px] justify-center items-center mt-[16px]">
                <div class="w-1/4 relative">
                  <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">
                    Allow coach details</p>
                  <Dropdown v-model="selectedCity" :opti6ns="cities" class="w-full py-[4px] mt-[10px]"
                            optionLabel="name" placeholder="Select option"/>
                </div>

                <div class="w-1/4 relative">
                  <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">
                    Allow farewise report</p>
                  <Dropdown v-model="selectedCity" :options="cities" class="w-full py-[4px] mt-[10px]"
                            optionLabel="name" placeholder="Select option"/>
                </div>

                <div class="w-1/4 relative">
                  <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">
                    Allow coachwise trip</p>
                  <Dropdown v-model="selectedCity" :options="cities" class="w-full py-[4px] mt-[10px]"
                            optionLabel="name" placeholder="Select option"/>
                </div>

                <div class="w-1/4 relative">
                  <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">
                    Allow refund</p>
                  <Dropdown v-model="selectedCity" :options="cities" class="w-full py-[4px] mt-[10px]"
                            optionLabel="name" placeholder="Select option"/>
                </div>
              </div>
              <!--          4th grid-->
              <div class="flex gap-x-[16px] justify-center items-center mt-[16px]">
                <div class="w-1/4 relative">
                  <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">
                    Allow due</p>
                  <Dropdown v-model="selectedCity" :options="cities" class="w-full py-[4px] mt-[10px]"
                            optionLabel="name" placeholder="Select option"/>
                </div>

                <div class="w-1/4 relative">
                  <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">
                    Allow referral</p>
                  <Dropdown v-model="selectedCity" :options="cities" class="w-full py-[4px] mt-[10px]"
                            optionLabel="name" placeholder="Select option"/>
                </div>

                <div class="w-1/4 relative">
                  <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">
                    Reservation status</p>
                  <Dropdown v-model="selectedCity" :options="cities" class="w-full py-[4px] mt-[10px]"
                            optionLabel="name" placeholder="Select option"/>
                </div>

                <div class="w-1/4 relative">
                  <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">
                    Allow discount</p>
                  <Dropdown v-model="selectedCity" :options="cities" class="w-full py-[4px] mt-[10px]"
                            optionLabel="name" placeholder="Select option"/>
                </div>
              </div>
              <!--          5th grid-->
              <div class="flex gap-x-[16px] justify-center items-center mt-[16px]">
                <div class="w-1/4">
                  <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">
                    Allow net pay edit</p>
                  <Dropdown v-model="selectedCity" :options="cities" class="w-full py-[4px] mt-[10px]"
                            optionLabel="name" placeholder="Select option"/>
                </div>
                <div class="w-1/4">
                  <div class="flex justify-between items-center w-full">
                    <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">
                      Allowable goods weight</p>
                  </div>
                  <input class="focus:outline-none mt-[10px] w-full border border-[#DBDBDB] rounded-[4px] pl-2 py-2 placeholder:text-[#676769] placeholder:leading-[20px] placeholder:text-[14px]"
                         placeholder="Enter allowable goods weight"
                         type="text">
                </div>

                <div class="w-1/4">
                  <div class="flex justify-between items-center w-full">
                    <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">
                      Overweight goods charge per KG</p>
                  </div>
                  <input class="focus:outline-none mt-[10px] w-full border border-[#DBDBDB] rounded-[4px] pl-2 py-2 placeholder:text-[#676769] placeholder:leading-[20px] placeholder:text-[14px]"
                         placeholder="Enter overweight goods charge per kg"
                         type="text">
                </div>


                <div class="w-1/4 relative">
                  <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">
                    Allow qouta</p>
                  <Dropdown v-model="selectedCity" :options="cities" class="w-full py-[4px] mt-[10px]"
                            optionLabel="name" placeholder="Select option"/>
                </div>
              </div>
              <!--          6th grid-->
              <div class="flex gap-x-[16px] justify-center items-center mt-[16px]">
                <div class="w-1/4 relative">
                  <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">
                    Allow digital ticketing</p>
                  <Dropdown v-model="selectedCity" :options="cities" class="w-full py-[4px] mt-[10px]"
                            optionLabel="name" placeholder="Select option"/>
                </div>

                <div class="w-1/4 relative">
                  <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">
                    Multiple owner (if any)</p>
                  <Dropdown v-model="selectedCity" :options="cities" class="w-full py-[4px] mt-[10px]"
                            optionLabel="name" placeholder="Select option"/>
                </div>

                <div class="w-1/4">
                  <div class="flex justify-between items-center w-full">
                    <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">
                      Complain number</p>
                  </div>
                  <input class="focus:outline-none mt-[10px] w-full border border-[#DBDBDB] rounded-[4px] pl-2 py-2 placeholder:text-[#676769] placeholder:leading-[20px] placeholder:text-[14px]"
                         placeholder="Enter complain number"
                         type="text">
                </div>


                <div class="w-1/4">
                  <div class="flex justify-between items-center w-full">
                    <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">
                      Facebook link</p>
                  </div>
                  <input class="focus:outline-none mt-[10px] w-full border border-[#DBDBDB] rounded-[4px] pl-2 py-2 placeholder:text-[#676769] placeholder:leading-[20px] placeholder:text-[14px]"
                         placeholder="Enter facebook link"
                         type="text">
                </div>
              </div>
              <!--          7th grid-->
              <div class="flex gap-x-[16px] justify-center items-center mt-[16px]">
                <div class="w-1/4">
                  <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">
                    Auto renewal trips</p>
                  <div
                      class="w-full mt-[10px] h-[40px] border border-[#DBDBDB] flex justify-between items-center leading-[20px] rounded-[4px] overflow-hidden divide-x">
                    <div class="flex justify-between items-center">
                      <div class="flex justify-between items-center w-[115px] md:w-[130px] 2xl:w-[250px]">
                        <select
                            aria-label="Default select example"
                            class="form-select appearance-none w-full block px-2 py-1.5 text-base bg-white rounded focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none">
                          <option selected>3</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                        <img alt="" class="w-[12px] h-5 ml-10 mr-1" src="../assets/svg/down_arrow.svg">
                      </div>
                    </div>
                    <p class="p-4 text-[#676769] leading-[20px] text-[14px] font-[400]">Days</p>
                  </div>
                </div>

                <div class="w-1/4">
                  <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">
                    Trail start date</p>
                  <div
                      class="w-full h-[40px] border border-[#DBDBDB] flex justify-between items-center mt-[10px] leading-[20px] rounded-[4px] px-2 overflow-hidden">
                    <input class="outline-none placeholder:text-[#4D4D4F] placeholder:text-[14px] placeholder:leading-[20px]"
                           placeholder="Select trail start date"
                           type="text">
                    <img alt="" class="h-5 w-5" src="../assets/svg/count2.svg">
                  </div>
                </div>

                <div class="w-1/4">
                  <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">
                    Trail end date</p>
                  <div
                      class="w-full h-[40px] border border-[#DBDBDB] flex justify-between items-center mt-[10px] leading-[20px] rounded-[4px] px-2 overflow-hidden">
                    <input class="outline-none placeholder:text-[#4D4D4F] placeholder:text-[14px] placeholder:leading-[20px]"
                           placeholder="Select trail end date"
                           type="text">
                    <img alt="" class="h-5 w-5" src="../assets/svg/count2.svg">
                  </div>
                </div>


                <div class="w-1/4">
                  <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">
                    Online ticket commission</p>
                  <div class="py-[2px] border border-[#DBDBDB] mt-[10px] rounded-[4px] leading-[20px]">
                    <div class="w-full h-[35px] flex justify-between items-center overflow-hidden divide-x">
                      <input
                          class="px-2 py-4 text-[#676769] leading-[20px] text-[14px] font-[400] w-2/5 placeholder:text-primaryText focus:outline-none"
                          placeholder="Days">
                      <div class="p-2 w-3/5 ">
                        <div class="flex justify-between xl:gap-x-2 items-center bg-[#F7F7F7] xl:px-2">
                          <select class="py-1 text-base bg-[#F7F7F7] rounded focus:outline-none xl:w-full leading-[16px] xl:leading-[20px] text-[10px] xl:text-[14px] font-[500]">
                            <option selected>
                              Percentage %
                            </option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </select>
                          <img alt="" class="w-[10px] xl:w-[12px] h-5" src="../assets/svg/down_arrow.svg">
                        </div>
                      </div>

                    </div>
                  </div>


                </div>
              </div>
              <!--          8th grid-->
              <div class="flex gap-x-[16px]  items-center mt-[16px]">
                <div class="w-[24.2%] relative">
                  <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">
                    Challan type</p>
                  <Dropdown v-model="selectedCity" :opti6ns="cities" class="w-full py-[4px] mt-[10px]"
                            optionLabel="name" placeholder="Select challan type"/>
                </div>

                <div class="w-[24.2%]">
                  <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">
                    Ticket holding time</p>
                  <div
                      class="w-full mt-[10px] h-[40px] border border-[#DBDBDB] flex justify-between items-center leading-[20px] rounded-[4px] overflow-hidden divide-x">
                    <div class="flex justify-between items-center">
                        <input class="focus:outline-none w-full rounded-[4px] pl-2 py-2 placeholder:text-[#676769] placeholder:leading-[20px] placeholder:text-[14px]" type="text" placeholder="Enter holding time">
                    </div>
                    <p class="p-4 text-[#676769] leading-[20px] text-[14px] font-[400]">min</p>
                  </div>
                </div>

              </div>
            </div>

          </div>
          <!--          2nd section start-->
          <div class="border-b border-[#DBDBDB]">
            <div class="p-[16px]">
              <p class="text-corporateSecondaryBlue leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">
                TRIP PERMISSION</p>
              <div class="mt-[16px] flex gap-x-[16px] items-center">
                <div class="w-1/2 xl:w-1/4">
                  <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">
                    Default trip order</p>
                  <div class="mt-[10px]">
                    <div class="flex justify-center items-center mt-[10px]">
                      <button
                          class="w-1/2 bg-corporate text-white leading-[20px] text-[14px] flex justify-center items-center font-[400] h-[40px] rounded-l-[4px]">
                          Ascending 
                      </button>
                      <button
                          class="w-1/2 bg-white text-[#676769] leading-[20px] text-[14px] border border-[#DBDBDB] flex justify-center items-center font-[400] h-[40px] rounded-r-[4px]">
                          Descending
                      </button>
                    </div>
                  </div>
                </div>
                <div class="w-1/4">
                  <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">
                    Time to show in trip list</p>
                  <Dropdown v-model="selectedCity" :options="cities" class="w-full py-[4px] mt-[10px]"
                            optionLabel="name" placeholder="Select option"/>
                </div>

              </div>
            </div>
          </div>

          <!--          3rd section start-->
          <div class="border-b border-[#DBDBDB]">
            <div class="p-[16px]">
              <p class="text-corporateSecondaryBlue leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">
                USER TYPE</p>
              <div class="mt-[21px] flex gap-x-[16px] items-center">
                <button class="createUserTypeButton">Owner</button>
                <button class="createUserTypeButton">Company admin</button>
                <button class="createUserTypeButton">Accounts department</button>
                <button class="createUserTypeButton">Counter manager</button>
                <button class="createUserTypeButton">Manager</button>
              </div>
              <div class="mt-[24px] flex gap-x-[16px] items-center">
                <input class="focus:outline-none w-1/4 mt-[10px] w-full border border-[#DBDBDB] rounded-[4px] pl-2 py-2 placeholder:text-[#676769] placeholder:leading-[20px] placeholder:text-[14px] "
                       placeholder="Enter role name"
                       type="text">
                <button
                    class="flex justify-center items-center bg-corporateSecondaryBlue mt-1 bg-opacity-30 text-white leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400] border border-corporateBorder rounded-full px-[24px] py-[12px]">
                  Add role
                </button>
              </div>

            </div>
          </div>
          <!--          4th section start-->
          <div class="border-b border-[#DBDBDB]">
            <div class="p-[16px]">
              <p class="text-corporateSecondaryBlue leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">
                MULTIPLE OWNER 1</p>
              <div class="flex gap-x-[16px] items-center border-b border-dashed border-corporateBorder py-[16px]">
                <div class="w-1/4">
                  <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">
                    Multiple owner name</p>
                  <input class="createNormalInput" placeholder="Enter company owner details" type="text">
                </div>

                <div class="w-1/4">
                  <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">
                    Multiple owner number</p>
                  <input class="createNormalInput" placeholder="Enter company email address" type="text">
                </div>

                <div class="w-1/4">
                  <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">
                    Multiple owner degisnation</p>
                  <input class="createNormalInput" placeholder="Enter company address" type="text">
                </div>
              </div>

              <button
                  class="w-full border border-dashed border-corporateSecondaryBlue flex justify-center items-center bg-[#EFF7FD] rounded-[4px]">
                <div class="flex justify-center items-center gap-x-[11px] py-[12px]">
                  <img alt="" class="w-[10px] h-[10px]" src="../assets/svg/createPlus.svg">
                  <p class="text-primaryText font-[600] leading-[20px] text-[14px]">Add another company owner</p>
                </div>
              </button>
            </div>
          </div>
          <!--          5th section start-->
          <div class="border-b border-[#DBDBDB]">
            <div class="p-[16px]">
              <p class="text-corporateSecondaryBlue leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">
                SMS SERVICES</p>
              <div class="flex gap-x-[16px] items-center mt-[16px]">
                <div class="w-1/4">
                  <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">
                    Required phone</p>
                  <Dropdown v-model="selectedCity" :opti6ns="cities" class="w-full py-[4px] mt-[10px]"
                            optionLabel="name" placeholder="Select option"/>
                </div>

                <div class="w-1/4">
                  <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">
                    Allow SMS</p>
                  <Dropdown v-model="selectedCity" :options="cities" class="w-full py-[4px] mt-[10px]"
                            optionLabel="name" placeholder="Select option"/>
                </div>
              </div>
            </div>
          </div>
          <!--          6th section start-->
          <div class="border-b border-[#DBDBDB]">
            <div class="p-[16px]">
              <div class="border-b border-dashed border-corporateBorder py-[16px]">
                <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">Terms
                  & condition</p>
                <textarea id="" class="w-full mt-[18px] border border-corporateBorder rounded-[4px] p-[8px] focus:outline-none placeholder:text-[#676769] placeholder:leading-[20px] placeholder:text-[14px]" cols="30" name=""
                          placeholder="Enter terms & condition"
                          rows="10"></textarea>
                <p class="text-[#676769] leading-[16px] text-[12px] font-[400] mt-[8px]">*Max 500 charecters</p>
              </div>

              <div class="border-b border-dashed border-corporateBorder py-[16px]">
                <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">
                  Language policy</p>
                <textarea id="" class="w-full mt-[18px] border border-corporateBorder rounded-[4px] p-[8px] focus:outline-none placeholder:text-[#676769] placeholder:leading-[20px] placeholder:text-[14px]" cols="30" name=""
                          placeholder="Enter luguage policy"
                          rows="10"></textarea>
                <p class="text-[#676769] leading-[16px] text-[12px] font-[400] mt-[8px]">*Max 500 charecters</p>
              </div>


              <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600] pt-[16px]">
                Cancellation policy</p>
              <textarea id="" class="w-full mt-[18px] border border-corporateBorder rounded-[4px] p-[8px] focus:outline-none placeholder:text-[#676769] placeholder:leading-[20px] placeholder:text-[14px]" cols="30" name=""
                        placeholder="Enter cancellation policy"
                        rows="10"></textarea>
              <p class="text-[#676769] leading-[16px] text-[12px] font-[400] mt-[8px]">*Max 500 charecters</p>

            </div>
          </div>

          <div class="px-[16px] py-[20px] w-full flex justify-between items-center">
            <div class="flex gap-x-[16px] items-center">
              <p class="text-primaryText font-[600] leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] ">
                Status</p>
              <div class="flex justify-center items-center">
                <button
                    class="bg-[#48A43F] w-[110px] text-white leading-[20px] text-[14px] flex justify-center items-center font-[400] h-[40px] rounded-l-[4px]">
                  Active
                </button>
                <button
                    class="bg-[#F7F7F7] w-[110px] text-primaryText leading-[20px] text-[14px] border border-[#DBDBDB] flex justify-center items-center font-[400] h-[40px] rounded-r-[4px]">
                  Inactive
                </button>
              </div>
            </div>
            <router-link to="/createFilled" class="lessOpacityCorporateButton">Create company</router-link>
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
</style>

<script>
export default {
  data() {
    return {
      selectedCity: null,
      cities: [
        {name: 'New York', code: 'NY'},
        {name: 'Rome', code: 'RM'},
        // {name: 'London', code: 'LDN'},
        // {name: 'Istanbul', code: 'IST'},
        // {name: 'Paris', code: 'PRS'}
      ]
    }
  }

}
</script>



