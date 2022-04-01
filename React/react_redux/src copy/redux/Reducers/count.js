// 引入type防止写错
import { PLUS, MINUS } from "../constate";

let init = 0;
export default function count(preState = init, action) {
  const { type, date } = action;
  switch (type) {
    case PLUS:
      return preState + date;
    case MINUS:
      return preState - date;
    default:
      //设置初始化
      return preState;
  }
}
