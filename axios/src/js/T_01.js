//Axios构造函数
function Axios(config){
    //默认属性未模拟
    this.defaults = {};
    //拦截器配置
    this.interceptors = {
        request: new InterceptorManager(),
        response: new InterceptorManager(),
    };
}

//axios核心函数
Axios.prototype.request = function (config){
    //将参数设置为一个成功的Promise对象
    let promise = Promise.resolve(config);
    //保存拦截器函数和发送请求函数
    let chains = [dispatchRequest, undefined];
    this.interceptors.request.handlers.forEach(value => {
        //请求拦截器顺序问题出现在这里
        //先将第一个拦截器添加到了前面
        //然后在将第二个拦截器添加到了第一个的前面
        //使用导致了第二个拦截器先运行的情况
        chains.unshift(value.fulfilled, value.rejected)
    });
    this.interceptors.response.handlers.forEach(value=>{
        //将响应拦截器从handlers中添加到chains中
        //使用push不会导致和请求拦截器的顺序问题
        chains.push(value.fulfilled,value.rejected)
    })

    while (chains.length){
        //分别执行chains中的函数
        promise = promise.then(chains.shift(), chains.shift());
    }
    return promise;
}
//发送get请求的方法 axios.get(config)
Axios.prototype.get = function (config){
    return this.request(config)
}
//发送get请求的方法 axios.post(config)
Axios.prototype.post = function (config){
    return this.request(config)
}
//添加Axios取消请求方法
//添加后可以使用new CancelToken
Axios.prototype.CancelToken = CancelToken;
//拦截器构造函数
function InterceptorManager(config){
    this.handlers = [];
}
//拦截器方法
InterceptorManager.prototype.use = function (fulfilled,rejected){
    //该方法主要是将两个回调函数传进handles的数组中
    this.handlers.push({fulfilled, rejected});
}

// axios的配置
function createInstance(config){

    //这里是Axios上this的方法
    let context = new Axios(config);//这个时候只能使用context.加上方法   使用不能直接context()
    // console.dir(context);
    //这里是Axios原型上的方法
    let instance = Axios.prototype.request.bind(context);  //instance只能使用instance()  因为这里是request的方法
    // console.dir(instance);

    //现在instance上没有context上的方法接下来是将context上的方法复制到instance上
    //将Axios的原型上的方法复制到instance上
    Object.keys(Axios.prototype).forEach(key=>{
        instance[key] = Axios.prototype[key].bind(context)
    })
    //将Axios上的this方法复制到instance上
    Object.keys(context).forEach(key=>{
        instance[key] = context[key]
    })
    return instance;
}
//处理AJAX请求
function dispatchRequest(config){
    return xhrAdapter(config).then(response=>{
        return response
    },error=>{
        throw error
    })
}
//发送AJAX请求
function xhrAdapter(config){
    return new Promise(((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(config.method,config.url);
        xhr.send();
        xhr.onreadystatechange = function (){
            if(xhr.readyState === 4){
                if (xhr.status >= 200 && xhr.status < 300){
                    resolve({
                        config:config,
                        data:xhr.response,
                        headers:xhr.getAllResponseHeaders(),
                        request:xhr,
                        status:xhr.status,
                        statusText: xhr.statusText,
                    });
                }else {
                    reject(new Error(`请求失败 失败的状态码为${xhr.status}`))
                }
            }
        }
        //判断config中有没有cancelToken属性
        //当参数中有cancelToken属性则会继续下面的代码
        if (config.cancelToken){
            config.cancelToken.promise.then(value => {
                //关闭请求
                xhr.abort()
            })
        }
    }))
}
//取消请求构造函数
function CancelToken(executor){
    //定义一个参数来接收resolve
    //这个一被执行就等于执行下面的resolve将this.promise设置为成功的状态
    let resolvePromise;
    this.promise = new Promise(resolve => {
        resolvePromise = resolve;
    })
    //将resolvePromise暴露出去
    executor(function (){
        //这个方法一调用就会将上面的this.promise设置为成功的状态
        //当this.promise状态为成功是将会执行xhr.abort()关闭请求
        resolvePromise();
    })
}

//将createInstance返回的instance结果接收
//接收后axios就可以使用上面的方法    axios()或axios.xx()
let axios = createInstance()
//使用请求拦截器
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    //config.data = {"test":"修改成功"}
    // console.log("one")
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    //config.data = {"test":"修改成功"}
    // console.log("two")
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});
//使用响应拦截器
axios.interceptors.response.use(function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    //response.data = {"cancal":"删除数据"}
    // console.log("response one")
    return response;
}, function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    // console.log("error")
    return Promise.reject(error);
});
axios.interceptors.response.use(function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    // console.log("response two")
    //response.data = {"cancal":"删除数据"}
    return response;
}, function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    // console.log("error")
    return Promise.reject(error);
});

//测试
$(function (){
    //保存关闭请求函数
    let cancelAxios = null;
    //获取全部的button
    let btn =$(".btn")
    // console.log(btn[0])
    //绑定事件
    $(btn[0]).click(function () {
        /*if (cancelAxios !== null){
            cancelAxios()
        }*/
        axios({
            method:"get",
            url: "http://localhost:3000/posts/1",
            cancelToken: new axios.CancelToken(function (cancel) {
                //接收暴露出来的方法并将它赋值到外面后按需使用
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
