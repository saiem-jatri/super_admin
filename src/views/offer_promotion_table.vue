<template>
      <!-- Top nav bar start-->
      <div class="bg-white h-[72px] sticky top-0 border-b border-[#DBDBDB] z-10 px-[32px]">
        <div class="flex justify-between">
          <div class="flex justify-center items-center gap-x-[32px]">

            <button class="flex justify-center items-center gap-x-[10px]">
              <img alt="" class="w-[12px] h-[12px]" src="../assets/svg/Back.svg">
              <p class="text-primaryText leading-[12px] text-[10px] xl:leading-[16px] xl:text-[12px] font-[500]">
                Back</p>
            </button>
            <div class="flex flex-col gap-y-[4px]">
              <p class="lg:leading-[16px] xl:leading-[28px] lg:text-[14px] xl:text-[20px] font-[600] text-primaryText">
                Details</p>
              <div class="flex justify-center items-center gap-x-[6px]">
                <p class="text-secondaryText leading-[12px] text-[8px] xl:leading-[16px] xl:text-[12px] font-[400]">
                  Offers & Promotion</p>
                <img alt="" class="w-1 h-2" src="../assets/svg/bgBack.svg">
                <p class="text-secondaryText leading-[12px] text-[8px] xl:leading-[16px] xl:text-[12px] font-[400]">
                  Offers</p>
                <img alt="" class="w-1 h-2" src="../assets/svg/bgBack.svg">
                <p class="text-secondaryText leading-[12px] text-[8px] xl:leading-[16px] xl:text-[12px] font-[400]">
                  Offers title</p>
                <img alt="" class="w-1 h-2" src="../assets/svg/bgBack.svg">
                <p class="text-secondaryText leading-[12px] text-[8px] xl:leading-[16px] xl:text-[12px] font-[400]">
                  Details</p>
              </div>
            </div>
          </div>
          <div class="flex gap-x-[24px] p-4 w-1/2 justify-end items-center pr-2 ">
            <!--            <input type="text" class="w-[270px] h-[40px] border border-[#DBDBDB] placeholder:text-[#4D4D4F] placeholder:text-[14px] leading-[20px] rounded-[4px] pl-8 focus:outline-none" placeholder="PNR or mobile number">-->
            <!--            <img src="../assets/svg/search.svg" class="h-5 w-5 absolute left-[242px]" alt="">-->
            <div
                class="w-[200px] h-[30px] xl:w-[270px] xl:h-[40px] border border-[#DBDBDB] flex justify-center items-center leading-[20px] rounded-[4px] pl-[9px] overflow-hidden">
              <img alt="" class="h-2 w-2 xl:h-5 xl:w-5" src="../assets/svg/search.svg">
              <input
                  class="outline-none pl-32 xl:pl-2 placeholder:text-[#4D4D4F] placeholder:text-[8px] placeholder:leading-[16px] xl:placeholder:text-[14px] xl:placeholder:leading-[20px]"
                  placeholder="PNR or mobile number"
                  type="text">
            </div>
            <div class="flex justify-center items-center gap-x-1">
              <img alt="" class="h-[30px]  w-[30px] xl:h-[40px] xl:w-[40px] rounded-full"
                   src="../assets/person/person1.png">
              <p class="text-[#151414] leading-[16px] text-[10px] xl:leading-[24px] xl:text-[16px] font-[500]">Mostafa
                Mamun Emon</p>
              <img alt="" class="w-[12px] h-[6px]" src="../assets/person/downArrow.svg">
            </div>
          </div>
        </div>
      </div>
      <!-- top nav bar end -->
      <!-- body start-->
      <div class="px-[30px] py-[24px]">

        <!--        card-->
        <div class="mt-[16px] rounded-[10px]">
          <div class="flex justify-end items-center mt-4 xl:mt-6 gap-x-6">
            <button
                class="flex gap-x-[9px] justify-center items-center border border-[#8D8D8F] bg-transparent text-corporate leading-[14px] xl:leading-[16px] text-[11px] xl:text-[12px] font-[500] py-3 pl-[17px] pr-[24px] rounded-full"><span>
                <img alt="" class="w-[13px] h-[13px]" src="../assets/svg/print.svg">
              </span>Print
            </button>
            <button
                class="flex gap-x-[9px] justify-center items-center bg-corporate text-white leading-[14px] xl:leading-[16px] text-[11px] xl:text-[12px] font-[500] py-3 pl-[17px] pr-[24px] rounded-full"><span>
                <img alt="" class="w-[13px] h-[13px]" src="../assets/svg/export.svg">
              </span>Export
            </button>
          </div>

          <div class="bg-white rounded-[8px] mt-4">
            <!-- table start -->
            <table class="min-w-full">
              <thead>
              <tr class="bg-[#4D4D4F] h-[36px]">
                <th class="companyTableHead" scope="col" style="border-radius: 8px 0 0 0">
                  pnr
                </th>
                <th class="companyTableHead" scope="col">
                  seats
                </th>

                <th class="companyTableHead" scope="col">
                  trip no.
                </th>
                <th class="companyTableHead" scope="col">
                  issued by
                </th>
                <th class="companyTableHead" scope="col">
                  counter
                </th>
                <th class="companyTableHead" scope="col">
                  Issue date
                </th>
                <th class="companyTableHead" scope="col">
                  journey <br> date
                </th>
                <th class="companyTableHead" scope="col">
                  passenger name & mobile
                </th>
                <th class="companyTableHead" scope="col">
                  Actual price
                </th>
                <th class="companyTableHead" scope="col" style="border-radius: 0 8px 0 0">
                  discount <br> amount
                </th>
              </tr>
              </thead>
              <tbody>
              <tr class="border-b border-[#EDEDED]">
                <td class="text-primaryText border-r border-[#DBDBDB] text-center leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] px-4 py-6"
                    style="border-radius: 0 0 8px 0">
                  <div class="flex gap-x-2 p-2 bg-[#EDEDED] justify-center items-center rounded-[4px]">
                    <p class="leading-[12px] xl:leading-[16px] text-[10px] font-[600] text-primaryText border-b border-primaryText">
                      8WXOX3MVGF8UT</p>
                    <img alt="" class="w-[5px] h-[8px]" src="../assets/svg/right-black-arrow.svg">
                  </div>
                </td>
                <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText">
                  B1, B2, B3, B4, <br> B5, B6, B7, B8, <br> B9
                </td>
                <td class="leading-[20px] text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText ">
                  HYD39J39
                </td>
                <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText">
                  Alamin <br>
                  (Counter name)
                </td>
                <td class="eading-[20px] text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText ">
                  Counter name
                </td>
                <td class="border-r border-[#DBDBDB]">

                </td>
                <td class="border-r border-[#DBDBDB]">

                </td>
                <td class="border-r border-[#DBDBDB]">

                </td>
                <td class="border-r border-[#DBDBDB]">

                </td>
              </tr>
              <tr class="border-b border-[#EDEDED]">
                <td class="text-primaryText border-r border-[#DBDBDB] text-center leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] px-4 py-6"
                    style="border-radius: 0 0 8px 0">
                  <div class="flex gap-x-2 p-2 bg-[#EDEDED] justify-center items-center rounded-[4px]">
                    <p class="leading-[12px] xl:leading-[16px] text-[10px] font-[600] text-primaryText border-b border-primaryText">
                      8WXOX3MVGF8UT</p>
                    <img alt="" class="w-[5px] h-[8px]" src="../assets/svg/right-black-arrow.svg">
                  </div>
                </td>
                <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText">
                  B1, B2, B3, B4, <br> B5, B6, B7, B8, <br> B9
                </td>
                <td class="leading-[20px] text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText ">
                  HYD39J39
                </td>
                <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText">
                  Alamin <br>
                  (Counter name)
                </td>
                <td class="eading-[20px] text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText ">
                  Counter name
                </td>
                <td class="border-r border-[#DBDBDB]">

                </td>
                <td class="border-r border-[#DBDBDB]">

                </td>
                <td class="border-r border-[#DBDBDB]">

                </td>
                <td class="border-r border-[#DBDBDB]">

                </td>
              </tr>
              <tr class="border-b border-[#EDEDED]">
                <td class="text-primaryText border-r border-[#DBDBDB] text-center leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] px-4 py-6"
                    style="border-radius: 0 0 8px 0">
                  <div class="flex gap-x-2 p-2 bg-[#EDEDED] justify-center items-center rounded-[4px]">
                    <p class="leading-[12px] xl:leading-[16px] text-[10px] font-[600] text-primaryText border-b border-primaryText">
                      8WXOX3MVGF8UT</p>
                    <img alt="" class="w-[5px] h-[8px]" src="../assets/svg/right-black-arrow.svg">
                  </div>
                </td>
                <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText">
                  B1, B2, B3, B4, <br> B5, B6, B7, B8, <br> B9
                </td>
                <td class="leading-[20px] text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText ">
                  HYD39J39
                </td>
                <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText">
                  Alamin <br>
                  (Counter name)
                </td>
                <td class="eading-[20px] text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText ">
                  Counter name
                </td>
                <td class="border-r border-[#DBDBDB]">

                </td>
                <td class="border-r border-[#DBDBDB]">

                </td>
                <td class="border-r border-[#DBDBDB]">

                </td>
                <td class="border-r border-[#DBDBDB]">

                </td>
              </tr>
              <tr class="border-b border-[#EDEDED]">
                <td class="text-primaryText border-r border-[#DBDBDB] text-center leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] px-4 py-6"
                    style="border-radius: 0 0 8px 0">
                  <div class="flex gap-x-2 p-2 bg-[#EDEDED] justify-center items-center rounded-[4px]">
                    <p class="leading-[12px] xl:leading-[16px] text-[10px] font-[600] text-primaryText border-b border-primaryText">
                      8WXOX3MVGF8UT</p>
                    <img alt="" class="w-[5px] h-[8px]" src="../assets/svg/right-black-arrow.svg">
                  </div>
                </td>
                <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText">
                  B1, B2, B3, B4, <br> B5, B6, B7, B8, <br> B9
                </td>
                <td class="leading-[20px] text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText ">
                  HYD39J39
                </td>
                <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText">
                  Alamin <br>
                  (Counter name)
                </td>
                <td class="eading-[20px] text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText ">
                  Counter name
                </td>
                <td class="border-r border-[#DBDBDB]">

                </td>
                <td class="border-r border-[#DBDBDB]">

                </td>
                <td class="border-r border-[#DBDBDB]">

                </td>
                <td class="border-r border-[#DBDBDB]">

                </td>
              </tr>
              <tr class="border-b border-[#EDEDED]">
                <td class="text-primaryText border-r border-[#DBDBDB] text-center leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] px-4 py-6"
                    style="border-radius: 0 0 8px 0">
                  <div class="flex gap-x-2 p-2 bg-[#EDEDED] justify-center items-center rounded-[4px]">
                    <p class="leading-[12px] xl:leading-[16px] text-[10px] font-[600] text-primaryText border-b border-primaryText">
                      8WXOX3MVGF8UT</p>
                    <img alt="" class="w-[5px] h-[8px]" src="../assets/svg/right-black-arrow.svg">
                  </div>
                </td>
                <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText">
                  B1, B2, B3, B4, <br> B5, B6, B7, B8, <br> B9
                </td>
                <td class="leading-[20px] text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText ">
                  HYD39J39
                </td>
                <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText">
                  Alamin <br>
                  (Counter name)
                </td>
                <td class="eading-[20px] text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText ">
                  Counter name
                </td>
                <td class="border-r border-[#DBDBDB]">

                </td>
                <td class="border-r border-[#DBDBDB]">

                </td>
                <td class="border-r border-[#DBDBDB]">

                </td>
                <td class="border-r border-[#DBDBDB]">

                </td>
              </tr>
              <tr class="border-b border-[#EDEDED]">
                <td class="text-primaryText border-r border-[#DBDBDB] text-center leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] px-4 py-6"
                    style="border-radius: 0 0 8px 0">
                  <div class="flex gap-x-2 p-2 bg-[#EDEDED] justify-center items-center rounded-[4px]">
                    <p class="leading-[12px] xl:leading-[16px] text-[10px] font-[600] text-primaryText border-b border-primaryText">
                      8WXOX3MVGF8UT</p>
                    <img alt="" class="w-[5px] h-[8px]" src="../assets/svg/right-black-arrow.svg">
                  </div>
                </td>
                <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText">
                  B1, B2, B3, B4, <br> B5, B6, B7, B8, <br> B9
                </td>
                <td class="leading-[20px] text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText ">
                  HYD39J39
                </td>
                <td class="leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText">
                  Alamin <br>
                  (Counter name)
                </td>
                <td class="eading-[20px] text-[14px] font-[400] text-center border-r border-[#DBDBDB] text-primaryText ">
                  Counter name
                </td>
                <td class="border-r border-[#DBDBDB]">

                </td>
                <td class="border-r border-[#DBDBDB]">

                </td>
                <td class="border-r border-[#DBDBDB]">

                </td>
                <td class="border-r border-[#DBDBDB]">

                </td>
              </tr>
              </tbody>
            </table>
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

