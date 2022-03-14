import React, { Component } from "react";
import "./index.css";

export default class Header extends Component {
  test = () => {
    console.log(this.input1);
  };
  render() {
    return (
      <div className="todo-header">
        <input
          ref={(e) => {
            this.input1 = e;
          }}
          type="text"
          onFocus={this.test}
          placeholder="请输入你的任务名称，按回车键确认"
        />
      </div>
    );
  }
}
