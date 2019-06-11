import React from 'react';
import {Component} from 'react';

import logo from './logo.svg';
import './App.css';
import Title from './components/Title';
import LightSwitch from './components/LightSwitch';

// function App() {
class App extends Component {
  render () {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          <h2>Welcome to Codaisseur</h2>
          <p>Hello World!</p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <main>
          <Title content="Some Simple Title" />
          <LightSwitch />
        </main>
      </div>
    );
  }
}

export default App;
