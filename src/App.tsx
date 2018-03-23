import * as React from 'react';
import { Routes } from 'entry';

const LocaleProvider = require('antd/lib/locale-provider');
const zhCN = require('antd/lib/locale-provider/zh_CN');

class App extends React.PureComponent {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <LocaleProvider locale={zhCN}>
                <Routes />
            </LocaleProvider>
        );
    }
}

export default App;