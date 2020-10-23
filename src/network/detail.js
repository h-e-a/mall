import {request} from "./request";

export  function getDetail(iid) {
 return request({
     url:'/detail',
     params:{
         iid
     }
 })
}

export  class GoodsInfo {
    constructor(itemInfo,columns,services) {
        this.title=itemInfo.title
        this.desc=itemInfo.desc
        this.newPrice=itemInfo.lowNowPrice
        this.oldPrice=itemInfo.oldPrice
        this.discount=itemInfo.discountDesc
        this.columns=columns
        this.services=services
        this.realPrice=itemInfo.lowNowPrice

    }
}
export class ShopInfo {
    constructor(shopInfo) {
       this.logo=shopInfo.shopLogo
        this.name=shopInfo.name
        this.follow=shopInfo.cFans
        this.sells=shopInfo.cSells
        this.goodsCount=shopInfo.cGoods
        this.score=shopInfo.score
    }
}