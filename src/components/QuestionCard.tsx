import React, { useState } from 'react';
import { Question } from '../utils';


type Properties = {
  questions: Question;
  setPoints: any;
  disable: boolean;
}
const QuestionCard:React.FC <Properties>= ({questions, setPoints, disable}) => {

  
  
  return (
      <div className="questionCard">
          <p>{questions.question}</p>
          {questions.options.map((element, index) => {
            return <div key={index}>
             {/* <button>{element}</button> */}
             <button disabled={disable} value={element} onClick={setPoints}>
              <span dangerouslySetInnerHTML={{__html: element}}></span>
             </button>
            </div>
          })}
      </div>
  )
}

export default QuestionCard;