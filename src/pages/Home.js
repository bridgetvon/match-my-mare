import { Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Nav from '../components/Nav'
import Hero from '../components/Hero';
import Login from '../components/Login';

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
            {/* <Route path="/login" element={<Login />} /> */}
          </Routes>
      </main>
    </div>
  );
}

export default Home;