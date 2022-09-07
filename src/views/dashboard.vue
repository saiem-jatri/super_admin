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
        <div class="flex justify-between">
          <p class="p-6 text-[#151414] leading-[28px] text-[20px] font-[600]">Dashboard</p>
          <div class="flex gap-x-2 p-4 justify-center items-center">
            <img src="../assets/person/person1.png" alt="" class="h-[40px] w-[40px] rounded-full">
            <p class="text-[#151414] leading-[24px] text-[16px] font-[500]">Mostafa Mamun Emon</p>
            <img src="../assets/person/downArrow.svg" alt="" class="w-[12px] h-[6px]">
          </div>
        </div>
      </div>
      <!-- top nav bar end -->
      <!-- body start-->
      <div class="p-[30px]">
        <p class="leading-[36px] text-[28px] font-[500]">Sales Summary </p>

        <div class="flex justify-between gap-x-[30px] mt-[16px]">
          <!-- 1st small table -->
          <div class="w-1/3 bg-white rounded-[6px] p-[16px]">
            <div class="flex w-full justify-between">
              <p class="text-primaryText leading-[20px] text-[14px] font-[600]">Today’s Total Sales Count</p>
              <img src="../assets/svg/count.svg" class="w-[16.67px] h-[16.67px]" alt="">
            </div>

            <div class="smallTableInnerDiv bg-[#F1F9F1]">
              <p class="w-1/3"></p>
              <p class="leading-[20px] text-[13px] font-[400] text-primaryText text-center w-1/3">Count</p>
              <p class="leading-[20px] text-[13px] font-[400] text-primaryText text-center w-1/3">Amount</p>
            </div>

            <div class="smallTableInnerDiv bg-[#F1F9F1]">
              <p class="smallTableHead">Counter sales</p>
              <p class="smallTableBody">999999</p>
              <p class="smallTableBody">5000000 TK</p>
            </div>

            <div class="smallTableInnerDiv bg-[#F1F9F1]">
              <p class="smallTableHead">TP Counter sales</p>
              <p class="smallTableBody">999999</p>
              <p class="smallTableBody">5000000 TK</p>
            </div>

            <div class="smallTableInnerDiv bg-[#F1F9F1]">
              <p class="smallTableHead">Online sales</p>
              <p class="smallTableBody">999999</p>
              <p class="smallTableBody">5000000 TK</p>
            </div>

            <div class="smallTableInnerDiv bg-[#F1F9F1]">
              <p class="smallTableHead">Web</p>
              <p class="smallTableBody">999999</p>
              <p class="smallTableBody">5000000 TK</p>
            </div>

            <div class="smallTableInnerDiv bg-[#F1F9F1]">
              <p class="smallTableHead">App</p>
              <p class="smallTableBody">999999</p>
              <p class="smallTableBody">5000000 TK</p>
            </div>

            <div class="smallTableInnerDiv bg-[#F1F9F1]">
              <p class="smallTableHead">Call Center</p>
              <p class="smallTableBody">999999</p>
              <p class="smallTableBody">5000000 TK</p>
            </div>

            <div class="smallTableInnerDiv bg-[#F1F9F1]">
              <p class="smallTableHead">Api</p>
              <p class="smallTableBody">999999</p>
              <p class="smallTableBody">5000000 TK</p>
            </div>

            <div class="bg-[#48A43F] text-white w-full flex justify-between py-[8px] px-[16px] mt-[8px] rounded-[4px]">
              <p class="smallTableGreenFooter text-left">Total</p>
              <p class="smallTableGreenFooter text-center">999999</p>
              <p class="smallTableGreenFooter text-center">5000000 TK</p>
            </div>
          </div>
          <!-- 2nd small table -->
          <div class="w-1/3 bg-white rounded-[6px] p-[16px]">
            <div class="flex w-full justify-between">
              <p class="text-primaryText leading-[20px] text-[14px] font-[600]">Last Week Total Sales Count</p>
              <img src="../assets/svg/count2.svg" class="w-[16.67px] h-[16.67px]" alt="">
            </div>

            <div class="smallTableInnerDiv bg-[#EFF7FD]">
              <p class="w-1/3"></p>
              <p class="leading-[20px] text-[13px] font-[400] text-primaryText text-center w-1/3">Count</p>
              <p class="leading-[20px] text-[13px] font-[400] text-primaryText text-center w-1/3">Amount</p>
            </div>

            <div class="smallTableInnerDiv bg-[#EFF7FD]">
              <p class="smallTableHead">Counter sales</p>
              <p class="smallTableBody">999999</p>
              <p class="smallTableBody">5000000 TK</p>
            </div>

            <div class="smallTableInnerDiv bg-[#EFF7FD]">
              <p class="smallTableHead">TP Counter sales</p>
              <p class="smallTableBody">999999</p>
              <p class="smallTableBody">5000000 TK</p>
            </div>

            <div class="smallTableInnerDiv bg-[#EFF7FD]">
              <p class="smallTableHead">Online sales</p>
              <p class="smallTableBody">999999</p>
              <p class="smallTableBody">5000000 TK</p>
            </div>

            <div class="smallTableInnerDiv bg-[#EFF7FD]">
              <p class="smallTableHead">Web</p>
              <p class="smallTableBody">999999</p>
              <p class="smallTableBody">5000000 TK</p>
            </div>

            <div class="smallTableInnerDiv bg-[#EFF7FD]">
              <p class="smallTableHead">App</p>
              <p class="smallTableBody">999999</p>
              <p class="smallTableBody">5000000 TK</p>
            </div>

            <div class="smallTableInnerDiv bg-[#EFF7FD]">
              <p class="smallTableHead">Call Center</p>
              <p class="smallTableBody">999999</p>
              <p class="smallTableBody">5000000 TK</p>
            </div>

            <div class="smallTableInnerDiv bg-[#EFF7FD]">
              <p class="smallTableHead">Api</p>
              <p class="smallTableBody">999999</p>
              <p class="smallTableBody">5000000 TK</p>
            </div>

            <div class="bg-[#1E88E5] text-white w-full flex justify-between py-[8px] px-[16px] mt-[8px] rounded-[4px]">
              <p class="smallTableGreenFooter text-left">Total</p>
              <p class="smallTableGreenFooter text-center">999999</p>
              <p class="smallTableGreenFooter text-center">5000000 TK</p>
            </div>
          </div>

          <!-- 3rd small table -->

          <div class="w-1/3 bg-white rounded-[6px] p-[16px] relative">
            <div class="flex w-full justify-between">
              <p class="text-primaryText leading-[20px] text-[14px] font-[600]">Online Sales Breakdown</p>
              <img src="../assets/svg/count3.svg" class="w-[16.67px] h-[16.67p bg-[#F2F0FE]x]" alt="">
            </div>

            <div class="smallTableInnerDiv bg-[#F2F0FE]">
              <p class="w-1/3"></p>
              <p class="w-1/3"></p>
              <p class="leading-[20px] text-[13px] font-[400] text-primaryText text-center w-1/3">Count</p>
            </div>



            <div class="smallTableInnerDiv bg-[#F2F0FE]">
              <p class="smallTableHead">Online sales</p>
              <p class="smallTableBody">999999</p>
              <p class="smallTableBody">5000000 TK</p>
            </div>

            <div class="smallTableInnerDiv bg-[#F2F0FE]">
              <p class="smallTableHead">Web</p>
              <p class="smallTableBody">999999</p>
              <p class="smallTableBody">5000000 TK</p>
            </div>

            <div class="smallTableInnerDiv bg-[#F2F0FE]">
              <p class="smallTableHead">App</p>
              <p class="smallTableBody">999999</p>
              <p class="smallTableBody">5000000 TK</p>
            </div>

            <div class="smallTableInnerDiv bg-[#F2F0FE]">
              <p class="smallTableHead">Call Center</p>
              <p class="smallTableBody">999999</p>
              <p class="smallTableBody">5000000 TK</p>
            </div>

            <div class="smallTableInnerDiv bg-[#F2F0FE]">
              <p class="smallTableHead">Api</p>
              <p class="smallTableBody">999999</p>
              <p class="smallTableBody">5000000 TK</p>
            </div>
            

            <div class="absolute bottom-3 left-2 right-2 w-[95%] bg-[#4633F0] text-white flex justify-between py-[8px] px-[16px] mt-[8px] rounded-[4px]">
              <p class="smallTableGreenFooter text-left">Total</p>
              <p class="smallTableGreenFooter text-center">999999</p>
              <p class="smallTableGreenFooter text-center">5000000 TK</p>
            </div>
          </div>
        </div>

        <!-- table start -->

        <div class="mt-[32px] bg-white p-[16px] rounded-[8px]">
          <div class="flex justify-between ">
            <div class="flex gap-x-4 items-center">
              <img src="../assets/svg/startBus.svg" class="w-10 h-10" alt="">
              <p class="leading-[36px] text-[28px] font-[500] text-primaryText">Top 20 Bus Operators</p>
            </div>

            <div class="flex gap-x-4 items-center">
              <div class="flex flex-col gap-y-[10px] relative">
                <label for="from" class="leading-[24px] text-[16px] font-[500] text-primaryText">From</label>
                <input type="text" class="border border-corporateBorder py-[6px] rounded-[4px] focus:outline-none px-2 placeholder:text-[#676769] w-[270px]" placeholder="Select Date">
                <img src="../assets/svg/count2.svg" class="h-5 w-5 absolute right-3 bottom-3" alt="">
              </div>

              <div class="flex flex-col gap-y-[10px] relative">
                <label for="to" class="leading-[24px] text-[16px] font-[500] text-primaryText">To</label>
                <input type="text" class="border border-corporateBorder py-[6px] rounded-[4px] focus:outline-none px-2 placeholder:text-[#676769] w-[270px]" placeholder="Select Date">
                <img src="../assets/svg/count2.svg" class="h-5 w-5 absolute right-3 bottom-3" alt="">
              </div>



            </div>
          </div>
