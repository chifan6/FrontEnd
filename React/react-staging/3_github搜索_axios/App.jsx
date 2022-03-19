import React, { Component } from "react";
import List from "./component/List";
import Section from "./component/Section";

export default class App extends Component {
  //初始化状态
  //用户信息，是否是第一次加载，是否加载中，报错信息
  state = { users: [], isFirst: true, isLoading: false, err: "" };
  //保存用户数据到状态的回调
  seveUsers = (usersObj) => {
    this.setState(usersObj);
  };
  render() {
    return (
      <div className="container">
        <Section seveUsers={this.seveUsers} />
        <List {...this.state} />
      </div>
    );
  }
}
