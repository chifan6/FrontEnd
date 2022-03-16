import React, { Component } from "react";
import Itme from "../itme";
import "./index.css";

export default class List extends Component {
  render() {
    const { todos } = this.props;
    return (
      <ul className="todo-main">
        {todos.map((itme) => {
          return <Itme key={itme.id} {...itme} />;
        })}
      </ul>
    );
  }
}
