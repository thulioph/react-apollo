import React from 'react';

// ====

class Link extends React.Component {
    render() {
        const { link } = this.props;

        return(
            <li key={link.id}>
                <a href={link.url} target='_blank'>
                    {link.description}
                </a>
            </li>
        )
    }
}

// ====

export default Link;