import React, { Component } from 'react';
import './User.css';

class User extends Component {

    state = {
        userArray: []
    }

    async get() {
        const response = await fetch(`https://randomuser.me/api/?results=10`);
        const data = await response.json();
        return data;
    }

    async componentDidMount() {
        try {
            const users = await this.get();
            const userArray = users.results.map( user => {
                return {userName: user.name.first + ' ' + user.name.last,
                userImage: user.picture.large}
            })
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
                {userArray.map( user => 
                    <div className='card'>
                        <img className='userPhoto' src={user.userImage} 
                        alt='some random person'></img>
                        <p className='userTitle'>Hi, My name is</p>
                        <p className='userValue'>{user.userName}</p>
                    </div>    
                )}     
            </div>
        )
    }
}

export default User;