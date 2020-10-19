import Vue from 'vue'
import Router from 'vue-router'
const Home =()=> import('views/home/Home.vue')
const Mine =()=>import('views/mine/Mine.vue')
const Cart =()=>import('views/cart/Cart.vue')
const Category =()=>import('views/category/Category.vue')

Vue.use(Router)

const  routes = [
    {
        path:'',
        redirect:'/home'
    },
    {
        path: '/home',
        name: 'Home',
        component: Home
    },
    {
        path:'/cart',
        name: 'Cart',
        component:Cart
    },
    ,
    {
        path:'/category',
        name: 'Category',
        component:Category
    },
    {
        path:'/mine',
        name: 'Mine',
        component:Mine
    }
]

const router = new Router({
    routes,
    mode:'history'

})

export default router