const fs = require("fs")
//简单文件读取与复制
/*fs.readFile("D:/Deskto/an.jpg",function (err,data){
    if(!err){
        fs.writeFile("read.jpg",data,function (){
            console.log('复制成功!')
        })
    }
})*/

//流式文件读取与复制
/*const fs = require('fs')
let wj = fs.createWriteStream("ls.jpg");
let r = fs.createReadStream('ls.jpg')
wj.once("open", function (){
    console.log('写入流打开了！')
})
wj.once("close", function (){
    console.log('写入流关闭了！')
})
r.once("open", function (){
    console.log('读取流打开了！')
})
r.once("close", function (){
    console.log('读取流关闭了！')
    wj.end()
})
r.on('data',function (data){
    wj.write(data)
})*/
//pipe 复制文件 跟上面一的一样
//r.pipe(wj)


//查看文件的状态
/*let a = fs.stat("ls.jpg",function (err,stats){
    //console.log(stats.isFile())
})*/
//查看目录
/*fs.readdir(".",function (err,data){
    console.log(data)
})*/
/*//创建一个文件
fs.writeFileSync("text.txt","liqiming")
//将文件改变成指定大小
fs.truncateSync("text.txt",1)*/

//创建文件夹
//fs.mkdirSync("hello")
//删除文件夹
//fs.rmdirSync("hello")
//重命名文件夹
//fs.renameSync("text.txt","fs.txt")
//监听文件发生的变化
fs.watchFile("fs.txt",function (curr,data){
    console.log(data.size)
    console.log(curr.size)
})


