import React from 'react'
import Tile from '../components/Tile';
import '../styles/Home.css'
import Header from '../components/Header';


export default function Home() {
    return (
        <div className='home-root'>
            <Header />
            <div className='home-content'>
                <div className='home-top'>
                    <Tile hoverColor="#c8c8c8" name="addition" color="#fff"></Tile>
                    <Tile hoverColor="#c8c8c8" name="subtraction" color="#fff"></Tile>
                    <Tile hoverColor="#c8c8c8" name="comparison" color="#fff"></Tile>
                </div>
                <div className='home-bottom'>
                    <Tile hoverColor="#c8c8c8" name="multiplication" color="#fff"></Tile>
                    <Tile hoverColor="#c8c8c8" name="divison" color="#fff"></Tile>
                </div>
            </div>
        </div>
    )
}