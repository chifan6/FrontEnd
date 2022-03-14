import React, { Component } from "react";
import Itme from "../itme";
import "./index.css";

export default class List extends Component {
  render() {
    return (
      <ul className="todo-main">
        <Itme />
      </ul>
    );
  }
}
