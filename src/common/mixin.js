import BackTop from "components/content/backTop/BackTop";
export const backTopMixin={
    components:{
        BackTop
    },
    data(){
       return{
           isShow: false,
       }
    },
    methods:{
        onClick() {
            //点击回到顶部
            this.$refs.scroll.toTop(50)
        },
        isShowBackTop(isShow) {
            this.isShow = isShow
        },
    }
}