import React, { useState } from 'react';
import Header from '../components/Header';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/Add.css';
import Question from '../components/Question';
import Line from '../components/Line';
import Answer from '../components/Answer';
import axios from 'axios';

export default function Subtraction() {
    const [question1, setQuestion1] = useState(generateRandomNumber());
    const [question2, setQuestion2] = useState(generateRandomNumber());
    var correct = false;

    function generateRandomNumber() {
        return Math.floor(Math.random() * 100) + 1;
    }

    async function handleEnterPressed(inputValue) {
        if (inputValue) {
            if (question1 - question2 == inputValue) {
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
            })
            correct = false
        }else{
            return;
        }
        setQuestion1(generateRandomNumber());
        setQuestion2(generateRandomNumber());
    }

    return (
        <div>
            <Header />
            <ToastContainer autoClose={500} hideProgressBar/>
            <div className='add-root'>
                <div style={{backgroundColor:"#EBD9B4"}} className='add-question'>
                    <Question number={question1}/>
                    <div style={{width:"10vw", textAlign:"center", textShadow:"black -5px 5px", color:"#638889", height:"inherit", fontSize:"15vw"}}><strong>&#45;</strong></div>
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
