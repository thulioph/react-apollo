import React from 'react';

import '../styles/App.css';

import Header from './Header';
import LinkList from './LinkList';

// ====

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />

        <section className="hero is-dark">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">
                Create
              </h1>

              <h2 className="subtitle">
                add a new link
              </h2>
            </div>
          </div>
        </section>
        
        <main className="section App-intro">
          <div className="container">
            <LinkList />
          </div>
        </main>
      </div>
    );
  }
}

// ====

export default App;