<!-- cellspacing="0" cellpadding="0"  -->
          <div class="mt-[24px]">
                <table class="min-w-full">
          <thead class="">
            <tr>
              <th scope="col" class="DashBoardTableHead">
                
              </th>
              <th scope="col" class="DashBoardTableHead">
                OPERATOR NAME
              </th>
              <th scope="col" class="DashBoardTableHead">
                OWN counter sale
              </th>
              
              <th scope="col" class="DashBoardTableHead">
                Tp Counter sale
              </th>
              <th scope="col" class="DashBoardTableHead">
                Jatri online sale
              </th>
              <th scope="col" class="DashBoardTableHead">
                top Route
              </th>
              <th scope="col" class="DashBoardTableHead">
                Bus type
              </th>
              <th scope="col" class="DashBoardTableHead">
                Total Amount
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-b border-[#EDEDED]">
              <td class="DashBoardTableTd">01</td>
              <td class="DashBoardTableTd">
                Tisha Group and Tubaline
              </td>
              <td class="DashBoardTableTd">
                990485
              </td>
              <td class="DashBoardTableTd">
                990485
              </td>
              <td class="DashBoardTableTd">
                990485
              </td>
              <td class="DashBoardTableTd">
                Mohakhali (Dhaka) - Tongi - <br> Baria (Vadughar)
              </td>
              <td class="DashBoardTableTd">
                45 Seater - Non AC <br> (Business)
              </td>
              <td class="DashBoardTableTd">
                1,00,00,000 TK
              </td>

            </tr>
            <tr class="border-b border-[#EDEDED]">
              <td class="DashBoardTableTd">02</td>
              <td class="DashBoardTableTd">
                Tisha Group and Tubaline
              </td>
              <td class="DashBoardTableTd">
                990485
              </td>
              <td class="DashBoardTableTd">
                990485
              </td>
              <td class="DashBoardTableTd">
                990485
              </td>
              <td class="DashBoardTableTd">
                Mohakhali (Dhaka) - Tongi - <br> Baria (Vadughar)
              </td>
              <td class="DashBoardTableTd">
                45 Seater - Non AC <br> (Business)
              </td>
              <td class="DashBoardTableTd">
                1,00,00,000 TK
              </td>

            </tr>
            <tr class="border-b border-[#EDEDED]">
              <td class="DashBoardTableTd">03</td>
              <td class="DashBoardTableTd">
                Tisha Group and Tubaline
              </td>
              <td class="DashBoardTableTd">
                990485
              </td>
              <td class="DashBoardTableTd">
                990485
              </td>
              <td class="DashBoardTableTd">
                990485
              </td>
              <td class="DashBoardTableTd">
                Mohakhali (Dhaka) - Tongi - <br> Baria (Vadughar)
              </td>
              <td class="DashBoardTableTd">
                45 Seater - Non AC <br> (Business)
              </td>
              <td class="DashBoardTableTd">
                1,00,00,000 TK
              </td>

            </tr>
            <tr class="border-b border-[#EDEDED]">
              <td class="DashBoardTableTd">04</td>
              <td class="DashBoardTableTd">
                Tisha Group and Tubaline
              </td>
              <td class="DashBoardTableTd">
                990485
              </td>
              <td class="DashBoardTableTd">
                990485
              </td>
              <td class="DashBoardTableTd">
                990485
              </td>
              <td class="DashBoardTableTd">
                Mohakhali (Dhaka) - Tongi - <br> Baria (Vadughar)
              </td>
              <td class="DashBoardTableTd">
                45 Seater - Non AC <br> (Business)
              </td>
              <td class="DashBoardTableTd">
                1,00,00,000 TK
              </td>

            </tr>
            <tr class="border-b border-[#EDEDED]">
              <td class="DashBoardTableTd">05</td>
              <td class="DashBoardTableTd">
                Tisha Group and Tubaline
              </td>
              <td class="DashBoardTableTd">
                990485
              </td>
              <td class="DashBoardTableTd">
                990485
              </td>
              <td class="DashBoardTableTd">
                990485
              </td>
              <td class="DashBoardTableTd">
                Mohakhali (Dhaka) - Tongi - <br> Baria (Vadughar)
              </td>
              <td class="DashBoardTableTd">
                45 Seater - Non AC <br> (Business)
              </td>
              <td class="DashBoardTableTd">
                1,00,00,000 TK
              </td>

            </tr>
            <tr>
              <td class="DashBoardTableTd">06</td>
              <td class="DashBoardTableTd">
                Tisha Group and Tubaline
              </td>
              <td class="DashBoardTableTd">
                990485
              </td>
              <td class="DashBoardTableTd">
                990485
              </td>
              <td class="DashBoardTableTd">
                990485
              </td>
              <td class="DashBoardTableTd">
                Mohakhali (Dhaka) - Tongi - <br> Baria (Vadughar)
              </td>
              <td class="DashBoardTableTd">
                45 Seater - Non AC <br> (Business)
              </td>
              <td class="DashBoardTableTd">
                1,00,00,000 TK
              </td>

            </tr>
          </tbody>
        </table>
              </div>
        </div>

      </div>
    </div>
  </div>
</template>
