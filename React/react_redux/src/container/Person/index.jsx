import React, { Component } from "react";
import { connect } from "react-redux";
import { Form, Input, Button, List } from "antd";

class Person extends Component {
  state = { data: [] };
  addPerson = () => {
    const { value: username } = this.username.input;
    const { value: age } = this.age.input;
    const person = { username, age };
  };
  render() {
    return (
      <div>
        <h1>Person组件</h1>
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
            <Input ref={(c) => (this.username = c)} />
          </Form.Item>

          <Form.Item
            label="年龄"
            name="age"
            rules={[{ required: true, message: "请输入您的年龄!" }]}
          >
            <Input ref={(c) => (this.age = c)} />
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
export default connect()(Person);
