import { createStore } from "redux";
import countReducer from "./count_Reducers";

//创建store并设置reducer
export default createStore(countReducer);
