// createStore 创建一个Store
// applyMiddleware 处理异步action的必须方法
import { createStore, applyMiddleware } from "redux";
//引入redux-thunk让store能处理异步action
import thunk from "redux-thunk";
//引入Reducers
import Reducers from "../redux/Reducers";
//引入redux开发工具依赖库
import { composeWithDevTools } from "redux-devtools-extension";

//创建store并设置reducer
export default createStore(
  Reducers,
  //composeWithDevTools需要在第二个参数
  //如果需要使用到异步actio则将异步action传入到 composeWithDevTools的参数中
  composeWithDevTools(applyMiddleware(thunk))
);
