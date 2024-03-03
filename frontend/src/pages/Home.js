import React from 'react'
import Tile from '../components/Tile';
import '../styles/Home.css'
import Header from '../components/Header';


export default function Home() {
    return (
        <div className='home-root'>
            <Header />
            <div className='home-content'>
                <div className='top'>
                    <Tile hoverColor="#638889" name="addition" color="#a4bfc0"></Tile>
                    <Tile hoverColor="#8080ee" name="counting" color="#9C9CDD"></Tile>
                </div>
                <div className='bottom'>
                    <Tile hoverColor="#8080ee" name="multiplication" color="#9C9CDD"></Tile>
                    <Tile hoverColor="#638889" name="comparison" color="#a4bfc0"></Tile>
                </div>
            </div>
        </div>
    )
}