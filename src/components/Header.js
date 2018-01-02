import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../logo.svg';

// ====

class Header extends React.Component {
    state = {
        isOpen: false
    }

    render() {
        let { isOpen } = this.state;

        isOpen = isOpen ? 'is-active' : '';

        return (
            <nav className="navbar is-transparent">
                <div className="navbar-brand">
                    <a className="navbar-item" href="https://bulma.io">
                        <img 
                            src={logo} 
                            alt="Logo" 
                            width="112" 
                            height="28"
                        />
                    </a>

                    <button className={`navbar-burger burger ${isOpen}`} onClick={() => this.setState({ isOpen: !isOpen })}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>

                <div className={`navbar-menu ${isOpen}`}>
                    <div className="navbar-end">
                        <li className="navbar-item">
                            <Link to="/">List</Link>
                        </li>
                        
                        <li className="navbar-item">
                            <Link to="/create">Create</Link>
                        </li>
                    </div>
                </div>
            </nav>
        )
    }

}

// ====

export default Header;