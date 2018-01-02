import React, { Component } from 'react';

import logo from '../logo.svg';
import '../styles/App.css';

import Todo from './Todo';

// ====

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React + Apollo</h1>
        </header>

        <main className="App-intro">
          <Todo />
        </main>
      </div>
    );
  }
}

// ====

export default App;
