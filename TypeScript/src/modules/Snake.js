class Snake {
    constructor() {
        this.snake = document.getElementById("snake");
        this.head = this.snake.querySelector("div");
        console.log(this.head);
        this.bodies = this.snake.getElementsByTagName("div");
    }
    get X() {
        return this.head.offsetLeft;
    }
    get Y() {
        return this.head.offsetTop;
    }
    set X(value) {
        if (this.X === value) {
            return;
        }
        if (value >= 0 && value <= 290) {
            this.head.style.left = value + "px";
        }
        else {
            throw new Error("GAME OVER");
        }
    }
    set Y(value) {
        if (this.Y === value) {
            return;
        }
        if (value >= 0 && value <= 290) {
            this.head.style.top = value + "px";
        }
        else {
            throw new Error("GAME OVER");
        }
    }
    addBodies() {
        this.snake.insertAdjacentHTML("beforeend", "<div></div>");
    }
}
export default Snake;
