import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';

import createBrowserHistory from 'history/createBrowserHistory';

import List from './List';
import Create from './Create';

// ====

const browserHistory = createBrowserHistory();

const Main = () => (
    <main>
        <Router history={browserHistory}>
            <Switch>
                <Route 
                    path='/' 
                    render={(history) => <List {...history} />} 
                    exact 
                />

                <Route 
                    path='/create' 
                    render={(history) => <Create {...history} />} 
                    exact 
                />
            </Switch>
        </Router>
    </main>
);

// ====

export default Main;