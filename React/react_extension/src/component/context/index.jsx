import React, { Component, createContext, useState } from "react";
import "./index.css";

const MyContext = createContext();
const { Provider, Consumer } = MyContext;

export default function A() {
  const [username] = useState("Jack");
  return (
    <div className="A">
      <h3>函数式组件A</h3>
      <h4>姓名为：{username}</h4>
      <Provider value={username}>
        <B />
      </Provider>
    </div>
  );
}

class B extends Component {
  // 接收父组件的context
  static contextType = MyContext;
  render() {
    return (
      <div className="B">
        <h3>类式组件B</h3>
        <h4>接收到的姓名为：{this.context}</h4>
        <C />
      </div>
    );
  }
}

function C() {
  return (
    <div className="C">
      <h3>函数式组件C</h3>
      <h4>
        接收到的姓名为：
        <Consumer>
          {(value) => {
            return value;
          }}
        </Consumer>
      </h4>
    </div>
  );
}
