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
    var Person = /** @class */ (function () {
        function Person(_name, _age) {
            this._name = _name;
            this._age = _age;
        }
        Object.defineProperty(Person.prototype, "name", {
            //将_name属性主动暴露给外面查看
            get: function () {
                return this._name;
            },
            //将_name属性主动暴露给外面修改
            //修改时需修改name而不是_name
            set: function (value) {
                //可以在这里对修改的内容进行判断是否通过
                this._name = value;
            },
            enumerable: false,
            configurable: true
        });
        return Person;
    }());
    var Tom = new Person('Tom', 20);
    // Tom.name = 'jar' //私有属性不能修改
    Tom.name = 'test'; //如果未设置有set name 方法将无法修改
    console.log(Tom.name); //如果未设置有get name 方法将无法查看
    var jar = /** @class */ (function (_super) {
        __extends(jar, _super);
        function jar(_name, _age) {
            return _super.call(this, _name, _age) || this;
        }
        return jar;
    }(Person));
})();
