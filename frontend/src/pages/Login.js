import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/Login.css';

export default function Login() {
    const [name, setName] = useState('');
    const [roll, setRoll] = useState('');
    const [standard, setStandard] = useState('');
    const [division, setDivision] = useState('');
    const navigate = useNavigate();
    var isAuthenticated = false;
    
    useEffect(() => {
        const roll = localStorage.getItem('roll');
        const std = localStorage.getItem('standard');
        const div = localStorage.getItem('divison');
        if(roll && std && div){
            isAuthenticated = true;
        }
        if (isAuthenticated) {
            navigate('/bounce');
        }
    }, [navigate]);

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3001/login', {
                roll,
                standard,
                division
            });
      
            if (response.status === 200 && response.data.message === "Success") {
                console.log("Login successful");
                localStorage.setItem('roll', response.data.roll);
                localStorage.setItem('standard', response.data.standard);
                localStorage.setItem('divison', response.data.division);
                navigate('/bounce');
            } 
        } catch (error) {
            console.error(error);
            alert("Invalid credentials");
        }
    }

    return (
        <div className='root'>
            <div className='top-login'>
                <div className='heading-root'>
                    <h1 className='heading'>Number Ninjas</h1>
                </div>
            </div>
            <div className='bottom-login'>
                <form className='login-form' onSubmit={handleLogin}>                    
                    <label>
                        Enter your name:<br />
                        <input 
                            className='input-login' 
                            id="name" 
                            type="text" 
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </label>
                    
                    <label>
                        Enter your roll number:<br />
                        <input 
                            className='input-login' 
                            id="roll" 
                            type="number" 
                            value={roll}
                            onChange={(e) => setRoll(e.target.value)}
                            required
                        />
                    </label>

                    <label>
                        Enter your standard:<br />
                        <input 
                            className='input-login' 
                            id="standard" 
                            type="number" 
                            value={standard}
                            onChange={(e) => setStandard(e.target.value)}
                            required
                            />
                    </label>

                    <label>
                        Select your division:<br />
                        <select 
                            className='input-login' 
                            id="division" 
                            value={division}
                            onChange={(e) => setDivision(e.target.value)}
                            required
                        >
                            <option value="">Select Division</option>
                            <option value="A">A</option>
                            <option value="B">B</option>
                            <option value="C">C</option>
                            <option value="D">D</option>
                        </select>
                    </label>

                    <button className="btn" id="btn" type="submit">Next</button>
                </form>
            </div>
        </div>
    )
}