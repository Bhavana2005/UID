import React from 'react';
import '../styles/Header.css';

function Header() {
  return (
    <header className="header">
      <h1>Agriculture Management System</h1>
      <nav>
        <a href="#dashboard">Dashboard</a>
        <a href="#crops">Crops</a>
        <a href="#inventory">Inventory</a>
        <a href="#reports">Reports</a>
        
      </nav>
    </header>
  );
}

export default Header;
