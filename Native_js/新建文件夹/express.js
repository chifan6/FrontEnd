const express = require("express");
const app = express();
app.get("/", function (request, response) {
  response.send("hello express");
});
app.listen(8000, function () {
  console.log("启动成功");
});
