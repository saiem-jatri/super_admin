<template>
    <div class="flex bg-corporateBg">
      <!-- Side Nav bar -->
      <div class="h-screen w-[280px] bg-white border-r border-[#DBDBDB]">
        <div class="flex flex-col justify-between">
          <div class="px-[10px] flex justify-center items-center py-[30px]">
            <img src="@/assets/imgs/Logo.png" alt="" class="w-[66px] h-[32px]">
          </div>
          <div class="px-[10px] overflow-y-auto h-[calc(100vh-150px)]">
            <a>Dashboard</a>
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
                  <p class="text-secondaryText leading-[12px] text-[8px] xl:leading-[16px] xl:text-[12px] font-[400]">Add trip</p>
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
                <p class="text-primaryText leading-[12px] text-[8px] xl:leading-[16px] xl:text-[12px] font-[600]">Trip Information</p>
                <img src="../assets/svg/bgBack.svg" alt="" class="w-1 h-2">
                <p class="text-secondaryText leading-[12px] text-[8px] xl:leading-[16px] xl:text-[12px] font-[400]">Boarding & Dropping</p>
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
              <p class="text-[#1E88E5] leading-[20px] xl:leading-[24px] text-[14px] xl:text-[16px] font-[500] mt-2">PREVIEW</p>
            </div>
          </div>
          <div class="bg-white rounded-[8px] my-[12px] xl:mt-[16px] mb-[20px]">
            <div class="p-4">

                <div class="flex justify-between">
                    <p class="text-[#676769] leading-[20px] xl:leading-[24px] text-[14px] xl:text-[16px] font-[500]">TRIP PREVIEW</p>
                    <button class="bg-[#1E88E5] text-white leading-[18px] text-[12px] font-[400] border border-corporateBorder rounded-full px-[20px] py-[6px]">Edit</button>
                </div>
                <hr class="my-[12px] xl:my-[16px] border-t border-corporateBorder">   

              <div class="flex justify-center items-center gap-x-[10px] xl:gap-x-[16px]">
                <div class="w-1/4">
                    <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">Bus operator</p>
                    <div class="w-full py-[10px] px-[8px] mt-[10px] text-[14px] leading-5 rounded text-primaryText bg-corporateBg">Desh Travels</div>
                </div>
                <div class="w-1/4">
                    <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">Bus model</p>
                    <div class="w-full py-[10px] px-[8px] mt-[10px] text-[14px] leading-5 rounded text-primaryText bg-corporateBg">Hino 1J - 36 Seat</div>
                </div>
                <div class="w-1/4">
                    <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">Bus reg. no</p>
                    <div class="w-full py-[10px] px-[8px] mt-[10px] text-[14px] leading-5 rounded text-primaryText bg-corporateBg">092</div>
                </div>
                <div class="w-1/4">
                    <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">Bus operator</p>
                    <div class="w-full py-[10px] px-[8px] mt-[10px] text-[14px] leading-5 rounded text-primaryText bg-corporateBg">092</div>
                </div>
              </div>

              <div class="flex justify-start items-center gap-x-[10px] xl:gap-x-[16px] mt-[12px] xl:mt-[16px]">
                <div class="w-1/4">
                  <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">Route</p>
                  <div class="w-full py-[10px] px-[8px] mt-[10px] text-[14px] leading-5 rounded text-primaryText bg-corporateBg">Dhaka-Tangail-Bogura-Rangpur</div>
                </div>
                <div class="w-1/4">
                  <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">Trip heading</p>
                  <div class="w-full py-[10px] px-[8px] mt-[10px] text-[14px] leading-5 rounded text-primaryText bg-corporateBg">092, Dhaka-Rangpur</div>
                </div>
                <div class="w-1/4">
                  <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">Trip auto renewal in</p>
                  <div class="w-full mt-[10px] h-[40px] bg-corporateBg flex justify-between items-center leading-[20px] rounded-[4px] overflow-hidden divide-x" >
                    <div class="flex justify-between items-center">
                      <div class="flex justify-between items-center selection:w-[115px] xl:w-[180px]">
                        <select class="form-select appearance-none w-full block px-3 pl-[22px] py-1.5 text-base border-none bg-corporateBg rounded focus:text-gray-70 focus:outline-none" aria-label="Default select example">
                          <option selected>3</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                      </div>
                    </div>
                    <p class="p-4 text-[#676769] leading-[20px] text-[14px] font-[400]">Days</p>
                  </div>
                </div>
              </div>
            </div>

        <hr class="mt-[12px] xl:mt-[4px] border-t border-corporateBorder">
          <div class="p-4">
            <p class="text-[#1E88E5] leading-[20px] xl:leading-[24px] text-[14px] xl:text-[16px] font-[500]">DATE & TIME</p>
            <div class="flex justify-center items-center gap-x-[10px] xl:gap-x-[16px] mt-[12px] xl:mt-[16px]">
              <div class="w-1/4">
                <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">Departure date</p>
                <div class="w-full py-[10px] px-[8px] mt-[10px] text-[14px] leading-5 rounded text-primaryText bg-corporateBg">17 July 2022</div>
              </div>
              <div class="w-1/4">
                <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">Departure time</p>
                <div class="w-full py-[10px] px-[8px] mt-[10px] text-[14px] leading-5 rounded text-primaryText bg-corporateBg">09:45 AM</div>
              </div>
              <div class="w-1/4">
                <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">Arrival date</p>
                <div class="w-full py-[10px] px-[8px] mt-[10px] text-[14px] leading-5 rounded text-primaryText bg-corporateBg">17 July 2022</div>
              </div>
              <div class="w-1/4">
                <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">Arrival time</p>
                <div class="w-full py-[10px] px-[8px] mt-[10px] text-[14px] leading-5 rounded text-primaryText bg-corporateBg">09:45 PM</div>
              </div>
            </div>
          </div>

          <hr class="mt-[12px] xl:mt-[4px] border-t border-corporateBorder">
          <div class="p-4">
            <p class="text-[#1E88E5] leading-[20px] xl:leading-[24px] text-[14px] xl:text-[16px] font-[500]">BOARDING INFORMATION</p>
            <div class="flex justify-center items-center gap-x-[10px] xl:gap-x-[16px] mt-[12px] xl:mt-[16px]">
              <div class="w-1/4">
                <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">City</p>
                <div class="w-full py-[10px] px-[8px] mt-[10px] text-[14px] leading-5 rounded text-primaryText bg-corporateBg">Dhaka</div>
              </div>
              <div class="w-1/5">
                <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">Stoppage</p>
                <div class="w-full py-[10px] px-[8px] mt-[10px] text-[14px] leading-5 rounded text-primaryText bg-corporateBg">Arambag</div>
              </div>
              <div class="w-1/5">
                <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">Counter</p>
                <div class="w-full py-[10px] px-[8px] mt-[10px] text-[14px] leading-5 rounded text-primaryText bg-corporateBg">Arambag Counter</div>
              </div>
              <div class="w-1/5">
                <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">Dropping date</p>
                <div class="w-full py-[10px] px-[8px] mt-[10px] text-[14px] leading-5 rounded text-primaryText bg-corporateBg">19 July 2022</div>
              </div>
              <div class="w-1/5">
                <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">Dropping time</p>
                <div class="w-full py-[10px] px-[8px] mt-[10px] text-[14px] leading-5 rounded text-primaryText bg-corporateBg">09:45 PM</div>
              </div>
            </div>

            <hr class="my-[16px] border-t border-dashed border-corporateBorder">
            <div class="flex justify-center items-center gap-x-[10px] xl:gap-x-[16px] mt-[12px] xl:mt-[16px]">
              <div class="w-1/4">
                <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">City</p>
                <div class="w-full py-[10px] px-[8px] mt-[10px] text-[14px] leading-5 rounded text-primaryText bg-corporateBg">Dhaka</div>
              </div>
              <div class="w-1/5">
                <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">Stoppage</p>
                <div class="w-full py-[10px] px-[8px] mt-[10px] text-[14px] leading-5 rounded text-primaryText bg-corporateBg">Arambag</div>
              </div>
              <div class="w-1/5">
                <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">Counter</p>
                <div class="w-full py-[10px] px-[8px] mt-[10px] text-[14px] leading-5 rounded text-primaryText bg-corporateBg">Arambag Counter</div>
              </div>
              <div class="w-1/5">
                <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">Dropping date</p>
                <div class="w-full py-[10px] px-[8px] mt-[10px] text-[14px] leading-5 rounded text-primaryText bg-corporateBg">Same date</div>
              </div>
              <div class="w-1/5">
                <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">Dropping time</p>
                <div class="w-full py-[10px] px-[8px] mt-[10px] text-[14px] leading-5 rounded text-primaryText bg-corporateBg">09:45 PM</div>
              </div>
            </div>
          </div>

          <hr class="mt-[12px] xl:mt-[4px] border-t border-corporateBorder">
          <div class="p-4">
            <p class="text-[#1E88E5] leading-[20px] xl:leading-[24px] text-[14px] xl:text-[16px] font-[500]">BOARDING INFORMATION</p>
            <div class="flex justify-center items-center gap-x-[10px] xl:gap-x-[16px] mt-[12px] xl:mt-[16px]">
              <div class="w-1/4">
                <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">City</p>
                <div class="w-full py-[10px] px-[8px] mt-[10px] text-[14px] leading-5 rounded text-primaryText bg-corporateBg">Rangpur</div>
              </div>
              <div class="w-1/5">
                <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">Stoppage</p>
                <div class="w-full py-[10px] px-[8px] mt-[10px] text-[14px] leading-5 rounded text-primaryText bg-corporateBg">Rangpur Bus Stand</div>
              </div>
              <div class="w-1/5">
                <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">Counter</p>
                <div class="w-full py-[10px] px-[8px] mt-[10px] text-[14px] leading-5 rounded text-primaryText bg-corporateBg">Rangpur Bus Stand</div>
              </div>
              <div class="w-1/5">
                <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">Dropping date</p>
                <div class="w-full py-[10px] px-[8px] mt-[10px] text-[14px] leading-5 rounded text-primaryText bg-corporateBg">19 July 2022</div>
              </div>
              <div class="w-1/5">
                <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">Dropping time</p>
                <div class="w-full py-[10px] px-[8px] mt-[10px] text-[14px] leading-5 rounded text-primaryText bg-corporateBg">09:45 PM</div>
              </div>
            </div>

            <hr class="my-[16px] border-t border-dashed border-corporateBorder">
            <div class="flex justify-center items-center gap-x-[10px] xl:gap-x-[16px] mt-[12px] xl:mt-[16px]">
              <div class="w-1/4">
                <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">City</p>
                <div class="w-full py-[10px] px-[8px] mt-[10px] text-[14px] leading-5 rounded text-primaryText bg-corporateBg">Rangpur</div>
              </div>
              <div class="w-1/5">
                <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">Stoppage</p>
                <div class="w-full py-[10px] px-[8px] mt-[10px] text-[14px] leading-5 rounded text-primaryText bg-corporateBg">Rangpur Bus Stand</div>
              </div>
              <div class="w-1/5">
                <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">Counter</p>
                <div class="w-full py-[10px] px-[8px] mt-[10px] text-[14px] leading-5 rounded text-primaryText bg-corporateBg">Rangpur Bus Stand</div>
              </div>
              <div class="w-1/5">
                <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">Dropping date</p>
                <div class="w-full py-[10px] px-[8px] mt-[10px] text-[14px] leading-5 rounded text-primaryText bg-corporateBg">Same date</div>
              </div>
              <div class="w-1/5">
                <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">Dropping time</p>
                <div class="w-full py-[10px] px-[8px] mt-[10px] text-[14px] leading-5 rounded text-primaryText bg-corporateBg">09:45 PM</div>
              </div>
            </div>
          </div>

        <hr class="mt-[12px] xl:mt-[4px] border-t border-corporateBorder">
        <div class="p-4">
            <p class="text-[#1E88E5] leading-[20px] xl:leading-[24px] text-[14px] xl:text-[16px] font-[500]">TICKET FARE</p>
            <div class="w-[60%] xl:w-1/2 mt-3 xl:mt-4">
              <div class="flex justify-between gap-x-[20px] xl:gap-x-[27px]">
                <div class="w-full">
                  <div class="flex justify-between items-center">
                    <label for="#" class="leading-[16px] xl:leading-[24px] text-[12px] xl:text-[16px] mt-4 min-w-[123px]">Dhaka - Tangail:</label>
                    <div class="xl:ml-4">
                      <p class="leading-[16px] xl:leading-[20px] text-[14px] font-[400]">Economy</p>
                      <input type="text" class="w-[120px] bg-corporateBg rounded-[4px] px-2 py-[6px] focus:outline-none mt-2" placeholder="Enter Fare">
                    </div>
                    <div class="flex gap-x-[16px] mt-4">
                      <div class="form-group mt-4">
                        <input type="checkbox" id="read1">
                        <label for="read1" class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]"> Jatri</label>
                      </div>
                      <div class="form-group mt-4">
                        <input type="checkbox" id="read2">
                        <label for="read2" class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]"> Counter</label>
                      </div>
                      <div class="form-group mt-4">
                        <input type="checkbox" id="read3">
                        <label for="read3" class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]"> Agent</label>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
              <div class="flex justify-between gap-x-[20px] xl:gap-x-[27px]">
                <div class="w-full">
                  <div class="flex justify-between items-center">
                    <label for="#" class="leading-[16px] xl:leading-[24px] text-[12px] xl:text-[16px] min-w-[123px]">Bogura - Rangpur:</label>
                    <input type="text" class="w-[120px] bg-corporateBg rounded-[4px] px-2 py-[6px] focus:outline-none mt-2" placeholder="Enter Fare">
                    <div class="flex gap-x-[16px]">
                      <div class="form-group mt-4">
                        <input type="checkbox" id="read">
                        <label for="read" class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]"> Jatri</label>
                      </div>
                      <div class="form-group mt-4">
                        <input type="checkbox" id="read">
                        <label for="read" class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]"> Counter</label>
                      </div>
                      <div class="form-group mt-4">
                        <input type="checkbox" id="read">
                        <label for="read" class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]"> Agent</label>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
              <div class="flex justify-between gap-x-[20px] xl:gap-x-[27px]">
                <div class="w-full">
                  <div class="flex justify-between items-center">
                    <label for="#" class="leading-[16px] xl:leading-[24px] text-[12px] xl:text-[16px] min-w-[123px]">Bogura - Rangpur:</label>
                    <input type="text" class="w-[120px] bg-corporateBg rounded-[4px] px-2 py-[6px] focus:outline-none mt-2" placeholder="Enter Fare">
                    <div class="flex gap-x-[16px]">
                      <div class="form-group mt-4">
                        <input type="checkbox" id="read">
                        <label for="read" class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]"> Jatri</label>
                      </div>
                      <div class="form-group mt-4">
                        <input type="checkbox" id="read">
                        <label for="read" class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]"> Counter</label>
                      </div>
                      <div class="form-group mt-4">
                        <input type="checkbox" id="read">
                        <label for="read" class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]"> Agent</label>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
              <div class="flex justify-between gap-x-[20px] xl:gap-x-[27px]">
                <div class="w-full">
                  <div class="flex justify-between items-center">
                    <label for="#" class="leading-[16px] xl:leading-[24px] text-[12px] xl:text-[16px] min-w-[123px]">Bogura - Rangpur:</label>
                    <input type="text" class="w-[120px] bg-corporateBg rounded-[4px] px-2 py-[6px] focus:outline-none mt-2" placeholder="Enter Fare">
                    <div class="flex gap-x-[16px]">
                      <div class="form-group mt-4">
                        <input type="checkbox" id="read">
                        <label for="read" class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]"> Jatri</label>
                      </div>
                      <div class="form-group mt-4">
                        <input type="checkbox" id="read">
                        <label for="read" class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]"> Counter</label>
                      </div>
                      <div class="form-group mt-4">
                        <input type="checkbox" id="read">
                        <label for="read" class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]"> Agent</label>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
              <div class="flex justify-between gap-x-[20px] xl:gap-x-[27px]">
                <div class="w-full">
                  <div class="flex justify-between items-center">
                    <label for="#" class="leading-[16px] xl:leading-[24px] text-[12px] xl:text-[16px] min-w-[123px]">Bogura - Rangpur:</label>
                    <input type="text" class="w-[120px] bg-corporateBg rounded-[4px] px-2 py-[6px] focus:outline-none mt-2" placeholder="Enter Fare">
                    <div class="flex gap-x-[16px]">
                      <div class="form-group mt-4">
                        <input type="checkbox" id="read1">
                        <label for="read" class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]"> Jatri</label>
                      </div>
                      <div class="form-group mt-4">
                        <input type="checkbox" id="read2">
                        <label for="read" class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]"> Counter</label>
                      </div>
                      <div class="form-group mt-4">
                        <input type="checkbox" id="read3">
                        <label for="read" class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]"> Agent</label>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
              <div class="flex justify-between gap-x-[20px] xl:gap-x-[27px]">
                <div class="w-full">
                  <div class="flex justify-between items-center">
                    <label for="#" class="leading-[16px] xl:leading-[24px] text-[12px] xl:text-[16px] min-w-[123px]">Bogura - Rangpur:</label>
                    <input type="text" class="w-[120px] bg-corporateBg rounded-[4px] px-2 py-[6px] focus:outline-none mt-2" placeholder="Enter Fare">
                    <div class="flex gap-x-[16px]">
                      <div class="form-group mt-4">
                        <input type="checkbox" id="read4">
                        <label for="read" class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]"> Jatri</label>
                      </div>
                      <div class="form-group mt-4">
                        <input type="checkbox" id="read5">
                        <label for="read" class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]"> Counter</label>
                      </div>
                      <div class="form-group mt-4">
                        <input type="checkbox" id="read6">
                        <label for="read" class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]"> Agent</label>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
        </div>

        <hr class="border-t border-corporateBorder">
        <div class="p-4">
            <div class="w-[70%] xl:w-[60%]">
              <div class="flex justify-between">
                <div>
                  <p class="leading-[20px] xl:leading-[24px] text-[14px] xl:text-[16px] text-primaryText font-[600]">Bus model</p>
                  <select name="model" id="model" class="px-3 py-2 border border-corporateBorder rounded-[4px] focus:outline-none mt-[10px]">
                    <option value="Desh Travels, Hino 1J - 36 Seat">Desh Travels, Hino 1J - 36 Seat</option>
                  </select>
                  <div class="mt-[12px] xl:mt-[14px] bg-[#F1F9F1] rounded-[4px] py-[4px] px-[8px]">
                    <p class="leading-[12px] xl:leading-[16px] text-[10px] xl:text-[12px] text-primaryText">Bus type & class</p>
                    <p class="leading-[12px] xl:leading-[16px] text-[10px] xl:text-[12px] text-primaryText font-[600] mt-1">Non AC, Economoy class</p>
                  </div>
                </div>

                <div>
                  <div class="flex gap-x-[15px] xl:gap-x-[20px]">
                    <button class="seatButton">A1</button>
                    <button class="seatButton">A2</button>
                    <button class="seatButton hidden">A1</button>
                    <button class="seatButton">A3</button>
                    <button class="seatButton">A4</button>
                  </div>
                  <div class="flex gap-x-[15px] xl:gap-x-[20px] mt-[20px] xl:mt-[24px]">
                    <button class="seatButton">B1</button>
                    <button class="seatButton">B2</button>
                    <button class="seatButton hidden">A1</button>
                    <button class="seatButton">B3</button>
                    <button class="seatButton">B4</button>
                  </div>
                  <div class="flex gap-x-[15px] xl:gap-x-[20px] mt-[20px] xl:mt-[24px]">
                    <button class="seatButton">C1</button>
                    <button class="seatButton">C2</button>
                    <button class="seatButton hidden">A1</button>
                    <button class="seatButton">C3</button>
                    <button class="seatButton">C4</button>
                  </div>
                  <div class="flex gap-x-[15px] xl:gap-x-[20px] mt-[20px] xl:mt-[24px]">
                    <button class="seatButton">D1</button>
                    <button class="seatButton">D2</button>
                    <button class="seatButton hidden">A1</button>
                    <button class="seatButton">D3</button>
                    <button class="seatButton">D4</button>
                  </div>
                  <div class="flex gap-x-[15px] xl:gap-x-[20px] mt-[20px] xl:mt-[24px]">
                    <button class="seatButton">E1</button>
                    <button class="seatButton">E2</button>
                    <button class="seatButton hidden">A1</button>
                    <button class="seatButton">E3</button>
                    <button class="seatButton">E4</button>
                  </div>
                  <div class="flex gap-x-[15px] xl:gap-x-[20px] mt-[20px] xl:mt-[24px]">
                    <button class="seatButton">F1</button>
                    <button class="seatButton">F2</button>
                    <button class="seatButton hidden">A1</button>
                    <button class="seatButton">F3</button>
                    <button class="seatButton">F4</button>
                  </div>
                  <div class="flex gap-x-[15px] xl:gap-x-[20px] mt-[20px] xl:mt-[24px]">
                    <button class="seatButton">G1</button>
                    <button class="seatButton">G2</button>
                    <button class="seatButton hidden">A1</button>
                    <button class="seatButton">G3</button>
                    <button class="seatButton">G4</button>
                  </div>
                  <div class="flex gap-x-[15px] xl:gap-x-[20px] mt-[20px] xl:mt-[24px]">
                    <button class="seatButton">H1</button>
                    <button class="seatButton">H2</button>
                    <button class="seatButton hidden">A1</button>
                    <button class="seatButton">H3</button>
                    <button class="seatButton">H4</button>
                  </div>
                  <div class="flex gap-x-[15px] xl:gap-x-[20px] mt-[20px] xl:mt-[24px]">
                    <button class="seatButton">I1</button>
                    <button class="seatButton">I2</button>
                    <button class="seatButton hidden">A1</button>
                    <button class="seatButton">I3</button>
                    <button class="seatButton">I4</button>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <hr class="mt-[12px] xl:mt-[4px] border-t border-corporateBorder">
          <div class="p-4">
            <p class="text-[#1E88E5] leading-[20px] xl:leading-[24px] text-[14px] xl:text-[16px] font-[500]">TRIP PERMISSION</p>
            <div class="flex justify-center items-center gap-x-[10px] xl:gap-x-[16px] mt-[12px] xl:mt-[16px]">
              <div class="w-1/4">
                <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">Trip available for online</p>
                <div class="w-full py-[10px] px-[8px] mt-[10px] text-[14px] leading-5 rounded text-primaryText bg-corporateBg flex justify-between">
                  <div>2</div>
                  <div class="text-[#676769] leading-[20px] text-[14px] font-[400] border-l-2 px-4">hr</div>
                </div>
              </div>
              <div class="w-1/4">
                <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">Highest discount cap (TK)</p>
                <div class="w-full py-[10px] px-[8px] mt-[10px] text-[14px] leading-5 rounded text-primaryText bg-corporateBg">50</div>
              </div>
              <div class="w-1/4">
                <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">Top priority</p>
                <div class="flex justify-center items-center mt-[10px]"><button class="w-1/2 bg-corporate text-white leading-[20px] text-[14px] flex justify-center items-center font-[400] h-[40px] rounded-l-[4px]">Yes</button><button class="w-1/2 bg-white text-[#676769] leading-[20px] text-[14px] border border-[#DBDBDB] flex justify-center items-center font-[400] h-[40px] rounded-r-[4px]">No</button></div>
              </div>
              <div class="w-1/4">
                <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">Discount</p>
                <div class="flex justify-center items-center mt-[10px]"><button class="w-1/2 bg-corporate text-white leading-[20px] text-[14px] flex justify-center items-center font-[400] h-[40px] rounded-l-[4px]">Yes</button><button class="w-1/2 bg-white text-[#676769] leading-[20px] text-[14px] border border-[#DBDBDB] flex justify-center items-center font-[400] h-[40px] rounded-r-[4px]">No</button></div>
              </div>
            </div>
            <div class="flex items-center gap-x-[10px] xl:gap-x-[16px] mt-[12px] xl:mt-[20px]">
              <div class="w-1/4">
                <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">Reserve</p>
                <div class="flex justify-center items-center mt-[10px]"><button class="w-1/2 bg-corporate text-white leading-[20px] text-[14px] flex justify-center items-center font-[400] h-[40px] rounded-l-[4px]">Yes</button><button class="w-1/2 bg-white text-[#676769] leading-[20px] text-[14px] border border-[#DBDBDB] flex justify-center items-center font-[400] h-[40px] rounded-r-[4px]">No</button></div>
              </div>
              <div class="w-1/4">
                <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">Cancel</p>
                <div class="flex justify-center items-center mt-[10px]"><button class="w-1/2 bg-corporate text-white leading-[20px] text-[14px] flex justify-center items-center font-[400] h-[40px] rounded-l-[4px]">Yes</button><button class="w-1/2 bg-white text-[#676769] leading-[20px] text-[14px] border border-[#DBDBDB] flex justify-center items-center font-[400] h-[40px] rounded-r-[4px]">No</button></div>
              </div>
            </div>
          </div>
          
          <hr class="mt-[12px] xl:mt-[4px] border-t border-corporateBorder">
          <div class="p-4">
            <p class="text-[#1E88E5] leading-[20px] xl:leading-[24px] text-[14px] xl:text-[16px] font-[500]">ROUTE PERMISSION</p>
            <div class="flex justify-center items-center gap-x-[10px] xl:gap-x-[16px] mt-[12px] xl:mt-[16px]">
              <div class="w-1/4">
                <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">Operator</p>
                <div class="flex justify-center items-center mt-[10px]"><button class="w-1/2 bg-corporate text-white leading-[20px] text-[14px] flex justify-center items-center font-[400] h-[40px] rounded-l-[4px]">Yes</button><button class="w-1/2 bg-white text-[#676769] leading-[20px] text-[14px] border border-[#DBDBDB] flex justify-center items-center font-[400] h-[40px] rounded-r-[4px]">No</button></div>
              </div>
              <div class="w-1/4">
                <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">Third party agent</p>
                <div class="flex justify-center items-center mt-[10px]"><button class="w-1/2 bg-corporate text-white leading-[20px] text-[14px] flex justify-center items-center font-[400] h-[40px] rounded-l-[4px]">Yes</button><button class="w-1/2 bg-white text-[#676769] leading-[20px] text-[14px] border border-[#DBDBDB] flex justify-center items-center font-[400] h-[40px] rounded-r-[4px]">No</button></div>
              </div>
              <div class="w-1/4">
                <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">Jatri</p>
                <div class="flex justify-center items-center mt-[10px]"><button class="w-1/2 bg-corporate text-white leading-[20px] text-[14px] flex justify-center items-center font-[400] h-[40px] rounded-l-[4px]">Yes</button><button class="w-1/2 bg-white text-[#676769] leading-[20px] text-[14px] border border-[#DBDBDB] flex justify-center items-center font-[400] h-[40px] rounded-r-[4px]">No</button></div>
              </div>
              <div class="w-1/4">
                <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">Customer care</p>
                <div class="flex justify-center items-center mt-[10px]"><button class="w-1/2 bg-corporate text-white leading-[20px] text-[14px] flex justify-center items-center font-[400] h-[40px] rounded-l-[4px]">Yes</button><button class="w-1/2 bg-white text-[#676769] leading-[20px] text-[14px] border border-[#DBDBDB] flex justify-center items-center font-[400] h-[40px] rounded-r-[4px]">No</button></div>
              </div>
            </div>
            <div class="flex items-center gap-x-[10px] xl:gap-x-[16px] mt-[12px] xl:mt-[20px]">
              <div class="w-1/4">
                <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">Eid trip</p>
                <div class="flex justify-center items-center mt-[10px]"><button class="w-1/2 bg-corporate text-white leading-[20px] text-[14px] flex justify-center items-center font-[400] h-[40px] rounded-l-[4px]">Yes</button><button class="w-1/2 bg-white text-[#676769] leading-[20px] text-[14px] border border-[#DBDBDB] flex justify-center items-center font-[400] h-[40px] rounded-r-[4px]">No</button></div>
              </div>
            </div>
          </div>

          <hr class="mt-[12px] xl:mt-[4px] border-t border-corporateBorder">
          <div class="p-4">
            <p class="text-[#1E88E5] leading-[20px] xl:leading-[24px] text-[14px] xl:text-[16px] font-[500]">COMMISSION</p>
            <div class="flex items-center gap-x-[10px] xl:gap-x-[16px] mt-[12px] xl:mt-[16px]">
              <div class="w-1/4">
                <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">Ticket commission (Third party)</p>
                <div class="w-full py-[10px] px-[8px] mt-[10px] text-[14px] leading-5 rounded text-primaryText bg-corporateBg flex justify-between">
                  <div>30</div>
                  <div class="text-[#676769] leading-[20px] text-[14px] font-[400] border-l-2 px-4">Percentage %</div>
                </div>
              </div>
              <div class="w-1/4">
                <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">Jatri commission</p>
                <div class="w-full py-[10px] px-[8px] mt-[10px] text-[14px] leading-5 rounded text-primaryText bg-corporateBg flex justify-between">
                  <div>13</div>
                  <div class="text-[#676769] leading-[20px] text-[14px] font-[400] border-l-2 px-4">Percentage %</div>
                </div>
              </div>
            </div>
          </div>


          <hr class="mt-[12px] xl:mt-[4px] border-t border-corporateBorder">
          <div class="p-4">
            <p class="text-[#1E88E5] leading-[20px] xl:leading-[24px] text-[14px] xl:text-[16px] font-[500]">PUBLISH FOR JATRI</p>
            <div class="flex items-center gap-x-[10px] xl:gap-x-[16px] mt-[12px] xl:mt-[20px]">
              <div class="w-1/4">
                <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">Web</p>
                <div class="flex justify-center items-center mt-[10px]"><button class="w-1/2 bg-corporate text-white leading-[20px] text-[14px] flex justify-center items-center font-[400] h-[40px] rounded-l-[4px]">Yes</button><button class="w-1/2 bg-white text-[#676769] leading-[20px] text-[14px] border border-[#DBDBDB] flex justify-center items-center font-[400] h-[40px] rounded-r-[4px]">No</button></div>
              </div>
              <div class="w-1/4">
                <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">App</p>
                <div class="flex justify-center items-center mt-[10px]"><button class="w-1/2 bg-corporate text-white leading-[20px] text-[14px] flex justify-center items-center font-[400] h-[40px] rounded-l-[4px]">Yes</button><button class="w-1/2 bg-white text-[#676769] leading-[20px] text-[14px] border border-[#DBDBDB] flex justify-center items-center font-[400] h-[40px] rounded-r-[4px]">No</button></div>
              </div>
              <div class="w-1/4">
                <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">Customer Care</p>
                <div class="flex justify-center items-center mt-[10px]"><button class="w-1/2 bg-corporate text-white leading-[20px] text-[14px] flex justify-center items-center font-[400] h-[40px] rounded-l-[4px]">Yes</button><button class="w-1/2 bg-white text-[#676769] leading-[20px] text-[14px] border border-[#DBDBDB] flex justify-center items-center font-[400] h-[40px] rounded-r-[4px]">No</button></div>
              </div>
            </div>
          </div>

          <hr class="mt-[12px] xl:mt-[4px] border-t border-corporateBorder">
          <div class="p-4">
            <p class="text-[#1E88E5] leading-[20px] xl:leading-[24px] text-[14px] xl:text-[16px] font-[500]">ASSIGN COUNTERMAN & AGENT</p>
            <div class="flex items-center gap-x-[10px] xl:gap-x-[16px] mt-[12px] xl:mt-[16px]">
              <div class="w-1/4">
                <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px]">Fahim Ahmed</p>
              </div>
              <div class="w-1/4">
                <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px]">Fahim Ahmed</p>
              </div>
              <div class="w-1/4">
                <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px]">Fahim Ahmed</p>
              </div>
            </div>

            <hr class="my-[16px] border-t border-dashed border-corporateBorder">
            <div class="flex items-center gap-x-[10px] xl:gap-x-[16px] mt-[12px] xl:mt-[16px]">
              <div class="w-1/4">
                <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px]">Fahim Ahmed</p>
              </div>
              <div class="w-1/4">
                <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px]">Fahim Ahmed</p>
              </div>
              <div class="w-1/4">
                <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px]">Fahim Ahmed</p>
              </div>
            </div>
          </div>

          <hr class="mt-[12px] xl:mt-[4px] border-t border-corporateBorder">
          <div class="p-4">
            <p class="text-[#1E88E5] leading-[20px] xl:leading-[24px] text-[14px] xl:text-[16px] font-[500]">ASSIGN QOUTA</p>
            
            <div class="bg-white rounded-[8px] mt-4">
              <!-- table start -->
              <table class="min-w-full rounded">
                <thead>
                  <tr>
                    <th scope="col" class="border border-[#DBDBDB]" style="border-radius:8px 0 0 0;"> </th>
                    <th scope="col" class="border border-[#DBDBDB] text-4 leading-5 text-[#676769] text-left font-[400] p-[10px]"> Selected seats </th>
                    <th scope="col" class="border border-[#DBDBDB] text-4 leading-5 text-[#676769] text-left font-[400] p-[10px]" style="border-radius:0 8px 0 0;"> Release time </th>
                  </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="border border-[#DBDBDB] text-4 leading-5 text-left p-[10px]">Jatri</td>
                  <td class="border border-[#DBDBDB] text-4 leading-5 text-left p-[10px]">[C1], [C2], [C3], [C4]</td>
                  <td class="border border-[#DBDBDB] text-4 leading-5 text-left p-[10px]">08:30 PM</td>
                </tr>
                <tr>
                  <td class="border border-[#DBDBDB] text-4 leading-5 text-left p-[10px]">Counter 1</td>
                  <td class="border border-[#DBDBDB] text-4 leading-5 text-left p-[10px]">[A1], [A2], [A3], [A4]</td>
                  <td class="border border-[#DBDBDB] text-4 leading-5 text-left p-[10px]">08:30 PM</td>
                </tr>
                <tr>
                  <td class="border border-[#DBDBDB] text-4 leading-5 text-left p-[10px]">Counter 2</td>
                  <td class="border border-[#DBDBDB] text-4 leading-5 text-left p-[10px]">[B1], [B2]</td>
                  <td class="border border-[#DBDBDB] text-4 leading-5 text-left p-[10px]">08:30 PM</td>
                </tr>
              </tbody>
              </table>
            </div>
        </div>

        <hr class="mt-[12px] xl:mt-[4px] border-t border-corporateBorder">
          <div class="p-4">
            <p class="text-[#1E88E5] leading-[20px] xl:leading-[24px] text-[14px] xl:text-[16px] font-[500]">TRIP FACILITES</p>
            <div class="mt-[12px] xl:mt-[16px] text-[14px] leading-5">
              WiFi, WiFi, Buffet
            </div>
          </div>

          <hr class="mt-[12px] xl:mt-[4px] border-t border-corporateBorder">
          <div class="p-4">
            <p class="text-[#1E88E5] leading-[20px] xl:leading-[24px] text-[14px] xl:text-[16px] font-[500]">POLICIES</p>
            <div class="mt-[12px] xl:mt-[16px] text-[14px] leading-5">
              <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">Trip policy</p>
              <div class="border border-corporateBorder rounded pt-[10px] pb-[30px] px-2 mt-[10px] text-[14] leading-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi adipiscing tempor nec turpis risus, urna quam sed. Vitae pretium blandit pellentesque massa 
                id venenatis iaculis. Quam nullam pellentesque vel, in. Sodales feugiat mi at proin proin lacus, sed porta. Urna, porta odio sit pulvinar varius. 
                Aliquam phasellus nunc sit viverra ut. Nunc placerat dis eget tristique non ipsum porta consequat. Gravida quis pharetra, in sit libero, 
                morbi duis eu non. Facilisis nulla turpis elit aenean. Vulputate pellentesque sit consequat a, enim, dictum orci. Enim tincidunt at mollis ante 
                volutpat quam. Lectus egestas fermentum cras sed placerat id. Scelerisque arcu mattis neque nunc orci. Pulvinar in a dui convallis etiam purus. 
                Donec viverra mauris, quam nullam vivamus. In posuere nisl nec pulvinar purus. Morbi mattis sagittis tortor vel eu enim. Tincidunt pellentesque 
                quam sed faucibus feugiat. Et, tortor malesuada hendrerit non turpis consectetur. At mauris mattis et massa nisi, duis egestas nullam nunc. 
                Enim nam tellus quis nisi. Eu a erat sagittis, justo, et facilisis. Scelerisque ultricies nunc lorem purus. Pellentesque bibendum accumsan, 
                aliquam sit sapien tristique.
              </div>
            </div>
          </div>
          </div>

          <!--Card-->
          <div class="bg-white rounded-[8px]">
            <div class="p-4">
              <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600] mb-[17px]">Update for an period</p>

              <!-- table start -->
              <div class="rounded-lg">
                <table class="min-w-full rounded-lg">
                <thead>
                  <tr class="border border-[#DBDBDB]">
                    <th scope="col" class="border-r border-[#EDEDED] text-4 leading-6 font-[400] p-[10px] uppercase" style="border-radius:8px 0 0 0;"> DATE</th>
                    <th scope="col" class="text-4 leading-6 font-[400] p-[10px] uppercase" style="border-radius:0 8px 0 0;"> 
                        <span class="flex justify-center gap-x-5"><span>Check for all</span> 
                      <span class="form-group flex mb-0"><input type="checkbox" id="read11"><label for="read11" class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]"></label></span>                  
                    </span>
                    </th>
                  </tr>
                </thead>
              <tbody>
                <tr class="bg-corporateBg border-l border-r border-[#DBDBDB]">
                  <td class="border-r border-[#EDEDED] text-4 text-center leading-6 p-[16px]">18 July 2022</td>
                  <td class="text-4 text-center leading-6 p-[16px]">
                    <div class="form-group mb-0"><input type="checkbox" id="read12"><label for="read12" class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]"></label></div>
                  </td>
                </tr>
                <tr class="border-l border-r border-[#DBDBDB]">
                  <td class="border-r border-[#EDEDED] text-4 text-center leading-6 p-[16px]">19 July 2022</td>
                  <td class="text-4 text-center leading-6 p-[16px]">
                    <div class="form-group mb-0"><input type="checkbox" id="read13"><label for="read13" class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]"></label></div>
                  </td>
                </tr>
                <tr class="bg-corporateBg border-l border-r border-[#DBDBDB]">
                  <td class="border-r border-[#EDEDED] text-4 text-center leading-6 p-[16px]">20 July 2022</td>
                  <td class="text-4 text-center leading-6 p-[16px]">
                    <div class="form-group mb-0"><input type="checkbox" id="read14"><label for="read14" class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]"></label></div>
                  </td>
                </tr>
                <tr class="border-l border-r border-[#DBDBDB]">
                  <td class="border-r border-[#EDEDED] text-4 text-center leading-6 p-[16px]">21 July 2022</td>
                  <td class="text-4 text-center leading-6 p-[16px]">
                    <div class="form-group mb-0"><input type="checkbox" id="read"><label for="read" class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]"></label></div>
                  </td>
                </tr>
                <tr class="bg-corporateBg border-l border-r border-[#DBDBDB]">
                  <td class="border-r border-[#EDEDED] text-4 text-center leading-6 p-[16px]">22 July 2022</td>
                  <td class="text-4 text-center leading-6 p-[16px]">
                    <div class="form-group mb-0"><input type="checkbox" id="read"><label for="read" class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]"></label></div>
                  </td>
                </tr>
                <tr class="border-l border-r border-[#DBDBDB]">
                  <td class="border-r border-[#EDEDED] text-4 text-center leading-6 p-[16px]">23 July 2022</td>
                  <td class="text-4 text-center leading-6 p-[16px]">
                    <div class="form-group mb-0"><input type="checkbox" id="read"><label for="read" class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]"></label></div>
                  </td>
                </tr>
                <tr class="bg-corporateBg border-l border-r border-b border-[#DBDBDB]">
                  <td class="border-r border-[#EDEDED] text-4 text-center leading-6 p-[16px]">24 July 2022</td>
                  <td class="text-4 text-center leading-6 p-[16px]">
                    <div class="form-group mb-0"><input type="checkbox" id="read"><label for="read" class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]"></label></div>
                  </td>
                </tr>
              </tbody>
              </table>
              </div>
            </div>
          </div>


          <div class="flex justify-center items-center mt-5">
            <button class="bg-corporate flex justify-center items-center text-white rounded-full px-6 py-3 mr-4 leading-[12px] text-[10px] xl:leading-[16px] xl:text-[12px]">Create trip</button>
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
    /*padding: 10px;*/
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
    top: 0px;
    left: 9px;
    width: 6px;
    height: 14px;
    border:2px solid white;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
    /*background-color: white;*/
  }
  </style>
