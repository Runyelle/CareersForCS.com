import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { verifyOTP } from '../api/passwordApi';
import './confirm.css';
import New from './newpass'

export default function Confirm({ email }){
    const navigate = useNavigate();
    const [code, setCode] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async(e) => {
        e.preventDefault();

        if(code.length !== 5){
            alert('Please enter a valid 5-digit code');
        }
        try{
            await verifyOTP(email, code);
            console.log('User entered code', {code});
            setSubmitted(true);
        }catch(err){
            console.error(err.response?.data || err.message);
        }
    };

    if(submitted){
        return(
            <div className = "confirm-container">
                <New email={email}/>
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