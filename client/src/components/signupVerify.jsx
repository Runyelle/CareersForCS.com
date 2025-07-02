import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useState } from 'react';
import NewAccount from './newAccount';
import './signupVerify.css';

export default function Verify({email}){
    const navigate = useNavigate();
    const [code, setCode] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Sending verification code to user email', {email});
        setSubmitted(true);
    };

    if(submitted){
        return(
            <NewAccount />
        );
    }
    return(
        <div className = "verify-page">
            <div className = "verify-left">
                <form onSubmit={handleSubmit} className = "verify-form">
                    <h2>Enter your verification code</h2>
                    <p>We sent an email to <strong>{email}</strong> <br />
                    with a code to verify your account</p>
                    <label>
                        <input 
                          type ="text"
                          inputmode="numeric"
                          pattern="[0-9]*"
                          value={code}
                          onChange={(e) => setCode(e.target.value.replace(/\D/, ''))}
                          maxLength = {5}
                          placeholder="Enter code"
                          className="confirm-input"
                          required
                        />
                    </label>
                    <button type="submit"> Continue </button>
                    <p>< Link to="/login"> Back to sign in</Link></p>
                </form>
            </div>
            
            <div className = "verify-right">
            </div>
        </div>
    );
}
