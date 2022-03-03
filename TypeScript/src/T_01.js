// console.log("hello ts");
// @ts-ignore
var a1 = 1;
var b1 = true;
var c1 = 'test';
var d1 = {}; //对象可以重新赋值其他类型
var e1 = [];
var arr = [];
var f1 = Symbol();
var g1 = BigInt(123234435345345);
var h1 = function (a, b) {
    return a + b;
};
// console.log(h(1,2));
var i1;
i1 = "hello";
//类型断言 可以用来告诉解释器变量的实际类型
// c = i1   不能使用 因为i的类型是unknown 需要使用类似断言
c1 = i1;
c1 = i1;
//也可以使用判断类型的方式赋值
if (typeof i1 === "string") {
    c1 = i1;
}
