import React, { Component } from 'react';
import './User.css';

class User extends Component {

    state = {
        userImage: 'https://randomuser.me/api/portraits/women/17.jpg',
        userName: 'Misty Lewis'
    }

    async get() {
        const response = await fetch(`https://randomuser.me/api/?results=10`);
        const data = await response.json();
        return data;
    }

    async componentDidMount() {
        try {
            const users = await this.get();
            const name = users.results[0].name.first + ' ' + users.results[0].name.last;
            // const names = users.results.map(user => user.name.first + ' ' + user.name.last)
            // console.log(names)
            const photo = users.results[0].picture.large;
            this.setState(
                {
                    userName: name,
                    userImage: photo
                }
            );
        } catch (error) {
            this.setState(
                { userName: error.message }
              )
        }
    }


    render() {
        return (
            <div className='card'>
                <img className='userPhoto' src={this.state.userImage} 
                alt='some random person'></img>
                <p className='userTitle'>Hi, My name is</p>
                <p className='userValue'>{this.state.userName}</p>
            </div>
        )
    }
}

export default User;