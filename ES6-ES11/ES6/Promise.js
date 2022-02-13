//使用fs异步读出文件
/*const fs = require("fs");
fs.readFile("../Node.js/T_01/fstext.txt",(err,value)=>{
    if(err) throw err
    console.log(value.toString())
})*/


//使用Promise异步读取文件
const fs = require("fs")
const p = new Promise(function (resolve, reject){
    fs.readFile("../Node.js/T_01/fstext.txt",(err,data)=>{
        if (err) reject(err);
        resolve(data)
        // reject(err)
    })
})
p.then((value)=>{
    console.log(value.toString())
    //如果返回的不是一个Promise则是成功，
    // 返回的是Promise的话则按照返回的Promise的状态决定成功与失败，
    // 返回resolve则成功，返回reject则失败
    return p  //"ef"
},(reason)=>{
    console.log("出错了!")
}).then(function (value){
    console.log("成功了!")
    console.log(value)
},function (reason){
    console.log("出错了!")
});
