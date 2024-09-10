import React, { useState } from 'react';
import Header from '../components/Header'
import Question from '../components/Question';
import Operator from '../components/Operator';
import '../styles/Compare.css'
import axios from 'axios';

export default function Comparison() {
    const [question1, setQuestion1] = useState(generateRandomNumber());
    const [question2, setQuestion2] = useState(generateRandomNumber());
    const [isCorrectAnswer, setIsCorrectAnswer] = useState(null);

    function generateRandomNumber() {
        return Math.floor(Math.random() * 100) + 1;
    }

    async function handleClickPressed(sign) {
        let correct = false;

        if (question1 < question2 && sign === "<") {
            correct = true;
        } else if (question1 > question2 && sign === ">") {
            correct = true;
        } else if (question1 === question2 && sign === "=") {
            correct = true;
        }

        setIsCorrectAnswer(correct);

        await axios.post('http://localhost:3001/information-stats', {
            roll: localStorage.getItem('roll'),
            standard: localStorage.getItem('standard'),
            divison: localStorage.getItem('divison'),
            page: "Comparison",
            correct: correct
        });

        setTimeout(() => {
            setIsCorrectAnswer(null);
            setQuestion1(generateRandomNumber());
            setQuestion2(generateRandomNumber());
        }, 400);
    }

    return (
        <div>
            <Header />
            <div className='compare-root'>
                <div className='compare-question' id='one'>
                    <Question number={question1} />
                </div>

                <div className='signs'>
                    <Operator sign="&lt;" onClickPress={() => handleClickPressed("<")} />
                    <Operator sign="=" onClickPress={() => handleClickPressed("=")}/>
                    <Operator sign="&gt;" onClickPress={() => handleClickPressed(">")}/>
                </div>

                <div className='compare-question' id='two'>
                    <Question number={question2} />
                </div>
                {isCorrectAnswer !== null && (
                    <div className={`answer-feedback ${isCorrectAnswer ? 'correct' : 'incorrect'}`}>
                        {isCorrectAnswer ? 'Correct!' : 'Incorrect!'}
                    </div>
                )}
            </div>
        </div>
    )
}