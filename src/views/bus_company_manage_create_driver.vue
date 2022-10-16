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
              <p class="lg:leading-[16px] xl:leading-[28px] lg:text-[14px] xl:text-[20px] font-[600] text-primaryText">Create Company</p>
              <div class="flex justify-center items-center gap-x-[6px]">
                <p class="text-secondaryText leading-[12px] text-[8px] xl:leading-[16px] xl:text-[12px] font-[400]">Bus Company</p>
                <img src="../assets/svg/bgBack.svg" alt="" class="w-1 h-2">
                <p class="text-secondaryText leading-[12px] text-[8px] xl:leading-[16px] xl:text-[12px] font-[400]">Add company</p>
                <img src="../assets/svg/bgBack.svg" alt="" class="w-1 h-2">
                <p class="text-secondaryText leading-[12px] text-[8px] xl:leading-[16px] xl:text-[12px] font-[400]">Desh Travels Limited</p>
                <img src="../assets/svg/bgBack.svg" alt="" class="w-1 h-2">
                <p class="text-secondaryText leading-[12px] text-[8px] xl:leading-[16px] xl:text-[12px] font-[400]">Manage</p>
                <img src="../assets/svg/bgBack.svg" alt="" class="w-1 h-2">
                <p class="text-secondaryText leading-[12px] text-[8px] xl:leading-[16px] xl:text-[12px] font-[400]">Owner</p>
              </div>
            </div>
          </div>
          <div class="flex gap-x-[24px] p-4 w-1/2 justify-end items-center pr-2 ">
            <!--            <input type="text" class="w-[270px] h-[40px] border border-[#DBDBDB] placeholder:text-[#4D4D4F] placeholder:text-[14px] leading-[20px] rounded-[4px] pl-8 focus:outline-none" placeholder="PNR or mobile number">-->
            <!--            <img src="../assets/svg/search.svg" class="h-5 w-5 absolute left-[242px]" alt="">-->
            <div class="w-[200px] h-[30px] xl:w-[270px] xl:h-[40px] border border-[#DBDBDB] flex justify-center items-center rounded-[4px] pl-[9px] gap-x-2" >
              <img src="../assets/svg/search.svg" class="h-2 w-2 xl:h-5 xl:w-5 mt-1" alt="">
              <input type="text" class="outline-none placeholder:text-[#4D4D4F] w-[90%] placeholder:text-[8px] placeholder:leading-[16px] xl:placeholder:text-[14px] xl:placeholder:leading-[20px]" placeholder="PNR or mobile number">
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
        <!--        tab start-->
        <div class="border-b border-[#EDEDED]">
          <div class="flex justify-start items-center">
            <a href="#" class="companyOwnerTabNonActive">Owner</a>
            <a href="#" class="companyOwnerTabNonActive">Route</a>
            <a href="#" class="companyOwnerTabNonActive">Counter</a>
            <a href="#" class="companyOwnerTabNonActive">Trips</a>
            <a href="#" class="companyOwnerTabNonActive">Agent</a>
            <a href="#" class="companyOwnerTabNonActive">Counterman</a>
            <a href="#" class="companyOwnerTabNonActive">Staffs</a>
            <a href="#" class="companyOwnerTabActive">Ticket</a>

          </div>
        </div>
        <!--        card-->
        <div class="bg-white rounded-[10px]">
          <div class="p-4">
            <p class="text-primaryText leading-[20px] text-[14px] font-[600]">Ticket format</p>
            <div class="flex gap-x-[96px] items-center mt-[18px] xl:mt-[24px]">
                <div class="flex justify-center items-center gap-x-[15px] xl:gap-x-[19px]">
                  <input type="radio" class="mt-8">
                <div>
                  <p class="text-primaryText leading-[20px] text-[14px] font-[600]">3 part ticket</p>
                  <img src="../assets/svg/1st_ticket.svg" class="mt-4" alt="">
                </div>
                </div>
                <div class="flex justify-center items-center gap-x-[15px] xl:gap-x-[19px]">
                  <input type="radio" class="mt-8">
                  <div>
                    <p class="text-primaryText leading-[20px] text-[14px] font-[600]">3 part ticket</p>
                    <img src="../assets/svg/2_part_ticket.svg" class="mt-4" alt="">
                  </div>
              </div>
                <div class="flex justify-center items-center gap-x-[15px] xl:gap-x-[19px]">
                  <input type="radio" class="mt-8">
                  <div>
                    <p class="text-primaryText leading-[20px] text-[14px] font-[600]">3 part ticket</p>
                    <img src="../assets/svg/3_part_ticket.svg" class="mt-4" alt="">
                  </div>
              </div>
                <div class="flex justify-center items-center gap-x-[15px] xl:gap-x-[19px]">
                  <input type="radio" class="mt-8">
                  <div>
                    <p class="text-primaryText leading-[20px] text-[14px] font-[600]">3 part ticket</p>
                    <img src="../assets/svg/4_part_ticket.svg" class="mt-4" alt="">
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
</style>
