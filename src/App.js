import React from 'react';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Crops from './components/Crops';
import Inventory from './components/Inventory';
import Reports from './components/Reports';
import Footer from './components/Footer';
import './styles/App.css';

function App() {
  
  return (
    <div className="App">
      <Header />
      <Dashboard />
      <Crops />
      <Inventory />
      <Reports />
      <Footer />
    </div>
  );
}

export default App;
