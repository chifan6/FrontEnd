//第一步；引入express
const express = require("express");
//第二步：创建应用对象
const app = express();
//第三步:创建路由规则
//request:是对请求报文的封装
//response:是对响应报文的封装
app.get("/server", (request, response) => {
  //设置响应头，设置允许跨域
  response.setHeader("Access-control-Allow-Origin", "*");
  const data = {
    name: "利旗明",
    age: 20,
  };
  let str = JSON.stringify(data);
  //设置响应体
    response.send(str);
});
//第四步：监听端口启动服务
app.listen(8000, () => {
  console.log("启动成功");
});
