"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./style/index.less");
var ScoringSystem_1 = require("./modules/ScoringSystem");
//测试代码
var s = new ScoringSystem_1.default();
for (var i = 0; i < 500; i++) {
    s.ModifyScore();
}
