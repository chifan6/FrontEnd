/*食物类*/
class Food {
    element: HTMLElement;

    constructor() {
        this.element = document.getElementById("food")!
    }
    get left(){
        return this.element.offsetLeft
    }
    chang(){
        let left = Math.round(Math.random() * 29) * 10;
        let top = Math.round(Math.random() * 29) * 10;
        this.element.style.top = top + "px";
        this.element.style.left = left + "px";
    }
}
// const t = new Food()
// console.log(t.left);
// t.chang()

export default Food