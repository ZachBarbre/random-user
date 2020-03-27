import React, { Component } from 'react';
import UserList from './components/UserList.jsx'
import './App.css';

class App extends Component {
  state = {
    userArray: [],
    activeInfo: []
  }

  get = async () => {
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
                  userArray: userArray
              }
          );
      } catch (error) {
          this.setState(
              { userArray: [error.message] }
            )
      }
  }

  render() {
    const { userArray } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <h2>
            RANDOM USERS
          </h2>
        </header>
        <div className='wrapper'>
          <UserList userArray={userArray}/>
        </div>
      </div>
    );
  }
}

export default App;
