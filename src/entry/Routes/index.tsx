import * as React from 'react';
import pages from 'pages';
import { Route } from 'react-router-dom';

const Routes = () => (
    <div>
        <Route exact path="/" component={pages.Home} />
    </div>
)

export default Routes;