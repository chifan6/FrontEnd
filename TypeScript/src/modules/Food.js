"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*食物类*/
var Food = /** @class */ (function () {
    function Food() {
        this.element = document.getElementById("food");
    }
    Object.defineProperty(Food.prototype, "left", {
        get: function () {
            return this.element.offsetLeft;
        },
        enumerable: false,
        configurable: true
    });
    Food.prototype.chang = function () {
        var left = Math.round(Math.random() * 29) * 10;
        var top = Math.round(Math.random() * 29) * 10;
        this.element.style.top = top + "px";
        this.element.style.left = left + "px";
    };
    return Food;
}());
// const t = new Food()
// console.log(t.left);
// t.chang()
exports.default = Food;
