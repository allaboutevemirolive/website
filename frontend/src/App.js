import React, { useState } from 'react';
import './assets/css/style.css';
import Layout from './components/Layout';
import PageContent from './components/PageContent';

const App = () => {
    const [activePage, setActivePage] = useState('about');
    const [showContacts, setShowContacts] = useState(false);

    const handleNavClick = (page) => {
        setActivePage(page);
    };

    const handleSidebarToggle = () => {
        setShowContacts((prevState) => !prevState);
    };

    return (
        <Layout
            showContacts={showContacts}
            handleSidebarToggle={handleSidebarToggle}
            activePage={activePage}
            handleNavClick={handleNavClick}
        >
            <PageContent activePage={activePage} />
        </Layout>
    );
};

export default App;
