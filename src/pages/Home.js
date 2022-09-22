import { Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Nav from '../components/Nav'
import Hero from '../components/Hero';

function Home() {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => {
    //set state to go from false to true
    setIsOpen(!isOpen)
  }
  
  return (
    <div>
      <main>
          <Nav toggle={toggle} />
          {isOpen ? < Sidebar toggle={toggle} /> : ''}
          <Routes>
            <Route path="/" element={<Hero/>} />
          </Routes>
      </main>
    </div>
  );
}

export default Home;