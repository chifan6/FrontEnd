import React, { Component } from "react";
import PubSub from "pubsub-js";

export default class Section extends Component {
  //初始化状态
  state = { TypeInfo: "" };

  //搜索的回调
  search = async () => {
    const { TypeInfo } = this.state;
    //发送订阅消息
    PubSub.publish("usersInfo", { isFirst: false, isLoading: true });
    //发送axios请求
    /* axios.get(`http://localhost:3000/api1/search/users?q=${TypeInfo}`).then(
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
    ); */

    /* 
     1、fecth首先会返回一个服务器是否请求成功的Promise对象但不会返回数据
     2、使用response.json()才可以拿到服务器返回的数据内容
     3、发送请求时只要到达了服务器就会返回成功会调用成功的promise
    */

    //发送fecth请求（未优化）

    /*     fetch(`http://localhost:3000/api1/search2/users?q=${TypeInfo}`)
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        //发送订阅消息
        PubSub.publish("usersInfo", {
          users: response.items,
          isLoading: false,
        });
      })
      .catch((reason) => {
        //发送订阅消息
        PubSub.publish("usersInfo", { err: reason, isLoading: false });
      }); */

    //发送fect请求（优化）
    try {
      const data = await fetch(
        `http://localhost:3000/api1/search/users?q=${TypeInfo}`
      ); //返回一个promise对象可以使用await接收
      const result = await data.json(); //await后面只能写promise对象

      //发送订阅消息
      PubSub.publish("usersInfo", {
        users: result.items,
        isLoading: false,
      });
    } catch (error) {
      //发送订阅消息
      PubSub.publish("usersInfo", { err: error, isLoading: false });
    }
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
