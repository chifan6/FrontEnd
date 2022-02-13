//导入fs包
let fs = require("fs");

//同步写入文件
//以写入的方法打开一个文件
let file = fs.openSync("fstext.txt","w");
//向文件写入内容
fs.writeSync(file,"身残志坚")
//向文件添加内容
fs.appendFileSync(file,"fwwef")
//关闭文件
fs.close(file)

//异步写入文件
/*fs.open("fs1.txt", "w", function (err, fd) {
    if (!err) {
        fs.write(fd, "This is an asynchronous write！", function () {
            console.log('Write to success!')
            fs.close(fd, function () {
                console.log("Close the success！");
            })
        })
    } else {
        console.log(err)
    }

})*/



//简单文件写入
/*fs.writeFile("fs2.txt","这是简单写入的内容！",{flag:"a"},function (){
    console.log(arguments);
})*/


//流式文件写入
//引入fs模块
/*const fs = require("fs")

//创建流式文件
let wj = fs.createWriteStream("fs3.txt",{flags:"a"})
//监听文件打开状态  once事件只触发一次
wj.once("open",function (){
    console.log("流打开了！")
})
wj.once("close",function (){
    console.log("流关闭了！")
})
//向流式文件写入内容
wj.write("1、流式文件写入")
wj.write("2、流式文件写入")
wj.write("3、流式文件写入")
wj.write("4、流式文件写入")
wj.write("5、流式文件写入")
//关闭流式文件 close只能写入一次
//wj.close()
wj.end()*/



