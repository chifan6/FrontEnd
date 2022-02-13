const siz = Buffer.alloc(10);
//const siz2 = Buffer.alloc(101);
//console.log(siz.equals(siz2));
siz[2]= 99;
//数值的toString方法可以传内容 2为二进制 8 为八进制 10 为十进制 16 为十六进制
//console.log(siz[2].toString(2));
let siz3 =Buffer.allocUnsafe(10);
let siz4 =Buffer.allocUnsafe(10);
let siz5 =Buffer.allocUnsafe(10);
let siz6 =Buffer.allocUnsafe(10);
for (let i = 0 ; i < siz3.length; i++){
    siz3[i] = 10;
}


//Buffer.from  将字符串转换为buffer
let str = "liqiming";
let buf = Buffer.from(str);
console.log(buf.length)
console.log(buf);
console.log(buf.toString())
console.log(buf[0].toString(16));