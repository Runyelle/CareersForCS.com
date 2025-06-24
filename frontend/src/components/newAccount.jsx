import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useState } from 'react';
import '../components/newAccount.css';

export default function NewAccount(){
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Setting up account with ', {email}, ' and given password.');
        navigate('/');
    };

    return(
        <p> hello gyatt</p>
    );
}

