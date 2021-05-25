import React from 'react';
import { Question } from '../utils';


type Properties = {
  questions: Question;
}
const QuestionCard:React.FC <Properties>= ({questions}) => {
  
  return (
      <div>
          <p>{questions.question}</p>
          {questions.options.map((element, index) => {
            return <div key={index}>
             <button>{element}</button>
            </div>
          })}
      </div>
  )
}

export default QuestionCard;