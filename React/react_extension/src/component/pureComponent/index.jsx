import React, { PureComponent } from "react";

export default class pureComponent extends PureComponent {
  state = { falg: true };
  change = () => {
    const { falg } = this.state;

    //使用该方法的话会导致PureComponent组件不会调用render
    //因为PureComponent会进行浅比较 使用obj.xxx的方法会到生成一个行的对象
    //在进行比较的时候发现还是同一个对象(地址值没有变化)
    // const obj = this.state;
    // obj.falg = "test";
    this.setState({ falg: !falg });
  };
  /* shouldComponentUpdate能接收到两个参数
                    1、第一个参数是接下来的prop
                    2、第二个参数是接下来的状态 
      PureComponent使用的是上面的方法来进行安全的处理
                    */
  /* shouldComponentUpdate(nextProps, nextState) {
    if (this.state.falg === nextState.falg) return false;
    return true;
  } */
  render() {
    console.log("pureComponent render");
    return (
      <>
        <h1>当前的状态为：{this.state.falg ? "True" : "False"}</h1>
        <button onClick={this.change}>点击切换状态</button>
      </>
    );
  }
}
