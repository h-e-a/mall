import axios from 'axios'
export function request(config) {
  const  instance = axios.create({
    baseURL:'',
    timeout:5000
  })

  //2.拦截器
  instance.interceptors.request.use(config=>{
    // console.log(config);
    return config
  },error => {
    console.log(error);
  });
  instance.interceptors.response.use(res=>{
    return res.data;
  },error => {
    console.log(error);
  });


    //发送请求
   return instance(config)

}





// export function request(config) {
//   return new Promise((resolve,reject)=>{
//     //1.创建实例
//     const  instance = axios.create({
//       baseURL:'http://123.207.32.32:8000',
//       timeout:5000
//     })
//     //发送请求
//     instance(config)
//       .then(res=>{
//         resolve(res)
//       })
//       .catch(err=>{
//         reject(err)
//       })
//   })
// }





// export function request(config,success,failure) {
//   //1.创建实例
// const  instance = axios.create({
//   baseURL:'http://123.207.32.32:8000',
//   timeout:5000
// })
// //发送请求
// instance(config).then(res=>{
//   success(res);
// })
//   .catch(err=>{
//     failure(err);
//   })
// }
