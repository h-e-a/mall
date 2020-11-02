<template>
    <div class="check-button" :class="{check:isChecked}">
        <img src="~assets/img/detail/check_active.png" alt="" v-show="isChecked" >
    </div>
</template>

<script>
    export default {
        name: "CheckButton",
        props:{
            isChecked:{
                type:Boolean,
                default:false
            }
        }
    }
</script>

<style scoped>
    .check-button{
        width: 15px;
        height: 15px;
        border: 1px solid red;
        border-radius: 50%;
    }
    .check-button img{
        width: 15px;
        height: 15px;
    }
    .check{
        border-color: transparent;
    }
</style>