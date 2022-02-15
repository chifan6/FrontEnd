(function () {
    function add(){
        const arr = [1, 2, 3, 4];
        let result = arr.map(value => {
            let result = value * 10
            return result
        })
        console.log(result)
    }
    add()
})();