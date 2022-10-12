<template>
    <!-- Top nav bar start-->
    <div class="bg-white h-[72px] sticky top-0 border-b border-[#DBDBDB] z-10">
            <div class="flex justify-between items-center">
              <div class="pl-6 flex flex-col gap-y-[4px]">
                <p class="lg:leading-[16px] xl:leading-[28px] lg:text-[14px] xl:text-[20px] font-[600] text-primaryText">
                    Stoppage</p>
                <div class="flex justify-center items-center gap-x-[6px] mr-4">
                  <p class="text-secondaryText leading-[12px] text-[8px] xl:leading-[16px] xl:text-[12px] font-[400]">Stoppage</p>
                  <img alt="" class="w-1 h-2" src="../assets/svg/bgBack.svg">
                  <p class="text-secondaryText leading-[12px] text-[8px] xl:leading-[16px] xl:text-[12px] font-[400]">
                    stoppage</p>
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
      <!--        tab start-->
      <div class="border-b border-[#EDEDED]">
          <div class="flex justify-start items-center">
            <router-link to="/stoppageCity" :class="$route.path === '/stoppageCity' ? 'companyOwnerTabActive' : 'companyOwnerTabNonActive' ">City</router-link>
            <router-link to="/stoppage" :class="$route.path === '/stoppage' ? 'companyOwnerTabActive' : 'companyOwnerTabNonActive' ">Stoppage</router-link>
          </div>
        </div>

        <div class="mt-[16px] bg-white rounded-[10px]">
          <div class="p-4 w-1/3">
            <p class="text-corporateSecondaryBlue mb-3">STOPPAGE  BULK UPLOAD</p>
            <div>
              <input id="chooseFile" class="hidden" name="" type="file">
              <label class="w-full py-8 bg-[#EFF7FD] h-[40px] cursor-pointer border border-dashed border-corporateSecondaryBlue mt-[10px] rounded-[4px] flex justify-center items-center" for="chooseFile">
                <div class="flex items-center gap-x-[8px]">
                  <img alt="" class="w-[18px] h-[15px]" src="/src/assets/svg/file.svg">
                  <p class="text-corporateSecondaryBlue leading-[20px] text-[14px] font-[400]">Upload stoppages</p>
                  <p class="text-corporateSecondaryBlue leading-[20px] text-[14px] border-b border-corporateSecondaryBlue font-semibold"> Browse file</p>
                </div>
              </label>
          </div>
          </div>
      </div>

