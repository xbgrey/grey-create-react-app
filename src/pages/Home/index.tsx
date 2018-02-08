import * as React from 'react';
import * as moment from 'moment';
import TimePicker from 'antd/lib/time-picker';
import './index.scss';

const logo = require('./logo.svg');

class Home extends React.Component {
  render() {
    console.log(this.props);
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

export default Home;