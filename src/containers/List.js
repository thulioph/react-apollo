import React from 'react';

import Header from '../components/Header';
import LinkList from '../components/LinkList';

// ====

class List extends React.Component {
    render() {
        return (
            <div className="App">
                <Header />

                <main className="section App-intro">
                    <div className="container">
                        <LinkList />
                    </div>
                </main>
            </div>
        );
    }
}

// ====

export default List;
