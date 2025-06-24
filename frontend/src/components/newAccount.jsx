import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useState } from 'react';
import '../components/newAccount.css';

export default function NewAccount(){
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Setting up account with ', {email}, ' and given password.');
        navigate('/');
    };

    return(
        <div className = "NewAccount-page">
            <div className = "NewAccount-left">
                <form onSubmit = {handleSubmit} className = "NewAccount-form">
                    <h1>Getting Started</h1>
                    <p>Already have an account? <Link to= '/login'>Sign in</Link></p>
                    <h2>Create a new account</h2>
                    <label>
                        <strong>Username</strong>
                        <input 
                            type="text"
                            value={username}
                            placeholder='John Doe'
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </label>

                    <label>
                        <strong>Password</strong>
                        <input 
                            type="password"
                            value={password}
                            placeholder='*********'
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </label>
                    <button type="submit">Create Account</button>
                </form>
            </div>
            <div className = "NewAccount-right">
            </div>
        </div>
    );
}

