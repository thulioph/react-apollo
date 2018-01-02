import React from 'react';

import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import Link from './Link';

// ====

class LinkList extends React.Component {
    render() {
        const { allLinksQuery } = this.props;

        if (allLinksQuery && allLinksQuery.loading) {
            return <div>Loading...</div>
        }
        
        if (allLinksQuery && allLinksQuery.error) {
            return <div>Error! {allLinksQuery.error}</div>
        }

        return (
            <ul>
                {allLinksQuery.allLinks.map(link => (
                    <Link key={link.id} link={link} />
                ))}
            </ul>
        )
    }
}

// ====

const ALL_LINKS_QUERY = gql`
    query AllLinksQuery {
        allLinks {
            id
            createdAt
            url
            description
        }
    }
`;

export default graphql(ALL_LINKS_QUERY, {
    name: 'allLinksQuery'
})(LinkList);