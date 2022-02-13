const fs = require("fs");

/*
fs.readFile("./file/关雎.md",function (err,data1){
    fs.readFile("./file/将进酒.md",function (err,data2){
        fs.readFile("./file/沁园春·雪.md",function (err,data3){
            console.log(data1 +"\n\t"+ data2 +"\n\t"+ data3);
        });
    });
})*/

const p = new Promise(function (resolve, reject) {
    fs.readFile("./file/关雎.md", function (err, data) {
        resolve(data)
    })
});
p.then(value => {
    return new Promise(function (resolve, reject) {
        fs.readFile("./file/将进酒.md", function (err, data) {
            resolve([value, data])
        })
    })
}).then(value => {
    return new Promise(function (resolve, reject){
        fs.readFile("./file/沁园春·雪.md",function (err,data){
            value.push(data)
            resolve(value)
        })
    })
}).then(value => {
    console.log(value.join("\t\n"));
})