//设置初始化
const preStateInit = 0;
export default function countReducer(preState = preStateInit, action) {
  const { type, date } = action;
  switch (type) {
    case "plus":
      return preState + date;
    case "minus":
      return preState - date;
    default:
      return preState;
  }
}
