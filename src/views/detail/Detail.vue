<template>
    <div class="detail">
        <detail-nav-bar class="detail-nav-bar" @titleClick="titleClick" ref="nav"/>
        <scroll class="detail-content"
                ref="scroll"
                @isShow="isShowBackTop"
                @scrollListened="scrollListened">
            <detail-swiper :top-images="topImages" class="detail-swiper" />
            <detail-base-info :goods="goods"/>
            <detail-shop-info :shop="shop"/>
            <detail-goods-info :detailInfo="detailInfo" @imgLoad="goodsImgLoad"/>
            <detail-params-info ref="params" :paramsInfo="paramsInfo"/>
            <detail-customer-comment  ref="comment" :customerInfo="customerInfo"/>
            <goods-list ref="goodsList" :goods="recommend"/>
        </scroll>
        <back-top  @click.native="onClick()" v-show="isShow"/>
        <detail-bottom-bar @addToCart="addToCart"/>

    </div>
</template>

<script>

    import DetailNavBar from "./childComps/DetailNavBar";
    import DetailSwiper from "./childComps/DetailSwiper";
    import DetailBaseInfo from "./childComps/DetailBaseInfo";
    import DetailShopInfo from "./childComps/DetailShopInfo";
    import DetailGoodsInfo from "./childComps/DetailGoodsInfo";
    import DetailParamsInfo from "./childComps/DetailParamsInfo";
    import DetailCustomerComment from "./childComps/DetailCustomerComment";
    import DetailBottomBar from "./childComps/DetailBottomBar";

    import GoodsList from "components/content/goods/GoodsList";
    import Scroll from "components/common/scroll/Scroll";


    import {debounce} from "common/utils";
    import {getDetail,getRecommend,GoodsInfo,ShopInfo,GoodsParam,CustomerInfo} from "network/detail";
     import {backTopMixin} from "common/mixin";
    import BackTop from "../../components/content/backTop/BackTop";


    export default {
        name: "Detail",
        data(){
            return{
                iid:null,
                topImages:[],
                goods:{},
                shop:{},
                detailInfo:{},
                paramsInfo:{},
                customerInfo:{},
                recommend:[],
                themeTopY:[],
                getThemeTopY:null,
                currentIndex:null,
            }
        },
        mixins:[backTopMixin],
        components:{
            BackTop,
            Scroll,
            DetailNavBar,
            DetailSwiper,
            DetailBaseInfo,
            DetailShopInfo,
            DetailGoodsInfo,
            DetailParamsInfo,
            DetailCustomerComment,
            DetailBottomBar,
            GoodsList,
        },
        created() {
            //保存传入的iid
            this.iid = this.$route.params.iid
            this.getDetail()
            this.getRecommend()
            //给getThemeTopY赋值并加入防抖 防止图片加载完成回调过多提高性能
            this.getThemeTopY = debounce(()=>{
                this.themeTopY = [];
                this.themeTopY.push(0);
                this.themeTopY.push(this.$refs.params.$el.offsetTop);
                this.themeTopY.push(this.$refs.comment.$el.offsetTop);
                this.themeTopY.push(this.$refs.goodsList.$el.offsetTop);
                this.themeTopY.push(Number.MAX_VALUE);
            },100)
        },
        methods:{
            //获取详情页的数据
            getDetail(){
                getDetail(this.iid).then(res=>{
                    const data = res.result;
                 //保存轮播图数据
                 this.topImages=data.itemInfo.topImages
                 //保存商品信息
                 this.goods=new GoodsInfo(data.itemInfo,data.columns,data.shopInfo.services)
                 //保存店铺信息
                 this.shop=new ShopInfo(data.shopInfo)
                 //保存商品信息->详情
                 this.detailInfo=data.detailInfo
                 //保存商品信息->尺寸
                 this.paramsInfo=new GoodsParam(data.itemParams.info,data.itemParams.rule)
                 //保存商品信息->评论
                    if(data.rate.cRate!=0){
                        this.customerInfo=new CustomerInfo(data.rate)
                    }
                    // //下一帧进行的回调函数
                    // this.$nextTick(()=>{
                    //
                    // })
                })
            },
            //请求推荐数据
           getRecommend(){
                getRecommend().then(res=>{
                    this.recommend=res.data.list
                })
           },

            goodsImgLoad(){
               this.getThemeTopY()
            },
            //监听navbar点击事件
            titleClick(index){
                this.$refs.scroll.scrollTo(this.themeTopY[index])
            },
            //监听navbar跟随页面滚动变换
            scrollListened(positionY){
                let  length = this.themeTopY.length
                // for(let i=0 ;i<length;i++){
                //     //条件1.判断navbar的index是否跟当前i相等可以减少打印
                //     //条件2.判断区间：在0和某个数字之间（i < length - 1）
                //     if((this.currentIndex !== i )&&
                //         ((i < length - 1 && positionY >= this.themeTopY[i] && positionY < this.themeTopY[i+1])
                //         ||
                //         (i===length - 1 && positionY > this.themeTopY[i]))){
                //         this.currentIndex=i;
                //         this.$refs.nav.currentIndex = this.currentIndex
                //         console.log(i);
                //     }
                // }
                for(let i=0;i<length-1;i++){
                   if(this.currentIndex!=i && (positionY>=this.themeTopY[i] && positionY<this.themeTopY[i+1])){
                               this.currentIndex=i;
                               this.$refs.nav.currentIndex = this.currentIndex
                   }
                }
            },
            //监听点击加入购物车按钮点击事件
            addToCart(){
                //添加到购物车的商品信息添加到一个object中传入到store里进行保存
                const  product = {};
                product.title=this.goods.title;
                product.image=this.topImages[0];
                product.desc=this.goods.desc;
                product.price=this.goods.realPrice;
                product.iid=this.iid;

                // this.$store.commit('addCart',product)
                this.$store.dispatch('addCart',product).then(res=>{
                    //商品添加到购物车成功显示toast
                    this.$toast.show(res)
                })

            }
        },

    }
</script>

<style scoped>
    .detail{
        position: relative;
        z-index: 10;
        background-color: white;
    }
    .detail-nav-bar{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 10;
        background-color: white;
    }
    .detail-swiper{
        margin-top: 44px;
    }
    .detail-content{
        margin-bottom: 49px;
    }
</style>