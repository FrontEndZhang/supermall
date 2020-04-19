<!--  -->
<template>
  <div>
     <img :src="goodsItem.show.img" alt="" srcset="" @load="imageLoad()">
     <div>
         <p>
             {{goodsItem.title}}
         </p>
         <span class="price">
             {{goodsItem.price}}
         </span>
         <span class="collect">
             {{goodsItem.cfav}}
         </span>
     </div>
  </div>
</template>

<script>
export default {
    name : 'GoodsListItem',
    props : {
        goodsItem : {
            type : Object,
            default(){
                return {}
            }
        }
    },
    methods: {
        imageLoad(){
            // 事件总线
            this.$bus.$emit('itemImageLoad')
        }
    },
};
</script>
<style scoped>
/* @import url(); 引入css类 */
</style>