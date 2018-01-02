import React from 'react';

import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

// ====

class Link extends React.Component {
    _deleteLink = async ({id}) => {
        console.warn(id);
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

export default Link;