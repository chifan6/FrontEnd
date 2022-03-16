import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./App.css";
import Footer from "./component/footer";
import Header from "./component/header";
import List from "./component/list";

export default class App extends Component {
  /* 
    将状态保存在APP父类组件中
    子类需要修改状态的话可以将状态给父类
    父类再将状态传给其他的子类元素
  */
  state = {
    todos: [],
  };
  addTodo = (todoObj) => {
    // 将头部传送过来的对象进行处理
    const todos = this.state.todos;
    this.setState({ todos: [todoObj, ...todos] });
  };
  render() {
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          {/* 给子组件绑定一个方法来接收子组件要给父元素传递的参数 */}
          <Header addTodo={this.addTodo} />
          {/* 向list传递状态来进行页面的展示 */}
          <List todos={this.state.todos} />
          <Footer />
        </div>
      </div>
    );
  }
}
