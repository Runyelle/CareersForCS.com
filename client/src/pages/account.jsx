import React from 'react';
//import Header from '../components/header';
import { useNavigate } from 'react-router-dom';
import '../styles/account.css';


export default function Account(){
    const navigate = useNavigate();
    return(
        <div className = "account-container">
            <p>Yellows</p>
        </div>
        //finish later
    );
}