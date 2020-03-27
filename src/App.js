import React, { Component } from 'react';
import UserList from './components/UserList.jsx'
import { Section, Container } from 'bloomer';
import 'bulma/css/bulma.css'
import './App.css';
class App extends Component {
  state = {
    userArray: [],
    activeInfo: 'name'
  }

  get = async () => {
      const response = await fetch(`https://randomuser.me/api/?results=9`);
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

  clickHandler = (infoValue) => {

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
        <Section>
          <Container>
            <UserList userArray={userArray}/>
          </Container>
        </Section>
      </div>
    );
  }
}

export default App;
