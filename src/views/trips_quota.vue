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
                Create Trip</p>
              <div class="flex justify-center items-center gap-x-[6px] mr-2">
                <p class="text-secondaryText leading-[12px] text-[8px] xl:leading-[16px] xl:text-[12px] font-[400]">
                  Trips</p>
                <img alt="" class="w-1 h-2" src="../assets/svg/bgBack.svg">
                <p class="text-secondaryText leading-[12px] text-[8px] xl:leading-[16px] xl:text-[12px] font-[400]">Desh
                  Travels</p>
                <img alt="" class="w-1 h-2" src="../assets/svg/bgBack.svg">
                <p class="text-secondaryText leading-[12px] text-[8px] xl:leading-[16px] xl:text-[12px] font-[400]">Add
                  trip</p>
              </div>
            </div>
          </div>
          <div class="flex gap-x-[24px] p-4 w-1/2 justify-end items-center pr-2 ">
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
        <div class="bg-white rounded-[6px]">
          <div class="p-4">
            <div class="flex items-center gap-x-[6px] mr-2">
              <p class="text-secondaryText leading-[12px] text-[8px] xl:leading-[16px] xl:text-[12px] font-[400]">Trip
                Information</p>
              <img alt="" class="w-1 h-2" src="../assets/svg/bgBack.svg">
              <p class="text-secondaryText leading-[12px] text-[8px] xl:leading-[16px] xl:text-[12px] font-[400]">
                Boarding & Dropping</p>
              <img alt="" class="w-1 h-2" src="../assets/svg/bgBack.svg">
              <p class="text-secondaryText leading-[12px] text-[8px] xl:leading-[16px] xl:text-[12px] font-[400]">Seat &
                Fare</p>
              <img alt="" class="w-1 h-2" src="../assets/svg/bgBack.svg">
              <p class="text-secondaryText leading-[12px] text-[8px] xl:leading-[16px] xl:text-[12px] font-[400]">
                Permissions & Commissions</p>
              <img alt="" class="w-1 h-2" src="../assets/svg/bgBack.svg">
              <p class="text-secondaryText leading-[12px] text-[8px] xl:leading-[16px] xl:text-[12px] font-[400]">Assign
                Counterman & Agent</p>
              <img alt="" class="w-1 h-2" src="../assets/svg/bgBack.svg">
              <p class="text-primaryText leading-[12px] text-[8px] xl:leading-[16px] xl:text-[12px] font-[600]">Assign
                Qouta</p>
              <img alt="" class="w-1 h-2" src="../assets/svg/bgBack.svg">
              <p class="text-secondaryText leading-[12px] text-[8px] xl:leading-[16px] xl:text-[12px] font-[400]">Trip
                Facilities & Policies</p>
              <img alt="" class="w-1 h-2" src="../assets/svg/bgBack.svg">
              <p class="text-secondaryText leading-[12px] text-[8px] xl:leading-[16px] xl:text-[12px] font-[400]">
                Preview</p>
            </div>
            <div class="flex justify-between items-center">
              <p class="text-corporateSecondaryBlue leading-[20px] xl:leading-[24px] text-[14px] xl:text-[16px] font-[600] mt-2">
                ASSIGN QOUTA</p>
              <p class="flex gap-x-[10px]">
                <img alt="" src="../assets/svg/back_arrow.svg">
                <a class="leading-[12px] xl:leading-[16px] text-[10px] xl:text-[12px] border-b-2 border-primaryText block text-primaryText font-[600]"
                   href="#">Prev
                  .step</a>
              </p>
            </div>
          </div>
        </div>
        <div class="bg-white rounded-[10px] mt-[12px] xl:mt-[16px]">
          <div class="p-4">
            <p class="text-corporateSecondaryBlue leading-[20px] xl:leading-[24px] text-[14px] xl:text-[16px] font-[600]">
              ASSIGN QOUTA</p>
            <p class="text-primaryText leading-[20px] xl:leading-[24px] text-[14px] xl:text-[16px] font-[600] mt-3 xl:mt-4">
              Jatri</p>
            <div class="flex justify-center items-center w-1/4 mt-[10px]">
              <button class="tripPermissionBtnleft">Yes</button>
              <button class="tripPermissionBtnright">No</button>
            </div>
            <div class="mt-5">
              <div class="border border-[#DBDBDB] rounded-[6px] flex">
                <div class="w-[20%] border-r border-corporateBorder">
                  <p class="p-[9px] leading-[12px] xl:leading-[16px] text-[10px] xl:text-[12px] font-[500] text-[#676769]">COUNTER LIST</p>
                  <hr class="border-t border-corporateBorder">
                  <div class="flex flex-col divide-y divide-dashed">
                    <a class="p-[8px] xl:p-[10px] text-corporateSecondaryBlue leading-[20px] xl:leading-[24px] text-[14px] xl:text-[16px]"
                       href="#">
                      Counter 1</a>
                    <a class="counterDesign" href="#">Counter 2</a>
                    <a class="counterDesign" href="#">Counter 3</a>
                    <a class="counterDesign" href="#">Counter 4</a>
                    <a class="counterDesign" href="#">Counter 5</a>
                    <a class="counterDesign" href="#">Counter 6</a>
                    <a class="counterDesign" href="#">Counter 7</a>
                    <a class="counterDesign" href="#">Counter 8</a>
                    <hr class="border-t border-corporateBorder">
                  </div>
                </div>
                <div class="w-[45%] border-r border-corporateBorder">
                  <p class="p-[20px] leading-[20px] xl:leading-[24px] text-[14px] xl:text-[16px] font-[600]">SELECTED
                    SEATS</p>

                  <div class="h-full w-full flex justify-center items-center">
                    <div class="flex flex-col justify-center items-center">
                      <img alt="" class="w-5 h-5" src="../assets/svg/qouta.svg">
                      <p class="leading-[20px] xl:leading-[24px] text-[14px] xl:text-[16px] font-[400] text-secondaryText mt-[10px]">
                        Please select seats to assign qouta.</p>
                    </div>
                  </div>
                </div>
                <div class="w-[35%]">
                  <p class="px-4 py-[9px] leading-[12px] xl:leading-[16px] text-[10px] xl:text-[12px] font-[500] text-[#676769]">
                    RELEASE TIME</p>
                  <div class="flex justify-between items-center px-4 py-[9px] ">
                    <label class="leading-[16px] xl:leading-[24px] text-[12px] xl:text-[16px] min-w-[123px]" for="#">Counter
                      name 1:</label>
                    <input class="border border-corporateBorder rounded-[4px] px-2 py-[6px] focus:outline-none"
                           placeholder="Enter time"
                           type="text">
                  </div>

                  <hr class="border-t border-corporateBorder mt-[8px]">
                  <div class="p-[24px]">
                    <div class="flex gap-x-[26px] justify-around">
                      <button class="quotaSeat">A1</button>
                      <button class="quotaSeat">A2</button>
                      <button class="quotaSeat cursor-default border-none">&nbsp</button>
                      <button class="quotaSeat">A3</button>
                      <button class="quotaSeat">A4</button>
                    </div>
                    <div class="flex gap-x-[26px] justify-around mt-2 xl:mt-3">
                      <button class="quotaSeat">B1</button>
                      <button class="quotaSeat">B2</button>
                      <button class="quotaSeat cursor-default border-none">&nbsp</button>
                      <button class="quotaSeat">B3</button>
                      <button class="quotaSeat">B4</button>
                    </div>
                    <div class="flex gap-x-[26px] justify-around mt-2 xl:mt-3">
                      <button class="quotaSeat">C1</button>
                      <button class="quotaSeat">C2</button>
                      <button class="quotaSeat cursor-default border-none">&nbsp</button>
                      <button class="quotaSeat">C3</button>
                      <button class="quotaSeat">C4</button>
                    </div>
                    <div class="flex gap-x-[26px] justify-around mt-2 xl:mt-3">
                      <button class="quotaSeat">D1</button>
                      <button class="quotaSeat">D2</button>
                      <button class="quotaSeat cursor-default border-none">&nbsp</button>
                      <button class="quotaSeat">D3</button>
                      <button class="quotaSeat">D4</button>
                    </div>
                    <div class="flex gap-x-[26px] justify-around mt-2 xl:mt-3">
                      <button class="quotaSeat">E1</button>
                      <button class="quotaSeat">E2</button>
                      <button class="quotaSeat cursor-default border-none">&nbsp</button>
                      <button class="quotaSeat">E3</button>
                      <button class="quotaSeat">E4</button>
                    </div>
                    <div class="flex gap-x-[26px] justify-around mt-2 xl:mt-3">
                      <button class="quotaSeat">F1</button>
                      <button class="quotaSeat">F2</button>
                      <button class="quotaSeat cursor-default border-none">&nbsp</button>
                      <button class="quotaSeat">F3</button>
                      <button class="quotaSeat">F4</button>
                    </div>
                    <div class="flex gap-x-[26px] justify-around mt-2 xl:mt-3">
                      <button class="quotaSeat">G1</button>
                      <button class="quotaSeat">G2</button>
                      <button class="quotaSeat cursor-default border-none">&nbsp</button>
                      <button class="quotaSeat">G3</button>
                      <button class="quotaSeat">G4</button>
                    </div>
                    <div class="flex gap-x-[26px] justify-around mt-2 xl:mt-3">
                      <button class="quotaSeat">H1</button>
                      <button class="quotaSeat">H2</button>
                      <button class="quotaSeat cursor-default border-none">&nbsp</button>
                      <button class="quotaSeat">H3</button>
                      <button class="quotaSeat">H4</button>
                    </div>
                    <div class="flex gap-x-[26px] justify-around mt-2 xl:mt-3">
                      <button class="quotaSeat">I1</button>
                      <button class="quotaSeat">I2</button>
                      <button class="quotaSeat cursor-default border-none">&nbsp</button>
                      <button class="quotaSeat">I3</button>
                      <button class="quotaSeat">I4</button>
                    </div>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>
        <div class="flex justify-center items-center mt-5">
          <router-link to="/tripsQuotaFilled" class="lessNextStepButton flex items-center gap-[10px]">
            Next step<span><img src="../assets/svg/right-white-arrow.svg" class="h-[9.33px] w-[9.33px]" alt=""></span>
        </router-link>
        </div>
      </div>
</template>

<style scoped>
.p-dropdown .p-dropdown-label.p-placeholder {
  color: black;
  font-size: 14px;
}

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
  margin-right: 11px;
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
import ashDropdown from "../components/AshDropdown.vue";

export default {
  components: {
    ashDropdown
  },
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
