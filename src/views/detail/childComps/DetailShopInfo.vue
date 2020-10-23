<template>
    <div class="detail-shop-info" v-if="Object.keys(shop).length!==0">
        <div class="shop-top">
          <img :src="shop.logo" class="shop-img">
          <span class="shop-name">{{shop.name}}</span>
        </div>
        <div class="shop-center">
            <div class="shop-sells-goodsCount">
                <div class="shop-sells">
                    <div class="shop-sells-count">{{shop.sells | sellCountFilter}}</div>
                    <div>总销量</div>
                </div>
                <div class="shop-goods">
                    <div class="shop-goods-count">{{shop.goodsCount | sellCountFilter}}</div>
                    <div>总销量</div>
                </div>
            </div>
            <div class="split-line"></div>
            <div class="shop-score">
                <div v-for="(item,index) in shop.score" :key="index" class="score-list">
                    <span>{{item.name}}</span>
                    <span class="score" :class="{'score-better':item.isBetter}">{{item.score}}</span>
                    <span class="score-text" :class="{'score-text-better':item.isBetter}">{{item.isBetter?'高':'低'}}</span>
                </div>
            </div>
        </div>
        <div class="shop-bottom">
            <div class=" shop-button">进店逛逛</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "DetailShopInfo",
        props:{
            shop:{
                type:Object,
                default(){
                    return{}
                }
            }

        },
        filters:{
            sellCountFilter:function (value) {
                if(value<10000)return value;
                return (value/10000).toFixed(1)+'万'
            }
        }
    }
</script>

<style scoped>
   .detail-shop-info{
       padding: 8px;
       border-bottom: 5px solid rgba(245,245,245,0.7);
   }
   .shop-top{
       position: relative;
   }
    .shop-img{
        width: 50px;
        height: 50px;
        border-radius: 25px;
        border: 1px solid rgba(200,200,200,0.5);
    }
    .shop-name{
        position: absolute;
        margin-top: 20px;
        padding-left: 10px;
    }
    .shop-center{
        padding-top: 20px;
        display: flex;
        justify-content: space-around;
    }
    .shop-sells-goodsCount{
        display: flex;
        justify-content: space-between;
        text-align: center;
        width: 33vw;

    }
    .shop-sells ,.shop-goods{
     padding-top: 10px;
    }
    .shop-sells-count,.shop-goods-count{
     padding-bottom: 5px;
    }
    .score-list{
        padding-bottom: 6px;
    }
    .score{
        color: green;
        padding: 0 8px;
        display:-moz-inline-box;
        display:inline-block;
        width:30px;
    }
    .score-text {
        color: white;
        background-color: green;
    }
    .score-better{
        color: red;
    }
    .score-text-better{
        background-color: red;
    }
    .shop-bottom{

        text-align: center;
        padding: 10px 30vw;
    }
    .shop-button{
        padding: 5px;
        border-radius: 10px;
        background-color: rgba(244,246,250,1);
    }
    .split-line{
        height: 60px;
        border-right: 1px solid gray;
    }

</style>