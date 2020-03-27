import React from 'react';
import UserCard from './UserCard.jsx'
import './User.css';
import { Columns, Column } from 'bloomer';

function UserList(props) {
    console.log(props.userArray);
    return (
        <Columns isMultiline>
            {props.userArray.map(user => {
                return (
                    <Column isSize='1/3'>
                        <UserCard key={user.login.uuid} user={user}/>
                    </Column>
                )
            }
            )}     
        </Columns>
    )
}

export default UserList;