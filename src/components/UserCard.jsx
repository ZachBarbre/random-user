import React from 'react';

function UserCard(props) {
   
    
    return(
        <div className='card'>
            <img className='userPhoto' src={props.user.picture.large} 
            alt='some random person'></img>
            <p className='userTitle'>Hi, My name is</p>
            <p className='userValue'>{props.user.name.first 
            + ' ' + 
            props.user.name.last}</p>
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


export default UserCard