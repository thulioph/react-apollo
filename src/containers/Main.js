import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';

import createBrowserHistory from 'history/createBrowserHistory';

import App from '../components/App';
import CreateLink from '../components/CreateLink';

// ====

const browserHistory = createBrowserHistory();

const Main = () => (
    <main>
        <Router history={browserHistory}>
            <Switch>
                <Route path='/' component={App} exact />
                <Route path='/create' component={CreateLink} exact />
            </Switch>
        </Router>
    </main>
);

// ====

export default Main;