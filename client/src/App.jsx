import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Account from './pages/account';
import Reset from './pages/reset';
import Login from './pages/login';
import Signup from './pages/signup';
import Intro from './pages/intro'; // This is your intro page
import Discussions from './pages/discussionList'; 
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
          <Route path = "/account" element={<Account />} />
          <Route path = "/discussions" element={<Discussions />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;