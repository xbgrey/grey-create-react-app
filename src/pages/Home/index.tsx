import * as React from 'react';
import * as moment from 'moment';
import TimePicker from 'antd/lib/time-picker';
import './index.scss';
import { Generator } from 'utils';

const logo = require('./logo.svg');

function aa(back: any) {
    back.next('123');
    // setTimeout(() => {back.next('123'); }, 3000);
}

class Home extends React.Component {

    private onClickHandler = ()=>{
        Generator.run(this, function * (): any {
            const gen = yield;
            console.log(gen);
            const tt: string = yield aa(gen);
            console.log(tt);
            console.log(this.xxx);
            return null;
        });
    }

    public get xxx(): number {
        return 12300000;
    }

    render() {
        return (
            <div onClick={this.onClickHandler} className="App">
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