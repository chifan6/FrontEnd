(function () {
    //implements 实现这个接口
    class Person {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    }
    const Tom = new Person('Tom', 20);
    console.log(Tom);
})();
