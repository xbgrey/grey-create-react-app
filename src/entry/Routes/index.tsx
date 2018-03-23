import * as React from 'react';
import pages from 'pages';
import { Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

const Routes = () => (
    <BrowserRouter>
        <Route exact={true} path="/" component={pages.Home} />
    </BrowserRouter>
);

export default Routes;