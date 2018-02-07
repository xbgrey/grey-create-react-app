import React from 'react';
import { Provider } from "react-redux";
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { Routes } from 'entry';
import { LocaleProvider } from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import registerServiceWorker from './registerServiceWorker';
import './index.scss';

class App extends React.PureComponent<any, any> {
    render() {
        return (
            <LocaleProvider locale={zhCN}>
                <Provider>
                    <BrowserRouter>
                        <Routes />
                    </BrowserRouter>
                </Provider>
            </LocaleProvider>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
