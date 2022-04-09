import React from 'react';
import {useSearchParams,useLocation,useParams} from "react-router-dom"

function Detail() {


    //使用Params接收参数
    // const {id,name,age} = useParams()
    // const user = useMatch("/home/message/detail/:id/:name/:age");

    //使用search接收参数
    const [search] = useSearchParams()
    let id = search.get("id")
    let name = search.get("name")
    let age = search.get("age")
    // console.log(id, name, age);

    //使用state接收参数
    // const {state: {id, name, age}} = useLocation()

    return (
        <div>
            <hr/>
            <ul>
                <li>id={id}</li>
                <li>name={name}</li>
                <li>age={age}</li>
            </ul>
        </div>
    );
}

export default Detail;