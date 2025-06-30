import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useState } from 'react';
import '../components/newAccount.css';

export default function NewAccount(){
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [linkedin, setLinkedin] = useState('');
    const [github, setGithub] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Setting up account with ', {email}, ' and given password.');
        console.log('Setting up account with ', {linkedin}, ' and ', {github}, '. ')
        navigate('/');
    };

    return(
        <div className = "NewAccount-page">
            <div className = "NewAccount-left">
                <form onSubmit = {handleSubmit} className = "NewAccount-form">
                    <h1>Getting started</h1>
                    <p>Already have an account? <Link to= '/login'>Sign in</Link></p>
                    <label>
                        <p><strong>Username</strong></p>
                        <input 
                            type="text"
                            value={username}
                            placeholder='John Doe'
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </label>

                    <label>
                        <p><strong>Password</strong></p>
                        <input 
                            type="password"
                            value={password}
                            placeholder='*********'
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </label>

                    <label>
                        <p><strong>Linkedin</strong></p>
                        <input 
                            type="url"
                            value={linkedin}
                            placeholder='https://linkedin.com/in/username'
                            onChange={(e) => setLinkedin(e.target.value)}
                        />
                    </label>

                    <label>
                        <p><strong>GitHub</strong></p>
                        <input 
                            type= "url"
                            value={github}
                            placeholder="https://github.com/username"
                            onChange={(e) => setGithub(e.target.value)}
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

