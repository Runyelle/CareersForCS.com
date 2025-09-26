/*
page will list all the discussions on the website
top 3 discussions of the week
recommend old or new discussions ( so any discussions ) that are a hot discussion topic in the tech industry
try to model off of reddits infrastructure
*/

import React from 'react';
import Header from '../components/discussionHeader';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import '../styles/discussionList.css';

export default function intro() {
  const navigate = useNavigate();

  const [discussions, setDiscussions] = useState([]);

  useEffect(() => {
    setDiscussions([
        { id: 1, title: "AI replacing jobs?" },
        { id: 2, title: "The future of WebAssembly" },
        { id: 3, title: "Should devs learn Rust in 2025?" },
        { id: 4, title: "VR & AR in mainstream education" },
        { id: 5, title: "React vs SolidJS" },
        { id: 6, title: "Why backend salaries are booming" },
        { id: 7, title: "Quantum computing for coders" },
        { id: 8, title: "Node.js still relevant?" },
        { id: 9, title: "The rise of dev AI agents" },
        { id: 10, title: "How to land a FAANG internship" },
    ]);
   }, []);

  return (
    <>
      <Header />
      <div className = "discussions-page">
        <div className = "discussions-left">
            <h3>Filter</h3>

            <div className = "filter-section">
            <p className = "filter-title">Categories</p>
              <div className="filter-options">
                <label><input type="checkbox"/>Software Engineering</label>
                <label><input type="checkbox"/>AI / Machine Learning</label>
                <label><input type="checkbox"/>Cloud Engineering</label>
                <label><input type="checkbox"/>Cyber Security</label>
                <label><input type="checkbox"/>Dev OPS</label>
                <label><input type="checkbox"/>Product Management</label>
              </div>
            </div>
        </div>

        <div className = "discussions-right">
        <label><input type="button" className="box"/></label>
        </div>
      </div>
    </>
  );
}