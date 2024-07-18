import React from 'react';

function Navbar({ onNavClick, activePage }) {
  const handleNavClick = (page) => {
    onNavClick(page);
  };

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <button
            className={`navbar-link ${activePage === 'about' ? 'active' : ''}`}
            data-nav-link
            onClick={() => handleNavClick('about')}
          >
            About
          </button>
        </li>
        <li className="navbar-item">
          <button
            className={`navbar-link ${activePage === 'resume' ? 'active' : ''}`}
            data-nav-link
            onClick={() => handleNavClick('resume')}
          >
            Resume
          </button>
        </li>
        <li className="navbar-item">
          <button
            className={`navbar-link ${activePage === 'portfolio' ? 'active' : ''}`}
            data-nav-link
            onClick={() => handleNavClick('portfolio')}
          >
            Portfolio
          </button>
        </li>
        <li className="navbar-item">
          <button
            className={`navbar-link ${activePage === 'blog' ? 'active' : ''}`}
            data-nav-link
            onClick={() => handleNavClick('blog')}
          >
            Blog
          </button>
        </li>
        <li className="navbar-item">
          <button
            className={`navbar-link ${activePage === 'contact' ? 'active' : ''}`}
            data-nav-link
            onClick={() => handleNavClick('contact')}
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

