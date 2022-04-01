import React, { Component } from "react";
import { nanoid } from "nanoid";
import { connect } from "react-redux";
import { Form, Input, Button, List } from "antd";
import { AddPersonAction } from "../../redux/actions/person";

class Person extends Component {
  state = { data: [] };
  addPerson = () => {
    //用户输入的姓名
    let { value: username } = this.username.input;
    //用户输入的年龄
    let { value: age } = this.age.input;
    const personObj = { key: nanoid(), username, age };
    this.props.AddPersonAction(personObj);

    //将数据添加到data中用来在页面显示
    let personString = `姓名为：${personObj.username}---年龄为：${personObj.age}`;
    this.setState({ data: [personString, ...this.state.data] });
  };
  render() {
    return (
      <div>
        <h1>Person组件,上方和为：{this.props.count}</h1>
        <Form
          name="basic"
          labelCol={{ span: 2 }}
          wrapperCol={{ span: 8 }}
          autoComplete="off"
        >
          <Form.Item
            label="姓名"
            name="username"
            rules={[{ required: true, message: "请输入您的姓名!" }]}
          >
            <Input ref={(c) => (this.username = c)} allowClear />
          </Form.Item>

          <Form.Item
            label="年龄"
            name="age"
            rules={[{ required: true, message: "请输入您的年龄!" }]}
          >
            <Input ref={(c) => (this.age = c)} allowClear value="ste" />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 4, span: 4 }}>
            <Button type="primary" htmlType="submit" onClick={this.addPerson}>
              添加
            </Button>
          </Form.Item>
        </Form>
        <List
          size="small"
          bordered
          dataSource={this.state.data}
          renderItem={(item) => <List.Item>{item}</List.Item>}
        />
      </div>
    );
  }
}
export default connect(
  (state) => ({ person: state.person, count: state.count }),
  {
    AddPersonAction,
  }
)(Person);
