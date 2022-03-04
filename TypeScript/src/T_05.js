(function () {
    class Person {
        constructor(_name, _age) {
            this._name = _name;
            this._age = _age;
        }
        //将_name属性主动暴露给外面查看
        get name() {
            return this._name;
        }
        //将_name属性主动暴露给外面修改
        //修改时需修改name而不是_name
        set name(value) {
            //可以在这里对修改的内容进行判断是否通过
            this._name = value;
        }
    }
    const Tom = new Person('Tom', 20);
    // Tom.name = 'jar' //私有属性不能修改
    Tom.name = 'test'; //如果未设置有set name 方法将无法修改
    console.log(Tom.name); //如果未设置有get name 方法将无法查看
    class jar extends Person {
        constructor(_name, _age) {
            super(_name, _age);
        }
    }
})();
