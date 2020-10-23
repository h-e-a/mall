<template>
  <tab-bar>
    <tab-bar-item path="/home" activeColor="red">
      <img slot="item-icon" src="~assets/img/tabbar/icon01.png"  alt=""/>
      <img slot="item-active-icon" src="~assets/img/tabbar/icon01_active.png" alt=""/>
      <div slot="item-title">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/category" activeColor="red">
      <img slot="item-icon" src="~assets/img/tabbar/icon02.png"  alt=""/>
      <img slot="item-active-icon" src="~assets/img/tabbar/icon02_active.png" alt=""/>
      <div slot="item-title">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/cart" activeColor="red">
      <img slot="item-icon" src="~assets/img/tabbar/icon03.png"  alt=""/>
      <img slot="item-active-icon" src="~assets/img/tabbar/icon03_active.png" alt=""/>
      <div slot="item-title">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/mine" activeColor="red">
      <img slot="item-icon" src="~assets/img/tabbar/icon04.png"  alt=""/>
      <img slot="item-active-icon" src="~assets/img/tabbar/icon04_active.png" alt=""/>
      <div slot="item-title">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
  import TabBar from "components/common/tabbar/TabBar";
  import TabBarItem from "components/common/tabbar/TabBarItem";

  export default {
        name: "MainTabBar",
    components:{
      TabBar,
      TabBarItem
    }
    }
</script>

<style scoped>

</style>
