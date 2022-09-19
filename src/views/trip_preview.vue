<template>
    <div class="flex bg-corporateBg">
      <!-- Side Nav bar -->
      <div class="h-screen w-[280px] bg-white border-r border-[#DBDBDB]">
        <div class="flex flex-col justify-between">
          <div class="px-[10px] flex justify-center items-center py-[30px]">
            <img src="@/assets/imgs/Logo.png" alt="" class="w-[66px] h-[32px]">
          </div>
          <div class="px-[10px] overflow-y-auto h-[calc(100vh-150px)]">
            <a class="bg-corporate w-full text-white p-1 rounded-sm block cursor-pointer">Dashboard</a>
            <a class="menu">Bus Company</a>
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
          <div class="bg-white rounded-[8px] mt-[12px] xl:mt-[16px]">
            <div class="p-4">

                <div class="flex justify-between">
                    <p class="text-[#676769] leading-[20px] xl:leading-[24px] text-[14px] xl:text-[16px] font-[500] mb-4">TRIP PREVIEW</p>
                    <button class="bg-[#1E88E5] text-white leading-[18px] text-[12px] font-[400] border border-corporateBorder rounded-full px-[24px] py-[4px]">Edit</button>
                </div>
                <hr class="my-[12px] xl:mt-[16px] border-t border-corporateBorder">
              

              <div class="flex justify-center items-center gap-x-[10px] xl:gap-x-[16px]">
                <div class="w-1/4">
                  <ash-dropdown title="Bus operator" name="Desh Travels"></ash-dropdown>
                </div>
                <div class="w-1/4">
                  <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">Bus model</p>
                  <Dropdown class="w-full py-[4px] mt-[10px]" v-model="selectedCity" :opti6ns="cities" optionLabel="name" placeholder="Select bus" />
                </div>
                <div class="w-1/4">
                  <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">Bus reg. no</p>
                  <input type="text" class="createNormalInput" placeholder="Enter bus reg. no">
                </div>
                <div class="w-1/4">
                  <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">Coach/Trip number</p>
                  <input type="text" class="createNormalInput" placeholder="Enter coach/trip number">
                </div>
              </div>
              <div class="flex justify-start items-center gap-x-[10px] xl:gap-x-[16px] mt-[12px] xl:mt-[16px]">
                <div class="w-1/4">
                  <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">Route</p>
                  <Dropdown class="w-full py-[4px] mt-[10px]" v-model="selectedCity" :opti6ns="cities" optionLabel="name" placeholder="Select route" />
                </div>
                <div class="w-1/4">
                  <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">Trip heading</p>
                  <input type="text" class="createNormalInput" placeholder="Enter trip heading">
                </div>
  
                <div class="w-1/4">
                  <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">Future trip validate</p>
                  <div class="w-full mt-[10px] h-[40px] border border-[#DBDBDB] flex justify-between items-center leading-[20px] rounded-[4px] overflow-hidden divide-x" >
                    <div class="flex justify-between items-center">
                      <div class="flex justify-between items-center w-[115px] xl:w-[180px]">
                        <select class="form-select appearance-none w-full block px-3 pl-[22px] py-1.5 text-base bg-white rounded focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example">
                          <option selected>3</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                        <img src="../assets/svg/down_arrow.svg" class="w-[12px] h-5 ml-4" alt="">
                      </div>
                    </div>
                    <p class="p-4 text-[#676769] leading-[20px] text-[14px] font-[400]">Days</p>
                  </div>
  
                </div>
              </div>
            </div>
            <hr class="mt-[12px] xl:mt-[16px] border-t border-corporateBorder">
          <div class="p-4">
            <p class="text-[#1E88E5] leading-[20px] xl:leading-[24px] text-[14px] xl:text-[16px] font-[500]">DATE & TIME</p>
            <div class="flex justify-center items-center gap-x-[10px] xl:gap-x-[16px] mt-[12px] xl:mt-[16px]">
              <div class="w-1/4">
                <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">Departure date</p>
                <div class="w-full h-[40px] border border-[#DBDBDB] flex justify-between items-center mt-[10px] leading-[20px] rounded-[4px] px-[20px] xl:px-[8px] overflow-hidden" >
                  <input type="text" class="outline-none pl-2 placeholder:text-[#4D4D4F] placeholder:text-[14px] placeholder:leading-[20px]" placeholder="Select date">
                  <img src="../assets/svg/count2.svg" class="h-5 w-5" alt="">
                </div>
              </div>
              <div class="w-1/4">
                <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">Departure time</p>
                <input type="text" class="createNormalInput" placeholder="Enter departure time">
              </div>
              <div class="w-1/4">
                <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">Arrival date</p>
                <div class="w-full h-[40px] border border-[#DBDBDB] flex justify-between items-center mt-[10px] leading-[20px] rounded-[4px] px-[20px] xl:px-[8px] overflow-hidden" >
                  <input type="text" class="outline-none pl-2 placeholder:text-[#4D4D4F] placeholder:text-[14px] placeholder:leading-[20px]" placeholder="Select arrival date">
                  <img src="../assets/svg/count2.svg" class="h-5 w-5" alt="">
                </div>
              </div>
              <div class="w-1/4">
                <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">Arrival time</p>
                <input type="text" class="createNormalInput" placeholder="Enter arrival time">
              </div>
            </div>
          </div>
  
          </div>
          <div class="flex justify-center items-center mt-5">
            <button class="bg-corporate bg-opacity-30 flex gap-x-3 justify-center items-center text-white rounded-full px-5 py-3 mr-4 leading-[12px] text-[10px] xl:leading-[16px] xl:text-[12px]">Next step<span><img src="../assets/svg/right-white-arrow.svg" class="h-[9.33px] w-[9.33px]" alt=""></span></button>
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
    /*padding: 10px;*/
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
