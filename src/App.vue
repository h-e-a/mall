<template>
  <div id="app">
    <img alt="Vue logo" src="~assets/logo.png">
    <main-tab-bar/>
    <router-view/>
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
</style>
