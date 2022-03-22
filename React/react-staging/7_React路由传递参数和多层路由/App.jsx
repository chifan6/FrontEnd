import React, { Component } from "react";
import { NavLink, Route, Switch, Link, Redirect } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import MyNavLink from "./component/MyNavLink";
import Test from "./pages/Test";

export default class App extends Component {
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
              {/* NavLink 默认有添加active类的属性 如果要添加的属性也叫active可以省略 */}
              {/* MyNavLink 自定义组件  可以根据自己的需求添加属性 
              下面的About文本属性也会被props收集使用children特殊的属性可以拿到当前的文本内容 */}
              <MyNavLink to="/about">About</MyNavLink>
              <NavLink className="list-group-item" to="/home">
                Home
              </NavLink>
              <Link className="list-group-item" to="/test">
                Test
              </Link>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                {/* 包裹再Switch里面的Route只要匹配到了一个就会停止向下匹配以提高效率  */}
                <Switch>
                  <Route path={"/about"} component={About} />
                  <Route path={"/home"} component={Home} />
                  {/* exact 开启严格匹配  Link需要和Route的路径要完美匹配才能实现效果 */}
                  <Route path={"/test"} component={Test} />
                  {/* Redirect组件 需要放在Route组件的后面 当上面的Route组件都没有匹配到地址时Redirect组件可以指定到一个路径 */}
                  <Redirect to={"/about"} />
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
