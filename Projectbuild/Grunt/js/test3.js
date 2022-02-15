(function () {
    var obj = {
        a: 1,
        b: 10,
        jf: function () {
            var result = this.b - this.a;
            return result;
        }
    };
    console.log(obj.jf());
})();