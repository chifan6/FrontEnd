import React, { Component, createContext } from "react";
import "./index.css";

const MyContext = createContext();
const { Provider, Consumer } = MyContext;
export default class A extends Component {
  state = { username: "zhangsan", age: 20 };

  render() {
    console.log(MyContext);

    return (
      <div className="A">
        <h3>This is A component</h3>
        {/* 向后代组件传递参数 */}
        <Provider value={this.state}>
          <B />
        </Provider>
      </div>
    );
  }
}
class B extends Component {
  render() {
    return (
      <div className="B">
        <h3>This is B component</h3>
        <h4>Received component A with the name:{}</h4>
        <C />
      </div>
    );
  }
}
/* class C extends Component {
  //订阅Context参数
  static contextType = MyContext;

  render() {
    const { username, age } = this.context;
    return (
      <div className="C">
        <h3>This is C component</h3>
        <h4>
          Received component A with the name:{username} and age:{age}
        </h4>
      </div>
    );
  }
} */
function C() {
  return (
    <div className="C">
      <h3>This is C component</h3>
      <h4>
        Received component A with the name:
        {/* Consumer 专门用来为函数接收Context的参数
        因为函数中没有this所有不能使用this.context来获取到 */}
        <Consumer>
          {(value) => `${value.username} and age: ${value.age}`}
        </Consumer>
      </h4>
    </div>
  );
}
