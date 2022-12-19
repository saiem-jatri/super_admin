<template>
  <!-- Top nav bar start-->
  <div class="bg-white h-[72px] sticky top-0 border-b border-[#DBDBDB] z-10">
    <div class="flex justify-between items-center">
      <p class="p-6 text-[#151414] leading-[28px] text-[20px] font-[600]">Ticket</p>
      <div
          class="w-[230px] xl:w-[270px] h-[40px] border border-[#DBDBDB] flex justify-center items-center leading-[20px] rounded-[4px] pl-14 xl:pl-[9px] overflow-hidden">
        <img alt="" class="h-5 w-5" src="../assets/svg/search.svg">
        <input class="outline-none pl-2 placeholder:text-[#4D4D4F] placeholder:text-[14px] placeholder:leading-[20px]"
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
  <div class="py-2 px-[10px]">
    <div class="h-[400px]"></div>
    <!--    Ticket edit options started-->
    <div>
      <div class="flex justify-between items-center mb-4">
        <button
            class="w-[200px] py-1 border border-dashed border-corporateSecondaryBlue flex justify-center items-center bg-[#EFF7FD] rounded-[4px] mt-4">
          <p class="text-primaryText font-[600] leading-[20px] text-[14px]">Print Preview</p>
        </button>

        <button
            class="text-white leading-[16px] text-[12px] font-[400] bg-corporate rounded-full px-[54px] py-2 flex items-center gap-[10px]">
          Submit
        </button>
      </div>
      <div class="h-[350px] overflow-y-auto">
        <div class="flex mt-4 items-center gap-x-1">
          <p class="text-primaryText font-semibold text-lg w-[10%]">Layer 1</p>
          <div class="w-[10%]">
            <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">Boarding
              time</p>
            <input class="createNormalInput" placeholder="Enter boarding time" type="text">
          </div>
          <div class="w-[10%]">
            <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">Boarding
              time</p>
            <input class="createNormalInput" placeholder="Enter boarding time" type="text">
          </div>
        </div>
        <div class="mt-2">
          <div class="flex flex-wrap gap-x-1 items-center">
            <div class="w-[115px]">
              <p class="text-primaryText text-[12px] font-[600]">Name</p>
              <input class="createNormalInput" placeholder="Name" type="text">
            </div>
            <div class="w-[115px]">
              <p class="text-primaryText text-[12px] font-[600]">Example 1</p>
              <input class="createNormalInput" placeholder="Dhaka" type="text">
            </div>
            <div class="w-[115px]">
              <p class="text-primaryText text-[12px] font-[600]">Assigned
                Value</p>
              <Dropdown v-model="selectedCity" :opti6ns="cities" class="w-full py-[4px] mt-[10px]" optionLabel="name"
                        placeholder="From Stoppage"/>
            </div>
            <div class="w-[115px]">
              <p class="text-primaryText text-[12px] font-[600]">Separator</p>
              <Dropdown v-model="selectedCity" :opti6ns="cities" class="w-full py-[4px] mt-[10px]" optionLabel="name"
                        placeholder="Dash"/>
            </div>
            <div class="w-[115px]">
              <p class="text-primaryText text-[12px] font-[600]">Example 2</p>
              <input class="createNormalInput" placeholder="Ctg Stoppage" type="text">
            </div>
            <div class="w-[115px]">
              <p class="text-primaryText text-[12px] font-[600]">Assigned
                Value 2</p>
              <Dropdown v-model="selectedCity" :opti6ns="cities" class="w-full py-[4px] mt-[10px]" optionLabel="name"
                        placeholder="To Stoppage"/>
            </div>
            <div class="w-[115px]">
              <p class="text-primaryText text-[12px] font-[600]">Title Width</p>
              <input class="createNormalInput" placeholder="Width" type="text">
            </div>
            <div class="w-[115px]">
              <p class="text-primaryText text-[12px] font-[600]">Title Value</p>
              <input class="createNormalInput" placeholder="Title" type="text">
            </div>
            <div class="w-[115px]">
              <p class="text-primaryText text-[12px] font-[600]">Left Margin</p>
              <input class="createNormalInput" placeholder="Left Margin" type="text">
            </div>
            <div class="w-[115px]">
              <p class="text-primaryText text-[12px] font-[600]">Top Margin</p>
              <input class="createNormalInput" placeholder="Top Margin" type="text">
            </div>
            <div class="w-[115px]">
              <p class="text-primaryText text-[12px] font-[600]">Font-Weight</p>
              <Dropdown v-model="selectedCity" :opti6ns="cities" class="w-full py-[4px] mt-[10px]" optionLabel="name"
                        placeholder="Font Weight"/>
            </div>
            <div class="w-[115px]">
              <p class="text-primaryText text-[12px] font-[600]">Font Size</p>
              <input class="createNormalInput" placeholder="Font Size" type="text">
            </div>
            <div class="w-[115px] flex justify-center items-center gap-x-4 mt-5">
              <button class="bg-[#EDEDED] h-[40px] w-[40px] rounded-full flex justify-center items-center">
                <img alt="" class="w-2 h-2" src="../assets/svg/grey-plus.svg">
              </button>
              <button class="bg-[#EDEDED] h-[40px] w-[40px] rounded-full flex justify-center items-center">
                <p class="font-bold text-gray-600">-</p>
              </button>
            </div>
          </div>
        </div>
        <div class="mt-2">
          <div class="flex flex-wrap gap-x-1 items-center">
            <div class="w-[115px]">
              <p class="text-primaryText text-[12px] font-[600]">Name</p>
              <input class="createNormalInput" placeholder="Name" type="text">
            </div>
            <div class="w-[115px]">
              <p class="text-primaryText text-[12px] font-[600]">Example 1</p>
              <input class="createNormalInput" placeholder="Dhaka" type="text">
            </div>
            <div class="w-[115px]">
              <p class="text-primaryText text-[12px] font-[600]">Assigned
                Value</p>
              <Dropdown v-model="selectedCity" :opti6ns="cities" class="w-full py-[4px] mt-[10px]" optionLabel="name"
                        placeholder="From Stoppage"/>
            </div>
            <div class="w-[115px]">
              <p class="text-primaryText text-[12px] font-[600]">Separator</p>
              <Dropdown v-model="selectedCity" :opti6ns="cities" class="w-full py-[4px] mt-[10px]" optionLabel="name"
                        placeholder="Dash"/>
            </div>
            <div class="w-[115px]">
              <p class="text-primaryText text-[12px] font-[600]">Example 2</p>
              <input class="createNormalInput" placeholder="Ctg Stoppage" type="text">
            </div>
            <div class="w-[115px]">
              <p class="text-primaryText text-[12px] font-[600]">Assigned
                Value 2</p>
              <Dropdown v-model="selectedCity" :opti6ns="cities" class="w-full py-[4px] mt-[10px]" optionLabel="name"
                        placeholder="To Stoppage"/>
            </div>
            <div class="w-[115px]">
              <p class="text-primaryText text-[12px] font-[600]">Title Width</p>
              <input class="createNormalInput" placeholder="Width" type="text">
            </div>
            <div class="w-[115px]">
              <p class="text-primaryText text-[12px] font-[600]">Title Value</p>
              <input class="createNormalInput" placeholder="Title" type="text">
            </div>
            <div class="w-[115px]">
              <p class="text-primaryText text-[12px] font-[600]">Left Margin</p>
              <input class="createNormalInput" placeholder="Left Margin" type="text">
            </div>
            <div class="w-[115px]">
              <p class="text-primaryText text-[12px] font-[600]">Top Margin</p>
              <input class="createNormalInput" placeholder="Top Margin" type="text">
            </div>
            <div class="w-[115px]">
              <p class="text-primaryText text-[12px] font-[600]">Font-Weight</p>
              <Dropdown v-model="selectedCity" :opti6ns="cities" class="w-full py-[4px] mt-[10px]" optionLabel="name"
                        placeholder="Font Weight"/>
            </div>
            <div class="w-[115px]">
              <p class="text-primaryText text-[12px] font-[600]">Font Size</p>
              <input class="createNormalInput" placeholder="Font Size" type="text">
            </div>
            <div class="w-[115px] flex justify-center items-center gap-x-4 mt-5">
              <button class="bg-[#EDEDED] h-[40px] w-[40px] rounded-full flex justify-center items-center">
                <img alt="" class="w-2 h-2" src="../assets/svg/grey-plus.svg">
              </button>
              <button class="bg-[#EDEDED] h-[40px] w-[40px] rounded-full flex justify-center items-center">
                <p class="font-bold text-gray-600">-</p>
              </button>
            </div>
          </div>
        </div>
        <div class="mt-2">
          <div class="flex flex-wrap gap-x-1 items-center">
            <div class="w-[115px]">
              <p class="text-primaryText text-[12px] font-[600]">Name</p>
              <input class="createNormalInput" placeholder="Name" type="text">
            </div>
            <div class="w-[115px]">
              <p class="text-primaryText text-[12px] font-[600]">Example 1</p>
              <input class="createNormalInput" placeholder="Dhaka" type="text">
            </div>
            <div class="w-[115px]">
              <p class="text-primaryText text-[12px] font-[600]">Assigned
                Value</p>
              <Dropdown v-model="selectedCity" :opti6ns="cities" class="w-full py-[4px] mt-[10px]" optionLabel="name"
                        placeholder="From Stoppage"/>
            </div>
            <div class="w-[115px]">
              <p class="text-primaryText text-[12px] font-[600]">Separator</p>
              <Dropdown v-model="selectedCity" :opti6ns="cities" class="w-full py-[4px] mt-[10px]" optionLabel="name"
                        placeholder="Dash"/>
            </div>
            <div class="w-[115px]">
              <p class="text-primaryText text-[12px] font-[600]">Example 2</p>
              <input class="createNormalInput" placeholder="Ctg Stoppage" type="text">
            </div>
            <div class="w-[115px]">
              <p class="text-primaryText text-[12px] font-[600]">Assigned
                Value 2</p>
              <Dropdown v-model="selectedCity" :opti6ns="cities" class="w-full py-[4px] mt-[10px]" optionLabel="name"
                        placeholder="To Stoppage"/>
            </div>
            <div class="w-[115px]">
              <p class="text-primaryText text-[12px] font-[600]">Title Width</p>
              <input class="createNormalInput" placeholder="Width" type="text">
            </div>
            <div class="w-[115px]">
              <p class="text-primaryText text-[12px] font-[600]">Title Value</p>
              <input class="createNormalInput" placeholder="Title" type="text">
            </div>
            <div class="w-[115px]">
              <p class="text-primaryText text-[12px] font-[600]">Left Margin</p>
              <input class="createNormalInput" placeholder="Left Margin" type="text">
            </div>
            <div class="w-[115px]">
              <p class="text-primaryText text-[12px] font-[600]">Top Margin</p>
              <input class="createNormalInput" placeholder="Top Margin" type="text">
            </div>
            <div class="w-[115px]">
              <p class="text-primaryText text-[12px] font-[600]">Font-Weight</p>
              <Dropdown v-model="selectedCity" :opti6ns="cities" class="w-full py-[4px] mt-[10px]" optionLabel="name"
                        placeholder="Font Weight"/>
            </div>
            <div class="w-[115px]">
              <p class="text-primaryText text-[12px] font-[600]">Font Size</p>
              <input class="createNormalInput" placeholder="Font Size" type="text">
            </div>
            <div class="w-[115px] flex justify-center items-center gap-x-4 mt-5">
              <button class="bg-[#EDEDED] h-[40px] w-[40px] rounded-full flex justify-center items-center">
                <img alt="" class="w-2 h-2" src="../assets/svg/grey-plus.svg">
              </button>
              <button class="bg-[#EDEDED] h-[40px] w-[40px] rounded-full flex justify-center items-center">
                <p class="font-bold text-gray-600">-</p>
              </button>
            </div>
          </div>
        </div>
        <div class="mt-2">
          <div class="flex flex-wrap gap-x-1 items-center">
            <div class="w-[115px]">
              <p class="text-primaryText text-[12px] font-[600]">Name</p>
              <input class="createNormalInput" placeholder="Name" type="text">
            </div>
            <div class="w-[115px]">
              <p class="text-primaryText text-[12px] font-[600]">Example 1</p>
              <input class="createNormalInput" placeholder="Dhaka" type="text">
            </div>
            <div class="w-[115px]">
              <p class="text-primaryText text-[12px] font-[600]">Assigned
                Value</p>
              <Dropdown v-model="selectedCity" :opti6ns="cities" class="w-full py-[4px] mt-[10px]" optionLabel="name"
                        placeholder="From Stoppage"/>
            </div>
            <div class="w-[115px]">
              <p class="text-primaryText text-[12px] font-[600]">Separator</p>
              <Dropdown v-model="selectedCity" :opti6ns="cities" class="w-full py-[4px] mt-[10px]" optionLabel="name"
                        placeholder="Dash"/>
            </div>
            <div class="w-[115px]">
              <p class="text-primaryText text-[12px] font-[600]">Example 2</p>
              <input class="createNormalInput" placeholder="Ctg Stoppage" type="text">
            </div>
            <div class="w-[115px]">
              <p class="text-primaryText text-[12px] font-[600]">Assigned
                Value 2</p>
              <Dropdown v-model="selectedCity" :opti6ns="cities" class="w-full py-[4px] mt-[10px]" optionLabel="name"
                        placeholder="To Stoppage"/>
            </div>
            <div class="w-[115px]">
              <p class="text-primaryText text-[12px] font-[600]">Title Width</p>
              <input class="createNormalInput" placeholder="Width" type="text">
            </div>
            <div class="w-[115px]">
              <p class="text-primaryText text-[12px] font-[600]">Title Value</p>
              <input class="createNormalInput" placeholder="Title" type="text">
            </div>
            <div class="w-[115px]">
              <p class="text-primaryText text-[12px] font-[600]">Left Margin</p>
              <input class="createNormalInput" placeholder="Left Margin" type="text">
            </div>
            <div class="w-[115px]">
              <p class="text-primaryText text-[12px] font-[600]">Top Margin</p>
              <input class="createNormalInput" placeholder="Top Margin" type="text">
            </div>
            <div class="w-[115px]">
              <p class="text-primaryText text-[12px] font-[600]">Font-Weight</p>
              <Dropdown v-model="selectedCity" :opti6ns="cities" class="w-full py-[4px] mt-[10px]" optionLabel="name"
                        placeholder="Font Weight"/>
            </div>
            <div class="w-[115px]">
              <p class="text-primaryText text-[12px] font-[600]">Font Size</p>
              <input class="createNormalInput" placeholder="Font Size" type="text">
            </div>
            <div class="w-[115px] flex justify-center items-center gap-x-4 mt-5">
              <button class="bg-[#EDEDED] h-[40px] w-[40px] rounded-full flex justify-center items-center">
                <img alt="" class="w-2 h-2" src="../assets/svg/grey-plus.svg">
              </button>
              <button class="bg-[#EDEDED] h-[40px] w-[40px] rounded-full flex justify-center items-center">
                <p class="font-bold text-gray-600">-</p>
              </button>
            </div>
          </div>
        </div>
        <div class="mt-2">
          <div class="flex flex-wrap gap-x-1 items-center">
            <div class="w-[115px]">
              <p class="text-primaryText text-[12px] font-[600]">Name</p>
              <input class="createNormalInput" placeholder="Name" type="text">
            </div>
            <div class="w-[115px]">
              <p class="text-primaryText text-[12px] font-[600]">Example 1</p>
              <input class="createNormalInput" placeholder="Dhaka" type="text">
            </div>
            <div class="w-[115px]">
              <p class="text-primaryText text-[12px] font-[600]">Assigned
                Value</p>
              <Dropdown v-model="selectedCity" :opti6ns="cities" class="w-full py-[4px] mt-[10px]" optionLabel="name"
                        placeholder="From Stoppage"/>
            </div>
            <div class="w-[115px]">
              <p class="text-primaryText text-[12px] font-[600]">Separator</p>
              <Dropdown v-model="selectedCity" :opti6ns="cities" class="w-full py-[4px] mt-[10px]" optionLabel="name"
                        placeholder="Dash"/>
            </div>
            <div class="w-[115px]">
              <p class="text-primaryText text-[12px] font-[600]">Example 2</p>
              <input class="createNormalInput" placeholder="Ctg Stoppage" type="text">
            </div>
            <div class="w-[115px]">
              <p class="text-primaryText text-[12px] font-[600]">Assigned
                Value 2</p>
              <Dropdown v-model="selectedCity" :opti6ns="cities" class="w-full py-[4px] mt-[10px]" optionLabel="name"
                        placeholder="To Stoppage"/>
            </div>
            <div class="w-[115px]">
              <p class="text-primaryText text-[12px] font-[600]">Title Width</p>
              <input class="createNormalInput" placeholder="Width" type="text">
            </div>
            <div class="w-[115px]">
              <p class="text-primaryText text-[12px] font-[600]">Title Value</p>
              <input class="createNormalInput" placeholder="Title" type="text">
            </div>
            <div class="w-[115px]">
              <p class="text-primaryText text-[12px] font-[600]">Left Margin</p>
              <input class="createNormalInput" placeholder="Left Margin" type="text">
            </div>
            <div class="w-[115px]">
              <p class="text-primaryText text-[12px] font-[600]">Top Margin</p>
              <input class="createNormalInput" placeholder="Top Margin" type="text">
            </div>
            <div class="w-[115px]">
              <p class="text-primaryText text-[12px] font-[600]">Font-Weight</p>
              <Dropdown v-model="selectedCity" :opti6ns="cities" class="w-full py-[4px] mt-[10px]" optionLabel="name"
                        placeholder="Font Weight"/>
            </div>
            <div class="w-[115px]">
              <p class="text-primaryText text-[12px] font-[600]">Font Size</p>
              <input class="createNormalInput" placeholder="Font Size" type="text">
            </div>
            <div class="w-[115px] flex justify-center items-center gap-x-4 mt-5">
              <button class="bg-[#EDEDED] h-[40px] w-[40px] rounded-full flex justify-center items-center">
                <img alt="" class="w-2 h-2" src="../assets/svg/grey-plus.svg">
              </button>
              <button class="bg-[#EDEDED] h-[40px] w-[40px] rounded-full flex justify-center items-center">
                <p class="font-bold text-gray-600">-</p>
              </button>
            </div>
          </div>
        </div>
        <div class="mt-2">
          <div class="flex flex-wrap gap-x-1 items-center">
            <div class="w-[115px]">
              <p class="text-primaryText text-[12px] font-[600]">Name</p>
              <input class="createNormalInput" placeholder="Name" type="text">
            </div>
            <div class="w-[115px]">
              <p class="text-primaryText text-[12px] font-[600]">Example 1</p>
              <input class="createNormalInput" placeholder="Dhaka" type="text">
            </div>
            <div class="w-[115px]">
              <p class="text-primaryText text-[12px] font-[600]">Assigned
                Value</p>
              <Dropdown v-model="selectedCity" :opti6ns="cities" class="w-full py-[4px] mt-[10px]" optionLabel="name"
                        placeholder="From Stoppage"/>
            </div>
            <div class="w-[115px]">
              <p class="text-primaryText text-[12px] font-[600]">Separator</p>
              <Dropdown v-model="selectedCity" :opti6ns="cities" class="w-full py-[4px] mt-[10px]" optionLabel="name"
                        placeholder="Dash"/>
            </div>
            <div class="w-[115px]">
              <p class="text-primaryText text-[12px] font-[600]">Example 2</p>
              <input class="createNormalInput" placeholder="Ctg Stoppage" type="text">
            </div>
            <div class="w-[115px]">
              <p class="text-primaryText text-[12px] font-[600]">Assigned
                Value 2</p>
              <Dropdown v-model="selectedCity" :opti6ns="cities" class="w-full py-[4px] mt-[10px]" optionLabel="name"
                        placeholder="To Stoppage"/>
            </div>
            <div class="w-[115px]">
              <p class="text-primaryText text-[12px] font-[600]">Title Width</p>
              <input class="createNormalInput" placeholder="Width" type="text">
            </div>
            <div class="w-[115px]">
              <p class="text-primaryText text-[12px] font-[600]">Title Value</p>
              <input class="createNormalInput" placeholder="Title" type="text">
            </div>
            <div class="w-[115px]">
              <p class="text-primaryText text-[12px] font-[600]">Left Margin</p>
              <input class="createNormalInput" placeholder="Left Margin" type="text">
            </div>
            <div class="w-[115px]">
              <p class="text-primaryText text-[12px] font-[600]">Top Margin</p>
              <input class="createNormalInput" placeholder="Top Margin" type="text">
            </div>
            <div class="w-[115px]">
              <p class="text-primaryText text-[12px] font-[600]">Font-Weight</p>
              <Dropdown v-model="selectedCity" :opti6ns="cities" class="w-full py-[4px] mt-[10px]" optionLabel="name"
                        placeholder="Font Weight"/>
            </div>
            <div class="w-[115px]">
              <p class="text-primaryText text-[12px] font-[600]">Font Size</p>
              <input class="createNormalInput" placeholder="Font Size" type="text">
            </div>
            <div class="w-[115px] flex justify-center items-center gap-x-4 mt-5">
              <button class="bg-[#EDEDED] h-[40px] w-[40px] rounded-full flex justify-center items-center">
                <img alt="" class="w-2 h-2" src="../assets/svg/grey-plus.svg">
              </button>
              <button class="bg-[#EDEDED] h-[40px] w-[40px] rounded-full flex justify-center items-center">
                <p class="font-bold text-gray-600">-</p>
              </button>
            </div>
          </div>
        </div>

      </div>

    </div>
  </div>
</template>
