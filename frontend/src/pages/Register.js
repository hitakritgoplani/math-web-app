import React from 'react'
import '../styles/Login.css'

export default function Register() {
    return (
        <div className='root'>
            <div className='left'>
                <h1>.math</h1>
            </div>
            <div className='right'>
                <form action="#">
                    <h2 id="login">hello👋, welcome !</h2>
                    <label>
                        enter your email:<br />
                        <input className='input-login' id="email" type="text" placeholder="enter email" />
                    </label>

                    <label>
                        enter your password:<br />
                        <input className="input-login" id="password" type="password" placeholder="enter password" />
                    </label>

                    <label>
                        enter your name:<br />
                        <input className="input-login" id="nickname" type="text" placeholder="enter name" />
                    </label>

                    <input className="btn" value="register" id="btn" type="button" onClick={() => window.location.href = '/modes'} />
                    {/* <Link to="/register"><a href=''>Not registered ? </a></Link> */}
                </form>
            </div>
        </div>
    )
}
