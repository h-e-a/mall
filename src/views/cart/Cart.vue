<template>
    <div class="cart">
        <nav-bar class="cart-nav"><div slot="center">购物车({{cartLength}})</div></nav-bar>
        <cart-list />
        <cart-bottom-bar />
    </div>
</template>

<script>
    import NavBar from "components/common/navbar/NavBar";
    import CartList from "./childComps/CartList";
    import CartBottomBar from "./childComps/CartBottomBar";

    import {mapGetters} from 'vuex'
    export default {
        name: "Cart",
        components:{
            NavBar,
            CartList,
            CartBottomBar
        },
        computed:{
         ...mapGetters(['cartLength'])
        }
    }
</script>

<style scoped>

  .cart-nav{
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      color: white;
      background-color: var(--color-high-text);
      font-weight: 700;
  }

</style>