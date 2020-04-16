<template>
  <div class="tab-bar-item" @click="itemClick()" >
    <div v-if="!isActive">
      <slot name="item-inco"></slot>
    </div>
    <div v-else>
      <slot name="item-inco-active"></slot>
    </div>
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script scoped>
export default {
  name: "TabBarItem",
  data() {
      return {
          // isActive : true
      }
  },
  props : {
    path : String,
    activeColor : String
  },
  computed: {
    isActive(){
      return !this.$route.path.indexOf(this.path)
    },
    activeStyle(){
      return this.isActive ? {color:this.activeColor} : {}
    }
  },
  methods: {
      itemClick(){
        if(this.$route.path!=this.path){
          this.$router.push(this.path)
        }
      }
  },
};
</script>

<style>
#tab-bar {
  display: flex;
  background-color: #f6f6f6;

  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;

  box-shadow: 0px -1px 1px rgba(100, 100, 100, 0.1);
}
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
}
.tab-bar-item img {
  height: 24px;
  width: 24;
}

</style>
