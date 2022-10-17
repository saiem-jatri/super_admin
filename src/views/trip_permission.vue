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
        <div class="bg-white rounded-[6px]">
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
              <p class="text-corporateSecondaryBlue leading-[20px] xl:leading-[24px] text-[14px] xl:text-[16px] font-[600] mt-2">
                PERMISSIONS & COMMISSIONS</p>
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
            <p class="text-corporateSecondaryBlue leading-[20px] xl:leading-[24px] text-[14px] xl:text-[16px] font-[600] mb-4">
              TRIP PERMISSION</p>
            <div class="flex justify-center items-center gap-x-[10px] xl:gap-x-[16px]">
              <div class="w-1/4">
                <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">Trip
                  available for online</p>
                <div class="py-[8px] border border-corporateBorder rounded-[4px] mt-[10px]">
                  <div class="w-full  rounded-[4px] flex justify-between items-center divide-x divide-corporateBorder">
                    <input class="w-[80%] focus:outline-none px-[8px] placeholderDesign" placeholder="Enter trip available time"
                           type="text">
                    <p class="w-[20%] text-center leading-[16px] xl:leading-[20px] text-[12px] xl:text-[14px] text-corporateSecondaryBlack">
                      hr</p>
                  </div>
                </div>
              </div>

              <div class="w-1/4">
                <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">Bus
                  reg. no</p>
                <input class="createNormalInput" placeholder="Enter bus reg. no" type="text">
              </div>
              <div class="w-1/4">
                <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">Top
                  priority</p>
                <div class="flex justify-center items-center w-full mt-[10px]">
                  <button class="tripPermissionBtnleft">Yes</button>
                  <button class="tripPermissionBtnright">No</button>
                </div>
              </div>
              <div class="w-1/4">
                <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">
                  Discount</p>
                <div class="flex justify-center items-center w-full mt-[10px]">
                  <button class="tripPermissionBtnleft">Yes</button>
                  <button class="tripPermissionBtnright">No</button>
                </div>
              </div>
            </div>
            <div class="flex justify-start items-center gap-x-[10px] xl:gap-x-[16px] mt-3 xl:mt-4">

              <div class="w-1/4">
                <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">
                  Reserve</p>
                <div class="flex justify-center items-center w-full mt-[10px]">
                  <button class="tripPermissionBtnleft">Yes</button>
                  <button class="tripPermissionBtnright">No</button>
                </div>
              </div>
              <div class="w-1/4">
                <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">
                  Cancel</p>
                <div class="flex justify-center items-center w-full mt-[10px]">
                  <button class="tripPermissionBtnleft">Yes</button>
                  <button class="tripPermissionBtnright">No</button>
                </div>
              </div>
            </div>
          </div>
          <hr class="border-t border-corporateBorder">
          <div class="p-4">
            <p class="text-corporateSecondaryBlue leading-[20px] xl:leading-[24px] text-[14px] xl:text-[16px] font-[600] mb-4">
              ROUTE PERMISSION</p>
            <div class="flex justify-center items-center gap-x-[10px] xl:gap-x-[16px]">
              <div class="w-1/4">
                <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">
                  Operator</p>
                <div class="flex justify-center items-center w-full mt-[10px]">
                  <button class="tripPermissionBtnleft">Yes</button>
                  <button class="tripPermissionBtnright">No</button>
                </div>
              </div>

              <div class="w-1/4">
                <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">Third
                  party agent</p>
                <div class="flex justify-center items-center w-full mt-[10px]">
                  <button class="tripPermissionBtnleft">Yes</button>
                  <button class="tripPermissionBtnright">No</button>
                </div>
              </div>
              <div class="w-1/4">
                <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">
                  Jatri</p>
                <div class="flex justify-center items-center w-full mt-[10px]">
                  <button class="tripPermissionBtnleft">Yes</button>
                  <button class="tripPermissionBtnright">No</button>
                </div>
              </div>
              <div class="w-1/4">
                <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">
                  Customer care</p>
                <div class="flex justify-center items-center w-full mt-[10px]">
                  <button class="tripPermissionBtnleftWithbg">Yes</button>
                  <button class="tripPermissionBtnright">No</button>
                </div>
              </div>
            </div>
            <div class="flex justify-start items-center gap-x-[10px] xl:gap-x-[16px] mt-3 xl:mt-4">

              <div class="w-1/4">
                <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">Eid
                  trip</p>
                <div class="flex justify-center items-center w-full mt-[10px]">
                  <button class="tripPermissionBtnleft">Yes</button>
                  <button class="tripPermissionBtnright">No</button>
                </div>
              </div>
            </div>
          </div>
          <hr class="border-t border-corporateBorder">
          <div class="p-4">
            <p class="text-corporateSecondaryBlue leading-[20px] xl:leading-[24px] text-[14px] xl:text-[16px] font-[600] mb-4">
              COMMISSION</p>
            <div class="flex justify-start items-center gap-x-[10px] xl:gap-x-[16px]">
              <div class="w-1/4">
                <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]"> Ticket commission (Third party)</p>
                <div class="py-[2px] border border-[#DBDBDB] mt-[10px] rounded-[4px] leading-[20px]">
                  <div class="w-full h-[35px] flex justify-between items-center overflow-hidden divide-x">
                    <input class="px-2 py-4 text-[#676769] leading-[20px] text-[14px] font-[400] w-2/5 placeholder:text-primaryText focus:outline-none" placeholder="Enter ammount">
                    <div class="p-2 w-3/5">
                      <div class="flex justify-between xl:gap-x-2 items-center bg-[#F7F7F7] xl:px-2">
                        <select class="py-1 text-base bg-[#F7F7F7] rounded focus:outline-none xl:w-full leading-[16px] xl:leading-[20px] text-[10px] xl:text-[14px] font-[500]">
                          <option selected=""> Percentage % </option><option value="1">One</option><option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                        <img alt="" class="w-[10px] xl:w-[12px] h-5" src="/src/assets/svg/down_arrow.svg">
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="w-1/4">
                <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]"> Jatri commission</p>
                <div class="py-[2px] border border-[#DBDBDB] mt-[10px] rounded-[4px] leading-[20px]">
                  <div class="w-full h-[35px] flex justify-between items-center overflow-hidden divide-x">
                    <input class="px-2 py-4 text-[#676769] leading-[20px] text-[14px] font-[400] w-2/5 placeholder:text-primaryText focus:outline-none" placeholder="Enter ammount">
                    <div class="p-2 w-3/5">
                      <div class="flex justify-between xl:gap-x-2 items-center bg-[#F7F7F7] xl:px-2">
                        <select class="py-1 text-base bg-[#F7F7F7] rounded focus:outline-none xl:w-full leading-[16px] xl:leading-[20px] text-[10px] xl:text-[14px] font-[500]">
                          <option selected=""> Percentage % </option><option value="1">One</option><option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                        <img alt="" class="w-[10px] xl:w-[12px] h-5" src="/src/assets/svg/down_arrow.svg">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <hr class="border-t border-corporateBorder">
          <div class="p-4">
            <p class="text-corporateSecondaryBlue leading-[20px] xl:leading-[24px] text-[14px] xl:text-[16px] font-[600] mb-4">
              PUBLISH FOR JATRI</p>
            <div class="flex justify-start items-center gap-x-[10px] xl:gap-x-[16px]">
              <div class="w-1/4">
                <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">
                  Web</p>
                <div class="flex justify-center items-center w-full mt-[10px]">
                  <button class="tripPermissionBtnleft">Yes</button>
                  <button class="tripPermissionBtnright">No</button>
                </div>
              </div>
              <div class="w-1/4">
                <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">
                  App</p>
                <div class="flex justify-center items-center w-full mt-[10px]">
                  <button class="tripPermissionBtnleft">Yes</button>
                  <button class="tripPermissionBtnright">No</button>
                </div>
              </div>
              <div class="w-1/4">
                <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">
                  Customer Care</p>
                <div class="flex justify-center items-center w-full mt-[10px]">
                  <button class="tripPermissionBtnleft">Yes</button>
                  <button class="tripPermissionBtnright">No</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="flex justify-center items-center mt-5">
          <router-link to="/tripsPermissionFilled" class="lessNextStepButton flex items-center gap-[10px]">
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
