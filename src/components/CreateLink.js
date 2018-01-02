import React from 'react';

import { graphql } from 'react-apollo';
import gql from 'graphql-tag';


// ====

class CreateLink extends React.Component {
    state = {
        description: '',
        url: ''
    };

    _createLink = async (evt) => {
        evt.preventDefault();

        const { description, url } = this.state;
        const { createLinkMutation } = this.props;

        await createLinkMutation({
            variables: {
                description,
                url
            }
        })
    }

    render() {
        const { description, url } = this.state;

        return(
            <form onSubmit={this._createLink.bind(this)}>
                <div className="field">
                    <label htmlFor="description" className="label">Description</label>
                    <div className="control">
                        <input 
                            className="input" 
                            type="text" 
                            placeholder="A description for the link"
                            onChange={(evt) => this.setState({ description: evt.target.value })}
                            value={description}
                        />
                    </div>
                </div>
                
                <div className="field">
                    <label htmlFor="description" className="label">URL</label>
                    <div className="control">
                        <input 
                            className="input" 
                            type="text" 
                            placeholder="An URL for the link"
                            onChange={(evt) => this.setState({ url: evt.target.value })}
                            value={url}
                        />
                    </div>
                </div>

                <div className="field">
                    <div className="control">
                        <button className="button is-link">
                            Submit
                        </button>
                    </div>
                </div>
            </form>
        )
    }
}

// ====

const CREATE_LINK_MUTATION = gql`
    mutation CreateLinkMutation($description: String!, $url: String!) {
        createLink(
            description: $description,
            url: $url
        ) {
            id
            url
            description
            createdAt
        }
    }
`;

export default graphql(CREATE_LINK_MUTATION, {
    name: 'createLinkMutation'
})(CreateLink);