.p-dropdown-panel .p-dropdown-items .p-dropdown-item:not(:last-child), .p-dropdown-panel .p-dropdown-items .p-dropdown-item:not(:last-child):hover {
  border-bottom: 1px dotted #DBDBDB;
}

.p-buttonset .p-button {
  margin: 0;
  width: 183px;
  height: 38px;
}

.pi {
  font-size: 13px;
}

.p-button-label {
  font-weight: 400;
}

.p-selectbutton .p-button.p-highlight {
  background: #48A43F;
  background-color: #48A43F;
}


/*checkbox*/


.form-group {
  display: block;
  /*margin-bottom: 15px;*/
}

.form-group input {
  padding: 0;
  height: 14px;
  width: 14px;
  margin-bottom: 0;
  display: none;
  cursor: pointer;
}

.form-group label {
  position: relative;
  cursor: pointer;
}

.form-group label:before {
  content: '';
  -webkit-appearance: none;
  background-color: transparent;
  border: 2px solid #151414;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05), inset 0px -15px 10px -12px rgba(0, 0, 0, 0.05);
  padding: 8px;
  display: inline-block;
  position: relative;
  vertical-align: middle;
  cursor: pointer;
  margin-right: 9px;
  border-radius: 4px;
}

.form-group input:checked + label:before {
  background-color: #48A43F;
  border: 2px solid #48A43F;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05), inset 0px -15px 10px -12px rgba(0, 0, 0, 0.05);
}

.form-group input:checked + label:after {
  content: '';
  display: block;
  position: absolute;
  top: 1px;
  left: 7px;
  width: 6px;
  height: 14px;
  border: 2px solid white;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
  /*background-color: white;*/
}
</style>

<script>
export default {

  data() {
    return {
      selectedCity: null,
      cities: [
        {name: 'Own', code: 'NY'},
        {name: 'Third Party', code: 'RM'},
        // {name: 'London', code: 'LDN'},
        // {name: 'Istanbul', code: 'IST'},
        // {name: 'Paris', code: 'PRS'}
      ]
    }
  }

}
</script>
