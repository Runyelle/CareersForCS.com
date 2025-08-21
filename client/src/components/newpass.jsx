import React from 'react';
import { useState } from 'react';
import {setPassword} from '../api/passwordApi';
import { useNavigate } from 'react-router-dom';
import './newpass.css';

export default function New({email}){
    const navigate = useNavigate();
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handlesubmit = async(e) => {
        e.preventDefault();

        if(newPassword.length >= 8 && newPassword === confirmPassword){
            try{
                await setPassword(email, newPassword);
                console.log("New password has been set");
                navigate('/login');
            }catch(err){
                console.error(err.response?.data || err.message);
            }
            
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