<template>
    <div class="wrapper" ref="wrapper">
       <div class="content">
           <slot></slot>
       </div>
    </div>
</template>

<script>
    // import BScroll from 'better-scroll'
    // import PullUp from '@better-scroll/pull-up'
    export default {
        name: "Scroll",
        data(){
          return{
              scrollTop:null,
              scrollHeight:null
          }
        },
        methods:{
            getScroll(){
                // 获取页面的滚动高度
                this.scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight
                // 获取页面的可视高度
                let clientHeight = document.documentElement.clientHeight || document.body.clientHeight
                //获取滚动距顶部的距离
                this.scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
                //当滚动大于1000时候给父组件返回一个参数用来显示时候能返回顶部的按钮
                this.scrollTop>1000? this.$emit('isShow',true):this.$emit('isShow',false)
                ///监听页面滚动的位置并返回给父组件
                this.$emit('scrollListened',this.scrollTop)
                //判断是否滑动到屏幕底部
                if(this.scrollTop + clientHeight == this.scrollHeight){
                    this.$emit('pullingUp')
                }

            },
            ///回到顶部方法
            toTop(i=50){
                //参数i表示间隔的幅度大小，以此来控制速度
                document.documentElement.scrollTop -=i;
                if (document.documentElement.scrollTop > 0) {
                    var c = setTimeout(() => this.toTop(i), 16);
                } else {
                    clearTimeout(c);
                 }
              },
            ///点击切换页面保留原页面的距离方法
            stayScroll(height){
                document.documentElement.scrollTop =height;
             },
            ///点击切换到指定高度的方法
            scrollTo(toHeight){
                document.documentElement.scrollTop=toHeight;
            },
            },


        mounted() {
            window.addEventListener('scroll', this.getScroll);

            // this.scroll = new BScroll(this.$refs.wrapper,{
            //     movable: true,
            //     zoom: true,
            //     pullUpLoad:true,
            // })
            // this.scroll.on('scroll',(position)=>{
            //     console.log(position)
            // })

            //下拉刷新
            // this.scroll.on('pullingUp',()=>{
            //
            // })
        },
        destroyed(){
            window.removeEventListener('scroll', this.getScroll);
        },
    }
</script>

<style scoped>
    /*.wrapper{*/
    /*    touch-action: none*/
    /*}*/
</style>