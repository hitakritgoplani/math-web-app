import React from 'react'
import '../styles/Operator.css'

export default function Operator(props) {

    const handlePress = () => {
        props.onClickPress();
    }

    return (
        <div className='operator-root' onClick={handlePress}>
            <h3>{props.sign}</h3>
        </div>

    )
}