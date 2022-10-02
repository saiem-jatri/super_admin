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
            <p class="lg:leading-[16px] xl:leading-[28px] lg:text-[14px] xl:text-[20px] font-[600] text-primaryText">Edit Trip</p>
            <div class="flex justify-center items-center gap-x-[6px] mr-2">
              <p class="text-secondaryText leading-[12px] text-[8px] xl:leading-[16px] xl:text-[12px] font-[400]">Trips</p>
              <img src="../assets/svg/bgBack.svg" alt="" class="w-1 h-2">
              <p class="text-secondaryText leading-[12px] text-[8px] xl:leading-[16px] xl:text-[12px] font-[400]">Desh Travels</p>
              <img src="../assets/svg/bgBack.svg" alt="" class="w-1 h-2">
              <p class="text-secondaryText leading-[12px] text-[8px] xl:leading-[16px] xl:text-[12px] font-[400]">Trip heading</p>
              <img src="../assets/svg/bgBack.svg" alt="" class="w-1 h-2">
              <p class="text-secondaryText leading-[12px] text-[8px] xl:leading-[16px] xl:text-[12px] font-[400]">Edit</p>
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
          <div class="flex items-center gap-x-[6px] mr-2">
            <p class="text-secondaryText leading-[12px] text-[8px] xl:leading-[16px] xl:text-[12px] font-[400]">Trip Information</p>
            <img src="../assets/svg/bgBack.svg" alt="" class="w-1 h-2">
            <p class="text-secondaryText leading-[12px] text-[8px] xl:leading-[16px] xl:text-[12px] font-[400]">Boarding & Dropping</p>
            <img src="../assets/svg/bgBack.svg" alt="" class="w-1 h-2">
            <p class="text-primaryText leading-[12px] text-[8px] xl:leading-[16px] xl:text-[12px] font-[600]">Seat & Fare</p>
            <img src="../assets/svg/bgBack.svg" alt="" class="w-1 h-2">
            <p class="text-secondaryText leading-[12px] text-[8px] xl:leading-[16px] xl:text-[12px] font-[400]">Permissions & Commissions</p>
            <img src="../assets/svg/bgBack.svg" alt="" class="w-1 h-2">
            <p class="text-secondaryText leading-[12px] text-[8px] xl:leading-[16px] xl:text-[12px] font-[400]">Assign Counterman & Agent</p>
            <img src="../assets/svg/bgBack.svg" alt="" class="w-1 h-2">
            <p class="text-secondaryText leading-[12px] text-[8px] xl:leading-[16px] xl:text-[12px] font-[400]">Assign Qouta</p>
            <img src="../assets/svg/bgBack.svg" alt="" class="w-1 h-2">
            <p class="text-secondaryText leading-[12px] text-[8px] xl:leading-[16px] xl:text-[12px] font-[400]">Trip Facilities & Policies</p>
            <img src="../assets/svg/bgBack.svg" alt="" class="w-1 h-2">
            <p class="text-secondaryText leading-[12px] text-[8px] xl:leading-[16px] xl:text-[12px] font-[400]">Preview</p>
          </div>
          <div class="flex justify-between items-center">
            <p class="text-[#1E88E5] leading-[20px] xl:leading-[24px] text-[14px] xl:text-[16px] font-[500] mt-2">SEAT & FARE</p>
            <p class="flex gap-x-[10px]">
              <img src="../assets/svg/back_arrow.svg" alt="">
              <a href="#" class="leading-[12px] xl:leading-[16px] text-[10px] xl:text-[12px] text-primaryText border-b-2 border-primaryText block text-primaryText font-[600]">Prev .step</a>
            </p>
          </div>
        </div>
      </div>
      <div class="bg-white rounded-[8px] mt-[12px] xl:mt-[16px]">
        <div class="p-4">
          <p class="text-[#1E88E5] leading-[20px] xl:leading-[24px] text-[14px] xl:text-[16px] font-[500]">TICKET FARE</p>
            <div class="w-1/4 mt-3 xl:mt-4">
              <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600]">Route</p>
              <Dropdown class="w-full py-[4px] mt-[10px]" v-model="selectedCity" :opti6ns="cities" optionLabel="name" placeholder="Dhaka-Tangail-Bogura-Rangpur" />
            </div>
          <hr class="mt-3 xl:mt-4 border-t border-dashed border-[#DBDBDB]">
          <div class="w-[70%] mt-3 xl:mt-4">
            <div class="flex justify-between gap-x-[20px] xl:gap-x-[27px]">
              <div class="w-full">
                <div class="flex justify-between items-center mt-2">
                  <label for="#" class="leading-[16px] xl:leading-[24px] text-[12px] xl:text-[16px] mt-4 min-w-[123px]">Dhaka - Tangail:</label>
                  <div class="flex gap-x-4 justify-start">
                    <div class="xl:ml-4">
                    <p class="leading-[16px] xl:leading-[20px] text-[12px] xl:text-[14px] font-[400]">Economy</p>
                    <input type="text" class="w-[120px] border border-corporateBorder rounded-[4px] px-2 py-[6px] focus:outline-none mt-2" placeholder="Enter Fare">
                  </div>
                  </div>
                  <div class="flex gap-x-[8px] xl:gap-x-[19px] mt-4">
                    <div class="form-group mb-0 mt-4">
                      <input type="checkbox" id="read1">
                      <label for="read1" class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]"> Jatri</label>
                    </div>
                    <div class="form-group mb-0 mt-4">
                      <input type="checkbox" id="read2">
                      <label for="read2" class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]"> Counter</label>
                    </div>
                    <div class="form-group mb-0 mt-4">
                      <input type="checkbox" id="read3">
                      <label for="read3" class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]"> Agent</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>    
            <div class="flex justify-between gap-x-[20px] xl:gap-x-[27px]">
                <div class="w-full">
                <div class="flex justify-between items-center mt-1">
                  <label for="#" class="leading-[16px] xl:leading-[24px] text-[12px] xl:text-[16px] min-w-[123px]">Dhaka - Tangail:</label>
                  <div class="xl:ml-4">
                    <input type="text" class="w-[120px] border border-corporateBorder rounded-[4px] px-2 py-[6px] focus:outline-none mt-1" placeholder="Enter Fare">
                  </div>
                  <div class="flex gap-x-[8px] xl:gap-x-[19px]">
                    <div class="form-group mb-0">
                      <input type="checkbox" id="read4">
                      <label for="read4" class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]"> Jatri</label>
                    </div>
                    <div class="form-group mb-0">
                      <input type="checkbox" id="read5">
                      <label for="read5" class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]"> Counter</label>
                    </div>
                    <div class="form-group mb-0">
                      <input type="checkbox" id="read6">
                      <label for="read6" class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]"> Agent</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="flex justify-between gap-x-[20px] xl:gap-x-[27px]">
                <div class="w-full">
                <div class="flex justify-between items-center mt-1">
                  <label for="#" class="leading-[16px] xl:leading-[24px] text-[12px] xl:text-[16px] min-w-[123px]">Dhaka - Tangail:</label>
                  <div class="xl:ml-4">
                    <input type="text" class="w-[120px] border border-corporateBorder rounded-[4px] px-2 py-[6px] focus:outline-none mt-1" placeholder="Enter Fare">
                  </div>
                  <div class="flex gap-x-[8px] xl:gap-x-[19px]">
                    <div class="form-group mb-0">
                      <input type="checkbox7" id="read">
                      <label for="read" class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]"> Jatri</label>
                    </div>
                    <div class="form-group mb-0">
                      <input type="checkbox8" id="read">
                      <label for="read" class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]"> Counter</label>
                    </div>
                    <div class="form-group mb-0">
                      <input type="checkbox9" id="read">
                      <label for="read" class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]"> Agent</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="flex justify-between gap-x-[20px] xl:gap-x-[27px]">
                <div class="w-full">
                <div class="flex justify-between items-center mt-1">
                  <label for="#" class="leading-[16px] xl:leading-[24px] text-[12px] xl:text-[16px] min-w-[123px]">Dhaka - Tangail:</label>
                  <div class="xl:ml-4">
                    <input type="text" class="w-[120px] border border-corporateBorder rounded-[4px] px-2 py-[6px] focus:outline-none mt-1" placeholder="Enter Fare">
                  </div>
                  <div class="flex gap-x-[8px] xl:gap-x-[19px]">
                    <div class="form-group mb-0">
                      <input type="checkbox" id="read10">
                      <label for="read10" class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]"> Jatri</label>
                    </div>
                    <div class="form-group mb-0">
                      <input type="checkbox" id="read11">
                      <label for="read11" class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]"> Counter</label>
                    </div>
                    <div class="form-group mb-0">
                      <input type="checkbox" id="read12">
                      <label for="read12" class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]"> Agent</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="flex justify-between gap-x-[20px] xl:gap-x-[27px]">
                <div class="w-full">
                <div class="flex justify-between items-center mt-1">
                  <label for="#" class="leading-[16px] xl:leading-[24px] text-[12px] xl:text-[16px] min-w-[123px]">Dhaka - Tangail:</label>
                  <div class="xl:ml-4">
                    <input type="text" class="w-[120px] border border-corporateBorder rounded-[4px] px-2 py-[6px] focus:outline-none mt-1" placeholder="Enter Fare">
                  </div>
                  <div class="flex gap-x-[8px] xl:gap-x-[19px]">
                    <div class="form-group mb-0">
                      <input type="checkbox" id="read13">
                      <label for="read13" class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]"> Jatri</label>
                    </div>
                    <div class="form-group mb-0">
                      <input type="checkbox" id="read14">
                      <label for="read14" class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]"> Counter</label>
                    </div>
                    <div class="form-group mb-0">
                      <input type="checkbox" id="read15">
                      <label for="read15" class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]"> Agent</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="flex justify-between gap-x-[20px] xl:gap-x-[27px]">
                <div class="w-full">
                <div class="flex justify-between items-center mt-1">
                  <label for="#" class="leading-[16px] xl:leading-[24px] text-[12px] xl:text-[16px] min-w-[123px]">Dhaka - Tangail:</label>
                  <div class="xl:ml-4">
                    <input type="text" class="w-[120px] border border-corporateBorder rounded-[4px] px-2 py-[6px] focus:outline-none mt-1" placeholder="Enter Fare">
                  </div>
                  <div class="flex gap-x-[8px] xl:gap-x-[19px]">
                    <div class="form-group mb-0">
                      <input type="checkbox" id="read">
                      <label for="read" class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]"> Jatri</label>
                    </div>
                    <div class="form-group mb-0">
                      <input type="checkbox" id="read">
                      <label for="read" class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]"> Counter</label>
                    </div>
                    <div class="form-group mb-0">
                      <input type="checkbox" id="read">
                      <label for="read" class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]"> Agent</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
        <hr class="mt-[12px] xl:mt-[16px] border-t border-corporateBorder">
        <div class="p-4">
          <div class="">
            <div class="flex gap-x-[197px]">
              <div>  
               <p class="text-[#1E88E5] leading-[20px] xl:leading-[24px] text-[14px] xl:text-[16px] font-[500]">BUS INFORMATION & SEAT LAYOUT FARE</p>
                <p class="leading-[20px] xl:leading-[24px] text-[14px] xl:text-[16px] text-primaryText font-[600] mt-3 xl:mt-4">Bus model</p>
                <select name="model" id="model" class="px-3 py-2 border border-corporateBorder rounded-[4px] focus:outline-none mt-[10px] w-full">
                  <option value="Desh Travels, Hino 1J - 36 Seat">Desh Travels, Hino 1J - 36 Seat</option>
                </select>
                <div class="mt-[12px] xl:mt-[14px] bg-[#F1F9F1] rounded-[4px] py-[4px] px-[8px]">
                  <p class="leading-[12px] xl:leading-[16px] text-[10px] xl:text-[12px] text-primaryText">Bus type & class</p>
                  <p class="leading-[12px] xl:leading-[16px] text-[10px] xl:text-[12px] text-primaryText font-[600] mt-1">AC, Mixed Class</p>
                </div>
              </div>

              <div>
                <div class="flex items-center gap-x-[22px] relative z-[100000]" :class=" seatSelectStatus ? 'transform scale-[1.2]' : 'transform scale-100'">
                   <div class="flex gap-x-[15px] xl:gap-x-[20px]" :class="seatSelectStatus ? 'z-[100000]': '' ">
                    <button class="relative" :class=" seatSelectStatus ? 'whiteSeatButton' : 'seatButton'">EX1
                      <img src="../assets/svg/bg_close.svg" alt="Close" class="absolute top-[-6px] right-[-6px] opacity-0" :class=" seatSelectStatus ? 'opacity-100' : 'seatButton'">
                    </button>
                    <button class="relative" :class=" seatSelectStatus ? 'whiteSeatButton' : 'seatButton'">EX2
                      <img src="../assets/svg/bg_close.svg" alt="Close" class="absolute top-[-6px] right-[-6px] opacity-0" :class=" seatSelectStatus ? 'opacity-100' : 'seatButton'">
                    </button>
                    <button class="relative hidden" :class=" seatSelectStatus ? 'whiteSeatButton' : 'seatButton'">EX
                      <img src="../assets/svg/bg_close.svg" alt="Close" class="absolute top-[-6px] right-[-6px] opacity-0" :class=" seatSelectStatus ? 'opacity-100' : 'seatButton'">
                    </button>
                    <button class="relative" :class=" seatSelectStatus ? 'whiteSeatButton' : 'seatButton'">EX3
                      <img src="../assets/svg/bg_close.svg" alt="Close" class="absolute top-[-6px] right-[-6px] opacity-0" :class=" seatSelectStatus ? 'opacity-100' : 'seatButton'">
                    </button>
                    <button class="relative" :class=" seatSelectStatus ? 'whiteSeatButton' : 'seatButton'">EX4
                      <img src="../assets/svg/bg_close.svg" alt="Close" class="absolute top-[-6px] right-[-6px] opacity-0" :class=" seatSelectStatus ? 'opacity-100' : 'seatButton'">
                    </button>
                  </div>
                  <button @click="extraSeat" :class="seatSelectStatus ? 'hidden' : 'absolute right-[-40px]'">
                    <img src="../assets/svg/close-cirlce.svg" alt="Close">
                  </button>
                </div>

                <div class="flex gap-x-[15px] xl:gap-x-[20px] mt-[20px] xl:mt-[24px]">
                    <button class="seatButton">A1</button>
                    <button class="seatButton">A2</button>
                    <button class="seatButton hidden">A1</button>
                    <button class="seatButton">A3</button>
                    <button class="seatButton">A4</button>
                </div>

                <div class="flex gap-x-[15px] xl:gap-x-[20px] mt-[20px] xl:mt-[24px]">
                    <button class="seatButton">B1</button>
                    <button class="seatButton">B2</button>
                    <button class="seatButton hidden">B1</button>
                    <button class="seatButton">B3</button>
                    <button class="seatButton">B4</button>
                </div>

                <div class="flex gap-x-[15px] xl:gap-x-[20px] mt-[20px] xl:mt-[24px]">
                    <button class="seatButton">C1</button>
                    <button class="seatButton">C2</button>
                    <button class="seatButton hidden">C1</button>
                    <button class="seatButton">C3</button>
                    <button class="seatButton">C4</button>
                </div>

                <div class="flex gap-x-[15px] xl:gap-x-[20px] mt-[20px] xl:mt-[24px]">
                    <button class="seatButton">D1</button>
                    <button class="seatButton">D2</button>
                    <button class="seatButton hidden">D1</button>
                    <button class="seatButton">D3</button>
                    <button class="seatButton">D4</button>
                </div>

                <div class="flex gap-x-[15px] xl:gap-x-[20px] mt-[20px] xl:mt-[24px]">
                    <button class="seatButton">E1</button>
                    <button class="seatButton">E2</button>
                    <button class="seatButton hidden">E1</button>
                    <button class="seatButton">E3</button>
                    <button class="seatButton">E4</button>
                </div>

                <div class="flex gap-x-[15px] xl:gap-x-[20px] mt-[20px] xl:mt-[24px]">
                    <button class="seatButton">F1</button>
                    <button class="seatButton">F2</button>
                    <button class="seatButton hidden">F1</button>
                    <button class="seatButton">F3</button>
                    <button class="seatButton">F4</button>
                </div>

                <div class="flex gap-x-[15px] xl:gap-x-[20px] mt-[20px] xl:mt-[24px]">
                    <button class="seatButton">G1</button>
                    <button class="seatButton">G2</button>
                    <button class="seatButton hidden">G1</button>
                    <button class="seatButton">G3</button>
                    <button class="seatButton">G4</button>
                </div>

                <div class="flex gap-x-[15px] xl:gap-x-[20px] mt-[20px] xl:mt-[24px]">
                    <button class="seatButton">H1</button>
                    <button class="seatButton">H2</button>
                    <button class="seatButton hidden">H1</button>
                    <button class="seatButton">H3</button>
                    <button class="seatButton">H4</button>
                </div>

                <div class="flex gap-x-[15px] xl:gap-x-[20px] mt-[20px] xl:mt-[24px]">
                    <button class="seatButton">I1</button>
                    <button class="seatButton">I2</button>
                    <button class="seatButton hidden">I1</button>
                    <button class="seatButton">I3</button>
                    <button class="seatButton">I4</button>
                </div>

                  <div class="flex items-center gap-x-[22px] mt-[20px] xl:mt-[24px] relative z-[100000]" :class=" seatSelectStatus ? 'transform scale-[1.2]' : 'transform scale-100'">
                   <div class="flex gap-x-[15px] xl:gap-x-[20px]" :class="seatSelectStatus ? 'z-[100000]': '' ">
                    <button class="relative" :class=" seatSelectStatus ? 'noSeatButton' : 'lockSeatButton'">
                      <img class="m-auto" src="../assets/svg/lock.svg" alt="Lock">
                      <img src="../assets/svg/bg_close.svg" alt="Close" class="absolute top-[-6px] right-[-6px] opacity-0" :class=" seatSelectStatus ? 'opacity-100 hidden' : 'seatButton'">
                    </button>
                    <button class="relative" :class=" seatSelectStatus ? 'whiteSeatButton' : 'seatButton'">J2
                      <img src="../assets/svg/bg_close.svg" alt="Close" class="absolute top-[-6px] right-[-6px] opacity-0" :class=" seatSelectStatus ? 'opacity-100' : 'seatButton'">
                    </button>
                    <button class="relative hidden" :class=" seatSelectStatus ? 'whiteSeatButton' : 'seatButton'">J
                      <img src="../assets/svg/bg_close.svg" alt="Close" class="absolute top-[-6px] right-[-6px] opacity-0" :class=" seatSelectStatus ? 'opacity-100' : 'seatButton'">
                    </button>
                    <button class="relative" :class=" seatSelectStatus ? 'whiteSeatButton' : 'seatButton'">J3
                      <img src="../assets/svg/bg_close.svg" alt="Close" class="absolute top-[-6px] right-[-6px] opacity-0" :class=" seatSelectStatus ? 'opacity-100' : 'seatButton'">
                    </button>
                    <button class="relative" :class=" seatSelectStatus ? 'whiteSeatButton' : 'seatButton'">J4
                      <img src="../assets/svg/bg_close.svg" alt="Close" class="absolute top-[-6px] right-[-6px] opacity-0" :class=" seatSelectStatus ? 'opacity-100' : 'seatButton'">
                    </button>
                  </div>
                  <button @click="extraSeat" :class="seatSelectStatus ? 'hidden' : 'absolute right-[-40px]'">
                    <img src="../assets/svg/close-cirlce.svg" alt="Close">
                  </button>
                </div>

                <div class="flex items-center gap-x-[22px] mt-[20px] xl:mt-[24px] relative z-[100000]" :class=" seatSelectStatus ? 'transform scale-[1.2]' : 'transform scale-100'">
                  <div class="flex gap-x-[15px] xl:gap-x-[20px]" :class="seatSelectStatus ? 'z-[100000]': '' ">
                    <button class="relative" :class=" seatSelectStatus ? 'whiteSeatButton' : 'seatButton'">K1
                      <img src="../assets/svg/bg_close.svg" alt="Close" class="absolute top-[-6px] right-[-6px] opacity-0" :class=" seatSelectStatus ? 'opacity-100' : 'seatButton'">
                    </button>
                    <button class="relative" :class=" seatSelectStatus ? 'whiteSeatButton' : 'seatButton'">K2
                      <img src="../assets/svg/bg_close.svg" alt="Close" class="absolute top-[-6px] right-[-6px] opacity-0" :class=" seatSelectStatus ? 'opacity-100' : 'seatButton'">
                    </button>
                    <button class="relative hidden" :class=" seatSelectStatus ? 'whiteSeatButton' : 'seatButton'">K
                      <img src="../assets/svg/bg_close.svg" alt="Close" class="absolute top-[-6px] right-[-6px] opacity-0" :class=" seatSelectStatus ? 'opacity-100' : 'seatButton'">
                    </button>
                    <button class="relative" :class=" seatSelectStatus ? 'whiteSeatButton' : 'seatButton'">K3
                      <img src="../assets/svg/bg_close.svg" alt="Close" class="absolute top-[-6px] right-[-6px] opacity-0" :class=" seatSelectStatus ? 'opacity-100' : 'seatButton'">
                    </button>
                    <button class="relative" :class=" seatSelectStatus ? 'whiteSeatButton' : 'seatButton'">K4
                      <img src="../assets/svg/bg_close.svg" alt="Close" class="absolute top-[-6px] right-[-6px] opacity-0" :class=" seatSelectStatus ? 'opacity-100' : 'seatButton'">
                    </button>
                  </div>
                  <button @click="extraSeat" :class="seatSelectStatus ? 'hidden' : 'absolute right-[-40px]'">
                    <img src="../assets/svg/close-cirlce.svg" alt="Close">
                  </button>
                </div>

                <div class="flex justify-center z-[10000] relative">
                  <button @click="extraSeat" class="bg-white flex gap-x-3 justify-center items-center text-[#48A43F] rounded-full px-5 py-3 leading-[12px] text-[10px] xl:leading-[16px] xl:text-[12px] mt-5" :class="seatSelectStatus ? '' : 'hidden'" data-v-0d08c475="">
                  <span data-v-0d08c475=""><img src="../assets/svg/green-save.svg" alt="" data-v-0d08c475=""></span> Save changes
                </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-white rounded-[8px] mt-4">
      <div class="p-4">
        <p class="text-primaryText leading-[20px] text-[12px] xl:leading-[24px] xl:text-[16px] font-[600] mb-[17px]">
          Update for an period</p>

        <!-- table start -->
        <table class="min-w-full">
          <thead>
          <tr class="border border-corporateBorder">
            <th class="border-r border-[#EDEDED] text-4 leading-6 font-[400] p-[10px] uppercase w-1/2" scope="col"
                style="border-radius:8px 0 0 0;"> DATE
            </th>
            <th class="text-4 leading-6 font-[400] p-[10px] uppercase flex items-center justify-center gap-x-5" scope="col"
                style="border-radius:0 8px 0 0;"> <span>Check for all</span> <span><div class="form-group mb-0"><input id="readAll" type="checkbox"><label class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]"
                                                                                   for="readAll"></label>
              </div></span>
            </th>
          </tr>
          </thead>

          <tbody>
          <tr class="bg-corporateBg border-l border-r border-corporateBorder">
            <td class="border-r border-[#EDEDED] text-4 text-center leading-6 p-[16px]">18 July 2022</td>
            <td class="text-4 text-center leading-6 p-[16px]">
              <div class="form-group mb-0"><input id="read1" type="checkbox"><label class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]"
                                                                                   for="read1"></label>
              </div>
            </td>
          </tr>
          <tr class="border-l border-r border-corporateBorder">
            <td class="border-r border-[#EDEDED] text-4 text-center leading-6 p-[16px]">18 July 2022</td>
            <td class="text-4 text-center leading-6 p-[16px]">
              <div class="form-group mb-0"><input id="read2" type="checkbox"><label class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]"
                                                                                   for="read2"></label>
              </div>
            </td>
          </tr>
          <tr class="bg-corporateBg border-l border-r border-corporateBorder">
            <td class="border-r border-[#EDEDED] text-4 text-center leading-6 p-[16px]">18 July 2022</td>
            <td class="text-4 text-center leading-6 p-[16px]">
              <div class="form-group mb-0"><input id="read3" type="checkbox"><label class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]"
                                                                                   for="read3"></label>
              </div>
            </td>
          </tr>
          <tr class="border-l border-r border-corporateBorder">
            <td class="border-r border-[#EDEDED] text-4 text-center leading-6 p-[16px]">18 July 2022</td>
            <td class="text-4 text-center leading-6 p-[16px]">
              <div class="form-group mb-0"><input id="read4" type="checkbox"><label class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]"
                                                                                   for="read4"></label>
              </div>
            </td>
          </tr>
          <tr class="bg-corporateBg border-l border-r border-corporateBorder">
            <td class="border-r border-[#EDEDED] text-4 text-center leading-6 p-[16px]">18 July 2022</td>
            <td class="text-4 text-center leading-6 p-[16px]">
              <div class="form-group mb-0"><input id="read5" type="checkbox"><label class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]"
                                                                                   for="read5"></label>
              </div>
            </td>
          </tr>
          <tr class="border-l border-r border-corporateBorder">
            <td class="border-r border-[#EDEDED] text-4 text-center leading-6 p-[16px]">18 July 2022</td>
            <td class="text-4 text-center leading-6 p-[16px]">
              <div class="form-group mb-0"><input id="read6" type="checkbox"><label class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]"
                                                                                   for="read6"></label>
              </div>
            </td>
          </tr>
          <tr class="bg-corporateBg border-l border-r border-b border-corporateBorder">
            <td class="border-r border-[#EDEDED] text-4 text-center leading-6 p-[16px]">18 July 2022</td>
            <td class="text-4 text-center leading-6 p-[16px]">
              <div class="form-group mb-0"><input id="read6" type="checkbox"><label class="text-primaryText leading-[16px] text-[10px] xl:leading-[20px] xl:text-[14px] font-[400]"
                                                                                   for="read6"></label>
              </div>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>


      <div class="flex justify-center items-center gap-x-4 my-5">
        <button class="bg-[#48A43F] flex gap-x-3 justify-center items-center text-white rounded-full px-5 py-3 leading-[12px] text-[10px] xl:leading-[16px] xl:text-[12px]" data-v-0d08c475="">
          <span data-v-0d08c475=""><img src="/src/assets/svg/save.svg" alt="" data-v-0d08c475=""></span> Save changes
        </button>
        <router-link to="" class="nextStepButton flex items-center gap-[10px]">
           Next step<span><img src="../assets/svg/right-white-arrow.svg" class="h-[9.33px] w-[9.33px]" alt=""></span>
        </router-link>
      </div>


      <div class="bg-white rounded-[8px]">
      <div class="p-4 flex justify-between items-center">
        <div>
          <p class="text-primaryText leading-[28px] text-[20px] xl:leading-[32px] xl:text-[24px] font-[600] mb-[8px]">Cancel trip</p>
          <p class="text-primaryText ">By clicking “Cancel trip”, it will cancel the trip and the tickets in the trip. This action could not be undone.</p>
        </div>
        <div>
          <button @click="openModal" class="border border-corporateBorder items-center text-corporateError rounded-full px-6 py-3 leading-[12px] text-[10px] xl:leading-[16px] xl:text-[12px]">
          Cancel trip
          </button>
          <Dialog header="Cancel Trip" v-model:visible="displayModal" :breakpoints="{'960px': '75vw', '640px': '90vw'}" :style="{width: '360px'}" :modal="true">
            <p class="text-[14px] leading-5 text-[#4D4D4F] text-center">By confirming, the trip will be cancelled and all its ticket. You will not be able to perform any action in this trip further. Are you sure you want to cancel the trip?</p>
           <div class="mt-[30px] flex gap-x-8 justify-end items-center">
              <button @click="closeModal" icon="pi pi-times" class="p-button-text text-[12px] leading-4 font-[500] text-[#1E88E5]"> No, thanks</button>
              <button @click="closeModal" icon="pi pi-check" autofocus class="bg-[#F04935] px-6 py-3 text-white text-[12px] leading-4 font-[500] rounded-[100px]">Cancel trip</button>
          </div>
        </Dialog>
        </div>
      </div>
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
padding: 8px;
display: inline-block;
position: relative;
vertical-align: middle;
cursor: pointer;
margin-right: 11px;
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
top: 1px;
left: 7px;
width: 6px;
height: 14px;
border:2px solid white;
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
      displayModal: false,
      seatSelectStatus: false,
      cities: [
        {name: 'Own', code: 'NY'},
        {name: 'Third Party', code: 'RM'},
        // {name: 'London', code: 'LDN'},
        // {name: 'Istanbul', code: 'IST'},
        // {name: 'Paris', code: 'PRS'}
      ]
    }
  },
  methods: {
        openModal() {
            this.displayModal = true;
        },
        closeModal() {
            this.displayModal = false;
        },
        extraSeat() {
          this.seatSelectStatus = !this.seatSelectStatus
      }
    }
}  
</script>


