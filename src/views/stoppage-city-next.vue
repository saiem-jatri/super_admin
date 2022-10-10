<template>
    <!-- Top nav bar start-->
    <div class="bg-white h-[72px] sticky top-0 border-b border-[#DBDBDB] z-10">
            <div class="flex justify-between items-center">
              <div class="pl-6 flex flex-col gap-y-[4px]">
                <p class="lg:leading-[16px] xl:leading-[28px] lg:text-[14px] xl:text-[20px] font-[600] text-primaryText">
                    City</p>
                <div class="flex justify-center items-center gap-x-[6px] mr-4">
                  <p class="text-secondaryText leading-[12px] text-[8px] xl:leading-[16px] xl:text-[12px] font-[400]">Stoppage</p>
                  <img alt="" class="w-1 h-2" src="../assets/svg/bgBack.svg">
                  <p class="text-secondaryText leading-[12px] text-[8px] xl:leading-[16px] xl:text-[12px] font-[400]">
                    City</p>
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
            <router-link to="/stoppageCity" :class="$route.path === '/stoppageCity' ? 'companyOwnerTabActive w-[160px]' : 'companyOwnerTabNonActive w-[160px]' ">City</router-link>
            <router-link to="/stoppage" :class="$route.path === '/stoppage' ? 'companyOwnerTabActive w-[160px]' : 'companyOwnerTabNonActive w-[160px]' ">Stoppage</router-link>
          </div>
        </div>

        <div class="mt-[16px] bg-white rounded-[10px]">
          <div class="p-4 w-1/3">
            <p class="text-corporateSecondaryBlue mb-3">CITY BULK UPLOAD</p>
          <div>
            <div class="w-full py-8 h-[40px] bg-[#EFF7FD] border border-dashed border-corporateSecondaryBlue mt-[10px] rounded-[4px] flex justify-center items-center">
              <div class="flex justify-between w-full px-4">
                <div class="flex items-center gap-x-2">
                  <p class="leading-[20px] xl:leading-[24px] text-[14px] xl:text-[16px] text-primaryText"> File name</p>
                  <a class="" href="#"><img alt="" class="w-[20px] h-[20px]" src="/src/assets/svg/border-cross.svg"></a>
                </div>
                <p class="text-[#E0293B] leading-[20px] text-[14px] font-[600] border-b border-[#E0293B]"> Replace file</p>
              </div>
            </div>
            <p class="text-sm mt-2">*Last updated 20 mins ago</p>
          </div>

          </div>
      </div>

<!--Card-->
      <div class="mt-[16px] bg-white rounded-[10px]">
          <div class="p-4">
            <p class="text-corporateSecondaryBlue mb-3">ADD SINGLE CITY</p>
            <div class="flex justify-start items-center gap-x-4 w-full">
              <div class="w-1/5">
                <div class="flex justify-between items-center w-full">
                  <p class="text-primaryText leading-[20px] text-[14px] xl:leading-[24px] xl:text-[16px] font-[600]">City</p>
                </div>
                <input type="text" class="focus:outline-none mt-[10px] w-full border border-[#DBDBDB] rounded-[4px] pl-2 py-2 placeholder:text-[#676769] placeholder:leading-[16px] placeholder:text-[12px] xl:placeholder:leading-[20px] xl:placeholder:text-[14px]" placeholder="Enter city name">
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
          <router-link to="" class="flex justify-center items-center gap-x-[10px] corporateButton">
            <img src="../assets/svg/save_change.svg" alt="">Save city
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
              Status 
            </th>
            <th scope="col" class="companyTableHead">
              action
            </th>
          </tr>
          </thead>
          <tbody>
          <tr class="border-b border-[#EDEDED]">
            <td class="text-primaryText border-r border-[#DBDBDB] text-center leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px]">Dhaka</td>
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
            <td class="text-primaryText border-r border-[#DBDBDB] text-center leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px]">Operator name</td>
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
            <td class="text-primaryText border-r border-[#DBDBDB] text-center leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px]">Operator name</td>
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
            <td class="text-primaryText border-r border-[#DBDBDB] text-center leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px]">Operator name</td>
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
            <td class="text-primaryText border-r border-[#DBDBDB] text-center leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px]">Operator name</td>
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
            <td class="text-primaryText border-r border-[#DBDBDB] text-center leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px]">Operator name</td>
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
