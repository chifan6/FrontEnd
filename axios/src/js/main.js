import axios from "axios";
//设置默认配置
axios.defaults.method = "GET";
axios.defaults.baseURL = "http://localhost:3000/";
let cancelAxios = null;
$(function (){
    let btn =$(".btn")
    // console.log(btn[0])
    $(btn[0]).click(function () {
        if (cancelAxios !== null){
            cancelAxios()
        }
        axios({
            url: "posts",
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
})
