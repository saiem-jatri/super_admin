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
      <div class="bg-white h-[72px] sticky top-0 border-b border-[#DBDBDB] z-10">
        <div class="flex justify-between items-center">
          <p class="p-6 text-[#151414] leading-[28px] text-[20px] font-[600]">Bus Company</p>
          <div class="w-[230px] xl:w-[270px] h-[40px] border border-[#DBDBDB] flex justify-center items-center leading-[20px] rounded-[4px] pl-14 xl:pl-[9px] overflow-hidden" >
            <img src="../assets/svg/search.svg" class="h-5 w-5" alt="">
            <input type="text" class="outline-none pl-2 placeholder:text-[#4D4D4F] placeholder:text-[14px] placeholder:leading-[20px]" placeholder="PNR or mobile number">
          </div>
          <div class="flex gap-x-2 p-4 justify-center items-center mr-6 ">
            <button class="bg-corporate flex gap-x-3 justify-center items-center text-white rounded-full px-4 py-2 mr-4 leading-[12px] text-[10px] xl:leading-[16px] xl:text-[12px]"><span><img src="../assets/svg/plus.svg" class="h-[9.33px] w-[9.33px]" alt=""></span>Add Company</button>
            <img src="../assets/person/person1.png" alt="" class="h-[30px] xl:h-[40px] w-[30px] xl:w-[40px] rounded-full">
            <p class="text-[#151414] leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[500]">Mostafa Mamun Emon</p>
            <img src="../assets/person/downArrow.svg" alt="" class="w-[12px] h-[6px]">
          </div>
        </div>
      </div>

      <!-- top nav bar end -->
      <!-- body start-->
      <div class="px-[30px] py-[24px]">
        <div class=" bg-white rounded-[8px]">
          <!-- table start -->
            <table class="min-w-full">
              <thead>
              <tr class="bg-[#4D4D4F]">
                <th scope="col" class="companyTableHead" style="border-radius: 8px 0 0 0">
                  SL
                </th>
                <th scope="col" class="companyTableHead">
                  COMPANY NAME
                </th>
                <th scope="col" class="companyTableHead">
                  CONTACT PERSON <br>
                  & MOBILE
                </th>

                <th scope="col" class="companyTableHead">
                  TRAIL DATE
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
                <td class="text-primaryText border-r border-[#DBDBDB] text-center">01</td>
                <td class="flex justify-between items-center px-[16px] py-[18px] border-r border-[#DBDBDB]">
                    <p class="leading-[16px] text-[11px] xl:leading-[20px] xl:text-[14px] font-[400] text-primaryText">Tisha Group and Tubaline</p>
                  <img src="../assets/logo/login_logo.svg" class="w-[50px] h-[20px] xl:w-[61px] xl:h-[30px]" alt="">
                </td>
                <td class="leading-[16px] text-[11px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText">
                  MD Fahim Ahmed <br> +8801708630439
                </td>
                <td class="leading-[16px] text-[11px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText">
                  09 July 2022- <br>
                  14 July 2022
                </td>
                <td class="border-r border-[#DBDBDB]">
                 <div class="flex justify-center items-center">
                   <p class="companyTableStatus">Active</p>
                 </div>
                </td>
                <td class="border-r border-[#DBDBDB]">
                  <div class="py-[5px] px-[18px] flex justify-center items-center gap-x-[16px]">
                      <button class="companyEditButton"><span><img src="../assets/svg/edit.svg" class="w-3 h-3" alt=""></span>Edit</button>
                    <button class="companyManageButton"><span><img src="../assets/svg/manage.svg" class="w-3 h-3" alt=""></span>Manage</button>
                  </div>
                </td>
              </tr>
              <tr class="border-b border-[#EDEDED]">
                <td class="text-primaryText border-r border-[#DBDBDB] text-center">01</td>
                <td class="flex justify-between items-center px-[16px] py-[18px] border-r border-[#DBDBDB]">
                  <p class="leading-[16px] text-[11px] xl:leading-[20px] xl:text-[14px] font-[400] text-primaryText">Tisha Group and Tubaline</p>
                  <img src="../assets/logo/login_logo.svg" class="w-[50px] h-[20px] xl:w-[61px] xl:h-[30px]" alt="">
                </td>
                <td class="leading-[16px] text-[11px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText">
                  MD Fahim Ahmed <br> +8801708630439
                </td>
                <td class="leading-[16px] text-[11px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText">
                  09 July 2022- <br>
                  14 July 2022
                </td>
                <td class="border-r border-[#DBDBDB]">
                  <div class="flex justify-center items-center">
                    <p class="companyTableStatus">Active</p>
                  </div>
                </td>
                <td class="border-r border-[#DBDBDB]">
                  <div class="py-[5px] px-[18px] flex justify-center items-center gap-x-[16px]">
                    <button class="companyEditButton"><span><img src="../assets/svg/edit.svg" class="w-3 h-3" alt=""></span>Edit</button>
                    <button class="companyManageButton"><span><img src="../assets/svg/manage.svg" class="w-3 h-3" alt=""></span>Manage</button>
                  </div>
                </td>
              </tr>
              <tr class="border-b border-[#EDEDED]">
                <td class="text-primaryText border-r border-[#DBDBDB] text-center">01</td>
                <td class="flex justify-between items-center px-[16px] py-[18px] border-r border-[#DBDBDB]">
                  <p class="leading-[16px] text-[11px] xl:leading-[20px] xl:text-[14px] font-[400] text-primaryText">Tisha Group and Tubaline</p>
                  <img src="../assets/logo/login_logo.svg" class="w-[50px] h-[20px] xl:w-[61px] xl:h-[30px]" alt="">
                </td>
                <td class="leading-[16px] text-[11px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText">
                  MD Fahim Ahmed <br> +8801708630439
                </td>
                <td class="leading-[16px] text-[11px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText">
                  09 July 2022- <br>
                  14 July 2022
                </td>
                <td class="border-r border-[#DBDBDB]">
                  <div class="flex justify-center items-center">
                    <p class="companyTableStatus">Active</p>
                  </div>
                </td>
                <td class="border-r border-[#DBDBDB]">
                  <div class="py-[5px] px-[18px] flex justify-center items-center gap-x-[16px]">
                    <button class="companyEditButton"><span><img src="../assets/svg/edit.svg" class="w-3 h-3" alt=""></span>Edit</button>
                    <button class="companyManageButton"><span><img src="../assets/svg/manage.svg" class="w-3 h-3" alt=""></span>Manage</button>
                  </div>
                </td>
              </tr>
              <tr class="border-b border-[#EDEDED]">
                <td class="text-primaryText border-r border-[#DBDBDB] text-center">01</td>
                <td class="flex justify-between items-center px-[16px] py-[18px] border-r border-[#DBDBDB]">
                  <p class="leading-[16px] text-[11px] xl:leading-[20px] xl:text-[14px] font-[400] text-primaryText">Tisha Group and Tubaline</p>
                  <img src="../assets/logo/login_logo.svg" class="w-[50px] h-[20px] xl:w-[61px] xl:h-[30px]" alt="">
                </td>
                <td class="leading-[16px] text-[11px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText">
                  MD Fahim Ahmed <br> +8801708630439
                </td>
                <td class="leading-[16px] text-[11px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText">
                  09 July 2022- <br>
                  14 July 2022
                </td>
                <td class="border-r border-[#DBDBDB]">
                  <div class="flex justify-center items-center">
                    <p class="companyTableStatus">Active</p>
                  </div>
                </td>
                <td class="border-r border-[#DBDBDB]">
                  <div class="py-[5px] px-[18px] flex justify-center items-center gap-x-[16px]">
                    <button class="companyEditButton"><span><img src="../assets/svg/edit.svg" class="w-3 h-3" alt=""></span>Edit</button>
                    <button class="companyManageButton"><span><img src="../assets/svg/manage.svg" class="w-3 h-3" alt=""></span>Manage</button>
                  </div>
                </td>
              </tr>
              <tr class="border-b border-[#EDEDED]">
                <td class="text-primaryText border-r border-[#DBDBDB] text-center">01</td>
                <td class="flex justify-between items-center px-[16px] py-[18px] border-r border-[#DBDBDB]">
                  <p class="leading-[16px] text-[11px] xl:leading-[20px] xl:text-[14px] font-[400] text-primaryText">Tisha Group and Tubaline</p>
                  <img src="../assets/logo/login_logo.svg" class="w-[50px] h-[20px] xl:w-[61px] xl:h-[30px]" alt="">
                </td>
                <td class="leading-[16px] text-[11px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText">
                  MD Fahim Ahmed <br> +8801708630439
                </td>
                <td class="leading-[16px] text-[11px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText">
                  09 July 2022- <br>
                  14 July 2022
                </td>
                <td class="border-r border-[#DBDBDB]">
                  <div class="flex justify-center items-center">
                    <p class="companyTableStatus">Active</p>
                  </div>
                </td>
                <td class="border-r border-[#DBDBDB]">
                  <div class="py-[5px] px-[18px] flex justify-center items-center gap-x-[16px]">
                    <button class="companyEditButton"><span><img src="../assets/svg/edit.svg" class="w-3 h-3" alt=""></span>Edit</button>
                    <button class="companyManageButton"><span><img src="../assets/svg/manage.svg" class="w-3 h-3" alt=""></span>Manage</button>
                  </div>
                </td>
              </tr>
              <tr class="border-b border-[#EDEDED]">
                <td class="text-primaryText border-r border-[#DBDBDB] text-center">999</td>
                <td class="flex justify-between items-center px-[16px] py-[18px] border-r border-[#DBDBDB]">
                  <p class="leading-[16px] text-[11px] xl:leading-[20px] xl:text-[14px] font-[400] text-primaryText">Labiba Classic LTD</p>
                  <img src="../assets/logo/login_logo.svg" class="w-[50px] h-[20px] xl:w-[61px] xl:h-[30px]" alt="">
                </td>
                <td class="leading-[16px] text-[11px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText">
                  MD Fahim Ahmed <br> +8801708630439
                </td>
                <td class="leading-[16px] text-[11px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText">
                  -
                </td>
                <td class="border-r border-[#DBDBDB]">
                  <div class="flex justify-center items-center">
                    <p class="companyTableStatus">Active</p>
                  </div>
                </td>
                <td class="border-r border-[#DBDBDB]">
                  <div class="py-[5px] px-[18px] flex justify-center items-center gap-x-[16px]">
                    <button class="companyEditButton"><span><img src="../assets/svg/edit.svg" class="w-3 h-3" alt=""></span>Edit</button>
                    <button class="companyManageButton"><span><img src="../assets/svg/manage.svg" class="w-3 h-3" alt=""></span>Manage</button>
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
