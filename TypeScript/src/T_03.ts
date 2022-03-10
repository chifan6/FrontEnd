(function (){
    abstract class Animal {
        name: string;
        age: number;
        protected constructor(name: string, age: number) {
            //this 指向的是使用该属性的方法或对象
            this.name = name;
            this.age = age;
        }
        //使用abstract抽象方法时在继承了当前父类的子类中必须要对该方法进行重写
        //设置抽象方法时后面需要声明一个返回值的类型
        abstract sayHello(): void;
    }
    //extends 继承 会继承到父类上的属性和方法
    class Dog extends Animal{
        age: number;
        constructor(name: string,age: number) {
            // super 表示当前子类的父类
            // 在使用到父类的属性和方法时如果没有进行重写需调用父类的属性和方法（子类中没有调用父类的属性或方法是会自动调用super）
            super(name,age);
            this.age = age

        }
        sayHello() {
            //因为这是父类的抽象方法
            //所以这里必须要进行重写
            console.log("hello")
        }
    }

    //Animal是抽象类无法进行实列化
    // const ab = new Animal();//Cannot create an instance of an abstract class.
})()