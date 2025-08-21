import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useState } from 'react';
import {signupEmail} from "../api/authApi"
import Verify from './signupVerify';
import './signupForm.css';



export default function SignupForm(){
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async(e) => {
      e.preventDefault();
      try{
        await signupEmail(email);
        console.log("Email sent to ", {email});
        setSubmitted(true);
      }catch(err){
        console.error(err.response?.data || err.message);
      }
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