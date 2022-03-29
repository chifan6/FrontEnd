import React, { Component } from "react";
import { Button, Select } from "antd";
import "antd/dist/antd.less";
const { Option } = Select;

export default class Count extends Component {
  //保存用户输入的结果 并且默认值为1
  state = { userValue: 1 };
  //保存用户输入结果的回调
  handleCheange = (event) => {
    const value = event;
    this.setState({ userValue: value });
  };
  //加
  plus = () => {
    const { userValue } = this.state;
    this.props.plus(+userValue);
  };
  //减
  minus = () => {
    const { userValue } = this.state;
    this.props.minus(+userValue);
  };
  //当求和结果未奇数时添加的回调
  plusOdd = () => {
    const { userValue } = this.state;
    //解构赋值父组件传递过来的redux状态
    const { count } = this.props;
    if (count % 2 !== 0) {
      this.props.plus(+userValue);
    }
  };
  //异步加的回调
  plusAsyn = () => {
    const { userValue } = this.state;
    this.props.asynPlus(+userValue, 500);
  };
  //清除求和回调
  clearCount = () => {
    this.props.clear();
  };
  render() {
    // 解构赋值从父组件传入的props
    const { count } = this.props;
    return (
      <div>
        <h1>当前求和为：{count}</h1>
        <Select
          style={{ width: 120 }}
          onChange={this.handleCheange}
          defaultValue="1"
        >
          <Option value="1">1</Option>
          <Option value="2">2</Option>
          <Option value="3">3</Option>
        </Select>
        &nbsp;
        <Button type="primary" onClick={this.plus}>
          +
        </Button>
        &nbsp;
        <Button type="primary" onClick={this.minus}>
          -
        </Button>
        &nbsp;
        <Button type="primary" onClick={this.plusOdd}>
          当前求和为奇数再加
        </Button>
        &nbsp;
        <Button type="primary" onClick={this.plusAsyn}>
          异步加
        </Button>
        &nbsp;
        <Button type="primary" onClick={this.clearCount}>
          清除求和
        </Button>
        &nbsp;
      </div>
    );
  }
}
