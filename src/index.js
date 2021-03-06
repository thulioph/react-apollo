import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from 'react-apollo';

// ====

import './index.css';
import Main from './containers/Main';
import registerServiceWorker from './registerServiceWorker';

// ====

const client = new ApolloClient({
    link: new HttpLink({
        uri: 'https://api.graph.cool/simple/v1/cjbxw7xk81xoj0165u0psmo0w'
    }),
    cache: new InMemoryCache(),
});

ReactDOM.render(
    <BrowserRouter>
        <ApolloProvider client={client}>
            <Main />
        </ApolloProvider>
    </BrowserRouter>, 
    document.getElementById('root')
);

registerServiceWorker();
