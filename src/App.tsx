import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="init-content">
        <h1>My Music List</h1>
        <button className="main-button" onClick={() => window.location.href = '/main'}>Go to main page</button>
      </div>
    </div>
  );
}

export default App;