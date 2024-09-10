import React from 'react'
import '../styles/WordProblem.css'

export default function WordProblem(props) {
  return (
    <div className='word-problem-root'>
        <p className='word-problem-question'>{props.question}</p>
    </div>
  )
}
