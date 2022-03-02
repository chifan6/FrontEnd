// console.log("hello ts");
// @ts-ignore
let a = 1;
let b1 = true;
let c1 = 'test';
let d1 = {};//对象可以重新赋值其他类型
let e1 = [];
let arr:number[] = [];
let f1 = Symbol();
let g = BigInt(123234435345345);
let h = function (a: number,b: number): number {
    return a + b
}
// console.log(h(1,2));
let i: unknown;
i = "hello";
//类型断言 可以用来告诉解释器变量的实际类型
// c = i   不能使用 因为i的类型是unknown 需要使用类似断言
c1 = <string>i;
c1 = i as string;
//也可以使用判断类型的方式赋值
if (typeof i === "string"){
    c1 = i
}