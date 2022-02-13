let mongoose = require("mongoose")

mongoose.connect("mongodb://127.0.0.1/Model")

mongoose.connection.once("open",function (){
    console.log("数据库打开了~~")
})

let S = mongoose.Schema;
let textSche = new S({
    name:String,
    age:Number,
    gender:{
        type:String,
        default:"male"
    },
    address:String
})

let text21 = mongoose.model("text21",textSche)
/*text21.create([{
    name:"wangwu",
    age:10,
    address:"china"
},
    {
        name:"zhaoliu",
        age:19,
        gender:"female",
        address: "china"
    }],function (err){
    if (!err){
        console.log("插入成功！")
    }
})*/

//查询文档信息  文档为Model
/*text21.find({},function (err, docs){
    if (!err){
        for (let i = 0 ; i < docs.length ; i++){
            console.log(docs[i])
        }
    }
})*/
/*text21.updateOne({name:"xzs"},{name:"zhangsan"},function (err,x){
    if (!err){
        console.log("设置成功")
    }
})*/
//已废弃不能使用
//(node:13440) [MONGODB DRIVER] Warning: collection.update is deprecated. Use updateOne, updateMany, or bulkWrite instead.
// (Use `node --trace-warnings ...` to show where the warning was created)
/*text21.update({name:"xzs"},{name:"zs"},function (err,rew){
    if (!err){
        console.log(rew)
    }
})*/


