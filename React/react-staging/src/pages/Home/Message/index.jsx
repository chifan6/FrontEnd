import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import Detail from "./Detail";

export default class Message extends Component {
  state = {
    messageArr: [
      { id: "1", title: "messageOne" },
      { id: "2", title: "messageTwo" },
      { id: "3", title: "messageThree" },
    ],
  };
  render() {
    const { messageArr } = this.state;
    return (
      <div>
        <ul>
          {messageArr.map((message) => {
            return (
              <li key={message.id}>
                {/* params传递路由参数 */}
                {/* <Link
                  to={`/home/message/detail/?id=${message.id}&title=${message.title}`}
                > */}
                {/* search传递路由参数 */}
                {/* <Link
                  to={`/home/message/detail/?id=${message.id}&title=${message.title}`}
                > */}
                {/* state传递路由参数 */}
                <Link
                  to={{
                    pathname: "/home/message/detail",
                    state: { id: message.id, title: message.title },
                  }}
                >
                  {message.title}
                </Link>
                &nbsp;&nbsp;
              </li>
            );
          })}
        </ul>
        {/* 注册路由 */}
        <Route
          /* 接收params参数  */
          // path={"/home/message/detail/:id/:title"}
          path={"/home/message/detail"}
          component={Detail}
        ></Route>
      </div>
    );
  }
}
