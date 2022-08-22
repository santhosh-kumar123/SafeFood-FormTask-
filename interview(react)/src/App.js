import './App.css';
import React,  {useState } from 'react';
import Home from './components/Home';
import Signin from './components/Signin';
import Signup from './components/Signup';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from "./components/Navbar/Navbar"
function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
