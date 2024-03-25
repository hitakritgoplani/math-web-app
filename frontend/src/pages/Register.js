import React, { useState } from 'react';
import '../styles/Login.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3001/register', {
                email,
                password,
                name
            });
      
            if (response.data) {
                console.log("Registration successful");
                localStorage.setItem('token', response.data["token"]);
                navigate("/bounce");
            } else {
                console.log(response.data);
                alert("Registration failed.");
            }
        } catch (error) {
            console.error("Error while registration: ", error);
            alert("Error while registering. Please try again.");
        }
    };

    return (
        <div className='root'>
            <div className='left'>
                <h1>.math</h1>
            </div>
            <div className='right'>
                <form onSubmit={handleSubmit} action="POST">
                    <h2 id="login">Hello👋, Welcome!</h2>
                    <label>
                        Enter your email:<br />
                        <input className='input-login' id="email" type="text" placeholder="Enter email" onChange={(e)=>{setEmail(e.target.value)}}/>
                    </label>

                    <label>
                        Enter your password:<br />
                        <input className="input-login" id="password" type="password" placeholder="Enter password" onChange={(e)=>{setPassword(e.target.value)}}/>
                    </label>

                    <label>
                        Enter your name:<br />
                        <input className="input-login" id="nickname" type="text" placeholder="Enter name" onChange={(e)=>{setName(e.target.value)}}/>
                    </label>

                    <input className="btn" value="Register" id="btn" type="submit" />
                </form>
            </div>
        </div>
    )
};
