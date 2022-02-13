//import fs from "fs";
const fs = require("fs")
function readGJ() {
    return new Promise((resolve, reject) => {
        fs.readFile("../ES6/file/关雎.md",(err,data)=>{
            if (err) reject(err)
            resolve(data)
        })
   })
}

function readQJJ() {
    return new Promise((resolve, reject) => {
        fs.readFile("../ES6/file/将进酒.md",(err,data)=>{
            if (err) reject(err)
            resolve(data)
        })
   })
}

function readQYC() {
    return new Promise((resolve, reject) => {
        fs.readFile("../ES6/file/沁园春·雪.md",(err,data)=>{
            if (err) reject(err)
            resolve(data)
        })
   })
}
async function read(){
    let GJ = await readGJ();
    let QJJ = await readQJJ();
    let QYC = await readQYC();

    console.log(GJ.toString());
    console.log(QJJ.toString());
    console.log(QYC.toString());
}
read()