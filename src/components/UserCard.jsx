import React, { Component } from 'react';

class UserCard extends Component {
   
    render() {
        return(
            <div className='card'>
                <img className='userPhoto' src={this.props.userImage} 
                alt='some random person'></img>
                <p className='userTitle'>Hi, My name is</p>
                <p className='userValue'>{this.props.userName}</p>
            </div>  
        )
    }
}

export default UserCard