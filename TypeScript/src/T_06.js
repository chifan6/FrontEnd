(function () {
    function fn(name, age) {
        console.log(typeof age);
        return name;
    }
    let result = fn('Tom', 20);
    console.log(result);
    //传的参数必须要有age属性
    function fn2(a) {
        return a.age;
    }
    console.log(fn2({ age: 2 }));
})();
