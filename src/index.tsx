import * as React from 'react';
import * as ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import App from './App';
import './index.scss';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();