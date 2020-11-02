<template>
    <div class="cart-bottom-bar">
       <div class="check-content">
           <check-button class="check-button" :isChecked="isAllSelect" @click.native="allClick"/>
           <span>全选</span>
       </div>
        <div>
            合计:{{totalPrice}}
        </div>
        <div class="calc" @click="calcClick">去计算({{checkLength}})</div>
    </div>
</template>

<script>
    import CheckButton from "components/content/checkButton/CheckButton";
    import {mapGetters} from  'vuex'
    export default {
        name: "CartBottomBar",
        components:{
            CheckButton
        },
        computed:{
            ...mapGetters(['cartList']),
            totalPrice(){
                return '￥'+ this.cartList.filter(item=>{
                    return item.checked
                }).reduce((preValue,item)=>{
                    return preValue+item.price * item.count
                },0).toFixed(2)
            },
            checkLength(){
                return this.cartList.filter(item => item.checked).length;
            },
            isAllSelect(){
                 if(this.cartList.length===0)return  false
                return !this.cartList.find(item => !item.checked)
            }
        },
        methods:{
            allClick(){
                if(this.isAllSelect){
                    this.cartList.forEach(item => item.checked=false)
                }else {
                    this.cartList.forEach(item => item.checked=true)
                }
            },
            calcClick(){
                if(!this.isAllSelect){
                    this.$toast.show('请选择要购买的商品')
                }
            }
        },
    }
</script>

<style scoped>
   .cart-bottom-bar{
       display: flex;
       position: fixed;
       bottom: 49px;
       left: 0;
       right: 0;
       height:40px;
       background-color: #ececec;
       line-height: 40px;

   }
   .check-content{
       display: flex;
       padding: 0px 16px;
       align-items: center;
   }
    .check-button{
        width: 15px;
        height: 15px;
        line-height: 20px;
    }
    .calc{
        background-color: var(--color-high-text);
        position: fixed;
        right: 0;
        bottom: 49px;
        color: white;

        padding: 0 16px;
    }
</style>