// console.log("hello ts");
let a = 1;
let b = true;
let c = 'test';
let d = {};//对象可以重新赋值其他类型
let e = [];
let f = Symbol();
let g = BigInt(123234435345345);
let h = function (a: number,b: number): number {
    return a + b
}
// console.log(h(1,2));
let i: unknown;
i = 1;
//类型断言 可以用来告诉解释器变量的实际类型
// c = i   不能使用 因为i的类型是unknown 需要使用类似断言
c = <string>i;
c = i as string
//也可以使用判断类型的方式赋值
if (typeof i === "string"){
    c = i
}