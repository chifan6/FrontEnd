(function (){
    requirejs.config({
        paths:{
            jquery: "./libs/jquery",
            sub:"./app/sub",
            sub1:"./app/sub1"
        }
    })

    requirejs(["jquery","sub"],function ($,sub){
        console.log(sub.ShowMsg().msg)
        console.log(sub.ShowMsg().sub1R)
        $(function (){
            $("body").css("background","red")
        })
    })
})()