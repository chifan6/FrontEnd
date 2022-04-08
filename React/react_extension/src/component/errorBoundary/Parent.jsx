import React, {Component} from 'react';
import Child from "./Child";

class Parent extends Component {

    state = {hasError:false}

    //此生命周钩子会在后代组件出错时调用，能接收到一个报错内容的参数
    //返回值是一个用来更新状态的值
    static getDerivedStateFromError(){
        return {hasError:true}
    }

    //此生命周期在后代组件抛出错误后被调用
    componentDidCatch(error, errorInfo) {
        console.log(error, errorInfo);
    }

    render() {
        return (
            <div>
                <h3>This is Parent component</h3>
                {/*判断出错如果出错了显示错误显示，不出错则正常显示*/}
                {this.state.hasError ? (<h3>出错了</h3>) : <Child/>}
            </div>
        );
    }
}

export default Parent;