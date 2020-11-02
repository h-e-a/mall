import Vue from 'vue'
import Vuex from 'vuex'
import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";
//1.安装插件
Vue.use(Vuex)

//2.创建Store对象
const store = new Vuex.Store({
    state:{
      cartList:[]
    },
    //mutations唯一的目的就是修改state中的函数
    //mutations中尽量一个方法完成一件事情
    mutations:mutations,
    actions:actions,
    getters:getters,
})

//3.挂载到实例上
export  default store