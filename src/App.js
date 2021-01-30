import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Videos from './Videos';

function App() {
  return (
    <div className="app">
      
      <Header />
      <div className="app__page">
        <Sidebar />
        <Videos />
      </div>
    </div>
  );
}

export default App;
