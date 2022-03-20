import React, { Component } from "react";
import PubSub from "pubsub-js";
import "./index.css";

export default class index extends Component {
  //初始化状态
  //用户信息，是否是第一次加载，是否加载中，报错信息
  state = { users: [], isFirst: true, isLoading: false, err: "" };

  //接收订阅消息
  componentDidMount() {
    this.token = PubSub.subscribe("usersInfo", (msg, users) => {
      this.setState(users);
    });
  }
  componentWillUnmount() {
    PubSub.unsubscribe(this.token);
  }
  render() {
    const { users, isFirst, isLoading, err } = this.state;
    return (
      <div className="row">
        {isFirst ? (
          <h2 style={{ margin: "0 515px" }}>welcome!</h2>
        ) : isLoading ? (
          <h2 style={{ margin: "0 515px" }}>Loading...</h2>
        ) : err ? (
          <div style={{ margin: "0 441px", color: "red" }}>{err.message}</div>
        ) : (
          users.map((user) => {
            return (
              <div key={user.id} className="card">
                <a rel="noreferrer" href={user.html_url} target="_blank">
                  <img
                    alt="head_portrait"
                    src={user.avatar_url}
                    style={{ width: "100px" }}
                  />
                </a>
                <p className="card-text">{user.login}</p>
              </div>
            );
          })
        )}
      </div>
    );
  }
}
