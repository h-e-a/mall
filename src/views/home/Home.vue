<template>
    <div id="home" class="wrapper">
        <nav-bar class="home-nav"><div slot="center">Go物</div></nav-bar>
        <scroll ref="backTop" @isShow="isShowBackTop" @pullingUp="loadMore">
            <home-swiper :banners="banners"/>
            <recommend-view :recommends="recommends" />
            <feature-view/>
            <tab-control class="tab-control"
                         :titles="['流行','新款','流行']"
                         @tabClick="tabClick"/>
            <goods-list :goods="showGoods" class="goods-list"/>
        </scroll>
        <back-top  class="back-top" @click.native="onClick()" v-show="isShow"/>
    </div>
</template>

<script>
    import NavBar from "components/common/navbar/NavBar";
    import TabControl from "components/content/tabControl/TabControl";
    import GoodsList from "components/content/goods/GoodsList";
    import BackTop from "components/content/backTop/BackTop";


    import HomeSwiper from "./childComps/HomeSwiper";
    import RecommendView from "./childComps/RecommendView";
    import FeatureView from "./childComps/FeatureView";

    import {getHomeMultidata,getHomeGoods} from "network/home";
    import Scroll from "../../components/common/scroll/Scroll";



    export default {
        name: "Home",
        components:{
            Scroll,
            NavBar,
            TabControl,
            GoodsList,
            BackTop,

            HomeSwiper,
            RecommendView,
            FeatureView,
        },
        computed:{
            showGoods(){
                return this.goods[this.currentType].list
            }
        },
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
                isShow:false,
            }
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
                     break
                 case 1:
                     this.currentType='new'
                     break
                 case 2:
                     this.currentType='sell'
                     break
             }

            },
            onClick(){
                //点击回到顶部
                this.$refs.backTop.toTop(50)
            },
            isShowBackTop(isShow){
               this.isShow=isShow
            },
            loadMore(){
                this.getHomeGoods(this.currentType)
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
    .content{
        position: absolute;
        top: 44px;
        bottom: 49px;
        left: 0;
        right: 0;
    }



</style>
