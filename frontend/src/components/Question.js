import React from 'react'
import '../styles/Question.css'

export default function Question(props) {
  return (
    <div className='question-root'>
      <h1>{props.number}</h1>
    </div>
  )
}
