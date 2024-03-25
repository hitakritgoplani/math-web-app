import React from 'react'
import '../styles/Header.css'

export default function Header() {
    return (
        <header className="App-header">
            <h1><strong><a className="math-heading" href='/modes'>.math</a></strong></h1>
            <div className="info-heading"><a className="math-heading" href='/settings'>&#9432;</a></div>
        </header>
    )
}
