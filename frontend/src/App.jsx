import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Reset from './pages/reset';
import Login from './pages/login';
import Signup from './pages/signup';
import Intro from './pages/intro'; // This is your intro page
import './App.css'

function App() {
  return (
    <div className = "body">
      <Router>
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/reset" element={<Reset />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;