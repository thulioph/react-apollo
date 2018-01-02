import React from 'react';

// ====

class CreateLink extends React.Component {
    state = {
        description: '',
        url: ''
    };

    _createLink() {
        console.warn('DALE PAPAI!');
    }

    render() {
        const { description, url } = this.state;

        return(
            <form>
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
                    <label htmlFor="description" className="label">Description</label>
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
                        <button className="button" onClick={() => this._createLink.bind(this)}>
                            Submit
                        </button>
                    </div>
                </div>
            </form>
        )
    }
}

// ====

export default CreateLink;