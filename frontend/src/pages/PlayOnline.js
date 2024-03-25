import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Line from '../components/Line';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Answer from '../components/Answer';
import axios from 'axios';
import '../styles/PlayOnline.css';
import WordProblem from '../components/WordProblem';

export default function PlayOnline() {
    const [question, setQuestion] = useState("Loading question");
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
            if (inputValue === localStorage.getItem('answer')) {
                correct = true;
                toast.success("Correct !", {
                    position: "top-right",
                });
            } else {
                correct = false;
                toast.error("Incorrect !", {
                    position: "top-left"
                });
            }
            await axios.post('http://localhost:3001/information-stats', {
                userToken: localStorage.getItem('token'),
                correct: correct
            });
            correct = false;
        } else {
            return;
        }
        await generateRandomQuestion();
    }
    return (
        <div>
            <Header />
            <ToastContainer autoClose={500} hideProgressBar />
            <div className='play-root'>
                <div className='play-question'>
                    <WordProblem question={question} />
                </div>
                <Line />
                <div className='play-answer'>
                    <Answer styles={{ width: "10vw" }} onEnterPressed={handleEnterPressed} />
                </div>
            </div>
        </div>
    );
}
