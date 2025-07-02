import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useState } from 'react';
import Verify from './signupVerify';
import './signupForm.css';

export default function SignupForm(){
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log('Sending confirmation to email', {email});
      setSubmitted(true);
    };

    if(submitted){
        return(
          <Verify email = {email}/>
        );
    }
    return(
        <div className = "signup-page">
          <div className = "signup-left">
            <form onSubmit={handleSubmit} className = "signup-form">
              <h2>Create a free account</h2>
              <p>Already have an account?<Link to="/login"> Sign In </Link></p>
              <label>
                <input 
                  type="email"
                  value={email}
                  placeholder='Email Address'
                  onChange = {(e) => setEmail(e.target.value)}
                  required
                />
              </label>
              <button type="submit">Continue</button>
            </form>
          </div>
          <div className = "signup-right">
          </div>
        </div>
    );
}