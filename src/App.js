import React from 'react';
import './App.css';
import Header from './components/Header';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main-content">
        <div className="left-column">
          <Experience />
        </div>
        <div className="vertical-line"></div>
        <div className="right-column">          
          <Education />
          <Skills />
        </div>
      </div>
    </div>
  );
}

export default App;
