import React, { Component } from "react";
import axios from "axios";
import PubSub from "pubsub-js";

export default class Section extends Component {
  //初始化状态
  state = { TypeInfo: "" };

  //搜索的回调
  search = () => {
    const { TypeInfo } = this.state;
    //发送订阅消息
    PubSub.publish("usersInfo", { isFirst: false, isLoading: true });
    //发送axios请求
    axios.get(`http://localhost:3000/api1/search/users?q=${TypeInfo}`).then(
      (response) => {
        //发送订阅消息
        PubSub.publish("usersInfo", {
          users: response.data.items,
          isLoading: false,
        });
      },
      (reason) => {
        //发送订阅消息
        PubSub.publish("usersInfo", { err: reason, isLoading: false });
      }
    );
  };
  //使用受控组件保存输入的信息到状态
  searchInfo = (event) => {
    //多层解构赋值
    const {
      target: { value },
    } = event;
    this.setState({ TypeInfo: value });
  };

  render() {
    return (
      <section className="jumbotron" style={{ backgroundColor: "pink" }}>
        <h3 className="jumbotron-heading">搜索Github用户</h3>
        <div>
          <input
            type="text"
            placeholder="输入用户名进行搜索"
            onChange={this.searchInfo}
          />
          &nbsp;<button onClick={this.search}>搜索</button>
        </div>
      </section>
    );
  }
}
