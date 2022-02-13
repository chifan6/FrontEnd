//let express = require('express')
let express = require("express");
const app = express()
app.get("/",function (request,response){
    response.setHeader("Access-control-Allow-Origin", "*");
    response.send('hello express')
})
app.listen(200,function (){
    console.log("启动成功！监听的端口是200")
})