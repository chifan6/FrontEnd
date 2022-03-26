// createStore 创建一个Store
// applyMiddleware 处理异步action的必须方法
import { createStore, applyMiddleware } from "redux";
//引入redux-thunk让store能处理异步action
import thunk from "redux-thunk";
import countReducer from "./count_Reducers";

//创建store并设置reducer
export default createStore(countReducer, applyMiddleware(thunk));
