import React from 'react';
import './App.css';
import SunnyVibesContainer from './SunnyVibesContainer';

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <div className="logo">
              <span className="logo-symbol">*</span> KAVIA AI
            </div>
            <button className="btn">SunnyVibes</button>
          </div>
        </div>
      </nav>
      <main>
        <SunnyVibesContainer />
      </main>
    </div>
  );
}

export default App;