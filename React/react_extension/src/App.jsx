import React, { Component } from "react";
// import Count from "./component/count";
// import Lazy from "./component/lazy";
// import Hook from "./component/hook";
// import Context from "./component/context";
// import PureComponent from "./component/pureComponent";
// import RenderProps from "./component/renderProps";
import Boundary from "./component/errorBoundary/Parent"

export default class App extends Component {
  render() {
    return (
      <>
        <Boundary/>
      </>
    );
  }
}
