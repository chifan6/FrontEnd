import { PLUS, MINUS } from "./constate";
//创建action对象 使用函数返回的方法
//接收一个date参数

export const plus = (date) => ({ type: PLUS, date });
export const minus = (date) => ({ type: MINUS, date });
