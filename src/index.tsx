import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { Routes } from 'entry';
import { BrowserRouter } from 'react-router-dom';
import { LocaleProvider } from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import registerServiceWorker from './registerServiceWorker';

class App extends React.PureComponent<any, any> {
    render (){
        return(
            <LocaleProvider locale={zhCN}>
                <BrowserRouter>
                    <Routes/>
                </BrowserRouter>
            </LocaleProvider>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
