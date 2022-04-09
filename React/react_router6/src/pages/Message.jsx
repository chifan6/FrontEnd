import React, {useState} from 'react';
import {Link,Outlet,useNavigate} from "react-router-dom"



function Message() {

    //开启路由编程式导航
    const navigate = useNavigate()

    const [user] = useState([
        {id:"001",name:"Tom",age:10},
        {id:"002",name:"Jack",age:20},
        {id:"003",name:"Dome",age:30}
    ])

    function showDetail(id, name, age) {
        // navigate('detail',{state:{id,name,age}});
        // navigate(`detail/${id}/${name}/${age}`)
        navigate(`detail/?id=${id}&name=${name}&age=${age}`)
    }
    return (
        <div>
            <ul>
                {user.map(({id,name,age}) => {
                    return (
                    <li key={id}>

                        {/*params  传递参数*/}
                        {/*<Link to={`detail/${id}/${name}/${age}`}>{name}</Link>*/}

                        {/*传递search参数*/}
                        <Link to={`detail/?id=${id}&name=${name}&age=${age}`}>
                            {name}
                        </Link>&nbsp;&nbsp;

                        {/*使用state传递参数*/}
                        {/*<Link to={'detail'} state={{id,name,age}}>{name}</Link>*/}
                        &nbsp;&nbsp;&nbsp;
                        <button onClick={() => showDetail(id,name,age)}>显示详情</button>
                    </li>

                    )
                })}
            </ul>
            <Outlet/>
        </div>
    );
}

export default Message;