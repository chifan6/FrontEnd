class Snake {
    constructor() {
        //获取整条蛇
        this.snake = document.getElementById("snake");
        //获取蛇头
        this.head = this.snake.querySelector("div");
        //获取身体
        this.bodies = this.snake.getElementsByTagName("div");
    }
    //获取蛇头的水平坐标
    get X() {
        return this.head.offsetLeft;
    }
    //获取蛇头当前的垂直坐标
    get Y() {
        return this.head.offsetTop;
    }
    set X(value) {
        //判断当前的垂直坐标和当前的坐标是否相同
        //如果相同则证明没有进行修改则停止该函数
        //这样能时整体少运行一些代码以达到提高运行速度
        if (this.X === value) {
            return;
        }
        //判断蛇的水平位置有没有撞到墙
        if (value < 0 || value > 290) {
            //抛出错误  随后进行处理
            throw new Error("GAME OVER");
        }
        //判断第二节蛇身体的位置和蛇头有没有重叠
        //如果重叠了说明蛇进行了掉头
        //value 为将要移动的位置
        if (this.bodies[1] && this.bodies[1].offsetLeft === value) {
            //如果蛇头移动的位置比水平当前蛇头的位置大的话则说明蛇头是在向右掉头
            //判断都将蛇头重新调回去
            if (value > this.X) {
                value = this.X - 10;
                //不是向右掉头的话就是向左掉头
                //将蛇头重新调回
            }
            else {
                value = this.X + 10;
            }
        }
        //将身体移动到前面一节 //因为这里已经被递归循环了所有这里会被已经移动
        this.moveBody();
        //将要移动的位置赋值到当前的位置 以达到移动
        this.head.style.left = value + "px";
        //检查有没有撞到身体
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
    //添加身体
    addBodies() {
        //在整条蛇的容器的最后添加一节(div)
        this.snake.insertAdjacentHTML("beforeend", "<div></div>");
    }
    //移动身体
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
    //检查蛇头有没有撞到身体
    checkCollide() {
        //遍历所有的身体
        for (let i = 1; i < this.bodies.length; i++) {
            let db = this.bodies[i];
            //判断蛇头是否和蛇的位置重叠
            if (this.X === db.offsetLeft && this.Y === db.offsetTop) {
                //重叠后则说明撞到了身体
                //抛出错误结束游戏
                throw new Error();
            }
        }
    }
}
export default Snake;
