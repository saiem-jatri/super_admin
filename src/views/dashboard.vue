<template>
 <!-- Top nav bar start-->
 <div class="bg-white h-[72px] sticky top-0 border-b border-[#DBDBDB] z-10">
        <div class="flex justify-between items-center">
          <p class="p-6 text-[#151414] leading-[28px] text-[20px] font-[600]">DashBoard</p>
          <div
              class="w-[230px] xl:w-[270px] h-[40px] border border-[#DBDBDB] flex justify-center items-center leading-[20px] rounded-[4px] pl-14 xl:pl-[9px] overflow-hidden">
            <img alt="" class="h-5 w-5" src="../assets/svg/search.svg">
            <input class="outline-none pl-2 placeholder:text-[#4D4D4F] placeholder:text-[14px] placeholder:leading-[20px]"
                   placeholder="PNR or mobile number"
                   type="text">
          </div>
          <div class="flex gap-x-2 p-4 justify-center items-center mr-6 ">
            <img alt="" class="h-[30px] xl:h-[40px] w-[30px] xl:w-[40px] rounded-full"
                 src="../assets/person/person1.png">
            <p class="text-[#151414] leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[500]">Mostafa
              Mamun Emon</p>
            <img alt="" class="w-[12px] h-[6px]" src="../assets/person/downArrow.svg">
          </div>
        </div>
      </div>
      <!-- top nav bar end -->
      <!-- body start-->
      <div class="pt-6 pb-[30px] px-[30px]">
        <p class="xl:leading-[36px] xl:text-[28px] leading-[30px] text-[24px] font-[600]">Sales Summary </p>

        <div class="flex justify-between gap-x-[30px] mt-[16px]">
          <!-- 1st small table -->
          <div class="w-1/3 bg-white rounded-[6px] p-[16px]">
            <div class="flex w-full justify-between">
              <p class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[600] mb-1">Today’s
                Total Sales Count</p>
              <img alt="" class="w-[12px] h-[12px] xl:w-[16.67px] xl:h-[16.67px]" src="../assets/svg/count.svg">
            </div>

            <div class="smallTableInnerDiv bg-[#F1F9F1]">
              <p class="w-1/3"></p>
              <p class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-primaryText text-center w-1/3">
                Count</p>
              <p class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-primaryText text-center w-1/3">
                Amount</p>
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

            <div class="bg-[#48A43F] text-white w-full flex justify-between p-2 mt-[8px] rounded-[4px]">
              <p class="smallTableGreenFooter text-left">Total</p>
              <p class="smallTableGreenFooter text-center">999999</p>
              <p class="smallTableGreenFooter text-center">5000000 TK</p>
            </div>
          </div>
          <!-- 2nd small table -->
          <div class="w-1/3 bg-white rounded-[6px] p-[16px]">
            <div class="flex w-full justify-between">
              <p class="text-primaryText leading-[20px] text-[14px] font-[600] mb-1">Last Week Total Sales Count</p>
              <img alt="" class="w-[16.67px] h-[16.67px]" src="../assets/svg/count2.svg">
            </div>

            <div class="smallTableInnerDiv bg-[#EFF7FD]">
              <p class="w-1/3"></p>
              <p class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-primaryText text-center w-1/3">Count</p>
              <p class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-primaryText text-center w-1/3">Amount</p>
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

            <div
                class="bg-corporateSecondaryBlue text-white w-full flex justify-between p-2 mt-[8px] rounded-[4px]">
              <p class="smallTableGreenFooter text-left">Total Amount</p>
              <p class="smallTableGreenFooter text-center">999999</p>
              <p class="smallTableGreenFooter text-center">5000000 TK</p>
            </div>
          </div>

          <!-- 3rd small table -->

          <div class="w-1/3 bg-white rounded-[6px] p-[16px] relative">
            <div class="flex w-full justify-between">
              <p class="text-primaryText leading-[20px] text-[14px] font-[600] mb-1">Online Sales Breakdown</p>
              <img alt="" class="w-[16.67px] h-[16.67p bg-[#F2F0FE]x]" src="../assets/svg/count3.svg">
            </div>

            <div class="smallTableInnerDiv bg-[#F2F0FE]">
              <p class="w-1/3"></p>
              <p class="w-1/3"></p>
              <p class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-primaryText text-center w-1/3">Count</p>
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


            <div
                class="absolute bottom-3 left-2 right-2 w-[95%] bg-[#4633F0] text-white flex justify-between p-2 mt-[8px] rounded-[4px]">
              <p class="smallTableGreenFooter text-left">Total Amount</p>
              <p class="smallTableGreenFooter text-center">999999</p>
              <p class="smallTableGreenFooter text-center">5000000 TK</p>
            </div>
          </div>
        </div>

        <!-- table start -->

        <div class="mt-[32px] bg-white p-[16px] rounded-[8px]">
          <div class="flex justify-between ">
            <div class="flex gap-x-4 items-center">
              <img alt="" class="w-8 h-8 xl:w-10 xl:h-10" src="../assets/svg/startBus.svg">
              <p class="leading-[24px] text-[16px] xl:leading-[36px] xl:text-[28px] font-[500] text-primaryText">Top 20
                Bus Operators</p>
            </div>

            <div class="flex gap-x-4 items-center">
              <div class="flex flex-col gap-y-[10px] relative">
                <label class="leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[500] text-primaryText"
                       for="from">From</label>
                <input class="border border-corporateBorder py-[4px] xl:py-[6px] rounded-[4px] focus:outline-none px-2 placeholder:text-[#676769] w-[270px]"
                       placeholder="Select Date"
                       type="text">
                <img alt="" class="h-3 w-3 xl:h-5 xl:w-5 absolute right-3 bottom-3" src="../assets/svg/count2.svg">
              </div>

              <div class="flex flex-col gap-y-[10px] relative">
                <label class="leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[500] text-primaryText"
                       for="to">To</label>
                <input class="border border-corporateBorder py-[4px] xl:py-[6px] rounded-[4px] focus:outline-none px-2 placeholder:text-[#676769] w-[270px]"
                       placeholder="Select Date"
                       type="text">
                <img alt="" class="h-5 w-5 absolute right-3 bottom-3" src="../assets/svg/count2.svg">
              </div>


            </div>
          </div>
          <!-- cellspacing="0" cellpadding="0"  -->
          <div class="mt-[24px]">
            <table class="min-w-full">
              <thead class="">
              <tr>
                <th class="DashBoardTableHead" scope="col">

                </th>
                <th class="DashBoardTableHead" scope="col">
                  OPERATOR NAME
                </th>
                <th class="DashBoardTableHead" scope="col">
                  OWN counter sale
                </th>

                <th class="DashBoardTableHead" scope="col">
                  Tp Counter sale
                </th>
                <th class="DashBoardTableHead" scope="col">
                  Jatri online sale
                </th>
                <th class="DashBoardTableHead" scope="col">
                  top Route
                </th>
                <th class="DashBoardTableHead" scope="col">
                  Bus type
                </th>
                <th class="DashBoardTableHead" scope="col">
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
</template>
