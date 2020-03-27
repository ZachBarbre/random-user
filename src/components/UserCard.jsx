import React, { Component } from 'react';

class UserCard extends Component {
   
    render() {
        return(
            <div className='card'>
                <img className='userPhoto' src={this.props.user.picture.large} 
                alt='some random person'></img>
                <p className='userTitle'>Hi, My name is</p>
                <p className='userValue'>{this.props.user.name.first 
                + ' ' + 
                this.props.user.name.last}</p>
                <ul className='infoSelect'>
                    <li>Name</li>
                    <li>Email</li>
                    <li>Address</li>                      
                    <li>Birthday</li>
                    <li>Phone Number</li>
                </ul>
            </div>  
        )
    }
}

export default UserCard