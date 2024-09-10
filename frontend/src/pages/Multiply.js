import React, { useState } from 'react';
import Header from '../components/Header';
import '../styles/Add.css';
import Question from '../components/Question';
import Line from '../components/Line';
import Answer from '../components/Answer';
import axios from 'axios';

export default function Multiply() {
    const [question1, setQuestion1] = useState(generateRandomNumber());
    const [question2, setQuestion2] = useState(generateRandomNumber());
    const [isCorrectAnswer, setIsCorrectAnswer] = useState(null);
    var correct = false;

    function generateRandomNumber() {
        return Math.floor(Math.random() * 10) + 1;
    }

    async function handleEnterPressed(inputValue) {
        if (inputValue) {
            if (question1 * question2 == inputValue) {
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
                page: "Multiplication",
                correct: correct
            })
            correct = false
            setQuestion1(generateRandomNumber());
            setQuestion2(generateRandomNumber());
            setTimeout(() => {
                setIsCorrectAnswer(null);
            }, 400);
        }
        else {
            return;
        }
    }

    return (
        <div>
            <Header />
            <div className='add-root'>
                <div style={{ backgroundColor: "#fff" }} className='add-question'>
                    <Question number={question1} />
                    <div style={{ width: "10vw", textAlign: "center", color: "#c8c8c8", textShadow: "black 5px 5px", height: "inherit", fontSize: "15vw" }}><strong>&times;</strong></div>
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
