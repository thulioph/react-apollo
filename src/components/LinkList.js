import React from 'react';

import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import Link from './Link';

// ====

class LinkList extends React.Component {
    render() {
        const { allLinksQuery } = this.props;

        if (allLinksQuery && allLinksQuery.loading) {
            return(
                <div className="notification is-primary">Loading...</div>
            );
        }
        
        if (allLinksQuery && allLinksQuery.error) {
            return (
                <div className="notification is-danger">Error!</div>
            );
        }

        return (
            <table className="table is-hoverable is-narrow is-fullwidth">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>description</th>
                        <th>url</th>
                        <th></th>
                    </tr>
                </thead>
                
                <tbody>
                    {allLinksQuery.allLinks.map(link => (
                        <Link key={link.id} link={link} />
                    ))}
                </tbody>
            </table>
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