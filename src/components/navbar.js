import React from "react";
import { Link } from "react-router-dom";
import './styles/navbar.css';

const Navbar= () => {
    return (
        <React.Fragment>
            <div className="navbar">
                <div className="navbar-title">
                    <Link to="/"><h1>NGO_Finder</h1></Link>
                </div>
                <div className="navbar_links">
                    <Link to="/about"><h2 className="navbar_link">About</h2></Link>
                    <Link to="/"><h2 className="navbar_link">Form</h2></Link>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Navbar;