import React from "react";
import { Button, Progress, Result, Carousel } from "antd";
import "antd/dist/antd.less";
// import { StepBackwardOutlined, LeftCircleTwoTone } from "@ant-design/icons";

const test = () => {
  console.log("test");
};
const contentStyle = {
  // height: "1.5em",
  color: "#fff",
  lineHeight: "30.8em",
  textAlign: "center",
  background: "red",
  // fontSize: "500px",
};
const App = () => (
  <div className="App">
    <Carousel autoplay>
      <div>
        <h3 style={contentStyle}>1</h3>
      </div>
      <div>
        <h3 style={contentStyle}>2</h3>
      </div>
      <div>
        <h3 style={contentStyle}>3</h3>
      </div>
      <div>
        <h3 style={contentStyle}>4</h3>
      </div>
    </Carousel>
    {/* <Button type="primary">Button</Button>
    <StepBackwardOutlined
      style={{ fontSize: "129px", color: "red" }}
      onClick={test}
    />
    <LeftCircleTwoTone spin={true} />
    <>
      <Progress type="circle" percent={75} style={{ marginLeft: "500px" }} />
      <Progress type="circle" percent={70} status="exception" />
      <Progress type="circle" percent={100} />
    </>
    <Result
      status="403"
      title="403"
      subTitle="Sorry, you are not authorized to access this page."
      extra={<Button type="primary">Back Home</Button>}
    />
    , */}
  </div>
);

export default App;
