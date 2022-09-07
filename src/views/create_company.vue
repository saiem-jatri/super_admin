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
      <div class="bg-white h-[72px] sticky top-0 border-b border-[#DBDBDB] z-10 px-[32px]">
        <div class="flex justify-between">
         <div class="flex justify-center items-center gap-x-[32px]">
            <div class="flex justify-center items-center gap-x-[10px]">
              <img src="../assets/svg/Back.svg" class="w-[12px] h-[12px]" alt="">
              <p class="text-primaryText leading-[16px] text-[12px] font-[500]">Back</p>
            </div>
           <div class="flex flex-col gap-y-[4px]">
              <p class="leading-[28px] text-[20px] font-[600] text-primaryText">Create Company</p>
             <div class="flex justify-center items-center gap-x-[6px]">
                <p class="text-secondaryText leading-[16px] text-[12px] font-[400]">Bus Company</p>
               <img src="../assets/svg/bgBack.svg" alt="" class="w-1 h-2">
               <p class="text-secondaryText leading-[16px] text-[12px] font-[400]">Add company</p>
             </div>
           </div>
         </div>
          <div class="flex gap-x-[24px] p-4 w-1/2 justify-end items-center pr-2 relative">
            <input type="text" class="w-[270px] h-[40px] border border-[#DBDBDB] placeholder:text-[#4D4D4F] placeholder:text-[14px] leading-[20px] rounded-[4px] pl-8 focus:outline-none" placeholder="PNR or mobile number">
            <img src="../assets/svg/search.svg" class="h-5 w-5 absolute left-[242px]" alt="">
            <img src="../assets/person/person1.png" alt="" class="h-[40px] w-[40px] rounded-full">
            <p class="text-[#151414] leading-[24px] text-[16px] font-[500]">Mostafa Mamun Emon</p>
            <img src="../assets/person/downArrow.svg" alt="" class="w-[12px] h-[6px]">
          </div>
        </div>
      </div>
      <!-- top nav bar end -->
      <!-- body start-->
      <div class="px-[30px] py-[24px]">
        <div class="bg-white rounded-[8px]">
<!--          border-b-->
      <div class=" border-b border-[#DBDBDB]">
        <div class="p-[16px]">
          <p class="text-[#1E88E5] leading-[24px] text-[16px] font-[600]">COMPANY INFORMATION</p>
          <p class="text-primaryText leading-[24px] text-[16px] font-[600] mt-[16px]">Company logo</p>

          <div class="w-[480px] h-[100px] border border-dashed border-[#1E88E5] mt-[10px] rounded-[4px] flex justify-center items-center">
            <div class="flex gap-x-[8px]">
              <img src="../assets/svg/file.svg" class="w-[18px] h-[15px]" alt="">
              <p class="text-[#1E88E5] leading-[20px] text-[14px] font-[400]">Upload company logo file</p>
              <p class="text-[#1E88E5] leading-[20px] text-[14px] font-[400] border-b border-[#1E88E5]">Browse file</p>
            </div>
          </div>
