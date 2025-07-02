import React from 'react';
import Header from '../components/header';
import { useNavigate } from 'react-router-dom';
import '../styles/intro.css';

export default function intro() {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <div className="intro-container">
        <h1 className="intro-heading">Welcome to CareersForCS</h1>
        <button className = "getstarted-button">Get Started</button>
      </div>
    </>
  );
}