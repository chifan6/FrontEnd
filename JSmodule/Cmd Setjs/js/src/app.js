define(function (require){
    let m1 = require('./m1');
    console.log(m1.ShowM1());

    //引入时会先读取文件里面的内容
    let m4 = require("./m4")
    m4.m4()
})