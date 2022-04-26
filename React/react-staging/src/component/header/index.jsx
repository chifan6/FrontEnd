import React, { Component } from "react";
import PropTypes from "prop-types";
import { nanoid } from "nanoid";
import "./index.css";

export default class Header extends Component {
  /* 对属性进行限制 */
  static propType = {
    addTodo: PropTypes.func.isRequired,
  };

  handleKey = (event) => {
    const itme = event.target;
    const { addTodo } = this.props;
    if (event.key !== "Enter") return;
    //如果出去空格后还是""则为空
    if (itme.value.trim() === "") {
      alert("输入为空");
      return;
    }
    //id使用nanoid生成世界上不会重复的id
    //done默认为未完成
    const todoObj = { id: nanoid(), name: itme.value, done: false };
    //将状态传给app父组件
    //因为父组件给给子组件绑定了事件并接受一个参数
    //可以供子元素传
    //这样可以实现子组件给父组件传递参数的操作
    addTodo(todoObj);
    itme.value = "";
  };
  render() {
    return (
      <div className="todo-header">
        <input
          /* 绑定键盘抬起事件这样可以完全证明用户已经从键盘中输入完成 */
          onKeyUp={this.handleKey}
          type="text"
          placeholder="请输入你的任务名称，按回车键确认"
        />
      </div>
    );
  }
}
