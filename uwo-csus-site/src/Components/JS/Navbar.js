// The Navbar component to go into the file Home.js under Pages
import React from 'react';
import CSUSLogo from '../../Assets/CSUS_logo.png';
import {Link} from 'react-router-dom';
import '../Styles/Navbar.css';

const Home = () => {
    return ( 
        <nav className="navbar">
            <Link className="navbar__link" to="/About">ABOUT</Link>
            <Link className="navbar__link"  to="/Events">EVENTS</Link>
            <img className="navbar__logo" src={CSUSLogo} alt="CSUS_logo"/>
            <Link className="navbar__link"  to="/Documents">DOCUMENTS</Link>
            <Link className="navbar__link"  to="/Contact">CONTACT</Link>
        </nav>
    );
}
 
export default Home;
