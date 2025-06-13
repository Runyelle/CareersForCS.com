import React from 'react';
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../styles/reset.css';

export default function Reset(){
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Sending password reset instructions with provided email:', {email});
    };

    return(
        <div className="reset-container">
            <div className="reset-box">
                <h2>CareersforCS.com</h2>
                <h1>Reset Your Password</h1>
                <p>
                    Enter your email address, and we'll <br />
                    send you instructions to reset your password.
                </p>
                <form onSubmit={handleSubmit} className="reset-input">
                    <input
                      type="email"
                      placeholder="Your Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    <button type="submit">Reset Password</button>
                </form>
                <Link to="/login" className="back-link">Back to Sign In Page</Link>
            </div>
        </div>
    );
}