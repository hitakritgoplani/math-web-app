import React, { useState } from 'react';
import Header from '../components/Header';
import '../styles/Add.css';
import Question from '../components/Question';
import Line from '../components/Line';
import Answer from '../components/Answer';

export default function Subtraction() {
    const [question1, setQuestion1] = useState(generateRandomNumber());
    const [question2, setQuestion2] = useState(generateRandomNumber());

    function generateRandomNumber() {
        return Math.floor(Math.random() * 100) + 1;
    }

    function handleEnterPressed() {
        setQuestion1(generateRandomNumber());
        setQuestion2(generateRandomNumber());
    }

    return (
        <div>
            <Header />
            <div className='add-root'>
                <div style={{backgroundColor:"#EBD9B4"}} className='add-question'>
                    <Question number={question1}/>
                    <div style={{textAlign:"center", textShadow:"black -5px 5px", color:"#638889", height:"inherit", fontSize:"15vw"}}><strong>&#45;</strong></div>
                    <Question number={question2}/>
                </div>
                <Line />
                <div style={{backgroundColor:"#9DBC98"}}  className='add-answer'>
                    <Answer styles={{width:"10vw"}} onEnterPressed={handleEnterPressed}/>
                </div>
            </div>
        </div>
    );
}
