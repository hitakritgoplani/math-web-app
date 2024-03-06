import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ReactTyped } from 'react-typed';
import axios from 'axios';
import '../styles/Login.css';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const text = [".math"];
    const navigate = useNavigate(); // Import useNavigate from 'react-router-dom'

    useEffect(() => {
        const isAuthenticated = localStorage.getItem('token');
        if (isAuthenticated) {
            navigate('/modes');
        }
    }, [navigate]);

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3001/login', {
                email,
                password
            });
      
            if (response.status === 200 && response.data["message"] === "Success") {
                console.log("Login successful");
                localStorage.setItem('token', response.data["token"]);
                navigate('/modes');
            } else {
                console.log(response.data);
                alert("Login failed.");
            }
        } catch (error) {
            console.error(error);
            alert("Invalid credentials");
        }
    }

    return (
        <div className='root'>
            <div className='left'>
                <h1><ReactTyped className='math' strings={text}  typeSpeed={190} backSpeed={190} cursorChar='' loop/>
                </h1>
                <span><ReactTyped className="cur" strings={[""]}  typeSpeed={190} backSpeed={190} cursorChar='|' loop/></span>
            </div>
            <div className='right'>
                <form action="#">
                    <h2 id="login">Hello👋, Welcome back !</h2>
                    <label>
                        Enter your email:<br />
                        <input className='input-login' id="email" type="text" placeholder="Enter email" onChange={(e)=>{setEmail(e.target.value)}}/>
                    </label>

                    <label>
                        Enter your password:<br />
                        <input className="input-login" id="password" type="password" placeholder="Enter password" onChange={(e)=>{setPassword(e.target.value)}}/>
                    </label>

                    <input className="btn" value="Login" id="btn" type="button" onClick={handleLogin} />
                    <Link to="/register"><a style={{color:"black", fontSize:"1.2vw"}} href=''>Not registered ? </a></Link>
                </form>
            </div>
        </div>
    )
}
