import Food from "./Food";
import ScoringSystem from "./ScoringSystem";
import Snake from "./Snake";
class GameControl {
    constructor() {
        //定义变量保存当前蛇的方向,默认为向下
        this.direction = "ArrowDown";
        //蛇的状态
        this.inLive = true;
        this.Food = new Food();
        this.ScoringSystem = new ScoringSystem();
        this.Snake = new Snake();
        //初始化游戏 让游戏开始
        this.init();
    }
    init() {
        //绑定键盘按下实际
        document.addEventListener("keydown", this.keyboard.bind(this)); //ding将this指向调整
        //游戏开始食物生成
        this.Food.chang();
        //蛇开始移动
        this.run();
    }
    keyboard(event) {
        //判断用户按下的规则
        if (event.key == "ArrowUp" || event.key == "ArrowDown" || event.key == "ArrowLeft" || event.key == "ArrowRight") {
            this.direction = event.key;
        }
    }
    run() {
        //保存蛇头当前的位置
        let X = this.Snake.X;
        let Y = this.Snake.Y;
        //对用户的操作进行处理
        switch (this.direction) {
            case "ArrowUp":
                Y -= 10;
                break;
            case "ArrowDown":
                Y += 10;
                break;
            case "ArrowLeft":
                X -= 10;
                break;
            case "ArrowRight":
                X += 10;
                break;
        }
        //将操作后的位置赋值给蛇，使蛇开始移动
        try {
            this.Snake.X = X;
            this.Snake.Y = Y;
        }
        catch (e) { //处理抛出的错误 ，并将蛇的的状态设置为false（蛇死了）
            alert("Die!");
            this.inLive = false;
        }
        //对蛇吃到食物后进行处理
        if (this.checkEat(X, Y)) {
            //重新生成一个随机位置的食物
            this.Food.chang();
            //修改当前的分数
            this.ScoringSystem.ModifyScore();
            //将蛇的长度添加一节
            this.Snake.addBodies();
        }
        //当前蛇的状态为true时将定时开始
        this.inLive && setTimeout(() => {
            //使用递归让蛇不停的跑
            this.run();
        }, 300 - (30 * (this.ScoringSystem.level - 1))); //蛇的等级越高速度越快
    }
    //检查蛇吃到食物
    checkEat(X, Y) {
        //判断蛇当前的位置和食物的位置是否相同
        return X === this.Food.X && Y === this.Food.Y;
    }
}
export default GameControl;
