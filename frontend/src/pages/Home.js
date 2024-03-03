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
                    <Tile hoverColor="#f58d9c" name="addition" color="#EDB5BD"></Tile>
                    <Tile hoverColor="#8080ee" name="counting" color="#9C9CDD"></Tile>
                </div>
                <div className='bottom'>
                    <Tile hoverColor="#8080ee" name="multiplication" color="#9C9CDD"></Tile>
                    <Tile hoverColor="#f58d9c" name="comparison" color="#EDB5BD"></Tile>
                </div>
            </div>
        </div>
    )
}