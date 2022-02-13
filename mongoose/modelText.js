require("./tools/Model/Model");
let text21 = require("./tools/Model/model/text21");
text21.find({},function (err,docs){
    if (!err){
        console.log(docs)
    }
})