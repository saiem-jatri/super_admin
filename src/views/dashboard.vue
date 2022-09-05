<template>
  <div class="flex bg-corporateBg">
    <div class="h-screen w-[224px] bg-white border-r border-[#DBDBDB]">
      <div class="flex flex-col justify-between">
        <div class="px-[10px] flex justify-center items-center py-[30px]">
          <img src="@/assets/imgs/Logo.png" alt="" class="w-[66px] h-[32px]">
        </div>
        <div class="px-[10px] overflow-y-auto h-[calc(100vh-150px)]">
          <a class="bg-corporate w-full text-white p-1 rounded-sm block cursor-pointer">DashBoard</a>
          <a class="menu">Bus Company</a>
          <a class="menu">Routes</a>
          <a class="menu">Routes</a>
          <a class="menu">Counter</a>
          <a class="menu">Trips</a>
          <a class="menu">User</a>
          <a class="menu">Agent</a>
          <a class="menu">Migrate Trips</a>
          <a class="menu">Migrate Tickets</a>
          <a class="menu">Trip Expense Configaration</a>
          <div class="group">
            <a class="dropDownMenu">Reports <span><img src="" alt="" class="w-[12px] h-[7px]"></span></a>
            <div class=" rounded-md border left-0 right-0 top-full flex flex-col text-left text-black bg-white divide-y max-h-0 group-hover:max-h-[300px] transition-all duration-300 ease-in-out overflow-hidden">
              <a class="hover:bg-gray-100 p-2" href="1234">Dropdown 1</a>
              <a class="hover:bg-gray-100 p-2" href="2345">Dropdown 2</a>
              <a class="hover:bg-gray-100 p-2" href="3456">Dropdown 3</a>
            </div>
          </div>
          <a class="dropDownMenu">Invoice <span><img src="" alt="" class="w-[12px] h-[7px]"></span></a>
          <a class="menu">Offer & Promotion</a>
          <a class="dropDownMenu">Action in Bulk <span><img src="" alt="" class="w-[12px] h-[7px]"></span></a>
          <p class="menuSection ">CONFIGARATION</p>
          <a class="menu">Bus</a>
          <a class="menu">Stopage</a>
          <a class="menu">Challan Configaration</a>
          <a class="menuw-full text-black leading-[20px] text-[14px] font-[500] block cursor-pointer">Fees</a>
        </div>

          <button class="p-4 flex justify-center items-center gap-x-4 border-t border-[#DBDBDB]">  <img src="../assets/svg/logout.svg" class="h-[16px] w-[16px]" alt=""> Logout </button>

      </div>

    </div>
    <div class="h-screen w-full overflow-y-auto bg-[#F7F7F7]">
      <div class="bg-white h-[72px] sticky top-0 border-b border-[#DBDBDB]">
        <div class="flex justify-between">
          <p class="p-6 text-[#151414] leading-[28px] text-[20px] font-[500]">DashBoard</p>
          <div class="flex gap-x-2 p-4 justify-center items-center">
            <img src="../assets/person/person1.png" alt="" class="h-[40px] w-[40px] rounded-full">
            <p class="text-[#151414] leading-[24px] text-[16px] font-[500]">Mostafa Mamun Emon</p>
            <img src="../assets/person/downArrow.svg" alt="" class="w-[12px] h-[6px]">
          </div>
        </div>
      </div>
      <!-- body -->
      <div class="p-[30px]">
        <p class="leading-[36px] text-[28px] font-[500]">Sales Summary </p>
      </div>
    </div>
  </div>
</template>
