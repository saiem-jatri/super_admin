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
              <p class="lg:leading-[16px] xl:leading-[28px] lg:text-[14px] xl:text-[20px] font-[600] text-primaryText">Create Company</p>
              <div class="flex justify-center items-center gap-x-[6px]">
                <p class="text-secondaryText leading-[12px] text-[8px] xl:leading-[16px] xl:text-[12px] font-[400]">Bus Company</p>
                <img src="../assets/svg/bgBack.svg" alt="" class="w-1 h-2">
                <p class="text-secondaryText leading-[12px] text-[8px] xl:leading-[16px] xl:text-[12px] font-[400]">Add company</p>
                <img src="../assets/svg/bgBack.svg" alt="" class="w-1 h-2">
                <p class="text-secondaryText leading-[12px] text-[8px] xl:leading-[16px] xl:text-[12px] font-[400]">Desh Travels Limited</p>
                <img src="../assets/svg/bgBack.svg" alt="" class="w-1 h-2">
                <p class="text-secondaryText leading-[12px] text-[8px] xl:leading-[16px] xl:text-[12px] font-[400]">Manage</p>
                <img src="../assets/svg/bgBack.svg" alt="" class="w-1 h-2">
                <p class="text-secondaryText leading-[12px] text-[8px] xl:leading-[16px] xl:text-[12px] font-[400]">Owner</p>
                <img src="../assets/svg/bgBack.svg" alt="" class="w-1 h-2">
                <p class="text-secondaryText leading-[12px] text-[8px] xl:leading-[16px] xl:text-[12px] font-[400]">Add user</p>
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
        <div class="mt-[16px] bg-white rounded-[10px]">
            <div class="p-4 flex items-center gap-x-4 w-full">
              <div class="w-1/4">
                <div class="flex justify-between items-center w-full">
                  <p class="text-primaryText leading-[18px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">Owner name</p>
                </div>
                <input type="text" class="focus:outline-none mt-[10px] w-full border border-[#DBDBDB] rounded-[4px] pl-2 py-2 placeholder:text-[#676769] placeholder:leading-[16px] placeholder:text-[10px] xl:placeholder:leading-[20px] xl:placeholder:text-[14px]" placeholder="Enter owner name">
              </div>
              <div class="w-1/4">
                <div class="flex justify-between items-center w-full">
                  <p class="text-primaryText leading-[18px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">Mobile Number</p>
                </div>
                <input type="text" class="focus:outline-none mt-[10px] w-full border border-[#DBDBDB] rounded-[4px] pl-2 py-2 placeholder:text-[#676769] placeholder:leading-[16px] placeholder:text-[10px] xl:placeholder:leading-[20px] xl:placeholder:text-[14px]" placeholder="Enter owner name">
              </div>

              <div class="w-1/4">
                <div class="flex justify-between items-center w-full">
                  <p class="text-primaryText leading-[18px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">Email Address</p>
                </div>
                <input type="text" class="focus:outline-none mt-[10px] w-full border border-[#DBDBDB] rounded-[4px] pl-2 py-2 placeholder:text-[#676769] placeholder:leading-[16px] placeholder:text-[10px] xl:placeholder:leading-[20px] xl:placeholder:text-[14px]" placeholder="Enter owner name">
              </div>
              <div class="w-1/4">
                <div class="flex justify-between items-center w-full">
                  <p class="text-primaryText leading-[18px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">Password</p>
                </div>
                <input type="text" class="focus:outline-none mt-[10px] w-full border border-[#DBDBDB] rounded-[4px] pl-2 py-2 placeholder:text-[#676769] placeholder:leading-[16px] placeholder:text-[10px] xl:placeholder:leading-[20px] xl:placeholder:text-[14px]" placeholder="Enter owner name">
              </div>
            </div>
        <div class="p-4">
          <div class="mt-4 rounded-[4px] border border-corporateBorder pt-3 px-4">
            <div class="flex justify-between w-full">
              <div class="flex gap-x-4 justify-start items-center">
                <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">User type:</p>
                <div class="w-[270px]">
                  <Dropdown class="w-full py-[4px] mb-2 mt-[10px] placeholder:text-primaryText" v-model="selectedCity" :options="cities" optionLabel="name" placeholder="Owner" />
                </div>
              </div>
              <div class="form-group  mt-5">
                <input type="checkbox" id="html">
                <label for="html" class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">Give All Permission</label>
              </div>
            </div>
            <hr class="border-t border-corporateBorder mt-[10px]">
            <div class="flex divide-x divide-corporateBorder">
              <div class="w-1/2">
                <div class="py-[18px] pl-[16px] pr-[46px]">
                  <div class="flex justify-between items-center">
                    <p class="w-[60%] leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px]">Dashboard:</p>
                    <div class="w-[40%] flex justify-between items-center mt-4">
                      <div class="form-group">
                        <input type="checkbox" id="read">
                        <label for="read" class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]">Read</label>
                      </div>
                      <div class="form-group">
                        <input type="checkbox" id="write">
                        <label for="write" class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]">Write</label>
                      </div>
                    </div>
                  </div>
                  <hr class="border-t border-dashed border-corporateBorder mt-[15px]">

                  <div class="flex justify-between items-center">
                    <p class="w-[60%] leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px]">Owners:</p>
                    <div class="w-[40%] flex justify-between items-center mt-4">
                      <div class="form-group">
                        <input type="checkbox" id="read">
                        <label for="read" class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]">Read</label>
                      </div>
                      <div class="form-group">
                        <input type="checkbox" id="write">
                        <label for="write" class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]">Write</label>
                      </div>
                    </div>
                  </div>
                  <hr class="border-t border-dashed border-corporateBorder mt-[15px]">

                  <div class="flex justify-between items-center">
                    <p class="w-[60%] leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px]">Trips:</p>
                    <div class="w-[40%] flex justify-between items-center mt-4">
                      <div class="form-group">
                        <input type="checkbox" id="read">
                        <label for="read" class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]">Read</label>
                      </div>
                      <div class="form-group">
                        <input type="checkbox" id="write">
                        <label for="write" class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]">Write</label>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
              <div class="w-1/2">
                <div class="py-[18px] pl-[16px] pr-[46px]">
                  <div class="flex justify-between items-center">
                    <p class="w-[60%] leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px]">Report:</p>
                    <div class="w-[40%] flex justify-between items-center mt-4">
                      <div class="form-group">
                        <input type="checkbox" id="read">
                        <label for="read" class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]">Read</label>
                      </div>
                      <div class="form-group">
                        <input type="checkbox" id="write">
                        <label for="write" class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]">Write</label>
                      </div>
                    </div>
                  </div>
                  <hr class="border-t border-dashed border-corporateBorder mt-[15px]">

                  <div class="flex justify-between items-center">
                    <p class="w-[60%] leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px]">Company Setup:</p>
                    <div class="w-[40%] flex justify-between items-center mt-4">
                      <div class="form-group">
                        <input type="checkbox" id="read">
                        <label for="read" class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]">Read</label>
                      </div>
                      <div class="form-group">
                        <input type="checkbox" id="write">
                        <label for="write" class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]">Write</label>
                      </div>
                    </div>
                  </div>
                  <hr class="border-t border-dashed border-corporateBorder mt-[15px]">

                  <div class="flex justify-between items-center">
                    <p class="w-[60%] leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px]">Agent Balance:</p>
                    <div class="w-[40%] flex justify-between items-center mt-4">
                      <div class="form-group">
                        <input type="checkbox" id="read">
                        <label for="read" class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]">Recharge</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr class="mt-[16px] border-t border-corporateBorder">
          <div class="px-[16px] py-[20px] w-full flex justify-between items-center">
            <div class="flex gap-x-[16px] items-center">
              <p class="text-primaryText font-[600] leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] ">Status</p>
              <div class="flex justify-center items-center">
                <button class="bg-[#48A43F] w-[90px] xl:w-[110px] text-white leading-[16px] xl:leading-[20px] text-[12px] xl:text-[14px] flex justify-center items-center font-[400] h-[40px] rounded-l-[4px]">Active</button>
                <button class="bg-[#F7F7F7] w-[90px] xl:w-[110px] text-primaryText leading-[16px] xl:leading-[20px] text-[12px] xl:text-[14px] border border-[#DBDBDB] flex justify-center items-center font-[400] h-[40px] rounded-r-[4px]">Inactive</button>
              </div>
            </div>
            <button class="flex justify-center items-center text-white leading-[16px] text-[12px] xl:leading-[20px] xl:text-[14px] font-[600] bg-corporate bg-opacity-30 rounded-full px-[20px] py-[11px] xl:px-[24px] xl:py-[13px]">Create company</button>
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
  border-bottom: 1px dotted #DBDBDB;
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
  top: 2px;
  left: 9px;
  width: 6px;
  height: 14px;
  border:2px solid white;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
  /*background-color: white;*/
}
</style>
