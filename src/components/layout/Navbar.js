import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = ({ icon, title }) => {

    return (
        <nav className="navbar navbar-inverse">
            <div className="navbar-brand">
                <i className={icon} /> {title}
            </div>
            <ul className='nav navbar-nav navbar-right' style={{marginRight:'0px'}}>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li>
            </ul>
        </nav>
    );

}

Navbar.defaultProps = {
    title: 'Github Finder',
    icon: 'fab fa-github'
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
}

export default Navbar
