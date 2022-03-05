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
        this.moveBody(this.X, this.Y);
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
        this.moveBody(this.X, this.Y);
        if (value >= 0 && value <= 290) {
            this.head.style.top = value + "px";
        }
        else {
            throw new Error("GAME OVER");
        }
    }
    addBodies() {
        this.snake.insertAdjacentHTML("beforeend", "<div></div>");
        this.moveBody(this.X, this.Y);
    }
    moveBody(left, right) {
        for (let i = this.bodies.length - 1; i > 0; i--) {
            //获取到当前元素前面的元素位置
            let X = this.bodies[i - 1].offsetLeft;
            let Y = this.bodies[i - 1].offsetTop;
            //获取当前元素的位置
            let currX = this.bodies[i].offsetLeft;
            let currY = this.bodies[i].offsetTop;
            //如果当前元素的位置和前面的不一样则将其设置为前面的位置
            if (X != currX) {
                this.bodies[i].style.left = X + "px";
            }
            if (Y != currY) {
                this.bodies[i].style.top = Y + "px";
            }
        }
    }
}
export default Snake;
