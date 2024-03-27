import React, { useEffect, useState } from 'react';
import '../styles/Settings.css';
import Header from '../components/Header';
import axios from 'axios';

export default function Settings() {
    const [correct, setCorrect] = useState(0);
    const [incorrect, setIncorrect] = useState(0);
    const [name, setName] = useState('');

    useEffect(() => {
        const fetchSettings = async () => {
            try {
                const response = await axios.get('http://localhost:3001/information-stats', {
                    params: {userToken: localStorage.getItem('token')}
                });
                setCorrect(parseInt(response.data["correctAnswers"]));
                setIncorrect(parseInt(response.data["inCorrectAnswers"]));
                setName(response.data["name"])
                console.log(response.data["name"])
            } catch (error) {
                console.error('Error fetching settings:', error);
            }
        };

        fetchSettings();
    }, []);

    return (
        <div>
            <Header />
            <div className='settings-root'>
                <div id="settings-left" className='settings'>
                    <h1 style={{ fontStyle: "italic", textDecoration: "underline" }}>Instructions</h1><br />
                    <ul className='list-of-rules'>
                        <li>Press Enter key to check answer</li>
                        <li>For a correct answer you will score +1</li>
                    </ul>
                </div>
                <div className='settings'>
                    <h1 style={{ fontStyle: "italic", textDecoration: "underline" }}>{name}'s performance</h1><br />
                    <ul className='list-of-rules'>
                        <li>Questions correctly answered: {correct}</li>
                        <li>Questions incorrectly answered: {incorrect}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
