import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useState } from 'react';
import '../components/loginForm.css';

export default function LoginForm() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Logging in with email and password:', {email, password});
    /* must set up with api once backend ready and setup */
  };

  return (
    <div className="login-page">
      <div className="login-left">
        <form onSubmit={handleSubmit} className="login-form">
          <h2>Welcome to Careers4CS.com</h2>
          <h4>Don't have an account? <Link to="/signup"> SignUp </Link></h4>
          <label>
            <strong>Email:</strong>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>

          <label>
            <strong>Password:</strong>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <h4> <Link to="/reset"> Forgot Password? </Link> </h4>
          </label>
          <button type="submit">Login</button>
        </form>
      </div>
      <div className="login-right">
      </div>
    </div>
  );
}