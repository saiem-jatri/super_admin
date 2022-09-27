<template>
  <div class="font-semibold text-sm list-none block">
    <div
        class="flex items-center justify-between p-[8px] w-full text-black leading-[20px] text-[14px] font-[500] cursor-pointer"
        @click="toggleShow">
      {{ title }}
      <img alt=""
           class="w-[12px] h-[7px]"
           src="../assets/svg/down_arrow.svg">
    </div>
    <ul :class="this.class" class="overflow-hidden dropdown-menu font-normal">
      <slot></slot>
    </ul>
  </div>
</template>

<style scoped>
.dropdown-menu {
  transition: 300ms;
}

svg.rotate-90 {
  transform: rotate(90deg);
}
</style>
<script>
export default {
  props: ["title", "height"],
  data() {
    return {
      showMenu: false
    };
  },
  methods: {
    toggleShow() {
      this.showMenu = !this.showMenu;
    }
  },
  computed: {
    class() {
      return this.showMenu ? this.height : "h-0";
    }
  }

}
</script>