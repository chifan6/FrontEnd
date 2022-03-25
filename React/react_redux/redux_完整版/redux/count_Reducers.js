// 引入type防止写错
import { PLUS, MINUS } from "./constate";
//设置初始化
export default function countReducer(preState, action) {
  const { type, date } = action;
  switch (type) {
    case PLUS:
      return preState + date;
    case MINUS:
      return preState - date;
    default:
      return 0;
  }
}
