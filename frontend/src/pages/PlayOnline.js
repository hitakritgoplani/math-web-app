import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Line from '../components/Line';
import Answer from '../components/Answer';
import axios from 'axios';
import '../styles/PlayOnline.css';
import WordProblem from '../components/WordProblem';

export default function PlayOnline() {
    const [question, setQuestion] = useState("Loading question");
    const [isCorrectAnswer, setIsCorrectAnswer] = useState(null);
    var correct = false;

    async function generateRandomQuestion() {
        setQuestion("Loading new question")
        try {
            const response = await axios.get('http://localhost:3001/word-problem');
            const { question, answer } = response.data;
            setQuestion(question)
            localStorage.setItem('answer', answer); // Store answer in localStorage
        } catch (error) {
            console.error('Error fetching question:', error);
        }
    }

    useEffect(() => {
        generateRandomQuestion();
    }, [])

    async function handleEnterPressed(inputValue) {
        if (inputValue) {
            console.log(inputValue)
            if (Number(inputValue) == Number(localStorage.getItem('answer'))) {
                correct = true;
                setIsCorrectAnswer(true);
            } else {
                correct = false;
                setIsCorrectAnswer(false)
            }
            await axios.post('http://localhost:3001/information-stats', {
                roll: localStorage.getItem('roll'),
                standard: localStorage.getItem('standard'),
                divison: localStorage.getItem('divison'),
                page: "WordProblem",
                correct: correct
            });
            correct = false;
            await generateRandomQuestion();
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
            <div className='play-root'>
                <div className='play-question'>
                    <WordProblem question={question} />
                </div>
                {/* <Line /> */}
                <div className='play-answer'>
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
