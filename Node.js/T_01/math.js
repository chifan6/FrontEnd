function add(a,b){
    return a + b;
}
function mul(a,b){
    return a * b;
}
/*
exports.add = add
exports.mul = mul
*/
//exports = module.exports
module.expors = {
    add:add,
}
module.exports.mul=mul
