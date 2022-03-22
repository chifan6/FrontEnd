import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Header extends Component {
  goBack = () => {
    const { goBack } = this.props.history;
    goBack();
  };
  goFroward = () => {
    const { goForward } = this.props.history;
    goForward();
  };
  go = () => {
    const { go } = this.props.history;
    go(2);
  };
  render() {
    return (
      <div className="page-header">
        <h2>React Router Demo</h2>
        <button onClick={this.goBack}>goBack</button>
        <button onClick={this.goFroward}>goForward</button>
        <button onClick={this.go}>go</button>
      </div>
    );
  }
}
// withRouter 可以将一个一般组件处理成一个路由组件  （像一般组件传递路由组件的三个属性）
export default withRouter(Header);
