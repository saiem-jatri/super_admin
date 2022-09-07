<template>
<div>
  <div class="flex flex-col h-screen justify-center items-center bg-[#FFFFFF] font-inter w-full">

    <img src="./src/assets/logo/login_logo.svg" class="w-[93px] h-[46px]" alt="">
    <p class="text-[18px] leading-[28px] font-[700] text-center mt-[23px]">Log in</p>
    <p class="leading-[20px] text-[14px] font-[500] text-[#8D8D8F] font-inter">Enter your account details below.</p>
    <label for="phone" class="mr-[290px] text-[#4D4D4F] leading-[16px] text-[12px] font-[500] pb-[8px]">phone</label>
    <input type="text" class="border border-[#DBDBDB] p-2 rounded-[4px] w-[320px] placeholder:text-[#C8C8C8] placeholder:text-[14px] placeholder:font-[500]" placeholder="01XXXXXXXXX">


    <label for="password" class="mr-[270px] text-[#4D4D4F] leading-[16px] text-[12px] font-[500] pb-[8px] pt-[16px]">Password</label>
    <input type="text" class="border border-[#DBDBDB] p-2 rounded-[4px] w-[320px] placeholder:text-[#C8C8C8] placeholder:text-[14px] placeholder:font-[500]" placeholder="****************">

    <div class="relative flex justify-center items-center gap-x-2 mr-36 pt-[8px]">
      <img src="./src/assets/svg/eye.svg" class="absolute -right-36 bottom-11 h-[10px] w-[12px]">
      <input type="checkbox" class="w-[15px] h-[15px] border-2 border-[#8D8D8F]">
      <span class="font-[500] leading-[20px] text-[14px]">Remember password</span>
    </div>
    <button class="w-[320px] bg-[#f04935] mt-[24px] text-white p-2 rounded-full font-[500] leading-[20px] text-[14px]">Log in</button>
  </div>
</div>
</template>