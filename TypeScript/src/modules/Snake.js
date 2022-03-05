class Snake {
    constructor() {
        this.snake = document.getElementById("snake");
        this.head = this.snake.querySelector("div");
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
        this.moveBody(this.X, this.Y);
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
        this.moveBody(this.X, this.Y);
    }
    addBodies() {
        this.snake.insertAdjacentHTML("beforeend", "<div></div>");
    }
    moveBody(X, Y) {
        for (let i = this.bodies.length - 1; i > 0; i--) {
            //获取到当前元素前面的元素位置
            let X = this.bodies[i - 1].offsetLeft;
            let Y = this.bodies[i - 1].offsetTop;
            //如果当前元素的位置和前面的不一样则将其设置为前面的位置
        }
    }
}
export default Snake;
