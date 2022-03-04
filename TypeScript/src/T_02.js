/* name表示必须要有
* age? 表示中的?表示可选项age可有可无
* [name(名字可以顺便设置):string]:any 表示变量名是一个字符串(变量名本身就是一个字符串)
* :any 表示任意类型
* */
let a2;
a2 = { name: "Flag", b: "hello", age: 20 };
/*b2是一个函数并且函数必须要有两个参数且返回值为number
* */
let b2;
b2 = (name, age) => {
    return name + age;
};
// console.log(b(a.name, a.age));
/*定义一个数字数组*/
let c2;
/*定义一个字符串数组*/
let d2;
/*元组就是一个固定长度的数组*/
let e2;
e2 = ["Flag", 21];
/*枚举*/
var NameT;
(function (NameT) {
    NameT[NameT["liqiming"] = 0] = "liqiming";
    NameT[NameT["zhangsan"] = 1] = "zhangsan";
    NameT[NameT["lisi"] = 2] = "lisi";
    NameT[NameT["wangwu"] = 3] = "wangwu";
})(NameT || (NameT = {}));
console.log(NameT.liqiming, NameT.zhangsan, NameT.lisi, NameT[3]); // 0 1 2 3
let f2;
f2 = 4;
