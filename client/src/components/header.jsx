import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';

export default function Header() {
  const navigate = useNavigate();

  return (
    <header className="header">
        <button className="login-btn" onClick={() => navigate('/login')}>Login</button>
        <button className="signup-btn" onClick={() => navigate('/signup')}>Sign up</button>
    </header>
  );
}