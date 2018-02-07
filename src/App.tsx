import React, { Component } from 'react';
import { TimePicker } from 'antd';
import moment from 'moment';
import './App.scss';

const logo = require('./logo.svg')

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <TimePicker defaultOpenValue={moment('00:00:00', 'HH:mm:ss')} />
        
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
