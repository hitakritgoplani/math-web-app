import React from 'react'
import '../styles/Settings.css'
import Header from '../components/Header'

export default function Settings() {
    return (
        <div>
            <Header />
            <div className='settings-root'>
                <ul className='list-of-rules'>
                    <li>Press Enter key to check answer</li><br/>
                    <li>For a correct answer you will score +1</li>
                </ul>
            </div>
        </div>
    )
}
