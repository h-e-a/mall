<template>
    <div id="home" class="wrapper">
        <nav-bar class="home-nav"><div slot="center">Go物</div></nav-bar>
        <scroll ref="scroll" @isShow="isShowBackTop" @pullingUp="loadMore">
            <home-swiper :banners="banners" @swiperImageLoad="swiperImageLoad"/>
            <recommend-view :recommends="recommends" />
            <feature-view/>
            <tab-control class="tab-control"
                         :titles="['流行','新款','流行']"
                         @tabClick="tabClick"
            ref="tabControl"/>
            <goods-list :goods="showGoods" class="goods-list"/>
        </scroll>
        <back-top class="detail-back-top"  @click.native="onClick()" v-show="isShow"/>
    </div>
</template>

<script>
    import NavBar from "components/common/navbar/NavBar";
    import TabControl from "components/content/tabControl/TabControl";
    import GoodsList from "components/content/goods/GoodsList";

    import Scroll from "components/common/scroll/Scroll";

    import HomeSwiper from "./childComps/HomeSwiper";
    import RecommendView from "./childComps/RecommendView";
    import FeatureView from "./childComps/FeatureView";

    import {getHomeMultidata,getHomeGoods} from "network/home";
    import {backTopMixin} from "common/mixin";


    export default {
        name: "Home",
        components:{
            Scroll,
            NavBar,
            TabControl,
            GoodsList,

            HomeSwiper,
            RecommendView,
            FeatureView,
        },
        computed:{
            showGoods(){
                return this.goods[this.currentType].list
            }
        },
        mixins:[backTopMixin],
        data(){
            return{
             banners:[],
             recommends:[],
                goods:{
                 'pop':{page:0,list:[]},
                  'new':{page:0,list:[]},
                  'sell':{page:0,list:[]},
                },
                currentType:'pop',
                scrollTop:null,
                // isShow:false,
                tabOffsetTop:0,
                saveY:0,
            }
        },
        activated() {
            this.$refs.scroll.stayScroll(this.saveY)
        },
        deactivated() {
             this.saveY=this.$refs.scroll.scrollTop
        },
        created() {
            this.getHomeMultidata()

            this.getHomeGoods('pop')
            this.getHomeGoods('new')
            this.getHomeGoods('sell')
        },
        methods:{
            /**
             *事件监听相关的方法
             */
            tabClick(index){
             switch (index) {
                 case 0:
                     this.currentType='pop'
                     break;
                 case 1:
                     this.currentType='new'
                     break;
                 case 2:
                     this.currentType='sell'
                     break;
             }
            },
            //加载更多
            loadMore(){
                this.getHomeGoods(this.currentType)
            },
            swiperImageLoad(){
             this.tabOffsetTop = this.$refs.tabControl.$el.offsetTop;
            },

            /**
            *网络请求的方法
            */
            getHomeMultidata(){
                getHomeMultidata().then(res=>{
                    this.banners=res.data.banner.list;
                    this.recommends=res.data.recommend.list;
                })
            },
            getHomeGoods(type){
                const pages =this.goods[type].page+1
                getHomeGoods(type,pages).then(res=>{
                   this.goods[type].list.push(...res.data.list);
                    this.goods[type].page+=1;
                })
            },
        },

    }
</script>

<style scoped>
    #home{
        padding-top: 44px;
        /*height: 100vh;*/
    }
   .home-nav{
       background-color: var(--color-tint);
       color: white;
       position: fixed;
       left: 0;
       right: 0;
       top: 0;
       z-index: 9;
   }
    .tab-control{
       position: sticky;
        top: 44px;
        z-index: 9;
    }
    .goods-list{
       margin-bottom: 49px;
    }


</style>
