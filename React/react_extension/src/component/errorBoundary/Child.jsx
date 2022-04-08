import React, {Component} from 'react';

class Children extends Component {
    state = {
        users: [{id: "001", name: "Tom", age: 10},
            {id: "002", name: "jock", age: 30},
            {
                id: "003",
                name: "demo",
                age: 20
            }]
        // users:"error"
    }

    render() {
        const {users} = this.state
        return (
            <div style={{background:"pink",width:"500px"}}>
                <h4>This is Child component</h4>
                {users.map((userObj) => {
                    return <li key={userObj.id}>Name: {userObj.name}</li>
                })}
            </div>
        );
    }
}

export default Children;