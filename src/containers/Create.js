import React from 'react';

import Header from '../components/Header';
import CreateLink from '../components/CreateLink';

// ====

class Create extends React.Component {
    render() {
        return (
            <div className="App">
                <Header />

                <main className="section App-intro">
                    <div className="container">
                        <CreateLink {...this.props} />
                    </div>
                </main>
            </div>
        );
    }
}

// ====

export default Create;
