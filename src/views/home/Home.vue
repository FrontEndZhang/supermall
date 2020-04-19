<!--  -->
<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <scroll class="content">
      <home-swiper :banners="banners"></home-swiper>
      <home-recommend-view :recommends="recommends"></home-recommend-view>
      <feature-view></feature-view>
      <tab-control :titles="['流行','精品','新款']" @tabClick="tabClick"></tab-control>
      <goods-list :goods="showGoods"></goods-list>
    </scroll>
  </div>
</template>

<script>
// 组件
import NavBar from "components/common/navbar/NavBar";
import Scroll from "components/common/scroll/Scroll";
import TabControl from "components/content/tabControl/TabControl";
import GoodsList from "components/content/goods/GoodsList";

import HomeSwiper from "views/home/childComps/HomeSwiper";
import HomeRecommendView from "views/home/childComps/HomeRecommendView";
import FeatureView from "views/home/childComps/FeatureView";

// js函数或者库
import { getHomeMultidata, getHomeGoods } from "network/home";

export default {
  name: "Home",
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      currentType: "pop"
    };
  },
  methods: {
    getHomeMultidata() {
      // 1.请求多个数据
      getHomeMultidata()
        .then(res => {
          this.banners = res.data.data.banner.list;
          this.recommends = res.data.data.recommend.list;
        })
        .catch(err => {
          console.log(err);
        });
    },
    // 2.请求商品数据
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page)
        .then(res => {
          this.goods[type].list.push(...res.data.data.list);
          this.goods[type].page += 1;
        })
        .catch(err => {
          console.log(err);
        });
    },
    // 3.监听子组件传来事件
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
        default:
          this.currentType = "pop";
          break;
      }
    }
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    }
  },
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommendView,
    FeatureView,
    TabControl,
    GoodsList,
    Scroll
  },
  created() {
    this.getHomeMultidata();

    // 商品数据
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");

    // 监听item图片加载完成
    this.$bus.$on('itemImageLoad',()=>{
      console.log(1111);
      
    })
  },

};
</script>

<style scoped>
#home {
  height: 100vh;
  padding-top: 44px;
  position: relative;
}
.home-nav {
  /* 在base.css定义了全局变量颜色 */
  background-color: var(--color-tint);
  color: #fff;

  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 10;
}
.content {
  position: absolute;
  top: 44px;
  bottom: 47px;
  left: 0;
  right: 0;
  overflow: hidden;
}
/* .content {
    height:calc(100% - 93px);
    overflow: hidden;
    padding-top: 87px;
} */
</style>