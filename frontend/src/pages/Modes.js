import React from 'react'
import '../styles/Modes.css'
import Header from '../components/Header'

export default function Modes() {
    return (
        <div>
            <Header />
            <div className='modes-root'>
                <div style={{ backgroundColor: "#9C9CDD" }} className='mode' onClick={() => window.location.href = '/home'}>
                    <h2>Practice</h2>
                </div>
                <div style={{ backgroundColor: "#EDB5BD" }} className='mode'>
                    <h2>Play Online</h2>
                </div>
            </div>
        </div>
    )
}
