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
              <p class="lg:leading-[16px] xl:leading-[28px] lg:text-[14px] xl:text-[20px] font-[600] text-primaryText">Manage User Restriction</p>
              <div class="flex justify-center items-center gap-x-[6px] mr-4">
                <p class="text-secondaryText leading-[12px] text-[8px] xl:leading-[16px] xl:text-[12px] font-[400]">Trips</p>
                <img src="../assets/svg/bgBack.svg" alt="" class="w-1 h-2">
                <p class="text-secondaryText leading-[12px] text-[8px] xl:leading-[16px] xl:text-[12px] font-[400]">User restriction</p>
                <img src="../assets/svg/bgBack.svg" alt="" class="w-1 h-2">
                <p class="text-secondaryText leading-[12px] text-[8px] xl:leading-[16px] xl:text-[12px] font-[400]">Manage user restriction</p>
              </div>
            </div>
          </div>
          <div class="flex gap-x-2 p-4 justify-center items-center mr-6 ">
              <router-link class="topBarAddButton" to="/tripsAdd">
                <span><img alt="" class="h-[9.33px] w-[9.33px]" src="../assets/svg/plus.svg"></span>Add Trips
              </router-link>
              <img src="../assets/person/person1.png" alt="" class="h-[30px] xl:h-[40px] w-[30px] xl:w-[40px] rounded-full">
              <p class="text-[#151414] leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[500]">Mostafa Mamun Emon</p>
              <img src="../assets/person/downArrow.svg" alt="" class="w-[12px] h-[6px]">
          </div>
        </div>
      </div>
      <!-- top nav bar end -->
        <!-- body start-->
        <div class="px-[30px] py-[24px]">
            <!--tab start-->
            <!--card-->
          <div class="bg-white rounded">
              <div class="p-4 flex justify-between items-center gap-x-[30px]">
                <div class="flex justify-start items-center gap-x-4 w-full">
                  <div class="w-1/4 xl:w-3/5 relative">
                    <p class="text-primaryText leading-[20px] text-[14px] xl:leading-[24px] xl:text-[16px] font-[600]">Trip</p>
                    <Dropdown class="w-full py-[4px] mt-[10px] placeholder:text-primaryText placeholder:leading-[16px] placeholder:text-[12px] xl:placeholder:leading-[20px] xl:placeholder:text-[14px]" v-model="selectedCity" :options="cities" optionLabel="name" placeholder="Select trip" />       
                  </div>
                  <div class="w-1/4 xl:w-1/5">
                    <p class="text-primaryText leading-[20px] text-[14px] xl:leading-[24px] xl:text-[16px] font-[600]">From</p>
                    <div class="w-full h-[40px] border border-[#DBDBDB] flex justify-between items-center mt-[10px] leading-[20px] rounded-[4px] pr-[10px] overflow-hidden"><input type="text" class="outline-none pl-2 placeholder:text-[#4D4D4F] placeholder:text-[14px] placeholder:leading-[20px]" placeholder="Select location"><img src="/src/assets/svg/count2.svg" class="h-5 w-5" alt=""></div>
                 </div>
  
                  <div class="w-1/4 xl:w-1/5">
                    <p class="text-primaryText leading-[20px] text-[14px] xl:leading-[24px] xl:text-[16px] font-[600]">To</p>
                    <div class="w-full h-[40px] border border-[#DBDBDB] flex justify-between items-center mt-[10px] leading-[20px] rounded-[4px] pr-[10px] overflow-hidden"><input type="text" class="outline-none pl-2 placeholder:text-[#4D4D4F] placeholder:text-[14px] placeholder:leading-[20px]" placeholder="Select location"><img src="/src/assets/svg/count2.svg" class="h-5 w-5" alt=""></div>
                </div>
                </div>
                <button class="flex gap-x-[9px] justify-center items-center bg-corporate text-white leading-[14px] xl:leading-[16px] text-[11px] xl:text-[12px] font-[500] py-3 pl-[17px] pr-[24px] rounded-full mt-6"><span>
                  <img src="../assets/svg/white_search.svg" class="w-[25px] xl:w-[20px] xl:h-[20px]" alt="">
                </span>Search</button>
              </div>
          </div>

          <div class="bg-white rounded-[10px] mt-4">
              <div class="p-4">
                <div class="flex justify-between items-center">
                  <p class="text-[#151414] leading-[20px] xl:leading-[24px] text-[14px] xl:text-[16px] font-[600]">OWN COUNTERMAN</p>
                  <p class="flex justify-center items-center gap-x-[5px]">
                    <span class="form-group flex mb-0">
                      <input type="checkbox" id="read11"><label for="read11" class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]"></label>
                    </span> 
                    <span class="text-[12px] xl:text-[16px] leading-5 xl:leading-6 mt-[2px]">Mark all</span>
                  </p>
                </div>

            <div class="flex items-center gap-x-[10px] xl:gap-x-[16px] mt-[12px] xl:mt-[16px]">
              <div class="w-1/4">
                <p class="text-secondaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px]">Counter 1</p>
              </div>
              <div class="w-1/4">
                <p class="flex justify-center items-center gap-x-[5px]">
                    <span class="form-group flex mb-0"><input type="checkbox" id="read11"><label for="read11" class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]"></label></span> 
                    <span class="text-[12px] xl:text-[16px] leading-5 xl:leading-6 mt-[2px] text-secondaryText">Fahim Ahmed</span>
                </p>
              </div>
              <div class="w-1/4">
                <p class="flex justify-center items-center gap-x-[5px]">
                    <span class="form-group flex mb-0"><input type="checkbox" id="read11"><label for="read11" class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]"></label></span> 
                    <span class="text-[12px] xl:text-[16px] leading-5 xl:leading-6 mt-[2px] text-secondaryText">ASSIGN AGENT</span>
                </p>
              </div>
              <div class="w-1/4">
                <p class="flex justify-center items-center gap-x-[5px]">
                    <span class="form-group flex mb-0"><input type="checkbox" id="read11"><label for="read11" class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]"></label></span> 
                    <span class="text-[12px] xl:text-[16px] leading-5 xl:leading-6 mt-[2px] text-secondaryText">Fahim Ahmed</span>
                </p>
              </div>
            </div>

            <div class="flex items-center gap-x-[10px] xl:gap-x-[16px] mt-[20px] xl:mt-[30px]">
              <div class="w-1/4">
                <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px]"></p>
              </div>
              <div class="w-1/4">
                <p class="flex justify-center items-center gap-x-[5px]">
                    <span class="form-group flex mb-0"><input type="checkbox" id="read11"><label for="read11" class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]"></label></span> 
                    <span class="text-[12px] xl:text-[16px] leading-5 xl:leading-6 mt-[2px] text-secondaryText">Fahim Ahmed</span>
                </p>
              </div>
              <div class="w-1/4">
                <p class="flex justify-center items-center gap-x-[5px]">
                    <span class="form-group flex mb-0"><input type="checkbox" id="read11"><label for="read11" class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]"></label></span> 
                    <span class="text-[12px] xl:text-[16px] leading-5 xl:leading-6 mt-[2px] text-secondaryText">ASSIGN AGENT</span>
                </p>
              </div>
              <div class="w-1/4">
                <p class="flex justify-center items-center gap-x-[5px]">
                    <span class="form-group flex mb-0"><input type="checkbox" id="read11"><label for="read11" class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]"></label></span> 
                    <span class="text-[12px] xl:text-[16px] leading-5 xl:leading-6 mt-[2px] text-secondaryText">Fahim Ahmed</span>
                </p>
              </div>
            </div>

            <hr class="my-[20px] border-t border-[#DBDBDB]">
            <div class="flex items-center gap-x-[10px] xl:gap-x-[16px] mt-[12px] xl:mt-[16px]">
              <div class="w-1/4">
                <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px]">Counter 2</p>
              </div>
              <div class="w-1/4">
                <p class="flex justify-center items-center gap-x-[5px]">
                    <span class="form-group flex mb-0"><input type="checkbox" id="read11"><label for="read11" class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]"></label></span> 
                    <span class="text-[12px] xl:text-[16px] leading-5 xl:leading-6 mt-[2px] text-secondaryText">Fahim Ahmed</span>
                </p>
              </div>
              <div class="w-1/4">
                <p class="flex justify-center items-center gap-x-[5px]">
                    <span class="form-group flex mb-0"><input type="checkbox" id="read11"><label for="read11" class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]"></label></span> 
                    <span class="text-[12px] xl:text-[16px] leading-5 xl:leading-6 mt-[2px] text-secondaryText">ASSIGN AGENT</span>
                </p>
              </div>
              <div class="w-1/4">
                <p class="flex justify-center items-center gap-x-[5px]">
                    <span class="form-group flex mb-0"><input type="checkbox" id="read11"><label for="read11" class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]"></label></span> 
                    <span class="text-[12px] xl:text-[16px] leading-5 xl:leading-6 mt-[2px] text-secondaryText">Fahim Ahmed</span>
                </p>
              </div>
            </div>

            <hr class="my-[20px] border-t border-[#DBDBDB]">
            <div class="flex justify-between items-center">
                  <p class="text-[#151414] leading-[20px] xl:leading-[24px] text-[14px] xl:text-[16px] font-[600]">AGENT</p>
                  <p class="flex justify-center items-center gap-x-[5px]">
                    <span class="form-group flex mb-0"><input type="checkbox" id="read11"><label for="read11" class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]"></label></span> 
                    <span class="text-[12px] xl:text-[16px] leading-5 xl:leading-6 mt-[2px]">Mark all</span>
                  </p>
            </div>

            <div class="flex items-center gap-x-[10px] xl:gap-x-[16px] mt-[12px] xl:mt-[16px]">
              <div class="w-1/4">
                <p class="flex items-center gap-x-[5px]">
                    <span class="form-group flex mb-0"><input type="checkbox" id="read11"><label for="read11" class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]"></label></span> 
                    <span class="text-[12px] xl:text-[16px] leading-5 xl:leading-6 mt-[2px] text-secondaryText">Fahim Ahmed</span>
                </p>
              </div>
              <div class="w-1/4">
                <p class="flex justify-center items-center gap-x-[5px]">
                    <span class="form-group flex mb-0"><input type="checkbox" id="read11"><label for="read11" class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]"></label></span> 
                    <span class="text-[12px] xl:text-[16px] leading-5 xl:leading-6 mt-[2px] text-secondaryText">Fahim Ahmed</span>
                </p>
              </div>
              <div class="w-1/4">
                <p class="flex justify-center items-center gap-x-[5px]">
                    <span class="form-group flex mb-0"><input type="checkbox" id="read11"><label for="read11" class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]"></label></span> 
                    <span class="text-[12px] xl:text-[16px] leading-5 xl:leading-6 mt-[2px] text-secondaryText">ASSIGN AGENT</span>
                </p>
              </div>
              <div class="w-1/4">
                <p class="flex justify-center items-center gap-x-[5px]">
                    <span class="form-group flex mb-0"><input type="checkbox" id="read11"><label for="read11" class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]"></label></span> 
                    <span class="text-[12px] xl:text-[16px] leading-5 xl:leading-6 mt-[2px] text-secondaryText">Fahim Ahmed</span>
                </p>
              </div>
            </div>

            <hr class="my-[20px] border-t border-dashed border-[#DBDBDB]">
            <div class="flex items-center gap-x-[10px] xl:gap-x-[16px] mt-[12px] xl:mt-[12px]">
              <div class="w-1/4">
                <p class="flex items-center gap-x-[5px]">
                    <span class="form-group flex mb-0"><input type="checkbox" id="read11"><label for="read11" class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]"></label></span> 
                    <span class="text-[12px] xl:text-[16px] leading-5 xl:leading-6 mt-[2px] text-secondaryText">Fahim Ahmed</span>
                </p>
              </div>
              <div class="w-1/4">
                <p class="flex justify-center items-center gap-x-[5px]">
                    <span class="form-group flex mb-0"><input type="checkbox" id="read11"><label for="read11" class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]"></label></span> 
                    <span class="text-[12px] xl:text-[16px] leading-5 xl:leading-6 mt-[2px] text-secondaryText">Fahim Ahmed</span>
                </p>
              </div>
              <div class="w-1/4">
                <p class="flex justify-center items-center gap-x-[5px]">
                    <span class="form-group flex mb-0"><input type="checkbox" id="read11"><label for="read11" class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]"></label></span> 
                    <span class="text-[12px] xl:text-[16px] leading-5 xl:leading-6 mt-[2px] text-secondaryText">ASSIGN AGENT</span>
                </p>
              </div>
              <div class="w-1/4">
                <p class="flex justify-center items-center gap-x-[5px]">
                    <span class="form-group flex mb-0"><input type="checkbox" id="read11"><label for="read11" class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]"></label></span> 
                    <span class="text-[12px] xl:text-[16px] leading-5 xl:leading-6 mt-[2px] text-secondaryText">Fahim Ahmed</span>
                </p>
              </div>
            </div>

            <hr class="my-[20px] border-t border-dashed border-[#DBDBDB]">
            <div class="flex items-center gap-x-[10px] xl:gap-x-[16px] mt-[12px] xl:mt-[12px]">
              <div class="w-1/4">
                <p class="flex items-center gap-x-[5px]">
                    <span class="form-group flex mb-0"><input type="checkbox" id="read11"><label for="read11" class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]"></label></span> 
                    <span class="text-[12px] xl:text-[16px] leading-5 xl:leading-6 mt-[2px] text-secondaryText">Fahim Ahmed</span>
                </p>
              </div>
              <div class="w-1/4">
                <p class="flex justify-center items-center gap-x-[5px]">
                    <span class="form-group flex mb-0"><input type="checkbox" id="read11"><label for="read11" class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]"></label></span> 
                    <span class="text-[12px] xl:text-[16px] leading-5 xl:leading-6 mt-[2px] text-secondaryText">Fahim Ahmed</span>
                </p>
              </div>
              <div class="w-1/4">
                <p class="flex justify-center items-center gap-x-[5px]">
                    <span class="form-group flex mb-0"><input type="checkbox" id="read11"><label for="read11" class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]"></label></span> 
                    <span class="text-[12px] xl:text-[16px] leading-5 xl:leading-6 mt-[2px] text-secondaryText">ASSIGN AGENT</span>
                </p>
              </div>
              <div class="w-1/4">
                <p class="flex justify-center items-center gap-x-[5px]">
                    <span class="form-group flex mb-0"><input type="checkbox" id="read11"><label for="read11" class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]"></label></span> 
                    <span class="text-[12px] xl:text-[16px] leading-5 xl:leading-6 mt-[2px] text-secondaryText">Fahim Ahmed</span>
                </p>
              </div>

            </div>

            <hr class="my-[20px] border-t border-dashed border-[#DBDBDB]">
            <div class="flex items-center gap-x-[10px] xl:gap-x-[16px] mt-[12px] xl:mt-[12px]">
              <div class="w-1/4">
                <p class="flex items-center gap-x-[5px]">
                    <span class="form-group flex mb-0"><input type="checkbox" id="read11"><label for="read11" class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]"></label></span> 
                    <span class="text-[12px] xl:text-[16px] leading-5 xl:leading-6 mt-[2px] text-secondaryText">Fahim Ahmed</span>
                </p>
              </div>
              <div class="w-1/4">
                <p class="flex justify-center items-center gap-x-[5px]">
                    <span class="form-group flex mb-0"><input type="checkbox" id="read11"><label for="read11" class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]"></label></span> 
                    <span class="text-[12px] xl:text-[16px] leading-5 xl:leading-6 mt-[2px] text-secondaryText">Fahim Ahmed</span>
                </p>
              </div>
              <div class="w-1/4">
                <p class="flex justify-center items-center gap-x-[5px]">
                    <span class="form-group flex mb-0"><input type="checkbox" id="read11"><label for="read11" class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]"></label></span> 
                    <span class="text-[12px] xl:text-[16px] leading-5 xl:leading-6 mt-[2px] text-secondaryText">ASSIGN AGENT</span>
                </p>
              </div>
              <div class="w-1/4">
                <p class="flex justify-center items-center gap-x-[5px]">
                    <span class="form-group flex mb-0"><input type="checkbox" id="read11"><label for="read11" class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]"></label></span> 
                    <span class="text-[12px] xl:text-[16px] leading-5 xl:leading-6 mt-[2px] text-secondaryText">Fahim Ahmed</span>
                </p>
              </div>
            </div>

            <div class="flex justify-center items-center mt-[36px]" data-v-0d08c475="">
              <router-link to="/manageUserRestrictionFilled" class="bg-[#48A43F] bg-opacity-30 flex gap-x-3 justify-center items-center text-white rounded-full px-5 py-3 mr-4 leading-[12px] text-[10px] xl:leading-[16px] xl:text-[12px]" data-v-0d08c475="">
                  <span data-v-0d08c475=""><img src="/src/assets/svg/save.svg" alt="" data-v-0d08c475=""></span> Save changes
                </router-link>
             </div>
            </div>
         </div>
        </div>
  </template>
  
  
  <style>
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
      background-color: transparent;
      border: 2px solid #151414;
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05), inset 0px -15px 10px -12px rgba(0, 0, 0, 0.05);
      display: inline-block;
      position: relative;
      vertical-align: middle;
      cursor: pointer;
      margin-right: 5px;
      padding: 8px;
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
      top: 3px;
      left: 8px;
      width: 6px;
      height: 14px;
      border:2px solid white;
      border-width: 0 2px 2px 0;
      transform: rotate(45deg);
      /*background-color: white;*/
    }
    </style>
  