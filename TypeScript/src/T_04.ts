(function () {
    //定义一个接口
    //接口里面的属性和方法都是抽象类必须要声明有
    //接口只能声明不能进行赋值
    interface myInterface {
        name: string;
        age: number;
    }
    //implements 实现这个接口
    class Person implements myInterface{
        name: string;
        age: number;

        constructor(name: string,age:number) {
            this.name = name;
            this.age = age;
        }

    }

    const Tom = new Person('Tom', 20);
    console.log(Tom)
})();
