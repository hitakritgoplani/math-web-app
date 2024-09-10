import React, { useState } from 'react';
import '../styles/Add.css';
import Question from '../components/Question';
import Line from '../components/Line';
import Answer from '../components/Answer';
import Header from '../components/Header';
import axios from 'axios';

export default function Add() {
    const [question1, setQuestion1] = useState(generateRandomNumber());
    const [question2, setQuestion2] = useState(generateRandomNumber());
    const [isCorrectAnswer, setIsCorrectAnswer] = useState(null);
    var correct = false;

    function generateRandomNumber() {
        return Math.floor(Math.random() * 100) + 1;
    }

    async function handleEnterPressed(inputValue) {
        if (inputValue) {
            const sum = question1 + question2;
            if (sum === Number(inputValue)) {
                correct = true;
                setIsCorrectAnswer(true);
            } else {
                correct = false;
                setIsCorrectAnswer(false);
            }
            await axios.post('http://localhost:3001/information-stats', {
                roll: localStorage.getItem('roll'),
                standard: localStorage.getItem('standard'),
                divison: localStorage.getItem('divison'),
                page: "Addition",
                correct: correct
            })
            correct = false;
            setQuestion1(generateRandomNumber());
            setQuestion2(generateRandomNumber());
            setTimeout(() => {
                setIsCorrectAnswer(null);
            }, 400);
        } else {
            return;
        }
    }

    return (
        <div>
            <Header />
            <div className='add-root'>
                <div className='add-question'>
                    <Question number={question1} />
                    <div className='plus'>+</div>
                    <Question number={question2} />
                </div>
                <Line />
                <div className='add-answer'>
                    <Answer styles={{ width: "10vw" }} onEnterPressed={handleEnterPressed} />
                </div>
                {isCorrectAnswer !== null && (
                    <div className={`answer-feedback ${isCorrectAnswer ? 'correct' : 'incorrect'}`}>
                        {isCorrectAnswer ? 'Correct!' : 'Incorrect!'}
                    </div>
                )}
            </div>
        </div>
    );
}