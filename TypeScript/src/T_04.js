(function () {
    //implements 实现这个接口
    var Person = /** @class */ (function () {
        function Person(name, age) {
            this.name = name;
            this.age = age;
        }
        return Person;
    }());
    var Tom = new Person('Tom', 20);
    console.log(Tom);
})();
