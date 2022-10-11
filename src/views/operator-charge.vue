<template>
  <!-- Top nav bar start-->
  <div class="bg-white h-[72px] sticky top-0 border-b border-[#DBDBDB] z-10">
    <div class="flex justify-between items-center">
      <div class="pl-8 flex flex-col gap-y-[4px]">
        <p class="lg:leading-[16px] xl:leading-[28px] lg:text-[14px] xl:text-[20px] font-[600] text-primaryText">
          Jatri Online Charge</p>
        <div class="flex justify-center items-center gap-x-[6px] mr-10">
          <p class="text-secondaryText leading-[12px] text-[8px] xl:leading-[16px] xl:text-[12px] font-[400]">
            Fees</p>
          <img alt="" class="w-1 h-2" src="../assets/svg/bgBack.svg">
          <p class="text-secondaryText leading-[12px] text-[8px] xl:leading-[16px] xl:text-[12px] font-[400]">
            Operator charge</p>
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
      <p class="pt-4 px-4 leading-[20px] xl:leading-[24px] text-[14px] xl:text-[16px] font-[600]">Add New Operator
        Charge</p>
      <hr class="px-4 border-t border-[#DBDBDB] mt-4">
      <div class="p-4 flex gap-x-[21px] items-center">
        <div class="flex justify-start items-center gap-x-4 w-full">
          <div class="w-1/4">
            <p class="text-primaryText leading-[20px] text-[14px] xl:leading-[24px] xl:text-[16px] font-[600]">Bus
              operator</p>
            <Dropdown
                v-model="selectedCity"
                :options="cities"
                class="w-full p-[1px] mt-[10px] placeholder:text-primaryText placeholder:leading-[16px] placeholder:text-[12px] xl:placeholder:leading-[20px] xl:placeholder:text-[14px]"
                optionLabel="name" placeholder="Dash Travels"/>
          </div>
          <div class="w-1/4">
            <p class="text-primaryText leading-[20px] text-[14px] xl:leading-[24px] xl:text-[16px] font-[600]">
              Commission type</p>
            <Dropdown
                v-model="selectedCity"
                :options="cities"
                class="w-full p-[1px] mt-[10px] placeholder:text-primaryText placeholder:leading-[16px] placeholder:text-[12px] xl:placeholder:leading-[20px] xl:placeholder:text-[14px]"
                optionLabel="name" placeholder="Fixed"/>
          </div>
          <div class="w-1/4">
            <div class="flex justify-between items-center w-full">
              <p class="text-primaryText leading-[20px] text-[14px] xl:leading-[24px] xl:text-[16px] font-[600]">
                Amount</p>
            </div>
            <input
                class="focus:outline-none mt-[10px] w-full border border-[#DBDBDB] rounded-[4px] pl-2 py-2 placeholder:text-[#676769] placeholder:leading-[16px] placeholder:text-[12px] xl:placeholder:leading-[20px] xl:placeholder:text-[14px]"
                placeholder="50"
                type="text">
          </div>
          <div class="ml-[86px] mt-10">
            <button
                class="flex justify-center items-center gap-x-[10px] text-white leading-[20px] text-[14px] font-[400] bg-corporate rounded-full w-[198px] h-[40px]">
              <img alt="" src="../assets/svg/white_check.svg">Create operator charge
            </button>
          </div>
        </div>
      </div>
    </div>

    <!--    2nd card-->
    <div class="mt-[16px] bg-white rounded-[10px]">
      <p class="pt-4 px-4 leading-[20px] xl:leading-[24px] text-[14px] xl:text-[16px] font-[600]">Company lists</p>
      <hr class="px-4 border-t border-[#DBDBDB] mt-4">
      <div class="p-4 flex gap-x-[21px] items-center">
        <div class="flex justify-between items-center w-full">
          <div class="flex w-[80%] gap-x-4">
            <div class="w-1/4">
              <p class="text-primaryText leading-[20px] text-[14px] xl:leading-[24px] xl:text-[16px] font-[600]">Bus
                operator</p>
              <Dropdown
                  v-model="selectedCity"
                  :options="cities"
                  class="w-full p-[1px] mt-[10px] placeholder:text-primaryText placeholder:leading-[16px] placeholder:text-[12px] xl:placeholder:leading-[20px] xl:placeholder:text-[14px]"
                  optionLabel="name" placeholder="Dash Travels"/>
            </div>
            <div class="w-1/4">
              <p class="text-primaryText leading-[20px] text-[14px] xl:leading-[24px] xl:text-[16px] font-[600]">
                Commission type</p>
              <Dropdown
                  v-model="selectedCity"
                  :options="cities"
                  class="w-full p-[1px] mt-[10px] placeholder:text-primaryText placeholder:leading-[16px] placeholder:text-[12px] xl:placeholder:leading-[20px] xl:placeholder:text-[14px]"
                  optionLabel="name" placeholder="Fixed"/>
            </div>
          </div>
          <div class="ml-[86px] xlmt-10">
            <button
                class="mt-5 flex gap-x-[9px] justify-center items-center bg-transparent border border-[#8D8D8F] text-corporate leading-[14px] xl:leading-[16px] text-[11px] xl:text-[12px] font-[500] py-3 pl-[17px] pr-[24px] rounded-full"><span>
                <img alt="" class="w-[13px] xl:h-[13px]" src="../assets/svg/corporate_search.svg">
              </span>Search
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-white rounded-[8px] mt-4">
      <!-- table start -->
      <table class="min-w-full">
        <thead>
        <tr class="bg-[#4D4D4F] h-[36px]">
          <th class="companyTableHead" scope="col">
            operator name
          </th>
          <th class="companyTableHead" scope="col">
            commision amount
          </th>

          <th class="companyTableHead" scope="col">
            action
          </th>
        </tr>
        </thead>
        <tbody>
        <tr class="border-b border-[#EDEDED]">
          <td class="text-primaryText border-r border-[#DBDBDB] text-center leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px]">
            Counter name
          </td>
          <td class="text-primaryText border-r border-[#DBDBDB] text-center leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px]">
            50 TK
          </td>
          <td class="border-r border-[#DBDBDB]">
            <div class="py-[5px] px-[18px] flex justify-center items-center gap-x-[16px]">
              <button class="companyEditButton"><span><img alt="" class="w-3 h-3" src="../assets/svg/edit.svg"></span>Edit
              </button>
            </div>
          </td>
        </tr>
        <tr class="border-b border-[#EDEDED]">
          <td class="text-primaryText border-r border-[#DBDBDB] text-center leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px]">
            Counter name
          </td>
          <td class="text-primaryText border-r border-[#DBDBDB] text-center leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px]">
            50 TK
          </td>
          <td class="border-r border-[#DBDBDB]">
            <div class="py-[5px] px-[18px] flex justify-center items-center gap-x-[16px]">
              <button class="companyEditButton"><span><img alt="" class="w-3 h-3" src="../assets/svg/edit.svg"></span>Edit
              </button>
            </div>
          </td>
        </tr>
        <tr class="border-b border-[#EDEDED]">
          <td class="text-primaryText border-r border-[#DBDBDB] text-center leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px]">
            Counter name
          </td>
          <td class="text-primaryText border-r border-[#DBDBDB] text-center leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px]">
            50 TK
          </td>
          <td class="border-r border-[#DBDBDB]">
            <div class="py-[5px] px-[18px] flex justify-center items-center gap-x-[16px]">
              <button class="companyEditButton"><span><img alt="" class="w-3 h-3" src="../assets/svg/edit.svg"></span>Edit
              </button>
            </div>
          </td>
        </tr>
        <tr class="border-b border-[#EDEDED]">
          <td class="text-primaryText border-r border-[#DBDBDB] text-center leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px]">
            Counter name
          </td>
          <td class="text-primaryText border-r border-[#DBDBDB] text-center leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px]">
            50 TK
          </td>
          <td class="border-r border-[#DBDBDB]">
            <div class="py-[5px] px-[18px] flex justify-center items-center gap-x-[16px]">
              <button class="companyEditButton"><span><img alt="" class="w-3 h-3" src="../assets/svg/edit.svg"></span>Edit
              </button>
            </div>
          </td>
        </tr>
        <tr class="border-b border-[#EDEDED]">
          <td class="text-primaryText border-r border-[#DBDBDB] text-center leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px]">
            Counter name
          </td>
          <td class="text-primaryText border-r border-[#DBDBDB] text-center leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px]">
            50 TK
          </td>
          <td class="border-r border-[#DBDBDB]">
            <div class="py-[5px] px-[18px] flex justify-center items-center gap-x-[16px]">
              <button class="companyEditButton"><span><img alt="" class="w-3 h-3" src="../assets/svg/edit.svg"></span>Edit
              </button>
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
