import React from 'react'
import '../styles/Operator.css'

export default function Operator(props) {

    const handlePress = () => {
        console.log(props.sign)
        props.onClickPress(props.sign);
    }

    return (
        <div className='operator-root' onClick={handlePress}>
            <h3>{props.sign}</h3>
        </div>

    )
}