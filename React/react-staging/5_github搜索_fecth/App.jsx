import React, { Component } from "react";
import List from "./component/List";
import Section from "./component/Section";

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <Section />
        <List />
      </div>
    );
  }
}
