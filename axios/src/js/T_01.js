function Axios(config){
    this.defaults = {};
    this.interceptors = {
        request: new InterceptorManager(),
        response: new InterceptorManager(),
    };
}
Axios.prototype.request = function (config){
    let promise = Promise.resolve(config);
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
        promise = promise.then(chains.shift(), chains.shift());

    }
    return promise;
}
Axios.prototype.get = function (config){
    return this.request(config)
}
Axios.prototype.post = function (config){
    return this.request(config)
}

function InterceptorManager(config){
    this.handlers = [];
}
InterceptorManager.prototype.use = function (fulfilled,rejected){
    //该方法主要是将两个回调函数传进handles的数组中
    this.handlers.push({fulfilled, rejected});
}


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
function dispatchRequest(config){
    return xhrAdapter(config).then(response=>{
        return response
    },error=>{
        throw error
    })
}
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
    }))
}

let axios = createInstance()
// console.dir(axios);
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    //config.data = {"test":"修改成功"}
    console.log("one")
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    //config.data = {"test":"修改成功"}
    console.log("two")
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
    console.log("response one")
    return response;
}, function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    console.log("error")
    return Promise.reject(error);
});
axios.interceptors.response.use(function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    console.log("response two")
    //response.data = {"cancal":"删除数据"}
    return response;
}, function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    console.log("error")
    return Promise.reject(error);
});


axios({
    method: "GET",
    url: "http://localhost:3000/posts/1",
    /*cancelToken: new axios.CancelToken(function (cancel) {
        //执行了cancel则会关闭这个Ajax请求
        cancelAxios = cancel;
    })*/
}).then(Response => {
    console.log(Response)
});
