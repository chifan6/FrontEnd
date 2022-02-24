function Axios(config){
    this.defaults = {};
    this.interceptors = {
        require: {},
        response: {},
    };
}
Axios.prototype.request = function (config){
    console.log(`发送AJAX请求 ${config.method}`)
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

let axios = createInstance()
axios.get({method:"get"})
