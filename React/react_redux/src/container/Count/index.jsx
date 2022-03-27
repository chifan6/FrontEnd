import { connect } from "react-redux";
import { plus, minus, asynPlus } from "../../redux/count_action";
import Count from "../../component/count";

const mapStateToProps = (state) => {
  //返回一个状态对象
  return { count: state };
};
const mapDispatchToProps = (dispatch) => {
  //返回处理状态的方法对象
  return {
    plus: (date) => {
      dispatch(plus(date));
    },
    minus: (date) => {
      dispatch(minus(date));
    },
    asynPlus: (date, time) => {
      dispatch(asynPlus(date, time));
    },
    clear: () => {
      dispatch({ type: "clear" });
    },
  };
};

/* connect()() 第一个括号传递两个参数：
                                    1、传递给子组件状态的方法
                                    2、传递给子组件处理状态的方法
                第二个括号：需要连接的UI组件(子组件) */
export default connect(mapStateToProps, mapDispatchToProps)(Count);
