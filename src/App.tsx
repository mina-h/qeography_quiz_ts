import React, { useState } from 'react';
import './App.css';

// components 
import InputForm from './components/InputForm';
import QuestionCard from './components/QuestionCard';

// helper functions
import { sendContinentAndGetQuestions } from './API';
import { Question } from './utils';





const App = () => {
  const [questions, setQuestions] = useState<Question[]>([]);

  const startQuiz = async (continent: string) => {
    console.log(continent);
    const data = await sendContinentAndGetQuestions(continent);
    setQuestions(data);
  }


  return (
    <div className="App">
      <InputForm startQuiz={startQuiz}/>
      <QuestionCard question={questions}/>
    </div>
  );
}

export default App;
