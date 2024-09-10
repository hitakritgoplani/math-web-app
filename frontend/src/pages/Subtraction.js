import React, { useState } from 'react';
import Header from '../components/Header';
import '../styles/Add.css';
import Question from '../components/Question';
import Line from '../components/Line';
import Answer from '../components/Answer';
import axios from 'axios';

export default function Subtraction() {
    const [question1, setQuestion1] = useState(generateRandomNumber1());
    const [question2, setQuestion2] = useState(generateRandomNumber2());
    const [isCorrectAnswer, setIsCorrectAnswer] = useState(null);
    var correct = false;

    function generateRandomNumber1() {
        return Math.floor(Math.random() * 100) + 1;
    }

    function generateRandomNumber2() {
        return Math.floor(Math.random() * question1) + 1;
    }

    async function handleEnterPressed(inputValue) {
        if (inputValue) {
            if (question1 - question2 == inputValue) {
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
                page: "Subtraction",
                correct: correct
            })
            correct = false
            setQuestion1(generateRandomNumber1());
            setQuestion2(generateRandomNumber2());
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
                <div style={{ backgroundColor: "#fff" }} className='add-question'>
                    <Question number={question1} />
                    <div style={{ width: "10vw", textAlign: "center", textShadow: "black -5px 5px", color: "#c8c8c8", height: "inherit", fontSize: "15vw" }}><strong>&#45;</strong></div>
                    <Question number={question2} />
                </div>
                <Line />
                <div style={{ backgroundColor: "#fff" }} className='add-answer'>
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