<template>
  <div class="flex flex-col h-screen justify-center items-center bg-[#FFFFFF] font-inter">

    <img alt="" class="w-[93px] h-[46px]" src="../assets/logo/login_logo.svg">
    <p class="text-[18px] leading-[28px] font-[700] text-center mt-[23px]">Forgot password</p>
    <p class="leading-[20px] text-[14px] font-[500] text-[#8D8D8F] font-inter text-center mb-4">Enter the email on your
      account and we will <br> sent you a password reset link.</p>
    <label class="mr-[290px] text-[#4D4D4F] leading-[16px] text-[12px] font-[500] pb-[8px]" for="phone">phone</label>
    <input class="border border-[#DBDBDB] p-2 rounded-[4px] w-[320px] placeholder:text-[#C8C8C8] placeholder:text-[14px] placeholder:font-[500]"
           placeholder="example@domain.com"
           type="text">

    <button class="w-[320px] bg-[#f04935] mt-[24px] text-white p-2 rounded-full font-[500] leading-[20px] text-[14px]">
      Reset password
    </button>
    <p class="pt-[24px] text-corporateSecondaryBlue leading-[20px] text-[14px] font-[500]">Back to log in</p>
  </div>
</template>