/*分数系统类*/
class ScoringSystem{
    score = 0;
    level = 1;
    scoreEle: HTMLElement;
    levelEle: HTMLElement;
    //最高能升到多少级
    maxLevel: number;
    constructor(maxLevel:number = 10) {
        this.scoreEle = document.getElementById("scoreS")!;
        this.levelEle = document.getElementById("levelS")!;
        this.maxLevel = maxLevel;
    }
    //修改分数
    ModifyScore(){
        this.scoreEle.innerHTML = ++this.score + "";
        //设置多少分升一级
        switch (this.score) {
            case 2:
                this.ModifyLevel();
                break;
            case 30:
                this.ModifyLevel();
                break;
            case 60:
                this.ModifyLevel();
                break;
            case 100:
                this.ModifyLevel();
                break;
            case 150:
                this.ModifyLevel();
                break;
            case 250:
                this.ModifyLevel();
                break;
            case 400:
                this.ModifyLevel();
                break;
            case 500:
                this.ModifyLevel();
                break;
            case 600:
                this.ModifyLevel();
                break;
            case 700:
                this.ModifyLevel();
                break;
        }
    }
    //修改等级
    ModifyLevel() {
        if (this.level < this.maxLevel) {
            this.levelEle.innerHTML = ++this.level + "";
        }
    }
}

export default ScoringSystem;