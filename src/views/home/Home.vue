<template>
    <div>
        <nav-bar class="home-nav">
            <div slot="center">Go物</div>
        </nav-bar>
       <home-swiper :banners="banners"/>
       <recommend-view :recommends="recommends" />
        <feature-view/>
        <tab-control class="tab-control"
                     :titles="['流行','新款','流行']"
                     @tabClick="tabClick"/>
        <goods-list :goods="showGoods"/>
        <ul>
            <li>里欸博爱1</li>
            <li>里欸博爱2</li>
            <li>里欸博爱3</li>
            <li>里欸博爱4</li>
            <li>里欸博爱5</li>
            <li>里欸博爱6</li>
            <li>里欸博爱7</li>
            <li>里欸博爱8</li>
            <li>里欸博爱9</li>
            <li>里欸博爱10</li>
            <li>里欸博爱11</li>
            <li>里欸博爱12</li>
            <li>里欸博爱13</li>
            <li>里欸博爱14</li>
            <li>里欸博爱15</li>
            <li>里欸博爱16</li>
            <li>里欸博爱17</li>
            <li>里欸博爱18</li>
            <li>里欸博爱19</li>
            <li>里欸博爱20</li>
            <li>里欸博爱21</li>
            <li>里欸博爱22</li>
            <li>里欸博爱23</li>
            <li>里欸博爱24</li>
            <li>里欸博爱25</li>
            <li>里欸博爱26</li>
            <li>里欸博爱27</li>
            <li>里欸博爱28</li>
            <li>里欸博爱29</li>
            <li>里欸博爱30</li>
            <li>里欸博爱31</li>
            <li>里欸博爱32</li>
            <li>里欸博爱33</li>
            <li>里欸博爱34</li>
            <li>里欸博爱35</li>
            <li>里欸博爱36</li>
            <li>里欸博爱37</li>
            <li>里欸博爱38</li>
            <li>里欸博爱39</li>
            <li>里欸博爱40</li>
            <li>里欸博爱41</li>
            <li>里欸博爱42</li>
            <li>里欸博爱43</li>
            <li>里欸博爱44</li>
            <li>里欸博爱45</li>
            <li>里欸博爱46</li>
            <li>里欸博爱47</li>
            <li>里欸博爱48</li>
            <li>里欸博爱49</li>
            <li>里欸博爱50</li>
            <li>里欸博爱51</li>
            <li>里欸博爱52</li>
            <li>里欸博爱53</li>
            <li>里欸博爱54</li>
            <li>里欸博爱55</li>
            <li>里欸博爱56</li>
            <li>里欸博爱57</li>
            <li>里欸博爱58</li>
            <li>里欸博爱59</li>
            <li>里欸博爱60</li>
            <li>里欸博爱61</li>
            <li>里欸博爱62</li>
            <li>里欸博爱63</li>
            <li>里欸博爱64</li>
            <li>里欸博爱65</li>
            <li>里欸博爱66</li>
            <li>里欸博爱67</li>
            <li>里欸博爱68</li>
            <li>里欸博爱69</li>
            <li>里欸博爱70</li>
            <li>里欸博爱71</li>
            <li>里欸博爱72</li>
            <li>里欸博爱73</li>
            <li>里欸博爱74</li>
            <li>里欸博爱75</li>
            <li>里欸博爱76</li>
            <li>里欸博爱77</li>
            <li>里欸博爱78</li>
            <li>里欸博爱79</li>
            <li>里欸博爱80</li>
            <li>里欸博爱81</li>
            <li>里欸博爱82</li>
            <li>里欸博爱83</li>
            <li>里欸博爱84</li>
            <li>里欸博爱85</li>
            <li>里欸博爱86</li>
            <li>里欸博爱87</li>
            <li>里欸博爱88</li>
            <li>里欸博爱89</li>
            <li>里欸博爱90</li>
            <li>里欸博爱91</li>
            <li>里欸博爱92</li>
            <li>里欸博爱93</li>
            <li>里欸博爱94</li>
            <li>里欸博爱95</li>
            <li>里欸博爱96</li>
            <li>里欸博爱97</li>
            <li>里欸博爱98</li>
            <li>里欸博爱99</li>
            <li>里欸博爱100</li>
        </ul>
    </div>
</template>

<script>
    import NavBar from "components/common/navbar/NavBar";
    import TabControl from "components/content/tabControl/TabControl";
    import GoodsList from "components/content/goods/GoodsList";

    import HomeSwiper from "./childComps/HomeSwiper";
    import RecommendView from "./childComps/RecommendView";
    import FeatureView from "./childComps/FeatureView";


    import {getHomeMultidata,getHomeGoods} from "network/home";

    export default {
        name: "Home",
        components:{
            NavBar,
            TabControl,
            GoodsList,

            HomeSwiper,
            RecommendView,
            FeatureView
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
        }
    }
</script>

<style >
    .home{
        padding-top: 44px;
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

</style>
