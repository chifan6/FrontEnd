import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";

/* class Hook extends React.Component {
  state = { count: 0 };
  //点击添加的回调
  add = () => {
    this.setState((state) => ({ count: state.count + 1 }));
  };

  //点击删除元素的回调
  del = () => {
    ReactDOM.unmountComponentAtNode(document.getElementById("root"));
  };

  //组件挂载完成后的回调
  componentDidMount = () => {
    // this.timer = setInterval(() => {
    //   this.setState((state) => ({ count: state.count + 1 }));
    // }, 1000);
  };

  //组件卸载前的钩子
  componentWillUnmount = () => {
    //关闭定时器
    clearInterval(this.timer);
  };

  render() {
    console.log(this);
    return (
      <div>
        <h1>当前求和为：{this.state.count}</h1>
        <button onClick={this.add}>点击+1</button>
        <button onClick={this.del}>点击删除组件</button>
      </div>
    );
  }
} */

function Hook(props) {
  //点击添加1的函数
  function add() {
    setCount(count + 1);
  }
  //点击删除组件的函数
  function del() {
    props.del();
  }
  //创建输入框的Ref
  let myRef = useRef();
  //点击显示输入框内容的函数
  function show() {
    alert(myRef.current.value);
  }
  //初始化求和状态
  const [count, setCount] = useState(0);

  //使用生命周期的hook
  // 不传第二个参数为数组的话给hook会像componentDidMount和componentUpDate
  //   传了第二个参数为数组的话，如果数组中没有参数则就跟componentDidMount类似
  //                           如果数组的参数为要监测的状态，当状态发生了更新时会重新调用这个组件
  //   userEffect 如果有返回值则就会跟componentWillUnMount类似

  useEffect(() => {
    //开启一个定时器
    let timer = setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);
    return () => {
      //卸载前关闭定时器
      clearInterval(timer);
    };
  }, []);
  return (
    <>
      <input type="text" ref={myRef} />
      <h1>当前求和为：{count}</h1>
      <button onClick={add}>点击+1</button>
      <button onClick={del}>点击删除组件</button>
      <button onClick={show}>点击显示输入框的内容</button>
    </>
  );
}

export default Hook;
