import React from 'react';
import LoginForm from '../components/loginForm';
import { useNavigate } from 'react-router-dom';
import '../styles/login.css';

export default function Login(){
    const navigate = useNavigate();
    return (
        <div>
          <LoginForm/>
        </div>
    );
}