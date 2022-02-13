let module1 = require("./module1")
let module2 = require("./module2")
let module3 = require("./module3")

import $ from "jquery" // const $ = require("jquery")
$(function (){
    $('body').css("background","pink")
})
// import fs from "fs";
/*const fs = require("fs")
fs.readFile("./module1.js",(err,data) => {
    console.log(data.toString())
})*/
module1.fn();
module2();
module3.fn();
module3.fn1();
