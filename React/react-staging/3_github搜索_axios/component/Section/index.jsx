import React, { Component } from "react";
import axios from "axios";

export default class Section extends Component {
  //初始化状态
  state = { TypeInfo: "" };
  //搜索的回调
  search = () => {
    const { seveUsers } = this.props;
    const { TypeInfo } = this.state;
    seveUsers({ isFirst: false, isLoading: true });
    //发送axios请求
    axios.get(`http://localhost:3000/api1/search/users?q=${TypeInfo}`).then(
      (response) => {
        seveUsers({ users: response.data.items, isLoading: false });
      },
      (reason) => {
        seveUsers({ err: reason, isLoading: false });
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
      <section className="jumbotron">
        <h3 className="jumbotron-heading">Search Github Users</h3>
        <div>
          <input
            type="text"
            placeholder="enter the name you search"
            onChange={this.searchInfo}
          />
          &nbsp;<button onClick={this.search}>Search</button>
        </div>
      </section>
    );
  }
}
