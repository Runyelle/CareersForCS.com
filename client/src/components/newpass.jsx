import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './newpass.css';

export default function New(){
    const navigate = useNavigate();
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const handlesubmit = (e) => {
        e.preventDefault();

        if(newPassword.length >= 8 && newPassword === confirmPassword){
            alert('Password accepted');
            navigate('/login');
        }
        else if(newPassword.length < 8){
            alert('Password needs to be a minimum of 8 characters long')
        }
        else if(newPassword !== confirmPassword){
            alert('New password does not match confirmation')
        }
    };
    return(
        <div className = "newpass-container">
            <h2>CareersforCS.com</h2>
            <h1><strong>Change Password</strong></h1>
            <p>Password must be <strong>8-60 characters</strong></p>
            <div>
                <form onSubmit = {handlesubmit} className="newpass-form">
                    <input 
                        type = "password"
                        inputmode = "numeric"
                        value = {newPassword}
                        max={60}
                        min={8}
                        onChange={(e) => setNewPassword(e.target.value)}
                        placeholder="Enter new Password"
                        className="newpass-input"
                        required
                    />
                    <input 
                        type = "password"
                        inputmode = "numeric"
                        value = {confirmPassword}
                        max={60}
                        min={8}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder="Confirm Password"
                        className="newpass-input"
                        required
                    />
                    <button type="submit" className="newpass-button">Change Password</button>
                </form>
            </div>
        </div>
    );
}