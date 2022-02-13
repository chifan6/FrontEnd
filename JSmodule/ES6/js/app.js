import $ from "jquery"
import * as module1 from "./module1.js";
import * as module2 from "./module2.js";
import module3 from "./module3.js";
let uniq = require("uniq")

module1.m1m()
module1.m1()
module2.fn1();
module2.fn2();

module3.fn2()
module3.fn1()

$("body").css("background", "red");
