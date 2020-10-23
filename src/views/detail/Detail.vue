<template>
    <div class="detail">
          <detail-nav-bar/>
        <detail-swiper :top-images="topImages"/>
        <detail-base-info :goods="goods"/>
        <detail-shop-info :shop="shop"/>
    </div>
</template>

<script>

    import DetailNavBar from "./childComps/DetailNavBar";
    import DetailSwiper from "./childComps/DetailSwiper";
    import DetailBaseInfo from "./childComps/DetailBaseInfo";
    import DetailShopInfo from "./childComps/DetailShopInfo";

    import {getDetail,GoodsInfo,ShopInfo} from "network/detail";

    export default {
        name: "Detail",
        data(){
            return{
                iid:null,
                topImages:[],
                goods:{},
                shop:{}
            }
        },
        components:{
            DetailNavBar,
            DetailSwiper,
            DetailBaseInfo,
            DetailShopInfo
        },
        created() {
            //保存传入的iid
            this.iid = this.$route.params.iid
            this.getDetail()
        },
        methods:{
            //获取详情页的数据
            getDetail(){
                getDetail(this.iid).then(res=>{
                 const data = res.result;
                 this.topImages=data.itemInfo.topImages
                 this.goods=new GoodsInfo(data.itemInfo,data.columns,data.shopInfo.services)
                 this.shop=new ShopInfo(data.shopInfo)
                })

            }
        },

    }
</script>

<style scoped>

</style>