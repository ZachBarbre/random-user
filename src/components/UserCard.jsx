import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserAlt, faEnvelope, faMapMarked, faBirthdayCake, faPhone } from '@fortawesome/free-solid-svg-icons'


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
                <li><FontAwesomeIcon icon={faUserAlt}/></li>
                <li><FontAwesomeIcon icon={faEnvelope}/></li>
                <li><FontAwesomeIcon icon={faMapMarked}/></li>
                <li><FontAwesomeIcon icon={faPhone}/></li>
                <li><FontAwesomeIcon icon={faBirthdayCake}/></li>
            </ul>
        </div>  
    );
}

export default UserCard;