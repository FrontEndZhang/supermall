<template>
  <div id="tab-bar">
    <!-- path="/home" -->
    <tab-bar-item  path="/home" activeColor="green">
      <img slot="item-inco" src="~assets/img/tabbar/home.svg" alt srcset />
      <img slot="item-inco-active" src="~assets/img/tabbar/home_active.svg" alt="">
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <!-- path='/category' -->
    <tab-bar-item path='/category' activeColor="red">
      <img slot="item-inco" src="~assets/img/tabbar/category.svg" alt srcset />
      <img slot="item-inco-active" src="~assets/img/tabbar/category_active.svg" alt="">
      <div slot="item-text">类别</div>
    </tab-bar-item>
    <!-- path='/profile' -->
    <tab-bar-item path='/profile'  activeColor="blue">
      <img slot="item-inco" src="~assets/img/tabbar/profile.svg" alt srcset />
      <img slot="item-inco-active" src="~assets/img/tabbar/profile_active.svg" alt="">
      <div slot="item-text">我的</div>
    </tab-bar-item>
    <!-- path='/cart' -->
    <tab-bar-item  path='/cart' activeColor="yellow">
      <img slot="item-inco" src="~assets/img/tabbar/shopcart.svg" alt srcset />
      <img slot="item-inco-active" src="~assets/img/tabbar/shopcart_active.svg" alt="">
      <div slot="item-text">购物</div>
    </tab-bar-item>
  </div>
</template>

<script>
import TabBarItem from "./TabBarItem";
export default {
  name: "TaBBar",
  components: {
    TabBarItem
  }
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
.tab-bar-item > img {
  height: 24px;
  width: 24;
}
</style>
