import React from 'react';
import { useNavigate } from 'react-router-dom';
import SignupForm from '../components/signupForm'
import '../styles/signup.css';

export default function Signup(){
    const navigate = useNavigate();
    /*const [email, setEmail] = useState('');
    const [confirm, setConfirm] = useState('');
    const [username, setUsername] = useState('');
    const [first, setFirst] = useState('');
    const [last, setLast] = useState('');
    const [password, setPassword] = useState('');*/
    return (
        <div className = "signup-container">
          <SignupForm/>
        </div>
    );
}