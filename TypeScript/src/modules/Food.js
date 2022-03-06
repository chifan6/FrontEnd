/*食物类*/
class Food {
    constructor() {
        this.element = document.getElementById("food");
    }
    get X() {
        return this.element.offsetLeft;
    }
    get Y() {
        return this.element.offsetTop;
    }
    chang() {
        //随机生成蛇的位置
        let left = Math.round(Math.random() * 29) * 10;
        let top = Math.round(Math.random() * 29) * 10;
        this.element.style.top = top + "px";
        this.element.style.left = left + "px";
    }
}
export default Food;
