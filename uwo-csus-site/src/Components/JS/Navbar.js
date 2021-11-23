// The Navbar component to go into the file Home.js under Pages
import React from 'react';
import CSUSLogo from '../../Assets/CSUS_logo.png';
import {Link} from 'react-router-dom';
import '../Styles/Navbar.css';

const Home = () => {
    return ( 
        <nav className="navbar">
            <Link to="/About">ABOUT</Link>
            <Link to="/Events">EVENTS</Link>
            <img src={CSUSLogo} alt="CSUS_logo"/>
            <Link to="/Documents">DOCUMENTS</Link>
            <Link to="/Contact">CONTACT</Link>
        </nav>
    );
}
 
export default Home;
