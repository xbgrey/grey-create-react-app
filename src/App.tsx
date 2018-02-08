import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Routes } from 'entry';

const LocaleProvider = require('antd/lib/locale-provider');
const zhCN = require('antd/lib/locale-provider/zh_CN');

class App extends React.PureComponent {
    render() {
        return (
            <LocaleProvider locale={zhCN}>
                <BrowserRouter>
                    <Routes />
                </BrowserRouter>
            </LocaleProvider>
        );
    }
}

export default App;