(function () {
    class Animal {
        constructor(name, age) {
            //this 指向的是使用该属性的方法或对象
            this.name = name;
            this.age = age;
        }
    }
    //extends 继承 会继承到父类上的属性和方法
    class Dog extends Animal {
        constructor(name, age) {
            // super 表示当前子类的父类
            // 在使用到父类的属性和方法时如果没有进行重写需调用父类的属性和方法（子类中没有调用父类的属性或方法是会自动调用super）
            super(name, age);
            this.age = age;
        }
        sayHello() {
            //因为这是父类的抽象方法
            //所以这里必须要进行重写
            console.log("hello");
        }
    }
    //Animal是抽象类无法进行实列化
    // const ab = new Animal();//Cannot create an instance of an abstract class.
})();
