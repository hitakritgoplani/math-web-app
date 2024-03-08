import React from 'react'
import '../styles/Modes.css'
import Header from '../components/Header'

export default function Modes() {
    console.log(localStorage.getItem('token'));
    return (
        <div>
            <Header />
            <div className='modes-root'>
                <div style={{ backgroundColor: "#a4bfc0" }} className='mode' onClick={() => window.location.href = '/home'}>
                    <h2>practice</h2>
                </div>
                <div style={{ backgroundColor: "#EBD9B4" }} className='mode'>
                    <h2>play online</h2>
                </div>
            </div>
        </div>
    )
}
