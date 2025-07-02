import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './confirm.css';
import New from './newpass'

export default function Confirm({ email }){
    const navigate = useNavigate();
    const [code, setCode] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('User entered code', {code});
        /* must set up with api and backend stuff*/

        if(code.length === 5){
            alert('Code accepted');
            setSubmitted(true);
        }
        else{
            alert('Please enter a valid 5-digit code');
        }
    };

    if(submitted){
        return(
            <div className = "confirm-container">
                <New />
            </div>
        )
    }

    
    return(
        <div className = "confirm-container">
            <h2>CareersforCS.com</h2>
            <h2>Please check your email</h2>
            <p>Enter the 5-digit code we sent to <strong>{email}</strong> <br /> to verify your account</p>
            <form onSubmit = {handleSubmit}>
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
                <button type="submit" className="confirm-button">Confirm</button>
            </form>
        </div>
    );
}