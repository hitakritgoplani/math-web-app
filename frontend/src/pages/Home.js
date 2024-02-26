import React from 'react'
import Tile from '../components/Tile';
import '../styles/Home.css'

export default function Home() {
    return (
        <div className='home-root'>
            <header className="App-header">
                <h1><strong>.math</strong></h1>
            </header>
            <div className='home-content'>
                <div className='top'>
                    <Tile hoverColor="#8080ee" name="addition" color="#9C9CDD"></Tile>
                    <Tile hoverColor="#f58d9c" name="counting" color="#EDB5BD"></Tile>
                </div>
                <div className='bottom'>
                    <Tile hoverColor="#f58d9c" name="multiplication" color="#EDB5BD"></Tile>
                    <Tile hoverColor="#8080ee" name="comparison" color="#9C9CDD"></Tile>
                </div>
            </div>
        </div>
    )
}