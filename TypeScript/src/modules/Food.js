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
        let left = Math.round(Math.random() * 29) * 10;
        let top = Math.round(Math.random() * 29) * 10;
        this.element.style.top = top + "px";
        this.element.style.left = left + "px";
    }
}
// const t = new Food()
// console.log(t.left);
// t.chang()
export default Food;