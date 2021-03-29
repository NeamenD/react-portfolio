import React from 'react';
import './App.css';


import Header from './components/Header.js';
import About from './components/About.js';
import Work from './components/work.js';
import Contact from './components/Contact.js';
import Navbar from './components/Navbar.js'

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="App-header">
      <Header></Header>
      </div>
      
      <div className='About'>
        <About></About>
      </div>
      <div className='work'>
        <Work></Work>
      </div>
      <div className='contact'>
        <Contact></Contact>
      </div>
    </div>
  );
}

export default App;
