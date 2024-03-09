import React, { useState } from 'react';
import Header from '../components/Header'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Question from '../components/Question';
import Operator from '../components/Operator';
import '../styles/Compare.css'
import axios from 'axios';

export default function Comparison() {
    const [question1, setQuestion1] = useState(generateRandomNumber());
    const [question2, setQuestion2] = useState(generateRandomNumber());
    var correct = false;
    var flag = 0;

    const displaySuccess = () => {
        flag = 1;
        toast.success("Correct !", {
            position: "top-right",
        });
    }

    const displayError = () => {
        toast.error ("Incoorrect !", {
            position: "top-left",
        });
    }


    function generateRandomNumber() {
        return Math.floor(Math.random() * 100) + 1;
    }

     async function handleClickPressed(sign) {
        if(question1 < question2 && sign == "<"){
            correct = true;
            displaySuccess()
        }
        if(question1 > question2 && sign == ">"){
            correct = true;
            displaySuccess()
        }
        if(question1 == question2 && sign == "="){
            correct = true;
            displaySuccess()
        }
        if(!flag){
            displayError()
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
        <div>
            <Header />
            <ToastContainer autoClose={500} hideProgressBar/>
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