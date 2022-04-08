import React, {Component,} from 'react';
import "./index.css"

class Parent extends Component {
    render() {
        return (
            <div className="Parent">
                <h3>This is Parent component</h3>
                {/*使用该方法时如果A要向B传递状态时无法拿到A自身上的状态*/}
                {/*<A><B/></A>*/}
                {/*使用该方法能将A的状态传递到B*/}
                <A render={(userObj) => {
                    return <B user={userObj}/> //返回值是一个组件，当组该函数被调用时会render这个插件
                }}/>
            </div>
        );
    }
}

class A extends Component {
    state = {
        users: [{id: "001", name: "Tom", age: 10},
            {id: "002", name: "jock", age: 30},
            {
                id: "003",
                name: "demo",
                age: 20
            }]
    }

    render() {
        console.log();
        return (
            <div className="A">
                <h3>This is A component!</h3>
                {/*使用插槽技术
                    此处能发一个插槽当需要放置一个插件时能加载入一个插件
                    并能将当前的状态等属性传递给需要加载的插件*/}
                {this.props.render(this.state.users)}
            </div>
        )
    }
}

class B extends Component {
    render() {
        const {user} = this.props
        return (
            <div className="B">
                <h3>This is B component!</h3>
                {user.map((userObj) => {
                    return <h4 key={userObj.id}>receive:{userObj.name}</h4>
                })}
            </div>
        )
    }
}

export default Parent;