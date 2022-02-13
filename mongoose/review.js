const mogoose = require("mongoose")

mogoose.connect("mongodb://127.0.0.1/test")

mogoose.connection.once("open",function (){
    console.log("数据库连接成功!")
})

let Stest = new mogoose.Schema({
    name:String,
    age:Number,
    ename:String,
    gender:{
        type:String,
        default:"male"
    },
    address:String,
    empno:Number,
    job:String,
    mar:Number,
    sal:Number,
    depno:Number,
    comm:Number,
    hiredate:Date
})

let emps = mogoose.model("emps",Stest)

emps.findOne({ename:"林冲"},function (arr,docs){
    if(!arr){
        console.log(docs);
    }
})