<!--          input grid start-->
          <div class="flex gap-x-[16px] justify-center items-center mt-[16px]">
            <div class="w-1/4">
              <div class="flex justify-between items-center w-full">
                <p class="text-primaryText leading-[24px] text-[16px] font-[600]">Company name</p>
                <img src="../assets/svg/smallStar.svg" class="w-[9px] h-[24px]" alt="">
              </div>
              <input type="text" class="focus:outline-none mt-[10px] w-full border border-[#DBDBDB] rounded-[4px] pl-2 py-2 placeholder:text-[#676769] placeholder:leading-[20px] placeholder:text-[14px]" placeholder="Enter company name">
            </div>

            <div class="w-1/4">
              <div class="flex justify-between items-center w-full">
                <p class="text-primaryText leading-[24px] text-[16px] font-[600]">Different display name</p>
                <img src="../assets/svg/smallStar.svg" class="w-[9px] h-[24px]" alt="">
              </div>
              <input type="text" class="focus:outline-none mt-[10px] w-full border border-[#DBDBDB] rounded-[4px] pl-2 py-2 placeholder:text-[#676769] placeholder:leading-[20px] placeholder:text-[14px]" placeholder="Enter company name">
            </div>

            <div class="w-1/4">
              <div class="flex justify-between items-center w-full">
                <p class="text-primaryText leading-[24px] text-[16px] font-[600]">Company mobile number</p>
                <img src="../assets/svg/smallStar.svg" class="w-[9px] h-[24px]" alt="">
              </div>
              <input type="text" class="focus:outline-none mt-[10px] w-full border border-[#DBDBDB] rounded-[4px] pl-2 py-2 placeholder:text-[#676769] placeholder:leading-[20px] placeholder:text-[14px]" placeholder="Enter company name">
            </div>

            <div class="w-1/4">
              <div class="flex justify-between items-center w-full">
                <p class="text-primaryText leading-[24px] text-[16px] font-[600]">Contact person</p>
                <img src="../assets/svg/smallStar.svg" class="w-[9px] h-[24px]" alt="">
              </div>
              <input type="text" class="focus:outline-none mt-[10px] w-full border border-[#DBDBDB] rounded-[4px] pl-2 py-2 placeholder:text-[#676769] placeholder:leading-[20px] placeholder:text-[14px]" placeholder="Enter company name">
            </div>
          </div>
<!--          2nd grid-->
          <div class="flex gap-x-[16px] justify-center items-center mt-[16px]">
            <div class="w-1/4 relative">
              <p class="text-primaryText leading-[24px] text-[16px] font-[500]">Print type</p>
              <Dropdown class="w-full p-[1px] mt-[10px]" v-model="selectedCity" :options="cities" optionLabel="name" placeholder="Select a City" />
            </div>

            <div class="w-1/4 relative">
              <p class="text-primaryText leading-[24px] text-[16px] font-[500]">Print type</p>
              <Dropdown class="w-full p-[1px] mt-[10px]" v-model="selectedCity" :options="cities" optionLabel="name" placeholder="Select a City" />
            </div>

            <div class="w-1/4 relative">
              <p class="text-primaryText leading-[24px] text-[16px] font-[500]">Print type</p>
              <Dropdown class="w-full p-[1px] mt-[10px]" v-model="selectedCity" :options="cities" optionLabel="name" placeholder="Select a City" />
            </div>

            <div class="w-1/4 relative">
              <p class="text-primaryText leading-[24px] text-[16px] font-[500]">Print type</p>
              <Dropdown class="w-full p-[1px] mt-[10px]" v-model="selectedCity" :options="cities" optionLabel="name" placeholder="Select a City" />
            </div>
          </div>
