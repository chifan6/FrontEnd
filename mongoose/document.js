const mongoose = require("mongoose")

mongoose.connect("mongodb://127.0.0.1/Model")

mongoose.connection.once("open",function (){
    console.log("数据库连接成功！！")
})
let text21 = new mongoose.Schema({
    name:String,
    age:Number,
    gender:{
        type:String,
        defult:"male"
    },
    address:String
})

let text21M = mongoose.model("text21",text21)

text21M.find({},function (err,docs){
    if(!err){
        //使用doucment方法设置name
        /*docs[0].set("name","zss")
        docs[0].save()*/
        console.log(docs[0] instanceof text21M)
        delete docs[0].name
        console.log(docs[0])

        //将doucment对象修改成一个普通的对象
        //修改后的普通的对象不能使用doucment的方法
        let dos = docs[0].toObject()

        console.log(dos instanceof text21M)
        //delete 删除一个对象的属性
        delete dos.name
        console.log(dos)
    }
})