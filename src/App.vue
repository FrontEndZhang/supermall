<template>
  <div id="app">
    <!-- 页面上面 -->
    <router-view></router-view>
    <!-- 页面下面 -->
    <tab-bar></tab-bar>
  </div>
</template>

<script>
import TabBar from "components/common/tabbar/TabBar"
export default {
  name: 'App',
  components: {
    TabBar
  }
}
</script>

<style>
  @import "./assets/css/base.css"
</style>
