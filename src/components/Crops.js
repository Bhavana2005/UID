import React from 'react';
import '../styles/Crops.css';

function Crops() {
  const x={
    color:"blue",
  };
  return (
    <section id="crops" className="crops">
      <h2 style={x}>Crops Management</h2>
      <p>Details about the crops, planting schedules, and growth tracking.</p>
    </section>
  );
}

export default  Crops ;
