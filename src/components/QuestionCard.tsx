import React from 'react';
import { Question } from '../utils';


type Properties = {
  questions: Question[];
}
const QuestionCard:React.FC <Properties>= (prpps) => {
  return (
    <div>
      <p>Question</p>
      <div>
        {prpps.questions.map((element, index) => {
          <div key={index}>
          <button >{element.question}</button>
          </div>
        })}
      </div>
    </div>
    
  )
}

export default QuestionCard;