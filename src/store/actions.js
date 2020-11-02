export  default {
    addCart(context,payload){
        return new Promise((resolve, reject)=>{
            //  let oldProduct = null;
            // for(let item of state.carList){
            //     if(item.iid==payload.iid){
            //         oldProduct=item;
            //     }
            // }
            let oldProduct = context.state.cartList.find(item=>item.iid === payload.iid)
            //判断oldProduct是否为空
            if(oldProduct){
                // oldProduct.count+=1
                context.commit('addCounter',oldProduct)
                resolve('当前的商品数量+1')
            }else {
                payload.count=1
                // state.carList.push(payload)
                context.commit('addToCart',payload)
                resolve('添加成功')
            }
        })
    }
}