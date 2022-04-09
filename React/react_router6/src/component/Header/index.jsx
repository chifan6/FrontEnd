import React from 'react';
import {useNavigate,useInRouterContext,useNavigationType} from "react-router-dom"

function Header() {
    const navigate = useNavigate()
    //如果在包裹的路由中该函数返回值为true
    // console.log(useInRouterContext())

    //该钩子的返回值是加载组件时使用的组件方式
    // console.log(useNavigationType());

    function go(){
        navigate(1)

    }
    function retreat(){
        navigate(-1)
    }

    return (
        <div className="col-xs-offset-2 col-xs-8">
            <div className="page-header">
                <h2>React Router Demo</h2>
                <button onClick={go}>前进</button>
                <button onClick={retreat}>后退</button>
            </div>
        </div>
    );
}

export default Header;