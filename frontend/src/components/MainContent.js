import React, { useState, useEffect } from 'react';
import About from './About';
import Resume from './Resume';
import Portfolio from './Portfolio';
import Blog from './Blog';
import Contact from './Contact';

function MainContent({ activePage, handlePageChange }) {
    // State for filtering portfolio items (if needed)
    const [filter, setFilter] = useState('all');

    // Fetch blog data from an API or local file
    const [blogData, setBlogData] = useState([]);
    useEffect(() => {
        // Replace with your actual fetch logic
        fetch('./blogData.json') // Example: Fetching from a JSON file
            .then((res) => res.json())
            .then((data) => setBlogData(data))
            .catch((error) => console.error('Error fetching blog data:', error));
    }, []);

    return (
        <main className="main-content">
            <nav className="navbar">
                <ul className="navbar-list">
                    <li className="navbar-item">
                        <button className={`navbar-link ${activePage === 'about' ? 'active' : ''}`} data-nav-link="" onClick={() => handlePageChange('about')}>
                            About
                        </button>
                    </li>
                    <li className="navbar-item">
                        <button className={`navbar-link ${activePage === 'resume' ? 'active' : ''}`} data-nav-link="" onClick={() => handlePageChange('resume')}>
                            Resume
                        </button>
                    </li>
                    <li className="navbar-item">
                        <button className={`navbar-link ${activePage === 'portfolio' ? 'active' : ''}`} data-nav-link="" onClick={() => handlePageChange('portfolio')}>
                            Portfolio
                        </button>
                    </li>
                    <li className="navbar-item">
                        <button className={`navbar-link ${activePage === 'blog' ? 'active' : ''}`} data-nav-link="" onClick={() => handlePageChange('blog')}>
                            Blog
                        </button>
                    </li>
                    <li className="navbar-item">
                        <button className={`navbar-link ${activePage === 'contact' ? 'active' : ''}`} data-nav-link="" onClick={() => handlePageChange('contact')}>
                            Contact
                        </button>
                    </li>
                </ul>
            </nav>

            {activePage === 'about' && <About />}
            {activePage === 'resume' && <Resume />}
            {activePage === 'portfolio' && <Portfolio filter={filter} setFilter={setFilter} />}
            {activePage === 'blog' && <Blog blogData={blogData} />}
            {activePage === 'contact' && <Contact />}
        </main>
    );
}

export default MainContent;

