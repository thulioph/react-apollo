import React from 'react';

import { graphql } from 'react-apollo';
import gql from 'graphql-tag';


// ====

class Todo extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { data: { refetch, allLinks } } = this.props;

        return(
            <div>
                 <button onClick={() => refetch()}>
                    Refresh
                </button> 

                 <ul>
                    {allLinks && allLinks.map(link => (
                        <li key={link.id}>
                            <a href={link.url} target='_blank'>
                                {link.description}
                            </a>
                        </li>
                    ))}
                </ul> 
            </div>
        )
    }
};

// ====

export default graphql(gql`
    query {
        allLinks {
            id
            description
            url
        }
    }
`)(Todo);