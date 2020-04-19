<!--  -->
<template>
  <!-- ref -->
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "Scroll",
  data() {
    return {
      scroll: null
    };
  },
  mounted() {
    const bscroll = new BScroll(this.$refs.wrapper, {
        click:true,
        taps : true,
        pullUpLoad : true
    });

    bscroll.on('pullingUp',()=>{
      
    })
  }
};
</script>
<style scoped>

</style>