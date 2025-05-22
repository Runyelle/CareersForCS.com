import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import '../components/loginForm.css';

export default function LoginForm() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Logging in with email and password:', {email, password});
    /* must set up with api once backend ready and setup*/
  };

  return (
    <div className = "login-form-container">
      <form onSubmit = {handleSubmit} className = "login-form">
        <h2>Welcome to Careers4CS.com</h2> 
        <label>
            Email:
            <input
              type="email"
              value = {email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
        </label>

        <label>
          Password:
          <input
            type = "password"
            value = {password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <button type = "submit"> Login </button>
      </form>

    </div>
  );
}