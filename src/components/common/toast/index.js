import Toast from "./Toast";

const obj={}

obj.install = function (Vue) {
    //程序初始的时候默认会把Vue传过来


    //1.创建组件构造器
    const  toastContrustor = Vue.extend(Toast)

    //2.new的方式，根据组件构造器，可以创建出来一个组件对象
    const toast = new toastContrustor()

    //3.将组件对象，挂载到某一个元素上  (参考main.js文件的.$mount('#app'))
    //创建一个元素并挂载
    toast.$mount(document.createElement('div'))

    //4.toast.$el对应的就是div
    document.body.appendChild(toast.$el)


    Vue.prototype.$toast =  toast;
}

export  default  obj