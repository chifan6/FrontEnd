const mongoose = require("mongoose");
let text = new mongoose.Schema({
    name:String,
    age:Number,
    gender:{
        type:String,
        default:"male"
    },
    address:String
});
let text21 = mongoose.model("text21",text)
module.exports = text21