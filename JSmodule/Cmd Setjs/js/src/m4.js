//有依赖模块的js
define(function (require, exports, module) {
    let msgM4 = 'M4'
    //同步引入
    let m2 = require("./m2");

    m2();

    //异步引入 会等到非异步加载完成后才加载
    require.async("./m3", function (m3) {
        m3.m3();
    });

    function ShowM4() {
        console.log(msgM4);
    }

    exports.m4 = ShowM4;
});