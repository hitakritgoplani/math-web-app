import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/Login.css'

export default function Login() {
    return (
        <div className='root'>
            <div className='left'>
                <h1>.math</h1>
            </div>
            <div className='right'>
                <form action="#">
                    <h2 id="login">Welcome back !</h2>
                    <label>
                        Enter your email:<br />
                        <input id="email" type="text" placeholder="Enter Email" />
                    </label>

                    <label>
                        Enter your password:<br />
                        <input id="password" type="password" placeholder="Enter password" />
                    </label>

                    <input className="btn" value="Login" id="btn" type="button" onClick={() => window.location.href = '/home'} />
                    <Link to="/register"><a href=''>Not registered ? </a></Link>
                </form>
            </div>
        </div>
    )
}
