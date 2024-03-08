import React, { useState } from 'react';
import Header from '../components/Header'
import Question from '../components/Question';
import Operator from '../components/Operator';
import '../styles/Compare.css'
import axios from 'axios';

export default function Comparison() {
    const [question1, setQuestion1] = useState(generateRandomNumber());
    const [question2, setQuestion2] = useState(generateRandomNumber());
    var correct = false;

    function generateRandomNumber() {
        return Math.floor(Math.random() * 100) + 1;
    }

     async function handleClickPressed(sign) {
        if(question1 < question2 && sign == "<"){
            correct = true;
        }
        if(question1 > question2 && sign == ">"){
            correct = true;
        }
        if(question1 == question2 && sign == "="){
            correct = true;
        }
        await axios.post('http://localhost:3001/information-stats', {
            userToken: localStorage.getItem('token'),
            correct: correct
        })
        correct = false;
        setQuestion1(generateRandomNumber());
        setQuestion2(generateRandomNumber());
    }
    return (
        <div className=''>
            <Header />
            <div className='compare-root'>
                <div className='compare-question' id='one'>
                    <Question number={question1} />
                </div>

                <div className='signs'>
                    <Operator sign="&lt;" onClickPress={handleClickPressed} />
                    <Operator sign="=" onClickPress={handleClickPressed}/>
                    <Operator sign="&gt;" onClickPress={handleClickPressed}/>
                </div>

                <div className='compare-question' id='two'>
                    <Question number={question2} />
                </div>
            </div>
        </div>
    )
}