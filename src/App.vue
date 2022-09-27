<script setup>
import {RouterLink, RouterView} from 'vue-router'
import TopBarNav from './components/TopBarNav.vue';
</script>

<template>
  <div class="flex bg-corporateBg">
    <!-- Side Nav bar -->
    <SidebarNav></SidebarNav>
    <!-- side nav bar end -->
    
    <div class="h-screen w-full overflow-y-auto bg-[#F7F7F7]"> 
      <TopBarNav></TopBarNav>
      <RouterView/>
    </div>

  </div> 
</template>


