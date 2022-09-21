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
            <a class="menu">Trips</a>
            <a class="menu">User</a>
            <a class="bg-corporate w-full text-white p-1 rounded-sm block cursor-pointer">Agent</a>
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
                <p class="lg:leading-[16px] xl:leading-[28px] lg:text-[14px] xl:text-[20px] font-[600] text-primaryText">Agent</p>
            </div>
            <div class="flex gap-x-2 p-4 justify-center items-center mr-6 ">
              <button class="bg-corporate flex gap-x-3 justify-center items-center text-white rounded-full px-6 py-3 mr-4 leading-[12px] text-[10px] xl:leading-[16px] xl:text-[12px]"><span><img src="../assets/svg/plus.svg" class="h-[9.33px] w-[9.33px]" alt=""></span>Add Trip</button>
              <img src="../assets/person/person1.png" alt="" class="h-[30px] xl:h-[40px] w-[30px] xl:w-[40px] rounded-full">
              <p class="text-[#151414] leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[500]">Mostafa Mamun Emon</p>
              <img src="../assets/person/downArrow.svg" alt="" class="w-[12px] h-[6px]">
          </div>
          </div>
        </div>
        <!-- top nav bar end -->
        <!-- body start-->
        <div class="px-[30px] py-[24px]">
  <!--        card-->
          <div class="bg-white rounded">
              <div class="p-4 flex justify-between items-center">
                <div class="flex justify-start items-center gap-x-4 w-full">
                  <div class="w-1/4 xl:w-1/5">
                    <p class="text-primaryText leading-[20px] text-[14px] xl:leading-[24px] xl:text-[16px] font-[600]">Bus operator</p>
                    <Dropdown class="w-full py-1 mt-[10px] placeholder:text-primaryText placeholder:leading-[16px] placeholder:text-[12px] xl:placeholder:leading-[20px] xl:placeholder:text-[14px]" v-model="selectedCity" :options="cities" optionLabel="name" placeholder="Dash Travels" />
                  </div>
                  <div class="w-1/4 xl:w-1/5">
                    <div class="flex justify-between items-center w-full">
                      <p class="text-primaryText leading-[20px] text-[14px] xl:leading-[24px] xl:text-[16px] font-[600]">Payment type</p>
                    </div>
                    <Dropdown class="w-full py-1 mt-[10px] placeholder:text-primaryText placeholder:leading-[16px] placeholder:text-[12px] xl:placeholder:leading-[20px] xl:placeholder:text-[14px]" v-model="selectedCity" :options="cities" optionLabel="name" placeholder="Select payment type" />
                  </div>
  
                  <div class="w-1/4 xl:w-1/5">
                    <div class="flex justify-between items-center w-full">
                      <p class="text-primaryText leading-[20px] text-[14px] xl:leading-[24px] xl:text-[16px] font-[600]">Mobile number</p>
                    </div>
                    <input type="text" class="focus:outline-none mt-[10px] w-full border border-[#DBDBDB] rounded-[4px] pl-2 py-2 placeholder:text-[#676769] placeholder:leading-[16px] placeholder:text-[12px] xl:placeholder:leading-[20px] xl:placeholder:text-[14px]" placeholder="Enter mobile number">
                  </div>
                </div>
                <button class="flex gap-x-[9px] justify-center self-end bg-corporate text-white leading-[14px] xl:leading-[16px] text-[11px] xl:text-[12px] font-[500] py-3 pl-[17px] pr-[24px] rounded-full"><span>
                  <img src="../assets/svg/white_search.svg" class="w-[25px] xl:w-[20px] xl:h-[20px]" alt="">
                </span>Search</button>
              </div>
          </div>
          <div class="bg-white rounded-[8px] mt-4">
            <!-- table start -->
            <table class="min-w-full">
              <thead>
              <tr class="bg-[#4D4D4F] h-[36px]">
                <th scope="col" class="companyTableHead" style="border-radius: 8px 0 0 0">
                  SL
                </th>
                <th scope="col" class="companyTableHead">
                    AGENT NAME
                </th>
                <th scope="col" class="companyTableHead">
                    COUNTER
                </th>
                <th scope="col" class="companyTableHead">
                  MOBILE NUMBER
                </th>
  
                <th scope="col" class="companyTableHead">
                  EMAIL
                </th>
                <th scope="col" class="companyTableHead">
                  STATUS
                </th>
                <th scope="col" class="companyTableHead" style="border-radius: 0 8px 0 0">
                  ACTION
                </th>
              </tr>
              </thead>
              <tbody>
              <tr class="border-b border-[#EDEDED]">
                <td class="text-primaryText border-r border-[#DBDBDB] text-center leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px]">01</td>
                <td class="text-primaryText border-r border-[#DBDBDB] text-center leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px]">
                  Fahim Ahmed
                </td>
                <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText">
                    Arambag
                </td>
                <td class="leading-[20px] text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText">
                    +8801708630439
                </td>
  
                <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText">
                    owner.mail@gmail.com
                </td>
                <td class="border-r border-[#DBDBDB]">
                  <div class="flex justify-center items-center">
                    <p class="companyTableStatus">Active</p>
                  </div>
                </td>
                <td class="border-r border-[#DBDBDB]">
                  <div class="py-[5px] px-[18px] flex justify-center items-center gap-x-[16px]">
                    <button class="companyEditButton"><span><img src="../assets/svg/edit.svg" class="w-3 h-3" alt=""></span>Edit</button>
                  </div>
                </td>
              </tr>
              <tr class="border-b border-[#EDEDED]">
                <td class="text-primaryText border-r border-[#DBDBDB] text-center leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px]">01</td>
                <td class="text-primaryText border-r border-[#DBDBDB] text-center leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px]">
                  Fahim Ahmed
                </td>
                <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText">
                    Arambag
                </td>
                <td class="leading-[20px] text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText">
                    +8801708630439
                </td>
  
                <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText">
                    owner.mail@gmail.com
                </td>
                <td class="border-r border-[#DBDBDB]">
                  <div class="flex justify-center items-center">
                    <p class="companyTableStatus">Active</p>
                  </div>
                </td>
                <td class="border-r border-[#DBDBDB]">
                  <div class="py-[5px] px-[18px] flex justify-center items-center gap-x-[16px]">
                    <button class="companyEditButton"><span><img src="../assets/svg/edit.svg" class="w-3 h-3" alt=""></span>Edit</button>
                  </div>
                </td>
              </tr>
              <tr class="border-b border-[#EDEDED]">
                <td class="text-primaryText border-r border-[#DBDBDB] text-center leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px]">01</td>
                <td class="text-primaryText border-r border-[#DBDBDB] text-center leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px]">
                  Fahim Ahmed
                </td>
                <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText">
                    Arambag
                </td>
                <td class="leading-[20px] text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText">
                    +8801708630439
                </td>
  
                <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText">
                    owner.mail@gmail.com
                </td>
                <td class="border-r border-[#DBDBDB]">
                  <div class="flex justify-center items-center">
                    <p class="companyTableStatus">Active</p>
                  </div>
                </td>
                <td class="border-r border-[#DBDBDB]">
                  <div class="py-[5px] px-[18px] flex justify-center items-center gap-x-[16px]">
                    <button class="companyEditButton"><span><img src="../assets/svg/edit.svg" class="w-3 h-3" alt=""></span>Edit</button>
                  </div>
                </td>
              </tr>
              <tr class="border-b border-[#EDEDED]">
                <td class="text-primaryText border-r border-[#DBDBDB] text-center leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px]">01</td>
                <td class="text-primaryText border-r border-[#DBDBDB] text-center leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px]">
                  Fahim Ahmed
                </td>
                <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText">
                    Arambag
                </td>
                <td class="leading-[20px] text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText">
                    +8801708630439
                </td>
  
                <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText">
                    owner.mail@gmail.com
                </td>
                <td class="border-r border-[#DBDBDB]">
                  <div class="flex justify-center items-center">
                    <p class="companyTableStatus">Active</p>
                  </div>
                </td>
                <td class="border-r border-[#DBDBDB]">
                  <div class="py-[5px] px-[18px] flex justify-center items-center gap-x-[16px]">
                    <button class="companyEditButton"><span><img src="../assets/svg/edit.svg" class="w-3 h-3" alt=""></span>Edit</button>
                  </div>
                </td>
              </tr>
              <tr class="border-b border-[#EDEDED]">
                <td class="text-primaryText border-r border-[#DBDBDB] text-center leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px]">01</td>
                <td class="text-primaryText border-r border-[#DBDBDB] text-center leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px]">
                  Fahim Ahmed
                </td>
                <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText">
                    Arambag
                </td>
                <td class="leading-[20px] text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText">
                    +8801708630439
                </td>
  
                <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText">
                    owner.mail@gmail.com
                </td>
                <td class="border-r border-[#DBDBDB]">
                  <div class="flex justify-center items-center">
                    <p class="companyTableStatus">Active</p>
                  </div>
                </td>
                <td class="border-r border-[#DBDBDB]">
                  <div class="py-[5px] px-[18px] flex justify-center items-center gap-x-[16px]">
                    <button class="companyEditButton"><span><img src="../assets/svg/edit.svg" class="w-3 h-3" alt=""></span>Edit</button>
                  </div>
                </td>
              </tr>
              <tr class="border-b border-[#EDEDED]">
                <td class="text-primaryText border-r border-[#DBDBDB] text-center leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px]">01</td>
                <td class="text-primaryText border-r border-[#DBDBDB] text-center leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px]">
                  Fahim Ahmed
                </td>
                <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText">
                    Arambag
                </td>
                <td class="leading-[20px] text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText">
                    +8801708630439
                </td>
  
                <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText">
                    owner.mail@gmail.com
                </td>
                <td class="border-r border-[#DBDBDB]">
                  <div class="flex justify-center items-center">
                    <p class="companyTableStatusInactive">Inactive</p>
                  </div>
                </td>
                <td class="border-r border-[#DBDBDB]">
                  <div class="py-[5px] px-[18px] flex justify-center items-center gap-x-[16px]">
                    <button class="companyEditButton"><span><img src="../assets/svg/edit.svg" class="w-3 h-3" alt=""></span>Edit</button>
                  </div>
                </td>
              </tr>
              <tr class="border-b border-[#EDEDED]">
                <td class="text-primaryText border-r border-[#DBDBDB] text-center leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px]">01</td>
                <td class="text-primaryText border-r border-[#DBDBDB] text-center leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px]">
                  Fahim Ahmed
                </td>
                <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText">
                    Arambag
                </td>
                <td class="leading-[20px] text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText">
                    +8801708630439
                </td>
  
                <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText">
                    owner.mail@gmail.com
                </td>
                <td class="border-r border-[#DBDBDB]">
                  <div class="flex justify-center items-center">
                    <p class="companyTableStatus">Active</p>
                  </div>
                </td>
                <td class="border-r border-[#DBDBDB]">
                  <div class="py-[5px] px-[18px] flex justify-center items-center gap-x-[16px]">
                    <button class="companyEditButton"><span><img src="../assets/svg/edit.svg" class="w-3 h-3" alt=""></span>Edit</button>
                  </div>
                </td>
              </tr>
  
              </tbody>
            </table>
  
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
  </style>
  