import React, {useState} from 'react'
import '../styles/Answer.css'

export default function Answer(props) {
    const [inputValue, setInputValue] = useState('');

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            console.log(inputValue)
            // Process the answer here, for now, let's just clear the input field
            props.onEnterPressed();
            setInputValue('');
        }
    };
    return (
        <div className='answer-root'>
            <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} onKeyPress={handleKeyPress} className="answer-input" placeholder="Enter Answer" type="text" />
        </div>

    )
}