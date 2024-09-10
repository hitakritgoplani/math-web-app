import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Modes.css'
import Header from '../components/Header'

export default function Modes() {

    return (
        <div>
            <Header />
            <div className='modes-root'>
                <div className='mode' onClick={() => window.location.href = '/home'}>
                    <h2>basics</h2>
                </div>
                <div className='mode' onClick={() => window.location.href = '/play-online'}>
                    <h2>word problems</h2>
                </div>
            </div>
        </div>
    )
}
