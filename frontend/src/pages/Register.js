import React, { useState } from 'react'
import '../styles/Login.css'
import axios from axios;

export default function Register() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/users', {email, name, password})
        .then(result=> console.log(result))
        .catch(err=>console.log(err))

    }


    return (
        <div className='root'>
            <div className='left'>
                <h1>.math</h1>
            </div>
            <div className='right'>
                <form onSubmit={handleSubmit} action="POST">
                    <h2 id="login">hello👋, welcome !</h2>
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
                        <input className="input-login" id="nickname" type="text" placeholder="Enter name" />
                    </label>

                    <input className="btn" value="register" id="btn" type="button" onClick={() => window.location.href = '/modes'} />
                    {/* <Link to="/register"><a href=''>Not registered ? </a></Link> */}
                </form>
            </div>
        </div>
    )
}
