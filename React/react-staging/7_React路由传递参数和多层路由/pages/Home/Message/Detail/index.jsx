import React, { Component } from "react";
import qs from "querystring";

export default class Detail extends Component {
  render() {
    /* // 接收params参数
    const {params} = this.props.match; */

    //接收search参数
    const { search } = this.props.location;
    //使用qs.parse将一个字符串"name=test&age=10"类型转换为一个对象
    const searchObj = qs.parse(search.slice(1));
    /* //接收state参数
    const { state } = this.props.location; */
    // console.log(this.props);
    const msgArr = [
      { id: "1", content: "This is One" },
      { id: "2", content: "This is Two" },
      { id: "3", content: "This is Three" },
    ];
    const result = msgArr.find((msg) => {
      return msg.id === searchObj.id;
    });
    // console.log(result);
    return (
      <div>
        <hr style={{ backgroundColor: "#c3c3c3" }} />
        <ul>
          <li>id = {searchObj.id}</li>
          <li>title = {searchObj.title}</li>
          <li>content = {result.content}</li>
        </ul>
      </div>
    );
  }
}
