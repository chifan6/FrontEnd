var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
(function () {
    var Animal = /** @class */ (function () {
        function Animal(name, age) {
            //this 指向的是使用该属性的方法或对象
            this.name = name;
            this.age = age;
        }
        return Animal;
    }());
    //extends 继承 会继承到父类上的属性和方法
    var Dog = /** @class */ (function (_super) {
        __extends(Dog, _super);
        function Dog(name, age) {
            var _this = 
            // super 表示当前子类的父类
            // 在使用到父类的属性和方法时如果没有进行重写需调用父类的属性和方法（子类中没有调用父类的属性或方法是会自动调用super）
            _super.call(this, name, age) || this;
            _this.age = age;
            return _this;
        }
        Dog.prototype.sayHello = function () {
            //因为这是父类的抽象方法
            //所以这里必须要进行重写
            console.log("hello");
        };
        return Dog;
    }(Animal));
    //Animal是抽象类无法进行实列化
    // const ab = new Animal();//Cannot create an instance of an abstract class.
})();
