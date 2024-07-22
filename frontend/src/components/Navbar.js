import React from 'react';
import '../assets/css/style.css';

const Navbar = ({ activePage, handleNavClick }) => {
    const navItems = ['about', 'resume', 'portfolio', 'blog', 'contact'];

    const getButtonClass = (page) =>
        `navbar-link ${activePage === page ? 'active' : ''}`;

    return (
        <nav className="navbar">
            <ul className="navbar-list">
                {navItems.map((item) => (
                    <li key={item} className="navbar-item">
                        <button
                            className={getButtonClass(item)}
                            onClick={() => handleNavClick(item)}
                        >
                            {item.charAt(0).toUpperCase() + item.slice(1)}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;
