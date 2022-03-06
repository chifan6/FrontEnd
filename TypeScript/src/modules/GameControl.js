import Food from "./Food";
import ScoringSystem from "./ScoringSystem";
import Snake from "./Snake";
class GameControl {
    constructor() {
        this.direction = "ArrowDown";
        this.inLive = true;
        this.Food = new Food();
        this.ScoringSystem = new ScoringSystem();
        this.Snake = new Snake();
        this.init();
        this.Food.chang();
    }
    init() {
        document.addEventListener("keydown", this.keyboard.bind(this));
        this.run();
    }
    keyboard(event) {
        if (event.key == "ArrowUp" || event.key == "ArrowDown" || event.key == "ArrowLeft" || event.key == "ArrowRight") {
            this.direction = event.key;
        }
    }
    run() {
        let X = this.Snake.X;
        let Y = this.Snake.Y;
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
        try {
            this.Snake.X = X;
            this.Snake.Y = Y;
        }
        catch (e) {
            alert("Die!");
            this.inLive = false;
        }
        if (this.checkEat(X, Y)) {
            this.Snake.addBodies();
            this.Food.chang();
            this.ScoringSystem.ModifyScore();
        }
        this.inLive && setTimeout(() => {
            this.run();
        }, 300 - (30 * (this.ScoringSystem.level - 1)));
    }
    checkEat(X, Y) {
        return X === this.Food.X && Y === this.Food.Y;
    }
}
export default GameControl;
