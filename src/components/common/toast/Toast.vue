<template>
    <div class="toast" v-show="isShow">
        {{message}}
    </div>
</template>

<script>
    export default {
        name: "Toast",
        data(){
          return{
               message:'',
              isShow:false,
          }
        },
        methods:{
            show(message,duration=1500){
                this.isShow = true;
                this.message=message;
                setTimeout(()=>{
                    this.isShow = false;
                    this.message='';
                },duration)
            }
        }
    }
</script>

<style scoped>
    .toast{

        position: fixed;
        left: 50%;
        top: 50%;
        color: white;
        transform: translate(-50%,-50%);
        background-color: rgba(0,0,0,0.7);

        z-index: 999;
        padding: 10px 16px;
    }
</style>