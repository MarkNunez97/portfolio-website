import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="rain-front"/>
      <div className="rain-back"/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          noice
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
