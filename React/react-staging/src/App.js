import React from "react";
import "./App.css";
import Footer from "./component/footer";
import Header from "./component/header";
import List from "./component/list";

export default function App() {
  return (
    <div className="todo-container">
      <div className="todo-wrap">
        <Header />
        <List />
        <Footer />
      </div>
    </div>
  );
}
