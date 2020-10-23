<template>
<!--    Object.keys 判断一个对象是否为空 为空所有都不渲染 -->
    <div class="detail-base-info" v-if="Object.keys(goods).length!==0">
        <div class="info-title">{{goods.title}}</div>
        <div class="info-price">
            <span class="n-price">￥{{goods.newPrice}}</span>
            <span class="o-price">{{goods.oldPrice}}</span>
            <span class="discount" v-if="goods.discount">{{goods.discount}}</span>
        </div>
        <div class="info-other">
            <span v-for="item in goods.columns">{{item}}</span>
        </div>
        <div class="info-service">
            <span class="info-services-item" v-for=" (item,index) in goods.services"
                  :key="index"
                  v-if="index==goods.services.length-1||index==goods.services.length-2">
                <img :src="goods.services[index].icon">
                <span>{{goods.services[index].name}}</span>
            </span>
<!--            v-if判断服务器传过来的数据 只显示数组中最后的两项index-->
        </div>
    </div>
</template>

<script>
    export default {
        name: "DetailBaseInfo",
        props:{
            goods:{
                type:Object,
                default(){
                    return {}
                }
            }
        }
    }
</script>

<style scoped>
   .detail-base-info{
       padding: 8px 8px 0px 8px;
       border-bottom: 5px solid rgba(245,245,245,0.7);
   }
    .info-title{
        font-size: 20px;
        color: var(--color-text);
        padding-bottom: 8px;
    }
    .info-price{
        position: relative;
    }
    .n-price{
        color: var(--color-high-text);
        font-size: 25px;
        padding-right: 5px;
    }
    .o-price{
        /*//给价格设置横线*/
        text-decoration:line-through;
        font-size: 18px;
        color: var(--color-opacity-text);
    }
    .discount{
        position: absolute;
        background-color: var(--color-high-text);
        padding: 2px 5px;
        color: white;
        border-radius: 6px;
        margin-left: 5px;
        margin-bottom: 5px;
    }
    .info-other{
        display: flex;
        justify-content: space-between;
        padding: 16px 0 10px 0;
        color: var(--color-opacity-text);
        border-bottom: 1px solid rgba(220,220,220,0.5);
    }
    .info-service{
        display: flex;
        justify-content: space-between;
    }
    .info-services-item{
        padding: 16px 0;
    }
    .info-services-item img{
        width: 16px;
        height: 16px;
    }


</style>