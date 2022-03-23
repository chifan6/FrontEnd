import React from "react";
import { Button } from "antd";
import "antd/dist/antd.less";
import { StepBackwardOutlined, LeftCircleTwoTone } from "@ant-design/icons";

const test = () => {
  console.log("test");
};
const App = () => (
  <div className="App">
    <Button type="primary">Button</Button>
    <StepBackwardOutlined
      style={{ fontSize: "129px", color: "red" }}
      onClick={test}
    />
    <LeftCircleTwoTone spin={true} />
  </div>
);

export default App;
