import React from 'react';
import User from './components/User.jsx'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>
          RANDOM USERS
        </h2>
      </header>
      <div className='wrapper'>
        <User />
      </div>
    </div>
  );
}

export default App;
