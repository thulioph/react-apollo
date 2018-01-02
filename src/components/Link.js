import React from 'react';

// ====

class Link extends React.Component {
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
            </tr>
        )
    }
}

// ====

export default Link;