<!--Card-->
      <div class="mt-[16px] bg-white rounded-[10px]">
          <div class="p-4">
            <p class="text-corporateSecondaryBlue mb-3">ADD SINGLE STOPPAGE</p>
            <div class="flex justify-start items-center gap-x-4 w-full">
            <div class="w-1/5">
            <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">
                City</p>
            <Dropdown v-model="selectedCity" :opti6ns="cities" class="w-full py-[4px] mt-[10px]" optionLabel="name"
                      placeholder="Select city"/>
          </div>
              <div class="w-1/5">
                <div class="flex justify-between items-center w-full">
                  <p class="text-primaryText leading-[20px] text-[14px] xl:leading-[24px] xl:text-[16px] font-[600]">Stoppage</p>
                </div>
                <input type="text" class="focus:outline-none mt-[10px] w-full border border-[#DBDBDB] rounded-[4px] pl-2 py-2 placeholder:text-[#676769] placeholder:leading-[16px] placeholder:text-[12px] xl:placeholder:leading-[20px] xl:placeholder:text-[14px]" placeholder="Enter stoppage">
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
          <router-link to="/stoppageNext" class="flex justify-center items-center gap-x-[10px] lessOpacityCorporateButton">
            <img src="../assets/svg/save_change.svg" alt="">Save stoppage
          </router-link>
        </div>
       </div>

      <div class="bg-white rounded-[8px] mt-4">
        <!-- table start -->
        <table class="min-w-full">
          <thead>
          <tr class="bg-[#4D4D4F] h-[36px]">
            <th scope="col" class="companyTableHead" style="border-radius: 8px 0 0 0">
              City
            </th>
            <th scope="col" class="companyTableHead">
                Stoppage 
            </th>
            <th scope="col" class="companyTableHead">
                Status 
            </th>
            <th scope="col" class="companyTableHead">
              action
            </th>
          </tr>
          </thead>
          <tbody>
          <tr class="border-b border-[#EDEDED]">
            <td class="text-primaryText border-r border-[#DBDBDB] text-center leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px]">
                City name
            </td>
            <td class="text-primaryText border-r border-[#DBDBDB] text-center leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px]">
                Stoppage name
            </td>
            <td class="border-r border-[#DBDBDB]">
              <div class="flex justify-center items-center">
                <p class="companyTableStatus">Active</p>
              </div>
            </td>
            <td class="border-r border-[#DBDBDB]">
              <div class="py-[5px] px-[18px] flex justify-center items-center gap-x-[16px]">
                  <button class="companyEditButton" @click="toggleModal()"><span><img src="../assets/svg/edit.svg" class="w-3 h-3" alt=""></span>Edit</button>
                  <div id="modal" class="fixed z-10 overflow-y-auto top-0 w-full left-0 hidden">
                    <div class="flex items-center justify-center min-height-100vh pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                      <div class="fixed inset-0 transition-opacity">
                        <div class="absolute inset-0 bg-gray-900 opacity-75"/>
                      </div>
                      <span class="hidden sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>
                      <div
                          aria-labelledby="modal-headline"
                          aria-modal="true"
                          class="inline-block min-w-[648px] align-center bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all ease-in-out delay-700 sm:my-8 sm:align-middle"
                          role="dialog">
                        <div
                            class="w-full px-6 py-4 bg-corporate flex justify-between items-center transition transform ">
                          <p class="leading-[20px] xl:leading-6 text-[14px] xl:text-[16px] font-[500] text-white">
                            EDIT STOPPAGE</p>
                          <img alt="" class="cursor-pointer" src="../assets/svg/white-close.svg"
                              @click="toggleModal()">
                        </div>
                        <div class="px-6 pt-6 pb-5">
                          <div class="flex justify-start items-center gap-x-4 w-full" data-v-06276c0f="">
                            <div class="w-1/2" data-v-06276c0f="">
                              <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]" data-v-06276c0f=""> City</p>
                              <div id="pv_id_5" class="p-dropdown p-component p-inputwrapper w-full py-[4px] mt-[10px]" data-v-06276c0f="">
                                <span class="p-dropdown-label p-inputtext p-placeholder" tabindex="0" role="combobox" aria-label="Select city" aria-haspopup="listbox" aria-expanded="false" aria-controls="pv_id_5_list" aria-disabled="false">Select city</span>
                                <div class="p-dropdown-trigger">
                                  <span class="p-dropdown-trigger-icon pi pi-chevron-down" aria-hidden="true"></span>
                                </div>
                              </div>
                            </div>
                            <div class="w-1/2" data-v-06276c0f="">
                              <div class="flex justify-between items-center w-full" data-v-06276c0f="">
                                <p class="text-primaryText leading-[20px] text-[14px] xl:leading-[24px] xl:text-[16px] font-[600]" data-v-06276c0f="">Stoppage</p>
                              </div>
                              <input type="text" class="focus:outline-none mt-[10px] w-full border border-[#DBDBDB] rounded-[4px] pl-2 py-2 placeholder:text-[#676769] placeholder:leading-[16px] placeholder:text-[12px] xl:placeholder:leading-[20px] xl:placeholder:text-[14px]" placeholder="Enter stoppage" value="Arambag" data-v-06276c0f="">
                            </div>
                        </div>
                          <div class="flex justify-center mt-5">
                            <button @click="toggleModal()" class="bg-[#48A43F] opacity-30 flex gap-x-3 justify-center items-center text-white rounded-full px-5 py-3 leading-[12px] text-[10px] xl:leading-[16px] xl:text-[12px]" data-v-0d08c475="" data-v-4f6e2808="">
                              <span data-v-0d08c475="" data-v-4f6e2808="">
                                <img src="/src/assets/svg/save.svg" alt="" data-v-0d08c475="" data-v-4f6e2808="">
                              </span> 
                              Save changes 
                            </button>
                          </div>
                        </div>

                      </div>
                    </div>
                 </div>

              </div>
            </td>
          </tr>

          <tr class="border-b border-[#EDEDED]">
            <td class="text-primaryText border-r border-[#DBDBDB] text-center leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px]">
                City name
            </td>
            <td class="text-primaryText border-r border-[#DBDBDB] text-center leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px]">
                Stoppage name
            </td>
            <td class="border-r border-[#DBDBDB]">
              <div class="flex justify-center items-center">
                <p class="companyTableStatusInactive">Inactive</p>
              </div>
            </td>
            <td class="border-r border-[#DBDBDB]">
              <div class="py-[5px] px-[18px] flex justify-center items-center gap-x-[16px]">
                  <button class="companyEditButton" @click="toggleModal()"><span><img src="../assets/svg/edit.svg" class="w-3 h-3" alt=""></span>Edit</button>
                  <div id="modal" class="fixed z-10 overflow-y-auto top-0 w-full left-0 hidden">
                    <div class="flex items-center justify-center min-height-100vh pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                      <div class="fixed inset-0 transition-opacity">
                        <div class="absolute inset-0 bg-gray-900 opacity-75"/>
                      </div>
                      <span class="hidden sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>
                      <div
                          aria-labelledby="modal-headline"
                          aria-modal="true"
                          class="inline-block min-w-[648px] align-center bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all ease-in-out delay-700 sm:my-8 sm:align-middle"
                          role="dialog">
                        <div
                            class="w-full px-6 py-4 bg-corporate flex justify-between items-center transition transform ">
                          <p class="leading-[20px] xl:leading-6 text-[14px] xl:text-[16px] font-[500] text-white">
                            EDIT STOPPAGE</p>
                          <img alt="" class="cursor-pointer" src="../assets/svg/white-close.svg"
                              @click="toggleModal()">
                        </div>
                        <div class="px-6 pt-6 pb-5">
                          <div class="flex justify-start items-center gap-x-4 w-full" data-v-06276c0f="">
                            <div class="w-1/2" data-v-06276c0f="">
                              <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]" data-v-06276c0f=""> City</p>
                              <div id="pv_id_5" class="p-dropdown p-component p-inputwrapper w-full py-[4px] mt-[10px]" data-v-06276c0f="">
                                <span class="p-dropdown-label p-inputtext p-placeholder" tabindex="0" role="combobox" aria-label="Select city" aria-haspopup="listbox" aria-expanded="false" aria-controls="pv_id_5_list" aria-disabled="false">Select city</span>
                                <div class="p-dropdown-trigger">
                                  <span class="p-dropdown-trigger-icon pi pi-chevron-down" aria-hidden="true"></span>
                                </div>
                              </div>
                            </div>
                            <div class="w-1/2" data-v-06276c0f="">
                              <div class="flex justify-between items-center w-full" data-v-06276c0f="">
                                <p class="text-primaryText leading-[20px] text-[14px] xl:leading-[24px] xl:text-[16px] font-[600]" data-v-06276c0f="">Stoppage</p>
                              </div>
                              <input type="text" class="focus:outline-none mt-[10px] w-full border border-[#DBDBDB] rounded-[4px] pl-2 py-2 placeholder:text-[#676769] placeholder:leading-[16px] placeholder:text-[12px] xl:placeholder:leading-[20px] xl:placeholder:text-[14px]" placeholder="Enter stoppage" value="Arambag" data-v-06276c0f="">
                            </div>
                        </div>
                          <div class="flex justify-center mt-5">
                            <button @click="toggleModal()" class="bg-[#48A43F] opacity-30 flex gap-x-3 justify-center items-center text-white rounded-full px-5 py-3 leading-[12px] text-[10px] xl:leading-[16px] xl:text-[12px]" data-v-0d08c475="" data-v-4f6e2808="">
                              <span data-v-0d08c475="" data-v-4f6e2808="">
                                <img src="/src/assets/svg/save.svg" alt="" data-v-0d08c475="" data-v-4f6e2808="">
                              </span> 
                              Save changes 
                            </button>
                          </div>
                        </div>

                      </div>
                    </div>
                 </div>

              </div>
            </td>
          </tr>

          <tr class="border-b border-[#EDEDED]">
            <td class="text-primaryText border-r border-[#DBDBDB] text-center leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px]">
                City name
            </td>
            <td class="text-primaryText border-r border-[#DBDBDB] text-center leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px]">
                Stoppage name
            </td>
            <td class="border-r border-[#DBDBDB]">
              <div class="flex justify-center items-center">
                <p class="companyTableStatus">Active</p>
              </div>
            </td>
            <td class="border-r border-[#DBDBDB]">
              <div class="py-[5px] px-[18px] flex justify-center items-center gap-x-[16px]">
                  <button class="companyEditButton" @click="toggleModal()"><span><img src="../assets/svg/edit.svg" class="w-3 h-3" alt=""></span>Edit</button>
                  <div id="modal" class="fixed z-10 overflow-y-auto top-0 w-full left-0 hidden">
                    <div class="flex items-center justify-center min-height-100vh pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                      <div class="fixed inset-0 transition-opacity">
                        <div class="absolute inset-0 bg-gray-900 opacity-75"/>
                      </div>
                      <span class="hidden sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>
                      <div
                          aria-labelledby="modal-headline"
                          aria-modal="true"
                          class="inline-block min-w-[648px] align-center bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all ease-in-out delay-700 sm:my-8 sm:align-middle"
                          role="dialog">
                        <div
                            class="w-full px-6 py-4 bg-corporate flex justify-between items-center transition transform ">
                          <p class="leading-[20px] xl:leading-6 text-[14px] xl:text-[16px] font-[500] text-white">
                            EDIT STOPPAGE</p>
                          <img alt="" class="cursor-pointer" src="../assets/svg/white-close.svg"
                              @click="toggleModal()">
                        </div>
                        <div class="px-6 pt-6 pb-5">
                          <div class="flex justify-start items-center gap-x-4 w-full" data-v-06276c0f="">
                            <div class="w-1/2" data-v-06276c0f="">
                              <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]" data-v-06276c0f=""> City</p>
                              <div id="pv_id_5" class="p-dropdown p-component p-inputwrapper w-full py-[4px] mt-[10px]" data-v-06276c0f="">
                                <span class="p-dropdown-label p-inputtext p-placeholder" tabindex="0" role="combobox" aria-label="Select city" aria-haspopup="listbox" aria-expanded="false" aria-controls="pv_id_5_list" aria-disabled="false">Select city</span>
                                <div class="p-dropdown-trigger">
                                  <span class="p-dropdown-trigger-icon pi pi-chevron-down" aria-hidden="true"></span>
                                </div>
                              </div>
                            </div>
                            <div class="w-1/2" data-v-06276c0f="">
                              <div class="flex justify-between items-center w-full" data-v-06276c0f="">
                                <p class="text-primaryText leading-[20px] text-[14px] xl:leading-[24px] xl:text-[16px] font-[600]" data-v-06276c0f="">Stoppage</p>
                              </div>
                              <input type="text" class="focus:outline-none mt-[10px] w-full border border-[#DBDBDB] rounded-[4px] pl-2 py-2 placeholder:text-[#676769] placeholder:leading-[16px] placeholder:text-[12px] xl:placeholder:leading-[20px] xl:placeholder:text-[14px]" placeholder="Enter stoppage" value="Arambag" data-v-06276c0f="">
                            </div>
                        </div>
                          <div class="flex justify-center mt-5">
                            <button @click="toggleModal()" class="bg-[#48A43F] opacity-30 flex gap-x-3 justify-center items-center text-white rounded-full px-5 py-3 leading-[12px] text-[10px] xl:leading-[16px] xl:text-[12px]" data-v-0d08c475="" data-v-4f6e2808="">
                              <span data-v-0d08c475="" data-v-4f6e2808="">
                                <img src="/src/assets/svg/save.svg" alt="" data-v-0d08c475="" data-v-4f6e2808="">
                              </span> 
                              Save changes 
                            </button>
                          </div>
                        </div>

                      </div>
                    </div>
                 </div>

              </div>
            </td>
          </tr>

          <tr class="border-b border-[#EDEDED]">
            <td class="text-primaryText border-r border-[#DBDBDB] text-center leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px]">
                City name
            </td>
            <td class="text-primaryText border-r border-[#DBDBDB] text-center leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px]">
                Stoppage name
            </td>
            <td class="border-r border-[#DBDBDB]">
              <div class="flex justify-center items-center">
                <p class="companyTableStatus">Active</p>
              </div>
            </td>
            <td class="border-r border-[#DBDBDB]">
              <div class="py-[5px] px-[18px] flex justify-center items-center gap-x-[16px]">
                  <button class="companyEditButton" @click="toggleModal()"><span><img src="../assets/svg/edit.svg" class="w-3 h-3" alt=""></span>Edit</button>
                  <div id="modal" class="fixed z-10 overflow-y-auto top-0 w-full left-0 hidden">
                    <div class="flex items-center justify-center min-height-100vh pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                      <div class="fixed inset-0 transition-opacity">
                        <div class="absolute inset-0 bg-gray-900 opacity-75"/>
                      </div>
                      <span class="hidden sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>
                      <div
                          aria-labelledby="modal-headline"
                          aria-modal="true"
                          class="inline-block min-w-[648px] align-center bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all ease-in-out delay-700 sm:my-8 sm:align-middle"
                          role="dialog">
                        <div
                            class="w-full px-6 py-4 bg-corporate flex justify-between items-center transition transform ">
                          <p class="leading-[20px] xl:leading-6 text-[14px] xl:text-[16px] font-[500] text-white">
                            EDIT STOPPAGE</p>
                          <img alt="" class="cursor-pointer" src="../assets/svg/white-close.svg"
                              @click="toggleModal()">
                        </div>
                        <div class="px-6 pt-6 pb-5">
                          <div class="flex justify-start items-center gap-x-4 w-full" data-v-06276c0f="">
                            <div class="w-1/2" data-v-06276c0f="">
                              <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]" data-v-06276c0f=""> City</p>
                              <div id="pv_id_5" class="p-dropdown p-component p-inputwrapper w-full py-[4px] mt-[10px]" data-v-06276c0f="">
                                <span class="p-dropdown-label p-inputtext p-placeholder" tabindex="0" role="combobox" aria-label="Select city" aria-haspopup="listbox" aria-expanded="false" aria-controls="pv_id_5_list" aria-disabled="false">Select city</span>
                                <div class="p-dropdown-trigger">
                                  <span class="p-dropdown-trigger-icon pi pi-chevron-down" aria-hidden="true"></span>
                                </div>
                              </div>
                            </div>
                            <div class="w-1/2" data-v-06276c0f="">
                              <div class="flex justify-between items-center w-full" data-v-06276c0f="">
                                <p class="text-primaryText leading-[20px] text-[14px] xl:leading-[24px] xl:text-[16px] font-[600]" data-v-06276c0f="">Stoppage</p>
                              </div>
                              <input type="text" class="focus:outline-none mt-[10px] w-full border border-[#DBDBDB] rounded-[4px] pl-2 py-2 placeholder:text-[#676769] placeholder:leading-[16px] placeholder:text-[12px] xl:placeholder:leading-[20px] xl:placeholder:text-[14px]" placeholder="Enter stoppage" value="Arambag" data-v-06276c0f="">
                            </div>
                        </div>
                          <div class="flex justify-center mt-5">
                            <button @click="toggleModal()" class="bg-[#48A43F] opacity-30 flex gap-x-3 justify-center items-center text-white rounded-full px-5 py-3 leading-[12px] text-[10px] xl:leading-[16px] xl:text-[12px]" data-v-0d08c475="" data-v-4f6e2808="">
                              <span data-v-0d08c475="" data-v-4f6e2808="">
                                <img src="/src/assets/svg/save.svg" alt="" data-v-0d08c475="" data-v-4f6e2808="">
                              </span> 
                              Save changes 
                            </button>
                          </div>
                        </div>

                      </div>
                    </div>
                 </div>

              </div>
            </td>
          </tr>

          <tr class="border-b border-[#EDEDED]">
            <td class="text-primaryText border-r border-[#DBDBDB] text-center leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px]">
                City name
            </td>
            <td class="text-primaryText border-r border-[#DBDBDB] text-center leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px]">
                Stoppage name
            </td>
            <td class="border-r border-[#DBDBDB]">
              <div class="flex justify-center items-center">
                <p class="companyTableStatus">Active</p>
              </div>
            </td>
            <td class="border-r border-[#DBDBDB]">
              <div class="py-[5px] px-[18px] flex justify-center items-center gap-x-[16px]">
                  <button class="companyEditButton" @click="toggleModal()"><span><img src="../assets/svg/edit.svg" class="w-3 h-3" alt=""></span>Edit</button>
                  <div id="modal" class="fixed z-10 overflow-y-auto top-0 w-full left-0 hidden">
                    <div class="flex items-center justify-center min-height-100vh pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                      <div class="fixed inset-0 transition-opacity">
                        <div class="absolute inset-0 bg-gray-900 opacity-75"/>
                      </div>
                      <span class="hidden sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>
                      <div
                          aria-labelledby="modal-headline"
                          aria-modal="true"
                          class="inline-block min-w-[648px] align-center bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all ease-in-out delay-700 sm:my-8 sm:align-middle"
                          role="dialog">
                        <div
                            class="w-full px-6 py-4 bg-corporate flex justify-between items-center transition transform ">
                          <p class="leading-[20px] xl:leading-6 text-[14px] xl:text-[16px] font-[500] text-white">
                            EDIT STOPPAGE</p>
                          <img alt="" class="cursor-pointer" src="../assets/svg/white-close.svg"
                              @click="toggleModal()">
                        </div>
                        <div class="px-6 pt-6 pb-5">
                          <div class="flex justify-start items-center gap-x-4 w-full" data-v-06276c0f="">
                            <div class="w-1/2" data-v-06276c0f="">
                              <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]" data-v-06276c0f=""> City</p>
                              <div id="pv_id_5" class="p-dropdown p-component p-inputwrapper w-full py-[4px] mt-[10px]" data-v-06276c0f="">
                                <span class="p-dropdown-label p-inputtext p-placeholder" tabindex="0" role="combobox" aria-label="Select city" aria-haspopup="listbox" aria-expanded="false" aria-controls="pv_id_5_list" aria-disabled="false">Select city</span>
                                <div class="p-dropdown-trigger">
                                  <span class="p-dropdown-trigger-icon pi pi-chevron-down" aria-hidden="true"></span>
                                </div>
                              </div>
                            </div>
                            <div class="w-1/2" data-v-06276c0f="">
                              <div class="flex justify-between items-center w-full" data-v-06276c0f="">
                                <p class="text-primaryText leading-[20px] text-[14px] xl:leading-[24px] xl:text-[16px] font-[600]" data-v-06276c0f="">Stoppage</p>
                              </div>
                              <input type="text" class="focus:outline-none mt-[10px] w-full border border-[#DBDBDB] rounded-[4px] pl-2 py-2 placeholder:text-[#676769] placeholder:leading-[16px] placeholder:text-[12px] xl:placeholder:leading-[20px] xl:placeholder:text-[14px]" placeholder="Enter stoppage" value="Arambag" data-v-06276c0f="">
                            </div>
                        </div>
                          <div class="flex justify-center mt-5">
                            <button @click="toggleModal()" class="bg-[#48A43F] opacity-30 flex gap-x-3 justify-center items-center text-white rounded-full px-5 py-3 leading-[12px] text-[10px] xl:leading-[16px] xl:text-[12px]" data-v-0d08c475="" data-v-4f6e2808="">
                              <span data-v-0d08c475="" data-v-4f6e2808="">
                                <img src="/src/assets/svg/save.svg" alt="" data-v-0d08c475="" data-v-4f6e2808="">
                              </span> 
                              Save changes 
                            </button>
                          </div>
                        </div>

                      </div>
                    </div>
                 </div>

              </div>
            </td>
          </tr>

          <tr class="border-b border-[#EDEDED]">
            <td class="text-primaryText border-r border-[#DBDBDB] text-center leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px]">
                City name
            </td>
            <td class="text-primaryText border-r border-[#DBDBDB] text-center leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px]">
                Stoppage name
            </td>
            <td class="border-r border-[#DBDBDB]">
              <div class="flex justify-center items-center">
                <p class="companyTableStatus">Active</p>
              </div>
            </td>
            <td class="border-r border-[#DBDBDB]">
              <div class="py-[5px] px-[18px] flex justify-center items-center gap-x-[16px]">
                  <button class="companyEditButton" @click="toggleModal()"><span><img src="../assets/svg/edit.svg" class="w-3 h-3" alt=""></span>Edit</button>
                  <div id="modal" class="fixed z-10 overflow-y-auto top-0 w-full left-0 hidden">
                    <div class="flex items-center justify-center min-height-100vh pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                      <div class="fixed inset-0 transition-opacity">
                        <div class="absolute inset-0 bg-gray-900 opacity-75"/>
                      </div>
                      <span class="hidden sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>
                      <div
                          aria-labelledby="modal-headline"
                          aria-modal="true"
                          class="inline-block min-w-[648px] align-center bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all ease-in-out delay-700 sm:my-8 sm:align-middle"
                          role="dialog">
                        <div
                            class="w-full px-6 py-4 bg-corporate flex justify-between items-center transition transform ">
                          <p class="leading-[20px] xl:leading-6 text-[14px] xl:text-[16px] font-[500] text-white">
                            EDIT STOPPAGE</p>
                          <img alt="" class="cursor-pointer" src="../assets/svg/white-close.svg"
                              @click="toggleModal()">
                        </div>
                        <div class="px-6 pt-6 pb-5">
                          <div class="flex justify-start items-center gap-x-4 w-full" data-v-06276c0f="">
                            <div class="w-1/2" data-v-06276c0f="">
                              <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]" data-v-06276c0f=""> City</p>
                              <div id="pv_id_5" class="p-dropdown p-component p-inputwrapper w-full py-[4px] mt-[10px]" data-v-06276c0f="">
                                <span class="p-dropdown-label p-inputtext p-placeholder" tabindex="0" role="combobox" aria-label="Select city" aria-haspopup="listbox" aria-expanded="false" aria-controls="pv_id_5_list" aria-disabled="false">Select city</span>
                                <div class="p-dropdown-trigger">
                                  <span class="p-dropdown-trigger-icon pi pi-chevron-down" aria-hidden="true"></span>
                                </div>
                              </div>
                            </div>
                            <div class="w-1/2" data-v-06276c0f="">
                              <div class="flex justify-between items-center w-full" data-v-06276c0f="">
                                <p class="text-primaryText leading-[20px] text-[14px] xl:leading-[24px] xl:text-[16px] font-[600]" data-v-06276c0f="">Stoppage</p>
                              </div>
                              <input type="text" class="focus:outline-none mt-[10px] w-full border border-[#DBDBDB] rounded-[4px] pl-2 py-2 placeholder:text-[#676769] placeholder:leading-[16px] placeholder:text-[12px] xl:placeholder:leading-[20px] xl:placeholder:text-[14px]" placeholder="Enter stoppage" value="Arambag" data-v-06276c0f="">
                            </div>
                        </div>
                          <div class="flex justify-center mt-5">
                            <button @click="toggleModal()" class="bg-[#48A43F] opacity-30 flex gap-x-3 justify-center items-center text-white rounded-full px-5 py-3 leading-[12px] text-[10px] xl:leading-[16px] xl:text-[12px]" data-v-0d08c475="" data-v-4f6e2808="">
                              <span data-v-0d08c475="" data-v-4f6e2808="">
                                <img src="/src/assets/svg/save.svg" alt="" data-v-0d08c475="" data-v-4f6e2808="">
                              </span> 
                              Save changes 
                            </button>
                          </div>
                        </div>

                      </div>
                    </div>
                 </div>

              </div>
            </td>
          </tr>
          </tbody>
        </table>
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

/*tooltip*/
.tooltip {
  position: relative;
  display: inline-block;
}

.tooltip .tooltiptext {
  visibility: hidden;
  width: 120px;
  background-color: white;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;

  /* Position the tooltip */
  position: absolute;
  z-index: 10;
}

.tooltip:hover .tooltiptext {
  visibility: visible;
}
</style>

<script>
export default {
  methods: {
    toggleModal() {
      document.getElementById('modal').classList.toggle('hidden')
    }
  }

}
</script>