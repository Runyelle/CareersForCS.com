import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../components/confirm.css';

export default function Confirm({ email }){
    const navigate = useNavigate();
    const [code, setCode] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('User entered code', {code});
        /* must set up with api and backend stuff*/

        if(code.length === 6){
            alert('Code accepted');
        }
        else{
            alert('Please enter a valid 6-digit code');
        }
    };
    return(
        <div className = "confirm-container">
            <h2>Please check your email</h2>
            <p>Enter the 6-digit code we sent to <strong>{email}</strong></p>

            <form onSubmit = {handleSubmit}>
                <input 
                    type ="text"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    maxLength = {6}
                    placeholder="Enter code"
                    className="confirm-input"
                    required
                />
                <button type="submit" className="confirm-button">Confirm</button>
            </form>
        </div>
    );
}