import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import MyNavLink from "../../component/MyNavLink";
import Message from "./Message";
import News from "./News";

export default class Home extends Component {
  render() {
    /* 多级路由：
        1、 在写地址时需要带上其父组件的路径
            因为react-router-dom 找路径的起点是以第一个注册路由的根目录为起点
            如果只写了/news会再app组件中找/news显然找不到 此时会使用Redirect指定到一个固定的组件
        2、 使用严格匹配的话而且当前路由最后使用了Redirect组件会导致Home导航点击不了
            当前路由最后没使用Redirect组件会导致外面的Redirect执行

            在多级路由中不使用严格匹配
        */
    return (
      <div>
        <h3>Home组件内容</h3>
        <ul className="nav nav-tabs">
          <li>
            <MyNavLink to="/home/news">News</MyNavLink>
          </li>
          <li>
            <MyNavLink to="/home/message">Message</MyNavLink>
          </li>
        </ul>
        <Switch>
          <Route path={"/home/news"} component={News}></Route>
          <Route path={"/home/message"} component={Message}></Route>
          <Redirect to={"/home/news"} />
        </Switch>
      </div>
    );
  }
}
