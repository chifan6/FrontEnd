const fs = require("fs")

const arr = [1,2,3,3,4]

//该模块返回的是一个函数
const uniq = require("uniq")(arr)

console.log(uniq);