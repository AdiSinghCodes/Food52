import React, { useState } from 'react';
import './Navbar.css'; // Keep the styling
import {Link} from 'react-router-dom';
const Navbar = () => {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        document.body.classList.toggle('dark-mode');
    };

    return (
        <nav className={`navbar ${darkMode ? 'light' : 'dark'}`}>
            <div className="navbar-container">
                <div className="navbar-left">
                    <button onClick={toggleDarkMode} className="dark-mode-toggle">
                        {darkMode ? 'Light Mode' : 'Dark Mode'}
                    </button>
                </div>
                <div className="navbar-center">
                    <h1 className="company-name"></h1>  {/* Replace "Food52" with your company name */}
                </div>

                <div className="navbar-right">
                    <ul className="navbar-links">
                        <strong><li><Link to="/">HOME</Link></li></strong>  {/* Links to the homepage */}
                        <strong><li><Link to="/start">START HERE</Link></li></strong>   {/* Links to the Recipes page */}
                        <strong><li><Link to="/recipes">RECIPES</Link></li></strong>   {/* Links to the About page */}
                          {/* Links to the Contact page */}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
