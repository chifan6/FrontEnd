import { connect } from "react-redux";
import { plus, minus, asynPlus, clear } from "../../redux/count_action";
import Count from "../../component/count";

/* connect()() 第一个括号传递两个参数：
                                    1、传递给子组件状态的方法
                                    2、传递给子组件处理状态的方法
                第二个括号：需要连接的UI组件(子组件) */
export default connect(
  (state) =>
    //返回一个状态对象
    ({ count: state }),
  {
    plus,
    minus,
    asynPlus,
    clear,
  }
)(Count);
