<template>
    <div class="detail-customer-comment">
        <div class="customer-top">
            <div>用户评价</div>
            <div>更多</div>
        </div>
        <div class="customer-info">
            <div class="customer-avatar"><img :src="customerInfo.avatar" alt=""></div>
            <div class="customer-name">{{customerInfo.name}}</div>
        </div>
        <div class="customer-wrap">
            <div class="customer-comment">{{customerInfo.comment}}</div>
        </div>
        <div>{{customerInfo.date|showDate}} {{customerInfo.style}}</div>
    </div>
</template>

<script>
    import {formatDate} from 'common/utils.js'
    export default {
        name: "DetailCustomerComment",
        props:{
            customerInfo:{
                type:Object,
                default(){
                    return{}
                }
            }
        },
        filters:{
            showDate(value){
                //将时间戳转换成date对象
                const date = new Date(value * 1000);
                //将date进行格式化
                return formatDate(date, 'yyyy-MM-dd');
            }
        }
    }
</script>

<style scoped>
    .detail-customer-comment{
        padding: 8px;
    }
    .customer-top{
        display: flex;
        justify-content: space-between;
        padding: 15px 0;
        border-bottom: 1px solid rgba(169,169,169,0.3);
    }
    .customer-avatar img{
        width: 50px;
        height: 50px;
        border-radius: 25px;
    }
    .customer-info{
        padding: 10px 0;
        display: flex;
        position: relative;
    }

    .customer-name{
        padding-left: 15px;
        margin-top: 20px;
    }
    .customer-comment{
        padding: 10px 0;
    }
</style>