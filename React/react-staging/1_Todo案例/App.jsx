import React, { Component } from "react";
import "./App.css";
import Footer from "./component/footer";
import Header from "./component/header";
import List from "./component/list";

export default class App extends Component {
  /* 
    将状态保存在APP父类组件中
    子类需要修改状态的话可以将状态给父类
    父类再将状态传给其他的子类元素
    
    状态在哪里就得在哪里进行操作
  */
  state = {
    todos: [],
  };
  //添加一个Todo的回调
  addTodo = (todoObj) => {
    // 将头部传送过来的对象进行处理
    const todos = this.state.todos;
    this.setState({ todos: [todoObj, ...todos] });
  };
  
  //修改itme元素选择框的选择状态
  changeChecked = (id, done) => {
    const { todos } = this.state;
    /* 
    遍历后判断
    使用itme传过来的id判断操作的是哪一个状态
    map方法返回一个新的状态    
    */

    /* 不能使用filter方法
        使用的话会导致只显示一个结果 */
    const newTodo = todos.map((itme) => {
      if (itme.id === id) {
        /* 使用...itme 将属性解构赋值出来再将done属性重新设置为更新后的状态
            done会将itme解构赋值出来的done给覆盖 */
        return { ...itme, done };
      } else {
        /* 当前元素与更新状态的id不符 返回原有状态 */
        return itme;
      }
    });
    //修改状态
    this.setState({ todos: newTodo });
  };
  //处理删除Todo的回调
  deleteTodo = (id, name) => {
    const { todos } = this.state;
    if (window.confirm(`确实要删除${name}吗?`)) {
      // 过滤掉要删除的todo（id）
      const newTodo = todos.filter((todoObj) => {
        //判断是否是要删除的id
        //不等于返回 随后进行dif算法
        //等于则不返回
        if (todoObj.id !== id) {
          return todoObj;
        } else {
          return null;
        }
      });
      //将不用删除的todo更新状态
      this.setState({ todos: newTodo });
    }
  };
  //处理全选的回调
  allChecked = (Checkedstate)=> {
    const { todos } = this.state;
    const newTodo = todos.map((itme)=>{
      return {...itme,done:Checkedstate}
    })
    this.setState({todos:newTodo})
  }
  //删除完成的Todo
  delDoneTodo = ()=>{
    const {todos} = this.state
    const newTodos = todos.filter((todoObj)=>{
      if (todoObj.done === false) {
        return todoObj
      }
    })
    this.setState({todos:newTodos})
  }
  render() {
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          {/* 给子组件绑定一个方法来接收子组件要给父元素传递的参数 */}
          <Header addTodo={this.addTodo} />
          {/* 向list传递状态来进行页面的展示 */}
          <List
            todos={this.state.todos}
            changeChecked={this.changeChecked}
            deleteTodo={this.deleteTodo}
          />
          <Footer todos={this.state.todos} allChecked = {this.allChecked} delDoneTodo = {this.delDoneTodo}/>
        </div>
      </div>
    );
  }
}
