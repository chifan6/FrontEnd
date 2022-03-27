import { PLUS, MINUS } from "./constate";
//创建action对象 使用函数返回的方法
//接收一个date参数

//同步action返回值是一个一般的对象
export const plus = (date) => ({ type: PLUS, date });
export const minus = (date) => ({ type: MINUS, date });

//定义一个定时器的保留解决开启多个一样的定时器问题
let timer;
//异步action (返回值是一个函数,里面使用的是异步的方法)
export const asynPlus = (date, time) => {
  //使用异步action时返回的函数中store会向函数中传递一个dispatch参数
  //不需要引入store文件(store.dispatch)就能使用到dispatch
  //因为是异步action,store会知道要使用dispatch方法
  return (dispatch) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      //发送一个action给store
      //store执行完这个函数后后得到下面的结果
      dispatch(plus(date));
    }, time);
  };
};
