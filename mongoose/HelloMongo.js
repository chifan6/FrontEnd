//引入mongoose模块
let  mongoose = require("mongoose")
//连接数据库
mongoose.connect("mongodb://127.0.0.1/Newtest");

//监听数据库状态
mongoose.connection.once("open",function (){
    console.log("数据库连接成功！")
})
mongoose.connection.once("close",function (){
    console.log("数据库断开！")
})

//断开数据库方法
//mongoose.disconnect()

//设置约束
let studentSchema = new mongoose.Schema({
    name:String,
    age:Number,
    gender:{
        type:String,
        default:"male"
    },
    address:String
})

//新建一个集合并将绑定约束
let StudentSchema = mongoose.model("student",studentSchema)

//给新建的集合提交
StudentSchema.create({
    name:"lqm",
    age:23,
    address:"china"
},function (err){
    if(!err){
        console.log("插入成功!")
    }
})
