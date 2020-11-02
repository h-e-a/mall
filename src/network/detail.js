import {request} from "./request";

//请求详情信息数据
export  function getDetail(iid) {
 return request({
     url:'/detail',
     params:{
         iid
     }
 })
}

//请求推荐recommend
export function getRecommend(){
    return request({
        url:'/recommend'
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

export class GoodsParam {
    constructor(info,rule) {
        this.image = info.images!=undefined ? info.images[0] : '';
        this.infos=info.set;
        this.rule=rule.tables;
    }
}
export  class  CustomerInfo {
    constructor(rate) {
        this.avatar=rate.list[0].user.avatar;
        this.name=rate.list[0].user.name;
        this.comment=rate.list[0].content;
        this.date=rate.list[0].created;
        this.style=rate.list[0].style;
    }
}