// console.log("hello ts");
// @ts-ignore
let a1 = 1;
let b1 = true;
let c1 = 'test';
let d1 = {}; //对象可以重新赋值其他类型
let e1 = [];
let arr = [];
let f1 = Symbol();
let g1 = BigInt(123234435345345);
let h1 = function (a, b) {
    return a + b;
};
// console.log(h(1,2));
let i1;
i1 = "hello";
//类型断言 可以用来告诉解释器变量的实际类型
// c = i1   不能使用 因为i的类型是unknown 需要使用类似断言
c1 = i1;
c1 = i1;
//也可以使用判断类型的方式赋值
if (typeof i1 === "string") {
    c1 = i1;
}
