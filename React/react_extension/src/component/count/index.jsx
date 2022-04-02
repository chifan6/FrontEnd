import React, { Component } from "react";

export default class Count extends Component {
  state = { count: 0 };
  add = () => {
    // const { count } = this.state;
    // this.setState({ count: count + 1 });
    // this.setState({ count: this.state.count + 1 });

    //函数系能接收到两个参数 一个是组件的状态 一个是组件的props
    this.setState((state, props) => {
      return { count: state.count + 1 };
    });
  };
  render() {
    return (
      <div>
        <h1>当前求和为：{this.state.count}</h1>
        <button onClick={this.add}>点击加1</button>
      </div>
    );
  }
}
