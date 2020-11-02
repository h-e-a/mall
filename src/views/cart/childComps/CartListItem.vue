<template>
    <div class="cart-list-item">
        <div class="item-left">
        <check-button :isChecked="product.checked" @click.native="itemClick"/>
        </div>
        <div class="item-center">
            <img :src="product.image" alt="" />
        </div>
        <div class="item-right">
            <div class="product-title text-hidden">{{product.title}}</div>
            <div class="product-desc text-hidden">{{product.desc}}</div>
            <div class="price-counter">
                <div class="product-price">￥{{product.price}}</div>
                <div class="product-counter">x{{product.count}}</div>
            </div>
        </div>
    </div>
</template>

<script>
   import CheckButton from "components/content/checkButton/CheckButton";


    export default {
        name: "CartListItem",
        components:{
            CheckButton
        },
        props:{
            product:{
                type:Object,
                default(){
                    return{}
                }
            }
        },
        methods:{
            itemClick(){
                this.product.checked=!this.product.checked
            }
        }
    }
</script>

<style scoped>
    .cart-list-item{
       display: flex;
        width: 91%;
        padding: 10px 8px;
        border-bottom: 1px solid rgba(220,220,220,0.5);
    }
    .item-left{
         display: flex;
         justify-content: center;
         align-items: center;

    }

    .item-center{

    }
  .item-center img{
      width: 80px;
      height: 100px;
      border-radius: 8px;
      object-fit: cover;
  }
  .item-right{
      width: 70%;
     padding-left: 16px;
  }
  .text-hidden{
      text-overflow:ellipsis;
      white-space: nowrap;
      overflow: hidden;
  }
    .product-title{
        font-size: 18px;
        color: #333333;
    }
    .product-desc{
     font-size: 16px;
     padding:20px 0;
    }
    .price-counter{
        display: flex;
        justify-content: space-between;
    }
    .product-price{
        color: orange;
        font-size: 18px;
    }

</style>