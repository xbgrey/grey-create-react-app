import * as React from 'react';
import { Routes } from 'entry';
import { BrowserRouter } from 'react-router-dom';
import { LocaleProvider } from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';

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

export default App;