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
            <a class="menu">Bus Company</a>
            <a class="menu">Routes</a>
            <a class="menu">Counter</a>
            <a class="bg-corporate w-full text-white p-1 rounded-sm block cursor-pointer">Trips</a>
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
  
              <button class="flex justify-center items-center gap-x-[10px]">
                <img src="../assets/svg/Back.svg" class="w-[12px] h-[12px]" alt="">
                <p class="text-primaryText leading-[12px] text-[10px] xl:leading-[16px] xl:text-[12px] font-[500]">Back</p>
              </button>
              <div class="flex flex-col gap-y-[4px]">
                <p class="lg:leading-[16px] xl:leading-[28px] lg:text-[14px] xl:text-[20px] font-[600] text-primaryText">Create Trip</p>
                <div class="flex justify-center items-center gap-x-[6px] mr-2">
                  <p class="text-secondaryText leading-[12px] text-[8px] xl:leading-[16px] xl:text-[12px] font-[400]">Trips</p>
                  <img src="../assets/svg/bgBack.svg" alt="" class="w-1 h-2">
                  <p class="text-secondaryText leading-[12px] text-[8px] xl:leading-[16px] xl:text-[12px] font-[400]">Desh Travels</p>
                  <img src="../assets/svg/bgBack.svg" alt="" class="w-1 h-2">
                  <p class="text-secondaryText leading-[12px] text-[8px] xl:leading-[16px] xl:text-[12px] font-[400]">Trip heading</p>
                  <img src="../assets/svg/bgBack.svg" alt="" class="w-1 h-2">
                  <p class="text-secondaryText leading-[12px] text-[8px] xl:leading-[16px] xl:text-[12px] font-[400]">Edit</p>
                </div>
              </div>
            </div>
            <div class="flex gap-x-[24px] p-4 w-1/2 justify-end items-center pr-2 ">
              <!--            <input type="text" class="w-[270px] h-[40px] border border-[#DBDBDB] placeholder:text-[#4D4D4F] placeholder:text-[14px] leading-[20px] rounded-[4px] pl-8 focus:outline-none" placeholder="PNR or mobile number">-->
              <!--            <img src="../assets/svg/search.svg" class="h-5 w-5 absolute left-[242px]" alt="">-->
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
          <div class="bg-white rounded-[8px]">
            <div class="p-4">
              <div class="flex items-center gap-x-[6px] mr-2">
                <p class="text-primaryText leading-[12px] text-[8px] xl:leading-[16px] xl:text-[12px] font-[6400]">Trip Information</p>
                <img src="../assets/svg/bgBack.svg" alt="" class="w-1 h-2">
                <p class="text-secondaryText leading-[12px] text-[8px] xl:leading-[16px] xl:text-[12px] font-[600]">Boarding & Dropping</p>
                <img src="../assets/svg/bgBack.svg" alt="" class="w-1 h-2">
                <p class="text-secondaryText leading-[12px] text-[8px] xl:leading-[16px] xl:text-[12px] font-[400]">Seat & Fare</p>
                <img src="../assets/svg/bgBack.svg" alt="" class="w-1 h-2">
                <p class="text-secondaryText leading-[12px] text-[8px] xl:leading-[16px] xl:text-[12px] font-[400]">Permissions & Commissions</p>
                <img src="../assets/svg/bgBack.svg" alt="" class="w-1 h-2">
                <p class="text-secondaryText leading-[12px] text-[8px] xl:leading-[16px] xl:text-[12px] font-[400]">Assign Counterman & Agent</p>
                <img src="../assets/svg/bgBack.svg" alt="" class="w-1 h-2">
                <p class="text-secondaryText leading-[12px] text-[8px] xl:leading-[16px] xl:text-[12px] font-[400]">Assign Qouta</p>
                <img src="../assets/svg/bgBack.svg" alt="" class="w-1 h-2">
                <p class="text-secondaryText leading-[12px] text-[8px] xl:leading-[16px] xl:text-[12px] font-[400]">Trip Facilities & Policies</p>
                <img src="../assets/svg/bgBack.svg" alt="" class="w-1 h-2">
                <p class="text-secondaryText leading-[12px] text-[8px] xl:leading-[16px] xl:text-[12px] font-[400]">Preview</p>
              </div>
             <div class="flex justify-between items-center">
               <p class="text-[#1E88E5] leading-[20px] xl:leading-[24px] text-[14px] xl:text-[16px] font-[500] mt-2">BOARDING & DROPPING</p>
               <p class="flex gap-x-[10px]">
                 <img src="../assets/svg/back_arrow.svg" alt="">
                 <a href="#" class="leading-[12px] xl:leading-[16px] text-[10px] xl:text-[12px] text-primaryText border-b-2 border-primaryText block font-[600]">Prev .step</a>
               </p>
             </div>
            </div>
          </div>
          <div class="bg-white rounded-[8px] mt-[12px] xl:mt-[16px]">
            <div class="p-4">
              <p class="text-[#1E88E5] leading-[20px] xl:leading-[24px] text-[14px] xl:text-[16px] font-[500]">BOARDING POINT INFORMATION</p>
              
              <div>
                <div class="flex justify-between items-center">
                <p class="leading-[12px] xl:leading-[16px] text-[10px] xl:text-[12px] text-primaryText">BOARDING POINT 1</p>
                <div class="form-group mt-4">
                  <input type="checkbox" id="read">
                  <label for="read" class="text-primaryText leading-[20px] text-[14px] xl:leading-[24px] xl:text-[16px] font-[400]">Make available for Jatri</label>
                </div>
              </div>
              <div class="flex justify-center items-center gap-x-[10px] xl:gap-x-[16px]">
                <div class="w-1/4">
                  <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">City</p>
                  <Dropdown class="w-full py-[4px] mt-[10px]" v-model="selectedCity" :opti6ns="cities" optionLabel="name" placeholder="Select city" />
                </div>
                <div class="w-1/4">
                  <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">Stoppage</p>
                  <Dropdown class="w-full py-[4px] mt-[10px]" v-model="selectedCity" :opti6ns="cities" optionLabel="name" placeholder="Select stoppage" />
                </div>
                <div class="w-1/4">
                  <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">Counter</p>
                  <Dropdown class="w-full py-[4px] mt-[10px]" v-model="selectedCity" :opti6ns="cities" optionLabel="name" placeholder="Select stoppage" />
                </div>
                <div class="w-1/4">
                  <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">Boarding date</p>
                  <div class="w-full h-[40px] border border-[#DBDBDB] flex justify-between items-center mt-[10px] leading-[20px] rounded-[4px] xl:px-[8px] overflow-hidden" >
                    <input type="text" class="outline-none pl-2 placeholder:text-[#4D4D4F] placeholder:text-[14px] placeholder:leading-[20px]" placeholder="Select boarding date">
                    <img src="../assets/svg/count2.svg" class="h-5 w-5 mr-5 2xl:mr-0" alt="">
                  </div>
                </div>
                <div class="w-1/4">
                  <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">Boarding time</p>
                  <input type="text" class="createNormalInput" placeholder="Enter boarding time">
                </div>
               </div>
              </div>

              <hr class="mt-[16px] border-t border-dashed border-corporateBorder">
              <div>
                <div class="flex justify-between items-center">
                <div>
                  <p class="leading-[12px] xl:leading-[16px] text-[10px] xl:text-[12px] text-primaryText">BOARDING POINT 2</p>
                </div>
                <div class="flex items-center gap-x-[26px]">
                  <div class="form-group mt-4">
                    <input type="checkbox" id="read2">
                    <label for="read2" class="text-primaryText leading-[20px] text-[14px] xl:leading-[24px] xl:text-[16px] font-[400]">Make available for Jatri</label>
                  </div>
                  <div>
                    <img src="../assets/svg/close-cirlce.svg" alt="Close">
                  </div>
                </div>
              </div>
              <div class="flex justify-center items-center gap-x-[10px] xl:gap-x-[16px]">
                <div class="w-1/4">
                  <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">City</p>
                  <Dropdown class="w-full py-[4px] mt-[10px]" v-model="selectedCity" :opti6ns="cities" optionLabel="name" placeholder="Select city" />
                </div>
                <div class="w-1/4">
                  <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">Stoppage</p>
                  <Dropdown class="w-full py-[4px] mt-[10px]" v-model="selectedCity" :opti6ns="cities" optionLabel="name" placeholder="Select stoppage" />
                </div>
                <div class="w-1/4">
                  <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">Counter</p>
                  <Dropdown class="w-full py-[4px] mt-[10px]" v-model="selectedCity" :opti6ns="cities" optionLabel="name" placeholder="Select stoppage" />
                </div>
                <div class="w-1/4">
                  <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">Boarding date</p>
                  <div class="w-full h-[40px] border border-[#DBDBDB] flex justify-between items-center mt-[10px] leading-[20px] rounded-[4px] xl:px-[8px] overflow-hidden" >
                    <input type="text" class="outline-none pl-2 placeholder:text-[#4D4D4F] placeholder:text-[14px] placeholder:leading-[20px]" placeholder="Select boarding date">
                    <img src="../assets/svg/count2.svg" class="h-5 w-5 mr-5 2xl:mr-0" alt="">
                  </div>
                </div>
                <div class="w-1/4">
                  <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">Boarding time</p>
                  <input type="text" class="createNormalInput" placeholder="Enter boarding time">
                </div>
               </div>
              </div>

              <button class="w-full border border-dashed border-[#B6B6B6] flex justify-center items-center bg-corporateBg rounded-[4px] mt-4">
                <div class="flex justify-center items-center gap-x-[11px] py-[12px]">
                  <img src="../assets/svg/createPlus.svg" class="w-[10px] h-[10px]" alt="">
                  <p class="text-primaryText font-[600] leading-[20px] text-[14px]">Add another boarding point</p>
                </div>
              </button>
            </div>
            
            <hr class="border-t border-corporateBorder">
            <div class="p-4">
              <p class="text-[#1E88E5] leading-[20px] xl:leading-[24px] text-[14px] xl:text-[16px] font-[500]">DROPPING POINT INFORMATION</p>
  
              <div>
                <div class="flex justify-between items-center">
                <p class="leading-[12px] xl:leading-[16px] text-[10px] xl:text-[12px] text-primaryText">DROPPING POINT 1</p>
                <div class="form-group mt-4">
                  <input type="checkbox" id="read3">
                  <label for="read3" class="text-primaryText leading-[20px] text-[14px] xl:leading-[24px] xl:text-[16px] font-[400]">Make available for Jatri</label>
                </div>
              </div>
              <div class="flex justify-center items-center gap-x-[10px] xl:gap-x-[16px]">
                <div class="w-1/4">
                  <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">City</p>
                  <Dropdown class="w-full py-[4px] mt-[10px]" v-model="selectedCity" :opti6ns="cities" optionLabel="name" placeholder="Select city" />
                </div>
                <div class="w-1/4">
                  <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">Stoppage</p>
                  <Dropdown class="w-full py-[4px] mt-[10px]" v-model="selectedCity" :opti6ns="cities" optionLabel="name" placeholder="Select stoppage" />
                </div>
                <div class="w-1/4">
                  <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">Counter</p>
                  <Dropdown class="w-full py-[4px] mt-[10px]" v-model="selectedCity" :opti6ns="cities" optionLabel="name" placeholder="Select stoppage" />
                </div>
                <div class="w-1/4">
                  <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">Dropping date</p>
                  <div class="w-full h-[40px] border border-[#DBDBDB] flex justify-between items-center mt-[10px] leading-[20px] rounded-[4px] xl:px-[8px] overflow-hidden" >
                    <input type="text" class="outline-none pl-2 placeholder:text-[#4D4D4F] placeholder:text-[14px] placeholder:leading-[20px]" placeholder="Select dropping date">
                    <img src="../assets/svg/count2.svg" class="h-5 w-5 mr-5 2xl:mr-0" alt="">
                  </div>
                </div>
                <div class="w-1/4">
                  <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">Dropping time</p>
                  <input type="text" class="createNormalInput" placeholder="Enter boarding time">
                </div>
               </div>
              </div>

              <hr class="mt-[16px] border-t border-dashed border-corporateBorder">
              <div>
                <div class="flex justify-between items-center">
                <div>
                  <p class="leading-[12px] xl:leading-[16px] text-[10px] xl:text-[12px] text-primaryText">DROPPING POINT 2</p>
                </div>
                <div class="flex items-center gap-x-[26px]">
                  <div class="form-group mt-4">
                    <input type="checkbox" id="read4">
                    <label for="read4" class="text-primaryText leading-[20px] text-[14px] xl:leading-[24px] xl:text-[16px] font-[400]">Make available for Jatri</label>
                  </div>
                  <div>
                    <img src="../assets/svg/close-cirlce.svg" alt="Close">
                  </div>
                </div>
              </div>
              <div class="flex justify-center items-center gap-x-[10px] xl:gap-x-[16px]">
                <div class="w-1/4">
                  <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">City</p>
                  <Dropdown class="w-full py-[4px] mt-[10px]" v-model="selectedCity" :opti6ns="cities" optionLabel="name" placeholder="Select city" />
                </div>
                <div class="w-1/4">
                  <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">Stoppage</p>
                  <Dropdown class="w-full py-[4px] mt-[10px]" v-model="selectedCity" :opti6ns="cities" optionLabel="name" placeholder="Select stoppage" />
                </div>
                <div class="w-1/4">
                  <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">Counter</p>
                  <Dropdown class="w-full py-[4px] mt-[10px]" v-model="selectedCity" :opti6ns="cities" optionLabel="name" placeholder="Select stoppage" />
                </div>
                <div class="w-1/4">
                  <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">Dropping date</p>
                  <div class="w-full h-[40px] border border-[#DBDBDB] flex justify-between items-center mt-[10px] leading-[20px] rounded-[4px] xl:px-[8px] overflow-hidden" >
                    <input type="text" class="outline-none pl-2 placeholder:text-[#4D4D4F] placeholder:text-[14px] placeholder:leading-[20px]" placeholder="Select dropping date">
                    <img src="../assets/svg/count2.svg" class="h-5 w-5 mr-5 2xl:mr-0" alt="">
                  </div>
                </div>
                <div class="w-1/4">
                  <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">Dropping time</p>
                  <input type="text" class="createNormalInput" placeholder="Enter dropping time">
                </div>
               </div>
              </div>

              <button class="w-full border border-dashed border-[#B6B6B6] flex justify-center items-center bg-corporateBg rounded-[4px] mt-4">
                <div class="flex justify-center items-center gap-x-[11px] py-[12px]">
                  <img src="../assets/svg/createPlus.svg" class="w-[10px] h-[10px]" alt="">
                  <p class="text-primaryText font-[600] leading-[20px] text-[14px]">Add another dropping point</p>
                </div>
              </button>
            </div>
          </div>

          <div class="bg-white rounded-[8px] mt-4">
          <div class="p-4">
            <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600] mb-[17px]">
              Update for an period</p>

            <!-- table start -->
            <table class="min-w-full">
              <thead>
              <tr class="border border-corporateBorder">
                <th class="border-r border-[#EDEDED] text-4 leading-6 font-[400] p-[10px] uppercase w-1/2" scope="col"
                    style="border-radius:8px 0 0 0;"> DATE
                </th>
                <th class="text-4 leading-6 font-[400] p-[10px] uppercase flex items-center justify-center gap-x-5" scope="col"
                    style="border-radius:0 8px 0 0;"> <span>Check for all</span> <span><div class="form-group mb-0"><input id="readAll" type="checkbox"><label class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]"
                                                                                       for="readAll"></label>
                  </div></span>
                </th>
              </tr>
              </thead>

              <tbody>
              <tr class="bg-corporateBg border-l border-r border-corporateBorder">
                <td class="border-r border-[#EDEDED] text-4 text-center leading-6 p-[16px]">18 July 2022</td>
                <td class="text-4 text-center leading-6 p-[16px]">
                  <div class="form-group mb-0"><input id="read1" type="checkbox"><label class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]"
                                                                                       for="read1"></label>
                  </div>
                </td>
              </tr>
              <tr class="border-l border-r border-corporateBorder">
                <td class="border-r border-[#EDEDED] text-4 text-center leading-6 p-[16px]">18 July 2022</td>
                <td class="text-4 text-center leading-6 p-[16px]">
                  <div class="form-group mb-0"><input id="read2" type="checkbox"><label class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]"
                                                                                       for="read2"></label>
                  </div>
                </td>
              </tr>
              <tr class="bg-corporateBg border-l border-r border-corporateBorder">
                <td class="border-r border-[#EDEDED] text-4 text-center leading-6 p-[16px]">18 July 2022</td>
                <td class="text-4 text-center leading-6 p-[16px]">
                  <div class="form-group mb-0"><input id="read3" type="checkbox"><label class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]"
                                                                                       for="read3"></label>
                  </div>
                </td>
              </tr>
              <tr class="border-l border-r border-corporateBorder">
                <td class="border-r border-[#EDEDED] text-4 text-center leading-6 p-[16px]">18 July 2022</td>
                <td class="text-4 text-center leading-6 p-[16px]">
                  <div class="form-group mb-0"><input id="read4" type="checkbox"><label class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]"
                                                                                       for="read4"></label>
                  </div>
                </td>
              </tr>
              <tr class="bg-corporateBg border-l border-r border-corporateBorder">
                <td class="border-r border-[#EDEDED] text-4 text-center leading-6 p-[16px]">18 July 2022</td>
                <td class="text-4 text-center leading-6 p-[16px]">
                  <div class="form-group mb-0"><input id="read5" type="checkbox"><label class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]"
                                                                                       for="read5"></label>
                  </div>
                </td>
              </tr>
              <tr class="border-l border-r border-corporateBorder">
                <td class="border-r border-[#EDEDED] text-4 text-center leading-6 p-[16px]">18 July 2022</td>
                <td class="text-4 text-center leading-6 p-[16px]">
                  <div class="form-group mb-0"><input id="read6" type="checkbox"><label class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]"
                                                                                       for="read6"></label>
                  </div>
                </td>
              </tr>
              <tr class="bg-corporateBg border-l border-r border-b border-corporateBorder">
                <td class="border-r border-[#EDEDED] text-4 text-center leading-6 p-[16px]">18 July 2022</td>
                <td class="text-4 text-center leading-6 p-[16px]">
                  <div class="form-group mb-0"><input id="read6" type="checkbox"><label class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]"
                                                                                       for="read6"></label>
                  </div>
                </td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>


          <div class="flex justify-center items-center my-5">
            <button class="bg-[#48A43F] flex gap-x-3 justify-center items-center text-white rounded-full px-5 py-3 leading-[12px] text-[10px] xl:leading-[16px] xl:text-[12px]" data-v-0d08c475="">
                    <span data-v-0d08c475=""><img src="/src/assets/svg/save.svg" alt="" data-v-0d08c475=""></span> Save changes
                </button>
            <button class="bg-corporate flex gap-x-3 justify-center items-center text-white rounded-full px-5 py-3 ml-6 leading-[12px] text-[10px] xl:leading-[16px] xl:text-[12px]">
              Next step<span><img alt="" class="h-[9.33px] w-[9.33px]" src="../assets/svg/right-white-arrow.svg"></span>
            </button>
          </div>


          <div class="bg-white rounded-[8px]">
          <div class="p-4 flex justify-between items-center">
            <div>
              <p class="text-primaryText leading-[28px] text-[20px] xl:leading-[32px] xl:text-[24px] font-[600] mb-[8px]">Cancel trip</p>
              <p class="text-primaryText ">By clicking “Cancel trip”, it will cancel the trip and the tickets in the trip. This action could not be undone.</p>
            </div>
            <div>
              <button class="border border-corporateBorder items-center text-corporateError rounded-full px-6 py-3 leading-[12px] text-[10px] xl:leading-[16px] xl:text-[12px]">
              Cancel trip
              </button>
            </div>
          </div>
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
    -webkit-appearance: none;
    background-color: transparent;
    border: 2px solid #151414;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05), inset 0px -15px 10px -12px rgba(0, 0, 0, 0.05);
    padding: 8px;
    display: inline-block;
    position: relative;
    vertical-align: middle;
    cursor: pointer;
    margin-right: 11px;
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
    left: 7px;
    width: 6px;
    height: 14px;
    border:2px solid white;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
    /*background-color: white;*/
  }
  </style>
  
  <script>
  import ashDropdown from "../components/AshDropdown.vue";
  export  default {
    components:{
      ashDropdown
    },
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
  