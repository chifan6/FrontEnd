import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class MyNavLink extends Component {
  render() {
    return (
      /* 这里可以写公用的属性以达到使用NavLink组件时更加的简洁 */
      <NavLink
        className="list-group-item"
        activeClassName="test"
        {...this.props}
      />
    );
  }
}
