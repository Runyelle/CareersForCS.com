import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useState } from 'react';
import '../components/loginForm.css';

export default function LoginForm() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            const response = await fetch("/api/v1/signin", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            
            body: JSON.stringify({ email, password}),
        });

        const data = await response.json();
        console.log("Server response:", data);

        if (data.status === "SUCCESS") {
        
        navigate('/');
        } else {
            alert(data.message || "Signin failed");
        }
    } catch (err) {
        console.error("Signip error:", err);
        alert("Something went wrong during signip.");
    }
    };

  return (
    <div className="login-page">
      <div className="login-left">
        <form onSubmit={handleSubmit} className="login-form">
          <h2 className="login-title">Welcome to Careers4CS.com</h2>
          <p className="login-subtext">
            Don't have an account? <Link to="/signup">Sign Up</Link>
          </p>
          <input
            type="email"
            value={email}
            placeholder="Email address"
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <div className="forgot-password">
            <Link to="/reset">Forgot Password?</Link>
          </div>

          <button type="submit">Login</button>
        </form>
      </div>
      <div className="login-right" />
    </div>
  );
}