import React from 'react';

import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

// ====

class Link extends React.Component {
    _deleteLink = async ({id}) => {
        const { removeLinkMutation, allLinksQuery } = this.props;

        await removeLinkMutation(({
            variables: {
                id: id
            }
        }));
        
        allLinksQuery.refetch();
    }

    render() {
        const { link } = this.props;

        return(
            <tr key={link.id}>
                <td>{link.id}</td>
                <td>{link.description}</td>
                <td>
                    <a href={link.url} target='_blank'>
                        {link.url}
                    </a>
                </td>
                <td>
                    <button className="button is-danger" onClick={() => this._deleteLink(link)}>
                        <i title="Remove" className="fa fa-trash-o" aria-hidden="true"></i>
                    </button>
                </td>
            </tr>
        )
    }
}

// ====

const REMOVE_LINK_MUTATION = gql`
    mutation DeleteLinkMutation($id: ID!) {
        deleteLink(id: $id) {
            id
        }
    }
`;

export default graphql(REMOVE_LINK_MUTATION, {
    name: 'removeLinkMutation'
})(Link);