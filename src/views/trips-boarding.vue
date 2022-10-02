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
            <!--            <input type="text" class="w-[270px] h-[40px] border border-[#DBDBDB] placeholder:text-[#4D4D4F] placeholder:text-[14px] leading-[20px] rounded-[4px] pl-8 focus:outline-none" placeholder="PNR or mobile number">-->
            <!--            <img src="../assets/svg/search.svg" class="h-5 w-5 absolute left-[242px]" alt="">-->
            <div
                class="w-[200px] h-[30px] xl:w-[270px] xl:h-[40px] border border-[#DBDBDB] flex justify-center items-center leading-[20px] rounded-[4px] pl-[9px] overflow-hidden">
              <img alt="" class="h-2 w-2 xl:h-5 xl:w-5" src="../assets/svg/search.svg">
              <input class="outline-none pl-32 xl:pl-2 placeholder:text-[#4D4D4F] placeholder:text-[8px] placeholder:leading-[16px] xl:placeholder:text-[14px] xl:placeholder:leading-[20px]"
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
        <div class="bg-white rounded-[8px]">
          <div class="p-4">
            <div class="flex items-center gap-x-[6px] mr-2">
              <p class="text-primaryText leading-[12px] text-[8px] xl:leading-[16px] xl:text-[12px] font-[600]">Trip
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
              <p class="text-secondaryText leading-[12px] text-[8px] xl:leading-[16px] xl:text-[12px] font-[400]">Assign
                Qouta</p>
              <img alt="" class="w-1 h-2" src="../assets/svg/bgBack.svg">
              <p class="text-secondaryText leading-[12px] text-[8px] xl:leading-[16px] xl:text-[12px] font-[400]">Trip
                Facilities & Policies</p>
              <img alt="" class="w-1 h-2" src="../assets/svg/bgBack.svg">
              <p class="text-secondaryText leading-[12px] text-[8px] xl:leading-[16px] xl:text-[12px] font-[400]">
                Preview</p>
            </div>
            <div class="flex justify-between items-center">
              <p class="text-corporateSecondaryBlue leading-[20px] xl:leading-[24px] text-[14px] xl:text-[16px] font-[500] mt-2">
                BOARDING & DROPPING</p>
              <p class="flex gap-x-[10px]">
                <img alt="" src="../assets/svg/back_arrow.svg">
                <a class="leading-[12px] xl:leading-[16px] text-[10px] xl:text-[12px] text-primaryText border-b-2 border-primaryText block text-primaryText font-[600]"
                   href="#">Prev
                  .step</a>
              </p>
            </div>
          </div>
        </div>
        <div class="bg-white rounded-[8px] mt-[12px] xl:mt-[16px]">
          <div class="p-4">
            <p class="text-corporateSecondaryBlue leading-[20px] xl:leading-[24px] text-[14px] xl:text-[16px] font-[500]">
              TRIP INFORMATION</p>
            <div class="flex justify-between items-center">
              <p class="leading-[12px] xl:leading-[16px] text-[10px] xl:text-[12px] text-primaryText">BOARDING POINT
                1</p>
              <div class="form-group mt-4">
                <input id="read" type="checkbox">
                <label class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]"
                       for="read">Make
                  available for Jatri</label>
              </div>
            </div>
            <div class="flex justify-center items-center gap-x-[10px] xl:gap-x-[16px]">
              <div class="w-1/4">
                <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">
                  City</p>
                <Dropdown v-model="selectedCity" :opti6ns="cities" class="w-full py-[4px] mt-[10px]" optionLabel="name"
                          placeholder="Select city"/>
              </div>
              <div class="w-1/4">
                <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">
                  Stoppage</p>
                <Dropdown v-model="selectedCity" :opti6ns="cities" class="w-full py-[4px] mt-[10px]" optionLabel="name"
                          placeholder="Select stoppage"/>
              </div>
              <div class="w-1/4">
                <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">
                  Stoppage</p>
                <Dropdown v-model="selectedCity" :opti6ns="cities" class="w-full py-[4px] mt-[10px]" optionLabel="name"
                          placeholder="Select stoppage"/>
              </div>
              <div class="w-1/4">
                <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">
                  Boarding date</p>
                <div
                    class="w-full h-[40px] border border-[#DBDBDB] flex justify-between items-center mt-[10px] leading-[20px] rounded-[4px] xl:px-[8px] overflow-hidden">
                  <input class="outline-none pl-2 placeholder:text-[#4D4D4F] placeholder:text-[14px] placeholder:leading-[20px]"
                         placeholder="Select boarding date"
                         type="text">
                  <img alt="" class="h-5 w-5 mr-5 2xl:mr-0" src="../assets/svg/count2.svg">
                </div>
              </div>
              <div class="w-1/4">
                <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">
                  Boarding time</p>
                <input class="createNormalInput" placeholder="Enter boarding time" type="text">
              </div>
            </div>

            <router-link to="/anotherTripsBoarding" class="w-full border border-dashed border-corporateSecondaryBlue flex justify-center items-center bg-[#EFF7FD] rounded-[4px] mt-4">
                <div class="flex justify-center items-center gap-x-[11px] py-[12px]">
                  <img alt="" class="w-[10px] h-[10px]" src="../assets/svg/createPlus.svg">
                  <p class="text-primaryText font-[600] leading-[20px] text-[14px]">Add another boarding point</p>
                </div>
             </router-link>  

          </div>
          <hr class="mt-[12px] xl:mt-[16px] border-t border-corporateBorder">
          <div class="p-4">
            <p class="text-corporateSecondaryBlue leading-[20px] xl:leading-[24px] text-[14px] xl:text-[16px] font-[500]">
              TRIP INFORMATION</p>

            <p class="leading-[12px] xl:leading-[16px] text-[10px] xl:text-[12px] text-primaryText mt-3 xl:mt-4">
              DROPPING POINT 1</p>

            <div class="flex justify-center items-center gap-x-[10px] xl:gap-x-[16px] mt-3 xl:mt-4">
              <div class="w-1/4">
                <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">
                  City</p>
                <Dropdown v-model="selectedCity" :opti6ns="cities" class="w-full py-[4px] mt-[10px]" optionLabel="name"
                          placeholder="Select city"/>
              </div>
              <div class="w-1/4">
                <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">
                  Stoppage</p>
                <Dropdown v-model="selectedCity" :opti6ns="cities" class="w-full py-[4px] mt-[10px]" optionLabel="name"
                          placeholder="Select stoppage"/>
              </div>
              <div class="w-1/4">
                <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">
                  Stoppage</p>
                <Dropdown v-model="selectedCity" :opti6ns="cities" class="w-full py-[4px] mt-[10px]" optionLabel="name"
                          placeholder="Select stoppage"/>
              </div>
              <div class="w-1/4">
                <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">
                  Dropping date</p>
                <div
                    class="w-full h-[40px] border border-[#DBDBDB] flex justify-between items-center mt-[10px] leading-[20px] rounded-[4px] xl:px-[8px] overflow-hidden">
                  <input class="outline-none pl-2 placeholder:text-[#4D4D4F] placeholder:text-[14px] placeholder:leading-[20px]"
                         placeholder="Select boarding date"
                         type="text">
                  <img alt="" class="h-5 w-5 mr-5 2xl:mr-0" src="../assets/svg/count2.svg">
                </div>
              </div>
              <div class="w-1/4">
                <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">
                  Dropping time</p>
                <input class="createNormalInput" placeholder="Enter boarding time" type="text">
              </div>
            </div>
            <router-link to="/anotherTripsBoarding" class="w-full border border-dashed border-corporateSecondaryBlue flex justify-center items-center bg-[#EFF7FD] rounded-[4px] mt-4">
                <div class="flex justify-center items-center gap-x-[11px] py-[12px]">
                  <img alt="" class="w-[10px] h-[10px]" src="../assets/svg/createPlus.svg">
                  <p class="text-primaryText font-[600] leading-[20px] text-[14px]">Add another boarding point</p>
                </div>
             </router-link>
          </div>
        </div>
        <div class="flex justify-center items-center mt-5">
          <router-link to="/anotherTripsBoardingNext" class="lessNextStepButton flex items-center gap-[10px]">
            Next step<span><img src="../assets/svg/right-white-arrow.svg" class="h-[9.33px] w-[9.33px]" alt=""></span>
        </router-link>
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
