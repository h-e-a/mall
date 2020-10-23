<template>
  <div id="app">
    <keep-alive exclude="Detail">
<!--      exclude 去除这个页面的保持状态-->
        <router-view/>
    </keep-alive>

    <main-tab-bar class="main-tab-bar"/>
  </div>
</template>

<script>
import MainTabBar from "components/content/mainTabBar/MainTabBar";

export default {
  name: 'app',
  components: {
   MainTabBar
  }
}
</script>

<style>
  @import "assets/css/base.css";
    .main-tab-bar{
        z-index: 9;
    }
</style>
