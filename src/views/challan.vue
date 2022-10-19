<template>
  <!-- Top nav bar start-->
  <div class="bg-white h-[72px] sticky top-0 border-b border-[#DBDBDB] z-10">
    <div class="flex justify-between items-center">
      <div class="pl-8 flex flex-col gap-y-[4px]">
        <p class="lg:leading-[16px] xl:leading-[28px] lg:text-[14px] xl:text-[20px] font-[600] text-primaryText">
          Challan Configaration</p>
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
    <!--card-->
    <div class="bg-white rounded-[10px]">
      <div class="p-4 flex justify-between gap-x-[21px] items-center">
        <div class="flex justify-start items-center gap-x-4 w-full">
          <div class="w-1/4">
            <p class="text-primaryText leading-[20px] text-[14px] xl:leading-[24px] xl:text-[16px] font-[600]">Bus
              operator</p>
            <Dropdown
                v-model="selectedCity"
                :options="cities"
                class="w-full p-[1px] mt-[10px] placeholder:text-primaryText placeholder:leading-[16px] placeholder:text-[12px] xl:placeholder:leading-[20px] xl:placeholder:text-[14px]"
                optionLabel="name" placeholder="Select bus operator"/>
          </div>
          <div class="w-1/4">
            <p class="text-primaryText leading-[20px] text-[14px] xl:leading-[24px] xl:text-[16px] font-[600]">
              Counter</p>
            <Dropdown
                v-model="selectedCity"
                :options="cities"
                class="w-full p-[1px] mt-[10px] placeholder:text-primaryText placeholder:leading-[16px] placeholder:text-[12px] xl:placeholder:leading-[20px] xl:placeholder:text-[14px]"
                optionLabel="name" placeholder="Select counter"/>
          </div>
          <div class="w-1/4">
            <p class="text-primaryText leading-[20px] text-[14px] xl:leading-[24px] xl:text-[16px] font-[600]">Challan
              format</p>
            <Dropdown
                v-model="selectedCity"
                :options="cities"
                class="w-full p-[1px] mt-[10px] placeholder:text-primaryText placeholder:leading-[16px] placeholder:text-[12px] xl:placeholder:leading-[20px] xl:placeholder:text-[14px]"
                optionLabel="name" placeholder="Select challan format"/>
          </div>
        </div>
        <button
            class="flex gap-x-[9px] justify-center items-center bg-corporate text-white leading-[14px] xl:leading-[16px] text-[11px] xl:text-[12px] font-[500] py-3 px-6 rounded-full mt-7"><span>
                <img alt="" class="w-[25px] xl:w-[20px] xl:h-[20px]" src="../assets/svg/white_search.svg">
              </span>Search
        </button>
      </div>
    </div>
    <div class="bg-white rounded-[8px] mt-4">
      <!-- table start -->
      <table class="min-w-full">
        <thead>
        <tr class="bg-[#4D4D4F] h-[36px]">
          <th class="companyTableHead" scope="col">
            Counter
          </th>
          <th class="companyTableHead" scope="col">
            Challan format
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
          <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText">
            <div class="p-2 w-full ">
              <div class="flex justify-between xl:gap-x-2 items-center bg-[#EDEDED] px-2 rounded-[4px]">
                <select aria-label="Default select example"
                        class="form-select py-2 text-base bg-[#EDEDED] rounded focus:outline-none xl:w-full">
                  <option class="leading-[16px] xl:leading-[20px] text-[10px] xl:text-[14px] font-[500]"
                          selected>
                    Full challan
                  </option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
                <img alt="" class="w-[12px] h-5" src="../assets/svg/down_arrow.svg">
              </div>
            </div>
          </td>
          <td class="leading-[20px] text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText ">
            <div class="flex justify-center items-center gap-x-[8px]">
              <button class="flex justify-center items-center gap-x-[10px] corporateSaveChangeOpacityButton">
                <img alt="" src="../assets/svg/save_change.svg">Save
              </button>
            </div>
          </td>
        </tr>
        <tr class="border-b border-[#EDEDED]">
          <td class="text-primaryText border-r border-[#DBDBDB] text-center leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px]">
            Counter name
          </td>
          <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText">
            <div class="p-2 w-full ">
              <div class="flex justify-between xl:gap-x-2 items-center bg-[#EDEDED] px-2 rounded-[4px]">
                <select aria-label="Default select example"
                        class="form-select py-2 text-base bg-[#EDEDED] rounded focus:outline-none xl:w-full">
                  <option class="leading-[16px] xl:leading-[20px] text-[10px] xl:text-[14px] font-[500]"
                          selected>
                    Own counter challan
                  </option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
                <img alt="" class="w-[12px] h-5" src="../assets/svg/down_arrow.svg">
              </div>
            </div>
          </td>
          <td class="leading-[20px] text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText ">
            <div class="flex justify-center items-center gap-x-[8px]">
              <button class="flex justify-center items-center gap-x-[10px] corporateSaveChangeOpacityButton">
                <img alt="" src="../assets/svg/save_change.svg">Save
              </button>
            </div>
          </td>
        </tr>
        <tr class="border-b border-[#EDEDED]">
          <td class="text-primaryText border-r border-[#DBDBDB] text-center leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px]">
            Counter name
          </td>
          <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText">
            <div class="p-2 w-full ">
              <div class="flex justify-between xl:gap-x-2 items-center bg-[#EDEDED] px-2 rounded-[4px]">
                <select aria-label="Default select example"
                        class="form-select py-2 text-base bg-[#EDEDED] rounded focus:outline-none xl:w-full">
                  <option class="leading-[16px] xl:leading-[20px] text-[10px] xl:text-[14px] font-[500]"
                          selected>
                    Own counter challan
                  </option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
                <img alt="" class="w-[12px] h-5" src="../assets/svg/down_arrow.svg">
              </div>
            </div>
          </td>
          <td class="leading-[20px] text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText ">
            <div class="flex justify-center items-center gap-x-[8px]">
              <button class="flex justify-center items-center gap-x-[10px] corporateSaveChangeOpacityButton">
                <img alt="" src="../assets/svg/save_change.svg">Save
              </button>
            </div>
          </td>
        </tr>
        <tr class="border-b border-[#EDEDED]">
          <td class="text-primaryText border-r border-[#DBDBDB] text-center leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px]">
            Counter name
          </td>
          <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText">
            <div class="p-2 w-full ">
              <div class="flex justify-between xl:gap-x-2 items-center bg-[#EDEDED] px-2 rounded-[4px]">
                <select aria-label="Default select example"
                        class="form-select py-2 text-base bg-[#EDEDED] rounded focus:outline-none xl:w-full">
                  <option class="leading-[16px] xl:leading-[20px] text-[10px] xl:text-[14px] font-[500]"
                          selected>
                    Own counter challan
                  </option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
                <img alt="" class="w-[12px] h-5" src="../assets/svg/down_arrow.svg">
              </div>
            </div>
          </td>
          <td class="leading-[20px] text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText ">
            <div class="flex justify-center items-center gap-x-[8px]">
              <button class="flex justify-center items-center gap-x-[10px] corporateSaveChangeOpacityButton">
                <img alt="" src="../assets/svg/save_change.svg">Save
              </button>
            </div>
          </td>
        </tr>
        <tr class="border-b border-[#EDEDED]">
          <td class="text-primaryText border-r border-[#DBDBDB] text-center leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px]">
            Counter name
          </td>
          <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText">
            <div class="p-2 w-full ">
              <div class="flex justify-between xl:gap-x-2 items-center bg-[#EDEDED] px-2 rounded-[4px]">
                <select aria-label="Default select example"
                        class="form-select py-2 text-base bg-[#EDEDED] rounded focus:outline-none xl:w-full">
                  <option class="leading-[16px] xl:leading-[20px] text-[10px] xl:text-[14px] font-[500]"
                          selected>
                    Own counter challan
                  </option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
                <img alt="" class="w-[12px] h-5" src="../assets/svg/down_arrow.svg">
              </div>
            </div>
          </td>
          <td class="leading-[20px] text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText ">
            <div class="flex justify-center items-center gap-x-[8px]">
              <button class="flex justify-center items-center gap-x-[10px] corporateSaveChangeOpacityButton">
                <img alt="" src="../assets/svg/save_change.svg">Save
              </button>
            </div>
          </td>
        </tr>
        <tr class="border-b border-[#EDEDED]">
          <td class="text-primaryText border-r border-[#DBDBDB] text-center leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px]">
            Counter name
          </td>
          <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText">
            <div class="p-2 w-full ">
              <div class="flex justify-between xl:gap-x-2 items-center bg-[#EDEDED] px-2 rounded-[4px]">
                <select aria-label="Default select example"
                        class="form-select py-2 text-base bg-[#EDEDED] rounded focus:outline-none xl:w-full">
                  <option class="leading-[16px] xl:leading-[20px] text-[10px] xl:text-[14px] font-[500]"
                          selected>
                    Own counter challan
                  </option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
                <img alt="" class="w-[12px] h-5" src="../assets/svg/down_arrow.svg">
              </div>
            </div>
          </td>
          <td class="leading-[20px] text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText ">
            <div class="flex justify-center items-center gap-x-[8px]">
              <button class="flex justify-center items-center gap-x-[10px] corporateSaveChangeOpacityButton">
                <img alt="" src="../assets/svg/save_change.svg">Save
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
