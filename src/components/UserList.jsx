import React from 'react';
import UserCard from './UserCard.jsx'
import './User.css';

function UserList(props) {
    console.log(props.userArray);
    return (
        <div>
            {props.userArray.map(user => 
                    <UserCard key={user.login.uuid} user={user}/>
            )}     
        </div>
    )
}

export default UserList;