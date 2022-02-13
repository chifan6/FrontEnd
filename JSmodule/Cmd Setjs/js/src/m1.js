//无依赖关系模块
(function (){
    define(function (require,exports,module){
        let msgM1 = "M1";
        function ShowM1() {

            return msgM1
        }
        module.exports = {ShowM1}
    })
})()