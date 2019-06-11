import React from 'react';
import {Component} from 'react';

import logo from './logo.svg';
import './App.css';
import Title from './components/Title';
import LightSwitch from './components/LightSwitch';
import User from './components/User';

// function App() {}
class App extends React.Component {
  render () {
    return (
      <div className="App">

        <main>

          <div>
            <UserBoard />

            <div>
              <User username={'John'} />
              <User username={'Joe'} />
              <User username={'Jane'} />

            </div>
          </div>
        </main>
      </div>
    );
  }
}

class UserBoard extends React.Component {
  render () {
    return <h1>User Board</h1>;
  }
}

export default App;
