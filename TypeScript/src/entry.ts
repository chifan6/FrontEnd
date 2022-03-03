import "./style/index.less"
import Food from "./modules/Food";
import ScoringSystem from "./modules/ScoringSystem";

//测试代码
const s = new ScoringSystem()
for (let i = 0 ; i <500 ;i++) {
    s.ModifyScore()
}
