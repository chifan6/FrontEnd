/*分数系统类*/
class ScoringSystem {
    constructor(maxLevel = 10) {
        this.score = 0;
        this.level = 1;
        //获取分数
        this.scoreEle = document.getElementById("scoreS");
        //获取等级
        this.levelEle = document.getElementById("levelS");
        this.maxLevel = maxLevel;
    }
    //修改分数
    ModifyScore() {
        //将分数提高一分
        this.scoreEle.innerHTML = ++this.score + "";
        //设置多少分升一级
        switch (this.score) {
            case 10:
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
        //判断蛇有没有达到最高级
        if (this.level < this.maxLevel) {
            //将蛇的等级提高一级
            this.levelEle.innerHTML = ++this.level + "";
        }
    }
}
export default ScoringSystem;
