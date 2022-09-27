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
              <p class="lg:leading-[16px] xl:leading-[28px] lg:text-[14px] xl:text-[20px] font-[600] text-primaryText">Create Counter</p>
              <div class="flex justify-center items-center gap-x-[6px] mr-2">
                <p class="text-secondaryText leading-[12px] text-[8px] xl:leading-[16px] xl:text-[12px] font-[400]">Counter</p>
                <img src="../assets/svg/bgBack.svg" alt="" class="w-1 h-2">
                <p class="text-secondaryText leading-[12px] text-[8px] xl:leading-[16px] xl:text-[12px] font-[400]">Add counter</p>
              </div>
            </div>
          </div>
          <div class="flex gap-x-[24px] p-4 w-1/2 justify-end items-center pr-2 ">
            <!--            <input type="text" class="w-[270px] h-[40px] border border-[#DBDBDB] placeholder:text-[#4D4D4F] placeholder:text-[14px] leading-[20px] rounded-[4px] pl-8 focus:outline-none" placeholder="PNR or mobile number">-->
            <!--            <img src="../assets/svg/search.svg" class="h-5 w-5 absolute left-[242px]" alt="">-->
            <div class="w-[200px] h-[30px] xl:w-[270px] xl:h-[40px] border border-[#DBDBDB] flex justify-center items-center leading-[20px] rounded-[4px] pl-[9px] overflow-hidden" >
              <img src="../assets/svg/search.svg" class="h-2 w-2 xl:h-5 xl:w-5" alt="">
              <input type="text" class="outline-none pl-32 xl:pl-2 placeholder:text-[#4D4D4F] placeholder:text-[8px] placeholder:leading-[16px] xl:placeholder:text-[14px] xl:placeholder:leading-[20px]" placeholder="PNR or mobile number">
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

        <!--        card-->
        <div class="bg-white rounded-[8px]">
          <div class="p-4">
          <div class="flex justify-center items-center gap-x-[10px] xl:gap-x-[16px]">
            <div class="w-1/4">
              <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">Bus operator</p>
              <Dropdown class="w-full py-[4px] mt-[10px]" v-model="selectedCity" :opti6ns="cities" optionLabel="name" placeholder="Select bus operator" />
            </div>
            <div class="w-1/4">
              <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">Counter name</p>
              <input type="text" class="createNormalInput" placeholder="Enter counter name">
            </div>
            <div class="w-1/4">
              <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">Counter code</p>
              <input type="text" class="createNormalInput" placeholder="Enter counter code">
            </div>
            <div class="w-1/4">
              <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">City</p>
              <Dropdown class="w-full py-[4px] mt-[10px]" v-model="selectedCity" :opti6ns="cities" optionLabel="name" placeholder="Select city" />
            </div>
          </div>
            <div class="flex justify-center items-center gap-x-[10px] xl:gap-x-[16px] mt-[12px] xl:mt-[16px]">
              <div class="w-1/4">
                <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">Stoppage</p>
                <Dropdown class="w-full py-[4px] mt-[10px]" v-model="selectedCity" :opti6ns="cities" optionLabel="name" placeholder="Select stoppage" />
              </div>
              <div class="w-1/4">
                <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">Address</p>
                <input type="text" class="createNormalInput" placeholder="Enter counter address">
              </div>
              <div class="w-1/4">
                <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">Address</p>
                <input type="text" class="createNormalInput" placeholder="Enter counter address">
              </div>
              <div class="w-1/4">
                <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">Future trip validate</p>
                <div class="w-full mt-[10px] h-[40px] border border-[#DBDBDB] flex justify-between items-center leading-[20px] rounded-[4px] overflow-hidden divide-x" >
                  <div class="flex justify-between items-center">
                    <div class="flex justify-between items-center w-[115px] xl:w-[180px]">
                      <select class="form-select appearance-none w-full block px-3 pl-[22px] py-1.5 text-base bg-white rounded focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example">
                        <option selected>3</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                      <img src="../assets/svg/down_arrow.svg" class="w-[12px] h-5 ml-4" alt="">
                    </div>
                  </div>
                  <p class="p-4 text-[#676769] leading-[20px] text-[14px] font-[400]">Days</p>
                </div>

              </div>
            </div>

            <div class="flex justify-center items-center gap-x-[10px] xl:gap-x-[16px] mt-[12px] xl:mt-[16px]">
              <div class="w-1/4">
                <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">Counter type</p>
                <div class="flex justify-center items-center mt-[10px]">
                  <button class=" w-1/2 bg-white text-[#676769] leading-[20px] text-[14px] border border-[#DBDBDB] flex justify-center items-center font-[400] h-[40px] rounded-l-[4px]">Own</button>
                  <button class=" w-1/2 bg-corporate text-white leading-[20px] text-[14px] flex justify-center items-center font-[400] h-[40px] rounded-r-[4px]">Third party</button>
                </div>
              </div>
              <div class="w-1/4">
                <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">Third party counter commission</p>
                <div class="py-[2px] border border-[#DBDBDB] mt-[10px] rounded-[4px] leading-[20px]">
                  <div class="w-full h-[35px] flex justify-between items-center overflow-hidden divide-x" >
                    <input class="p-4 text-[#676769] leading-[20px] text-[14px] font-[400] w-2/5 placeholder:text-primaryText focus:outline-none" placeholder="30">
                    <div class="p-2 w-3/5 ">
                      <div class="flex justify-between xl:gap-x-2 items-center bg-[#F7F7F7] xl:px-2">
                        <select class="form-selectpy-1 text-base bg-[#F7F7F7] rounded focus:outline-none xl:w-full" aria-label="Default select example">
                          <option selected class="leading-[16px] xl:leading-[20px] text-[10px] xl:text-[14px] font-[500]">Percentage %</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                        <img src="../assets/svg/down_arrow.svg" class="w-[12px] h-5" alt="">
                      </div>
                    </div>

                  </div>
                </div>

              </div>
              <div class="w-1/4">
                <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">Payment Type</p>
                <Dropdown class="w-full py-[4px] mt-[10px]" v-model="selectedCity" :opti6ns="cities" optionLabel="name" placeholder="Prepaid" />
              </div>
              <div class="w-1/4">
                <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">Prepaid CAP (TK)</p>
                <input type="text" class="createNormalInput" placeholder="Enter CAP amount">
              </div>
            </div>
          </div>
          <hr class="mt-[12px] xl:mt-[16px] border-t border-corporateBorder">
          <div class="px-[16px] py-[20px] w-full flex justify-between items-center">
            <div class="flex gap-x-[16px] items-center w-1/4">
              <p class="text-primaryText font-[600] leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] ">Status</p>
              <div class="flex justify-center items-center">
                <button class="viaCityActive">Active</button>
                <button class="viaCityInActive">Inactive</button>
              </div>
            </div>
              <button class="flex justify-center items-center text-white leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[600] bg-corporate rounded-full px-[20px] py-[11px] xl:px-[24px] xl:py-[13px]">Create counter</button>
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
  border-bottom: 1px dotted #DBDBDB;
}
.p-buttonset .p-button {
  margin: 0;
  width: 183px;
  height: 38px;
}

.p-button-label{
  font-weight: 400;
}
.p-selectbutton .p-button.p-highlight{
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
  content:'';
  -webkit-appearance: none;
  background-color: transparent;
  border: 2px solid #151414;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05), inset 0px -15px 10px -12px rgba(0, 0, 0, 0.05);
  /*padding: 10px;*/
  display: inline-block;
  position: relative;
  vertical-align: middle;
  cursor: pointer;
  margin-right: 5px;
  border-radius: 4px;
}

.form-group input:checked + label:before{
  background-color: #48A43F;
  border: 2px solid #48A43F;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05), inset 0px -15px 10px -12px rgba(0, 0, 0, 0.05);
}

.form-group input:checked + label:after {
  content: '';
  display: block;
  position: absolute;
  top: 0px;
  left: 9px;
  width: 6px;
  height: 14px;
  border:2px solid white;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
  /*background-color: white;*/
}
</style>

<script>
export  default {
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
