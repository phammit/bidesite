import React from 'react';
import logo from './logo.svg';
import './App.css';
import { QueryFunction } from './graphql';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1>BidSite</h1> 
       <QueryFunction />
      </header>
    </div>
  );
}

export default App;
