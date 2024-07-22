import React from 'react';
import MetaTags from './MetaTags';
import SidebarInfo from './SidebarInfo';
import Navbar from './Navbar';

const Layout = ({ showContacts, handleSidebarToggle, activePage, handleNavClick, children }) => {
    return (
        <div>
            <MetaTags />
            <main>
                <aside className={`sidebar ${showContacts ? 'active' : ''}`}>
                    <SidebarInfo showContacts={showContacts} handleSidebarToggle={handleSidebarToggle} />
                </aside>
                <div className="main-content">
                    <Navbar activePage={activePage} handleNavClick={handleNavClick} />
                    {children}
                </div>
            </main>
        </div>
    );
};

export default Layout;