<!--          3rd grid-->
          <div class="flex gap-x-[16px] justify-center items-center mt-[16px]">
            <div class="w-1/4 relative">
              <p class="text-primaryText leading-[24px] text-[16px] font-[500]">Allow coach details</p>
              <select name="" id="" class="w-full border border-[#DBDBDB] mt-[10px] rounded-[4px] px-2 py-2 focus:outline-none leading-[20px] text-[14px] font-[400]">
                <option value="volvo" selected >Select Option</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
              </select>
              <img src="../assets/svg/down_arrow.svg" class="absolute right-2 bottom-4" alt="">
            </div>

            <div class="w-1/4 relative">
              <p class="text-primaryText leading-[24px] text-[16px] font-[500]">Allow farewise report</p>
              <select name="" id="" class="w-full border border-[#DBDBDB] mt-[10px] rounded-[4px] px-2 py-2 focus:outline-none leading-[20px] text-[14px] font-[400]">
                <option value="volvo" selected >No</option>
                <option value="saab">Yes</option>
              </select>
              <img src="../assets/svg/down_arrow.svg" class="absolute right-2 bottom-4" alt="">
            </div>

            <div class="w-1/4 relative">
              <p class="text-primaryText leading-[24px] text-[16px] font-[500]">Allow coachwise trip</p>
              <select name="" id="" class="w-full border border-[#DBDBDB] mt-[10px] rounded-[4px] px-2 py-2 focus:outline-none leading-[20px] text-[14px] font-[400]">
                <option value="volvo" selected >No</option>
                <option value="saab">Yes</option>
              </select>
              <img src="../assets/svg/down_arrow.svg" class="absolute right-2 bottom-4" alt="">
            </div>

            <div class="w-1/4 relative">
              <p class="text-primaryText leading-[24px] text-[16px] font-[500]">Allow refund</p>
              <select name="" id="" class="w-full border border-[#DBDBDB] mt-[10px] rounded-[4px] px-2 py-2 focus:outline-none leading-[20px] text-[14px] font-[400]">
                <option value="volvo" selected >No</option>
                <option value="saab">Yes</option>
              </select>
              <img src="../assets/svg/down_arrow.svg" class="absolute right-2 bottom-4" alt="">
            </div>
          </div>
<!--          4th grid-->
          <div class="flex gap-x-[16px] justify-center items-center mt-[16px]">
            <div class="w-1/4 relative">
              <p class="text-primaryText leading-[24px] text-[16px] font-[500]">Allow due</p>
              <select name="" id="" class="w-full border border-[#DBDBDB] mt-[10px] rounded-[4px] px-2 py-2 focus:outline-none leading-[20px] text-[14px] font-[400]">
                <option value="volvo" selected >Select Option</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
              </select>
              <img src="../assets/svg/down_arrow.svg" class="absolute right-2 bottom-4" alt="">
            </div>

            <div class="w-1/4 relative">
              <p class="text-primaryText leading-[24px] text-[16px] font-[500]">Allow referral</p>
              <select name="" id="" class="w-full border border-[#DBDBDB] mt-[10px] rounded-[4px] px-2 py-2 focus:outline-none leading-[20px] text-[14px] font-[400]">
                <option value="volvo" selected >No</option>
                <option value="saab">Yes</option>
              </select>
              <img src="../assets/svg/down_arrow.svg" class="absolute right-2 bottom-4" alt="">
            </div>

            <div class="w-1/4 relative">
              <p class="text-primaryText leading-[24px] text-[16px] font-[500]">Reservation status</p>
              <select name="" id="" class="w-full border border-[#DBDBDB] mt-[10px] rounded-[4px] px-2 py-2 focus:outline-none leading-[20px] text-[14px] font-[400]">
                <option value="volvo" selected >No</option>
                <option value="saab">Yes</option>
              </select>
              <img src="../assets/svg/down_arrow.svg" class="absolute right-2 bottom-4" alt="">
            </div>

            <div class="w-1/4 relative">
              <p class="text-primaryText leading-[24px] text-[16px] font-[500]">Allow discount</p>
              <select name="" id="" class="w-full border border-[#DBDBDB] mt-[10px] rounded-[4px] px-2 py-2 focus:outline-none leading-[20px] text-[14px] font-[400]">
                <option value="volvo" selected >No</option>
                <option value="saab">Yes</option>
              </select>
              <img src="../assets/svg/down_arrow.svg" class="absolute right-2 bottom-4" alt="">
            </div>
          </div>
        </div>

      </div>

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
  border-bottom: 1px dotted black;
}
</style>

<script>
export  default {
  data() {
    return {
      selectedCity: null,
      cities: [
        {name: 'New York', code: 'NY'},
        {name: 'Rome', code: 'RM'},
        {name: 'London', code: 'LDN'},
        {name: 'Istanbul', code: 'IST'},
        {name: 'Paris', code: 'PRS'}
      ]
    }
  }

}
</script>



