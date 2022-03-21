import React, { Component } from "react";

export default class Detail extends Component {
  render() {
    /* 接收params参数 */
    const { state } = this.props.location;
    const msgArr = [
      { id: "1", context: "This is One" },
      { id: "2", context: "This is Two" },
      { id: "3", context: "This is Three" },
    ];
    const result = msgArr.find((msg) => {
      return msg.id === state.id;
    });
    return (
      <div>
        <hr style={{ backgroundColor: "#c3c3c3" }} />
        <ul>
          <li>id = {state.id}</li>
          <li>title = {state.title}</li>
          <li>context = {result.context}</li>
        </ul>
      </div>
    );
  }
}
