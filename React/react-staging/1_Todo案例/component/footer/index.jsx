import React, { Component } from "react";
import "./index.css";

export default class Footer extends Component {
  //处理全选按钮
  handleCheckbox = (allChecked) => {
    return (event) => {
      const currChecked = event.target.checked;
      allChecked(currChecked);
    };
  };
  //判断选择框是否全选的回调
  allChecked = (doneCount, total) => {
    //如果为当前任务为0
    //默认全选框为不选择
    if (doneCount === 0) {
      doneCount = null;
    }
    return doneCount === total ? true : false;
  };
  render() {
    const { todos, allChecked, delDoneTodo } = this.props;
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
          <input
            type="checkbox"
            onChange={this.handleCheckbox(allChecked)}
            checked={this.allChecked(doneCount, total)}
          />
        </label>
        <span>
          <span>已完成{doneCount}</span> / 全部{total}
        </span>
        <button className="btn btn-danger" onClick={delDoneTodo}>
          清除已完成任务
        </button>
      </div>
    );
  }
}
