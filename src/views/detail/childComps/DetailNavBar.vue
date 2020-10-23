<template>
    <div class="detail-nav-bar">
        <nav-bar>
            <div slot="left" class="back-icon" @click="backClick">
                <img src="~assets/img/fanhui.png" />
            </div>
         <div slot="center" class="title">
             <div v-for="(item ,index) in titles"
                  :key="item"
                  class="title-item"
                  @click="itemClick(index)"
                  :class="{active:index===currentIndex}">{{item}}</div>
         </div>
        </nav-bar>
    </div>
</template>

<script>
    import NavBar from "components/common/navbar/NavBar";
    export default {
        name: "DetailNavBar",
        components:{
            NavBar
        },
        data(){
            return{
                titles:['商品','参数','评论','推荐'],
                currentIndex:0,
            }
        },
        methods:{
            itemClick(index){
                this.currentIndex=index
            },
            backClick(){
               this.$router.back()
            }
        }
    }
</script>


<style scoped>
  .title{
      display: flex;
      font-size: 13px;
  }
    .title-item{
        flex: 1;
    }
    .active{
        color: var(--color-high-text);
    }
    .back-icon{
        margin-top: 5px;
    }
    .back-icon img {
        width: 35px;
        height: 35px;
    }

</style>