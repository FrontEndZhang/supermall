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
  props: {
    probeType: {
      Type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    const bscroll = new BScroll(this.$refs.wrapper, {
      click: true,
      taps: true,
      pullUpLoad: this.pullUpLoad,
      probeType: this.probeType
    });

    // 滑动事件
    this.scroll = bscroll;
    bscroll.on("scroll", position => {
      this.$emit("scroll", position);
    });
    //上拉刷新事件
    if (this.pullUpLoad) {
      bscroll.on("pullingUp", () => {
        this.$emit("pullingUp");
      });
    }
  },
  methods: {
    scrollTo(x, y, time) {
      this.scroll.scrollTo(x, y, time);
    },
    // 图片加载完刷新函数
    refresh() {
      this.scroll && this.scroll.refresh();
    }
  }
};
</script>
<style scoped>
</style>