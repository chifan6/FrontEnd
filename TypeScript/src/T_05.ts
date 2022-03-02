(function (){
    class Person{
        //private 私有属性 只能在声明的类中访问
        //protected 保护属性 只能在声明的类中和子类（继承）访问
        protected _name: string;
        protected _age: number;

        constructor(_name: string, _age: number) {
            this._name = _name;
            this._age = _age;
        }
        //将_name属性主动暴露给外面查看
        get name(){
            return this._name
        }
        //将_name属性主动暴露给外面修改
        //修改时需修改name而不是_name
        set name(value){
            //可以在这里对修改的内容进行判断是否通过
            this._name = value;
        }
    }

    const Tom = new Person('Tom', 20);
    // Tom.name = 'jar' //私有属性不能修改
    Tom.name = 'test'; //如果未设置有set name 方法将无法修改
    console.log(Tom.name) //如果未设置有get name 方法将无法查看
    class jar extends Person{
        // name: string; //private 私有属性在子类中不能访问和修改
        _name: string //protected 保护属性在子类中能访问和修改
        protected constructor(_name:string,_age:number) {
            super(_name,_age);
        }
    }

})()