import React from 'react';
import ReactDOM from 'react-dom';

import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from 'react-apollo';

// ====

import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

// ====

const client = new ApolloClient({
    link: new HttpLink({
        uri: 'https://api.graph.cool/simple/v1/cjbxw7xk81xoj0165u0psmo0w'
    }),
    cache: new InMemoryCache(),
});

ReactDOM.render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>, 
    document.getElementById('root')
);

registerServiceWorker();
