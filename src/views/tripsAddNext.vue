<template>
  <!-- Top nav bar start-->
  <div class="bg-white h-[72px] sticky top-0 border-b border-[#DBDBDB] z-10 px-[32px]">
    <div class="flex justify-between">
      <div class="flex justify-center items-center gap-x-[32px]">

        <button class="flex justify-center items-center gap-x-[10px]">
          <img alt="" class="w-[12px] h-[12px]" src="../assets/svg/Back.svg">
          <p class="text-primaryText leading-[12px] text-[10px] xl:leading-[16px] xl:text-[12px] font-[500]">Back</p>
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
          <p class="text-[#151414] leading-[16px] text-[10px] xl:leading-[24px] xl:text-[16px] font-[500]">Mostafa Mamun
            Emon</p>
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
          <p class="text-secondaryText leading-[12px] text-[8px] xl:leading-[16px] xl:text-[12px] font-[400]">Boarding &
            Dropping</p>
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
          <p class="text-[#1E88E5] leading-[20px] xl:leading-[24px] text-[14px] xl:text-[16px] font-[500] mt-2">SEAT &
            FARE</p>
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
        <p class="text-[#1E88E5] leading-[20px] xl:leading-[24px] text-[14px] xl:text-[16px] font-[500]">TICKET FARE</p>
        <div class="w-1/4 mt-3 xl:mt-4">
          <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">Route</p>
          <Dropdown v-model="selectedCity" :opti6ns="cities" class="w-full py-[4px] mt-[10px]" optionLabel="name"
                    placeholder="Dhaka-Tangail-Bogura-Rangpur"/>
        </div>
        <hr class="mt-3 xl:mt-4 border-t border-dashed border-[#DBDBDB]">
        <div class="w-[60%] xl:w-1/2 mt-3 xl:mt-4">
          <div class="flex justify-between gap-x-[20px] xl:gap-x-[27px]">
            <div class="w-full">
              <div class="flex lg:justify-between 2xl:gap-x-[40px] items-center mt-2">
                <label class="leading-[16px] xl:leading-[24px] text-[12px] xl:text-[16px] mt-4 min-w-[123px]" for="#">Dhaka
                  - Tangail:</label>
                <div class="xl:ml-4">
                  <p class="leading-[16px] xl:leading-[20px] text-[12px] xl:leading-[14px] font-[400]">Economy</p>
                  <input
                      class="w-[120px] border border-corporateBorder rounded-[4px] px-2 py-[6px] focus:outline-none mt-2"
                      placeholder="Enter Fare"
                      type="text">
                </div>
                <div class="flex gap-x-[8px] mt-4">
                  <div class="form-group mt-4">
                    <input id="read" type="checkbox">
                    <label
                        class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]"
                        for="read">
                      Jatri</label>
                  </div>
                  <div class="form-group mt-4">
                    <input id="read" type="checkbox">
                    <label
                        class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]"
                        for="read">
                      Counter</label>
                  </div>
                  <div class="form-group mt-4">
                    <input id="read" type="checkbox">
                    <label
                        class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]"
                        for="read">
                      Agent</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="flex justify-between gap-x-[20px] xl:gap-x-[27px]">
            <div class="w-full">
              <div class="flex justify-between 2xl:gap-x-[40px] items-center">
                <label class="leading-[16px] xl:leading-[24px] text-[12px] xl:text-[16px] min-w-[123px]" for="#">Bogura
                  - Rangpur:</label>
                <input class="w-[120px] border border-corporateBorder rounded-[4px] px-2 py-[6px] focus:outline-none"
                       placeholder="Enter Fare"
                       type="text">
                <div class="flex gap-x-[8px]">
                  <div class="form-group mt-4">
                    <input id="read" type="checkbox">
                    <label
                        class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]"
                        for="read">
                      Jatri</label>
                  </div>
                  <div class="form-group mt-4">
                    <input id="read" type="checkbox">
                    <label
                        class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]"
                        for="read">
                      Counter</label>
                  </div>
                  <div class="form-group mt-4">
                    <input id="read" type="checkbox">
                    <label
                        class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]"
                        for="read">
                      Agent</label>
                  </div>
                </div>
              </div>
            </div>

          </div>
          <div class="flex justify-between gap-x-[20px] xl:gap-x-[27px]">
            <div class="w-full">
              <div class="flex justify-between 2xl:gap-x-[40px] items-center">
                <label class="leading-[16px] xl:leading-[24px] text-[12px] xl:text-[16px] min-w-[123px]" for="#">Bogura
                  - Rangpur:</label>
                <input class="w-[120px] border border-corporateBorder rounded-[4px] px-2 py-[6px] focus:outline-none"
                       placeholder="Enter Fare"
                       type="text">
                <div class="flex gap-x-[8px]">
                  <div class="form-group mt-4">
                    <input id="read" type="checkbox">
                    <label
                        class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]"
                        for="read">
                      Jatri</label>
                  </div>
                  <div class="form-group mt-4">
                    <input id="read" type="checkbox">
                    <label
                        class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]"
                        for="read">
                      Counter</label>
                  </div>
                  <div class="form-group mt-4">
                    <input id="read" type="checkbox">
                    <label
                        class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]"
                        for="read">
                      Agent</label>
                  </div>
                </div>
              </div>
            </div>

          </div>
          <div class="flex justify-between gap-x-[20px] xl:gap-x-[27px]">
            <div class="w-full">
              <div class="flex justify-between 2xl:gap-x-[40px] items-center">
                <label class="leading-[16px] xl:leading-[24px] text-[12px] xl:text-[16px] min-w-[123px]" for="#">Bogura
                  - Rangpur:</label>
                <input class="w-[120px] border border-corporateBorder rounded-[4px] px-2 py-[6px] focus:outline-none"
                       placeholder="Enter Fare"
                       type="text">
                <div class="flex gap-x-[8px]">
                  <div class="form-group mt-4">
                    <input id="read" type="checkbox">
                    <label
                        class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]"
                        for="read">
                      Jatri</label>
                  </div>
                  <div class="form-group mt-4">
                    <input id="read" type="checkbox">
                    <label
                        class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]"
                        for="read">
                      Counter</label>
                  </div>
                  <div class="form-group mt-4">
                    <input id="read" type="checkbox">
                    <label
                        class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]"
                        for="read">
                      Agent</label>
                  </div>
                </div>
              </div>
            </div>

          </div>
          <div class="flex justify-between gap-x-[20px] xl:gap-x-[27px]">
            <div class="w-full">
              <div class="flex justify-between 2xl:gap-x-[40px] items-center">
                <label class="leading-[16px] xl:leading-[24px] text-[12px] xl:text-[16px] min-w-[123px]" for="#">Bogura
                  - Rangpur:</label>
                <input class="w-[120px] border border-corporateBorder rounded-[4px] px-2 py-[6px] focus:outline-none"
                       placeholder="Enter Fare"
                       type="text">
                <div class="flex gap-x-[8px]">
                  <div class="form-group mt-4">
                    <input id="read" type="checkbox">
                    <label
                        class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]"
                        for="read">
                      Jatri</label>
                  </div>
                  <div class="form-group mt-4">
                    <input id="read" type="checkbox">
                    <label
                        class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]"
                        for="read">
                      Counter</label>
                  </div>
                  <div class="form-group mt-4">
                    <input id="read" type="checkbox">
                    <label
                        class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]"
                        for="read">
                      Agent</label>
                  </div>
                </div>
              </div>
            </div>

          </div>
          <div class="flex justify-between gap-x-[20px] xl:gap-x-[27px]">
            <div class="w-full">
              <div class="flex justify-between 2xl:gap-x-[40px] items-center">
                <label class="leading-[16px] xl:leading-[24px] text-[12px] xl:text-[16px] min-w-[123px]" for="#">Bogura
                  - Rangpur:</label>
                <input class="w-[120px] border border-corporateBorder rounded-[4px] px-2 py-[6px] focus:outline-none"
                       placeholder="Enter Fare"
                       type="text">
                <div class="flex gap-x-[8px]">
                  <div class="form-group mt-4">
                    <input id="read" type="checkbox">
                    <label
                        class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]"
                        for="read">
                      Jatri</label>
                  </div>
                  <div class="form-group mt-4">
                    <input id="read" type="checkbox">
                    <label
                        class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]"
                        for="read">
                      Counter</label>
                  </div>
                  <div class="form-group mt-4">
                    <input id="read" type="checkbox">
                    <label
                        class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]"
                        for="read">
                      Agent</label>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <hr class="mt-[12px] xl:mt-[16px] border-t border-corporateBorder">
      <div class="p-4">
        <div class="w-[70%] xl:w-[60%]">
          <div class="flex justify-between">
            <div>
              <p class="leading-[20px] xl:leading-[24px] text-[14px] xl:text-[16px] text-primaryText font-[600]">Bus
                model</p>
              <select id="model" class="px-3 py-2 border border-corporateBorder rounded-[4px] focus:outline-none mt-[10px]"
                      name="model">
                <option value="Desh Travels, Hino 1J - 36 Seat">Desh Travels, Hino 1J - 36 Seat</option>
              </select>
              <div class="mt-[12px] xl:mt-[14px] bg-[#F1F9F1] rounded-[4px] py-[4px] px-[8px]">
                <p class="leading-[12px] xl:leading-[16px] text-[10px] xl:text-[12px] text-primaryText">Bus type &
                  class</p>
                <p class="leading-[12px] xl:leading-[16px] text-[10px] xl:text-[12px] text-primaryText font-[600] mt-1">
                  AC, Mixed Class</p>
              </div>
            </div>

            <div>
              <div class="flex gap-x-[15px] xl:gap-x-[20px]">
                <button class="seatButton blueSeatButton">A1</button>
                <button class="seatButton emptySeat"></button>
                <button class="seatButton hidden">A1</button>
                <button class="seatButton blueSeatButton">A3</button>
                <button class="seatButton blueSeatButton">A4</button>
              </div>
              <div class="flex gap-x-[15px] xl:gap-x-[20px] mt-[20px] xl:mt-[24px]">
                <button class="seatButton blueSeatButton">B1</button>
                <button class="seatButton emptySeat"></button>
                <button class="seatButton hidden">A1</button>
                <button class="seatButton blueSeatButton">B2</button>
                <button class="seatButton blueSeatButton">B3</button>
              </div>
              <div class="flex gap-x-[15px] xl:gap-x-[20px] mt-[20px] xl:mt-[24px]">
                <button class="seatButton blueSeatButton">C1</button>
                <button class="seatButton emptySeat"></button>
                <button class="seatButton hidden">A1</button>
                <button class="seatButton">C2</button>
                <button class="seatButton">C3</button>
              </div>
              <div class="flex gap-x-[15px] xl:gap-x-[20px] mt-[20px] xl:mt-[24px]">
                <button class="seatButton">D1</button>
                <button class="seatButton">D2</button>
                <button class="seatButton hidden">A1</button>
                <button class="seatButton">D3</button>
                <button class="seatButton">D4</button>
              </div>
              <div class="flex gap-x-[15px] xl:gap-x-[20px] mt-[20px] xl:mt-[24px]">
                <button class="seatButton">E1</button>
                <button class="seatButton">E2</button>
                <button class="seatButton hidden">A1</button>
                <button class="seatButton">E3</button>
                <button class="seatButton">E4</button>
              </div>
              <div class="flex gap-x-[15px] xl:gap-x-[20px] mt-[20px] xl:mt-[24px]">
                <button class="seatButton">F1</button>
                <button class="seatButton">F2</button>
                <button class="seatButton hidden">A1</button>
                <button class="seatButton">F3</button>
                <button class="seatButton">F4</button>
              </div>
              <div class="flex gap-x-[15px] xl:gap-x-[20px] mt-[20px] xl:mt-[24px]">
                <button class="seatButton">G1</button>
                <button class="seatButton">G2</button>
                <button class="seatButton hidden">A1</button>
                <button class="seatButton">G3</button>
                <button class="seatButton">G4</button>
              </div>
              <div class="flex gap-x-[15px] xl:gap-x-[20px] mt-[20px] xl:mt-[24px]">
                <button class="seatButton">H1</button>
                <button class="seatButton">H2</button>
                <button class="seatButton hidden">A1</button>
                <button class="seatButton">H3</button>
                <button class="seatButton">H4</button>
              </div>
              <div class="flex gap-x-[15px] xl:gap-x-[20px] mt-[20px] xl:mt-[24px]">
                <button class="seatButton">I1</button>
                <button class="seatButton">I2</button>
                <button class="seatButton hidden">A1</button>
                <button class="seatButton">I3</button>
                <button class="seatButton">I4</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex justify-center items-center mt-5">
      <router-link class="lessNextStepButton flex items-center gap-[10px]" to="/tripsInformation">
        Next step<span><img alt="" class="h-[9.33px] w-[9.33px]" src="../assets/svg/right-white-arrow.svg"></span>
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

.blueSeatButton {
  background-color: #1E88E5;
}

.emptySeat {
  opacity: 0;
  cursor: auto;
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
  