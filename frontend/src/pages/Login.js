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
                    <h2 id="login">hello👋, welcome back !</h2>
                    <label>
                        enter your email:<br />
                        <input className='input-login' id="email" type="text" placeholder="enter email" />
                    </label>

                    <label>
                        enter your password:<br />
                        <input className="input-login" id="password" type="password" placeholder="enter password" />
                    </label>

                    <input className="btn" value="login" id="btn" type="button" onClick={() => window.location.href = '/modes'} />
                    <Link to="/register"><a style={{color:"black", fontSize:"1.2vw"}} href=''>not registered ? </a></Link>
                </form>
            </div>
        </div>
    )
}
