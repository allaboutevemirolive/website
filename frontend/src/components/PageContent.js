import React from 'react';
import Contact from './Contact';
import Blog from './Blog';
import Portfolio from './Portfolio';
import Resume from './Resume';
import About from './About';

const PageContent = ({ activePage }) => {
    return (
        <>
            {activePage === 'about' && <About />}
            {activePage === 'resume' && <Resume />}
            {activePage === 'portfolio' && <Portfolio />}
            {activePage === 'blog' && <Blog />}
            {activePage === 'contact' && <Contact />}
        </>
    );
};

export default PageContent;
