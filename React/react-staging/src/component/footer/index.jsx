import React, { Component } from "react";
import "./index.css";

export default class Footer extends Component {
  render() {
    const { todos } = this.props;
    /* let count = 0;
    for (let i = 0; i < todos.length; i++) {
      if (todos[i].done === true) {
        count++;
      }
    } */

    /* reduce((函数之前的返回值,当前的元素的值)=>{},默认初始值) */
    const doneCount = todos.reduce((pra, todo) => {
      return pra + (todo.done ? 1 : 0);
    }, 0);

    //任务总量
    const total = todos.length;
    return (
      <div className="todo-footer">
        <label>
          <input type="checkbox" />
        </label>
        <span>
          <span>已完成{doneCount}</span> / 全部{total}
        </span>
        <button className="btn btn-danger">清除已完成任务</button>
      </div>
    );
  }
}
