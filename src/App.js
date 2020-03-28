import React, { Component } from 'react';
import UserCard from './components/UserCard.jsx'
import { Section, Container, Columns, Column } from 'bloomer';
import 'bulma/css/bulma.css'
import './App.css';
class App extends Component {
  state = {
    userArray: []
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
                  userArray: userArray,
              }
          );
      } catch (error) {
          this.setState(
              { userArray: [error.message] }
            )
      }
  }

  clickInfo = (infoIndex, value) => {
    console.log(infoIndex, value)
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
            <Columns isMultiline>
              {
              userArray.map((user, index) => {
                return (
                  <Column isSize='1/3'>
                      <UserCard key={index} user={user} />
                  </Column>
                )
              }
              )
            }     
            </Columns>
          </Container>
        </Section>
      </div>
    );
  }
}

export default App;
