(function (){
    function fn<T,K>(name:T,age:K):T{
        console.log(typeof age);
        return name
    }

    let result = fn<string,number>('Tom', 20)
    console.log(result);

    interface inter{
        age: number
    }

    //传的参数必须要有age属性
    function fn2<T extends inter>(a: T): number{
        return a.age
    }

    console.log(fn2({age:2}));
})()