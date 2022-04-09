import About from "../pages/About";
import Home from "../pages/Home";
import Message from "../pages/Message";
import News from "../pages/News"
import {Navigate} from "react-router-dom";
import Detail from "../pages/Detail"
import React from "react";

export default [
    {
        path:"/about",
        element:<About/>
    },
    {
        path:"/home",
        element:<Home/>,
        children:[
            {
                path: 'news',
                element:<News/>
            },
            {
                path: 'message',
                element:<Message/>,
                children:[
                    {
                        //使用params传递参数时需要提前接收声明参数
                        // path: 'detail/:id/:name/:age',
                        path:'detail',
                        element: <Detail/>
                    }
                ]
            }
        ]
    },
    {
        path:"/",
        element:<Navigate to={"./about"}/>
    }
]