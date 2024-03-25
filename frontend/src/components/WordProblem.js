import React from 'react'
import '../styles/WordProblem.css'

export default function WordProblem(props) {
  return (
    <div className='word-problem-root'>
      <h1>{props.question}</h1>
    </div>
  )
}
