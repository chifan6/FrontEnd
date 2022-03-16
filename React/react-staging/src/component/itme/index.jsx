import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";

export default class Itme extends Component {
  //定义一个flag状态用来标志鼠标是否移入到元素上
  //默认为未移入
  state = { flag: false };
  // 处理绑定事件
  //使用!高阶函数来处理传来的参数
  handleMouse = (flag) => {
    return () => {
      //更新状态
      this.setState({ flag });
    };
  };

  render() {
    const { name, done } = this.props;
    const { flag } = this.state;
    return (
      <li
        style={{ backgroundColor: flag ? "#ddd" : "#fff" }}
        onMouseEnter={this.handleMouse(true)}
        onMouseLeave={this.handleMouse(false)}
      >
        <label>
          {/* 
          Checked 该属性为只读不能使用状态进行更新
          defaultChecked 可以修改 */}
          <input type="checkbox" defaultChecked={done} />
          <span>{name}</span>
        </label>
        <button
          className="btn btn-danger"
          style={{ display: flag ? "block" : "none" }}
        >
          删除
        </button>
      </li>
    );
  }
}
