<template>
  <!-- Top nav bar start-->
  <div class="bg-white h-[72px] sticky top-0 border-b border-[#DBDBDB] z-10">
    <div class="flex justify-between items-center">
      <div class="pl-8 flex flex-col gap-y-[4px]">
        <p class="lg:leading-[16px] xl:leading-[28px] lg:text-[14px] xl:text-[20px] font-[600] text-primaryText">
          Jatri Online Charge</p>
        <div class="flex justify-center items-center gap-x-[6px] mr-8">
          <p class="text-secondaryText leading-[12px] text-[8px] xl:leading-[16px] xl:text-[12px] font-[400]">
            Fees</p>
          <img alt="" class="w-1 h-2" src="../assets/svg/bgBack.svg">
          <p class="text-secondaryText leading-[12px] text-[8px] xl:leading-[16px] xl:text-[12px] font-[400]">
            Jatri online charge</p>
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
        <p class="text-[#151414] leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[500]">Mostafa
          Mamun Emon</p>
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
        <router-link :class="$route.path === '/fees' ? 'companyOwnerTabActive' : 'companyOwnerTabNonActive' "
                     to="/fees">Jatri Online Charge
        </router-link>
        <router-link :class="$route.path === '/operator' ? 'companyOwnerTabActive' : 'companyOwnerTabNonActive' "
                     to="/operator">
          Operator Charge
        </router-link>
        <router-link :class="$route.path === '/systemUsageBill' ? 'companyOwnerTabActive' : 'companyOwnerTabNonActive' "
                     to="/systemUsageBill">
          System usage bill
        </router-link>
      </div>
    </div>
    <!--        card-->
    <div class="mt-[16px] bg-white rounded-[10px]">
      <div class="p-4 flex justify-between gap-x-[21px] items-center">
        <div class="flex justify-start items-center gap-x-4 w-full">
          <div class="w-1/5">
            <p class="text-primaryText leading-[20px] text-[14px] xl:leading-[24px] xl:text-[16px] font-[600]">Online
              charge type</p>
            <Dropdown
                v-model="selectedCity"
                :options="cities"
                class="w-full py-1 mt-[10px] placeholder:text-primaryText placeholder:leading-[16px] placeholder:text-[12px] xl:placeholder:leading-[20px] xl:placeholder:text-[14px]"
                optionLabel="name" placeholder="Select online charge type"/>
          </div>
          <div class="w-1/6">
            <div class="flex justify-between items-center w-full">
              <p class="text-primaryText leading-[20px] text-[14px] xl:leading-[24px] xl:text-[16px] font-[600]">
                Amount</p>
            </div>
            <input
                class="focus:outline-none mt-[10px] w-full border border-[#DBDBDB] rounded-[4px] pl-2 py-2 placeholder:text-[#676769] placeholder:leading-[16px] placeholder:text-[12px] xl:placeholder:leading-[20px] xl:placeholder:text-[14px]"
                placeholder="Enter amount"
                type="text">
          </div>

          <div class="w-1/5">
            <div class="flex justify-between items-center w-full">
              <p class="text-primaryText leading-[20px] text-[14px] xl:leading-[24px] xl:text-[16px] font-[600]">
                Max online charge (up to)</p>
            </div>
            <input
                class="focus:outline-none mt-[10px] w-full border border-[#DBDBDB] rounded-[4px] pl-2 py-2 placeholder:text-[#676769] placeholder:leading-[16px] placeholder:text-[12px] xl:placeholder:leading-[20px] xl:placeholder:text-[14px]"
                placeholder="Enter amount"
                type="text">
          </div>
          <div class="w-1/5">
            <p class="text-primaryText leading-[20px] text-[14px] xl:leading-[24px] xl:text-[16px] font-[600]">Gateway
              charge type</p>
            <Dropdown
                v-model="selectedCity"
                :options="cities"
                class="w-full py-1 mt-[10px] placeholder:text-primaryText placeholder:leading-[16px] placeholder:text-[12px] xl:placeholder:leading-[20px] xl:placeholder:text-[14px]"
                optionLabel="name" placeholder="Select gateway charge type"/>
          </div>
          <div class="w-1/7">
            <div class="flex justify-between items-center w-full">
              <p class="text-primaryText leading-[20px] text-[14px] xl:leading-[24px] xl:text-[16px] font-[600]">
                Amount</p>
            </div>
            <input
                class="focus:outline-none mt-[10px] w-full border border-[#DBDBDB] rounded-[4px] pl-2 py-2 placeholder:text-primaryText placeholder:leading-[16px] placeholder:text-[12px] xl:placeholder:leading-[20px] xl:placeholder:text-[14px]"
                placeholder="Enter amount"
                type="text">
          </div>
        </div>
      </div>
      <div class="flex justify-center items-center pt-1 pb-5">
        <button class="flex justify-center items-center gap-x-[10px] corporateButton">
          <img alt="" src="../assets/svg/save_change.svg">Save commission
        </button>
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

.p-dropdown-panel .p-dropdown-items .p-dropdown-item:not(:last-child), .p-dropdown-panel .p-dropdown-items .p-dropdown-item:not(:last-child):hover {
  border-bottom: 1px dotted #DBDBDB;
}
</style>
<script>
import DropdownMenu from "../components/DropdownMenu.vue";

export default {
  components: {
    DropdownMenu
  }
}
</script>
