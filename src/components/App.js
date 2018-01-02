import React, { Component } from 'react';

import logo from '../logo.svg';
import '../styles/App.css';

import CreateLink from './CreateLink';

// ====

class App extends Component {
  render() {
    return (
      <div className="container App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          
          <h1 className="App-title">
            React with Apollo
          </h1>
        </header>

        <main className="section App-intro">
          <CreateLink />
        </main>
      </div>
    );
  }
}

// ====

export default App;
