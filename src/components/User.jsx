import React, { Component } from 'react';
import UserCard from './UserCard.jsx'
import './User.css';

class User extends Component {

    state = {
        userArray: [],
        activeInfo: []
    }

    async get() {
        const response = await fetch(`https://randomuser.me/api/?results=10`);
        const data = await response.json();
        return data;
    }

    async componentDidMount() {
        try {
            const users = await this.get();
            const userArray = users.results
            this.setState(
                {
                    userArray: userArray,
                }
            );
            console.log(userArray);
        } catch (error) {
            this.setState(
                { userArray: [error.message] }
              )
        }
    }

    render() {
        const { userArray } = this.state;
        return (
            <div>
                {userArray.map(user => 
                      <UserCard key={user.login.uuid} user={user}/>
                )}     
            </div>
        )
    }
}

export default User;