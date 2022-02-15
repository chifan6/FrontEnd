(function () {
    function add() {
        var arr = [1, 2, 3, 4];
        var result = arr.map(function (value) {
            var result = value * 10;
            return result;
        });
        console.log(result);
    }

    add();
})();