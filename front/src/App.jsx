// src/App.js
import React from 'react';
import './App.css';
import Sidebar from './Sidebar/Sidebar';
import InterestCircle from './InterestCircle/InterestCircle';
import Content from './Content/Content';



function App() {
  return (
    <div className="App">
      <Sidebar />
      <InterestCircle />
      <Content />
    </div>
  );
}

export default App;
