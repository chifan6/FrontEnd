import React, { Component } from "react";
import PropTypes from "prop-types";
import "./index.css";

export default class Itme extends Component {
  static propTypes = {
    changeChecked: PropTypes.func,
  };

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
  //更改选择框的选中状态回调
  changeCheckbox = (id, changeChecked) => {
    return (event) => {
      changeChecked(id, event.target.checked);
    };
  };
  //删除todo的回调
  deleteTodo = (id, name) => {
    return () => {
      this.props.deleteTodo(id, name);
    };
  };
  render() {
    const { id, name, done, changeChecked } = this.props;
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
          <input
            type="checkbox"
            checked={done}
            onChange={this.changeCheckbox(id, changeChecked)}
          />
          <span>{name}</span>
        </label>
        <button
          onClick={this.deleteTodo(id, name)}
          className="btn btn-danger"
          style={{ display: flag ? "block" : "none" }}
        >
          删除
        </button>
      </li>
    );
  }
}
