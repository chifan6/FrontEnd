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
        if (value < 0 || value > 290) {
            throw new Error("GAME OVER");
        }
        if (this.bodies[1] && this.bodies[1].offsetLeft === value) {
            if (value > this.X) {
                value = this.X - 10;
            }
            else {
                value = this.X + 10;
            }
        }
        this.moveBody();
        this.head.style.left = value + "px";
        this.checkCollide();
    }
    set Y(value) {
        if (this.Y === value) {
            return;
        }
        if (value < 0 || value > 290) {
            throw new Error("GAME OVER");
        }
        if (this.bodies[1] && this.bodies[1].offsetTop === value) {
            if (value > this.Y) {
                value = this.Y - 10;
            }
            else {
                value = this.Y + 10;
            }
        }
        this.moveBody();
        this.head.style.top = value + "px";
        this.checkCollide();
    }
    addBodies() {
        this.snake.insertAdjacentHTML("beforeend", "<div></div>");
        this.moveBody();
    }
    moveBody() {
        for (let i = this.bodies.length - 1; i > 0; i--) {
            //获取到当前元素前面的元素位置
            let X = this.bodies[i - 1].offsetLeft;
            let Y = this.bodies[i - 1].offsetTop;
            //如果当前元素的位置和前面的不一样则将其设置为前面的位置
            this.bodies[i].style.left = X + "px";
            this.bodies[i].style.top = Y + "px";
        }
    }
    checkCollide() {
        //
        for (let i = 1; i < this.bodies.length; i++) {
            let db = this.bodies[i];
            if (this.X === db.offsetLeft && this.Y === db.offsetTop) {
                throw new Error();
            }
        }
    }
}
export default Snake;
