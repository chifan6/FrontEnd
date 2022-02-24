function Axios(config){
    this.defaults = {};
    this.interceptors = {
        require: {},
        response: {},
    };
}
Axios.prototype.request = function (config){
    let promise = Promise.resolve(config);
    let chains = [dispatchRequest, undefined];
    let result = promise.then(chains[0], chains[1]);
    return result;
}
Axios.prototype.get = function (config){
    return this.request(config)
}
Axios.prototype.post = function (config){
    return this.request(config)
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
