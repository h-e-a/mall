<template>
    <div class="detail-goods-info" v-if="Object.keys(detailInfo).length!==0">
        <div class="goods-info-wrap">
            <div class="goods-info-wrap-top"></div>
            <div class="goods-info-description">{{detailInfo.desc}}</div>
            <div class="goods-info-wrap-bottom"></div>
        </div>
        <div class="goods-info-title">{{detailInfo.detailImage[0].key}}</div>
        <div class="goods-info-img" v-for="(item,index) in detailInfo.detailImage[0].list" :key="index">
            <img :src="item" alt="" @load="imgLoad">
        </div>
    </div>
</template>

<script>
    export default {
        name: "DetailGoodsInfo",
        props:{
            detailInfo:{
                type:Object,
                default(){
                    return{}
                }
            }
        },
        methods:{
            imgLoad(){
                this.$emit('imgLoad')
            }
        }
    }
</script>

<style scoped>
    .goods-info-wrap{
       position: relative;
       margin: 8px;
          padding: 8px 0;
      }
    .goods-info-wrap-top{
        width: 60px;
        height: 1px;
        background-color: #333;
        position: absolute;
        left: 8px;

    }
    .goods-info-wrap-top::before{
        position: absolute;
        top:-5px;
        display: block;
        content: '';
        width: 5px;
        height: 5px;
        background-color: #333;
    }
    .goods-info-description{
        padding: 10px 4px;
    }
    .goods-info-wrap-bottom{
        width: 60px;
        height: 1px;
        background-color: #333;
        position: absolute;
        right: 8px;
        bottom: 0;

    }
    .goods-info-wrap-bottom::after{
        position: absolute;
        right: 0;
        top: -3.5px;
        display: block;
        content: '';
        width: 5px;
        height: 5px;
        background-color: #333;
    }
    .goods-info-title{
        padding: 8px;
    }
    .goods-info-img img{
        width: 100%;
    }
</style>