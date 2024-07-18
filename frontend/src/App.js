import React, { useState } from 'react';
import './styles/style.css'; // Import your CSS
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';

function App() {
  const [activePage, setActivePage] = useState('about');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handlePageChange = (page) => {
    setActivePage(page);
    setSidebarOpen(false); // Close sidebar on mobile after navigation
  };

  return (
    <div className="main">
      <Sidebar 
        activePage={activePage} 
        handlePageChange={handlePageChange} 
        sidebarOpen={sidebarOpen} 
        setSidebarOpen={setSidebarOpen} 
      />
      <MainContent activePage={activePage} />
    </div>
  );
}

export default App;
