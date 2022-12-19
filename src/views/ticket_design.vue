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
  <!--  left-0 right-10 bottom-0-->
  <!-- body start-->
  <div class="py-6 px-[30px]">
    <div class="bg-white p-4 rounded-md">
      <p class="text-primaryText font-bold text-lg leading-6">Ticket Format</p>
      <div class="mt-6 flex justify-between items-center gap-x-[40px] xl:gap-x-[60px]">
        <div>
          <p class="text-primaryText font-bold text-[14px] leading-6 ml-4">1 part ticket</p>
          <div class="">
            <div class="group relative overflow-hidden mt-6 mx-6 ">
              <img alt="chef1" src="../assets/svg/1st_ticket.svg">
              <div class="absolute top-0 left-0 right-0 bottom-0 group-hover:bg-black group-hover:opacity-50"></div>
              <div
                  class="absolute right-[40%] top-full mx-auto text-center group-hover:top-[40%] group-hover:right-[40%] transition-all duration-1000 ease-in-out">
                <div
                    class="h-10 w-10 rounded-full border border-white text-center text-xs flex justify-center items-center text-white cursor-pointer">
                  <router-link class="" to="/ticketEdit">Edit
                  </router-link>
                </div>
              </div>


            </div>
          </div>
        </div>
        <div>
          <p class="text-primaryText font-bold text-[14px] leading-6 ml-4">2 part ticket</p>
          <div>
            <div class="group relative overflow-hidden mt-6 mx-6 ">
              <img alt="chef1" src="../assets/svg/2_part_ticket.svg">
              <div class="absolute top-0 left-0 right-0 bottom-0 group-hover:bg-black group-hover:opacity-50"></div>
              <div
                  class="absolute right-[40%] top-full mx-auto text-center group-hover:top-[40%] group-hover:right-[40%] transition-all duration-1000 ease-in-out">
                <div
                    class="h-10 w-10 rounded-full border border-white text-center text-xs flex justify-center items-center text-white cursor-pointer">
                  <router-link class="" to="/ticketEdit">Edit
                  </router-link>
                </div>
              </div>


            </div>
          </div>
        </div>
        <div>
          <p class="text-primaryText font-bold text-[14px] leading-6 ml-4">3 part ticket</p>
          <div>
            <div class="group relative overflow-hidden mt-6 mx-6 ">
              <img alt="chef1" src="../assets/svg/3_part_ticket.svg">
              <div class="absolute top-0 left-0 right-0 bottom-0 group-hover:bg-black group-hover:opacity-50"></div>
              <div
                  class="absolute right-[40%] top-full mx-auto text-center group-hover:top-[40%] group-hover:right-[40%] transition-all duration-1000 ease-in-out">
                <div
                    class="h-10 w-10 rounded-full border border-white text-center text-xs flex justify-center items-center text-white cursor-pointer">
                  <router-link class="" to="/ticketEdit">Edit
                  </router-link>
                </div>
              </div>


            </div>
          </div>
        </div>
        <div>
          <p class="text-primaryText font-bold text-[14px] leading-6 ml-4">4 part ticket</p>
          <div>
            <div class="group relative overflow-hidden mt-6 mx-6 ">
              <img alt="chef1" src="../assets/svg/4_part_ticket.svg">
              <div class="absolute top-0 left-0 right-0 bottom-0 group-hover:bg-black group-hover:opacity-50"></div>
              <div
                  class="absolute right-[40%] top-full mx-auto text-center group-hover:top-[40%] group-hover:right-[40%] transition-all duration-1000 ease-in-out">
                <div
                    class="h-10 w-10 rounded-full border border-white text-center text-xs flex justify-center items-center text-white cursor-pointer">
                  <router-link class="" to="/ticketEdit">Edit
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


  </div>
</template>
