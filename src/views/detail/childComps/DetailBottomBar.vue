<template>
    <div class="bottom-bar">
          <div class="bar-item">
              <img src="~assets/img/detail/icon01.png">
              <p>客服</p>
          </div>
          <div class="bar-item">
            <img src="~assets/img/detail/icon02.png">
            <p>店铺</p>
        </div>
        <div class="bar-item">
            <img src="~assets/img/detail/icon03.png">
            <p>收藏</p>
        </div>
        <div class="btn bar-car" @click="addToCart">加入购物车</div>
        <div class="btn bar-pay">购买</div>
    </div>
</template>

<script>
    export default {
        name: "DetailBottomBar",
        methods:{
            addToCart(){
                this.$emit('addToCart')
            }
        }
    }
</script>

<style scoped>
      .bottom-bar{
          height: 49px;
          background-color: white;
          position: fixed;
          bottom: 0px;
          left: 0;
          right: 0;
          display: flex;
      }
    .bar-item{
        width: 16%;
        margin-top: 6px;
        text-align: center;
        font-size: 12px;
    }
    .bar-item img{
        width: 22px;
        height: 22px;
    }
    .btn{
        width: 26%;
        line-height: 49px;
        text-align: center;
    }
    .bar-car{
        background-color: #F9CD0B;
    }
    .bar-pay{
        color: #fff;
        background-color: var(--color-high-text);
    }

</style>