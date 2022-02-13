//静态import
import * as hello from "./hello.js";

let btn01 = document.getElementById("btn")
/*
btn01.onclick = function (){
    hello.hello()
}*/

//动态import
btn01.onclick = async function (){
    //import()返回的是一个promise对象
    let p = await import("./hello.js");
    p.hello();
}