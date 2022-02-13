define(["sub1"],function (sub1){
    let msg = "This is sub.js";

    function ShowMsg(){
        let sub1R = sub1.ShowMsg1()
        return {msg,sub1R}
    }

    return {ShowMsg}
})