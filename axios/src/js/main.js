import * as axios from "./T_01";

/*import axios from "axios";
//设置默认配置
axios.defaults.method = "GET";
axios.defaults.baseURL = "http://localhost:3000/";
let cancelAxios = null;

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    //config.data = {"test":"修改成功"}
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    //response.data = {"cancal":"删除数据"}
    return response;
}, function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    console.log("error")
    return Promise.reject(error);
});


$(function (){
    let btn =$(".btn")
    // console.log(btn[0])
    $(btn[0]).click(function () {
        if (cancelAxios !== null){
            cancelAxios()
        }
        axios({
            url: "posts/1",
            cancelToken: new axios.CancelToken(function (cancel) {
                //执行了cancel则会关闭这个Ajax请求
                cancelAxios = cancel;
            })
        }).then(Response => {
            console.log(Response)
        });
    });
    $(btn[1]).click(function (){
        //点击后执行此函数关闭Ajax请求
        cancelAxios();
    })
})*/
