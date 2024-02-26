import React from 'react';
import { Link } from 'react-router-dom';
import { ReactTyped } from 'react-typed';
import '../styles/Login.css';

export default function Login() {
    const text = [".math"];
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
