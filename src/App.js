import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <nav>
            <ul>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/acquire'>Acquire</Link></li>
              <li><Link to='/explore'>Explore</Link></li>
            </ul>
          </nav>
        </header>
      </div>
    );
  }
}

export default App;
