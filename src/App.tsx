import * as React from 'react';
import { Routes } from 'entry';
import { BrowserRouter } from 'react-router-dom';

class App extends React.PureComponent<any, any> {
    render (){
        return(
            <BrowserRouter>
                <Routes/>
            </BrowserRouter>
        )
    }
}

export default App;