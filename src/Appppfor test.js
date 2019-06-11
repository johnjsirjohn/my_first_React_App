import React from 'react';
import {Component} from 'react';

import logo from './logo.svg';
import './App.css';
import Title from './components/Title';
import LightSwitch from './components/LightSwitch';

// function App() {}
class App extends React.Component {
  //We define the method render
  render () {
    //We say what it should return
    //React calls this App.render() for us
    //render() return JSX <h1>Hello</h1>
    const object = {name: 'John'};
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
          <Greeting />
          {/*You can insert values or expression using curly braces*/}
          {/*Values allowed: string, numbers, array or react components*/}
          {/*Not allowed: Objects */}
          {/*Allowed but doesn't do anything: booleans, undefined, null */}

          {'I am a string'}
          {5 + 5}
          {null}
          {undefined}
          {true}
          {[<Greeting />, <Greeting />, <Greeting />, 1, 2, 3, 4, 5]}
          {object.name}
        </header>
        <main>
          <Title content="Some Simple Title" />
          <LightSwitch />
          <div><p>User: <b>John</b></p></div>

        </main>
      </div>
    );
  }
}
class Greeting extends React.Component {
  render () {
    return <h1>Hello</h1>;
  }
}

export default App;
