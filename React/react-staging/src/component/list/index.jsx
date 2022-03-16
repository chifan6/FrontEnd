import React, { Component } from "react";
import PropTypes from "prop-types";
import Itme from "../itme";
import "./index.css";

export default class List extends Component {
  /* 对属性进行限制 */
  static propTypes = {
    todos: PropTypes.array.isRequired,
    changeChecked: PropTypes.func.isRequired,
  };
  /* 挂载组件 */
  render() {
    const { todos, changeChecked } = this.props;
    return (
      <ul className="todo-main">
        {todos.map((itme) => {
          return <Itme key={itme.id} {...itme} changeChecked={changeChecked} />;
        })}
      </ul>
    );
  }
}
