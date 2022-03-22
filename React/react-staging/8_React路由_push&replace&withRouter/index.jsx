import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

ReactDOM.render(
  // BorwserRoute 1、对state刷新时不会丢失数据 2、不兼容IE9及以下的版本
  // HashRouter   1、对state刷新的数据会丢失 2、兼容性比BorwserRoute高
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
