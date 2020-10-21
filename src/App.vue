<template>
  <div id="app">
<!--    <img alt="Vue logo" src="~assets/logo.png">-->
    <router-view/>
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
