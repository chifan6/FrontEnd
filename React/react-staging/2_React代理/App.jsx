import React, { Component } from "react";
import axios from "axios";

export default class App extends Component {
  //处理获取学生的回调
  getStudents = () => {
    axios.get("http://localhost:3000/api1/students").then(
      (respone) => {
        console.log(respone.data);
      },
      (renson) => {
        throw renson;
      }
    );
  };
  //处理获取汽车的回调
  getCars = () => {
    axios.get("http://localhost:3000/api2/cars").then(
      (respone) => {
        console.log(respone.data);
      },
      (renson) => {
        throw renson;
      }
    );
  };
  render() {
    return (
      <div>
        <button onClick={this.getStudents}>点击获取学生信息</button>
        <button onClick={this.getCars}>点击获取汽车信息</button>
      </div>
    );
  }
}
