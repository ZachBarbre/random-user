import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserAlt, faEnvelope, faMapMarked, faBirthdayCake, faPhone } from '@fortawesome/free-solid-svg-icons'
import './User.css'


class UserCard extends Component { 
    state = {
        userTitle: 'Hi, My name is',
        userValue: this.props.user.name.first + ' ' +  this.props.user.name.last
    }
    

    selectInfo = (info, props) => {
        switch(info){
            case 'name':
                this.setState({
                    userTitle: 'Hi, My name is',
                    userValue: this.props.user.name.first + ' ' +  this.props.user.name.last
                }
                )
                break;
            case 'email':
                this.setState({
                    userTitle: 'My email is',
                    userValue: this.props.user.email
                })
                break;
            case 'address':
                this.setState({
                    userTitle: 'My address is',
                    userValue: `${this.props.user.location.street.number} ${this.props.user.location.street.name}`
                })
                break;
            case 'phone':
                this.setState({
                    userTitle: 'My phone number is',
                    userValue: this.props.user.phone
                })
                break;
            case 'dob':
                this.setState({
                    userTitle: 'My birtday is',
                    userValue: this.props.user.dob.date
                })
                break;
            default:
                this.setState({
                    userTitle: 'Something broke',
                    userValue: 'Check the switch'
                })
        }
      }
    render() {

        return(
            <div className='card'>
                <img className='userPhoto' src={this.props.user.picture.large} 
                alt='some random person'></img>
                <p className='userTitle'>{this.state.userTitle}</p>
                <p className='userValue'>{this.state.userValue}</p>
                <ul className='infoSelect'>
                    <li onClick={this.selectInfo.bind(this, 'name')}><FontAwesomeIcon icon={faUserAlt}/></li>
                    <li onClick={this.selectInfo.bind(this, 'email')}><FontAwesomeIcon icon={faEnvelope}/></li>
                    <li onClick={this.selectInfo.bind(this, 'address')}><FontAwesomeIcon icon={faMapMarked}/></li>
                    <li onClick={this.selectInfo.bind(this, 'phone')}><FontAwesomeIcon icon={faPhone}/></li>
                    <li onClick={this.selectInfo.bind(this, 'dob')}><FontAwesomeIcon icon={faBirthdayCake}/></li>
                </ul>
            </div>  
        );
    }
}

export default UserCard;