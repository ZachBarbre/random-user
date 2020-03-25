import React, { Component } from 'react';
import './User.css';

class User extends Component {

    render() {
        return (
            <div className='card'>
                <img className='userPhoto' src='https://randomuser.me/api/portraits/women/17.jpg' 
                alt='some random person'></img>
                <p className='userTitle'>Hi, My name is</p>
                <p className='userValue'>Random Name</p>
            </div>
        )
    }
}

export default User;