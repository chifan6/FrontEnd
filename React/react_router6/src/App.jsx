import React from 'react';
import { NavLink,useRoutes} from "react-router-dom"
import "./App.css"
import elements from "./routes"
import Header from "./component/Header"

//react-router-dom V6
//该版本将Switch删除替换为Routes
//Route中的component属性替换为element={<xxx/>}
// Navigate 当该组件被渲染是会跳转到指定的路径
// userRoutes 使用路由表 需要一个数组 数组中的每一个对象就是一个路由，对象中需要有路由中对应的属性 使用路由表时会自动在Route外层包有一个Routes
const App = () => {

    //路由表
    const element = useRoutes(elements)

    //导航栏样式
    const classNav = ({isActive}) => isActive ? "list-group-item active_test" : "list-group-item"

    return (<div>
        <div className="row">
            <Header/>
        </div>
        <div className="row">
            <div className="col-xs-2 col-xs-offset-2">
                <div className="list-group">
                    <NavLink className={classNav} to="/about">About</NavLink>
                    <NavLink className={classNav} to="/home">Home</NavLink>
                </div>
            </div>
            <div className="col-xs-6">
                <div className="panel">
                    <div className="panel-body">
                        {/*使用路由表*/}
                        {element}
                    </div>
                </div>
            </div>
        </div>
    </div>);
};

export default App;