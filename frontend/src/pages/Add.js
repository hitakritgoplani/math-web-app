import React from 'react'
import Header from '../components/Header'
import '../styles/Add.css'
import Question from '../components/Question'
import Line from '../components/Line'
import Answer from '../components/Answer'

export default function Add() {
    return (
        <div>
            <Header />
            <div className='add-root'>
                <div className='add-question'>
                    <Question number="5"/>
                    <div style={{fontSize:"15rem"}}><strong>+</strong></div>
                    <Question number="100"/>
                </div>
                <Line />
                <div className='add-answer'>
                    <Answer  styles={{width:"10vw"}}/>
                </div>
            </div>
        </div>
    )
}
