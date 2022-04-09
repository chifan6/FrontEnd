import React from 'react';
import {NavLink, Outlet, useOutlet,useResolvedPath} from "react-router-dom";

const Home = () => {

    //用来输出当前组件渲染的子孙组件
    const result = useOutlet()
    // console.log(result);

    //用来解析给定的url中的path，search，hash值
    const a = useResolvedPath("test/?id=001/#awef")
    // console.log(a);

    return (
        <div>
            <h2>Home组件内容</h2>
            <div>
                <ul className="nav nav-tabs">
                    <li>
                        <NavLink className="list-group-item" to="news"
                        >News</NavLink
                        >
                    </li>
                    <li>
                        <NavLink
                            className="list-group-item"
                            to="message"
                        >Message</NavLink
                        >
                    </li>
                </ul>
                <Outlet/>
            </div>
        </div>
    );
};

export default Home;