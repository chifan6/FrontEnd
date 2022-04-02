import React, { Component, lazy, Suspense } from "react";
import { NavLink, Switch, Route } from "react-router-dom";
// import About from "../about";
// import Home from "../home";
//使用懒加载的方式导入组件
//lazy是个函数 函数的返回值是一个导入的组件
//加载用来提示加载中的组件时不能使用懒加载需使用原来的加载方式
const About = lazy(() => import("../about"));
const Home = lazy(() => import("../home"));

export default class Lazy extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <div className="page-header">
              <h2>React Router Demo</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              <NavLink className="list-group-item" to="/about">
                About
              </NavLink>
              <NavLink className="list-group-item" to="/home">
                Home
              </NavLink>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                <Switch>
                  {/* 当使用了react的懒加载就必须要在所有的Route组件的外层包裹一个Suspense组件
                    主要的作用是用来当懒加载为加载错来的使用拿来做提示的组件 
                    使用fallback来指定一个组件用来提示*/}
                  <Suspense fallback={<h1>loading...</h1>}>
                    {/* 包裹再Switch里面的Route只要匹配到了一个就会停止向下匹配以提高效率  */}
                    <Route path={"/about"} component={About} />
                    <Route path={"/home"} component={Home} />
                  </Suspense>
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
