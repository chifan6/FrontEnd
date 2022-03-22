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
  PushShow = (id, title) => {
    return () => {
      const { push } = this.props.history;
      //路由中的push方法是叠加的（可以进行撤回到上一步的操作）
      // push(`/home/message/detail/?id=${id}&title=${title}`);
      push(`/home/message/detail`, { id, title });
    };
  };
  ReplaceShow = (id, title) => {
    return () => {
      const { replace } = this.props.history;
      //路由中的replace是覆盖的效果使用后会撤回不会返回上一步
      replace(`/home/message/detail`, { id, title });
    };
  };

  // 处理回退一步的回调
  goBack = () => {
    const { goBack } = this.props.history;
    goBack();
  };
  goForward = () => {
    const { goForward } = this.props.history;
    goForward();
  };
  go = () => {
    const { go } = this.props.history;
    //传正数向前进  传负数退后
    go(2); //向前两步
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
                  replace
                  to={`/home/message/detail/?id=${message.id}&title=${message.title}`}
                >
                  {message.title}
                </Link> */}
                {/* state传递路由参数 */}
                <Link
                  to={{
                    pathname: "/home/message/detail",
                    state: { id: message.id, title: message.title },
                  }}
                >
                  {message.title}
                </Link>
                {/* 传递state状态时使用的时下面的方法 */}
                <button onClick={this.PushShow(message.id, message.title)}>
                  push
                </button>
                &nbsp;
                <button onClick={this.ReplaceShow(message.id, message.title)}>
                  replace
                </button>
                &nbsp;&nbsp;
              </li>
            );
          })}
        </ul>
        {/* 注册路由 */}
        <Route
          /* 接收params参数 需要提前声明接收的参数名 */
          // path={"/home/message/detail/:id/:title"}
          path={"/home/message/detail"}
          component={Detail}
        ></Route>
        {/* <Redirect
          to={`/home/message/detail/?id=${this.state.messageArr[0].id}&title=${this.state.messageArr[0].title}&content="This is One"`}
        /> */}
        {/* 回退一步 */}
        <button onClick={this.goBack}>goBack</button>&nbsp;
        {/* 前进一步 */}
        <button onClick={this.goForward}>goForward</button>&nbsp;
        <button onClick={this.go}>go</button>
      </div>
    );
  }
}
